import { readFile, mkdir, writeFile, access } from "node:fs/promises"
import path from "node:path"
import { loadEntityDefinitions } from "./lib/entity-definitions.mjs"
import { competencyQuestionContent } from "./lib/competency-question-content.mjs"

const root = process.cwd()
const specPath = path.join(root, "eu-mdr-manufacturer-ontology-specification.md")
const spec = await readFile(specPath, "utf8")
const getEntityDefinition = await loadEntityDefinitions(root)
const force = process.argv.includes("--force")
const today = "2026-08-14"
const notes = []

const slug = (value) => value
  .normalize("NFKD")
  .replace(/[^\w\s-]/g, "")
  .trim()
  .replace(/[\s_]+/g, "-")
  .replace(/-+/g, "-")
  .toLowerCase()

const typeKey = (name) => {
  const overrides = {
    CER: "clinical-evaluation-report",
    QMS: "qms",
    PRRC: "prrc",
    PSUR: "psur",
    SSCP: "sscp",
    FSCA: "fsca",
    FSN: "fsn",
    SRN: "srn",
    UDIDI: "udi-di",
    UDIPI: "udi-pi",
    BasicUDIDI: "basic-udi-di",
    EMDNCode: "emdn-code",
    EUDAMEDModule: "eudamed-module",
    CEMarkingState: "ce-marking-state",
  }
  if (overrides[name]) return overrides[name]
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/[\s_/]+/g, "-")
    .toLowerCase()
}

const titleFromType = (value) => value.split("-").map((part) => {
  const known = { qms: "QMS", pms: "PMS", psur: "PSUR", udi: "UDI", eudamed: "EUDAMED", gspr: "GSPR", capa: "CAPA", fsca: "FSCA", fsn: "FSN", prrc: "PRRC", sscp: "SSCP", cer: "CER", eu: "EU", emdn: "EMDN", srn: "SRN" }
  return known[part] ?? part.charAt(0).toUpperCase() + part.slice(1)
}).join(" ")

function legacyFolderAlias(folder) {
  if (folder === "00-Ontology" || folder.startsWith("00-Ontology/")) return folder.replace(/^00-Ontology/, "01-ontology")
  const instanceMatch = folder.match(/^01-Ontology instances\/(0[2-9]|1[0-3])-(.+)$/)
  if (instanceMatch) return `${instanceMatch[1]}-${instanceMatch[2]}`
  const mappings = new Map([
    ["02-Sources", "14-sources"],
    ["05-Questions", "15-questions"],
    ["04-Views", "16-views"],
    ["07_Other/Use-case demonstrations", "17-use-cases"],
    ["07_Other/00-Meta", "00-meta"],
  ])
  for (const [current, legacy] of mappings) {
    if (folder === current || folder.startsWith(`${current}/`)) return folder.replace(current, legacy)
  }
  return null
}

function addNote(folder, id, type, title, properties = {}, body = "") {
  const filename = `${id}-${slug(title)}.md`
  const legacyFolder = legacyFolderAlias(folder)
  const legacyAlias = legacyFolder ? `${legacyFolder}/${filename.slice(0, -3)}` : null
  const relocatedAlias = folder === "07_Other/Use-case demonstrations" || folder.startsWith("07_Other/Use-case demonstrations/")
    ? `${folder.replace("07_Other/Use-case demonstrations", "06-Use case demonstrations")}/${filename.slice(0, -3)}`
    : null
  notes.push({
    folder,
    filename,
    data: {
      id,
      type,
      title,
      aliases: [id, legacyAlias, relocatedAlias].filter(Boolean),
      status: properties.status ?? "active",
      version: properties.version ?? "1",
      created: properties.created ?? today,
      modified: properties.modified ?? today,
      tags: properties.tags ?? [`ontology/${type}`],
      draft: properties.draft ?? false,
      ...properties,
    },
    body: body || `# ${title}\n`,
  })
}

// Extract all principal classes from section 14, then add infrastructure and
// practical bridge classes used by the executable seed graph.
const classNames = new Set()
const classSection = spec.slice(spec.indexOf("## 14. Core entity domains"), spec.indexOf("## 15. Product hierarchy"))
for (const match of classSection.matchAll(/`([^`]+)`/g)) classNames.add(match[1])
for (const name of [
  "Device", "Identifier", "Market", "Activity", "EvidenceType", "Requirement",
  "Process", "ConfigurationBaseline", "HardwareRevision", "MaterialSpecification",
  "IntendedPurposeVersion", "PMSData", "PMSFinding", "PMCFResult", "Assessment",
  "NoActionDecision", "SourceUpdate", "EvidenceUpdate", "ComparatorDevice",
  "RiskManagement", "RiskManagementProcess", "CER", "ProductionUnit", "RecordType",
  "OntologyClass", "RelationDefinition", "AnswerPattern", "SourceFragment",
  "ControlledVocabulary", "MetaPage", "View", "LandingPage", "UseCaseDemonstration",
]) classNames.add(name)

const parents = {
  "manufacturer": ["organisation"], "manufacturing-site": ["organisation"],
  "authorised-representative": ["organisation"], "importer": ["organisation"],
  "distributor": ["organisation"], "notified-body": ["organisation"],
  "competent-authority": ["organisation"], "supplier": ["organisation"],
  "prrc": ["role"], "device-family": ["device"], "device-model": ["device"],
  "device-variant": ["device"], "device-configuration": ["device"],
  "accessory": ["device"], "component": ["device"], "system": ["device"],
  "software-version": ["device"], "packaging-configuration": ["device"],
  "basic-udi-di": ["identifier"], "udi-di": ["identifier"], "udi-pi": ["identifier"],
  "emdn-code": ["identifier"], "srn": ["identifier"],
  "regulatory-requirement": ["requirement"], "gspr-requirement": ["regulatory-requirement"],
  "standard-requirement": ["requirement"], "internal-requirement": ["requirement"],
  "compliance-requirement-instance": ["requirement"], "evidence-item": ["evidence-type"],
  "test-report": ["evidence-item"], "verification-evidence": ["evidence-item"],
  "validation-evidence": ["evidence-item"], "clinical-evidence": ["evidence-item"],
  "document-version": ["evidence-item"], "clinical-evaluation-report": ["document-version"],
  "cer": ["clinical-evaluation-report"], "pms-plan": ["document-version"],
  "psur": ["document-version"], "internal-evidence": ["evidence-item"],
  "qms-process": ["process"], "design-process": ["qms-process"],
  "supplier-control-process": ["qms-process"], "production-process": ["qms-process"],
  "release-process": ["qms-process"], "legal-source": ["source"],
  "legal-provision": ["source-fragment"], "guidance": ["source"],
  "standard": ["source"], "common-specification": ["source"],
  "internal-source": ["source"], "eu-regulation": ["legal-source"],
  "mdcg-guidance": ["guidance"], "harmonised-standard": ["standard"],
  "team-nb-guidance": ["guidance"], "scientific-literature": ["source"],
  "classification-decision": ["decision"], "change-impact-assessment": ["decision"],
}

const classKeys = new Set([...classNames].map(typeKey))
for (const key of Object.keys(parents)) classKeys.add(key)
for (const values of Object.values(parents)) values.forEach((value) => classKeys.add(value))
for (const key of classKeys) {
  const id = `CLS-${key.toUpperCase()}`
  const { definition, terminologyType } = getEntityDefinition(key)
  addNote("00-Ontology/classes", id, "ontology-class", titleFromType(key), {
    class_key: key,
    parent_classes: (parents[key] ?? []).map((parent) => `@CLS-${parent.toUpperCase()}`),
    terminology_type: terminologyType,
    definition,
  }, `# ${titleFromType(key)}\n\n## Definition\n\n**Terminology type:** ${terminologyType}\n\n${definition}\n`)
}

// Parse the normative relation catalogue directly from the specification.
const relationSection = spec.slice(spec.indexOf("## 19. Core relation catalogue"), spec.indexOf("# Part V"))
const relationDefs = []
for (const line of relationSection.split(/\r?\n/)) {
  const match = line.match(/^\| `([^`]+)` \| ([^|]+?)\s*(?:\|([^|]*))?\|$/)
  if (!match || !match[2].includes("→")) continue
  const [domainRaw, rangeRaw] = match[2].split("→").map((value) => value.trim())
  const parseClasses = (raw) => raw.split("/").map((value) => value.trim().replace(/\[\]$/, "")).filter(Boolean).map(typeKey)
  relationDefs.push({ predicate: match[1], domain: parseClasses(domainRaw), range: parseClasses(rangeRaw.replace(/^earlier version$/i, "DocumentVersion")), description: match[3]?.trim() ?? "" })
}
const extraRelations = [
  ["part_of", ["source-fragment"], ["source"]],
  ["source_provisions", [
    "rule", "constraint", "decision", "competency-question", "assertion",
    "device-family", "device-model", "device-variant", "device-configuration", "configuration-baseline", "software-version",
    "intended-purpose", "compliance-requirement-instance", "clinical-evaluation", "clinical-evidence",
    "technical-documentation-set", "pms-plan",
  ], ["legal-provision", "source"]],
  ["has_baseline", ["device-configuration"], ["configuration-baseline"]],
  ["includes", ["configuration-baseline", "technical-documentation-set"], ["document-version", "software-version", "packaging-configuration", "evidence-item"]],
  ["covered_by_pms_plan", ["device"], ["pms-plan"]],
  ["concerns", ["decision", "change", "signal", "risk", "supply-interruption"], ["device-configuration", "device"]],
  ["has_impact_assessment", ["change"], ["change-impact-assessment"]],
  ["answer_pattern", ["competency-question"], ["answer-pattern"]],
  ["checks_constraint", ["competency-question"], ["constraint"]],
  ["uses_source", ["competency-question"], ["source", "legal-provision"]],
  ["has_clinical_evaluation", ["device"], ["clinical-evaluation"]],
  ["has_technical_documentation", ["device"], ["technical-documentation-set"]],
  ["has_certificate", ["device"], ["certificate"]],
  ["has_change", ["device"], ["change"]],
  ["superseded_by", ["document-version", "evidence-item"], ["document-version", "evidence-item"]],
  ["supplied_component", ["supplier"], ["component"]],
  ["qualifies_supplier", ["qms-process", "change-impact-assessment"], ["supplier"]],
  ["represented_by_document_version", ["clinical-evaluation-report"], ["document-version"]],
  ["supports_certificate", ["verification-evidence"], ["certificate"]],
  ["identifies_signal", ["pms-plan"], ["signal"]],
  ["informs_requirement", ["risk"], ["compliance-requirement-instance"]],
  ["implemented_by_control", ["compliance-requirement-instance"], ["risk-control-measure"]],
]
for (const [predicate, domain, range] of extraRelations) {
  if (!relationDefs.some((item) => item.predicate === predicate)) relationDefs.push({ predicate, domain, range, description: "Implementation bridge relation." })
}
for (const def of relationDefs) {
  if (def.predicate === "derived_from") def.domain.push("decision", "classification-rule", "gspr-requirement")
  if (def.predicate === "applies_to_configuration") def.domain.push("technical-documentation-set", "certificate", "pms-plan")
  if (def.predicate === "source_provisions") def.domain.push("assertion")
  if (def.predicate === "impacts") def.range.push("clinical-evaluation", "software-version", "verification-evidence")
  if (def.predicate === "requires_reassessment_of") {
    def.domain.push("change-impact-assessment")
    def.range.push("risk")
  }
  if (def.predicate === "supports_claim") def.domain.push("verification-evidence")
  def.domain = [...new Set(def.domain)]
  def.range = [...new Set(def.range)]
}
for (const def of relationDefs) {
  addNote("00-Ontology/relations", `REL-${def.predicate.toUpperCase().replaceAll("_", "-")}`, "relation-definition", def.predicate, {
    predicate: def.predicate,
    label: def.predicate.replaceAll("_", " "),
    domain: def.domain,
    range: def.range,
    inverse: null,
    transitive: false,
    symmetric: false,
    functional: false,
    provenance_required: ["derived_from", "supported_by", "source_provisions"].includes(def.predicate),
    temporal_qualification_required: ["supersedes", "invalidated_by"].includes(def.predicate),
  }, `# ${def.predicate}\n\n${def.description || `Relates ${def.domain.join(", ")} to ${def.range.join(", ")}.`}\n`)
}

const vocabularies = {
  "VOC-COMPLIANCE-STATE": ["satisfied", "not-satisfied", "partially-satisfied", "not-applicable", "not-assessed", "stale", "conflicting", "pending-review"],
  "VOC-MISSING-STATE": ["unknown", "not-assessed", "not-applicable", "not-available", "conflicting", "stale", "pending-review"],
  "VOC-NORMATIVE-STATUS": ["binding", "non-binding-guidance", "voluntary-presumption", "best-practice", "scientific-evidence", "internal-control"],
  "VOC-ASSERTION-STATUS": ["proposed", "accepted", "rejected", "superseded", "conflicting"],
  "VOC-LIFECYCLE-STATE": ["concept", "design", "design-freeze", "conformity-assessment", "market-release", "marketed", "retired"],
  "VOC-SEVERITY": ["info", "minor", "major", "critical"],
}
for (const [id, values] of Object.entries(vocabularies)) {
  addNote("00-Ontology/vocabularies", id, "controlled-vocabulary", titleFromType(id.slice(4).toLowerCase()), { values }, `# ${titleFromType(id.slice(4).toLowerCase())}\n\n${values.map((value) => `- \`${value}\``).join("\n")}\n`)
}

const sources = [
  ["SRC-MDR-2017-745", "eu-regulation", "Regulation (EU) 2017/745 — consolidated text", "binding", "https://eur-lex.europa.eu/eli/reg/2017/745/2026-01-01/eng", { document_id: "EU-2017-745", consolidated_as_of: "2026-01-01", publisher: "European Union" }],
  ["SRC-MDCG-INDEX", "mdcg-guidance", "MDCG endorsed documents and other guidance", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en", { publisher: "European Commission" }],
  ["SRC-MDCG-2021-24-R1", "mdcg-guidance", "MDCG 2021-24 rev.1 — Classification of medical devices", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en", { version: "rev.1", publication_date: "2026-04-01", publisher: "MDCG" }],
  ["SRC-MDCG-2025-10", "mdcg-guidance", "MDCG 2025-10 — Post-market surveillance", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en", { publication_date: "2025-12-01", publisher: "MDCG" }],
  ["SRC-EUDAMED", "source", "European Commission EUDAMED overview", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-eudamed/overview_en", { publisher: "European Commission" }],
  ["SRC-UDI", "source", "European Commission UDI overview", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-topics-interest/unique-device-identifier-udi_en", { publisher: "European Commission" }],
  ["SRC-EMDN", "source", "European Medical Devices Nomenclature", "non-binding-guidance", "https://health.ec.europa.eu/medical-devices-topics-interest/european-medical-devices-nomenclature-emdn_en", { publisher: "European Commission" }],
  ["SRC-HARMONISED-STANDARDS", "source", "European Commission harmonised standards", "voluntary-presumption", "https://health.ec.europa.eu/medical-devices-topics-interest/harmonised-standards_en", { publisher: "European Commission" }],
  ["SRC-TEAM-NB-TD-V4", "team-nb-guidance", "Team-NB BPG Technical Documentation V4", "best-practice", "https://www.team-nb.org/wp-content/uploads/2023/10/Team-NB-PositionPaper-BPG-TechnicalDocEU-MDR-2017.745-V4-20231005.pdf", { version: "4", publisher: "Team-NB" }],
  ["SRC-QUARTZ-5", "source", "Quartz 5 documentation", "best-practice", "https://quartz.jzhao.xyz/", { version: "5", publisher: "Quartz" }],
]
for (const [id, type, title, normative_status, official_url, extra] of sources) {
  addNote(type === "eu-regulation" ? "02-Sources/legislation" : type.includes("guidance") ? "02-Sources/guidance" : "02-Sources/standards", id, type, title, {
    normative_status, official_url, retrieved_at: today, review_interval_days: 180, ...extra,
  }, `# ${title}\n\n- Normative status: \`${normative_status}\`\n- Official source: ${official_url}\n- Retrieved: ${today}\n`)
}

const provisions = [
  ["PROV-MDR-ARTICLE-10", "MDR Article 10 — manufacturer obligations"],
  ["PROV-MDR-ARTICLE-15", "MDR Article 15 — PRRC"],
  ["PROV-MDR-ARTICLE-27", "MDR Article 27 — UDI"],
  ["PROV-MDR-ARTICLE-61", "MDR Article 61 — clinical evaluation"],
  ["PROV-MDR-ARTICLE-83", "MDR Article 83 — PMS system"],
  ["PROV-MDR-ARTICLE-86", "MDR Article 86 — PSUR"],
  ["PROV-MDR-ANNEX-I", "MDR Annex I — GSPRs"],
  ["PROV-MDR-ANNEX-II", "MDR Annex II — technical documentation"],
  ["PROV-MDR-ANNEX-III", "MDR Annex III — PMS technical documentation"],
  ["PROV-MDR-ANNEX-VIII", "MDR Annex VIII — classification"],
]
for (const [id, title] of provisions) addNote("02-Sources/legislation", id, "legal-provision", title, { part_of: "@SRC-MDR-2017-745", normative_status: "binding", retrieved_at: today }, `# ${title}\n\nProvision node for traceable rules and decisions.\n`)

const patterns = {
  "AP-QUAL": "Conclusion → controlling product facts → applicable definitions → decision rationale → boundary or ambiguity → evidence → provenance → unresolved facts.",
  "AP-CLASS": "Classification conclusion → controlled characteristics → candidate rules → evaluations → strictest result → rationale → provenance.",
  "AP-REQ": "Applicable requirements → rationale → compliance method → risk/control → evidence → gap/status → provenance.",
  "AP-PROC": "Process/control → owner → inputs → activities → outputs → effectiveness/state → provenance.",
  "AP-EVID": "Evidence objective → scope → evidence set → quality → sufficiency → gaps/actions → update triggers → provenance.",
  "AP-DOC": "Artefact set → configuration coverage → contents → traceability → version/approval → gaps → provenance.",
  "AP-MARKET": "Route/status → prerequisites → notified-body implications → submissions → gate decision → date-sensitive provenance.",
  "AP-TRACE": "Identity → duty → record state → responsibility → retention/synchronisation → provenance.",
  "AP-PMS": "Trigger/data → assessment → decision → action/deadline → feedback → evidence → provenance.",
}
for (const [id, sequence] of Object.entries(patterns)) addNote("07_Other/00-Meta/answer-patterns", id, "answer-pattern", `${id} answer pattern`, { sequence }, `# ${id}\n\n${sequence}\n`)

const rules = [
  {
    id: "RULE-PMS-PSUR-001", title: "PSUR cadence for Class IIb and III devices", kind: "scheduling", source: "PROV-MDR-ARTICLE-86",
    rule: { when: { all: [{ subject_type: "device-configuration" }, { fact: "risk_class", in: ["IIb", "III"] }] }, then: { assert: [{ predicate: "requires_report_type", object: "PSUR" }], derive: [{ field: "maximum_update_interval", value: "P1Y" }] } },
    tests: [
      { name: "positive IIb", context: { type: "device-configuration", risk_class: "IIb" }, expect: { requires_report_type: "PSUR", maximum_update_interval: "P1Y" } },
      { name: "negative Class I", context: { type: "device-configuration", risk_class: "I" }, expect_no_match: true },
      { name: "boundary Class III", context: { type: "device-configuration", risk_class: "III" }, expect: { requires_report_type: "PSUR" } },
    ],
  },
  {
    id: "RULE-GATE-MARKET-001", title: "Market release readiness", kind: "lifecycle-gate", source: "PROV-MDR-ARTICLE-10",
    rule: { when: { all: [{ subject_type: "device-configuration" }, { fact: "market_release_candidate", equals: true }, { fact: "release_prerequisites_met", equals: true }] }, then: { assert: [{ predicate: "market_release_ready", object: true }] } },
    tests: [
      { name: "positive ready", context: { type: "device-configuration", market_release_candidate: true, release_prerequisites_met: true }, expect: { market_release_ready: true } },
      { name: "negative incomplete", context: { type: "device-configuration", market_release_candidate: true, release_prerequisites_met: false }, expect_no_match: true },
      { name: "boundary not candidate", context: { type: "device-configuration", market_release_candidate: false, release_prerequisites_met: true }, expect_no_match: true },
    ],
  },
  {
    id: "RULE-CHANGE-IMPACT-001", title: "High-impact change reassessment", kind: "change-impact", source: "PROV-MDR-ARTICLE-10",
    rule: { when: { all: [{ subject_type: "change" }, { fact: "change_type", in: ["intended-purpose", "software"] }] }, then: { assert: [{ predicate: "requires_regulatory_reassessment", object: true }] } },
    tests: [
      { name: "positive intended purpose", context: { type: "change", change_type: "intended-purpose" }, expect: { requires_regulatory_reassessment: true } },
      { name: "negative editorial", context: { type: "change", change_type: "editorial" }, expect_no_match: true },
      { name: "boundary software", context: { type: "change", change_type: "software" }, expect: { requires_regulatory_reassessment: true } },
    ],
  },
]
for (const item of rules) addNote("00-Ontology/rules", item.id, "rule", item.title, { rule_kind: item.kind, status: "active", source_provisions: [`@${item.source}`], derived_from: [`@${item.source}`] }, `# ${item.title}\n\n\`\`\`yaml ontology-rule\n${JSON.stringify(item.rule, null, 2)}\n\`\`\`\n\n\`\`\`yaml ontology-tests\n${JSON.stringify({ cases: item.tests }, null, 2)}\n\`\`\`\n`)

const constraints = [
  ["CON-MFR-001", "Marketed configurations have one manufacturer", "device-configuration", { all: [{ fact: "market_status", equals: "marketed" }] }, [{ relation: "manufactured_by", min: 1, max: 1 }]],
  ["CON-CLASS-001", "Market-release candidates have one classification decision", "device-configuration", { all: [{ fact: "market_release_candidate", equals: true }] }, [{ relation: "classified_by", min: 1, max: 1 }]],
  ["CON-GSPR-001", "Applicable requirements have compliance traceability", "compliance-requirement-instance", { all: [{ fact: "applicable", equals: true }] }, [{ field: "applicability_rationale", present: true }, { field: "compliance_method", present: true }, { field: "compliance_status", present: true }, { relation: "derived_from", min: 1 }, { relation: "satisfied_by", min: 1 }]],
  ["CON-EVID-001", "Current evidence covers a configuration", "evidence-item", { all: [{ fact: "status", in: ["current", "approved"] }] }, [{ relation: "applies_to_configuration", min: 1 }]],
  ["CON-DOC-001", "Current evidence is not superseded", "evidence-item", { all: [{ fact: "status", in: ["current", "approved"] }] }, [{ relation: "superseded_by", max: 0 }]],
  ["CON-PMS-001", "Marketed configurations have a PMS plan", "device-configuration", { all: [{ fact: "market_status", equals: "marketed" }] }, [{ relation: "covered_by_pms_plan", min: 1 }]],
  ["CON-CHANGE-001", "Released changes have an impact assessment", "change", { all: [{ fact: "status", equals: "released" }] }, [{ relation: "has_impact_assessment", min: 1 }, { field: "impact_domains", present: true }]],
  ["CON-SOURCE-001", "Active rules have source provenance", "rule", { all: [{ fact: "status", equals: "active" }] }, [{ relation: "derived_from", min: 1 }]],
]
for (const [id, title, target_type, when, checks] of constraints) addNote("00-Ontology/constraints", id, "constraint", title, { constraint_kind: "integrity", severity: id === "CON-SOURCE-001" ? "critical" : "major", source_provisions: ["@PROV-MDR-ARTICLE-10"] }, `# ${title}\n\n\`\`\`yaml ontology-constraint\n${JSON.stringify({ target_type, when, checks }, null, 2)}\n\`\`\`\n`)

// Synthetic manufacturer, device and closed-loop evidence thread.
addNote("01-Ontology instances/02-organisations/manufacturers", "ORG-MFR-0001", "manufacturer", "Example Medical Oy", { legal_name: "Example Medical Oy", country: "FI" }, "# Example Medical Oy\n\nSynthetic manufacturer for ontology tests.\n")
addNote("01-Ontology instances/02-organisations/roles", "ROLE-REGULATORY-AFFAIRS", "role", "Regulatory Affairs", {}, "# Regulatory Affairs\n")
addNote("01-Ontology instances/02-organisations/roles", "ROLE-QUALITY", "role", "Quality", {}, "# Quality\n")
addNote("01-Ontology instances/03-devices/families", "DEVF-0001", "device-family", "Example Infusion System", { has_model: ["@DEVM-0001"] })
addNote("01-Ontology instances/03-devices/models", "DEVM-0001", "device-model", "Example Infusion Pump", { manufactured_by: ["@ORG-MFR-0001"], has_variant: ["@DEVV-0001"], has_intended_purpose: ["@IP-0001"] })
addNote("01-Ontology instances/03-devices/variants", "DEVV-0001", "device-variant", "Example Infusion Pump Adult", { has_configuration: ["@DEVC-0001"] })
addNote("01-Ontology instances/03-devices/configurations", "DEVC-0001", "device-configuration", "Example Infusion Pump Adult 1.0", {
  manufactured_by: ["@ORG-MFR-0001"], has_intended_purpose: ["@IP-0001"], classified_by: ["@CLD-0001"],
  has_baseline: ["@BASE-0001"], has_applicable_requirement: ["@CRI-0001", "@CRI-0002"], covered_by_pms_plan: ["@PMS-PLAN-0001"],
  has_hazard: ["@HAZ-0001"],
  identified_by: ["@UDI-BASIC-0001"],
  has_clinical_evaluation: ["@CE-0001"], has_technical_documentation: ["@TD-0001"], has_certificate: ["@CERT-0001"], has_change: ["@CHG-0001"],
  risk_class: "IIb", lifecycle_state: "marketed", market_status: "marketed", market_release_candidate: true, release_prerequisites_met: false,
  intended_purpose: "Volumetric delivery of prescribed fluids to adult patients in professional healthcare environments.",
  duration: "transient", invasiveness: "non-invasive", active_characteristic: true, software_function: "controls infusion delivery",
}, "# Example Infusion Pump Adult 1.0\n\n> [!example] Synthetic data\n> This configuration exists only to exercise the ontology.\n\n## Manufacturer view\n\n- Intended purpose: [[IP-0001-example-infusion-pump-intended-purpose|IP-0001]]\n- Classification: [[CLD-0001-example-classification-decision|CLD-0001]]\n- Requirements: [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]], [[CRI-0002-cybersecurity-requirement-instance|CRI-0002]]\n")
addNote("01-Ontology instances/03-devices/intended-purpose", "IP-0001", "intended-purpose", "Example Infusion Pump intended purpose", { asserted_in: ["@DOC-IFU-0001"], has_target_population: ["@POP-0001"], has_intended_user: ["@USER-0001"], has_use_environment: ["@ENV-0001"] })
addNote("01-Ontology instances/03-devices/intended-purpose", "POP-0001", "target-population", "Adult patients")
addNote("01-Ontology instances/03-devices/intended-purpose", "USER-0001", "intended-user", "Trained healthcare professional")
addNote("01-Ontology instances/03-devices/intended-purpose", "ENV-0001", "use-environment", "Professional healthcare environment")
addNote("01-Ontology instances/03-devices/classification", "CLASS-IIb", "device-class", "Class IIb")
addNote("01-Ontology instances/03-devices/classification", "CRULE-MDR-12", "classification-rule", "MDR Annex VIII Rule 12", { derived_from: ["@PROV-MDR-ANNEX-VIII"] })
addNote("01-Ontology instances/03-devices/classification", "CLD-0001", "classification-decision", "Example classification decision", { concerns: ["@DEVC-0001"], concludes_class: ["@CLASS-IIb"], considers_rule: ["@CRULE-MDR-12"], approved_by: ["@ROLE-REGULATORY-AFFAIRS"], derived_from: ["@PROV-MDR-ANNEX-VIII"], decision_date: "2026-07-01", conclusion: "IIb" })
addNote("01-Ontology instances/03-devices/configurations", "BASE-0001", "configuration-baseline", "Released baseline 1.0", { includes: ["@SW-0001", "@DOC-IFU-0001"] })
addNote("01-Ontology instances/03-devices/configurations", "SW-0001", "software-version", "Infusion controller 1.0", { version: "1.0" })
addNote("01-Ontology instances/04-requirements/gspr", "GSPR-0001", "gspr-requirement", "Electrical safety", { derived_from: ["@PROV-MDR-ANNEX-I"] })
addNote("01-Ontology instances/04-requirements/gspr", "GSPR-0002", "gspr-requirement", "Software and cybersecurity", { derived_from: ["@PROV-MDR-ANNEX-I"] })
addNote("01-Ontology instances/04-requirements/gspr", "GSPR-0003", "gspr-requirement", "Therapy-delivery protection", { derived_from: ["@PROV-MDR-ANNEX-I"] })
addNote("01-Ontology instances/04-requirements/gspr", "GSPR-0004", "gspr-requirement", "Clinical evaluation and evidence", { derived_from: ["@PROV-MDR-ARTICLE-61"] })
addNote("01-Ontology instances/04-requirements/instances", "CRI-0001", "compliance-requirement-instance", "Electrical safety requirement instance", { instantiates_requirement: ["@GSPR-0001"], satisfied_by: ["@EVD-0001"], derived_from: ["@PROV-MDR-ANNEX-I"], applicable: true, applicability_rationale: "Active electrical device", compliance_method: "Verified testing", compliance_status: "satisfied" })
addNote("01-Ontology instances/04-requirements/instances", "CRI-0002", "compliance-requirement-instance", "Cybersecurity requirement instance", { instantiates_requirement: ["@GSPR-0002"], derived_from: ["@PROV-MDR-ANNEX-I"], applicable: true, applicability_rationale: "Software controls therapy", compliance_method: "Threat modelling and verification", compliance_status: "not-satisfied" })
addNote("01-Ontology instances/08-technical-documentation/evidence", "EVD-0001", "verification-evidence", "Electrical safety report Rev A", { status: "approved", applies_to_configuration: ["@DEVC-0001"], demonstrates_compliance_with: ["@CRI-0001"], approved_at: "2026-07-10", source_location: "synthetic://controlled-documents/EVD-0001" })
addNote("01-Ontology instances/08-technical-documentation/evidence-types", "EVTYPE-PUMP-001", "evidence-type", "Post-change battery endurance verification", { topic: "battery-power" }, `# Post-change battery endurance verification\n\n## Purpose\n\nDefines the type of objective verification evidence required before the proposed battery-cell supplier change can demonstrate the post-change endurance requirement. It is a planned evidence category, not an assertion that acceptable test results already exist.\n\n## Use\n\nThe draft compliance requirement points to this evidence type while the change is under assessment. A future approved verification-evidence note may fulfil the type, but only completed results may be connected through \`satisfied_by\` and used in a release decision.\n`)
addNote("01-Ontology instances/08-technical-documentation/documents", "DOC-IFU-0001", "document-version", "Instructions for use Rev A", { status: "approved", applies_to_configuration: ["@DEVC-0001"], approved_at: "2026-07-05" })
addNote("01-Ontology instances/08-technical-documentation/sets", "TD-0001", "technical-documentation-set", "Example technical documentation", { includes: ["@DOC-IFU-0001", "@EVD-0001"], applies_to_configuration: ["@DEVC-0001"] })
addNote("01-Ontology instances/05-risk/hazards", "HAZ-0001", "hazard", "Excessive flow", { can_lead_to: ["@HS-0001"] })
addNote("01-Ontology instances/05-risk/risks", "HS-0001", "hazardous-situation", "Patient receives excessive flow", { may_cause: ["@HARM-0001"] })
addNote("01-Ontology instances/05-risk/risks", "HARM-0001", "harm", "Fluid overload")
addNote("01-Ontology instances/05-risk/risks", "RISK-0001", "risk", "Excessive delivery risk", { concerns: ["@DEVC-0001"] })
addNote("01-Ontology instances/05-risk/controls", "RCM-0001", "risk-control-measure", "Independent flow monitoring", { mitigates: ["@RISK-0001"], verified_by: ["@EVD-0001"] })
addNote("01-Ontology instances/06-clinical/evaluations", "CE-0001", "clinical-evaluation", "Example clinical evaluation", { evaluates: ["@DEVC-0001"], uses_evidence: ["@CEVD-0001"], documented_by: ["@CER-0001"] })
addNote("01-Ontology instances/06-clinical/evidence", "CEVD-0001", "clinical-evidence", "Synthetic clinical literature set", { applies_to_configuration: ["@DEVC-0001"], status: "approved" })
addNote("01-Ontology instances/06-clinical/evaluations", "CER-0001", "cer", "Clinical evaluation report Rev A", { applies_to_configuration: ["@DEVC-0001"], status: "approved" })
addNote("01-Ontology instances/07-qms/processes", "QMS-0001", "qms", "Example Medical QMS")
addNote("01-Ontology instances/07-qms/processes", "PROC-PMS-0001", "qms-process", "Post-market surveillance process", { covered_by_qms: ["@QMS-0001"], owned_by: ["@ROLE-QUALITY"] })
addNote("01-Ontology instances/09-conformity/certificates", "CERT-0001", "certificate", "Synthetic MDR certificate", { status: "current", effective_from: "2026-01-01", effective_to: "2031-01-01", applies_to_configuration: ["@DEVC-0001"] })
addNote("01-Ontology instances/10-traceability/udi", "UDI-BASIC-0001", "basic-udi-di", "Synthetic Basic UDI-DI", { identifier_value: "SYNTHETIC-BASIC-UDI" })
addNote("01-Ontology instances/11-post-market/pms-plans", "PMS-PLAN-0001", "pms-plan", "Example PMS plan", { applies_to_configuration: ["@DEVC-0001"], status: "approved", approved_by: ["@ROLE-QUALITY"] })
addNote("01-Ontology instances/11-post-market/signals", "SIGNAL-0001", "signal", "Example low-severity signal", { concerns: ["@DEVC-0001"], triggers: ["@CHG-0001"], status: "open" })
addNote("01-Ontology instances/12-changes/changes", "CHG-0001", "change", "Software alarm refinement", { concerns: ["@DEVC-0001"], has_impact_assessment: ["@CIA-0001"], impacts: ["@SW-0001", "@RISK-0001", "@CE-0001"], change_type: "software", status: "released", impact_domains: ["risk", "clinical", "software", "technical-documentation", "udi", "conformity"] })
addNote("01-Ontology instances/12-changes/impact-assessments", "CIA-0001", "change-impact-assessment", "Software alarm change impact assessment", { concerns: ["@DEVC-0001"], supported_by: ["@EVD-0001"], approved_by: ["@ROLE-REGULATORY-AFFAIRS"] })
addNote("01-Ontology instances/13-supply-continuity", "SUPPLY-0001", "supply-interruption", "Synthetic supply interruption scenario", { concerns: ["@DEVM-0001"], forecast_duration: "P2W", status: "not-assessed" })
addNote("00-Ontology/assertions", "AST-0001", "assertion", "Current classification assertion", { subject: "@DEVC-0001", predicate: "classified_as", object: "@CLASS-IIb", assertion_status: "accepted", assertion_kind: "derived", valid_from: "2026-07-01", derived_by_rule: ["@RULE-GATE-MARKET-001"], supported_by: ["@EVD-0001"], source_provisions: ["@PROV-MDR-ANNEX-VIII"] })

const questionSection = spec.slice(spec.indexOf("## 63.1"), spec.indexOf("## 64."))
const questionRows = [...questionSection.matchAll(/^\| `(CQ-\d{2}-\d{2})` \| ([^|]+) \| `([^`]+)` \| `(AP-[A-Z]+)` \|$/gm)]
const categoryConfig = {
  "01": { folder: "01-device-definition-and-intended-purpose", start: "device-configuration", context: ["intended_purpose", "manufacturer", "market", "relevant_date"], traverses: ["has_intended_purpose", "asserted_in", "derived_from"], constraint: "CON-MFR-001", source: "PROV-MDR-ARTICLE-10" },
  "02": { folder: "02-device-classification", start: "device-configuration", context: ["intended_purpose", "duration", "invasiveness", "active_characteristic", "software_function"], traverses: ["classified_by", "considers_rule", "concludes_class", "based_on_characteristic"], constraint: "CON-CLASS-001", source: "PROV-MDR-ANNEX-VIII" },
  "03": { folder: "03-gspr", start: "device-configuration", context: ["intended_purpose", "risk_class", "configuration_baseline"], traverses: ["has_applicable_requirement", "instantiates_requirement", "satisfied_by", "derived_from"], constraint: "CON-GSPR-001", source: "PROV-MDR-ANNEX-I" },
  "04": { folder: "04-qms", start: "manufacturer", context: ["manufacturer", "device_portfolio", "lifecycle_state"], traverses: ["owned_by", "covered_by_qms", "responsible_party", "generated_by"], constraint: "CON-SOURCE-001", source: "PROV-MDR-ARTICLE-10" },
  "05": { folder: "05-clinical-evidence", start: "device-configuration", context: ["intended_purpose", "clinical_claims", "risk_class", "clinical_evidence"], traverses: ["evaluates", "uses_evidence", "supports_claim", "updated_by"], constraint: "CON-EVID-001", source: "PROV-MDR-ARTICLE-61" },
  "06": { folder: "06-technical-documentation", start: "device-configuration", context: ["configuration_baseline", "lifecycle_state", "technical_documentation"], traverses: ["applies_to_configuration", "demonstrates_compliance_with", "supersedes", "generated_by"], constraint: "CON-DOC-001", source: "PROV-MDR-ANNEX-II" },
  "07": { folder: "07-conformity-assessment", start: "device-configuration", context: ["risk_class", "device_type", "relevant_date", "certificate_state"], traverses: ["classified_by", "has_applicable_requirement", "satisfied_by", "derived_from"], constraint: "CON-CLASS-001", source: "PROV-MDR-ARTICLE-10" },
  "08": { folder: "08-traceability", start: "device-configuration", context: ["manufacturer", "device_identity", "market", "relevant_date"], traverses: ["identified_by", "responsible_party", "supported_by", "derived_from"], constraint: "CON-SOURCE-001", source: "PROV-MDR-ARTICLE-27" },
  "09": { folder: "09-pms-vigilance", start: "device-configuration", context: ["market_status", "risk_class", "event_facts", "relevant_date"], traverses: ["collects_from", "produces_signal", "triggers", "updates", "results_in"], constraint: "CON-PMS-001", source: "PROV-MDR-ARTICLE-83" },
}
for (const match of questionRows) {
  const [, id, title, ontology_path, answerPattern] = match
  const category = categoryConfig[id.slice(3, 5)]
  const governed = competencyQuestionContent[id]
  if (!governed) throw new Error(`No governed answer for ${id}`)
  const governedPath = governed.ontologyPath ?? ontology_path
  addNote(`05-Questions/${category.folder}`, id, "competency-question", title.trim(), {
    requirement_class: category.folder,
    answer_pattern: `@${answerPattern}`,
    starts_from: [category.start],
    requires_context: category.context,
    traverses: category.traverses,
    applies_rule_families: [answerPattern === "AP-PMS" ? "post-market" : category.folder],
    checks_constraint: [`@${category.constraint}`],
    uses_source: [`@${category.source}`],
    ontology_path: governedPath,
  }, `# ${title.trim()}\n\n> [!summary] Manufacturer answer\n> Assemble this answer from the graph and expose missing facts; do not infer absent device data.\n\n## Required context\n\n${category.context.map((item) => `- \`${item}\``).join("\n")}\n\n## Ontology path\n\n\`${governedPath}\`\n\n## Answer\n\n${governed.answer}\n\n## Related entities\n\nStart from the resolved \`${category.start}\`.\n\n## Source basis\n\nBinding source: @${category.source}\n`)
}
if (questionRows.length !== 90) throw new Error(`Expected 90 competency questions, found ${questionRows.length}`)

const metaNotes = [
  ["07_Other/00-Meta", "META-ONTOLOGY-OVERVIEW", "meta-page", "Ontology overview", "The semantic centre is Manufacturer × DeviceConfiguration × LifecycleState × ApplicableRequirement × ResponsibleParty × RequiredActivity × Evidence × ComplianceStatus × Time × Provenance."],
  ["07_Other/00-Meta", "META-MODELLING-CONVENTIONS", "meta-page", "Modelling conventions", "Markdown is canonical. Stable IDs do not depend on filenames. Qualified or derived regulatory statements are represented as assertions or decisions with provenance."],
  ["07_Other/00-Meta", "META-ID-REGISTRY", "meta-page", "ID registry", "The compiler validates global ID uniqueness and emits the complete registry in `generated/id-registry.json`."],
]
for (const [folder, id, type, title, text] of metaNotes) addNote(folder, id, type, title, {}, `# ${title}\n\n${text}\n`)

const views = [
  ["VIEW-USE-CASES", "Use-case demonstrations", "Explore five high-impact manufacturer journeys selected from the 19-use-case catalogue."],
  ["VIEW-DEVICE-EXPLORER", "Device explorer", "Browse synthetic and future manufacturer device configurations."],
  ["VIEW-REQUIREMENT-EXPLORER", "Requirement explorer", "Trace generic requirements to device-specific instances and evidence."],
  ["VIEW-EVIDENCE-EXPLORER", "Evidence explorer", "Inspect evidence scope, coverage, status and supported requirements."],
  ["VIEW-RISK-EXPLORER", "Risk explorer", "Traverse hazards, risks, controls and verification evidence."],
  ["VIEW-CLINICAL-EXPLORER", "Clinical explorer", "Trace claims, clinical evaluation, evidence and PMS feedback."],
  ["VIEW-QMS-EXPLORER", "QMS and process explorer", "Inspect process ownership, responsibility and generated evidence."],
  ["VIEW-MARKET-EXPLORER", "Conformity and market-access explorer", "Review classification, conformity prerequisites and release gates."],
  ["VIEW-TRACEABILITY-EXPLORER", "UDI and EUDAMED explorer", "Review regulatory identifiers and registration state."],
  ["VIEW-PMS-EXPLORER", "PMS and vigilance explorer", "Inspect plans, signals, assessments and downstream updates."],
  ["VIEW-CHANGE-IMPACT", "Change-impact explorer", "Traverse change effects into risk, clinical, evidence, UDI and conformity."],
  ["VIEW-SOURCE-EXPLORER", "Source and provenance explorer", "Distinguish binding law, guidance, standards and internal evidence."],
  ["VIEW-OPEN-GAPS", "Open compliance gaps", "Generated constraint failures appear in `content/07_Other/_generated/compliance-gaps`."],
  ["VIEW-DUE-DATES", "Due dates", "Generated temporal assertions and freshness warnings are collected here."],
  ["VIEW-QUESTION-INDEX", "Competency question index", "All ninety manufacturer competency questions are linked below."],
  ["VIEW-GLOSSARY", "Glossary", "Ontology classes and controlled vocabularies provide the project glossary."],
]
const viewBodies = {
  "VIEW-USE-CASES": `## Explore\n\n- [Assessment of all 19 use cases](/07_other/use-case-demonstrations/uc-assess-001-use-case-impact-assessment)\n- [UC2 — Regulatory compliance gap assessment](/07_other/use-case-demonstrations/uc-demo-02-regulatory-compliance-gap-assessment)\n- [UC3 — Market-release readiness](/07_other/use-case-demonstrations/uc-demo-03-market-release-readiness)\n- [UC5 — Change-impact analysis](/07_other/use-case-demonstrations/uc-demo-05-change-impact-analysis)\n- [UC8 — PMS and vigilance closed loop](/07_other/use-case-demonstrations/uc-demo-08-pms-vigilance-closed-loop)\n- [UC18 — Grounded LLM regulatory assistant](/07_other/use-case-demonstrations/uc-demo-18-grounded-llm-regulatory-assistant)\n\n## Continue\n\n- [[VIEW-DEVICE-EXPLORER-device-explorer|Device explorer]]\n- [[VIEW-QUESTION-INDEX-competency-question-index|Competency-question index]]`,
  "VIEW-DEVICE-EXPLORER": `## Explore\n\n- [All device records](/01-ontology-instances/03-devices/)\n- [[DEVF-0001-example-infusion-system|Example device family]] → [[DEVM-0001-example-infusion-pump|model]] → [[DEVV-0001-example-infusion-pump-adult|variant]] → [[DEVC-0001-example-infusion-pump-adult-10|released configuration]]\n- [Generated configuration compliance view](/07_other/_generated/device-compliance/devc-0001)\n\n## Continue\n\n- [[VIEW-REQUIREMENT-EXPLORER-requirement-explorer|Applicable requirements]]\n- [[VIEW-RISK-EXPLORER-risk-explorer|Risk controls]]\n- [[VIEW-CLINICAL-EXPLORER-clinical-explorer|Clinical evidence]]`,
  "VIEW-REQUIREMENT-EXPLORER": `## Explore\n\n- [Requirement catalogue](/01-ontology-instances/04-requirements/)\n- [Generic GSPR requirements](/01-ontology-instances/04-requirements/gspr/)\n- [Device-specific requirement instances](/01-ontology-instances/04-requirements/instances/)\n- [Generated requirement compliance views](/07_other/_generated/requirement-compliance/)\n\n## Follow a complete trace\n\n1. [[GSPR-0001-electrical-safety|Generic electrical-safety requirement]]\n2. [[CRI-0001-electrical-safety-requirement-instance|Device-specific instance]]\n3. [[EVD-0001-electrical-safety-report-rev-a|Objective evidence]]\n\nCompare this satisfied path with [[CRI-0002-cybersecurity-requirement-instance|the open cybersecurity instance]] and [its generated gap](/07_other/_generated/compliance-gaps/).\n\n## Continue\n\n- [[VIEW-EVIDENCE-EXPLORER-evidence-explorer|Evidence explorer]]\n- [[VIEW-RISK-EXPLORER-risk-explorer|Risk explorer]]\n- [[VIEW-SOURCE-EXPLORER-source-and-provenance-explorer|Source explorer]]`,
  "VIEW-EVIDENCE-EXPLORER": `## Explore\n\n- [All evidence and technical-documentation records](/01-ontology-instances/08-technical-documentation/)\n- [Evidence items](/01-ontology-instances/08-technical-documentation/evidence/)\n- [[EVD-0001-electrical-safety-report-rev-a|Electrical-safety evidence]]\n- [[CEVD-0001-synthetic-clinical-literature-set|Clinical evidence set]]\n- [[TD-0001-example-technical-documentation|Technical-documentation set]]\n\n## Follow evidence scope\n\n[[EVD-0001-electrical-safety-report-rev-a|Evidence]] → [[DEVC-0001-example-infusion-pump-adult-10|covered configuration]] → [[CRI-0001-electrical-safety-requirement-instance|satisfied requirement instance]].\n\n## Continue\n\n- [[VIEW-REQUIREMENT-EXPLORER-requirement-explorer|Requirement explorer]]\n- [[VIEW-CLINICAL-EXPLORER-clinical-explorer|Clinical explorer]]`,
  "VIEW-RISK-EXPLORER": `## Explore\n\n- [All risk records](/01-ontology-instances/05-risk/)\n- [[HAZ-0001-excessive-flow|Hazard]] → [[HS-0001-patient-receives-excessive-flow|hazardous situation]] → [[HARM-0001-fluid-overload|harm]]\n- [[RISK-0001-excessive-delivery-risk|Risk]] → [[RCM-0001-independent-flow-monitoring|risk control]] → [[EVD-0001-electrical-safety-report-rev-a|verification evidence]]\n\n## Continue\n\n- [[VIEW-REQUIREMENT-EXPLORER-requirement-explorer|Linked requirements]]\n- [[VIEW-PMS-EXPLORER-pms-and-vigilance-explorer|Post-market feedback]]\n- [[VIEW-CHANGE-IMPACT-change-impact-explorer|Change impact]]`,
  "VIEW-CLINICAL-EXPLORER": `## Explore\n\n- [All clinical records](/01-ontology-instances/06-clinical/)\n- [[CE-0001-example-clinical-evaluation|Clinical evaluation]]\n- [[CEVD-0001-synthetic-clinical-literature-set|Clinical evidence set]]\n- [[CER-0001-clinical-evaluation-report-rev-a|Clinical evaluation report]]\n\n## Context\n\nThe evaluation covers [[DEVC-0001-example-infusion-pump-adult-10|the released configuration]] and is updated through the PMS/change loop.\n\n## Continue\n\n- [[VIEW-EVIDENCE-EXPLORER-evidence-explorer|Evidence explorer]]\n- [[VIEW-PMS-EXPLORER-pms-and-vigilance-explorer|PMS explorer]]`,
  "VIEW-QMS-EXPLORER": `## Explore\n\n- [All QMS records](/01-ontology-instances/07-qms/)\n- [[QMS-0001-example-medical-qms|Example manufacturer QMS]]\n- [[PROC-PMS-0001-post-market-surveillance-process|PMS process]]\n- [[ORG-MFR-0001-example-medical-oy|Manufacturer]]\n- [[ROLE-QUALITY-quality|Quality owner]] and [[ROLE-REGULATORY-AFFAIRS-regulatory-affairs|Regulatory Affairs]]\n\n## Continue\n\n- [[VIEW-PMS-EXPLORER-pms-and-vigilance-explorer|PMS records]]\n- [[VIEW-CHANGE-IMPACT-change-impact-explorer|Controlled changes]]`,
  "VIEW-MARKET-EXPLORER": `## Explore\n\n- [Conformity records](/01-ontology-instances/09-conformity/)\n- [[CLD-0001-example-classification-decision|Classification decision]]\n- [[CERT-0001-synthetic-mdr-certificate|Certificate and validity]]\n- [[RULE-GATE-MARKET-001-market-release-readiness|Market-release rule]]\n- [Generated device compliance view](/07_other/_generated/device-compliance/devc-0001)\n\n## Continue\n\n- [[VIEW-DEVICE-EXPLORER-device-explorer|Device context]]\n- [[VIEW-REQUIREMENT-EXPLORER-requirement-explorer|Prerequisite requirements]]\n- [[VIEW-DUE-DATES-due-dates|Validity and due dates]]`,
  "VIEW-TRACEABILITY-EXPLORER": `## Explore\n\n- [All traceability records](/01-ontology-instances/10-traceability/)\n- [[UDI-BASIC-0001-synthetic-basic-udi-di|Synthetic Basic UDI-DI]]\n- [[SRC-UDI-european-commission-udi-overview|UDI source basis]]\n- [[SRC-EUDAMED-european-commission-eudamed-overview|EUDAMED source basis]]\n- [[DEVC-0001-example-infusion-pump-adult-10|Linked device configuration]]\n\n## Continue\n\n- [[VIEW-DEVICE-EXPLORER-device-explorer|Device explorer]]\n- [[VIEW-SOURCE-EXPLORER-source-and-provenance-explorer|Source explorer]]`,
  "VIEW-PMS-EXPLORER": `## Explore\n\n- [All post-market records](/01-ontology-instances/11-post-market/)\n- [[PMS-PLAN-0001-example-pms-plan|PMS plan]]\n- [[SIGNAL-0001-example-low-severity-signal|Example signal]]\n- [[RULE-PMS-PSUR-001-psur-cadence-for-class-iib-and-iii-devices|PSUR cadence rule]]\n- [[CHG-0001-software-alarm-refinement|Triggered change]]\n\n## Follow the loop\n\n[[SIGNAL-0001-example-low-severity-signal|Signal]] → risk/clinical reassessment → [[CIA-0001-software-alarm-change-impact-assessment|impact assessment]] → updated evidence.\n\n## Continue\n\n- [[VIEW-RISK-EXPLORER-risk-explorer|Risk explorer]]\n- [[VIEW-CLINICAL-EXPLORER-clinical-explorer|Clinical explorer]]`,
  "VIEW-CHANGE-IMPACT": `## Explore\n\n- [All changes and assessments](/01-ontology-instances/12-changes/)\n- [[CHG-0001-software-alarm-refinement|Example software change]]\n- [[CIA-0001-software-alarm-change-impact-assessment|Impact assessment]]\n- [Generated change-impact view](/07_other/_generated/change-impact/chg-0001)\n- [[RULE-CHANGE-IMPACT-001-high-impact-change-reassessment|Change-impact rule]]\n\n## Continue\n\n- [[VIEW-RISK-EXPLORER-risk-explorer|Affected risk]]\n- [[VIEW-CLINICAL-EXPLORER-clinical-explorer|Affected clinical evaluation]]\n- [[VIEW-MARKET-EXPLORER-conformity-and-market-access-explorer|Conformity impact]]`,
  "VIEW-SOURCE-EXPLORER": `## Explore\n\n- [All source notes](/02-sources/)\n- [Binding legislation and provisions](/02-sources/legislation/)\n- [Non-binding guidance](/02-sources/guidance/)\n- [Standards and technical sources](/02-sources/standards/)\n- [Generated source-freshness report](/07_other/_generated/source-freshness)\n\n## Start with\n\n- [[SRC-MDR-2017-745-regulation-eu-2017745-consolidated-text|MDR consolidated text]]\n- [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|Annex I GSPRs]]\n- [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|Annex VIII classification]]\n- [[SRC-MDCG-INDEX-mdcg-endorsed-documents-and-other-guidance|MDCG guidance index]]`,
  "VIEW-OPEN-GAPS": `## Explore\n\n- [Generated open compliance gaps](/07_other/_generated/compliance-gaps/)\n- [Generated advisory validation findings](/07_other/_generated/validation-findings/)\n- [[CRI-0002-cybersecurity-requirement-instance|Requirement currently producing the seed gap]]\n- [[CON-GSPR-001-applicable-requirements-have-compliance-traceability|Constraint that detected it]]\n- [Generated requirement compliance views](/07_other/_generated/requirement-compliance/)\n\n## Resolve a gap\n\nOpen the subject requirement, inspect the failed constraint, add configuration-scoped evidence or an explicit justified state, then rebuild the ontology.\n\nHard findings can block a lifecycle decision. Advisory findings identify data-quality improvements without asserting non-compliance, while review-trigger rules request qualified assessment rather than producing a final legal conclusion.\n\n## Continue\n\n- [[VIEW-REQUIREMENT-EXPLORER-requirement-explorer|Requirement explorer]]\n- [[VIEW-EVIDENCE-EXPLORER-evidence-explorer|Evidence explorer]]`,
  "VIEW-DUE-DATES": `## Explore\n\n- [[CERT-0001-synthetic-mdr-certificate|Certificate validity dates]]\n- [[RULE-PMS-PSUR-001-psur-cadence-for-class-iib-and-iii-devices|PSUR scheduling rule]]\n- [Generated source-freshness report](/07_other/_generated/source-freshness)\n- [[VIEW-PMS-EXPLORER-pms-and-vigilance-explorer|PMS and reporting context]]\n\nDates are evaluated against a declared relevant date. An interval without a validated last-event date remains unresolved rather than becoming an invented deadline.`,
  "VIEW-GLOSSARY": `## Explore\n\n- [Ontology classes](/00-ontology/classes/)\n- [Relation definitions](/00-ontology/relations/)\n- [Controlled vocabularies](/00-ontology/vocabularies/)\n- [[VOC-COMPLIANCE-STATE-compliance-state|Compliance states]]\n- [[VOC-MISSING-STATE-missing-state|Missing-information states]]\n- [[VOC-NORMATIVE-STATUS-normative-status|Source authority states]]\n\nUse search for a term, then follow its class, relation, backlinks and graph neighbourhood.`,
}
for (const [id, title, text] of views) {
  const body = id === "VIEW-QUESTION-INDEX"
    ? `# ${title}\n\n${text}\n\n${questionRows.map((match) => `- @${match[1]} — ${match[2].trim()}`).join("\n")}\n`
    : `# ${title}\n\n${text}\n\n${viewBodies[id] ?? ""}\n`
  addNote("04-Views", id, "view", title, {}, body)
}

addNote("", "HOME-MDR-ONTOLOGY", "landing-page", "EU MDR Manufacturer Ontology", {}, `# EU MDR Manufacturer Ontology\n\nAn ontology is a shared, explicit model of a subject area. It identifies the kinds of things that matter, gives those things consistent meanings, and records how they may be connected. In this vault, the subject area is the EU MDR manufacturer’s regulatory system: organisations, medical devices, requirements, risks, evidence, decisions, lifecycle activities and their provenance.\n\nThe ontology is made first of **classes**, which define reusable concepts such as Manufacturer, Device Configuration, Requirement, Risk and Verification Evidence. Individual records are **instances** of those classes: for example, a particular manufacturer, infusion-pump configuration, risk-control measure or test report. Controlled vocabularies provide consistent values for states such as approval, applicability and compliance.\n\nIt is also made of **relations**, which give meaning to connections between records. Relations express statements such as a manufacturer produces a device, a requirement applies to a configuration, evidence demonstrates compliance, or a risk control mitigates a risk. These typed connections turn separate Markdown pages into a traceable knowledge graph and preserve the source and scope of regulatory claims.\n\nThe current ontology has 179 class definitions, 88 relation definitions, 22 constraints and 9 executable rules. Its executable governance uses three assurance levels: hard constraints and rules may block a lifecycle decision, advisory constraints identify non-blocking data-quality findings, and review-trigger rules derive a need for qualified assessment rather than a final legal conclusion. This tiering permits broader machine assistance while keeping device-specific judgement and legally sensitive interpretation under accountable human review.\n\nThe ontology is used by linking technical-file records to the concepts and relations that describe their regulatory meaning. People can follow those links to review a device’s intended purpose, classification, requirements, risks, evidence and open gaps, while software can validate identifiers and relationships, apply governed rules and constraints, distinguish blocking gaps from advisory findings, and assemble grounded context for the competency questions. The result supports navigation and reasoning without replacing accountable regulatory decision-making.\n`)

const relationshipPredicates = new Set(relationDefs.map((definition) => definition.predicate))
const incomingReferences = new Map()
const collectSeedRefs = (value, predicate, ownerId) => {
  if (typeof value === "string" && value.startsWith("@")) {
    const targetId = value.slice(1)
    if (!incomingReferences.has(targetId)) incomingReferences.set(targetId, [])
    incomingReferences.get(targetId).push({ source: ownerId, predicate })
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectSeedRefs(item, predicate, ownerId))
  }
}
for (const note of notes) {
  for (const [predicate, value] of Object.entries(note.data)) collectSeedRefs(value, predicate, note.data.id)
}

const purposeByType = {
  "ontology-class": (title) => `Defines the reusable semantic category **${title}**. Instance notes use this class so validation, retrieval and graph traversal can distinguish this kind of object from other regulatory objects.`,
  "relation-definition": (title) => `Defines the ontology predicate \`${title}\`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.`,
  "answer-pattern": (title) => `Defines the reusable answer structure **${title}**. Competency questions use it to assemble facts, rules, evidence, gaps and provenance in a consistent order.`,
  "legal-provision": (title) => `Represents the traceable legal-source fragment **${title}**. Requirements, rules and decisions link here to retain provenance without organising the manufacturer workflow around article numbers.`,
  "gspr-requirement": (title) => `Represents the reusable generic requirement **${title}**. It is instantiated separately for each applicable device configuration so applicability, method, evidence and compliance state remain device-specific.`,
  "compliance-requirement-instance": (title) => `Represents the concrete manufacturer obligation **${title}** for an applicable product context. This is where applicability rationale, compliance method, objective evidence and gap status are evaluated.`,
  "assertion": (title) => `Represents the reviewable claim **${title}**. Its subject, predicate, object, validity, rule, evidence and provenance make the conclusion auditable instead of leaving it as an unqualified property.`,
  "classification-decision": (title) => `Represents the auditable regulatory decision **${title}**. It connects controlled device facts and candidate classification rules to an approved conclusion and its legal basis.`,
  "classification-rule": (title) => `Represents the controlled classification rule **${title}** used by classification decisions.`,
  "verification-evidence": (title) => `Represents objective verification evidence **${title}**. Its relationships identify the covered configuration and the requirement or control it supports.`,
  "clinical-evidence": (title) => `Represents clinical evidence **${title}** used by a clinical evaluation for a defined configuration, intended purpose or claim.`,
  "document-version": (title) => `Represents the controlled document version **${title}**, distinct from the process or concept that the document records.`,
  "technical-documentation-set": (title) => `Represents the controlled technical-documentation set **${title}** and the evidence and document versions included for its product scope.`,
  "hazard": (title) => `Represents the hazard **${title}** at the start of a risk-management causal chain.`,
  "hazardous-situation": (title) => `Represents the hazardous situation **${title}** connecting a hazard or sequence of events to possible harm.`,
  "harm": (title) => `Represents the possible harm **${title}** used when evaluating risk and residual risk.`,
  "risk": (title) => `Represents the evaluated risk **${title}** and provides the target for controls, verification and post-market reassessment.`,
  "risk-control-measure": (title) => `Represents the risk control **${title}** and links the controlled risk to verification evidence and residual-risk evaluation.`,
  "clinical-evaluation": (title) => `Represents the clinical evaluation **${title}**, its device scope, evidence set and controlled report.`,
  "cer": (title) => `Represents the controlled clinical-evaluation-report version **${title}**; it is evidence of the evaluation, not the evaluation process itself.`,
  "qms": (title) => `Represents the manufacturer's QMS **${title}** as the system covering controlled processes rather than merely a certificate.`,
  "qms-process": (title) => `Represents the controlled QMS process **${title}**, including ownership, coverage and generated records.`,
  "certificate": (title) => `Represents the certificate **${title}**, including its validity period and covered configuration.`,
  "pms-plan": (title) => `Represents the controlled PMS plan **${title}** for the linked marketed configuration.`,
  "signal": (title) => `Represents the post-market signal **${title}** and the assessments, changes or CAPA that it triggers.`,
  "change": (title) => `Represents the controlled change **${title}** and its effects across configuration, risk, clinical evidence, documentation, UDI and conformity.`,
  "change-impact-assessment": (title) => `Represents the impact assessment **${title}** used to justify and approve a controlled change.`,
  "manufacturer": (title) => `Represents the legal manufacturer **${title}** and anchors manufacturer responsibilities for linked devices and processes.`,
  "role": (title) => `Represents the organisational role **${title}** used for responsibility, review, approval and ownership assignments.`,
  "meta-page": (title) => `Provides project-level guidance for **${title}** and explains how the canonical vault is modelled or maintained.`,
}

const explorerForType = (type) => {
  if (type === "use-case-demonstration") return "@VIEW-USE-CASES"
  if (type.includes("requirement") || type === "gspr-requirement") return "@VIEW-REQUIREMENT-EXPLORER"
  if (["device", "device-family", "device-model", "device-variant", "device-configuration", "intended-purpose", "target-population", "intended-user", "use-environment", "device-class", "classification-decision", "classification-rule", "configuration-baseline", "software-version"].includes(type)) return "@VIEW-DEVICE-EXPLORER"
  if (["hazard", "hazardous-situation", "harm", "risk", "risk-control-measure", "residual-risk", "benefit-risk-determination"].includes(type)) return "@VIEW-RISK-EXPLORER"
  if (type.includes("clinical") || ["cer", "pmcf-plan", "pmcf-report", "sscp"].includes(type)) return "@VIEW-CLINICAL-EXPLORER"
  if (type.includes("evidence") || type.includes("document") || type === "technical-documentation-set") return "@VIEW-EVIDENCE-EXPLORER"
  if (type === "qms" || type.includes("process") || ["role", "manufacturer", "supplier"].includes(type)) return "@VIEW-QMS-EXPLORER"
  if (["certificate", "conformity-assessment", "market-release-gate", "declaration-of-conformity"].includes(type)) return "@VIEW-MARKET-EXPLORER"
  if (type.includes("udi") || type.includes("registration") || type === "identifier") return "@VIEW-TRACEABILITY-EXPLORER"
  if (type.includes("pms") || ["signal", "psur", "complaint", "event", "trend", "fsca", "fsn"].includes(type)) return "@VIEW-PMS-EXPLORER"
  if (type.includes("change")) return "@VIEW-CHANGE-IMPACT"
  if (type.includes("source") || type.includes("guidance") || type === "legal-provision" || type === "standard") return "@VIEW-SOURCE-EXPLORER"
  if (["ontology-class", "relation-definition", "controlled-vocabulary"].includes(type)) return "@VIEW-GLOSSARY"
  return "@HOME-MDR-ONTOLOGY"
}

const formatGuideValue = (value) => {
  const values = Array.isArray(value) ? value : [value]
  return values.map((item) => {
    if (typeof item === "string" && item.startsWith("@")) return item
    if (typeof item === "object") return `\`${JSON.stringify(item)}\``
    return `\`${String(item)}\``
  }).join(", ")
}

const isSkeletalBody = (body) => body.split(/\r?\n/).filter((line) => line.trim() && !line.trim().startsWith("#")).length < 2
const seedNoteById = new Map(notes.map((note) => [note.data.id, note]))
const seedRefIds = (value) => {
  const values = Array.isArray(value) ? value : value == null ? [] : [value]
  return values.filter((item) => typeof item === "string" && item.startsWith("@")).map((item) => item.slice(1))
}

for (const note of notes) {
  if (!isSkeletalBody(note.body) && note.data.type !== "ontology-class") continue
  const purposeFactory = purposeByType[note.data.type]
  const purpose = purposeFactory
    ? purposeFactory(note.data.title)
    : `Provides the stable \`${note.data.type}\` node **${note.data.title}** so people, validation rules and retrieval tools can refer to the same regulatory object and traverse its context.`
  const relationshipRows = Object.entries(note.data)
    .filter(([predicate, value]) => relationshipPredicates.has(predicate) && value != null && (!Array.isArray(value) || value.length))
    .map(([predicate, value]) => `- \`${predicate}\` → ${formatGuideValue(value)}`)
  const incomingRows = (incomingReferences.get(note.data.id) ?? [])
    .filter((reference, index, array) => array.findIndex((item) => item.source === reference.source && item.predicate === reference.predicate) === index)
    .slice(0, 20)
    .map((reference) => `- @${reference.source} via \`${reference.predicate}\``)
  const stateFields = ["status", "version", "risk_class", "lifecycle_state", "market_status", "applicable", "applicability_rationale", "compliance_method", "compliance_status", "normative_status", "effective_from", "effective_to", "approved_at", "decision_date"]
  const stateRows = stateFields.filter((field) => note.data[field] !== undefined && note.data[field] !== null).map((field) => `| \`${field}\` | ${formatGuideValue(note.data[field])} |`)
  const generatedLinks = []
  if (note.data.type === "gspr-requirement") generatedLinks.push(`[Generated compliance view](/07_other/_generated/requirement-compliance/${note.data.id.toLowerCase()})`, `[Open compliance gaps](/07_other/_generated/compliance-gaps/)`)
  if (note.data.type === "compliance-requirement-instance") generatedLinks.push(`[Generated requirement compliance views](/07_other/_generated/requirement-compliance/)`, `[Open compliance gaps](/07_other/_generated/compliance-gaps/)`)
  if (note.data.type === "device-configuration") generatedLinks.push(`[Generated device compliance view](/07_other/_generated/device-compliance/${note.data.id.toLowerCase()})`)
  if (note.data.type === "change") generatedLinks.push(`[Generated change-impact view](/07_other/_generated/change-impact/${note.data.id.toLowerCase()})`)
  if (note.data.official_url) generatedLinks.push(`[Official source](${note.data.official_url})`, `[Source-freshness report](/07_other/_generated/source-freshness)`)
  const requirementDetails = note.data.type === "gspr-requirement"
    ? (() => {
        const instanceIds = (incomingReferences.get(note.data.id) ?? []).filter((reference) => reference.predicate === "instantiates_requirement").map((reference) => reference.source)
        const evidenceIds = [...new Set(instanceIds.flatMap((instanceId) => seedRefIds(seedNoteById.get(instanceId)?.data.satisfied_by)))]
        return `\n## Requirement use\n\n### Device-specific instances\n\n${instanceIds.length ? instanceIds.map((id) => `- @${id}`).join("\n") : "- No device-specific instance exists yet."}\n\n### Evidence connected through instances\n\n${evidenceIds.length ? evidenceIds.map((id) => `- @${id}`).join("\n") : "- No evidence is linked through a requirement instance; inspect open gaps."}\n\n### Compliance and gaps\n\n- [Generated compliance view](/07_other/_generated/requirement-compliance/${note.data.id.toLowerCase()})\n- [Open compliance gaps](/07_other/_generated/compliance-gaps/)\n`
      })()
    : note.data.type === "compliance-requirement-instance"
      ? `\n## Compliance evaluation\n\n- Generic requirement: ${formatGuideValue(note.data.instantiates_requirement ?? [])}\n- Objective evidence: ${seedRefIds(note.data.satisfied_by).length ? formatGuideValue(note.data.satisfied_by) : "No evidence linked; inspect the open-gap view."}\n- [Generated requirement compliance views](/07_other/_generated/requirement-compliance/)\n- [Open compliance gaps](/07_other/_generated/compliance-gaps/)\n`
      : ""
  const schemaDetails = note.data.type === "relation-definition"
    ? `\n## Relation contract\n\n| Property | Value |\n|---|---|\n| Domain | ${formatGuideValue(note.data.domain)} |\n| Range | ${formatGuideValue(note.data.range)} |\n| Functional | \`${note.data.functional}\` |\n| Transitive | \`${note.data.transitive}\` |\n| Provenance required | \`${note.data.provenance_required}\` |\n`
    : note.data.type === "ontology-class"
      ? `\n## Class hierarchy\n\n${note.data.parent_classes?.length ? `Parent class: ${formatGuideValue(note.data.parent_classes)}.` : "This class has no asserted parent in the seed hierarchy."}\n`
      : note.data.type === "answer-pattern"
        ? `\n## Assembly sequence\n\n${note.data.sequence}\n`
        : ""
  const typeDetails = `${schemaDetails}${requirementDetails}`
  const isOntologyClass = note.data.type === "ontology-class"
  note.body = `${note.body.trim()}${isOntologyClass ? "" : `\n\n## Purpose\n\n${purpose}`}\n${typeDetails}${isOntologyClass ? "" : `\n## Key relationships\n\n${relationshipRows.length ? relationshipRows.join("\n") : "No outgoing instance relationships are asserted in this seed note."}`}\n\n## Current represented state\n\n${stateRows.length ? `| Field | Value |\n|---|---|\n${stateRows.join("\n")}` : "No lifecycle or compliance state is asserted on this schema-level node."}${isOntologyClass ? "" : `\n\n## Referenced by\n\n${incomingRows.length ? incomingRows.join("\n") : "No canonical note currently references this node. Backlinks will appear as the vault grows."}`}\n`
}

const fileById = new Map(notes.map((note) => [note.data.id, note.filename.replace(/\.md$/, "")]))
const transformRefs = (value) => {
  if (typeof value === "string" && value.startsWith("@")) {
    const id = value.slice(1)
    const target = fileById.get(id)
    if (!target) throw new Error(`Unknown seed reference ${id}`)
    return `[[${target}|${id}]]`
  }
  if (Array.isArray(value)) return value.map(transformRefs)
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, transformRefs(item)]))
  return value
}

for (const note of notes) {
  const target = path.join(root, "content", note.folder, note.filename)
  await mkdir(path.dirname(target), { recursive: true })
  if (!force) {
    try { await access(target); throw new Error(`Refusing to overwrite ${target}; use --force`) } catch (error) { if (error.code !== "ENOENT") throw error }
  }
  const data = transformRefs(note.data)
  let body = note.body
  body = body.replace(/@([A-Z][A-Z0-9-]+)/g, (_, id) => {
    const targetName = fileById.get(id)
    return targetName ? `[[${targetName}|${id}]]` : id
  })
  await writeFile(target, `---\n${JSON.stringify(data, null, 2)}\n---\n\n${body.trim()}\n`, "utf8")
}

await mkdir(path.join(root, "content", ".obsidian"), { recursive: true })
await writeFile(path.join(root, "content", ".obsidian", "app.json"), `${JSON.stringify({ showInlineTitle: true, useMarkdownLinks: false }, null, 2)}\n`)
await mkdir(path.join(root, "content", "07_Other/00-Meta", "templates"), { recursive: true })
await writeFile(path.join(root, "content", "07_Other/00-Meta", "templates", "semantic-note.md"), `---\nid: TYPE-0001\ntype: semantic-type\ntitle: Title\nstatus: draft\ncreated: ${today}\nmodified: ${today}\ndraft: true\n---\n\n# Title\n`)
console.log(`Seeded ${notes.length} canonical Markdown notes, including ${questionRows.length} competency questions.`)
