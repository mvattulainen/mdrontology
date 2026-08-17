---
{
  "id": "CQ-03-09",
  "type": "competency-question",
  "title": "What sterile-device, sterilisation and packaging evidence is required?",
  "aliases": [
    "CQ-03-09",
    "15-questions/03-gspr/CQ-03-09-what-sterile-device-sterilisation-and-packaging-evidence-is-required"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "03-gspr",
  "answer_pattern": "[[AP-REQ-ap-req-answer-pattern|AP-REQ]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "risk_class",
    "configuration_baseline"
  ],
  "traverses": [
    "has_applicable_requirement",
    "instantiates_requirement",
    "satisfied_by",
    "derived_from"
  ],
  "applies_rule_families": [
    "03-gspr"
  ],
  "checks_constraint": [
    "[[CON-GSPR-001-applicable-requirements-have-compliance-traceability|CON-GSPR-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "ontology_path": "SterileConfiguration → SterilisationProcess/PackagingSystem/ShelfLife → ValidationEvidence → GSPRRequirement",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-029-emc-input-filtering|RCM-PUMP-029]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# What sterile-device, sterilisation and packaging evidence is required?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`SterileConfiguration → SterilisationProcess/PackagingSystem/ShelfLife → ValidationEvidence → GSPRRequirement`


## Answer

Sterile-device evidence must cover the sterile configuration, validated sterilisation process, bioburden and sterility assurance where relevant, packaging integrity, transport and shelf life, together with controlled labelling and release criteria. The ontology connects those elements to validation evidence and the applicable GSPR instances; if the configuration is not supplied sterile, the non-applicability rationale is recorded instead.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-029-emc-input-filtering|RCM-PUMP-029 — EMC input filtering]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
