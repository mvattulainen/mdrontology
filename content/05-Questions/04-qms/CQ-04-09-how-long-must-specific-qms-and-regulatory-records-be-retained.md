---
{
  "id": "CQ-04-09",
  "type": "competency-question",
  "title": "How long must specific QMS and regulatory records be retained?",
  "aliases": [
    "CQ-04-09",
    "15-questions/04-qms/CQ-04-09-how-long-must-specific-qms-and-regulatory-records-be-retained"
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
  "ontology_path": "RecordType → DeviceType/ImplantableStatus → RetentionRule → RetentionPeriod → DisposalConstraint",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How long must specific QMS and regulatory records be retained?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`RecordType → DeviceType/ImplantableStatus → RetentionRule → RetentionPeriod → DisposalConstraint`


## Answer

The retention period is determined by record type and device status; MDR technical documentation, the declaration of conformity and relevant certificates must generally remain available for at least ten years after the last device is placed on the market, or fifteen years for implantable devices, while other QMS records follow their applicable legal and controlled retention rules. The ontology resolves record type and implantable status to a retention rule, period and controlled disposal constraint.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004 — Infusion-pump supplier-control process]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
