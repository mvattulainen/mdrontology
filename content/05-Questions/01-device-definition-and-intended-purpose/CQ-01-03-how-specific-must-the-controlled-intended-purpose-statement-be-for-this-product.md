---
{
  "id": "CQ-01-03",
  "type": "competency-question",
  "title": "How specific must the controlled intended-purpose statement be for this product?",
  "aliases": [
    "CQ-01-03",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-03-how-specific-must-the-controlled-intended-purpose-statement-be-for-this-product"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "01-device-definition-and-intended-purpose",
  "answer_pattern": "[[AP-QUAL-ap-qual-answer-pattern|AP-QUAL]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "manufacturer",
    "market",
    "relevant_date"
  ],
  "traverses": [
    "has_intended_purpose",
    "asserted_in",
    "derived_from"
  ],
  "applies_rule_families": [
    "01-device-definition-and-intended-purpose"
  ],
  "checks_constraint": [
    "[[CON-MFR-001-marketed-configurations-have-one-manufacturer|CON-MFR-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "DeviceModel → IntendedPurpose → Indication/Population/User/Environment → ControlledClaim → SourceProvision",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-003-pressure-sensor-assembly|COMP-PUMP-003]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# How specific must the controlled intended-purpose statement be for this product?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`DeviceModel → IntendedPurpose → Indication/Population/User/Environment → ControlledClaim → SourceProvision`


## Answer

The intended-purpose statement must be specific enough to control the device’s indication, target population, intended user, use environment and relevant operating conditions without making unsupported claims. The ontology assembles those facets as controlled claims for the device model and traces each material statement to its governing source provision and controlled technical-file artefact.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-003-pressure-sensor-assembly|COMP-PUMP-003 — Pressure sensor assembly]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
