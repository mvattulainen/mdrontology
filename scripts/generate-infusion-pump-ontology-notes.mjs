import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import YAML from "yaml"
import { competencyQuestionContent } from "./lib/competency-question-content.mjs"

const root = process.cwd()
const contentRoot = path.join(root, "content")
const outputRoot = path.join(contentRoot, "06-Infpump FlowGuard ontology notes")
const today = "2026-08-15"

const slug = (value) => value
  .normalize("NFKD")
  .replace(/[^\w\s-]/g, "")
  .trim()
  .replace(/[\s_]+/g, "-")
  .replace(/-+/g, "-")
  .toLowerCase()

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(full)
  }
  return files
}

function parseMarkdown(text) {
  const match = text.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/)
  if (!match) return { data: {}, body: text }
  return { data: YAML.parse(match[1]) ?? {}, body: text.slice(match[0].length) }
}

const escapedHeading = (heading) => heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

function sectionBody(body, heading) {
  const match = body.match(new RegExp(`(?:^|\\n)## ${escapedHeading(heading)}\\r?\\n([\\s\\S]*?)(?=\\r?\\n## |$)`))
  return match?.[1]?.trim() ?? ""
}

function removeSection(body, heading) {
  return body.replace(new RegExp(`(?:^|\\n)## ${escapedHeading(heading)}\\r?\\n[\\s\\S]*?(?=\\r?\\n## |$)`, "g"), "")
}

function replaceSection(body, heading, replacement) {
  const pattern = new RegExp(`((?:^|\\n)## ${escapedHeading(heading)}\\r?\\n)[\\s\\S]*?(?=\\r?\\n## |$)`)
  if (!pattern.test(body)) throw new Error(`Missing required section: ${heading}`)
  return body.replace(pattern, `$1\n${replacement.trim()}\n`)
}

const markdown = (data, body) => `---\n${JSON.stringify(data, null, 2)}\n---\n\n${body.trim()}\n`
const pad = (number) => String(number).padStart(3, "0")

const familyDefinitions = [
  { type: "device-configuration", label: "Device configuration", count: 5, prefix: "DEVC-PUMP", file: "TF-01 Device Description/Device Configuration Index.xlsx" },
  { type: "intended-purpose", label: "Intended purpose", count: 5, prefix: "IP-PUMP", file: "TF-02 Intended Purpose/Intended Purpose Specification.docx" },
  { type: "classification-decision", label: "Classification decision", count: 5, prefix: "CLD-PUMP", file: "TF-03 Classification/Classification Rationale.docx" },
  { type: "compliance-requirement-instance", label: "Compliance requirement instance", count: 50, prefix: "CRI-PUMP", file: "TF-04 GSPR/GSPR Checklist.xlsx" },
  { type: "hazard", label: "Hazard", count: 20, prefix: "HAZ-PUMP", file: "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx" },
  { type: "hazardous-situation", label: "Hazardous situation", count: 20, prefix: "HS-PUMP", file: "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx" },
  { type: "harm", label: "Harm", count: 10, prefix: "HARM-PUMP", file: "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx" },
  { type: "risk", label: "Risk", count: 40, prefix: "RISK-PUMP", file: "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx" },
  { type: "risk-control-measure", label: "Risk control measure", count: 45, prefix: "RCM-PUMP", file: "TF-05 Risk Management/Risk Analysis and Risk Matrix.xlsx" },
  { type: "clinical-claim", label: "Clinical claim", count: 20, prefix: "CLM-PUMP", file: "TF-06 Clinical Evaluation/Clinical Claims Matrix.xlsx" },
  { type: "verification-evidence", label: "Verification evidence", count: 30, prefix: "EVD-PUMP", file: "TF-07 Verification and Validation/V&V Evidence Index.xlsx" },
  { type: "change", label: "Change", count: 12, prefix: "CHG-PUMP", file: "TF-08 Change Control/Design Change Register.xlsx" },
  { type: "signal", label: "Signal", count: 10, prefix: "SIGNAL-PUMP", file: "TF-09 PMS/PMS Signal Register.xlsx" },
  { type: "certificate", label: "Certificate", count: 3, prefix: "CERT-PUMP", file: "TF-10 Conformity/MDR Certificates Register.xlsx" },
  { type: "component", label: "Component", count: 10, prefix: "COMP-PUMP", file: "TF-01 Device Description/Bill of Materials.xlsx" },
  { type: "supplier", label: "Supplier", count: 5, prefix: "SUP-PUMP", file: "TF-11 Supplier Controls/Approved Supplier List.xlsx" },
  { type: "qms-process", label: "QMS process", count: 5, prefix: "PROC-PUMP", file: "TF-12 QMS/QMS Process Matrix.xlsx" },
  { type: "document-version", label: "Document version", count: 5, prefix: "DOC-PUMP", file: "TF-00 Technical Documentation/Document Master List.xlsx" },
  { type: "device-family", label: "Device family", count: 1, prefix: "DEVF-PUMP", file: "TF-01 Device Description/Product Hierarchy.xlsx" },
  { type: "device-model", label: "Device model", count: 1, prefix: "DEVM-PUMP", file: "TF-01 Device Description/Product Hierarchy.xlsx" },
  { type: "device-variant", label: "Device variant", count: 1, prefix: "DEVV-PUMP", file: "TF-01 Device Description/Product Hierarchy.xlsx" },
  { type: "configuration-baseline", label: "Configuration baseline", count: 1, prefix: "BASE-PUMP", file: "TF-01 Device Description/Configuration Baseline Index.xlsx" },
  { type: "software-version", label: "Software version", count: 1, prefix: "SW-PUMP", file: "TF-01 Device Description/Software Configuration Index.xlsx" },
  { type: "clinical-evaluation", label: "Clinical evaluation", count: 1, prefix: "CE-PUMP", file: "TF-06 Clinical Evaluation/Clinical Evaluation Plan and Report.docx" },
  { type: "clinical-evidence", label: "Clinical evidence", count: 1, prefix: "CEVD-PUMP", file: "TF-06 Clinical Evaluation/Clinical Evidence Appraisal.xlsx" },
  { type: "clinical-evaluation-report", label: "Clinical evaluation report", count: 1, prefix: "CER-PUMP", file: "TF-06 Clinical Evaluation/Clinical Evaluation Report Rev D.docx" },
  { type: "technical-documentation-set", label: "Technical documentation set", count: 1, prefix: "TD-PUMP", file: "TF-00 Technical Documentation/Technical Documentation Index.xlsx" },
  { type: "pms-plan", label: "PMS plan", count: 1, prefix: "PMS-PLAN-PUMP", file: "TF-09 PMS/Post-Market Surveillance Plan.docx" },
]

const titles = {
  "device-configuration": [
    "Infpump FlowGuard bedside configuration 1.0",
    "Infpump FlowGuard transport configuration 1.0",
    "Infpump FlowGuard paediatric configuration 1.0",
    "Infpump FlowGuard oncology configuration 1.1",
    "Infpump FlowGuard critical-care configuration 1.1",
  ],
  "intended-purpose": [
    "Controlled infusion of prescribed fluids for adult inpatients",
    "Controlled infusion during intra-hospital transport",
    "Controlled low-volume infusion for paediatric patients",
    "Controlled infusion of oncology medicines",
    "Controlled vasoactive infusion in critical care",
  ],
  "classification-decision": [
    "Bedside configuration classification decision",
    "Transport configuration classification decision",
    "Paediatric configuration classification decision",
    "Oncology configuration classification decision",
    "Critical-care configuration classification decision",
  ],
  "compliance-requirement-instance": [
    "Risk reduction and acceptable residual risk", "Known and foreseeable hazard control", "Benefit-risk acceptability", "Risk-control verification", "Use-error reduction",
    "Performance under normal conditions", "Device lifetime definition", "Transport and storage protection", "Compatibility with medicinal products", "Biological safety of fluid-path materials",
    "Infection and microbial contamination control", "Cleaning and disinfection instructions", "Measurement accuracy", "Delivered-volume accuracy", "Flow-rate accuracy",
    "Protection against unintended bolus", "Occlusion detection", "Air-in-line detection", "Free-flow prevention", "Alarm priority and intelligibility",
    "Alarm-system self-test", "Electrical safety", "Electromagnetic compatibility", "Battery endurance", "Protective earth and isolation",
    "Mechanical stability", "Pole-clamp integrity", "Fluid-ingress protection", "Thermal safety", "Software lifecycle control",
    "Software requirements traceability", "Software verification", "Cybersecurity risk control", "Access control", "Security logging",
    "Data integrity", "Clock and event chronology", "Interoperability", "Network-disconnection behaviour", "Human factors validation",
    "Display readability", "Control-panel usability", "Labelling content", "Instructions-for-use completeness", "UDI traceability",
    "Clinical evaluation support", "PMS planning", "Vigilance readiness", "Production release controls", "Configuration and change control",
  ],
  hazard: [
    "Unintended excessive flow", "Insufficient delivered flow", "Occluded infusion pathway", "Air introduced into infusion line", "Uncontrolled free flow",
    "Incorrect drug or concentration selection", "Premature battery depletion", "Electrical isolation failure", "Software dose-calculation error", "Suppressed or missed alarm",
    "Incorrect touch-interface input", "Cybersecurity compromise", "Electromagnetic disturbance", "Fluid ingress into enclosure", "Pole-clamp mechanical failure",
    "Tubing misconnection", "Excessive enclosure temperature", "Loss of records or clock drift", "Microbial contamination", "Use error during setup",
  ],
  "hazardous-situation": [
    "Patient connected while pump delivers above programmed rate", "Patient connected while therapy is interrupted", "Pressure rises while downstream occlusion is undetected", "Air reaches the patient line", "Reservoir empties through an uncontrolled flow path",
    "Patient receives a medicine inconsistent with the prescription", "Therapy stops before the expected battery interval", "User or patient is exposed to hazardous leakage current", "Calculated delivery parameters differ from the prescription", "Critical alarm condition is not perceived in time",
    "Operator confirms an unintended setting", "Unauthorised actor changes therapy or device configuration", "Pump performance is disturbed near electromagnetic equipment", "Liquid reaches safety-critical electronics", "Pump detaches or changes position during therapy",
    "Incompatible tubing is connected to the fluid path", "Accessible surface or internal component overheats", "Clinical review uses incomplete or incorrectly timed records", "Contaminated fluid path contacts the patient", "Pump is started with an incomplete or incorrect setup",
  ],
  harm: [
    "Fluid overload", "Underdose or loss of therapy", "Air embolism", "Medication overdose", "Medication underdose",
    "Electric shock", "Thermal injury", "Infection", "Delay in clinical intervention", "Serious deterioration or death",
  ],
  "risk-control-measure": [
    "Independent flow monitoring", "Hard upper flow-rate limit", "Dose-error reduction library", "Occlusion pressure monitoring", "Occlusion alarm escalation",
    "Dual air-in-line sensors", "Air-in-line automatic stop", "Anti-free-flow clamp", "Door-open flow interruption", "Drug-library confirmation",
    "Concentration-range validation", "Patient-weight plausibility check", "Battery state-of-charge estimation", "Low-battery advance warning", "Critical-battery controlled shutdown",
    "Medical-grade isolation barrier", "Protective earth continuity monitoring", "Dose-calculation unit tests", "Independent calculation cross-check", "Alarm priority coding",
    "Audible and visual alarm redundancy", "Alarm self-test at startup", "Touch confirmation for critical settings", "Screen-lock against unintended input", "Role-based access control",
    "Signed software update packages", "Security event logging", "Network service minimisation", "EMC input filtering", "Safe state after communication loss",
    "Ingress-resistant enclosure seals", "Fluid-channel drainage path", "Locking pole clamp", "Clamp-load verification", "Keyed tubing connector",
    "Connection compatibility labelling", "Temperature monitoring", "Thermal shutdown", "Monotonic event time source", "Redundant therapy record storage",
    "Sterile single-use administration set", "Cleaning compatibility controls", "Setup workflow checklist", "Priming confirmation", "Independent release inspection",
  ],
  "clinical-claim": [
    "Maintains programmed volumetric flow within specified accuracy", "Supports continuous intravenous therapy", "Supports intermittent intravenous therapy", "Reduces unintended free-flow exposure", "Detects downstream occlusion before prolonged therapy interruption",
    "Detects clinically relevant air in line", "Provides timely high-priority alarm notification", "Supports low-volume paediatric infusion", "Supports weight-based dose programming", "Supports oncology infusion protocols",
    "Supports vasoactive medicine delivery", "Supports intra-hospital transport use", "Maintains therapy during specified battery operation", "Provides traceable therapy history", "Supports trained healthcare-professional operation",
    "Reduces medication-programming errors through drug limits", "Supports cleaning between patient uses", "Maintains performance near specified electromagnetic sources", "Supports secure networked configuration", "Provides clinically interpretable event chronology",
  ],
  "verification-evidence": [
    "Flow accuracy verification report", "Bolus volume verification report", "Occlusion detection validation report", "Air-in-line detector validation report", "Free-flow protection verification report",
    "Drug-library limits verification report", "Battery endurance validation report", "Electrical safety test report", "EMC test report", "Software system test report",
    "Software unit verification summary", "Cybersecurity penetration test report", "Security update verification report", "Alarm-system validation report", "Human factors validation report",
    "Touch-interface usability verification", "Pole-clamp mechanical test report", "Ingress protection test report", "Thermal safety test report", "Administration-set compatibility report",
    "Cleaning and disinfection validation report", "Biocompatibility evaluation report", "Packaging and transport test report", "Network interoperability verification report", "Communication-loss safe-state test report",
    "Data integrity verification report", "Event-clock accuracy report", "Production release validation report", "Clinical claims evidence summary", "Configuration baseline verification report",
  ],
  change: [
    "Battery cell supplier replacement", "Occlusion algorithm threshold update", "Air-sensor component revision", "Touchscreen controller replacement", "Alarm speaker supplier change", "Drug-library schema update",
    "Cybersecurity operating-system patch", "Pole-clamp material change", "Ingress seal geometry update", "Administration-set compatibility extension", "Network protocol revision", "Manufacturing test-station software update",
  ],
  signal: [
    "Unexpected battery runtime reduction", "Delayed occlusion alarm trend", "Intermittent air-sensor nuisance alarms", "Touchscreen confirmation mis-selection", "Reduced alarm audibility reports",
    "Drug-library synchronisation failures", "Repeated unauthorised login attempts", "Pole-clamp slippage complaints", "Fluid-ingress service findings", "Therapy-log timestamp discrepancies",
  ],
  certificate: [
    "EU MDR quality-management-system certificate", "EU MDR technical-documentation assessment certificate", "Electrical safety CB test certificate",
  ],
  component: [
    "Infusion pumping mechanism", "Air-in-line sensor assembly", "Pressure sensor assembly", "Rechargeable battery pack", "Touchscreen user interface",
    "Alarm speaker assembly", "Main control board", "Network communication module", "Pole-clamp assembly", "Pump-door and anti-free-flow mechanism",
  ],
  supplier: [
    "Battery pack critical supplier", "Air sensor critical supplier", "Touchscreen critical supplier", "Alarm speaker critical supplier", "Administration-set critical supplier",
  ],
  "qms-process": [
    "Infusion-pump design and development control", "Infusion-pump risk-management process", "Infusion-pump software lifecycle process", "Infusion-pump supplier-control process", "Infusion-pump production release process",
  ],
  "document-version": [
    "Device description Rev C", "Intended purpose specification Rev B", "Risk management file Rev D", "Clinical evaluation report Rev C", "Instructions for use Rev F",
  ],
  "device-family": ["Infpump FlowGuard infusion-pump family"],
  "device-model": ["Infpump FlowGuard FG-100 model"],
  "device-variant": ["Infpump FlowGuard FG-100 EU professional-use variant"],
  "configuration-baseline": ["Infpump FlowGuard released design baseline 1.1"],
  "software-version": ["Infpump FlowGuard control software 4.2.0"],
  "clinical-evaluation": ["Infpump FlowGuard continuous clinical evaluation"],
  "clinical-evidence": ["Infpump FlowGuard clinical evidence set"],
  "clinical-evaluation-report": ["Infpump FlowGuard clinical evaluation report Rev D"],
  "technical-documentation-set": ["Infpump FlowGuard MDR technical documentation set"],
  "pms-plan": ["Infpump FlowGuard post-market surveillance plan"],
}

const hazardRiskVariant = (hazard, variant) => variant === 0
  ? `Clinical injury following ${hazard.toLowerCase()}`
  : `Delayed detection or secondary harm from ${hazard.toLowerCase()}`

titles.risk = titles.hazard.flatMap((hazard) => [hazardRiskVariant(hazard, 0), hazardRiskVariant(hazard, 1)])

for (const family of familyDefinitions) {
  if (titles[family.type]?.length !== family.count) throw new Error(`${family.type}: expected ${family.count} titles, found ${titles[family.type]?.length ?? 0}`)
}

const records = []
const familyByType = new Map(familyDefinitions.map((family) => [family.type, family]))
for (const family of familyDefinitions) {
  titles[family.type].forEach((title, offset) => {
    const number = offset + 1
    const id = `${family.prefix}-${pad(number)}`
    records.push({ id, type: family.type, title, number, family, relations: {}, extra: {} })
  })
}
if (records.length !== 310) throw new Error(`Expected 310 ontology notes (300 core plus 10 architecture extensions), found ${records.length}`)

const byType = new Map(familyDefinitions.map((family) => [family.type, records.filter((record) => record.type === family.type)]))
const at = (type, index) => byType.get(type)[index % byType.get(type).length]

for (const record of records) {
  const index = record.number - 1
  const config = at("device-configuration", index)
  record.extra.device_context = config.id
  if (record.type === "device-configuration") {
    record.extra.lifecycle_state = "design-verification"
    record.extra.market_status = "not-marketed"
    record.extra.market_release_candidate = false
    record.extra.risk_class = "IIb"
    record.relations.manufactured_by = ["ORG-MFR-0001"]
    record.relations.has_intended_purpose = [at("intended-purpose", index).id]
    record.relations.classified_by = [at("classification-decision", index).id]
    record.relations.has_applicable_requirement = byType.get("compliance-requirement-instance").slice(index * 10, index * 10 + 10).map((item) => item.id)
    record.relations.has_hazard = byType.get("hazard").slice(index * 4, index * 4 + 4).map((item) => item.id)
    record.relations.has_risk = byType.get("risk").slice(index * 8, index * 8 + 8).map((item) => item.id)
    record.relations.includes_component = byType.get("component").slice(index * 2, index * 2 + 2).map((item) => item.id)
    record.relations.makes_clinical_claim = byType.get("clinical-claim").slice(index * 4, index * 4 + 4).map((item) => item.id)
    record.relations.has_certificate = [at("certificate", index).id]
    record.relations.has_baseline = [at("configuration-baseline", 0).id]
    record.relations.includes_software_version = [at("software-version", 0).id]
    record.relations.has_clinical_evaluation = [at("clinical-evaluation", 0).id]
    record.relations.has_technical_documentation = [at("technical-documentation-set", 0).id]
    record.relations.covered_by_pms_plan = [at("pms-plan", 0).id]
    record.relations.source_provisions = ["SRC-EMDN", "SRC-EUDAMED", "SRC-UDI", "SRC-HARMONISED-STANDARDS"]
  } else if (record.type === "intended-purpose") {
    record.relations.asserted_in = [at("document-version", index).id]
    record.relations.has_target_population = ["POP-0001"]
    record.relations.has_intended_user = ["USER-0001"]
    record.relations.has_use_environment = ["ENV-0001"]
    record.extra.medical_purpose = record.title
    record.extra.operating_principle = "Volumetric peristaltic pumping with closed-loop sensing and alarms"
  } else if (record.type === "classification-decision") {
    record.relations.concerns = [config.id]
    record.relations.concludes_class = ["CLASS-IIb"]
    record.relations.considers_rule = ["CRULE-MDR-12"]
    record.relations.supported_by = [at("verification-evidence", index).id]
    record.relations.derived_from = ["PROV-MDR-ANNEX-VIII"]
    record.relations.source_provisions = ["SRC-MDCG-2021-24-R1", "SRC-MDCG-INDEX"]
    record.extra.conclusion = "IIb"
    record.extra.decision_date = today
  } else if (record.type === "compliance-requirement-instance") {
    record.relations.instantiates_requirement = [index % 2 === 0 ? "GSPR-0001" : "GSPR-0002"]
    record.relations.derived_from = ["PROV-MDR-ANNEX-I"]
    record.relations.satisfied_by = [at("verification-evidence", index).id]
    record.extra.applicable = true
    record.extra.applicability_rationale = `Applicable to ${config.id} because the configured function or lifecycle control is within the requirement scope.`
    record.extra.compliance_method = `Verification and controlled-document review for ${record.id}`
    record.extra.compliance_status = "satisfied"
  } else if (record.type === "hazard") {
    record.relations.can_lead_to = [at("hazardous-situation", index).id]
    record.extra.hazard_category = index < 6 ? "therapy-delivery" : index < 12 ? "electrical-software" : "mechanical-use-environment"
  } else if (record.type === "hazardous-situation") {
    record.relations.may_cause = [at("harm", index).id]
  } else if (record.type === "risk") {
    record.relations.concerns = [config.id]
    record.extra.risk_matrix_identifier = record.id
    record.extra.initial_risk = index % 3 === 0 ? "high" : "medium"
    record.extra.residual_risk = index % 5 === 0 ? "medium" : "low"
  } else if (record.type === "risk-control-measure") {
    record.relations.mitigates = [at("risk", index).id]
    record.relations.verified_by = [at("verification-evidence", index).id]
    record.extra.control_priority = index < 30 ? "inherent-safety-or-protective-measure" : "information-for-safety-or-production-control"
  } else if (record.type === "clinical-claim") {
    record.extra.claim_status = "supported"
    record.extra.claim_scope = config.id
  } else if (record.type === "verification-evidence") {
    record.relations.applies_to_configuration = [config.id]
    record.extra.approved_at = today
    record.extra.evidence_scope = record.title
  } else if (record.type === "change") {
    record.relations.concerns = [config.id]
    record.relations.impacts = [at("risk", index * 2).id]
    record.relations.affected_evidence = [at("verification-evidence", index).id]
    record.extra.impact_level = index % 3 === 0 ? "high" : "medium"
    record.extra.change_state = "under-assessment"
  } else if (record.type === "signal") {
    record.relations.concerns = [config.id]
    record.relations.triggers = [at("change", index).id]
    record.extra.signal_state = "under-assessment"
    record.extra.detected_at = today
  } else if (record.type === "certificate") {
    record.relations.applies_to_configuration = byType.get("device-configuration").filter((_, configIndex) => configIndex % 3 === index).map((item) => item.id)
    record.extra.valid_from = today
    record.extra.valid_to = "2029-08-14"
    record.extra.certificate_state = "valid"
  } else if (record.type === "component") {
    record.extra.component_criticality = index < 8 ? "safety-critical" : "major"
    record.extra.part_number = `FG-${String(1000 + record.number)}`
  } else if (record.type === "supplier") {
    record.extra.supplied_component = at("component", index * 2 + 1).id
    record.extra.supplier_criticality = "critical"
    record.extra.approval_state = "approved"
  } else if (record.type === "qms-process") {
    record.relations.owned_by = [index % 2 === 0 ? "ROLE-QUALITY" : "ROLE-REGULATORY-AFFAIRS"]
    if (index === 3) record.relations.outsourced_to = [at("supplier", index).id]
    record.extra.process_state = "effective"
  } else if (record.type === "document-version") {
    record.relations.approved_by = [index % 2 === 0 ? "ROLE-QUALITY" : "ROLE-REGULATORY-AFFAIRS"]
    record.relations.applies_to_configuration = [config.id]
    record.extra.document_revision = String.fromCharCode(65 + index)
  } else if (record.type === "device-family") {
    record.relations.manufactured_by = ["ORG-MFR-0001"]
    record.relations.has_model = [at("device-model", 0).id]
    record.relations.source_provisions = ["SRC-EMDN"]
  } else if (record.type === "device-model") {
    record.relations.has_variant = [at("device-variant", 0).id]
    record.relations.source_provisions = ["SRC-UDI", "SRC-EUDAMED"]
  } else if (record.type === "device-variant") {
    record.relations.has_configuration = byType.get("device-configuration").map((item) => item.id)
    record.relations.source_provisions = ["SRC-UDI"]
  } else if (record.type === "configuration-baseline") {
    record.relations.includes = [at("software-version", 0).id, at("document-version", 0).id, at("verification-evidence", 0).id]
    record.relations.source_provisions = ["SRC-HARMONISED-STANDARDS"]
    record.extra.baseline_state = "released"
  } else if (record.type === "software-version") {
    record.relations.source_provisions = ["SRC-EUDAMED", "SRC-UDI"]
    record.extra.software_release_state = "released"
  } else if (record.type === "clinical-evaluation") {
    record.relations.evaluates = byType.get("device-configuration").map((item) => item.id)
    record.relations.uses_evidence = [at("clinical-evidence", 0).id]
    record.relations.documented_by = [at("clinical-evaluation-report", 0).id]
    record.relations.source_provisions = ["PROV-MDR-ARTICLE-61", "SRC-MDCG-INDEX"]
    record.extra.evaluation_state = "current"
  } else if (record.type === "clinical-evidence") {
    record.relations.applies_to_configuration = byType.get("device-configuration").map((item) => item.id)
    record.relations.supports_claim = byType.get("clinical-claim").map((item) => item.id)
    record.relations.source_provisions = ["PROV-MDR-ARTICLE-61", "SRC-MDCG-INDEX"]
    record.extra.evidence_scope = "Safety, performance and clinical-benefit claims for the Infpump FlowGuard family"
  } else if (record.type === "clinical-evaluation-report") {
    record.relations.applies_to_configuration = byType.get("device-configuration").map((item) => item.id)
    record.extra.document_revision = "D"
    record.extra.report_state = "current"
  } else if (record.type === "technical-documentation-set") {
    record.relations.applies_to_configuration = byType.get("device-configuration").map((item) => item.id)
    record.relations.includes = [...byType.get("document-version").map((item) => item.id), ...byType.get("verification-evidence").slice(0, 5).map((item) => item.id)]
    record.relations.source_provisions = ["PROV-MDR-ANNEX-II", "PROV-MDR-ANNEX-III", "SRC-TEAM-NB-TD-V4"]
    record.extra.documentation_state = "current"
  } else if (record.type === "pms-plan") {
    record.relations.applies_to_configuration = byType.get("device-configuration").map((item) => item.id)
    record.relations.source_provisions = ["PROV-MDR-ARTICLE-83", "SRC-MDCG-2025-10"]
    record.extra.plan_state = "effective"
  }
}

const existingFiles = await walk(contentRoot)
const basenameById = new Map()
const fileById = new Map()
const targetById = new Map()
for (const file of existingFiles) {
  const { data } = parseMarkdown(await readFile(file, "utf8"))
  if (data.id) {
    basenameById.set(data.id, path.basename(file, ".md"))
    fileById.set(data.id, file)
    targetById.set(data.id, path.relative(contentRoot, file).replaceAll("\\", "/").replace(/\.md$/, ""))
  }
}
for (const record of records) {
  const basename = `${record.id}-${slug(record.title)}`
  basenameById.set(record.id, basename)
  targetById.set(record.id, `06-Infpump FlowGuard ontology notes/${record.type}/${basename}`)
}
const link = (id, label = id) => `[[${targetById.get(id) ?? basenameById.get(id) ?? id}|${label}]]`

const recordById = new Map(records.map((record) => [record.id, record]))
const outgoingDependencies = new Map(records.map((record) => [record.id, []]))
const incomingDependencies = new Map(records.map((record) => [record.id, []]))
for (const record of records) {
  const dependencies = outgoingDependencies.get(record.id)
  for (const [predicate, ids] of Object.entries(record.relations)) {
    for (const id of ids) if (recordById.has(id)) dependencies.push({ predicate, id })
  }
  for (const predicate of ["supplied_component", "claim_scope"]) {
    const id = record.extra[predicate]
    if (recordById.has(id)) dependencies.push({ predicate, id })
  }
  for (const dependency of dependencies) incomingDependencies.get(dependency.id).push({ predicate: dependency.predicate, id: record.id })
}

const dependencyPhrase = (dependencies, direction) => {
  const byPredicate = new Map()
  for (const dependency of dependencies) {
    if (!byPredicate.has(dependency.predicate)) byPredicate.set(dependency.predicate, [])
    const ids = byPredicate.get(dependency.predicate)
    if (!ids.includes(dependency.id)) ids.push(dependency.id)
  }
  return [...byPredicate.entries()].map(([predicate, ids]) => {
    const displayed = ids.slice(0, 3).map((id) => link(id, `${id} — ${recordById.get(id).title}`))
    const remainder = ids.length - displayed.length
    const linkedNotes = `${displayed.join(", ")}${remainder ? ` and ${remainder} more linked note${remainder === 1 ? "" : "s"}` : ""}`
    return direction === "incoming" ? `\`${predicate}\` from ${linkedNotes}` : `\`${predicate}\` to ${linkedNotes}`
  }).join("; ")
}

const traceabilityParagraphs = (record) => {
  const incoming = incomingDependencies.get(record.id)
  const outgoing = outgoingDependencies.get(record.id)
  const context = recordById.get(record.extra.device_context) ?? at("device-configuration", 0)
  const previous = incoming.length
    ? `Previous dependencies are ontology notes that lead into this record. They reach it through ${dependencyPhrase(incoming, "incoming")}. These incoming links show which product, decision, process or evidence records depend on the current note.`
    : `No previous ontology-note dependency is currently asserted for this record. Its nearest governed context is ${link(context.id, `${context.id} — ${context.title}`)}, which identifies the device configuration in which the note is interpreted.`
  const succeeding = outgoing.length
    ? `Succeeding dependencies are ontology notes to which this record leads. The trace continues through ${dependencyPhrase(outgoing, "outgoing")}. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.`
    : `No succeeding ontology-note dependency is currently asserted for this record. It remains scoped to ${link(context.id, `${context.id} — ${context.title}`)}, and any future downstream dependency should be added as a typed relationship rather than inferred from prose.`
  return [previous, succeeding]
}

const uniqueDependencies = (dependencies) => {
  const seen = new Set()
  return dependencies.filter(({ predicate, id }) => {
    const key = `${predicate}\u0000${id}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const mermaidText = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

const dependencyDiagram = (record) => {
  const incoming = uniqueDependencies(incomingDependencies.get(record.id))
  const outgoing = uniqueDependencies(outgoingDependencies.get(record.id))
  const visibleIncoming = incoming.slice(0, 5)
  const visibleOutgoing = outgoing.slice(0, 5)
  const lines = [
    "flowchart LR",
    `  CURRENT["${mermaidText(record.id)}<br/>${mermaidText(record.title)}"]`,
  ]

  if (visibleIncoming.length) {
    visibleIncoming.forEach((dependency, index) => {
      const dependencyRecord = recordById.get(dependency.id)
      lines.push(`  PREV${index}["${mermaidText(dependency.id)}<br/>${mermaidText(dependencyRecord.title)}"]`)
      lines.push(`  PREV${index} -->|"${mermaidText(dependency.predicate)}"| CURRENT`)
    })
    if (incoming.length > visibleIncoming.length) {
      lines.push(`  PREV_MORE["${incoming.length - visibleIncoming.length} more previous dependencies"]`)
      lines.push("  PREV_MORE -->|\"additional typed links\"| CURRENT")
    }
  } else {
    lines.push('  PREV_NONE["No asserted previous dependency"]')
    lines.push("  PREV_NONE -.-> CURRENT")
  }

  if (visibleOutgoing.length) {
    visibleOutgoing.forEach((dependency, index) => {
      const dependencyRecord = recordById.get(dependency.id)
      lines.push(`  NEXT${index}["${mermaidText(dependency.id)}<br/>${mermaidText(dependencyRecord.title)}"]`)
      lines.push(`  CURRENT -->|"${mermaidText(dependency.predicate)}"| NEXT${index}`)
    })
    if (outgoing.length > visibleOutgoing.length) {
      lines.push(`  NEXT_MORE["${outgoing.length - visibleOutgoing.length} more succeeding dependencies"]`)
      lines.push("  CURRENT -->|\"additional typed links\"| NEXT_MORE")
    }
  } else {
    lines.push('  NEXT_NONE["No asserted succeeding dependency"]')
    lines.push("  CURRENT -.-> NEXT_NONE")
  }

  lines.push("  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px")
  lines.push("  class CURRENT current")
  return lines.join("\n")
}

const renderMetadataValue = (value) => {
  if (Array.isArray(value)) return value.map(renderMetadataValue).join(", ")
  if (typeof value === "string" && /^\[\[[^\]]+\]\]$/.test(value)) return value
  if (value && typeof value === "object") return `\`${JSON.stringify(value)}\``
  return `\`${String(value)}\``
}

const semanticRole = (record) => {
  const descriptions = {
    "device-configuration": "Defines one exact regulated product configuration so that requirements, evidence and decisions are not applied to an ambiguous device revision.",
    "intended-purpose": "Preserves one controlled intended-purpose definition and the product, population, user and environment assumptions that depend on it.",
    "classification-decision": "Captures the classification conclusion, controlling configuration, rule basis and supporting rationale as an independently reviewable decision.",
    "compliance-requirement-instance": "Represents one generic obligation as applied to a specific infusion-pump configuration, with an explicit compliance method and evidence link.",
    hazard: "Identifies one potential source of harm that must remain traceable through hazardous situations, risks and controls.",
    "hazardous-situation": "Represents one circumstance in which a person, property or environment is exposed to an infusion-pump hazard.",
    harm: "Defines one clinically or physically meaningful consequence used by the risk analysis and benefit-risk evaluation.",
    risk: "Represents one independently assessed infusion-pump risk with a stable risk-matrix identifier and configuration scope.",
    "risk-control-measure": "Defines one control that reduces a specific risk and remains traceable to verification evidence.",
    "clinical-claim": "Defines one device-performance or clinical-use claim that requires controlled clinical support.",
    "verification-evidence": "Describes what one approved evidence item demonstrates and which exact device configuration it covers.",
    change: "Represents one proposed product or process change whose regulatory impact must be assessed before implementation.",
    signal: "Represents one post-market finding that requires assessment and can trigger a controlled change or other action.",
    certificate: "Represents one certificate, its configuration coverage and temporal validity state.",
    component: "Gives a safety-relevant physical or software component an identity that can be referenced by configurations, suppliers, risks and changes.",
    supplier: "Represents one critical supplier whose approval and supplied component can be assessed independently.",
    "qms-process": "Defines one controlled manufacturer process, its owner and its role in maintaining the infusion-pump compliance state.",
    "document-version": "Represents one controlled technical-file document version separately from the semantic objects recorded in it.",
    "device-family": "Defines the governed product family above models, variants and configurations without treating the grouping as a regulatory identifier.",
    "device-model": "Represents the controlled commercial and design model that groups related variants of the Infpump FlowGuard device.",
    "device-variant": "Represents the distinguishable EU professional-use variant and links it to the exact regulated configurations assessed for compliance.",
    "configuration-baseline": "Defines the released combination of software, documents and evidence used to establish configuration scope at a point in time.",
    "software-version": "Gives the released control-software version a stable identity so evidence and configuration validity can be evaluated precisely.",
    "clinical-evaluation": "Represents the continuing clinical-evaluation activity, its device scope, evidence set and controlled report.",
    "clinical-evidence": "Represents the appraised clinical evidence supporting the safety, performance and clinical claims of the defined configurations.",
    "clinical-evaluation-report": "Represents the controlled report version documenting the clinical evaluation, its evidence appraisal and its current conclusions.",
    "technical-documentation-set": "Represents the governed MDR technical-documentation collection and the controlled documents and evidence included within its configuration scope.",
    "pms-plan": "Represents the effective post-market surveillance plan, its marketed-device scope and its legal and guidance provenance.",
  }
  return descriptions[record.type]
}

for (const record of records) {
  const relationData = Object.fromEntries(Object.entries(record.relations).map(([predicate, ids]) => [predicate, ids.map((id) => link(id))]))
  const data = {
    id: record.id,
    type: record.type,
    title: record.title,
    aliases: [
      record.id,
      basenameById.get(record.id),
      `18-ontology-notes/${record.type}/${basenameById.get(record.id)}`,
      `03-Ontology notes/${record.type}/${basenameById.get(record.id)}`,
    ],
    status: record.type === "risk" ? "accepted" : record.type === "change" || record.type === "signal" ? "under-assessment" : "approved",
    version: "1",
    created: today,
    modified: today,
    tags: [`ontology-note/${record.type}`, "device/infpump-flowguard"],
    draft: false,
    note_origin: "human-reviewed synthetic example",
    technical_file: record.family.file,
    technical_file_identifier: record.id,
    valid_from: today,
    review_status: "approved",
    ...Object.fromEntries(Object.entries(record.extra).map(([key, value]) => {
      if (key === "device_context" || key === "supplied_component" || key === "claim_scope") return [key, link(value)]
      return [key, value]
    })),
    ...relationData,
  }
  const metadataRows = Object.entries(data).map(([key, value]) => `- **${key}:** ${renderMetadataValue(value)}`)
  const traceability = traceabilityParagraphs(record)
  const diagram = dependencyDiagram(record)
  const body = [
    `# ${record.title}`,
    "",
    "## Semantic role",
    "",
    semanticRole(record),
    "",
    "## Note",
    "",
    "Human-readable rendering of this note's YAML/JSON frontmatter:",
    "",
    ...metadataRows,
    "",
    "## Traceability",
    "",
    ...traceability.flatMap((paragraph) => [paragraph, ""]),
    "The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.",
    "",
    "```mermaid",
    diagram,
    "```",
  ].join("\n")
  const folder = path.join(outputRoot, record.type)
  await mkdir(folder, { recursive: true })
  await writeFile(path.join(folder, `${basenameById.get(record.id)}.md`), markdown(data, body), "utf8")
}

for (const family of familyDefinitions) {
  const items = byType.get(family.type)
  const body = [
    `# ${family.label} ontology notes`,
    "",
    `${items.length} independently identifiable ${family.label.toLowerCase()} notes for the imaginary Infpump FlowGuard infusion pump.`,
    "",
    "## Notes",
    "",
    ...items.map((record) => `- ${link(record.id, `${record.id} — ${record.title}`)}`),
    "",
    "## Continue",
    "",
    "- [All ontology-note classes](/06-infpump-flowguard-ontology-notes/)",
    "- [[HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology|Ontology landing page]]",
  ].join("\n")
  await writeFile(path.join(outputRoot, family.type, "index.md"), markdown({ title: `${family.label} ontology notes`, aliases: [`18-ontology-notes/${family.type}`, `03-Ontology notes/${family.type}`], draft: false }, body), "utf8")
}

const structureSection = [
  "## Vault structure",
  "",
  "The content is organised by semantic role so that definitions, instances, sources, notes, views and questions remain easy to distinguish:",
  "",
  "- [00 — Ontology](/00-ontology/): classes, relations, controlled vocabularies, rules, constraints and assertions.",
  "- [01 — Ontology instances](/01-ontology-instances/): organisations, devices and the other regulated-domain instances.",
  "- [02 — Sources](/02-sources/): legislation, guidance, standards and provenance records.",
  "- [04 — Views](/04-views/): task-oriented explorer and compliance views.",
  "- [05 — Questions](/05-questions/): the 90 competency questions.",
  "- [06 — Infpump FlowGuard ontology notes](/06-infpump-flowguard-ontology-notes/): device-specific knowledge objects.",
  "- [07 — Other](/07_other/): meta material, generated reports and supporting demonstrations.",
  "  - [Use-case demonstrations](/07_other/use-case-demonstrations/): worked manufacturer scenarios.",
].join("\n").trim()

const startHereSection = [
  "## Start here",
  "",
  "- [[HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology|Ontology overview]]",
  "- [[07_Other/00-Meta/META-ONTOLOGY-NOTE-ontology-note|Ontology note]]",
  "- [Questions](/05-questions/)",
  "- [Connections](/06-infpump-flowguard-ontology-notes/connections/)",
].join("\n").trim()

const ontologyOverviewBody = [
  "# EU MDR Manufacturer Ontology",
  "",
  "An ontology is a shared, explicit model of a subject area. It identifies the kinds of things that matter, gives those things consistent meanings, and records how they may be connected. In this vault, the subject area is the EU MDR manufacturer’s regulatory system: organisations, medical devices, requirements, risks, evidence, decisions, lifecycle activities and their provenance.",
  "",
  "The ontology is made first of **classes**, which define reusable concepts such as Manufacturer, Device Configuration, Requirement, Risk and Verification Evidence. Individual records are **instances** of those classes: for example, a particular manufacturer, infusion-pump configuration, risk-control measure or test report. Controlled vocabularies provide consistent values for states such as approval, applicability and compliance.",
  "",
  "It is also made of **relations**, which give meaning to connections between records. Relations express statements such as a manufacturer produces a device, a requirement applies to a configuration, evidence demonstrates compliance, or a risk control mitigates a risk. These typed connections turn separate Markdown pages into a traceable knowledge graph and preserve the source and scope of regulatory claims.",
  "",
  "The current ontology has 179 class definitions, 81 relation definitions, 22 constraints and 9 executable rules. Its executable governance uses three assurance levels: hard constraints and rules may block a lifecycle decision, advisory constraints identify non-blocking data-quality findings, and review-trigger rules derive a need for qualified assessment rather than a final legal conclusion. This tiering permits broader machine assistance while keeping device-specific judgement and legally sensitive interpretation under accountable human review.",
  "",
  "The ontology is used by linking technical-file records to the concepts and relations that describe their regulatory meaning. People can follow those links to review a device’s intended purpose, classification, requirements, risks, evidence and open gaps, while software can validate identifiers and relationships, apply governed rules and constraints, distinguish blocking gaps from advisory findings, and assemble grounded context for the competency questions. The result supports navigation and reasoning without replacing accountable regulatory decision-making.",
].join("\n")

const allIndexBody = [
  "# 06-Infpump FlowGuard ontology notes",
  "",
  "This index groups all 310 ontology notes by their existing vault class. Shared organisations and other reusable domain instances remain canonical under 01 — Ontology instances, while regulatory sources remain canonical under 02 — Sources. This section adds device-specific Infpump FlowGuard notes and links to those canonical nodes rather than duplicating them.",
  "",
  "## Canonical-node policy",
  "",
  "A shared legal provision, guidance source, organisation or generic GSPR is referenced in its canonical ontology-instance or source page. Only the device-specific regulated object is created here. Backlinks and typed provenance relations join the two layers.",
  "",
  ...familyDefinitions.flatMap((family) => [
    `## ${family.label}`,
    "",
    `[Browse ${family.count} ${family.label.toLowerCase()} notes](/06-infpump-flowguard-ontology-notes/${family.type}/). Example: ${link(byType.get(family.type)[0].id)}.`,
    "",
  ]),
].join("\n")
await mkdir(outputRoot, { recursive: true })
await writeFile(path.join(outputRoot, "index.md"), markdown({ title: "06-Infpump FlowGuard ontology notes", aliases: ["Ontology notes", "18-ontology-notes", "03-Ontology notes"], draft: false }, allIndexBody), "utf8")

async function updateLanding(relativePath) {
  const file = path.join(contentRoot, relativePath)
  const parsed = parseMarkdown(await readFile(file, "utf8"))
  let body = parsed.body
    .replace(/\nOpen the `content\/` folder as the Obsidian vault\. The same Markdown content is rendered by Quartz 5\.\s*/, "\n")
    .replace(/\n## Explore[\s\S]*?(?=\n## Vault structure|\n## Ontology notes|\n## Architecture|\nOpen the `content\/` folder|$)/, "")
    .replace(/\n## Start here[\s\S]*?(?=\n## Vault structure|\n## Ontology notes|\n## Architecture|\nOpen the `content\/` folder|$)/, "")
    .replace(/\n## Vault structure[\s\S]*?(?=\n## Ontology notes|\n## Architecture|\nOpen the `content\/` folder|$)/, "")
    .replace(/\n## Ontology notes[\s\S]*?(?=\n## Architecture|\nOpen the `content\/` folder|$)/, "")
  const marker = body.includes("\n## Architecture") ? "\n## Architecture" : null
  body = marker ? body.replace(marker, `\n\n${startHereSection}\n\n${structureSection}\n${marker}`) : `${body.trim()}\n\n${startHereSection}\n\n${structureSection}\n`
  await writeFile(file, markdown(parsed.data, body.replace(/\n{3,}/g, "\n\n")), "utf8")
}
await updateLanding("index.md")

async function updateOntologyOverview() {
  const file = path.join(contentRoot, "HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology.md")
  const parsed = parseMarkdown(await readFile(file, "utf8"))
  await writeFile(file, markdown({ ...parsed.data, modified: "2026-08-16" }, ontologyOverviewBody), "utf8")
}
await updateOntologyOverview()

const questionTargets = {
  "01-device-definition-and-intended-purpose": ["intended-purpose", "device-configuration", "component"],
  "02-device-classification": ["classification-decision"],
  "03-gspr": ["compliance-requirement-instance", "risk-control-measure", "risk"],
  "04-qms": ["qms-process", "supplier"],
  "05-clinical-evidence": ["clinical-evaluation", "clinical-evidence", "clinical-evaluation-report", "clinical-claim", "verification-evidence"],
  "06-technical-documentation": ["technical-documentation-set", "document-version", "verification-evidence"],
  "07-conformity-assessment": ["certificate", "classification-decision", "compliance-requirement-instance"],
  "08-traceability": ["device-family", "device-model", "device-variant", "device-configuration", "software-version", "component", "document-version"],
  "09-pms-vigilance": ["pms-plan", "signal", "change", "risk"],
}

const questionFiles = (await walk(path.join(contentRoot, "05-Questions"))).sort()
const removedQuestionSections = [
  "Current rule result",
  "Evidence and compliance state",
  "Assumptions and human-review triggers",
  "Related questions",
]
for (const [questionIndex, file] of questionFiles.entries()) {
  const parsed = parseMarkdown(await readFile(file, "utf8"))
  const governed = competencyQuestionContent[parsed.data.id]
  if (!governed) throw new Error(`No governed answer for ${parsed.data.id}`)
  if (governed.ontologyPath) parsed.data.ontology_path = governed.ontologyPath
  const folder = path.basename(path.dirname(file))
  const types = questionTargets[folder]
  if (!types) throw new Error(`No ontology-note mapping for question folder ${folder}`)
  const primary = at(types[questionIndex % types.length], questionIndex)
  const secondary = at("device-configuration", questionIndex)
  const refs = primary.id === secondary.id ? [primary] : [primary, secondary]
  parsed.data.example_ontology_notes = refs.map((record) => link(record.id))
  parsed.data.example_device_context = link(secondary.id)
  const section = [
    "## Infusion-pump example context",
    "",
    `This competency question is grounded in the imaginary Infpump FlowGuard device context ${link(secondary.id)} and the following device-specific ontology note${refs.length === 1 ? "" : "s"}:`,
    "",
    ...refs.map((record) => `- ${link(record.id, `${record.id} — ${record.title}`)}`),
    "",
    "Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.",
  ].join("\n")
  let body = parsed.body
  const sourceBasis = sectionBody(body, "Source basis")
  const relatedEntities = sectionBody(body, "Related entities")
  for (const heading of removedQuestionSections) {
    body = removeSection(body, heading)
  }
  for (const heading of ["Answer", "Infusion-pump example context", "Related entities", "Source basis"]) {
    body = removeSection(body, heading)
  }
  body = replaceSection(body.trimEnd(), "Ontology path", `\`${parsed.data.ontology_path}\``)
  body = body.replace(
    /((?:^|\n)## Ontology path\r?\n[\s\S]*?)(?=\r?\n## |$)/,
    `$1\n\n## Answer\n\n${governed.answer}\n`,
  ).trimEnd()
  const movedSections = [
    section,
    "## Related entities",
    "",
    relatedEntities,
    "",
    "## Source basis",
    "",
    sourceBasis,
  ].join("\n")
  await writeFile(file, markdown(parsed.data, `${body}\n\n${movedSections}`), "utf8")
}

const predicateExemplar = new Map()
for (const record of records) for (const predicate of Object.keys(record.relations)) if (!predicateExemplar.has(predicate)) predicateExemplar.set(predicate, record)
const classExemplar = new Map(familyDefinitions.map((family) => [family.type, byType.get(family.type)[0]]))
const ontologyFiles = (await walk(path.join(contentRoot, "00-Ontology"))).sort()
for (const file of ontologyFiles) {
  const parsed = parseMarkdown(await readFile(file, "utf8"))
  let example = at("device-configuration", 0)
  if (parsed.data.type === "ontology-class" && classExemplar.has(parsed.data.class_key)) example = classExemplar.get(parsed.data.class_key)
  else if (parsed.data.type === "relation-definition" && predicateExemplar.has(parsed.data.predicate)) example = predicateExemplar.get(parsed.data.predicate)
  else if (parsed.data.type === "rule" && String(parsed.data.id).includes("CHANGE")) example = at("change", 0)
  else if (parsed.data.type === "rule") example = at("device-configuration", 0)
  else if (parsed.data.type === "constraint" && String(parsed.data.id).includes("GSPR")) example = at("compliance-requirement-instance", 0)
  else if (parsed.data.type === "constraint" && String(parsed.data.id).includes("EVID")) example = at("verification-evidence", 0)
  else if (parsed.data.type === "constraint" && String(parsed.data.id).includes("CHANGE")) example = at("change", 0)
  parsed.data.example_ontology_notes = [link(example.id)]
  const section = [
    "## Infusion-pump ontology-note example",
    "",
    `- ${link(example.id, `${example.id} — ${example.title}`)}`,
    "",
    `This ${parsed.data.type ?? "ontology"} page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.`,
  ].join("\n")
  const body = parsed.body.replace(/\n## Infusion-pump ontology-note example[\s\S]*$/, "").trimEnd()
  await writeFile(file, markdown(parsed.data, `${body}\n\n${section}`), "utf8")
}

const canonicalExamples = new Map([
  ["GSPR-0001", [at("compliance-requirement-instance", 0)]],
  ["GSPR-0002", [at("compliance-requirement-instance", 1)]],
  ["PROV-MDR-ANNEX-I", [at("compliance-requirement-instance", 0)]],
  ["PROV-MDR-ANNEX-VIII", [at("classification-decision", 0)]],
  ["PROV-MDR-ARTICLE-61", [at("clinical-evaluation", 0), at("clinical-evidence", 0)]],
  ["PROV-MDR-ARTICLE-83", [at("pms-plan", 0)]],
  ["PROV-MDR-ANNEX-II", [at("technical-documentation-set", 0)]],
  ["PROV-MDR-ANNEX-III", [at("technical-documentation-set", 0), at("pms-plan", 0)]],
  ["SRC-MDCG-2021-24-R1", [at("classification-decision", 0)]],
  ["SRC-MDCG-2025-10", [at("pms-plan", 0)]],
  ["SRC-MDCG-INDEX", [at("classification-decision", 0), at("clinical-evaluation", 0)]],
  ["SRC-TEAM-NB-TD-V4", [at("technical-documentation-set", 0)]],
  ["SRC-EMDN", [at("device-family", 0)]],
  ["SRC-EUDAMED", [at("device-model", 0), at("software-version", 0)]],
  ["SRC-HARMONISED-STANDARDS", [at("configuration-baseline", 0), at("verification-evidence", 0)]],
  ["SRC-UDI", [at("device-variant", 0), at("software-version", 0)]],
])

for (const [canonicalId, examples] of canonicalExamples) {
  const file = fileById.get(canonicalId)
  if (!file) throw new Error(`No canonical page found for ${canonicalId}`)
  const parsed = parseMarkdown(await readFile(file, "utf8"))
  parsed.data.example_ontology_notes = examples.map((record) => link(record.id))
  const section = [
    "## Infpump FlowGuard ontology-note examples",
    "",
    "These device-specific notes reuse this canonical requirement or source instead of duplicating it:",
    "",
    ...examples.map((record) => `- ${link(record.id, `${record.id} — ${record.title}`)}`),
  ].join("\n")
  const body = parsed.body.replace(/\n## Infpump FlowGuard ontology-note examples[\s\S]*$/, "").trimEnd()
  await writeFile(file, markdown(parsed.data, `${body}\n\n${section}`), "utf8")
}

const quartzSourceFile = fileById.get("SRC-QUARTZ-5")
if (!quartzSourceFile) throw new Error("No canonical page found for SRC-QUARTZ-5")
{
  const parsed = parseMarkdown(await readFile(quartzSourceFile, "utf8"))
  parsed.data.ontology_role = "contextual-reference"
  parsed.data.scope = "website-infrastructure"
  const section = [
    "## Ontology role",
    "",
    "This is an explicitly contextual website-infrastructure reference. It does not support an MDR requirement, device-specific compliance conclusion or regulatory inference.",
  ].join("\n")
  const body = parsed.body.replace(/\n## Ontology role[\s\S]*$/, "").trimEnd()
  await writeFile(quartzSourceFile, markdown(parsed.data, `${body}\n\n${section}`), "utf8")
}

console.log(`Generated ${records.length} ontology notes across ${familyDefinitions.length} existing classes.`)
console.log(`Linked ${canonicalExamples.size} canonical requirement/source pages and classified SRC-QUARTZ-5 as contextual infrastructure.`)
console.log(`Updated ${questionFiles.length} competency questions and ${ontologyFiles.length} pages under content/00-ontology.`)
