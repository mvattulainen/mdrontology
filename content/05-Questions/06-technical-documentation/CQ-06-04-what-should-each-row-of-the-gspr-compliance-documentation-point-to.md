---
{
  "id": "CQ-06-04",
  "type": "competency-question",
  "title": "What should each row of the GSPR compliance documentation point to?",
  "aliases": [
    "CQ-06-04",
    "15-questions/06-technical-documentation/CQ-06-04-what-should-each-row-of-the-gspr-compliance-documentation-point-to"
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
  "ontology_path": "RequirementInstance → applicabilityRationale/complianceMethod/Standard/EvidenceLocation → TraceabilityConstraint",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-024-network-interoperability-verification-report|EVD-PUMP-024]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# What should each row of the GSPR compliance documentation point to?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`RequirementInstance → applicabilityRationale/complianceMethod/Standard/EvidenceLocation → TraceabilityConstraint`


## Answer

Each GSPR row should point to the requirement, applicability decision and rationale, chosen compliance method, relevant standard or specification, and precise controlled evidence location for the assessed configuration. The ontology enforces those links through the requirement instance and traceability constraint, making a row incomplete when its conclusion cannot be followed to evidence.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-024-network-interoperability-verification-report|EVD-PUMP-024 — Network interoperability verification report]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
