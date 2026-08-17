---
{
  "id": "CQ-07-06",
  "type": "competency-question",
  "title": "How is notified-body sampling or review coverage of technical documentation represented?",
  "aliases": [
    "CQ-07-06",
    "15-questions/07-conformity-assessment/CQ-07-06-how-is-notified-body-sampling-or-review-coverage-of-technical-documentation-represented"
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
  "ontology_path": "DevicePortfolio → SamplingPlan/AssessmentPlan → ReviewedTechnicalFile → CoverageAssertion → Finding",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-016-protection-against-unintended-bolus|CRI-PUMP-016]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# How is notified-body sampling or review coverage of technical documentation represented?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`DevicePortfolio → SamplingPlan/AssessmentPlan → ReviewedTechnicalFile → CoverageAssertion → Finding`


## Answer

Sampling or review coverage is represented by linking the device portfolio and its groupings to the notified body’s sampling or assessment plan, the technical files actually reviewed, resulting findings and the scope conclusions they support. The ontology keeps the coverage assertion explicit so review of one file is not silently treated as review of every model or variant.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-016-protection-against-unintended-bolus|CRI-PUMP-016 — Protection against unintended bolus]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
