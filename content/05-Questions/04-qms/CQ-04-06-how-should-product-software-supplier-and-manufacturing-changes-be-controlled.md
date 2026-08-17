---
{
  "id": "CQ-04-06",
  "type": "competency-question",
  "title": "How should product, software, supplier and manufacturing changes be controlled?",
  "aliases": [
    "CQ-04-06",
    "15-questions/04-qms/CQ-04-06-how-should-product-software-supplier-and-manufacturing-changes-be-controlled"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "04-qms",
  "answer_pattern": "[[AP-PROC-ap-proc-answer-pattern|AP-PROC]]",
  "starts_from": [
    "manufacturer"
  ],
  "requires_context": [
    "manufacturer",
    "device_portfolio",
    "lifecycle_state"
  ],
  "traverses": [
    "owned_by",
    "covered_by_qms",
    "responsible_party",
    "generated_by"
  ],
  "applies_rule_families": [
    "04-qms"
  ],
  "checks_constraint": [
    "[[CON-SOURCE-001-active-rules-have-source-provenance|CON-SOURCE-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "Change → ChangeType → ImpactAssessment → affected Device/Risk/Clinical/UDI/Certificate → Approval → Implementation",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# How should product, software, supplier and manufacturing changes be controlled?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`Change → ChangeType → ImpactAssessment → affected Device/Risk/Clinical/UDI/Certificate → Approval → Implementation`


## Answer

Each product, software, supplier or manufacturing change must be identified and classified, assessed before approval for effects on device configuration, risk, clinical evidence, UDI, regulatory registrations and certificates, then implemented and verified under control. The ontology connects the change type to all affected objects and requires the impact assessment and approvals before the implementation state can advance.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001 — Battery pack critical supplier]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
