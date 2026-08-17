---
{
  "id": "CQ-08-08",
  "type": "competency-question",
  "title": "When is a PRRC required and how is availability/qualification represented?",
  "aliases": [
    "CQ-08-08",
    "15-questions/08-traceability/CQ-08-08-when-is-a-prrc-required-and-how-is-availabilityqualification-represented"
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
  "ontology_path": "ManufacturerSize/RoleModel → PRRCRequirement → Person/ExternalPRRC → QualificationEvidence → ResponsibilityAssignment",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family|DEVF-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# When is a PRRC required and how is availability/qualification represented?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_identity`
- `market`
- `relevant_date`

## Ontology path

`ManufacturerSize/RoleModel → PRRCRequirement → Person/ExternalPRRC → QualificationEvidence → ResponsibilityAssignment`


## Answer

Every manufacturer must have at least one appropriately qualified PRRC available within its organisation, while a micro or small enterprise may have such a person permanently and continuously at its disposal rather than internally; authorised representatives must likewise have permanent and continuous access to a qualified person. The ontology evaluates organisation size and role model, verifies qualification evidence and records the responsibility assignment and availability arrangement.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family|DEVF-PUMP-001 — Infpump FlowGuard infusion-pump family]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-27-mdr-article-27-udi|PROV-MDR-ARTICLE-27]]
