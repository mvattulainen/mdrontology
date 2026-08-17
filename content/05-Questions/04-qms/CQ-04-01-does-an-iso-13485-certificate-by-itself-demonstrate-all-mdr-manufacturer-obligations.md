---
{
  "id": "CQ-04-01",
  "type": "competency-question",
  "title": "Does an ISO 13485 certificate by itself demonstrate all MDR manufacturer obligations?",
  "aliases": [
    "CQ-04-01",
    "15-questions/04-qms/CQ-04-01-does-an-iso-13485-certificate-by-itself-demonstrate-all-mdr-manufacturer-obligations"
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
  "ontology_path": "Manufacturer → QMS → Certification → MDRQMSRequirement[] → CoverageAssessment → Gap",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-001-infusion-pump-design-and-development-control|PROC-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# Does an ISO 13485 certificate by itself demonstrate all MDR manufacturer obligations?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`Manufacturer → QMS → Certification → MDRQMSRequirement[] → CoverageAssessment → Gap`


## Answer

No. An ISO 13485 certificate is relevant QMS evidence but does not by itself demonstrate every MDR obligation, because certification scope, device coverage and the standard’s clauses must be compared with the manufacturer’s MDR-specific duties. The ontology links the manufacturer, QMS and certificate to the full set of applicable MDR QMS requirements, performs a coverage assessment and records uncovered obligations as gaps.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-001-infusion-pump-design-and-development-control|PROC-PUMP-001 — Infusion-pump design and development control]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
