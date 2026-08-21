import { readFile, readdir, mkdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import YAML from "yaml"

const CONTENT = "content"
const GENERATED = "generated"

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name === ".obsidian" || entry.name === "_generated" || entry.name === "templates") continue
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(full)
  }
  return files
}

function parseBlocks(body, language) {
  const expression = new RegExp("```yaml\\s+" + language + "\\s*\\r?\\n([\\s\\S]*?)\\r?\\n```", "g")
  return [...body.matchAll(expression)].map((match) => YAML.parse(match[1]))
}

function parseNote(text, file, root) {
  const frontmatter = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/)
  if (!frontmatter) return { file, path: path.relative(path.join(root, CONTENT), file).replaceAll("\\", "/"), data: {}, body: text, blocks: {} }
  const body = text.slice(frontmatter[0].length)
  return {
    file,
    path: path.relative(path.join(root, CONTENT), file).replaceAll("\\", "/"),
    basename: path.basename(file, ".md"),
    data: YAML.parse(frontmatter[1]) ?? {},
    body,
    blocks: {
      rules: parseBlocks(body, "ontology-rule"),
      constraints: parseBlocks(body, "ontology-constraint"),
      tests: parseBlocks(body, "ontology-tests"),
    },
  }
}

function collectWikilinks(value, output = []) {
  if (typeof value === "string") {
    for (const match of value.matchAll(/\[\[([^\]]+)\]\]/g)) output.push(match[1])
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectWikilinks(item, output))
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectWikilinks(item, output))
  }
  return output
}

function targetName(link) {
  return link.split("|")[0].split("#")[0].trim().replace(/\.md$/i, "")
}

function isDateKey(key) {
  return new Set([
    "created", "modified", "created_at", "approved_at", "evaluated_at", "retrieved_at", "detected_at",
    "valid_from", "valid_to", "effective_from", "effective_to", "superseded_at", "next_review_due",
    "publication_date", "decision_date", "consolidated_as_of", "source_consolidated_as_of",
  ]).has(key)
}

function scalarDateValid(value) {
  if (value === null || value === undefined || value === "") return true
  if (value instanceof Date) return !Number.isNaN(value.valueOf())
  if (typeof value !== "string") return false
  return /^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value) && !Number.isNaN(Date.parse(value))
}

function conditionMatches(condition, subject) {
  if (condition.subject_type && subject.type !== condition.subject_type) return false
  if (!condition.fact) return true
  const value = subject[condition.fact]
  if (Object.hasOwn(condition, "equals") && value !== condition.equals) return false
  if (condition.in && !condition.in.includes(value)) return false
  if (Object.hasOwn(condition, "exists") && condition.exists !== (value !== undefined && value !== null && value !== "")) return false
  return true
}

function conditionsMatch(when, subject) {
  if (!when) return true
  if (when.all && !when.all.every((condition) => conditionMatches(condition, subject))) return false
  if (when.any && !when.any.some((condition) => conditionMatches(condition, subject))) return false
  return true
}

export function evaluateRuleBlock(rule, subject) {
  if (!conditionsMatch(rule.when, subject)) return { matched: false, values: {} }
  const values = {}
  for (const assertion of rule.then?.assert ?? []) values[assertion.predicate] = assertion.object
  for (const derivation of rule.then?.derive ?? []) values[derivation.field] = derivation.value
  return { matched: true, values }
}

function stableGapId(constraintId, subjectId, index) {
  const hash = crypto.createHash("sha256").update(`${constraintId}|${subjectId}|${index}`).digest("hex").slice(0, 10).toUpperCase()
  return `GAP-${hash}`
}

function serializeNode(note) {
  return { id: note.data.id, type: note.data.type, title: note.data.title, path: note.path, data: note.data }
}

function yamlLinkId(value) {
  if (typeof value !== "string") return null
  const match = value.match(/^\[\[([^\]]+)\]\]$/)
  if (!match) return null
  const alias = match[1].split("|")[1]
  return alias?.trim() ?? null
}

export async function compileOntology({ root = process.cwd(), write = true, relevantDate = new Date().toISOString().slice(0, 10) } = {}) {
  const contentRoot = path.join(root, CONTENT)
  const files = await walk(contentRoot)
  const parsed = await Promise.all(files.map(async (file) => parseNote(await readFile(file, "utf8"), file, root)))
  const notes = parsed.filter((note) => note.data.id || note.data.type)
  const errors = []
  const warnings = []
  const byId = new Map()
  const lookup = new Map()

  for (const note of notes) {
    if (!note.data.id) errors.push({ code: "SCHEMA-ID", path: note.path, message: "Semantic note has no id" })
    if (!note.data.type) errors.push({ code: "SCHEMA-TYPE", path: note.path, message: "Semantic note has no type" })
    if (note.data.id && byId.has(note.data.id)) errors.push({ code: "SCHEMA-DUPLICATE-ID", id: note.data.id, path: note.path, message: `Duplicate id ${note.data.id}` })
    if (note.data.id) byId.set(note.data.id, note)
    const canonicalPath = note.path?.replace(/\.md$/i, "")
    for (const key of [note.basename, canonicalPath, canonicalPath ? `/${canonicalPath}` : null, note.data.id, note.data.title, ...(note.data.aliases ?? [])].filter(Boolean)) lookup.set(String(key).toLowerCase(), note)
  }

  const classNotes = notes.filter((note) => note.data.type === "ontology-class")
  const classes = new Map(classNotes.map((note) => [note.data.class_key, note]))
  const infrastructureTypes = new Set(["ontology-class", "relation-definition", "controlled-vocabulary", "meta-page", "view", "landing-page"])
  for (const note of notes) {
    if (!classes.has(note.data.type) && !infrastructureTypes.has(note.data.type)) errors.push({ code: "SCHEMA-UNKNOWN-TYPE", id: note.data.id, path: note.path, message: `Unknown note type ${note.data.type}` })
    for (const [key, value] of Object.entries(note.data)) {
      if (!isDateKey(key)) continue
      const values = Array.isArray(value) ? value : [value]
      for (const item of values) if (!scalarDateValid(item)) errors.push({ code: "SCHEMA-DATE", id: note.data.id, path: note.path, message: `Invalid date in ${key}: ${item}` })
    }
  }

  const relationNotes = notes.filter((note) => note.data.type === "relation-definition")
  const relations = new Map(relationNotes.map((note) => [note.data.predicate, note.data]))
  const parentCache = new Map()
  const parentKeys = (type) => {
    if (parentCache.has(type)) return parentCache.get(type)
    const result = new Set([type])
    const note = classes.get(type)
    for (const link of note?.data.parent_classes ?? []) {
      const id = yamlLinkId(link)
      const parent = id ? byId.get(id)?.data.class_key : null
      if (parent && !result.has(parent)) parentKeys(parent).forEach((item) => result.add(item))
    }
    parentCache.set(type, result)
    return result
  }
  const typeIs = (actual, expected) => parentKeys(actual).has(expected)

  for (const note of parsed) {
    const links = collectWikilinks(note.data).concat(collectWikilinks(note.body))
    for (const raw of links) {
      const target = targetName(raw).toLowerCase()
      if (!lookup.has(target)) errors.push({ code: "LINK-UNRESOLVED", id: note.data.id, path: note.path, message: `Unresolved wikilink [[${raw}]]` })
    }
  }

  const edges = []
  for (const note of notes) {
    for (const [predicate, value] of Object.entries(note.data)) {
      if (!relations.has(predicate)) continue
      for (const raw of collectWikilinks(value)) {
        const objectNote = lookup.get(targetName(raw).toLowerCase())
        if (!objectNote) continue
        edges.push({ subject: note.data.id, predicate, object: objectNote.data.id, source_note: note.path })
      }
    }
  }

  for (const edge of edges) {
    const def = relations.get(edge.predicate)
    const subject = byId.get(edge.subject)
    const object = byId.get(edge.object)
    if (def.domain?.length && !def.domain.some((domain) => typeIs(subject.data.type, domain))) errors.push({ code: "RELATION-DOMAIN", id: subject.data.id, path: subject.path, message: `${edge.predicate} does not allow domain ${subject.data.type}` })
    if (def.range?.length && !def.range.some((range) => typeIs(object.data.type, range))) errors.push({ code: "RELATION-RANGE", id: subject.data.id, path: subject.path, message: `${edge.predicate} does not allow range ${object.data.type}` })
  }

  const assuranceLevels = new Set(["hard", "advisory", "review-trigger"])
  const normativeBases = new Set(["regulatory-source", "internal-policy", "ontology-governance"])
  const confidenceLevels = new Set(["high", "medium", "low"])
  for (const note of notes.filter((item) => ["rule", "constraint"].includes(item.data.type) && item.data.status === "active")) {
    if (!assuranceLevels.has(note.data.assurance_level)) errors.push({ code: "ASSURANCE-LEVEL", id: note.data.id, path: note.path, message: "Active rule or constraint requires a valid assurance_level" })
    if (!normativeBases.has(note.data.normative_basis)) errors.push({ code: "NORMATIVE-BASIS", id: note.data.id, path: note.path, message: "Active rule or constraint requires a valid normative_basis" })
    if (!confidenceLevels.has(note.data.confidence)) errors.push({ code: "CONFIDENCE-LEVEL", id: note.data.id, path: note.path, message: "Active rule or constraint requires a valid confidence" })
    if (typeof note.data.human_review_required !== "boolean") errors.push({ code: "HUMAN-REVIEW-METADATA", id: note.data.id, path: note.path, message: "Active rule or constraint must declare human_review_required" })
  }

  const outgoing = new Map()
  const incoming = new Map()
  for (const edge of edges) {
    if (!outgoing.has(edge.subject)) outgoing.set(edge.subject, [])
    if (!incoming.has(edge.object)) incoming.set(edge.object, [])
    outgoing.get(edge.subject).push(edge)
    incoming.get(edge.object).push(edge)
  }

  const derivedAssertions = []
  const ruleTestResults = []
  for (const note of notes.filter((item) => item.data.type === "rule" && item.data.status === "active")) {
    if (note.blocks.rules.length !== 1) errors.push({ code: "RULE-BLOCK", id: note.data.id, path: note.path, message: "Active rule must have exactly one ontology-rule block" })
    const rule = note.blocks.rules[0]
    if (!rule) continue
    const applicable = notes.filter((subject) => conditionsMatch(rule.when, subject.data))
    for (const subject of applicable) {
      const evaluated = evaluateRuleBlock(rule, subject.data)
      for (const [predicate, object] of Object.entries(evaluated.values)) {
        derivedAssertions.push({
          id: `DA-${crypto.createHash("sha256").update(`${note.data.id}|${subject.data.id}|${predicate}|${JSON.stringify(object)}`).digest("hex").slice(0, 12).toUpperCase()}`,
          type: "derived-assertion", subject: subject.data.id, predicate, object,
          derived_by_rule: note.data.id, source_provisions: (outgoing.get(note.data.id) ?? []).filter((edge) => ["derived_from", "source_provisions"].includes(edge.predicate)).map((edge) => edge.object),
          assurance_level: note.data.assurance_level, normative_basis: note.data.normative_basis, confidence: note.data.confidence,
          human_review_required: note.data.human_review_required,
          evaluated_at: relevantDate,
        })
      }
    }
    const cases = note.blocks.tests.flatMap((block) => block.cases ?? [])
    if (cases.length < 3) errors.push({ code: "RULE-TEST-COVERAGE", id: note.data.id, path: note.path, message: "Active rule requires positive, negative and boundary cases" })
    for (const testCase of cases) {
      const actual = evaluateRuleBlock(rule, testCase.context)
      let passed = testCase.expect_no_match ? !actual.matched : actual.matched
      for (const [key, expected] of Object.entries(testCase.expect ?? {})) passed &&= Object.is(actual.values[key], expected)
      ruleTestResults.push({ rule: note.data.id, case: testCase.name, passed, expected: testCase.expect ?? null, actual })
      if (!passed) errors.push({ code: "RULE-TEST", id: note.data.id, path: note.path, message: `Rule test failed: ${testCase.name}` })
    }
  }

  const validationResults = []
  for (const note of notes.filter((item) => item.data.type === "constraint" && item.data.status === "active")) {
    if (note.blocks.constraints.length !== 1) errors.push({ code: "CONSTRAINT-BLOCK", id: note.data.id, path: note.path, message: "Active constraint must have exactly one ontology-constraint block" })
    const constraint = note.blocks.constraints[0]
    if (!constraint) continue
    for (const subject of notes.filter((item) => typeIs(item.data.type, constraint.target_type) && conditionsMatch(constraint.when, item.data))) {
      const failures = []
      for (const check of constraint.checks ?? []) {
        if (check.field) {
          const present = subject.data[check.field] !== undefined && subject.data[check.field] !== null && subject.data[check.field] !== "" && (!Array.isArray(subject.data[check.field]) || subject.data[check.field].length > 0)
          if (check.present === true && !present) failures.push(`Required field ${check.field} is missing`)
        }
        if (check.relation) {
          const count = (outgoing.get(subject.data.id) ?? []).filter((edge) => edge.predicate === check.relation).length
          if (check.min !== undefined && count < check.min) failures.push(`Relation ${check.relation} has ${count}; minimum is ${check.min}`)
          if (check.max !== undefined && count > check.max) failures.push(`Relation ${check.relation} has ${count}; maximum is ${check.max}`)
        }
      }
      failures.forEach((message, index) => validationResults.push({
        id: stableGapId(note.data.id, subject.data.id, index), type: note.data.assurance_level === "hard" ? "compliance-gap" : "advisory-finding", constraint: note.data.id,
        subject: subject.data.id, severity: note.data.severity ?? "major", status: "open", detected_at: relevantDate, message,
        assurance_level: note.data.assurance_level, normative_basis: note.data.normative_basis, confidence: note.data.confidence,
        human_review_required: note.data.human_review_required, blocking: note.data.assurance_level === "hard",
      }))
    }
  }

  const freshnessResults = []
  const asOf = new Date(`${relevantDate}T00:00:00Z`)
  for (const note of notes.filter((item) => item.data.official_url)) {
    const retrieved = new Date(note.data.retrieved_at)
    const ageDays = Math.floor((asOf - retrieved) / 86400000)
    const interval = Number(note.data.review_interval_days ?? 180)
    const status = note.data.superseded_by?.length ? "superseded" : ageDays > interval ? "stale" : "current"
    freshnessResults.push({ source: note.data.id, retrieved_at: note.data.retrieved_at, age_days: ageDays, review_interval_days: interval, status })
    if (status !== "current") warnings.push({ code: "SOURCE-FRESHNESS", id: note.data.id, path: note.path, message: `Source is ${status}` })
  }

  const complianceGaps = validationResults.filter((result) => result.blocking)
  const advisoryFindings = validationResults.filter((result) => !result.blocking)
  const graph = {
    metadata: { specification: "SPEC-MDR-MFR-ONTOLOGY-001", generated_at: new Date().toISOString(), relevant_date: relevantDate, canonical_source: "content/**/*.md" },
    nodes: notes.map(serializeNode), edges,
    assertions: notes.filter((note) => note.data.type === "assertion").map(serializeNode),
    derived_assertions: derivedAssertions, validation_results: validationResults, compliance_gaps: complianceGaps, advisory_findings: advisoryFindings,
    source_freshness: freshnessResults, rule_test_results: ruleTestResults,
    diagnostics: { errors, warnings },
  }

  const api = { root, graph, notes, byId, lookup, outgoing, incoming, relations, classes, typeIs }
  if (write) await writeOutputs(api)
  return api
}

export function getNeighbors(api, id, predicates = null, depth = 1) {
  const visited = new Set([id])
  let frontier = [id]
  const foundEdges = []
  for (let level = 0; level < depth; level += 1) {
    const next = []
    for (const current of frontier) {
      const edges = [...(api.outgoing.get(current) ?? []), ...(api.incoming.get(current) ?? [])]
      for (const edge of edges) {
        if (predicates && !predicates.includes(edge.predicate)) continue
        foundEdges.push(edge)
        const other = edge.subject === current ? edge.object : edge.subject
        if (!visited.has(other)) { visited.add(other); next.push(other) }
      }
    }
    frontier = next
  }
  return { nodes: [...visited].map((nodeId) => api.byId.get(nodeId)).filter(Boolean).map(serializeNode), edges: [...new Map(foundEdges.map((edge) => [`${edge.subject}|${edge.predicate}|${edge.object}`, edge])).values()] }
}

function availableContext(api, subject, field, relevantDate) {
  const relationAliases = {
    manufacturer: "manufactured_by", configuration_baseline: "has_baseline", technical_documentation: "has_technical_documentation",
    certificate_state: "has_certificate", clinical_evidence: "has_clinical_evaluation", device_identity: null,
  }
  if (field === "relevant_date") return Boolean(relevantDate)
  if (field === "device_identity") return Boolean(subject.data.id)
  if (subject.data[field] !== undefined && subject.data[field] !== null && subject.data[field] !== "") return true
  const predicate = relationAliases[field]
  return predicate ? (api.outgoing.get(subject.data.id) ?? []).some((edge) => edge.predicate === predicate) : false
}

export function createContextPacket(api, questionId, subjectId, relevantDate = api.graph.metadata.relevant_date) {
  const question = api.byId.get(questionId)
  const subject = api.byId.get(subjectId)
  if (!question || question.data.type !== "competency-question") throw new Error(`Unknown competency question ${questionId}`)
  if (!subject) throw new Error(`Unknown subject ${subjectId}`)
  const neighborhood = getNeighbors(api, subjectId, null, 2)
  const neighborhoodIds = new Set(neighborhood.nodes.map((node) => node.id))
  const questionSources = (api.outgoing.get(questionId) ?? []).filter((edge) => ["uses_source", "source_provisions"].includes(edge.predicate)).map((edge) => edge.object)
  const evidence = neighborhood.nodes.filter((node) => api.typeIs(node.type, "evidence-item"))
  const findings = api.graph.validation_results.filter((result) => neighborhoodIds.has(result.subject))
  const gaps = findings.filter((result) => result.blocking)
  const derived = api.graph.derived_assertions.filter((assertion) => neighborhoodIds.has(assertion.subject))
  const missing = (question.data.requires_context ?? []).filter((field) => !availableContext(api, subject, field, relevantDate))
  const manufacturer = (api.outgoing.get(subjectId) ?? []).find((edge) => edge.predicate === "manufactured_by")?.object
  return {
    question: { id: questionId, text: question.data.title, requirement_class: question.data.requirement_class },
    resolved_entities: { subject: subjectId, manufacturer: manufacturer ?? null },
    relevant_date: relevantDate,
    facts: { subject: subject.data, neighborhood: neighborhood.nodes.map((node) => ({ id: node.id, type: node.type, title: node.title })) },
    derived_facts: derived,
    rules_evaluated: [...new Set(derived.map((item) => item.derived_by_rule))],
    constraint_results: findings,
    evidence: evidence.map((item) => ({ id: item.id, title: item.title, status: item.data.status })),
    open_gaps: gaps,
    sources: questionSources.map((id) => {
      const source = api.byId.get(id)
      return source ? { id, title: source.data.title, normative_status: source.data.normative_status, official_url: source.data.official_url } : { id }
    }),
    source_authority_notes: "Binding legal provenance is presented before non-binding guidance and internal evidence.",
    answer_pattern: (api.outgoing.get(questionId) ?? []).find((edge) => edge.predicate === "answer_pattern")?.object ?? null,
    ontology_path: question.data.ontology_path,
    missing_facts: missing,
    assumptions: [],
    human_review_required: missing.length > 0 || gaps.some((gap) => ["major", "critical"].includes(gap.severity)) || findings.some((finding) => finding.human_review_required) || derived.some((item) => item.human_review_required),
  }
}

async function writeOutputs(api) {
  const generatedRoot = path.join(api.root, GENERATED)
  await rm(generatedRoot, { recursive: true, force: true })
  await mkdir(generatedRoot, { recursive: true })
  await writeFile(path.join(generatedRoot, "graph.json"), `${JSON.stringify(api.graph, null, 2)}\n`)
  await writeFile(path.join(generatedRoot, "id-registry.json"), `${JSON.stringify(Object.fromEntries([...api.byId].map(([id, note]) => [id, note.path])), null, 2)}\n`)
  const report = [
    "# Ontology validation report", "", `Generated: ${api.graph.metadata.generated_at}`, "",
    `- Nodes: ${api.graph.nodes.length}`, `- Edges: ${api.graph.edges.length}`,
    `- Derived assertions: ${api.graph.derived_assertions.length}`, `- Open compliance gaps: ${api.graph.compliance_gaps.length}`, `- Advisory findings: ${api.graph.advisory_findings.length}`,
    `- Errors: ${api.graph.diagnostics.errors.length}`, `- Warnings: ${api.graph.diagnostics.warnings.length}`, "",
    "## Errors", "", ...(api.graph.diagnostics.errors.length ? api.graph.diagnostics.errors.map((item) => `- **${item.code}** ${item.id ?? item.path}: ${item.message}`) : ["None."]), "",
    "## Warnings", "", ...(api.graph.diagnostics.warnings.length ? api.graph.diagnostics.warnings.map((item) => `- **${item.code}** ${item.id ?? item.path}: ${item.message}`) : ["None."]), "",
  ].join("\n")
  await writeFile(path.join(generatedRoot, "validation-report.md"), report)

  const generatedContent = path.join(api.root, CONTENT, "07_Other", "_generated")
  await rm(generatedContent, { recursive: true, force: true })
  const gapDir = path.join(generatedContent, "compliance-gaps")
  const findingDir = path.join(generatedContent, "validation-findings")
  const contextDir = path.join(generatedContent, "question-context")
  const deviceDir = path.join(generatedContent, "device-compliance")
  const requirementDir = path.join(generatedContent, "requirement-compliance")
  const changeDir = path.join(generatedContent, "change-impact")
  await mkdir(gapDir, { recursive: true })
  await mkdir(findingDir, { recursive: true })
  await mkdir(contextDir, { recursive: true })
  await mkdir(deviceDir, { recursive: true })
  await mkdir(requirementDir, { recursive: true })
  await mkdir(changeDir, { recursive: true })
  for (const finding of api.graph.validation_results) {
    const subject = api.byId.get(finding.subject)
    const constraint = api.byId.get(finding.constraint)
    const directory = finding.blocking ? gapDir : findingDir
    await writeFile(path.join(directory, `${finding.id}.md`), `---\n${JSON.stringify({ ...finding, draft: false, generated: true }, null, 2)}\n---\n\n# ${finding.id}: ${constraint?.data.title ?? finding.constraint}\n\n- Subject: ${subject?.data.title ?? finding.subject} (\`${finding.subject}\`)\n- Assurance level: \`${finding.assurance_level}\`\n- Blocking: \`${finding.blocking}\`\n- Severity: \`${finding.severity}\`\n- Status: \`${finding.status}\`\n- Finding: ${finding.message}\n`)
  }
  const findingIndex = (title, introduction, findings, route) => `---\n${JSON.stringify({ title, generated: true, draft: false }, null, 2)}\n---\n\n# ${title}\n\n${introduction}\n\n${findings.length ? findings.map((finding) => `- [${finding.id}](${route}/${finding.id.toLowerCase()}) — ${finding.message}`).join("\n") : "No findings at the declared relevant date."}\n`
  await writeFile(path.join(gapDir, "index.md"), findingIndex("Blocking compliance gaps", "Hard-constraint failures that can block a lifecycle decision until resolved or explicitly justified.", api.graph.compliance_gaps, "/07_other/_generated/compliance-gaps"))
  await writeFile(path.join(findingDir, "index.md"), findingIndex("Advisory validation findings", "Non-blocking data-quality findings that require review but do not assert regulatory non-compliance.", api.graph.advisory_findings, "/07_other/_generated/validation-findings"))
  for (const question of api.notes.filter((note) => note.data.type === "competency-question")) {
    const packet = createContextPacket(api, question.data.id, "DEVC-0001")
    await writeFile(path.join(contextDir, `${question.data.id}.md`), `---\n${JSON.stringify({ id: `CTX-${question.data.id}-DEVC-0001`, type: "generated-context", title: `${question.data.id} context for DEVC-0001`, generated: true, draft: false }, null, 2)}\n---\n\n# ${question.data.title}\n\n\`\`\`json\n${JSON.stringify(packet, null, 2)}\n\`\`\`\n`)
    await mkdir(path.join(generatedRoot, "question-context"), { recursive: true })
    await writeFile(path.join(generatedRoot, "question-context", `${question.data.id}.json`), `${JSON.stringify(packet, null, 2)}\n`)
  }
  const device = api.byId.get("DEVC-0001")
  if (device) {
    const localFindings = api.graph.validation_results.filter((finding) => getNeighbors(api, device.data.id, null, 2).nodes.some((node) => node.id === finding.subject))
    const localGaps = localFindings.filter((finding) => finding.blocking)
    const related = (predicate) => (api.outgoing.get(device.data.id) ?? []).filter((edge) => edge.predicate === predicate).map((edge) => api.byId.get(edge.object)?.data.title ?? edge.object)
    const list = (values) => values.length ? values.map((value) => `- ${value}`).join("\n") : "- Not represented"
    await writeFile(path.join(deviceDir, `${device.data.id}.md`), `---\n${JSON.stringify({ id: `VIEW-${device.data.id}-COMPLIANCE`, type: "generated-device-view", title: `${device.data.title} compliance`, generated: true, draft: false }, null, 2)}\n---\n\n# ${device.data.title}: compliance\n\n## Device identity\n\n- Stable ID: \`${device.data.id}\`\n- Manufacturer: ${related("manufactured_by").join(", ")}\n- Basic UDI-DI / UDI-DI: ${related("identified_by").join(", ")}\n\n## Intended purpose and classification\n\n- Intended purpose: ${related("has_intended_purpose").join(", ")}\n- Risk class: \`${device.data.risk_class}\`\n- Classification decision: ${related("classified_by").join(", ")}\n- Lifecycle state: \`${device.data.lifecycle_state}\`\n\n## Applicable requirements and compliance\n\n${list(related("has_applicable_requirement"))}\n\n- Blocking compliance gaps in two-hop neighbourhood: ${localGaps.length}\n- Advisory findings in two-hop neighbourhood: ${localFindings.length - localGaps.length}\n- Release prerequisites met: \`${device.data.release_prerequisites_met}\`\n\n## Risk summary\n\n${list(related("has_hazard"))}\n\n## Clinical evidence state\n\n${list(related("has_clinical_evaluation"))}\n\n## Technical-documentation state\n\n${list(related("has_technical_documentation"))}\n\n## Conformity and certificate state\n\n${list(related("has_certificate"))}\n\n## PMS and PSUR state\n\n${list(related("covered_by_pms_plan"))}\n\n- Derived assertions: ${api.graph.derived_assertions.filter((item) => item.subject === device.data.id).length}\n\n## Open changes\n\n${list(related("has_change"))}\n\n## Upcoming due dates and freshness\n\nSee the generated source-freshness report and certificate validity fields.\n`)
  }
  for (const requirement of api.notes.filter((note) => api.typeIs(note.data.type, "regulatory-requirement"))) {
    const instances = (api.incoming.get(requirement.data.id) ?? []).filter((edge) => edge.predicate === "instantiates_requirement").map((edge) => api.byId.get(edge.subject)).filter(Boolean)
    const sources = (api.outgoing.get(requirement.data.id) ?? []).filter((edge) => edge.predicate === "derived_from").map((edge) => api.byId.get(edge.object)?.data.title ?? edge.object)
    const rows = instances.map((instance) => {
      const evidence = (api.outgoing.get(instance.data.id) ?? []).filter((edge) => edge.predicate === "satisfied_by").map((edge) => edge.object)
      const gaps = api.graph.validation_results.filter((gap) => gap.subject === instance.data.id)
      return `| ${instance.data.id} | ${instance.data.applicable} | ${instance.data.compliance_method ?? "unknown"} | ${instance.data.compliance_status ?? "not-assessed"} | ${evidence.join(", ") || "none"} | ${gaps.map((gap) => gap.id).join(", ") || "none"} |`
    })
    await writeFile(path.join(requirementDir, `${requirement.data.id}.md`), `---\n${JSON.stringify({ id: `VIEW-${requirement.data.id}-COMPLIANCE`, type: "generated-requirement-view", title: `${requirement.data.title} compliance`, generated: true, draft: false }, null, 2)}\n---\n\n# ${requirement.data.title}\n\n## Source and provision\n\n${sources.map((source) => `- ${source}`).join("\n") || "- Not represented"}\n\n## Applicability, method, evidence and gaps\n\n| Instance | Applicable | Compliance method | Status | Evidence | Gaps |\n|---|---:|---|---|---|---|\n${rows.join("\n") || "| none | — | — | — | — | — |"}\n`)
  }
  for (const change of api.notes.filter((note) => note.data.type === "change")) {
    const impacts = (api.outgoing.get(change.data.id) ?? []).filter((edge) => edge.predicate === "impacts").map((edge) => ({ id: edge.object, title: api.byId.get(edge.object)?.data.title ?? edge.object, type: api.byId.get(edge.object)?.data.type ?? "unknown" }))
    const assessments = (api.outgoing.get(change.data.id) ?? []).filter((edge) => edge.predicate === "has_impact_assessment").map((edge) => edge.object)
    await writeFile(path.join(changeDir, `${change.data.id}.md`), `---\n${JSON.stringify({ id: `VIEW-${change.data.id}-IMPACT`, type: "generated-change-view", title: `${change.data.title} impact`, generated: true, draft: false }, null, 2)}\n---\n\n# ${change.data.title}: impact\n\n- Change type: \`${change.data.change_type}\`\n- Status: \`${change.data.status}\`\n- Affected configuration: ${(api.outgoing.get(change.data.id) ?? []).filter((edge) => edge.predicate === "concerns").map((edge) => edge.object).join(", ")}\n- Impact assessment: ${assessments.join(", ") || "missing"}\n- Mandatory impact domains reviewed: ${(change.data.impact_domains ?? []).join(", ") || "not recorded"}\n\n## Impacted nodes\n\n${impacts.map((item) => `- ${item.id} — ${item.title} (\`${item.type}\`)`).join("\n") || "- None"}\n\n## Derived reassessments\n\n${api.graph.derived_assertions.filter((item) => item.subject === change.data.id).map((item) => `- \`${item.predicate}\`: \`${item.object}\` via \`${item.derived_by_rule}\``).join("\n") || "- None"}\n`)
  }
  const freshnessLines = api.graph.source_freshness.map((item) => `| ${item.source} | ${item.retrieved_at} | ${item.age_days} | ${item.review_interval_days} | ${item.status} |`)
  await writeFile(path.join(generatedContent, "source-freshness.md"), `---\n${JSON.stringify({ id: "VIEW-GENERATED-SOURCE-FRESHNESS", type: "generated-source-view", title: "Generated source freshness", generated: true, draft: false }, null, 2)}\n---\n\n# Source freshness\n\n| Source | Retrieved | Age (days) | Review interval | Status |\n|---|---|---:|---:|---|\n${freshnessLines.join("\n")}\n`)
}
