---
{
  "id": "CQ-04-02",
  "type": "competency-question",
  "title": "What activities and regulatory processes must the manufacturer's QMS scope cover?",
  "aliases": [
    "CQ-04-02",
    "15-questions/04-qms/CQ-04-02-what-activities-and-regulatory-processes-must-the-manufacturers-qms-scope-cover"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "04-qms",
  "answer_pattern": "[[AP-PROC-ap-proc-answer-pattern|AP-PROC]]",
  "starts_from": [
    "manufacturer"
  ],
  "requires_context": [
    "manufacturer",
    "device_portfolio",
    "lifecycle_state"
  ],
  "traverses": [
    "owned_by",
    "covered_by_qms",
    "responsible_party",
    "generated_by"
  ],
  "applies_rule_families": [
    "04-qms"
  ],
  "checks_constraint": [
    "[[CON-SOURCE-001-active-rules-have-source-provenance|CON-SOURCE-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "Manufacturer → DevicePortfolio/LifecycleProcesses → QMSProcess → MDRRequirement → ScopeCoverage",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier|SUP-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# What activities and regulatory processes must the manufacturer's QMS scope cover?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`Manufacturer → DevicePortfolio/LifecycleProcesses → QMSProcess → MDRRequirement → ScopeCoverage`


## Answer

The QMS scope must cover the manufacturer’s applicable MDR obligations across its device portfolio and lifecycle, including regulatory strategy, design and change control, risk management, clinical evaluation, supplier control, production, UDI and registration, PMS, vigilance, CAPA and regulatory communications. The ontology maps portfolio and lifecycle processes to controlled QMS processes and MDR requirements and records scope coverage for each.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-002-air-sensor-critical-supplier|SUP-PUMP-002 — Air sensor critical supplier]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
