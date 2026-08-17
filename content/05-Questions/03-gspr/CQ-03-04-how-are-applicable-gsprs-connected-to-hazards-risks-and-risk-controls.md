---
{
  "id": "CQ-03-04",
  "type": "competency-question",
  "title": "How are applicable GSPRs connected to hazards, risks and risk controls?",
  "aliases": [
    "CQ-03-04",
    "15-questions/03-gspr/CQ-03-04-how-are-applicable-gsprs-connected-to-hazards-risks-and-risk-controls"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "03-gspr",
  "answer_pattern": "[[AP-REQ-ap-req-answer-pattern|AP-REQ]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "risk_class",
    "configuration_baseline"
  ],
  "traverses": [
    "has_applicable_requirement",
    "instantiates_requirement",
    "satisfied_by",
    "derived_from"
  ],
  "applies_rule_families": [
    "03-gspr"
  ],
  "checks_constraint": [
    "[[CON-GSPR-001-applicable-requirements-have-compliance-traceability|CON-GSPR-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "ontology_path": "GSPRRequirement ↔ Hazard/Risk → RiskControlMeasure → VerificationEvidence → ComplianceStatus",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-024-delayed-detection-or-secondary-harm-from-cybersecurity-compromise|RISK-PUMP-024]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How are applicable GSPRs connected to hazards, risks and risk controls?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`GSPRRequirement ↔ Hazard/Risk → RiskControlMeasure → VerificationEvidence → ComplianceStatus`


## Answer

Applicable GSPRs should trace to the hazards and risks they address, the risk-control measures used to meet them, and verification evidence demonstrating that those controls work. The ontology maintains these bidirectional links and derives compliance status only when the relevant risk controls and evidence are present for the assessed configuration.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-024-delayed-detection-or-secondary-harm-from-cybersecurity-compromise|RISK-PUMP-024 — Delayed detection or secondary harm from cybersecurity compromise]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
