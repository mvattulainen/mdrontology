---
{
  "id": "CQ-03-10",
  "type": "competency-question",
  "title": "Which language requirements apply to labels and instructions in each target market?",
  "aliases": [
    "CQ-03-10",
    "15-questions/03-gspr/CQ-03-10-which-language-requirements-apply-to-labels-and-instructions-in-each-target-market"
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
  "ontology_path": "MarketCountry → NationalLanguageRequirement → LabelVersion/IFUVersion → Translation → ReleaseConstraint",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-030-delayed-detection-or-secondary-harm-from-pole-clamp-mechanical-failure|RISK-PUMP-030]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# Which language requirements apply to labels and instructions in each target market?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`MarketCountry → NationalLanguageRequirement → LabelVersion/IFUVersion → Translation → ReleaseConstraint`


## Answer

Labels and instructions must use the official language or languages required by each Member State in which the device is made available, subject to any national conditions or accepted exceptions. The ontology maps each market country to its current language requirement, controlled label and IFU versions, reviewed translations and a release constraint that prevents an unsupported language-market combination.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-030-delayed-detection-or-secondary-harm-from-pole-clamp-mechanical-failure|RISK-PUMP-030 — Delayed detection or secondary harm from pole-clamp mechanical failure]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
