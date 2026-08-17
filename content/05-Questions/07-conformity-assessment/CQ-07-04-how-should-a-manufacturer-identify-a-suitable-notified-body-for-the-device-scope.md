---
{
  "id": "CQ-07-04",
  "type": "competency-question",
  "title": "How should a manufacturer identify a suitable notified body for the device scope?",
  "aliases": [
    "CQ-07-04",
    "15-questions/07-conformity-assessment/CQ-07-04-how-should-a-manufacturer-identify-a-suitable-notified-body-for-the-device-scope"
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
  "ontology_path": "Device/Code/Technology → NotifiedBodyDesignationScope → CandidateNB → SelectionAssessment",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# How should a manufacturer identify a suitable notified body for the device scope?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`Device/Code/Technology → NotifiedBodyDesignationScope → CandidateNB → SelectionAssessment`


## Answer

A suitable notified body must be designated under the MDR for the relevant device codes, technologies and conformity-assessment activities and have capacity and absence of disqualifying conflicts for the proposed scope. The ontology compares the device and codes with designation scope, records candidate bodies and retains the manufacturer’s selection assessment.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001 — EU MDR quality-management-system certificate]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
