---
{
  "id": "CQ-03-01",
  "type": "competency-question",
  "title": "Which Annex I GSPRs are applicable to this exact device configuration?",
  "aliases": [
    "CQ-03-01",
    "15-questions/03-gspr/CQ-03-01-which-annex-i-gsprs-are-applicable-to-this-exact-device-configuration"
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
  "ontology_path": "DeviceConfiguration → characteristics/intendedPurpose → ApplicabilityRule → GSPRRequirement → RequirementInstance",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-021-clinical-injury-following-incorrect-touch-interface-input|RISK-PUMP-021]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# Which Annex I GSPRs are applicable to this exact device configuration?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`DeviceConfiguration → characteristics/intendedPurpose → ApplicabilityRule → GSPRRequirement → RequirementInstance`


## Answer

The applicable GSPRs are those whose scope and conditions match the exact configuration, intended purpose and technical characteristics; each Annex I requirement must be assessed rather than assumed applicable or omitted by category. The ontology applies the relevant applicability rule to those facts and creates a device-specific requirement instance with a rationale for either applicable or not applicable status.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-021-clinical-injury-following-incorrect-touch-interface-input|RISK-PUMP-021 — Clinical injury following incorrect touch-interface input]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
