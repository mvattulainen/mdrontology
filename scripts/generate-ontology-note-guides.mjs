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
    edges: [[0, 1, "has_model"], [1, 2, "has_variant"], [2, 3, "has_configuration"], [3, 4, "has_intended_purpose"], [3, 5, "classified_by"], [3, 6, "has_baseline"], [3, 7, "includes_software_version"]],
  },
  {
    slug: "02-excessive-flow-risk-control-chain",
    title: "Excessive-flow risk-control chain",
    purpose: "Connects a device context to a hazardous sequence, assessed risk, resulting harm, implemented control and verification evidence.",
    nodes: [
      note("DEVC-PUMP-001", "Bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("HAZ-PUMP-001", "Unintended excessive flow", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-001-unintended-excessive-flow"),
      note("HS-PUMP-001", "Patient exposed to excessive delivery", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-001-patient-connected-while-pump-delivers-above-programmed-rate"),
      note("HARM-PUMP-001", "Fluid overload", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-001-fluid-overload"),
      note("RISK-PUMP-001", "Clinical injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-001-clinical-injury-following-unintended-excessive-flow"),
      note("RCM-PUMP-001", "Independent flow monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-001-independent-flow-monitoring"),
      note("EVD-PUMP-001", "Flow accuracy verification", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report"),
    ],
    edges: [[0, 1, "has_hazard"], [1, 2, "can_lead_to"], [2, 3, "may_cause"], [5, 4, "mitigates"], [5, 6, "verified_by"]],
  },
  {
    slug: "03-occlusion-detection-safety-case",
    title: "Occlusion-detection safety case",
    purpose: "Shows how an occlusion hazard is connected to its clinical claim, device-specific requirement, controls and validation evidence.",
    nodes: [
      note("HAZ-PUMP-003", "Occluded infusion pathway", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway"),
      note("HS-PUMP-003", "Undetected pressure rise", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected"),
      note("HARM-PUMP-002", "Underdose or loss of therapy", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-002-underdose-or-loss-of-therapy"),
      note("RISK-PUMP-005", "Occlusion injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway"),
      note("RCM-PUMP-004", "Pressure monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring"),
      note("RCM-PUMP-005", "Alarm escalation", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-005-occlusion-alarm-escalation"),
      note("EVD-PUMP-003", "Occlusion validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report"),
      note("CRI-PUMP-017", "Occlusion-detection requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-017-occlusion-detection"),
      note("CLM-PUMP-005", "Timely detection claim", "06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-005-detects-downstream-occlusion-before-prolonged-therapy-interruption"),
      note("CEVD-PUMP-001", "Clinical evidence set", "06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set"),
    ],
    edges: [[0, 1, "can_lead_to"], [1, 2, "may_cause"], [4, 3, "mitigates"], [5, 3, "mitigates"], [4, 6, "verified_by"], [5, 6, "verified_by"], [7, 6, "satisfied_by"], [9, 8, "supports_claim"]],
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
    edges: [[0, 1, "can_lead_to"], [1, 3, "may_cause"], [4, 2, "mitigates"], [5, 2, "mitigates"], [4, 6, "verified_by"], [5, 6, "verified_by"], [7, 6, "satisfied_by"]],
  },
  {
    slug: "05-battery-signal-to-change-assessment",
    title: "Battery signal to change assessment",
    purpose: "Separates the approved battery baseline from the accepted signal, the change assessment it triggers, and the new evidence type required before release.",
    nodes: [
      note("RCM-PUMP-013", "State-of-charge estimation<br/>implementation: implemented", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation"),
      note("EVD-PUMP-007", "Battery endurance validation<br/>evidence: approved baseline", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report"),
      note("RISK-PUMP-013", "Premature depletion risk<br/>acceptance: baseline accepted<br/>reassessment: required", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion"),
      note("SIGNAL-PUMP-001", "Runtime reduction signal<br/>signal: accepted", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction"),
      note("CHG-PUMP-001", "Supplier replacement<br/>change: under assessment", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement"),
      note("CIA-PUMP-001", "Change-impact assessment<br/>assessment: under assessment", "06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment"),
      note("CRI-PUMP-051", "Post-change endurance requirement<br/>requirement: draft<br/>compliance: planned", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change"),
      note("EVTYPE-PUMP-001", "Required post-change evidence type", "01-Ontology instances/08-technical-documentation/evidence-types/EVTYPE-PUMP-001-post-change-battery-endurance-verification"),
    ],
    visualNodes: [
      note("RCM-PUMP-013", "State-of-charge estimation<br/>implementation: implemented", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-013-battery-state-of-charge-estimation"),
      note("EVD-PUMP-007", "Battery endurance validation<br/>evidence: approved baseline", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report"),
      note("RISK-PUMP-013", "Premature depletion risk<br/>baseline reference", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion"),
      note("SIGNAL-PUMP-001", "Runtime reduction signal<br/>signal: accepted", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction"),
      note("CHG-PUMP-001", "Supplier replacement<br/>change: under assessment", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement"),
      note("CIA-PUMP-001", "Change-impact assessment<br/>assessment: under assessment", "06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-001-battery-cell-supplier-change-impact-assessment"),
      note("CRI-PUMP-051", "Post-change endurance requirement<br/>requirement: draft", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change"),
      note("EVTYPE-PUMP-001", "Required post-change evidence type", "01-Ontology instances/08-technical-documentation/evidence-types/EVTYPE-PUMP-001-post-change-battery-endurance-verification"),
      note("RISK-PUMP-013", "Premature depletion risk<br/>change-impact target", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-013-clinical-injury-following-premature-battery-depletion"),
      note("EVD-PUMP-007", "Approved evidence<br/>change-impact target", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-007-battery-endurance-validation-report"),
    ],
    edges: [[0, 2, "mitigates"], [0, 1, "verified_by"], [3, 4, "triggers"], [4, 8, "impacts"], [4, 9, "impacts"], [4, 5, "has_impact_assessment"], [6, 7, "requires_evidence"]],
    explanation: "This is a regulatory lifecycle view, not a universal status state machine. The implemented control and approved evidence describe the released baseline, while the accepted post-market signal triggers a change that remains under assessment. The draft compliance requirement identifies the evidence type needed for the changed configuration; it is deliberately not shown as satisfied by planned evidence. Release remains blocked until actual evidence is generated and approved, the impact assessment is completed, and the affected risk is reassessed and accepted.",
  },
  {
    slug: "06-cybersecurity-control-and-feedback-loop",
    title: "Cybersecurity control and feedback loop",
    purpose: "Connects software, cybersecurity hazard and risk, preventive controls, penetration evidence, post-market signal and security-patch change.",
    nodes: [
      note("SW-PUMP-001", "Control software", "06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420"),
      note("HAZ-PUMP-012", "Cybersecurity compromise", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-012-cybersecurity-compromise"),
      note("HS-PUMP-012", "Unauthorised configuration change", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-012-unauthorised-actor-changes-therapy-or-device-configuration"),
      note("HARM-PUMP-010", "Serious deterioration or death", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-010-serious-deterioration-or-death"),
      note("RISK-PUMP-023", "Cybersecurity injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-023-clinical-injury-following-cybersecurity-compromise"),
      note("RCM-PUMP-025", "Role-based access", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-025-role-based-access-control"),
      note("RCM-PUMP-026", "Signed updates", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-026-signed-software-update-packages"),
      note("EVD-PUMP-012", "Penetration-test report", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-012-cybersecurity-penetration-test-report"),
      note("SIGNAL-PUMP-007", "Unauthorised login signal", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-007-repeated-unauthorised-login-attempts"),
      note("CHG-PUMP-007", "Operating-system patch", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-007-cybersecurity-operating-system-patch"),
    ],
    edges: [[1, 2, "can_lead_to"], [2, 3, "may_cause"], [5, 4, "mitigates"], [6, 4, "mitigates"], [5, 7, "verified_by"], [6, 7, "verified_by"], [8, 9, "triggers"], [9, 4, "impacts"], [9, 0, "impacts"], [9, 7, "impacts"]],
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
      note("DOC-PUMP-006", "Controlled CER document version Rev D", "06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-006-clinical-evaluation-report-rev-d"),
      note("CRI-PUMP-046", "Clinical-evaluation requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-046-clinical-evaluation-support"),
      note("EVD-PUMP-029", "Clinical-claims evidence summary", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-029-clinical-claims-evidence-summary"),
    ],
    edges: [[0, 1, "has_intended_purpose"], [0, 2, "makes_clinical_claim"], [3, 2, "supports_claim"], [4, 3, "uses_evidence"], [4, 0, "evaluates"], [4, 5, "documented_by"], [5, 6, "represented_by_document_version"], [7, 8, "satisfied_by"]],
  },
  {
    slug: "08-electrical-safety-compliance-trace",
    title: "Electrical-safety compliance trace",
    purpose: "Connects the current device configuration to its electrical-safety requirement, hazard, risk, isolation control, test evidence, certificate and technical-documentation set.",
    nodes: [
      note("DEVC-PUMP-003", "Paediatric configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10"),
      note("CRI-PUMP-022", "Electrical-safety requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-022-electrical-safety"),
      note("HAZ-PUMP-008", "Electrical isolation failure", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-008-electrical-isolation-failure"),
      note("RISK-PUMP-015", "Electrical injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-015-clinical-injury-following-electrical-isolation-failure"),
      note("RCM-PUMP-016", "Medical-grade isolation", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-016-medical-grade-isolation-barrier"),
      note("EVD-PUMP-008", "Electrical-safety test report", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report"),
      note("CERT-PUMP-003", "CB test certificate", "06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate"),
      note("TD-PUMP-001", "MDR technical-documentation set", "06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set"),
    ],
    edges: [[0, 1, "has_applicable_requirement"], [0, 2, "has_hazard"], [0, 3, "has_risk"], [0, 6, "has_certificate"], [4, 3, "mitigates"], [4, 5, "verified_by"], [1, 5, "satisfied_by"], [5, 6, "supports_certificate"], [7, 5, "includes"]],
  },
  {
    slug: "09-pms-signal-and-change-feedback",
    title: "PMS signal and change feedback",
    purpose: "Shows how the PMS plan receives an occlusion signal, initiates change assessment and feeds updated controls and evidence back into risk management.",
    nodes: [
      note("DEVC-PUMP-002", "Transport configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10"),
      note("PMS-PLAN-PUMP-001", "Post-market surveillance plan", "06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan"),
      note("SIGNAL-PUMP-002", "Delayed alarm trend", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend"),
      note("CHG-PUMP-002", "Occlusion threshold update", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-002-occlusion-algorithm-threshold-update"),
      note("HAZ-PUMP-003", "Occluded infusion pathway", "06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-003-occluded-infusion-pathway"),
      note("RISK-PUMP-005", "Occlusion injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-005-clinical-injury-following-occluded-infusion-pathway"),
      note("RCM-PUMP-004", "Pressure monitoring", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-004-occlusion-pressure-monitoring"),
      note("EVD-PUMP-003", "Occlusion validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-003-occlusion-detection-validation-report"),
      note("HS-PUMP-003", "Undetected pressure rise", "06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-003-pressure-rises-while-downstream-occlusion-is-undetected"),
      note("HARM-PUMP-002", "Underdose or loss of therapy", "06-Infpump FlowGuard ontology notes/harm/HARM-PUMP-002-underdose-or-loss-of-therapy"),
    ],
    edges: [[0, 1, "covered_by_pms_plan"], [2, 3, "triggers"], [3, 5, "impacts"], [3, 7, "impacts"], [6, 5, "mitigates"], [6, 7, "verified_by"], [4, 8, "can_lead_to"], [8, 9, "may_cause"]],
  },
  {
    slug: "10-supplier-component-change-control",
    title: "Supplier and component change control",
    purpose: "Connects supplier control, an air-sensor component revision and its downstream risk, control, evidence and released baseline implications.",
    nodes: [
      note("PROC-PUMP-004", "Supplier-control process", "06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process"),
      note("SUP-PUMP-002", "Air-sensor supplier", "06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier"),
      note("COMP-PUMP-002", "Air-sensor assembly", "06-Infpump FlowGuard ontology notes/component/COMP-PUMP-002-air-in-line-sensor-assembly"),
      note("DEVC-PUMP-002", "Transport configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10"),
      note("CHG-PUMP-003", "Sensor component revision", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision"),
      note("RISK-PUMP-007", "Air-introduction injury risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-007-clinical-injury-following-air-introduced-into-infusion-line"),
      note("RCM-PUMP-006", "Dual air sensors", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-006-dual-air-in-line-sensors"),
      note("EVD-PUMP-004", "Detector validation", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-004-air-in-line-detector-validation-report"),
    ],
    edges: [[0, 1, "qualifies_supplier"], [1, 2, "supplied_component"], [3, 2, "includes_component"], [4, 5, "impacts"], [4, 7, "impacts"], [6, 5, "mitigates"], [6, 7, "verified_by"]],
  },
  {
    slug: "11-completed-battery-endurance-lifecycle",
    title: "Completed battery-endurance lifecycle",
    direction: "LR",
    fitWidth: false,
    purpose: "Shows one completed, configuration-specific regulatory sequence from planned post-market surveillance through signal handling, change assessment, risk reassessment, requirement implementation and verification to a supported clinical claim.",
    nodes: [
      note("DEVC-PUMP-001", "Released bedside configuration", "06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10"),
      note("PMS-PLAN-PUMP-002", "Battery-endurance PMS plan", "06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-002-bedside-battery-endurance-post-market-surveillance-plan"),
      note("SIGNAL-PUMP-011", "Accepted degradation signal", "06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-011-confirmed-battery-endurance-degradation-trend"),
      note("CHG-PUMP-013", "Controlled change record<br/>current state: implemented", "06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update"),
      note("CIA-PUMP-002", "Completed impact assessment", "06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-002-battery-endurance-signal-change-impact-assessment"),
      note("RISK-PUMP-041", "Reassessed and accepted risk", "06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation"),
      note("CRI-PUMP-052", "Satisfied endurance requirement", "06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance"),
      note("RCM-PUMP-046", "Implemented shutdown reserve", "06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-046-conservative-low-battery-shutdown-reserve"),
      note("EVD-PUMP-032", "Approved verification report", "06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-032-post-change-battery-endurance-verification-report"),
      note("CLM-PUMP-021", "Supported battery-duration claim", "06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-021-maintains-specified-battery-backed-therapy-duration"),
    ],
    edges: [[0, 1, "covered_by_pms_plan"], [1, 2, "identifies_signal"], [2, 3, "triggers"], [3, 4, "has_impact_assessment"], [4, 5, "requires_reassessment_of"], [5, 6, "informs_requirement"], [6, 7, "implemented_by_control"], [7, 8, "verified_by"], [8, 9, "supports_claim"]],
    explanation: "The sequence represents a completed regulatory workflow for DEVC-PUMP-001. An effective PMS plan identifies an accepted battery-endurance signal; the signal opens a controlled change record and its impact assessment; the assessment requires risk reassessment; the accepted risk result informs a device-specific requirement; an implemented risk control fulfils the design intent; approved verification evidence demonstrates the control; and that evidence supports the continued battery-duration claim. The change record is created before assessment but reaches its displayed implemented state only after assessment, control implementation and verification are complete. The ordering does not imply that initial risk management or the original claim began only after market release—it records the governed post-market reassessment and confirmation cycle for the changed configuration.",
  },
]

function routeFor(target) {
  return `/${target.replaceAll("\\", "/").replaceAll(" ", "-").toLowerCase()}`
}

function mermaidFor(diagram) {
  const flowchartConfig = diagram.fitWidth === false
    ? '{"curve": "linear", "useMaxWidth": false}'
    : '{"curve": "linear"}'
  const lines = [`%%{init: {"flowchart": ${flowchartConfig}}}%%`, `flowchart ${diagram.direction ?? "TD"}`]
  const visualNodes = diagram.visualNodes ?? diagram.nodes
  visualNodes.forEach((item, index) => lines.push(`  N${index + 1}["${item.id}<br/>${item.label}"]`))
  diagram.edges.forEach(([from, to, label]) => lines.push(`  N${from + 1} -->|${label}| N${to + 1}`))
  visualNodes.forEach((item, index) => lines.push(`  click N${index + 1} "${routeFor(item.target)}" "Open ${item.id}"`))
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
    "Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.",
    "",
    "```mermaid",
    mermaidFor(diagram),
    "```",
    ...(diagram.explanation ? ["", "## Lifecycle reading", "", diagram.explanation] : []),
    "",
    "## Linked ontology notes",
    "",
    ...diagram.nodes.map((item) => `- [[${item.target}|${item.id} — ${item.label}]]`),
    "",
    "These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.",
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
