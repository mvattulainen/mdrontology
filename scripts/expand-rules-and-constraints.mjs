import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import YAML from "yaml"

const root = process.cwd()
const ontologyRoot = path.join(root, "content", "00-Ontology")
const constraintRoot = path.join(ontologyRoot, "constraints")
const ruleRoot = path.join(ontologyRoot, "rules")
const today = "2026-08-16"

const slug = (value) => value.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_]+/g, "-").replace(/-+/g, "-").toLowerCase()
const wikilink = (id) => `[[${id}]]`

function parseMarkdown(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error("Markdown note has no frontmatter")
  return { data: YAML.parse(match[1]) ?? {}, body: match[2].trim() }
}

function markdown(data, body) {
  return `---\n${JSON.stringify(data, null, 2)}\n---\n\n${body.trim()}\n`
}

const explanations = {
  "CON-BASE-001": "This constraint makes a configuration baseline auditable by requiring it to identify at least one artefact that belongs to the controlled release state. Without those links, a baseline would be only a label and reviewers could not determine which document versions, software items, drawings or other records collectively define the configuration.",
  "CON-CERT-001": "This constraint checks that every certificate is linked to the device configuration or configurations it is intended to cover. The link lets reviewers compare the certified scope with the product being assessed and helps prevent a certificate from being treated as applicable to an unspecified or different configuration.",
  "CON-CHANGE-001": "This constraint requires a released change to have a recorded impact assessment before it can be treated as controlled. The assessment provides the traceable basis for deciding which regulatory, clinical, risk, design, verification, documentation and post-market activities are affected by the change.",
  "CON-CLASS-001": "This constraint requires each device configuration proposed for market release to point to exactly one classification decision. It prevents release reasoning from proceeding with no classification basis or with conflicting decisions, while leaving the substantive MDR classification judgment to the documented decision and its supporting evidence.",
  "CON-CLASS-002": "This constraint requires each classification decision to conclude exactly one device class. A single explicit conclusion makes downstream conformity-assessment, clinical, surveillance and documentation obligations computable and avoids ambiguity caused by missing or multiple class outcomes.",
  "CON-CLASS-003": "This constraint requires a classification decision to record both the classification rule considered and the source from which the decision was derived. These links make the conclusion explainable and reviewable against the applicable MDR classification criteria instead of presenting the class as an unsupported assertion.",
  "CON-CLIN-001": "This constraint checks that a clinical evaluation identifies at least one evidence item and the controlled report in which the evaluation is documented. Together, these links allow a reviewer to trace clinical conclusions back to their evidence base and to the approved technical-file record that contains the assessment.",
  "CON-CLIN-002": "This constraint requires a clinical evaluation to identify the device configuration or configurations it evaluates. Making that scope explicit prevents clinical conclusions from being silently generalized to variants, accessories or versions that were not part of the documented evaluation.",
  "CON-DEV-001": "This constraint requires every device configuration to have one controlled intended purpose, one classification decision and one configuration baseline. Those three relationships establish the minimum regulatory context needed to reason consistently about what the device is, how it is classified and which released artefacts define it.",
  "CON-DOC-001": "This constraint prevents evidence marked as current from relying on a document version that has been superseded. It supports version-controlled reasoning by ensuring that compliance claims and reviews use the presently applicable record rather than an obsolete version whose content may no longer describe the released device.",
  "CON-DOC-002": "This constraint checks that an approved document version identifies the device configuration or configurations to which it applies. Explicit scope allows reviewers to distinguish reusable documentation from configuration-specific evidence and reduces the risk of applying an approved document to the wrong product version.",
  "CON-EVID-001": "This constraint requires evidence treated as current to cover at least one identifiable device configuration. The relationship makes the evidence usable in configuration-specific compliance reasoning and exposes records whose validity or relevance cannot be tied to the device version under review.",
  "CON-GSPR-001": "This constraint requires each applicable device-specific requirement to have traceability showing how compliance is addressed. It turns an applicability decision into an auditable path through methods, evidence and conclusions, so an applicable GSPR cannot remain only an unsubstantiated status value.",
  "CON-IP-001": "This constraint checks that an intended-purpose statement is anchored in controlled wording and identifies its target population, intended user and use environment. These contextual elements are advisory completeness checks because they materially influence classification, risk management, clinical evaluation and usability reasoning even when terminology varies between products.",
  "CON-MFR-001": "This constraint requires every marketed device configuration to identify exactly one legal manufacturer. The relationship establishes who holds the manufacturer obligations for that configuration and prevents responsibility from being absent or ambiguously assigned to multiple organisations.",
  "CON-PMS-001": "This constraint requires every marketed device configuration to be covered by a post-market surveillance plan. It ensures that placing the configuration on the market is connected to a defined process for collecting, reviewing and acting on experience from its real-world use.",
  "CON-PMS-002": "This constraint checks that each PMS plan identifies the device configurations it monitors. Explicit configuration scope helps ensure that complaints, trend data, signals and periodic reporting are interpreted for the correct marketed population rather than for an undefined product family.",
  "CON-REQ-001": "This constraint requires each device-specific compliance requirement instance to instantiate exactly one generic requirement. It preserves a clear link from the product-specific applicability and compliance record back to the reusable regulatory requirement from which it was created.",
  "CON-RISK-001": "This constraint checks that every risk-control measure identifies both the risk it mitigates and the verification evidence for its implementation. The two links connect the control's purpose with objective confirmation that it was implemented, supporting end-to-end risk-management traceability.",
  "CON-SIGNAL-001": "This constraint checks that a post-market signal identifies the affected configuration and the assessment or action path it triggers. Those links make the signal operationally reviewable and help prevent potentially important information from remaining disconnected from the product scope and follow-up process.",
  "CON-SOURCE-001": "This constraint requires each active executable rule to identify the source provision or governed basis from which it was derived. Source provenance lets reviewers assess whether the rule remains justified, current and correctly interpreted instead of accepting automated behavior as self-authorizing.",
  "CON-TD-001": "This constraint checks that a technical-documentation set identifies both its included records and the device configurations it covers. The combination defines what is inside the technical file and the product scope for which that collection is intended to demonstrate compliance.",
  "RULE-CERT-REVIEW-001": "This rule flags a certificate recorded as current or approved for a human validity review. The reviewer is expected to confirm matters such as status, expiry, scope and continuing applicability; the flag is a monitoring trigger and does not itself conclude that the certificate is valid or sufficient.",
  "RULE-CHANGE-HIGH-IMPACT-001": "This rule flags a change assessed as high impact for review across the relevant regulatory, clinical, risk, design, verification and post-market domains. It ensures that a broad change is not evaluated in only one functional area, while qualified reviewers still decide which domains and actions are actually required.",
  "RULE-CHANGE-IMPACT-001": "This rule derives a reassessment requirement when a change record meets the governed high-impact conditions. Its purpose is to route consequential changes back through the appropriate compliance reasoning rather than allowing earlier conclusions to be reused without checking whether the changed configuration invalidates them.",
  "RULE-DOC-VERSION-REVIEW-001": "This rule flags an approved document version for confirmation that it remains the correct controlled version for the current configuration and decision context. The review can identify supersession, scope mismatch or missing approval information, but the automated flag does not decide document acceptability.",
  "RULE-GAP-RELEASE-001": "This rule flags a device-specific requirement marked not satisfied for release review. It makes the unresolved condition visible to the release process so a qualified reviewer can determine whether release must be blocked, remediation is required or the underlying status needs correction.",
  "RULE-GATE-MARKET-001": "This rule asserts market-release readiness only when a device configuration is a release candidate and its declared release prerequisites are met. It provides a consistent lifecycle gate for downstream views and queries, but its reliability depends on the completeness and correctness of the prerequisite assessments supplied to the ontology.",
  "RULE-PMS-PSUR-001": "This rule determines that a periodic safety update report is required at the governed cadence when the device class and market status meet the encoded MDR conditions. It supports consistent surveillance planning, while the manufacturer remains responsible for confirming classification, applicability, timing and any product-specific regulatory circumstances.",
  "RULE-SIGNAL-REVIEW-001": "This rule flags open or under-assessment post-market signals for PMS review. The flag ensures that unresolved safety or performance information enters the surveillance workflow, but it does not determine the signal's validity, reportability, risk significance or required corrective action.",
  "RULE-SOURCE-FRESHNESS-001": "This rule flags records with an official source URL for a freshness review. It supports governance of externally maintained regulatory material by prompting confirmation that the cited page, document and interpretation remain current; it does not infer that an unchanged URL guarantees unchanged content.",
}

function withExplanation(body, id) {
  const explanation = explanations[id]
  if (!explanation) throw new Error(`No explanation defined for ${id}`)
  const section = `## Explanation\n\n${explanation}`
  const existing = /\n## Explanation\r?\n\r?\n[^\r\n]+/
  if (existing.test(body)) return body.replace(existing, `\n${section}`)
  const firstLineEnd = body.indexOf("\n")
  if (firstLineEnd === -1) return `${body}\n\n${section}`
  return `${body.slice(0, firstLineEnd)}\n\n${section}\n\n${body.slice(firstLineEnd + 1).trimStart()}`
}

const originalConstraintBlocks = {
  "CON-MFR-001": { target_type: "device-configuration", when: { all: [{ fact: "market_status", equals: "marketed" }] }, checks: [{ relation: "manufactured_by", min: 1, max: 1 }] },
  "CON-CLASS-001": { target_type: "device-configuration", when: { all: [{ fact: "market_release_candidate", equals: true }] }, checks: [{ relation: "classified_by", min: 1, max: 1 }] },
  "CON-GSPR-001": { target_type: "compliance-requirement-instance", when: { all: [{ fact: "applicable", equals: true }] }, checks: [{ field: "applicability_rationale", present: true }, { field: "compliance_method", present: true }, { field: "compliance_status", present: true }, { relation: "derived_from", min: 1 }, { relation: "satisfied_by", min: 1 }] },
  "CON-EVID-001": { target_type: "evidence-item", when: { all: [{ fact: "status", in: ["current", "approved"] }] }, checks: [{ relation: "applies_to_configuration", min: 1 }] },
  "CON-DOC-001": { target_type: "evidence-item", when: { all: [{ fact: "status", in: ["current", "approved"] }] }, checks: [{ relation: "superseded_by", max: 0 }] },
  "CON-PMS-001": { target_type: "device-configuration", when: { all: [{ fact: "market_status", equals: "marketed" }] }, checks: [{ relation: "covered_by_pms_plan", min: 1 }] },
  "CON-CHANGE-001": { target_type: "change", when: { all: [{ fact: "status", equals: "released" }] }, checks: [{ relation: "has_impact_assessment", min: 1 }, { field: "impact_domains", present: true }] },
  "CON-SOURCE-001": { target_type: "rule", when: { all: [{ fact: "status", equals: "active" }] }, checks: [{ relation: "derived_from", min: 1 }] },
}

const originalRuleBlocks = {
  "RULE-PMS-PSUR-001": {
    rule: { when: { all: [{ subject_type: "device-configuration" }, { fact: "risk_class", in: ["IIb", "III"] }] }, then: { assert: [{ predicate: "requires_report_type", object: "PSUR" }], derive: [{ field: "maximum_update_interval", value: "P1Y" }] } },
    tests: [{ name: "positive IIb", context: { type: "device-configuration", risk_class: "IIb" }, expect: { requires_report_type: "PSUR", maximum_update_interval: "P1Y" } }, { name: "negative Class I", context: { type: "device-configuration", risk_class: "I" }, expect_no_match: true }, { name: "boundary Class III", context: { type: "device-configuration", risk_class: "III" }, expect: { requires_report_type: "PSUR" } }],
  },
  "RULE-GATE-MARKET-001": {
    rule: { when: { all: [{ subject_type: "device-configuration" }, { fact: "market_release_candidate", equals: true }, { fact: "release_prerequisites_met", equals: true }] }, then: { assert: [{ predicate: "market_release_ready", object: true }] } },
    tests: [{ name: "positive ready", context: { type: "device-configuration", market_release_candidate: true, release_prerequisites_met: true }, expect: { market_release_ready: true } }, { name: "negative incomplete", context: { type: "device-configuration", market_release_candidate: true, release_prerequisites_met: false }, expect_no_match: true }, { name: "boundary not candidate", context: { type: "device-configuration", market_release_candidate: false, release_prerequisites_met: true }, expect_no_match: true }],
  },
  "RULE-CHANGE-IMPACT-001": {
    rule: { when: { all: [{ subject_type: "change" }, { fact: "change_type", in: ["intended-purpose", "software"] }] }, then: { assert: [{ predicate: "requires_regulatory_reassessment", object: true }] } },
    tests: [{ name: "positive intended purpose", context: { type: "change", change_type: "intended-purpose" }, expect: { requires_regulatory_reassessment: true } }, { name: "negative editorial", context: { type: "change", change_type: "editorial" }, expect_no_match: true }, { name: "boundary software", context: { type: "change", change_type: "software" }, expect: { requires_regulatory_reassessment: true } }],
  },
}

function ensureExecutableBlocks(body, id, type) {
  const fence = type === "constraint" ? "```yaml ontology-constraint" : "```yaml ontology-rule"
  if (body.includes(fence)) return body
  let blocks
  if (type === "constraint" && originalConstraintBlocks[id]) {
    blocks = `\`\`\`yaml ontology-constraint\n${JSON.stringify(originalConstraintBlocks[id], null, 2)}\n\`\`\``
  } else if (type === "rule" && originalRuleBlocks[id]) {
    const definition = originalRuleBlocks[id]
    blocks = `\`\`\`yaml ontology-rule\n${JSON.stringify(definition.rule, null, 2)}\n\`\`\`\n\n\`\`\`yaml ontology-tests\n${JSON.stringify({ cases: definition.tests }, null, 2)}\n\`\`\``
  } else {
    return body
  }
  const exampleHeading = "\n## Infusion-pump ontology-note example"
  return body.includes(exampleHeading)
    ? body.replace(exampleHeading, `\n\n${blocks}\n${exampleHeading}`)
    : `${body.trim()}\n\n${blocks}`
}

const constraints = [
  {
    id: "CON-CLASS-002", title: "Classification decisions conclude exactly one class", kind: "cardinality", target: "classification-decision", assurance: "hard", source: "PROV-MDR-ANNEX-VIII",
    checks: [{ relation: "concludes_class", min: 1, max: 1 }], rationale: "A governed classification decision must have one unambiguous class conclusion.",
  },
  {
    id: "CON-CLASS-003", title: "Classification decisions record rule and source basis", kind: "traceability", target: "classification-decision", assurance: "hard", source: "PROV-MDR-ANNEX-VIII",
    checks: [{ relation: "considers_rule", min: 1 }, { relation: "derived_from", min: 1 }], rationale: "The conclusion must remain traceable to evaluated classification rules and its source basis.",
  },
  {
    id: "CON-REQ-001", title: "Requirement instances instantiate exactly one generic requirement", kind: "cardinality", target: "compliance-requirement-instance", assurance: "hard", source: "PROV-MDR-ANNEX-I",
    checks: [{ relation: "instantiates_requirement", min: 1, max: 1 }], rationale: "A device-specific requirement instance must have one clearly identifiable generic requirement basis.",
  },
  {
    id: "CON-IP-001", title: "Intended purpose records its essential context", kind: "completeness", target: "intended-purpose", assurance: "advisory", source: "PROV-MDR-ANNEX-II",
    checks: [{ relation: "asserted_in", min: 1 }, { relation: "has_target_population", min: 1 }, { relation: "has_intended_user", min: 1 }, { relation: "has_use_environment", min: 1 }], rationale: "Population, user, environment and controlled wording are needed for reliable downstream assessment.",
  },
  {
    id: "CON-RISK-001", title: "Risk controls identify mitigation and verification", kind: "traceability", target: "risk-control-measure", assurance: "advisory", source: "PROV-MDR-ANNEX-I",
    checks: [{ relation: "mitigates", min: 1 }, { relation: "verified_by", min: 1 }], rationale: "A risk-control record should show both the risk addressed and how implementation was verified.",
  },
  {
    id: "CON-CLIN-001", title: "Clinical evaluations identify evidence and report", kind: "completeness", target: "clinical-evaluation", assurance: "advisory", source: "PROV-MDR-ARTICLE-61",
    checks: [{ relation: "uses_evidence", min: 1 }, { relation: "documented_by", min: 1 }], rationale: "A clinical evaluation should remain connected to its evidence set and controlled report.",
  },
  {
    id: "CON-CLIN-002", title: "Clinical evaluations identify evaluated configurations", kind: "configuration", target: "clinical-evaluation", assurance: "advisory", source: "PROV-MDR-ARTICLE-61",
    checks: [{ relation: "evaluates", min: 1 }], rationale: "Clinical conclusions are meaningful only when their product and configuration scope is explicit.",
  },
  {
    id: "CON-CERT-001", title: "Certificates identify configuration scope", kind: "configuration", target: "certificate", assurance: "advisory", source: "PROV-MDR-ARTICLE-10",
    checks: [{ relation: "applies_to_configuration", min: 1 }], rationale: "Certificate use should be reviewable against the exact configurations it covers.",
  },
  {
    id: "CON-DOC-002", title: "Approved document versions identify configuration scope", kind: "configuration", target: "document-version", assurance: "advisory", source: "PROV-MDR-ANNEX-II",
    when: { all: [{ fact: "status", equals: "approved" }] }, checks: [{ relation: "applies_to_configuration", min: 1 }], rationale: "Approved technical-file documents should state the configurations for which their content is valid.",
  },
  {
    id: "CON-PMS-002", title: "PMS plans identify monitored configurations", kind: "configuration", target: "pms-plan", assurance: "advisory", source: "PROV-MDR-ARTICLE-83",
    checks: [{ relation: "applies_to_configuration", min: 1 }], rationale: "A PMS plan should define the marketed-device scope from which information is collected.",
  },
  {
    id: "CON-SIGNAL-001", title: "Signals identify affected configuration and assessment path", kind: "completeness", target: "signal", assurance: "advisory", source: "PROV-MDR-ARTICLE-83",
    checks: [{ relation: "concerns", min: 1 }, { relation: "triggers", min: 1 }], rationale: "A signal should identify what it concerns and the controlled assessment or action path it initiates.",
  },
  {
    id: "CON-BASE-001", title: "Configuration baselines identify included artefacts", kind: "versioning", target: "configuration-baseline", assurance: "advisory", source: "PROV-MDR-ANNEX-II",
    checks: [{ relation: "includes", min: 1 }], rationale: "A baseline should enumerate the released artefacts that define its controlled configuration state.",
  },
  {
    id: "CON-DEV-001", title: "Device configurations identify core regulatory context", kind: "completeness", target: "device-configuration", assurance: "hard", source: "PROV-MDR-ANNEX-II",
    checks: [{ relation: "has_intended_purpose", min: 1, max: 1 }, { relation: "classified_by", min: 1, max: 1 }, { relation: "has_baseline", min: 1, max: 1 }], rationale: "Configuration-level reasoning requires one controlled intended purpose, classification decision and released baseline.",
  },
  {
    id: "CON-TD-001", title: "Technical-documentation sets identify contents and configuration scope", kind: "completeness", target: "technical-documentation-set", assurance: "advisory", source: "PROV-MDR-ANNEX-II",
    checks: [{ relation: "includes", min: 1 }, { relation: "applies_to_configuration", min: 1 }], rationale: "A technical-documentation set should identify both its governed contents and its product scope.",
  },
]

const rules = [
  {
    id: "RULE-CERT-REVIEW-001", title: "Current certificates require validity monitoring", kind: "source-validity", source: "PROV-MDR-ARTICLE-10", basis: "regulatory-source",
    when: { all: [{ subject_type: "certificate" }, { fact: "status", in: ["current", "approved"] }] }, derive: { field: "certificate_validity_review_required", value: true },
    tests: [
      { name: "positive approved certificate", context: { type: "certificate", status: "approved" }, expect: { certificate_validity_review_required: true } },
      { name: "negative expired certificate", context: { type: "certificate", status: "expired" }, expect_no_match: true },
      { name: "boundary current certificate", context: { type: "certificate", status: "current" }, expect: { certificate_validity_review_required: true } },
    ],
  },
  {
    id: "RULE-SOURCE-FRESHNESS-001", title: "Official sources require freshness monitoring", kind: "source-validity", source: "SRC-MDR-2017-745", basis: "ontology-governance",
    when: { all: [{ fact: "official_url", exists: true }] }, derive: { field: "source_freshness_review_required", value: true },
    tests: [
      { name: "positive official source", context: { type: "source", official_url: "https://example.invalid/source" }, expect: { source_freshness_review_required: true } },
      { name: "negative internal record", context: { type: "internal-source" }, expect_no_match: true },
      { name: "boundary empty URL", context: { type: "source", official_url: "" }, expect_no_match: true },
    ],
  },
  {
    id: "RULE-SIGNAL-REVIEW-001", title: "Open signals require PMS review", kind: "feedback", source: "PROV-MDR-ARTICLE-83", basis: "regulatory-source",
    when: { all: [{ subject_type: "signal" }, { fact: "status", in: ["open", "under-assessment"] }] }, derive: { field: "pms_review_required", value: true },
    tests: [
      { name: "positive open signal", context: { type: "signal", status: "open" }, expect: { pms_review_required: true } },
      { name: "negative closed signal", context: { type: "signal", status: "closed" }, expect_no_match: true },
      { name: "boundary under assessment", context: { type: "signal", status: "under-assessment" }, expect: { pms_review_required: true } },
    ],
  },
  {
    id: "RULE-CHANGE-HIGH-IMPACT-001", title: "High-impact changes require multidomain review", kind: "change-impact", source: "PROV-MDR-ARTICLE-10", basis: "ontology-governance",
    when: { all: [{ subject_type: "change" }, { fact: "impact_level", equals: "high" }] }, derive: { field: "multidomain_review_required", value: true },
    tests: [
      { name: "positive high impact", context: { type: "change", impact_level: "high" }, expect: { multidomain_review_required: true } },
      { name: "negative low impact", context: { type: "change", impact_level: "low" }, expect_no_match: true },
      { name: "boundary medium impact", context: { type: "change", impact_level: "medium" }, expect_no_match: true },
    ],
  },
  {
    id: "RULE-GAP-RELEASE-001", title: "Unsatisfied requirements require release review", kind: "lifecycle-gate", source: "PROV-MDR-ANNEX-I", basis: "ontology-governance",
    when: { all: [{ subject_type: "compliance-requirement-instance" }, { fact: "compliance_status", equals: "not-satisfied" }] }, derive: { field: "release_review_required", value: true },
    tests: [
      { name: "positive not satisfied", context: { type: "compliance-requirement-instance", compliance_status: "not-satisfied" }, expect: { release_review_required: true } },
      { name: "negative satisfied", context: { type: "compliance-requirement-instance", compliance_status: "satisfied" }, expect_no_match: true },
      { name: "boundary unresolved", context: { type: "compliance-requirement-instance", compliance_status: "unresolved" }, expect_no_match: true },
    ],
  },
  {
    id: "RULE-DOC-VERSION-REVIEW-001", title: "Approved documents require version confirmation", kind: "source-validity", source: "PROV-MDR-ANNEX-II", basis: "ontology-governance",
    when: { all: [{ subject_type: "document-version" }, { fact: "status", equals: "approved" }] }, derive: { field: "version_review_required", value: true },
    tests: [
      { name: "positive approved document", context: { type: "document-version", status: "approved" }, expect: { version_review_required: true } },
      { name: "negative draft document", context: { type: "document-version", status: "draft" }, expect_no_match: true },
      { name: "boundary superseded document", context: { type: "document-version", status: "superseded" }, expect_no_match: true },
    ],
  },
]

async function normalizeExisting(directory, type) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue
    const file = path.join(directory, entry.name)
    const parsed = parseMarkdown(await readFile(file, "utf8"))
    if (parsed.data.type !== type) continue
    const isChangeReview = parsed.data.id === "RULE-CHANGE-IMPACT-001"
    const data = {
      ...parsed.data,
      modified: today,
      assurance_level: type === "constraint" ? "hard" : isChangeReview ? "review-trigger" : "hard",
      normative_basis: "regulatory-source",
      confidence: "high",
      human_review_required: type === "constraint" || isChangeReview,
    }
    const explainedBody = withExplanation(parsed.body, parsed.data.id)
    await writeFile(file, markdown(data, ensureExecutableBlocks(explainedBody, parsed.data.id, type)), "utf8")
  }
}

async function writeConstraint(definition) {
  const basename = `${definition.id}-${slug(definition.title)}`
  const data = {
    id: definition.id, type: "constraint", title: definition.title,
    aliases: [definition.id, `01-ontology/constraints/${basename}`], status: "active", version: "1", created: today, modified: today,
    tags: ["ontology/constraint"], draft: false, constraint_kind: definition.kind, assurance_level: definition.assurance,
    normative_basis: definition.assurance === "hard" ? "regulatory-source" : "ontology-governance", confidence: definition.assurance === "hard" ? "high" : "medium",
    human_review_required: true, severity: definition.assurance === "hard" ? "major" : "warning", source_provisions: [wikilink(definition.source)],
  }
  const block = { target_type: definition.target, ...(definition.when ? { when: definition.when } : {}), checks: definition.checks }
  const body = `# ${definition.title}\n\n## Explanation\n\n${explanations[definition.id]}\n\n## Assurance\n\n- Level: \`${definition.assurance}\`\n- Normative basis: \`${data.normative_basis}\`\n- Failure effect: ${definition.assurance === "hard" ? "blocking compliance gap" : "non-blocking advisory finding requiring review"}\n\n\`\`\`yaml ontology-constraint\n${JSON.stringify(block, null, 2)}\n\`\`\``
  await writeFile(path.join(constraintRoot, `${basename}.md`), markdown(data, body), "utf8")
}

async function writeRule(definition) {
  const basename = `${definition.id}-${slug(definition.title)}`
  const data = {
    id: definition.id, type: "rule", title: definition.title,
    aliases: [definition.id, `01-ontology/rules/${basename}`], status: "active", version: "1", created: today, modified: today,
    tags: ["ontology/rule"], draft: false, rule_kind: definition.kind, assurance_level: "review-trigger", normative_basis: definition.basis,
    confidence: "medium", human_review_required: true, source_provisions: [wikilink(definition.source)], derived_from: [wikilink(definition.source)],
  }
  const ruleBlock = { when: definition.when, then: { derive: [definition.derive] } }
  const body = `# ${definition.title}\n\n## Explanation\n\n${explanations[definition.id]}\n\n## Assurance\n\n- Level: \`review-trigger\`\n- Normative basis: \`${definition.basis}\`\n- Confidence: \`medium\`\n\nThis rule derives a review flag, not a final legal or compliance conclusion. A qualified reviewer remains responsible for the resulting decision.\n\n\`\`\`yaml ontology-rule\n${JSON.stringify(ruleBlock, null, 2)}\n\`\`\`\n\n\`\`\`yaml ontology-tests\n${JSON.stringify({ cases: definition.tests }, null, 2)}\n\`\`\``
  await writeFile(path.join(ruleRoot, `${basename}.md`), markdown(data, body), "utf8")
}

await mkdir(constraintRoot, { recursive: true })
await mkdir(ruleRoot, { recursive: true })
await normalizeExisting(constraintRoot, "constraint")
await normalizeExisting(ruleRoot, "rule")
for (const definition of constraints) await writeConstraint(definition)
for (const definition of rules) await writeRule(definition)

console.log(`Governance catalogue expanded to 22 constraints and 9 rules.`)
