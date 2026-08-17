---
{
  "id": "CQ-08-09",
  "type": "competency-question",
  "title": "How are responsibilities between manufacturer, AR, importer and distributor represented?",
  "aliases": [
    "CQ-08-09",
    "15-questions/08-traceability/CQ-08-09-how-are-responsibilities-between-manufacturer-ar-importer-and-distributor-represented"
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
  "ontology_path": "EconomicOperator[] → ResponsibilityAssignment/Mandate/Agreement → Process/Obligation → Evidence",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How are responsibilities between manufacturer, AR, importer and distributor represented?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_identity`
- `market`
- `relevant_date`

## Ontology path

`EconomicOperator[] → ResponsibilityAssignment/Mandate/Agreement → Process/Obligation → Evidence`


## Answer

Responsibilities are represented separately for each economic operator and obligation: the manufacturer retains conformity responsibility, the authorised representative performs its written mandate, and importers and distributors perform their verification, storage, traceability and reporting duties. The ontology links each organisation and role to the governing mandate or agreement, controlled process, obligation and performance evidence without transferring duties merely through a commercial contract.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001 — Infpump FlowGuard FG-100 model]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]
