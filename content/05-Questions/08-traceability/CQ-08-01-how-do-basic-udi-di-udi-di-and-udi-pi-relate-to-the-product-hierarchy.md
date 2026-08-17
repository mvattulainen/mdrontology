---
{
  "id": "CQ-08-01",
  "type": "competency-question",
  "title": "How do Basic UDI-DI, UDI-DI and UDI-PI relate to the product hierarchy?",
  "aliases": [
    "CQ-08-01",
    "15-questions/08-traceability/CQ-08-01-how-do-basic-udi-di-udi-di-and-udi-pi-relate-to-the-product-hierarchy"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "08-traceability",
  "answer_pattern": "[[AP-TRACE-ap-trace-answer-pattern|AP-TRACE]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "manufacturer",
    "device_identity",
    "market",
    "relevant_date"
  ],
  "traverses": [
    "identified_by",
    "responsible_party",
    "supported_by",
    "derived_from"
  ],
  "applies_rule_families": [
    "08-traceability"
  ],
  "checks_constraint": [
    "[[CON-SOURCE-001-active-rules-have-source-provenance|CON-SOURCE-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]"
  ],
  "ontology_path": "DeviceFamily/Model/Variant/ProductionUnit → BasicUDI-DI/UDI-DI/UDI-PI → IdentificationRelation",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family|DEVF-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# How do Basic UDI-DI, UDI-DI and UDI-PI relate to the product hierarchy?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_identity`
- `market`
- `relevant_date`

## Ontology path

`DeviceFamily/Model/Variant/ProductionUnit → BasicUDI-DI/UDI-DI/UDI-PI → IdentificationRelation`


## Answer

The Basic UDI-DI identifies the regulatory device group, the UDI-DI identifies a specific device model or trade configuration and package level as governed by UDI rules, and the UDI-PI identifies production information such as lot, serial number, software identification or expiry date. The ontology connects family, model, variant and production unit to these identifiers through explicit identification relations.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family|DEVF-PUMP-001 — Infpump FlowGuard infusion-pump family]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]
