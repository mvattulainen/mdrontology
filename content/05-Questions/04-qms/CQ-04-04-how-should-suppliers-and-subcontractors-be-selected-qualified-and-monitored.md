---
{
  "id": "CQ-04-04",
  "type": "competency-question",
  "title": "How should suppliers and subcontractors be selected, qualified and monitored?",
  "aliases": [
    "CQ-04-04",
    "15-questions/04-qms/CQ-04-04-how-should-suppliers-and-subcontractors-be-selected-qualified-and-monitored"
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
  "ontology_path": "Supplier → suppliedComponent/Process → Criticality → SupplierControlPlan → QualificationEvidence/MonitoringEvidence",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-004-alarm-speaker-critical-supplier|SUP-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How should suppliers and subcontractors be selected, qualified and monitored?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`Supplier → suppliedComponent/Process → Criticality → SupplierControlPlan → QualificationEvidence/MonitoringEvidence`


## Answer

Suppliers and subcontractors should be controlled according to the criticality of the supplied component or process and its effect on device conformity, using documented selection, qualification, agreements, performance monitoring, change notification and re-evaluation. The ontology derives a supplier-control plan from supply scope and criticality and links qualification and monitoring evidence to that plan.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-004-alarm-speaker-critical-supplier|SUP-PUMP-004 — Alarm speaker critical supplier]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
