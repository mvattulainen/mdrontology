---
{
  "id": "CQ-06-06",
  "type": "competency-question",
  "title": "Which verification and validation reports are expected for this configuration?",
  "aliases": [
    "CQ-06-06",
    "15-questions/06-technical-documentation/CQ-06-06-which-verification-and-validation-reports-are-expected-for-this-configuration"
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
  "ontology_path": "DesignRequirement/ProcessRequirement → VerificationOrValidationActivity → EvidenceItem → ConfigurationCoverage",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-001-device-description-rev-c|DOC-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# Which verification and validation reports are expected for this configuration?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`DesignRequirement/ProcessRequirement → VerificationOrValidationActivity → EvidenceItem → ConfigurationCoverage`


## Answer

Expected reports are those needed to verify design and process requirements and validate the finished device for its intended use, including applicable performance, safety, software, usability, biological, electrical, EMC, packaging and manufacturing evidence. The ontology derives activities from the requirements and accepts an evidence item only when it demonstrates coverage of the released configuration.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-001-device-description-rev-c|DOC-PUMP-001 — Device description Rev C]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
