import test from "node:test"
import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import { compileOntology, createContextPacket } from "../scripts/lib/ontology.mjs"

const api = await compileOntology({ write: false, relevantDate: "2026-08-14" })

test("the vault uses the role-based top-level structure", async () => {
  const entries = await readdir(new URL("../content/", import.meta.url), { withFileTypes: true })
  const directories = entries.filter((entry) => entry.isDirectory() && entry.name !== ".obsidian").map((entry) => entry.name).sort()
  assert.deepEqual(directories, [
    "00-Ontology",
    "01-Ontology instances",
    "02-Sources",
    "04-Views",
    "05-Questions",
    "06-Infpump FlowGuard ontology notes",
    "07_Other",
  ])

  const instanceSections = await readdir(new URL("../content/01-Ontology%20instances/", import.meta.url), { withFileTypes: true })
  assert.deepEqual(instanceSections.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort(), [
    "02-organisations",
    "03-devices",
    "04-requirements",
    "05-risk",
    "06-clinical",
    "07-qms",
    "08-technical-documentation",
    "09-conformity",
    "10-traceability",
    "11-post-market",
    "12-changes",
    "13-supply-continuity",
  ])

  const otherSections = await readdir(new URL("../content/07_Other/", import.meta.url), { withFileTypes: true })
  assert.deepEqual(otherSections.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort(), ["00-Meta", "Use-case demonstrations", "_generated"])
})

test("schema, links, predicates, domain and range are valid", () => {
  assert.equal(api.graph.diagnostics.errors.length, 0, JSON.stringify(api.graph.diagnostics.errors.slice(0, 10), null, 2))
  assert.ok(api.graph.nodes.length >= 450)
  assert.ok(api.graph.edges.length >= 150)
})

test("the full competency-question catalogue is executable", () => {
  const questions = api.notes.filter((note) => note.data.type === "competency-question")
  assert.equal(questions.length, 90)
  for (const question of questions) {
    assert.ok(question.data.answer_pattern)
    assert.ok(question.data.starts_from.length)
    assert.ok(question.data.traverses.length)
    question.data.traverses.forEach((predicate) => assert.ok(api.relations.has(predicate), `${question.data.id}: ${predicate}`))
    assert.ok((api.outgoing.get(question.data.id) ?? []).some((edge) => edge.predicate === "uses_source"))
    const packet = createContextPacket(api, question.data.id, "DEVC-0001", "2026-08-14")
    assert.equal(packet.question.id, question.data.id)
    assert.ok(packet.answer_pattern)
    assert.ok(Array.isArray(packet.missing_facts))
    assert.equal(packet.assumptions.length, 0)
  }
})

test("every website view provides actionable navigation", () => {
  const views = api.notes.filter((note) => note.data.type === "view")
  assert.equal(views.length, 16)
  for (const view of views) {
    const wikilinks = [...view.body.matchAll(/\[\[[^\]]+\]\]/g)]
    const markdownLinks = [...view.body.matchAll(/\[[^\]]+\]\(\/[^)]+\)/g)]
    assert.ok(wikilinks.length + markdownLinks.length >= 2, `${view.data.id} needs actionable routes`)
    if (view.data.id !== "VIEW-QUESTION-INDEX") assert.match(view.body, /## Explore/, `${view.data.id} needs an Explore section`)
  }
  const requirements = api.byId.get("VIEW-REQUIREMENT-EXPLORER").body
  assert.match(requirements, /\/01-ontology-instances\/04-requirements\/gspr\//)
  assert.match(requirements, /\/01-ontology-instances\/04-requirements\/instances\//)
  assert.match(requirements, /\/07_other\/_generated\/requirement-compliance\//)
})

test("five high-impact use cases are assessed and executable as demonstrations", () => {
  const demos = api.notes.filter((note) => note.data.type === "use-case-demonstration")
  assert.equal(demos.length, 5)
  assert.deepEqual(demos.map((note) => note.data.use_case_number).sort((a, b) => a - b), [2, 3, 5, 8, 18])
  for (const demo of demos) {
    assert.match(demo.body, /## Manufacturer question/)
    assert.match(demo.body, /## Why this use case was selected/)
    assert.match(demo.body, /## Demonstration/)
    assert.match(demo.body, /## Result/)
    assert.match(demo.body, /## Reasoning trace/)
    assert.match(demo.body, /## Human-review boundary/)
  }

  const assessment = api.byId.get("UC-ASSESS-001").body
  for (let number = 1; number <= 19; number += 1) assert.match(assessment, new RegExp(`UC${number}\\b`))
  assert.match(api.byId.get("UC-DEMO-02").body, /GAP-E39769DDAA/)
  assert.match(api.byId.get("UC-DEMO-03").body, /release_prerequisites_met/)
  assert.match(api.byId.get("UC-DEMO-05").body, /requires_regulatory_reassessment/)
  assert.match(api.byId.get("UC-DEMO-08").body, /maximum update interval/i)
  assert.match(api.byId.get("UC-DEMO-18").body, /device_type/)
})

test("the infusion-pump core and architecture extensions are complete and use established classes", () => {
  const notes = api.notes.filter((note) => note.path.startsWith("06-Infpump FlowGuard ontology notes/") && note.data.id)
  assert.equal(notes.length, 315)
  assert.equal(new Set(notes.map((note) => note.data.type)).size, 29)
  for (const note of notes) {
    assert.ok(api.classes.has(note.data.type), `${note.data.id} uses an unknown ontology class`)
    assert.ok(note.data.aliases.some((alias) => alias.startsWith(`${note.data.id}-`)), `${note.data.id} lacks its root-level filename alias`)
    assert.ok(note.data.technical_file, `${note.data.id} has no technical-file name`)
    assert.equal(note.data.technical_file_identifier, note.data.id)
    assert.match(note.body, /## Semantic role/)
    assert.match(note.body, /## Traceability/)
    assert.match(note.body, /## Note/)
    assert.ok(note.body.indexOf("## Note") < note.body.indexOf("## Traceability"), `${note.data.id} must place Traceability under Note`)
    const traceability = note.body.match(/## Traceability\r?\n\r?\n([\s\S]*)$/)?.[1]
    assert.ok(traceability, `${note.data.id} lacks a Traceability body`)
    const traceabilityProse = traceability.split(/```mermaid/)[0].trim()
    const traceabilityParagraphs = traceabilityProse.split(/\r?\n\s*\r?\n/).filter((paragraph) => paragraph.trim())
    assert.ok(traceabilityParagraphs.length >= 1 && traceabilityParagraphs.length <= 3, `${note.data.id} needs 1–3 traceability paragraphs`)
    assert.match(traceability, /Previous dependenc|previous ontology-note dependency/)
    assert.match(traceability, /Succeeding dependenc|succeeding ontology-note dependency/)
    assert.match(traceability, /\[\[06-Infpump FlowGuard ontology notes\//, `${note.data.id} traceability lacks an ontology-note link`)
    assert.match(traceability, /```mermaid\r?\nflowchart LR/)
    assert.match(traceability, new RegExp(`CURRENT\\["${note.data.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<br\/>`), `${note.data.id} dependency diagram lacks its current note`)
    for (const key of Object.keys(note.data)) assert.match(note.body, new RegExp(`\\*\\*${key}:\\*\\*`), `${note.data.id} does not render ${key}`)
    assert.doesNotMatch(note.body, /## Device context/)
    assert.doesNotMatch(note.body, /## Technical-file reference/)
    assert.doesNotMatch(note.body, /## Relationships/)
    assert.doesNotMatch(note.body, /## Regulatory significance/)
    assert.doesNotMatch(note.body, /## Review boundary/)
  }
  const risk = api.byId.get("RISK-PUMP-001")
  assert.equal(risk.data.risk_matrix_identifier, "RISK-PUMP-001")
  assert.match(risk.data.technical_file, /Risk Analysis and Risk Matrix\.xlsx/)

  const batteryWorkflowStatuses = new Set([
    "CRI-PUMP-051", "CIA-PUMP-001", "SIGNAL-PUMP-001", "RCM-PUMP-013", "EVD-PUMP-007", "RISK-PUMP-013", "SUP-PUMP-006", "EVD-PUMP-031",
  ].map((id) => api.byId.get(id)?.data.status))
  assert.deepEqual(batteryWorkflowStatuses, new Set(["draft", "under-assessment", "accepted", "implemented", "approved"]))
})

test("ontology-note guidance and ten linked Mermaid narratives are complete", async () => {
  const guide = api.byId.get("META-ONTOLOGY-NOTE")
  assert.ok(guide)
  assert.match(guide.path, /^07_Other\/00-Meta\//)
  const explanatoryParagraphs = guide.body
    .split("## Explore examples")[0]
    .split(/\r?\n\r?\n/)
    .filter((paragraph) => paragraph.trim() && !paragraph.trim().startsWith("#"))
  assert.equal(explanatoryParagraphs.length, 5)
  assert.match(guide.body, /structured frontmatter/i)
  assert.match(guide.body, /technical-file/i)
  assert.match(guide.body, /human-review boundary/i)

  const directory = new URL("../content/06-Infpump%20FlowGuard%20ontology%20notes/connections/", import.meta.url)
  const pages = (await readdir(directory, { withFileTypes: true })).filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  assert.equal(pages.length, 10)
  const hasEdge = (subject, predicate, object) => (api.outgoing.get(subject) ?? []).some((edge) => edge.predicate === predicate && edge.object === object)
  for (const page of pages) {
    const source = await readFile(new URL(page.name, directory), "utf8")
    assert.match(source, /```mermaid\r?\n%%\{init: \{"flowchart": \{"curve": "linear"\}\}\}%%\r?\nflowchart TD/)
    const linkedTargets = new Set([...source.matchAll(/^- \[\[([^|\]]+)\|/gm)].map((match) => match[1]))
    assert.ok(linkedTargets.size >= 4 && linkedTargets.size <= 10, `${page.name} must link 4–10 ontology notes`)
    const nodes = new Map([...source.matchAll(/^\s*N(\d+)\["([^<"]+)/gm)].map((match) => [Number(match[1]), match[2]]))
    const clickableNodes = [...source.matchAll(/^\s*click N\d+ "\/[^"]+"/gm)]
    assert.equal(clickableNodes.length, nodes.size, `${page.name} must make every Mermaid node clickable`)
    const diagramEdges = [...source.matchAll(/^\s*N(\d+) -->\|([a-z_]+)\| N(\d+)$/gm)]
    assert.ok(diagramEdges.length >= 1, `${page.name} has no typed diagram edges`)
    for (const [, from, predicate, to] of diagramEdges) {
      const subject = nodes.get(Number(from))
      const object = nodes.get(Number(to))
      assert.ok(api.relations.has(predicate), `${page.name} uses undefined predicate ${predicate}`)
      assert.ok(hasEdge(subject, predicate, object), `${page.name} invents ${subject} --${predicate}--> ${object}`)
    }
  }

  const batteryPage = await readFile(new URL("05-battery-signal-to-change-assessment.md", directory), "utf8")
  assert.doesNotMatch(batteryPage, /classDef (?:draft|approved|accepted|under_assessment|implemented)/)
  assert.doesNotMatch(batteryPage, /Status border legend/)
  assert.doesNotMatch(batteryPage, /controlled by|supports baseline acceptance|challenged by PMS signal|defines verification need|sets qualification criteria|enables post-change verification/)
  const batteryEdges = [...batteryPage.matchAll(/^\s*N\d+ -->\|[^|]+\| N\d+$/gm)]
  assert.equal(batteryEdges.length, 7)
  assert.deepEqual(batteryEdges.map((match) => match[0].match(/N(\d+) -->.* N(\d+)/).slice(1).map(Number)), [[1, 3], [1, 2], [4, 5], [5, 9], [5, 10], [5, 6], [7, 8]])
  for (const predicate of ["mitigates", "verified_by", "triggers", "impacts", "has_impact_assessment", "requires_evidence"]) assert.match(batteryPage, new RegExp(`\\|${predicate}\\|`))
  assert.match(batteryPage, /CRI-PUMP-051/)
  assert.match(batteryPage, /CIA-PUMP-001/)
  assert.match(batteryPage, /EVTYPE-PUMP-001/)

  const notesIndex = await readFile(new URL("../content/06-Infpump%20FlowGuard%20ontology%20notes/index.md", import.meta.url), "utf8")
  assert.match(notesIndex, /META-ONTOLOGY-NOTE-ontology-note/)
  assert.equal([...notesIndex.matchAll(/\]\(\/06-infpump-flowguard-ontology-notes\/connections\//g)].length, 10)
})

test("high-impact ontology-note extensions reuse canonical requirements and sources", () => {
  const extensionTypes = [
    "device-family", "device-model", "device-variant", "configuration-baseline", "software-version",
    "clinical-evaluation", "clinical-evidence", "clinical-evaluation-report", "technical-documentation-set", "pms-plan",
  ]
  for (const type of extensionTypes) assert.equal(api.notes.filter((note) => note.path.startsWith("06-Infpump FlowGuard ontology notes/") && note.data.type === type).length, 1, `${type} extension missing`)

  const hasEdge = (subject, predicate, object) => (api.outgoing.get(subject) ?? []).some((edge) => edge.predicate === predicate && edge.object === object)
  assert.ok(hasEdge("DEVF-PUMP-001", "has_model", "DEVM-PUMP-001"))
  assert.ok(hasEdge("DEVM-PUMP-001", "has_variant", "DEVV-PUMP-001"))
  assert.ok(hasEdge("DEVV-PUMP-001", "has_configuration", "DEVC-PUMP-001"))
  assert.ok(hasEdge("DEVC-PUMP-001", "has_baseline", "BASE-PUMP-001"))
  assert.ok(hasEdge("DEVC-PUMP-001", "includes_software_version", "SW-PUMP-001"))
  assert.ok(hasEdge("DEVC-PUMP-001", "has_clinical_evaluation", "CE-PUMP-001"))
  assert.ok(hasEdge("DEVC-PUMP-001", "has_technical_documentation", "TD-PUMP-001"))
  assert.ok(hasEdge("DEVC-PUMP-001", "covered_by_pms_plan", "PMS-PLAN-PUMP-001"))
  assert.ok(hasEdge("CE-PUMP-001", "uses_evidence", "CEVD-PUMP-001"))
  assert.ok(hasEdge("CE-PUMP-001", "documented_by", "CER-PUMP-001"))
  assert.ok(hasEdge("CRI-PUMP-001", "instantiates_requirement", "GSPR-0001"))
  assert.ok(hasEdge("CRI-PUMP-001", "derived_from", "PROV-MDR-ANNEX-I"))

  for (const source of ["SRC-MDCG-2021-24-R1", "SRC-MDCG-2025-10", "SRC-MDCG-INDEX", "SRC-TEAM-NB-TD-V4", "SRC-EMDN", "SRC-EUDAMED", "SRC-HARMONISED-STANDARDS", "SRC-UDI"]) {
    assert.ok((api.incoming.get(source) ?? []).some((edge) => edge.predicate === "source_provisions"), `${source} remains disconnected`)
    assert.ok(api.byId.get(source).data.example_ontology_notes?.length >= 1, `${source} lacks a visible device-specific example`)
  }
  assert.equal(api.byId.get("SRC-QUARTZ-5").data.ontology_role, "contextual-reference")
  assert.equal(api.byId.get("SRC-QUARTZ-5").data.scope, "website-infrastructure")
})

test("audited infusion-pump scenarios remain configuration-coherent and graph-grounded", () => {
  const hasEdge = (subject, predicate, object) => (api.outgoing.get(subject) ?? []).some((edge) => edge.predicate === predicate && edge.object === object)
  const scenarios = [
    { topic: "occlusion", configuration: "DEVC-PUMP-002", ids: ["HAZ-PUMP-003", "HS-PUMP-003", "HARM-PUMP-002", "RISK-PUMP-005", "RCM-PUMP-004", "RCM-PUMP-005", "EVD-PUMP-003", "CRI-PUMP-017", "CLM-PUMP-005", "SIGNAL-PUMP-002", "CHG-PUMP-002"] },
    { topic: "air-in-line", configuration: "DEVC-PUMP-002", ids: ["HAZ-PUMP-004", "HS-PUMP-004", "HARM-PUMP-003", "RISK-PUMP-007", "RCM-PUMP-006", "RCM-PUMP-007", "EVD-PUMP-004", "CRI-PUMP-018", "SUP-PUMP-002", "COMP-PUMP-002", "CHG-PUMP-003", "PROC-PUMP-004"] },
    { topic: "cybersecurity", configuration: "DEVC-PUMP-002", ids: ["SW-PUMP-001", "HAZ-PUMP-012", "HS-PUMP-012", "HARM-PUMP-010", "RISK-PUMP-023", "RCM-PUMP-025", "RCM-PUMP-026", "EVD-PUMP-012", "SIGNAL-PUMP-007", "CHG-PUMP-007"] },
    { topic: "clinical-evaluation", configuration: "DEVC-PUMP-001", ids: ["CLM-PUMP-002", "CRI-PUMP-046", "EVD-PUMP-029", "DOC-PUMP-004", "DOC-PUMP-006", "CER-PUMP-001"] },
    { topic: "electrical-safety", configuration: "DEVC-PUMP-003", ids: ["HAZ-PUMP-008", "RISK-PUMP-015", "RCM-PUMP-016", "EVD-PUMP-008", "CRI-PUMP-022", "CERT-PUMP-003"] },
    { topic: "battery-power", configuration: "DEVC-PUMP-001", ids: ["RISK-PUMP-013", "RCM-PUMP-013", "EVD-PUMP-007", "SIGNAL-PUMP-001", "CHG-PUMP-001", "CIA-PUMP-001", "CRI-PUMP-051", "SUP-PUMP-006", "COMP-PUMP-004"] },
  ]
  for (const scenario of scenarios) {
    for (const id of scenario.ids) {
      const item = api.byId.get(id)
      assert.ok(item, `${id} is missing from ${scenario.topic}`)
      assert.equal(item.data.topic, scenario.topic, `${id} drifts from ${scenario.topic}`)
      if (item.data.device_context) assert.match(JSON.stringify(item.data.device_context), new RegExp(scenario.configuration), `${id} has the wrong configuration context`)
    }
  }

  for (const [subject, predicate, object] of [
    ["HAZ-PUMP-003", "can_lead_to", "HS-PUMP-003"], ["HS-PUMP-003", "may_cause", "HARM-PUMP-002"],
    ["RCM-PUMP-004", "mitigates", "RISK-PUMP-005"], ["CRI-PUMP-017", "satisfied_by", "EVD-PUMP-003"],
    ["HAZ-PUMP-004", "can_lead_to", "HS-PUMP-004"], ["HS-PUMP-004", "may_cause", "HARM-PUMP-003"],
    ["PROC-PUMP-004", "qualifies_supplier", "SUP-PUMP-002"], ["SUP-PUMP-002", "supplied_component", "COMP-PUMP-002"],
    ["HAZ-PUMP-012", "can_lead_to", "HS-PUMP-012"], ["HS-PUMP-012", "may_cause", "HARM-PUMP-010"],
    ["CER-PUMP-001", "represented_by_document_version", "DOC-PUMP-006"], ["CRI-PUMP-046", "satisfied_by", "EVD-PUMP-029"],
    ["RCM-PUMP-016", "verified_by", "EVD-PUMP-008"], ["EVD-PUMP-008", "supports_certificate", "CERT-PUMP-003"],
    ["SIGNAL-PUMP-001", "triggers", "CHG-PUMP-001"], ["CHG-PUMP-001", "has_impact_assessment", "CIA-PUMP-001"],
    ["CRI-PUMP-051", "requires_evidence", "EVTYPE-PUMP-001"],
  ]) assert.ok(hasEdge(subject, predicate, object), `missing audited edge ${subject} --${predicate}--> ${object}`)

  for (const predicate of ["supplied_component", "qualifies_supplier", "represented_by_document_version", "supports_certificate"]) assert.ok(api.relations.has(predicate), `${predicate} lacks a central relation definition`)
  assert.equal(api.byId.get("DOC-PUMP-004").data.document_revision, "C")
  assert.equal(api.byId.get("DOC-PUMP-006").data.document_revision, "D")
  assert.ok(!(api.outgoing.get("CRI-PUMP-051") ?? []).some((edge) => edge.predicate === "satisfied_by" && edge.object === "EVD-PUMP-031"), "planned evidence must not satisfy CRI-PUMP-051")
})

test("competency questions, ontology definitions, and landing pages follow the content contract", async () => {
  const questions = api.notes.filter((note) => note.data.type === "competency-question")
  assert.equal(questions.length, 90)
  for (const question of questions) {
    assert.ok(question.data.example_ontology_notes?.length >= 1, `${question.data.id} lacks an ontology-note example`)
    assert.match(question.body, /## Infusion-pump example context/)
    assert.match(question.body, /## Answer/)
    assert.match(question.body, /\[\[06-Infpump FlowGuard ontology notes\//, `${question.data.id} does not use a canonical ontology-note path`)
    const ontologyPathIndex = question.body.indexOf("## Ontology path")
    const answerIndex = question.body.indexOf("## Answer")
    const exampleIndex = question.body.indexOf("## Infusion-pump example context")
    const relatedIndex = question.body.indexOf("## Related entities")
    const sourceIndex = question.body.indexOf("## Source basis")
    assert.ok(ontologyPathIndex < answerIndex && answerIndex < exampleIndex && exampleIndex < relatedIndex && relatedIndex < sourceIndex, `${question.data.id} sections are out of order`)
    const answer = question.body.match(/## Answer\r?\n\r?\n([\s\S]*?)(?=\r?\n## )/)?.[1]?.trim()
    assert.ok(answer?.length >= 150, `${question.data.id} lacks a substantive answer paragraph`)
    assert.equal(answer.split(/\r?\n\s*\r?\n/).length, 1, `${question.data.id} answer is not one paragraph`)
    assert.match(question.body, new RegExp(question.data.ontology_path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${question.data.id} body and ontology_path differ`)
    assert.doesNotMatch(question.body, /^## Current rule result\s*$/m)
    assert.doesNotMatch(question.body, /^## Evidence and compliance state\s*$/m)
    assert.doesNotMatch(question.body, /^## Assumptions and human-review triggers\s*$/m)
    assert.doesNotMatch(question.body, /^## Related questions\s*$/m)
  }

  const definitions = api.notes.filter((note) => note.path.startsWith("00-Ontology/"))
  assert.ok(definitions.length >= 278)
  for (const definition of definitions) {
    assert.ok(definition.data.example_ontology_notes?.length >= 1, `${definition.data.id} lacks an ontology-note example`)
    assert.match(definition.body, /## Infusion-pump ontology-note example/)
  }

  const mainLanding = await readFile(new URL("../content/index.md", import.meta.url), "utf8")
  assert.doesNotMatch(mainLanding, /^## Explore\s*$/m)
  assert.doesNotMatch(mainLanding, /^## Ontology notes\s*$/m)
  assert.doesNotMatch(mainLanding, /formerly held in sections 02–13/)
  assert.doesNotMatch(mainLanding, /Open the `content\/` folder as the Obsidian vault/)
  assert.match(mainLanding, /organisations, devices and the other regulated-domain instances\./)
  assert.ok(mainLanding.indexOf("## Start here") < mainLanding.indexOf("## Vault structure"))
  assert.match(mainLanding, /HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology\|Ontology overview/)
  assert.match(mainLanding, /META-ONTOLOGY-NOTE-ontology-note\|Ontology note/)
  assert.match(mainLanding, /\[Questions\]\(\/05-questions\/\)/)
  assert.match(mainLanding, /\/06-infpump-flowguard-ontology-notes\/connections\//)
  assert.match(mainLanding, /06 — Infpump FlowGuard ontology notes/)
  assert.match(mainLanding, /\[Use-case demonstrations\]\(\/07_other\/use-case-demonstrations\/\)/)

  assert.ok(api.byId.get("CLM-PUMP-002").data.aliases.some((alias) => alias.startsWith("03-Ontology notes/")))
  assert.ok(api.byId.get("UC-DEMO-02").data.aliases.some((alias) => alias.startsWith("06-Use case demonstrations/")))

  const viewsGuide = api.byId.get("META-VIEWS")
  assert.ok(viewsGuide)
  assert.match(viewsGuide.path, /^07_Other\/00-Meta\//)
  assert.match(viewsGuide.body, /navigation and presentation layer, not a second source of regulatory facts/)
  assert.match(viewsGuide.body, /\/04-views\//)

  const formerName = new RegExp(["aure", "lia"].join(""), "i")
  for (const note of api.notes) {
    assert.doesNotMatch(JSON.stringify({ data: note.data, body: note.body }), formerName, `${note.data.id ?? note.path} retains the former product name`)
  }

  const quartzConfig = await readFile(new URL("../quartz.config.yaml", import.meta.url), "utf8")
  assert.match(quartzConfig, /source: "@quartz-community\/article-title"\r?\n\s+enabled: false/)

  const overview = api.notes.find((note) => note.path === "HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology.md").body
  const paragraphs = overview.split(/\n\s*\n/).map((block) => block.trim()).filter((block) => block && !block.startsWith("#"))
  assert.equal(paragraphs.length, 5)
  assert.match(overview, /shared, explicit model/)
  assert.match(overview, /179 class definitions, 85 relation definitions, 22 constraints and 9 executable rules/)
  assert.match(overview, /three assurance levels/)
  assert.match(overview, /advisory constraints identify non-blocking data-quality findings/)
  assert.match(overview, /review-trigger rules derive a need for qualified assessment/)
  assert.match(overview, /without replacing accountable regulatory decision-making/)
})

test("vault guidance sections and ontology-class definitions follow the editorial contract", () => {
  for (const note of api.notes) {
    assert.doesNotMatch(note.body, /^## Explore next\s*$/m, `${note.data.id} retains Explore next`)
    assert.doesNotMatch(note.body, /^## Interpretation guardrail\s*$/m, `${note.data.id} retains Interpretation guardrail`)
  }

  const classes = api.notes.filter((note) => note.data.type === "ontology-class")
  assert.equal(classes.length, 179)
  for (const ontologyClass of classes) {
    assert.ok(["MDR", "Regulatory/industry", "Ontology"].includes(ontologyClass.data.terminology_type), `${ontologyClass.data.id} has an invalid terminology type`)
    assert.ok(ontologyClass.data.definition, `${ontologyClass.data.id} lacks a definition`)
    assert.match(ontologyClass.body, /^## Definition\s*$/m)
    assert.match(ontologyClass.body, new RegExp(`\\*\\*Terminology type:\\*\\* ${ontologyClass.data.terminology_type.replace("/", "\\/")}`))
    assert.match(ontologyClass.body, new RegExp(ontologyClass.data.definition.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
    assert.doesNotMatch(ontologyClass.body, /^Semantic class /m)
    assert.doesNotMatch(ontologyClass.body, /^## (Purpose|Key relationships|Referenced by)\s*$/m)
  }
})

test("canonical semantic pages are self-explanatory rather than skeletal", () => {
  for (const note of api.notes) {
    const meaningfulLines = note.body.split(/\r?\n/).filter((line) => line.trim() && !line.trim().startsWith("#"))
    assert.ok(meaningfulLines.length >= 2, `${note.data.id} is skeletal`)
  }
  const genericRequirement = api.byId.get("GSPR-0001").body
  assert.match(genericRequirement, /## Purpose/)
  assert.match(genericRequirement, /PROV-MDR-ANNEX-I/)
  assert.match(genericRequirement, /CRI-0001/)
  assert.match(genericRequirement, /EVD-0001/)
  assert.match(genericRequirement, /\/07_other\/_generated\/compliance-gaps\//)
  assert.match(genericRequirement, /\/07_other\/_generated\/requirement-compliance\/gspr-0001/)
})

test("the expanded governance catalogue uses tiered assurance", () => {
  const activeConstraints = api.notes.filter((note) => note.data.type === "constraint" && note.data.status === "active")
  const activeRules = api.notes.filter((note) => note.data.type === "rule" && note.data.status === "active")
  assert.equal(activeConstraints.length, 22)
  assert.equal(activeRules.length, 9)
  assert.equal(activeConstraints.filter((note) => note.data.assurance_level === "hard").length, 12)
  assert.equal(activeConstraints.filter((note) => note.data.assurance_level === "advisory").length, 10)
  assert.equal(activeRules.filter((note) => note.data.assurance_level === "hard").length, 2)
  assert.equal(activeRules.filter((note) => note.data.assurance_level === "review-trigger").length, 7)
  for (const item of [...activeConstraints, ...activeRules]) {
    const explanationHeadings = item.body.match(/^## Explanation$/gm) ?? []
    assert.equal(explanationHeadings.length, 1, `${item.data.id} must have exactly one Explanation section`)
    const explanation = item.body.match(/^## Explanation\r?\n\r?\n([^\r\n]+)\r?\n\r?\n/m)?.[1]
    assert.ok(explanation?.length >= 120, `${item.data.id} needs a substantive one-paragraph explanation`)
    assert.ok(["regulatory-source", "internal-policy", "ontology-governance"].includes(item.data.normative_basis), `${item.data.id} lacks a valid normative basis`)
    assert.ok(["high", "medium", "low"].includes(item.data.confidence), `${item.data.id} lacks confidence metadata`)
    assert.equal(typeof item.data.human_review_required, "boolean")
  }
})

test("every active rule has passing positive, negative and boundary tests", () => {
  const activeRules = api.notes.filter((note) => note.data.type === "rule" && note.data.status === "active")
  assert.equal(activeRules.length, 9)
  for (const rule of activeRules) {
    const results = api.graph.rule_test_results.filter((result) => result.rule === rule.data.id)
    assert.ok(results.length >= 3)
    assert.ok(results.every((result) => result.passed))
  }
})

test("rules derive explainable assertions with provenance", () => {
  const psur = api.graph.derived_assertions.find((item) => item.subject === "DEVC-0001" && item.predicate === "requires_report_type")
  assert.equal(psur.object, "PSUR")
  assert.equal(psur.derived_by_rule, "RULE-PMS-PSUR-001")
  assert.ok(psur.source_provisions.includes("PROV-MDR-ARTICLE-86"))
  const change = api.graph.derived_assertions.find((item) => item.subject === "CHG-0001" && item.predicate === "requires_regulatory_reassessment")
  assert.equal(change.object, true)
  const signalReview = api.graph.derived_assertions.find((item) => item.subject === "SIGNAL-0001" && item.predicate === "pms_review_required")
  assert.equal(signalReview.object, true)
  assert.equal(signalReview.assurance_level, "review-trigger")
  assert.equal(signalReview.human_review_required, true)
  assert.ok(signalReview.source_provisions.includes("PROV-MDR-ARTICLE-83"))
})

test("constraints preserve invalid state as an explicit compliance gap", () => {
  const gap = api.graph.validation_results.find((item) => item.subject === "CRI-0002" && item.constraint === "CON-GSPR-001")
  assert.ok(gap)
  assert.equal(gap.type, "compliance-gap")
  assert.equal(gap.blocking, true)
  assert.equal(gap.assurance_level, "hard")
  assert.equal(gap.status, "open")
  assert.match(gap.message, /satisfied_by/)
  assert.ok(api.graph.compliance_gaps.includes(gap))
  assert.ok(Array.isArray(api.graph.advisory_findings))
})

test("configuration-scoped evidence covers the released configuration", () => {
  const evidenceEdge = api.graph.edges.find((edge) => edge.subject === "EVD-0001" && edge.predicate === "applies_to_configuration")
  assert.equal(evidenceEdge.object, "DEVC-0001")
  assert.ok(!api.graph.validation_results.some((gap) => gap.subject === "EVD-0001" && gap.constraint === "CON-EVID-001"))
})

test("high-risk golden answer structures select the declared patterns", () => {
  const expected = {
    "CQ-01-01": "AP-QUAL", "CQ-02-01": "AP-CLASS", "CQ-03-01": "AP-REQ", "CQ-05-02": "AP-EVID",
    "CQ-07-08": "AP-MARKET", "CQ-09-05": "AP-PMS", "CQ-09-06": "AP-PMS", "CQ-07-09": "AP-MARKET",
  }
  for (const [question, pattern] of Object.entries(expected)) assert.equal(createContextPacket(api, question, "DEVC-0001").answer_pattern, pattern)
})

test("current sources are fresh at the declared project date", () => {
  assert.ok(api.graph.source_freshness.length >= 8)
  assert.ok(api.graph.source_freshness.every((result) => result.status === "current"))
})
