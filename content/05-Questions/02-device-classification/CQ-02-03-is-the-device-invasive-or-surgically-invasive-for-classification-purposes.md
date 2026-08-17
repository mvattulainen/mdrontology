---
{
  "id": "CQ-02-03",
  "type": "competency-question",
  "title": "Is the device invasive or surgically invasive for classification purposes?",
  "aliases": [
    "CQ-02-03",
    "15-questions/02-device-classification/CQ-02-03-is-the-device-invasive-or-surgically-invasive-for-classification-purposes"
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
  "ontology_path": "DeviceConfiguration → RouteOfAccess/BodyOrifice/SurgicalProcedure → InvasivenessCharacteristic → ClassificationRule",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-003-paediatric-configuration-classification-decision|CLD-PUMP-003]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# Is the device invasive or surgically invasive for classification purposes?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `duration`
- `invasiveness`
- `active_characteristic`
- `software_function`

## Ontology path

`DeviceConfiguration → RouteOfAccess/BodyOrifice/SurgicalProcedure → InvasivenessCharacteristic → ClassificationRule`


## Answer

The device is invasive when it penetrates inside the body through a body orifice or through its surface, and surgically invasive when penetration occurs through the body surface with a surgical operation or in another Annex VIII-defined surgical context. The ontology examines route of access, body orifice and procedure for the configuration, records the resulting invasiveness characteristic, and passes it to classification.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-003-paediatric-configuration-classification-decision|CLD-PUMP-003 — Paediatric configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]
