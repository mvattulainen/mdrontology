---
{
  "id": "CQ-08-07",
  "type": "competency-question",
  "title": "Which facts must be available for distributor verification and traceability?",
  "aliases": [
    "CQ-08-07",
    "15-questions/08-traceability/CQ-08-07-which-facts-must-be-available-for-distributor-verification-and-traceability"
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
  "ontology_path": "DistributorVerificationRequirement → Device/Label/UDI/Storage → VerificationRecord/TraceabilityRecord",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b|DOC-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# Which facts must be available for distributor verification and traceability?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_identity`
- `market`
- `relevant_date`

## Ontology path

`DistributorVerificationRequirement → Device/Label/UDI/Storage → VerificationRecord/TraceabilityRecord`


## Answer

The distributor must be able to verify the CE marking, required declaration availability, accompanying manufacturer information and language, importer identification where applicable, and UDI assignment, and must preserve storage, transport and supply-chain traceability conditions. The ontology assembles those device, label, UDI and handling facts into a verification and traceability record.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b|DOC-PUMP-002 — Intended purpose specification Rev B]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]
