---
{
  "id": "CQ-07-08",
  "type": "competency-question",
  "title": "What conditions must be satisfied before CE marking and market placement?",
  "aliases": [
    "CQ-07-08",
    "15-questions/07-conformity-assessment/CQ-07-08-what-conditions-must-be-satisfied-before-ce-marking-and-market-placement"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "07-conformity-assessment",
  "answer_pattern": "[[AP-MARKET-ap-market-answer-pattern|AP-MARKET]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "risk_class",
    "device_type",
    "relevant_date",
    "certificate_state"
  ],
  "traverses": [
    "classified_by",
    "has_applicable_requirement",
    "satisfied_by",
    "derived_from"
  ],
  "applies_rule_families": [
    "07-conformity-assessment"
  ],
  "checks_constraint": [
    "[[CON-CLASS-001-market-release-candidates-have-one-classification-decision|CON-CLASS-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "DeviceConfiguration → ComplianceRequirementInstance[]/Certificate/DoC/Registration → MarketReleaseGate → CEMarkingState",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-003-paediatric-configuration-classification-decision|CLD-PUMP-003]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# What conditions must be satisfied before CE marking and market placement?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`DeviceConfiguration → ComplianceRequirementInstance[]/Certificate/DoC/Registration → MarketReleaseGate → CEMarkingState`


## Answer

CE marking and market placement require the device configuration to meet applicable requirements, have complete technical documentation and required clinical evidence, pass the selected conformity assessment, hold valid certificates where needed, have an approved declaration of conformity and satisfy applicable registration and economic-operator conditions. The ontology evaluates these records at the market-release gate and records CE-marking state only after blocking conditions are resolved.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-003-paediatric-configuration-classification-decision|CLD-PUMP-003 — Paediatric configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
