---
{
  "id": "CQ-06-02",
  "type": "competency-question",
  "title": "How detailed must the device description and specification be?",
  "aliases": [
    "CQ-06-02",
    "15-questions/06-technical-documentation/CQ-06-02-how-detailed-must-the-device-description-and-specification-be"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "06-technical-documentation",
  "answer_pattern": "[[AP-DOC-ap-doc-answer-pattern|AP-DOC]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "configuration_baseline",
    "lifecycle_state",
    "technical_documentation"
  ],
  "traverses": [
    "applies_to_configuration",
    "demonstrates_compliance_with",
    "supersedes",
    "generated_by"
  ],
  "applies_rule_families": [
    "06-technical-documentation"
  ],
  "checks_constraint": [
    "[[CON-DOC-001-current-evidence-is-not-superseded|CON-DOC-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]"
  ],
  "ontology_path": "DeviceModel/Variant/Configuration → DeviceDescription → DesignCharacteristic/Accessory/Variant → RequirementCoverage",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# How detailed must the device description and specification be?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`DeviceModel/Variant/Configuration → DeviceDescription → DesignCharacteristic/Accessory/Variant → RequirementCoverage`


## Answer

The description must identify the device, intended purpose, variants, configurations, accessories, principles of operation, key specifications and product hierarchy in enough detail to distinguish what is covered and connect each characteristic to applicable requirements and evidence. The ontology traverses model, variant and configuration into the controlled description and checks that design characteristics and coverage are explicit.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
