---
{
  "id": "CQ-07-07",
  "type": "competency-question",
  "title": "What information belongs in the EU Declaration of Conformity for this device?",
  "aliases": [
    "CQ-07-07",
    "15-questions/07-conformity-assessment/CQ-07-07-what-information-belongs-in-the-eu-declaration-of-conformity-for-this-device"
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
  "ontology_path": "Device/BasicUDI-DI/Manufacturer/ConformityRoute → DoCRequirement → DeclarationOfConformityVersion",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# What information belongs in the EU Declaration of Conformity for this device?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`Device/BasicUDI-DI/Manufacturer/ConformityRoute → DoCRequirement → DeclarationOfConformityVersion`


## Answer

The EU Declaration of Conformity must contain the Annex IV information applicable to the device, including manufacturer identity, SRN when issued, device and Basic UDI-DI identification, risk class, conformity statement, legislation, standards or common specifications where used, notified-body and certificate information where applicable, signature, place and date. The ontology assembles these from the device, manufacturer and selected route into a controlled declaration version.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001 — EU MDR quality-management-system certificate]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
