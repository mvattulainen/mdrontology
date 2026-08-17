---
{
  "id": "CQ-06-09",
  "type": "competency-question",
  "title": "How are translations controlled and linked to the approved source text?",
  "aliases": [
    "CQ-06-09",
    "15-questions/06-technical-documentation/CQ-06-09-how-are-translations-controlled-and-linked-to-the-approved-source-text"
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
  "ontology_path": "MasterLabel/IFU → Translation → Language/Market → TranslationReview → ReleasedVersion",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-004-clinical-evaluation-report-rev-c|DOC-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How are translations controlled and linked to the approved source text?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `configuration_baseline`
- `lifecycle_state`
- `technical_documentation`

## Ontology path

`MasterLabel/IFU → Translation → Language/Market → TranslationReview → ReleasedVersion`


## Answer

Each translation must be linked to a specific approved master label or IFU version, target language and market, undergo competent review, and be released under version control so later source changes trigger reassessment. The ontology preserves that lineage from master text through translation and review to the released version.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-004-clinical-evaluation-report-rev-c|DOC-PUMP-004 — Clinical evaluation report Rev C]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ANNEX-II-mdr-annex-ii-technical-documentation|PROV-MDR-ANNEX-II]]
