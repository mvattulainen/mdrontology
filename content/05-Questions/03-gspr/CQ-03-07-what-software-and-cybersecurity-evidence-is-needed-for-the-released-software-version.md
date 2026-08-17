---
{
  "id": "CQ-03-07",
  "type": "competency-question",
  "title": "What software and cybersecurity evidence is needed for the released software version?",
  "aliases": [
    "CQ-03-07",
    "15-questions/03-gspr/CQ-03-07-what-software-and-cybersecurity-evidence-is-needed-for-the-released-software-version"
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
  "ontology_path": "SoftwareVersion → SoftwareRequirement/CybersecurityRisk → Verification/Validation → EvidenceItem → GSPRRequirement",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure|RISK-PUMP-027]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# What software and cybersecurity evidence is needed for the released software version?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`SoftwareVersion → SoftwareRequirement/CybersecurityRisk → Verification/Validation → EvidenceItem → GSPRRequirement`


## Answer

The released software version needs controlled software requirements, architecture and lifecycle records, risk and cybersecurity controls, verification and validation results, anomaly disposition and traceability to applicable GSPRs. The ontology connects the specific version to software requirements and cybersecurity risks, then to activities and evidence items, so only evidence covering that release supports compliance.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-027-clinical-injury-following-fluid-ingress-into-enclosure|RISK-PUMP-027 — Clinical injury following fluid ingress into enclosure]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
