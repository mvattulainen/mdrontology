---
{
  "id": "CQ-01-07",
  "type": "competency-question",
  "title": "How are contraindications, warnings and use limitations established and maintained?",
  "aliases": [
    "CQ-01-07",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-07-how-are-contraindications-warnings-and-use-limitations-established-and-maintained"
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
  "ontology_path": "Hazard/Risk/ClinicalEvidence/PMSFinding → UseLimitation → Label/IFU → ChangeControl",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-002-controlled-infusion-during-intra-hospital-transport|IP-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# How are contraindications, warnings and use limitations established and maintained?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`Hazard/Risk/ClinicalEvidence/PMSFinding → UseLimitation → Label/IFU → ChangeControl`


## Answer

Contraindications, warnings and use limitations must arise from evaluated hazards and risks, clinical evidence and post-market findings, then be approved in the controlled label and instructions for use. The ontology links each limitation back to those inputs and routes later changes through change control so affected risk, clinical and user-information records remain synchronized.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-002-controlled-infusion-during-intra-hospital-transport|IP-PUMP-002 — Controlled infusion during intra-hospital transport]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
