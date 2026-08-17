import { mkdir, readFile, stat, writeFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const contentRoot = path.join(root, "content")
const notesRoot = path.join(contentRoot, "06-Infpump FlowGuard ontology notes")
const connectionRoot = path.join(notesRoot, "connections")
const today = "2026-08-16"

function markdown(data, body) {
  return `---\n${JSON.stringify(data, null, 2)}\n---\n\n${body.trim()}\n`
}

const note = (id, label, target) => ({ id, label, target })

const diagrams = [
  {
    slug: "01-device-identity-and-regulatory-context",
    title: "Device identity and regulatory context",
    purpose: "Shows how the regulated product is narrowed from family to released configuration and then anchored to its intended purpose, classification, baseline and software version.",
    nodes: [
      note("DEVF-PUMP-001", "Infusion-pump family", "06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family"),
      note("DEVM-PUMP-001", "FG-100 model", "06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model"),
      note("DEVV-PUMP-001", "EU professional-use variant", "06-Infpump FlowGuard ontology notes/device-variant/DEVV-PUMP-001-infpump-flowguard-fg-100-eu-professional-use-variant"),
      note("DEVC-PUMP-001", "Bedside configuration 1.0", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("IP-PUMP-001", "Adult inpatient intended purpose", "06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients"),
      note("CLD-PUMP-001", "Classification decision", "06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision"),
      note("BASE-PUMP-001", "Released design baseline", "06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11"),
      note("SW-PUMP-001", "Control software 4.2.0", "06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420"),
    ],
    edges: [[0, 1, "has model"], [1, 2, "has variant"], [2, 3, "has configuration"], [3, 4, "has intended purpose"], [3, 5, "classified by"], [3, 6, "has baseline"], [3, 7, "includes software"]],
  },
  {
    slug: "02-excessive-flow-risk-control-chain",
    title: "Excessive-flow risk-control chain",
    purpose: "Connects a device context to a hazardous sequence, assessed risk, resulting harm, implemented control and verification evidence.",
    nodes: [
      note("DEVC-PUMP-001", "Bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("HAZ-PUMP-001", "Unintended excessive flow", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-001-unintended-excessive-flow"),
      note("HS-PUMP-001", "Patient exposed to excessive delivery", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-001-patient-connected-while-pump-delivers-above-programmed-rate"),
      note("RISK-PUMP-001", "Clinical injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-001-clinical-injury-following-unintended-excessive-flow"),
      note("HARM-PUMP-001", "Fluid overload", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-001-fluid-overload"),
      note("RCM-PUMP-001", "Independent flow monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-001-independent-flow-monitoring"),
      note("EVD-PUMP-001", "Flow accuracy verification", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report"),
    ],
    edges: [[0, 1, "has hazard"], [1, 2, "creates situation"], [2, 3, "contributes to risk"], [3, 4, "may result in"], [5, 3, "mitigates"], [5, 6, "verified by"]],
  },
  {
    slug: "03-occlusion-detection-safety-case",
    title: "Occlusion-detection safety case",
    purpose: "Shows how an occlusion hazard is connected to its clinical claim, device-specific requirement, controls and validation evidence.",
    nodes: [
      note("HAZ-PUMP-003", "Occluded infusion pathway", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway"),
      note("HS-PUMP-003", "Undetected pressure rise", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected"),
      note("RISK-PUMP-005", "Occlusion injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway"),
      note("RCM-PUMP-004", "Pressure monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring"),
      note("RCM-PUMP-005", "Alarm escalation", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-005-occlusion-alarm-escalation"),
      note("EVD-PUMP-003", "Occlusion validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report"),
      note("CRI-PUMP-017", "Occlusion-detection requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-017-occlusion-detection"),
      note("CLM-PUMP-005", "Timely detection claim", "06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-005-detects-downstream-occlusion-before-prolonged-therapy-interruption"),
    ],
    edges: [[0, 1, "creates situation"], [1, 2, "contributes to risk"], [3, 2, "mitigates"], [4, 2, "mitigates"], [3, 5, "verified by"], [4, 5, "verified by"], [6, 5, "satisfied by"], [5, 7, "supports"]],
  },
  {
    slug: "04-air-in-line-protection-chain",
    title: "Air-in-line protection chain",
    purpose: "Connects the air-in-line hazard to patient exposure, harm, device-specific compliance, complementary controls and their validation evidence.",
    nodes: [
      note("HAZ-PUMP-004", "Air in infusion line", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-004-air-introduced-into-infusion-line"),
      note("HS-PUMP-004", "Air reaches patient line", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-004-air-reaches-the-patient-line"),
      note("RISK-PUMP-007", "Air-introduction injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line"),
      note("HARM-PUMP-003", "Air embolism", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-003-air-embolism"),
      note("RCM-PUMP-006", "Dual air sensors", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors"),
      note("RCM-PUMP-007", "Automatic stop", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-007-air-in-line-automatic-stop"),
      note("EVD-PUMP-004", "Detector validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report"),
      note("CRI-PUMP-018", "Air-detection requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-018-air-in-line-detection"),
    ],
    edges: [[0, 1, "creates situation"], [1, 2, "contributes to risk"], [2, 3, "may result in"], [4, 2, "mitigates"], [5, 2, "mitigates"], [4, 6, "verified by"], [5, 6, "verified by"], [7, 6, "satisfied by"]],
  },
  {
    slug: "05-battery-signal-to-change-assessment",
    title: "Battery signal to change assessment",
    purpose: "Shows a post-market battery signal flowing through supplier and component context into a change, affected risk control and renewed endurance evidence.",
    nodes: [
      note("DEVC-PUMP-001", "Bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("SUP-PUMP-001", "Battery supplier", "06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier"),
      note("COMP-PUMP-004", "Battery pack", "06-Infpump FlowGuard ontology notes/component/COMP-PUMP-004-rechargeable-battery-pack"),
      note("SIGNAL-PUMP-001", "Runtime reduction signal", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction"),
      note("CHG-PUMP-001", "Supplier replacement", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement"),
      note("RISK-PUMP-013", "Premature depletion risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion"),
      note("RCM-PUMP-013", "State-of-charge estimation", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation"),
      note("EVD-PUMP-007", "Battery endurance validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report"),
    ],
    edges: [[1, 2, "supplies"], [2, 0, "included in"], [3, 4, "triggers assessment"], [4, 1, "changes supplier"], [4, 2, "affects component"], [4, 5, "reassesses"], [6, 5, "mitigates"], [6, 7, "verified by"]],
  },
  {
    slug: "06-cybersecurity-control-and-feedback-loop",
    title: "Cybersecurity control and feedback loop",
    purpose: "Connects software, cybersecurity hazard and risk, preventive controls, penetration evidence, post-market signal and security-patch change.",
    nodes: [
      note("SW-PUMP-001", "Control software", "06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420"),
      note("HAZ-PUMP-012", "Cybersecurity compromise", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-012-cybersecurity-compromise"),
      note("HS-PUMP-012", "Unauthorised configuration change", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-012-unauthorised-actor-changes-therapy-or-device-configuration"),
      note("RISK-PUMP-023", "Cybersecurity injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise"),
      note("RCM-PUMP-025", "Role-based access", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control"),
      note("RCM-PUMP-026", "Signed updates", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-026-signed-software-update-packages"),
      note("EVD-PUMP-012", "Penetration-test report", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report"),
      note("SIGNAL-PUMP-007", "Unauthorised login signal", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-007-repeated-unauthorised-login-attempts"),
      note("CHG-PUMP-007", "Operating-system patch", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-007-cybersecurity-operating-system-patch"),
    ],
    edges: [[0, 1, "exposed to"], [1, 2, "creates situation"], [2, 3, "contributes to risk"], [4, 3, "mitigates"], [5, 3, "mitigates"], [4, 6, "verified by"], [7, 3, "concerns"], [7, 8, "triggers"], [8, 0, "updates"]],
  },
  {
    slug: "07-clinical-claim-to-evaluation-report",
    title: "Clinical claim to evaluation report",
    purpose: "Shows how a device and intended purpose frame a clinical claim that is assessed through evidence, evaluation and controlled reporting.",
    nodes: [
      note("DEVC-PUMP-001", "Bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("IP-PUMP-001", "Adult inpatient intended purpose", "06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients"),
      note("CLM-PUMP-002", "Continuous therapy claim", "06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-002-supports-continuous-intravenous-therapy"),
      note("CEVD-PUMP-001", "Clinical evidence set", "06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set"),
      note("CE-PUMP-001", "Continuous clinical evaluation", "06-Infpump FlowGuard ontology notes/clinical-evaluation/CE-PUMP-001-infpump-flowguard-continuous-clinical-evaluation"),
      note("CER-PUMP-001", "Clinical evaluation report", "06-Infpump FlowGuard ontology notes/clinical-evaluation-report/CER-PUMP-001-infpump-flowguard-clinical-evaluation-report-rev-d"),
      note("DOC-PUMP-004", "Controlled CER document version", "06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-004-clinical-evaluation-report-rev-c"),
      note("CRI-PUMP-046", "Clinical-evaluation requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-046-clinical-evaluation-support"),
    ],
    edges: [[0, 1, "has intended purpose"], [1, 2, "frames claim"], [3, 2, "supports"], [4, 3, "uses evidence"], [4, 0, "evaluates"], [4, 5, "documented by"], [5, 6, "controlled as"], [7, 5, "satisfied by"]],
  },
  {
    slug: "08-electrical-safety-compliance-trace",
    title: "Electrical-safety compliance trace",
    purpose: "Connects the current device configuration to its electrical-safety requirement, hazard, risk, isolation control, test evidence, certificate and technical-documentation set.",
    nodes: [
      note("DEVC-PUMP-001", "Bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("CRI-PUMP-022", "Electrical-safety requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-022-electrical-safety"),
      note("HAZ-PUMP-008", "Electrical isolation failure", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-008-electrical-isolation-failure"),
      note("RISK-PUMP-015", "Electrical injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure"),
      note("RCM-PUMP-016", "Medical-grade isolation", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-016-medical-grade-isolation-barrier"),
      note("EVD-PUMP-008", "Electrical-safety test report", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report"),
      note("CERT-PUMP-003", "CB test certificate", "06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate"),
      note("TD-PUMP-001", "MDR technical-documentation set", "06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set"),
    ],
    edges: [[0, 1, "has requirement"], [0, 2, "has hazard"], [2, 3, "contributes to risk"], [4, 3, "mitigates"], [4, 5, "verified by"], [1, 5, "satisfied by"], [5, 6, "supports certificate"], [7, 5, "includes"]],
  },
  {
    slug: "09-pms-signal-and-change-feedback",
    title: "PMS signal and change feedback",
    purpose: "Shows how the PMS plan receives an occlusion signal, initiates change assessment and feeds updated controls and evidence back into risk management.",
    nodes: [
      note("PMS-PLAN-PUMP-001", "Post-market surveillance plan", "06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan"),
      note("SIGNAL-PUMP-002", "Delayed alarm trend", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend"),
      note("CHG-PUMP-002", "Occlusion threshold update", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update"),
      note("HAZ-PUMP-003", "Occluded infusion pathway", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway"),
      note("RISK-PUMP-005", "Occlusion injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway"),
      note("RCM-PUMP-004", "Pressure monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring"),
      note("EVD-PUMP-003", "Occlusion validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report"),
      note("PROC-PUMP-002", "Risk-management process", "06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-002-infusion-pump-risk-management-process"),
    ],
    edges: [[0, 1, "collects signal"], [1, 2, "triggers"], [1, 4, "concerns"], [3, 4, "contributes to risk"], [2, 5, "updates"], [5, 4, "mitigates"], [5, 6, "verified by"], [7, 4, "governs reassessment"]],
  },
  {
    slug: "10-supplier-component-change-control",
    title: "Supplier and component change control",
    purpose: "Connects supplier control, an air-sensor component revision and its downstream risk, control, evidence and released baseline implications.",
    nodes: [
      note("SUP-PUMP-002", "Air-sensor supplier", "06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier"),
      note("COMP-PUMP-002", "Air-sensor assembly", "06-Infpump FlowGuard ontology notes/component/COMP-PUMP-002-air-in-line-sensor-assembly"),
      note("CHG-PUMP-003", "Sensor component revision", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision"),
      note("HAZ-PUMP-004", "Air in infusion line", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-004-air-introduced-into-infusion-line"),
      note("RISK-PUMP-007", "Air-introduction injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line"),
      note("RCM-PUMP-006", "Dual air sensors", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors"),
      note("EVD-PUMP-004", "Detector validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report"),
      note("PROC-PUMP-004", "Supplier-control process", "06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process"),
      note("BASE-PUMP-001", "Released design baseline", "06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11"),
    ],
    edges: [[7, 0, "qualifies"], [0, 1, "supplies"], [2, 1, "changes"], [1, 3, "detects"], [3, 4, "contributes to risk"], [5, 4, "mitigates"], [5, 6, "verified by"], [2, 6, "requires review"], [2, 8, "updates baseline"]],
  },
]

function routeFor(target) {
  return `/${target.replaceAll("\\", "/").replaceAll(" ", "-").toLowerCase()}`
}

function mermaidFor(diagram) {
  const lines = ["flowchart TD"]
  diagram.nodes.forEach((item, index) => lines.push(`  N${index + 1}["${item.id}<br/>${item.label}"]`))
  diagram.edges.forEach(([from, to, label]) => lines.push(`  N${from + 1} -->|${label}| N${to + 1}`))
  diagram.nodes.forEach((item, index) => lines.push(`  click N${index + 1} "${routeFor(item.target)}" "Open ${item.id}"`))
  return lines.join("\n")
}

await mkdir(connectionRoot, { recursive: true })
for (const diagram of diagrams) {
  if (diagram.nodes.length < 4 || diagram.nodes.length > 10) throw new Error(`${diagram.slug} must connect 4–10 ontology notes`)
  for (const item of diagram.nodes) await stat(path.join(contentRoot, `${item.target}.md`))
  const body = [
    `# ${diagram.title}`,
    "",
    diagram.purpose,
    "",
    "The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.",
    "",
    "```mermaid",
    mermaidFor(diagram),
    "```",
    "",
    "## Linked ontology notes",
    "",
    ...diagram.nodes.map((item) => `- [[${item.target}|${item.id} — ${item.label}]]`),
    "",
    "These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.",
  ].join("\n")
  await writeFile(path.join(connectionRoot, `${diagram.slug}.md`), markdown({
    title: diagram.title,
    aliases: [`Ontology note connection — ${diagram.title}`, `03-Ontology notes/connections/${diagram.slug}`],
    created: today,
    modified: today,
    tags: ["ontology-note/connection-diagram", "device/infpump-flowguard"],
    draft: false,
  }, body), "utf8")
}

const metaBody = [
  "# Ontology note",
  "",
  "An **ontology note** is the vault’s representation of one independently identifiable regulatory object, such as a device configuration, intended purpose, classification decision, risk, control, clinical claim, evidence item, change or post-market signal. It is not merely a page about a topic: it gives the represented object a stable identity so that people and software can refer to the same thing consistently even when folders, filenames or source documents change.",
  "",
  "Each ontology note has two complementary layers. Structured frontmatter records the identifier, class, state, dates, provenance, configuration scope, technical-file reference and typed relationships needed for deterministic queries and validation. The Markdown body renders the essential meaning for a human reader, including the note’s semantic role, verbal traceability to previous and succeeding dependencies, and a readable presentation of its structured metadata.",
  "",
  "An ontology note normally represents one semantic subject that may change, be reviewed or be referenced independently. A technical-file document can contain many such subjects, while the note separates each subject from the document version that currently records it; for example, a risk keeps its stable risk-matrix identity while a revised risk-analysis file becomes the current technical-file source.",
  "",
  "Ontology notes become useful as a knowledge graph because typed links connect them. A device configuration links to an intended purpose and classification decision; a risk links to its hazard, harm and controls; a control links to verification evidence; and a signal or change links back to the objects that require reassessment. These relationships allow navigation in both directions and expose the context, evidence and provenance behind a regulatory conclusion.",
  "",
  "Humans use ontology notes to inspect traceability and review the current regulated state, while rules, constraints and retrieval software use them to derive findings, detect missing information and assemble grounded context for competency questions or LLM explanations. The note remains a governed semantic record rather than an automatic legal conclusion: extracted or generated content must retain its origin, review status and accountable human-review boundary.",
  "",
  "## Explore examples",
  "",
  "- [Browse all Infpump FlowGuard ontology notes](/06-infpump-flowguard-ontology-notes/)",
  "- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|Open a representative ontology note]]",
  "- [Explore the ten ontology-note connection diagrams](/06-infpump-flowguard-ontology-notes/connections/)",
].join("\n")

await writeFile(path.join(contentRoot, "07_Other", "00-Meta", "META-ONTOLOGY-NOTE-ontology-note.md"), markdown({
  id: "META-ONTOLOGY-NOTE",
  type: "meta-page",
  title: "Ontology note",
  aliases: ["META-ONTOLOGY-NOTE", "Ontology note", "00-meta/META-ONTOLOGY-NOTE-ontology-note"],
  status: "active",
  version: "1",
  created: today,
  modified: today,
  tags: ["ontology/meta-page", "ontology-note/guidance"],
  draft: false,
}, metaBody), "utf8")

const viewsMetaBody = [
  "# Views",
  "",
  "The **04 — Views** section provides task-oriented ways to enter and traverse the ontology. A view brings together classes, instances, ontology notes, sources, questions and generated results that a manufacturer needs for a particular review activity, such as exploring requirements, following evidence, assessing changes or checking compliance gaps.",
  "",
  "A view is a navigation and presentation layer, not a second source of regulatory facts. The canonical meaning remains in the linked ontology definitions, the regulated facts remain in instances and ontology notes, and legal or guidance support remains in source pages. This separation lets a view reorganise the same knowledge for different users without creating conflicting copies.",
  "",
  "Curated views explain a stable review route and provide deliberate links between relevant records. Generated views are rebuilt from structured metadata and relations, for example to show requirement compliance, traceability or unresolved gaps. Both forms should identify their scope and make it possible to open the underlying semantic records behind a displayed result.",
  "",
  "Use a view when starting with a practical question rather than a known record identifier. Follow its links into the ontology notes and canonical pages to inspect provenance, technical-file references and dependencies, then return to the view to continue the workflow. A view can highlight missing data or derived status, but any legally sensitive conclusion remains subject to the governed rule, evidence and accountable human review.",
  "",
  "## Open the section",
  "",
  "- [Browse 04 — Views](/04-views/)",
  "- [Open the requirement explorer](/04-views/view-requirement-explorer-requirement-explorer)",
  "- [Explore ontology-note connections](/06-infpump-flowguard-ontology-notes/connections/)",
].join("\n")

await writeFile(path.join(contentRoot, "07_Other", "00-Meta", "META-VIEWS-views.md"), markdown({
  id: "META-VIEWS",
  type: "meta-page",
  title: "Views",
  aliases: ["META-VIEWS", "Purpose of 04-Views", "04-Views guidance"],
  status: "active",
  version: "1",
  created: today,
  modified: today,
  tags: ["ontology/meta-page", "views/guidance"],
  draft: false,
}, viewsMetaBody), "utf8")

const notesIndexFile = path.join(notesRoot, "index.md")
let notesIndex = await readFile(notesIndexFile, "utf8")
const guideStart = "<!-- ontology-note-guides:start -->"
const guideEnd = "<!-- ontology-note-guides:end -->"
const guideBlock = [
  guideStart,
  "## Understanding and traversing ontology notes",
  "",
  "Read [[07_Other/00-Meta/META-ONTOLOGY-NOTE-ontology-note|What is an ontology note?]] for the purpose, structure and review boundary of these records.",
  "",
  "The following diagrams connect real Infpump FlowGuard notes into regulatory reasoning paths:",
  "",
  ...diagrams.map((diagram) => `- [${diagram.title}](/06-infpump-flowguard-ontology-notes/connections/${diagram.slug})`),
  guideEnd,
].join("\n")
if (notesIndex.includes(guideStart)) {
  notesIndex = notesIndex.replace(new RegExp(`${guideStart}[\\s\\S]*?${guideEnd}`), guideBlock)
} else {
  notesIndex = notesIndex.replace("\n## Device configuration", `\n${guideBlock}\n\n## Device configuration`)
}
await writeFile(notesIndexFile, notesIndex, "utf8")

console.log(`Generated the Ontology note and Views guides plus ${diagrams.length} linked-note Mermaid pages.`)
