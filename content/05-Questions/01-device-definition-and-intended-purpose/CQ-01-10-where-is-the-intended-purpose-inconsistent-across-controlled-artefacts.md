---
{
  "id": "CQ-01-10",
  "type": "competency-question",
  "title": "Where is the intended purpose inconsistent across controlled artefacts?",
  "aliases": [
    "CQ-01-10",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-10-where-is-the-intended-purpose-inconsistent-across-controlled-artefacts"
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
  "ontology_path": "DeviceConfiguration → IntendedPurposeVersion → assertedIn documents → ConsistencyConstraint → ComplianceGap",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-005-controlled-vasoactive-infusion-in-critical-care|IP-PUMP-005]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# Where is the intended purpose inconsistent across controlled artefacts?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`DeviceConfiguration → IntendedPurposeVersion → assertedIn documents → ConsistencyConstraint → ComplianceGap`


## Answer

An inconsistency exists wherever the intended-purpose version assigned to the device configuration differs materially from the version or wording asserted in a controlled label, IFU, technical-documentation, clinical-evaluation or marketing artefact. The ontology compares those assertions through the consistency constraint and records each unresolved mismatch as a compliance gap.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-005-controlled-vasoactive-infusion-in-critical-care|IP-PUMP-005 — Controlled vasoactive infusion in critical care]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
