---
{
  "id": "CQ-02-09",
  "type": "competency-question",
  "title": "How is an accessory classified relative to the associated device?",
  "aliases": [
    "CQ-02-09",
    "15-questions/02-device-classification/CQ-02-09-how-is-an-accessory-classified-relative-to-the-associated-device"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "02-device-classification",
  "answer_pattern": "[[AP-CLASS-ap-class-answer-pattern|AP-CLASS]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "duration",
    "invasiveness",
    "active_characteristic",
    "software_function"
  ],
  "traverses": [
    "classified_by",
    "considers_rule",
    "concludes_class",
    "based_on_characteristic"
  ],
  "applies_rule_families": [
    "02-device-classification"
  ],
  "checks_constraint": [
    "[[CON-CLASS-001-market-release-candidates-have-one-classification-decision|CON-CLASS-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]"
  ],
  "ontology_path": "Accessory → IntendedPurpose → AccessoryClassificationAssessment → ClassificationRule → ClassificationDecision",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-004-oncology-configuration-classification-decision|CLD-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How is an accessory classified relative to the associated device?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `duration`
- `invasiveness`
- `active_characteristic`
- `software_function`

## Ontology path

`Accessory → IntendedPurpose → AccessoryClassificationAssessment → ClassificationRule → ClassificationDecision`


## Answer

An accessory is classified in its own right according to its manufacturer-stated intended purpose and relevant characteristics, not automatically assigned the class of the device it supports. The ontology starts from the accessory’s purpose, performs an accessory-specific assessment, evaluates the applicable rules, and records a separate classification decision.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-004-oncology-configuration-classification-decision|CLD-PUMP-004 — Oncology configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]
