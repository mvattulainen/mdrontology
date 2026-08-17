---
{
  "id": "CQ-01-06",
  "type": "competency-question",
  "title": "How should indication, intended purpose and clinical claim be distinguished for this device?",
  "aliases": [
    "CQ-01-06",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-06-how-should-indication-intended-purpose-and-clinical-claim-be-distinguished-for-this-device"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "01-device-definition-and-intended-purpose",
  "answer_pattern": "[[AP-QUAL-ap-qual-answer-pattern|AP-QUAL]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "manufacturer",
    "market",
    "relevant_date"
  ],
  "traverses": [
    "has_intended_purpose",
    "asserted_in",
    "derived_from"
  ],
  "applies_rule_families": [
    "01-device-definition-and-intended-purpose"
  ],
  "checks_constraint": [
    "[[CON-MFR-001-marketed-configurations-have-one-manufacturer|CON-MFR-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "IntendedPurpose ↔ Indication ↔ ClinicalClaim → terminologyDefinition → LegalSource",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-006-alarm-speaker-assembly|COMP-PUMP-006]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# How should indication, intended purpose and clinical claim be distinguished for this device?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`IntendedPurpose ↔ Indication ↔ ClinicalClaim → terminologyDefinition → LegalSource`


## Answer

Intended purpose describes the manufacturer’s overall intended medical use, an indication describes the condition or clinical circumstance for use, and a clinical claim states a specific asserted benefit or performance outcome requiring evidence. The ontology keeps these as distinct but linked concepts, applies their terminology definitions, and traces the meanings to the relevant legal or governed source.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/component/COMP-PUMP-006-alarm-speaker-assembly|COMP-PUMP-006 — Alarm speaker assembly]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
