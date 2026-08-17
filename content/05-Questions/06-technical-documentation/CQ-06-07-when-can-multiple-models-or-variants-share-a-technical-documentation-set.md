---
{
  "id": "CQ-06-07",
  "type": "competency-question",
  "title": "When can multiple models or variants share a technical-documentation set?",
  "aliases": [
    "CQ-06-07",
    "15-questions/06-technical-documentation/CQ-06-07-when-can-multiple-models-or-variants-share-a-technical-documentation-set"
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
  "ontology_path": "DeviceModel[] → SharedCharacteristic/BasicUDI-DI/IntendedPurpose/RiskClass → GroupingDecision → CoverageConstraint",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-027-event-clock-accuracy-report|EVD-PUMP-027]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# When can multiple models or variants share a technical-documentation set?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`DeviceModel[] → SharedCharacteristic/BasicUDI-DI/IntendedPurpose/RiskClass → GroupingDecision → CoverageConstraint`


## Answer

Multiple models or variants may share a documentation set when a controlled grouping decision demonstrates an appropriate common intended purpose, design or technology basis, Basic UDI-DI grouping and risk-class context, while variant-specific differences and evidence remain identifiable. The ontology evaluates shared characteristics and applies a coverage constraint so unsupported variants cannot inherit evidence automatically.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-027-event-clock-accuracy-report|EVD-PUMP-027 — Event-clock accuracy report]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
