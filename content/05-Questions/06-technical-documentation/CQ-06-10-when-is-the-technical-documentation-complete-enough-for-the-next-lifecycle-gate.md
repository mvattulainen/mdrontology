---
{
  "id": "CQ-06-10",
  "type": "competency-question",
  "title": "When is the technical documentation complete enough for the next lifecycle gate?",
  "aliases": [
    "CQ-06-10",
    "15-questions/06-technical-documentation/CQ-06-10-when-is-the-technical-documentation-complete-enough-for-the-next-lifecycle-gate"
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
  "ontology_path": "LifecycleGate → RequiredArtifact/RequirementInstance[] → CompletenessConstraint → ComplianceGap[] → GateDecision",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-030-configuration-baseline-verification-report|EVD-PUMP-030]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# When is the technical documentation complete enough for the next lifecycle gate?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`LifecycleGate → RequiredArtifact/RequirementInstance[] → CompletenessConstraint → ComplianceGap[] → GateDecision`


## Answer

Technical documentation is complete enough for a lifecycle gate only when every artifact and requirement instance required by that gate exists, covers the intended configuration, has the necessary approval and evidence status, and has no unresolved blocking gap. The ontology evaluates the gate’s required records with completeness constraints, lists compliance gaps and records an accountable gate decision.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-030-configuration-baseline-verification-report|EVD-PUMP-030 — Configuration baseline verification report]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
