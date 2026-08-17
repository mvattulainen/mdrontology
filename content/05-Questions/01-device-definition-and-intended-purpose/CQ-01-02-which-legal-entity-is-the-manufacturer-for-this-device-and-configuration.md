---
{
  "id": "CQ-01-02",
  "type": "competency-question",
  "title": "Which legal entity is the manufacturer for this device and configuration?",
  "aliases": [
    "CQ-01-02",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-02-which-legal-entity-is-the-manufacturer-for-this-device-and-configuration"
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
  "ontology_path": "DeviceModel → placedUnderNameOf → Organisation → ManufacturerRole → ResponsibilityAssignment",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# Which legal entity is the manufacturer for this device and configuration?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`DeviceModel → placedUnderNameOf → Organisation → ManufacturerRole → ResponsibilityAssignment`


## Answer

The manufacturer is the legal or natural person that places the identified device model or configuration on the market under its own name or trademark and assumes the corresponding MDR obligations, even where design or production is outsourced. The ontology identifies that entity by following the device model’s placed-under-name-of relation to the organisation, confirming the manufacturer role, and checking the documented responsibility assignment.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology note:

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
