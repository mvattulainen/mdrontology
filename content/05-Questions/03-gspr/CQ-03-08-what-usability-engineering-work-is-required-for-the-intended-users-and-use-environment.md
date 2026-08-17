---
{
  "id": "CQ-03-08",
  "type": "competency-question",
  "title": "What usability-engineering work is required for the intended users and use environment?",
  "aliases": [
    "CQ-03-08",
    "15-questions/03-gspr/CQ-03-08-what-usability-engineering-work-is-required-for-the-intended-users-and-use-environment"
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
  "ontology_path": "IntendedUser/UseEnvironment → UseRelatedHazard → UsabilityEngineeringProcess → ValidationEvidence → RiskControl",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-028-fluid-ingress-protection|CRI-PUMP-028]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# What usability-engineering work is required for the intended users and use environment?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `risk_class`
- `configuration_baseline`

## Ontology path

`IntendedUser/UseEnvironment → UseRelatedHazard → UsabilityEngineeringProcess → ValidationEvidence → RiskControl`


## Answer

Usability engineering must address the intended users, use environments, critical tasks and reasonably foreseeable use errors, with risk controls and validation under representative conditions. The ontology links users and environments to use-related hazards, the usability process, validation evidence and implemented controls, exposing any user group or scenario not adequately covered.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-028-fluid-ingress-protection|CRI-PUMP-028 — Fluid-ingress protection]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]
