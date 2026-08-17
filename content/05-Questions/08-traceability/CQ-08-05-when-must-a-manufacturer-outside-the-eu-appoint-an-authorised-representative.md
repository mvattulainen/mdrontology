---
{
  "id": "CQ-08-05",
  "type": "competency-question",
  "title": "When must a manufacturer outside the EU appoint an authorised representative?",
  "aliases": [
    "CQ-08-05",
    "15-questions/08-traceability/CQ-08-05-when-must-a-manufacturer-outside-the-eu-appoint-an-authorised-representative"
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
  "ontology_path": "ManufacturerLocation → EUPlacement → AuthorisedRepresentativeRequirement → Mandate → Registration",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420|SW-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# When must a manufacturer outside the EU appoint an authorised representative?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_identity`
- `market`
- `relevant_date`

## Ontology path

`ManufacturerLocation → EUPlacement → AuthorisedRepresentativeRequirement → Mandate → Registration`


## Answer

A manufacturer not established in an EU Member State must designate a sole authorised representative established in the Union before placing the device on the Union market. The ontology combines manufacturer location and intended EU placement, creates the authorised-representative requirement, and links the written mandate and actor registration.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420|SW-PUMP-001 — Infpump FlowGuard control software 4.2.0]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]
