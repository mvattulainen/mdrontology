---
{
  "id": "CQ-03-03",
  "type": "competency-question",
  "title": "When is use of a harmonised standard optional, relevant or useful as presumption-of-conformity evidence?",
  "aliases": [
    "CQ-03-03",
    "15-questions/03-gspr/CQ-03-03-when-is-use-of-a-harmonised-standard-optional-relevant-or-useful-as-presumption-of-conformity-evidence"
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
  "ontology_path": "GSPRRequirement → Standard → HarmonisationStatus/OJEUReference → ComplianceMethod → Evidence",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-023-touch-confirmation-for-critical-settings|RCM-PUMP-023]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# When is use of a harmonised standard optional, relevant or useful as presumption-of-conformity evidence?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`GSPRRequirement → Standard → HarmonisationStatus/OJEUReference → ComplianceMethod → Evidence`


## Answer

Use of a harmonised standard is generally voluntary, but a standard whose reference is published in the Official Journal can provide presumption of conformity for the MDR requirements covered by that reference and within its stated limitations. The ontology links the GSPR to the standard, verifies harmonisation status and OJEU reference, records the chosen compliance method, and connects objective evidence; alternative methods require their own justification and evidence.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-023-touch-confirmation-for-critical-settings|RCM-PUMP-023 — Touch confirmation for critical settings]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
