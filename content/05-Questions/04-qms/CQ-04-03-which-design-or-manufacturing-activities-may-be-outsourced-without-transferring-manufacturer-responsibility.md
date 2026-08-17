---
{
  "id": "CQ-04-03",
  "type": "competency-question",
  "title": "Which design or manufacturing activities may be outsourced without transferring manufacturer responsibility?",
  "aliases": [
    "CQ-04-03",
    "15-questions/04-qms/CQ-04-03-which-design-or-manufacturing-activities-may-be-outsourced-without-transferring-manufacturer-responsibility"
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
  "ontology_path": "Manufacturer → OutsourcedProcess → Supplier → ResponsibilityAssignment → SupplierControl → Evidence",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-003-infusion-pump-software-lifecycle-process|PROC-PUMP-003]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# Which design or manufacturing activities may be outsourced without transferring manufacturer responsibility?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`Manufacturer → OutsourcedProcess → Supplier → ResponsibilityAssignment → SupplierControl → Evidence`


## Answer

Design or manufacturing activities may be outsourced under controlled arrangements, but the legal manufacturer retains responsibility for MDR conformity and must maintain sufficient selection, controls, access and evidence. The ontology records the outsourced process and supplier, keeps responsibility assigned to the manufacturer, and links supplier controls and objective evidence to the affected obligation.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-003-infusion-pump-software-lifecycle-process|PROC-PUMP-003 — Infusion-pump software lifecycle process]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
