---
{
  "id": "CQ-07-02",
  "type": "competency-question",
  "title": "Which Class I configurations require notified-body involvement?",
  "aliases": [
    "CQ-07-02",
    "15-questions/07-conformity-assessment/CQ-07-02-which-class-i-configurations-require-notified-body-involvement"
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
  "ontology_path": "DeviceClassI → Sterile/Measuring/ReusableSurgicalCharacteristic → NBInvolvementRule → ConformityAssessment",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-002-transport-configuration-classification-decision|CLD-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# Which Class I configurations require notified-body involvement?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`DeviceClassI → Sterile/Measuring/ReusableSurgicalCharacteristic → NBInvolvementRule → ConformityAssessment`


## Answer

Class I devices generally use self-declaration, but notified-body involvement is required for the aspects relating to sterile condition, measuring function or reuse of a reusable surgical instrument. The ontology checks those characteristics for the Class I configuration and derives the precise notified-body assessment scope rather than treating all Class I devices alike.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-002-transport-configuration-classification-decision|CLD-PUMP-002 — Transport configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
