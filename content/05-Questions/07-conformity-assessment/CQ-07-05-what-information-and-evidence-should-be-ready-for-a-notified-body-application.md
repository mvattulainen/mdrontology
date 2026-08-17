---
{
  "id": "CQ-07-05",
  "type": "competency-question",
  "title": "What information and evidence should be ready for a notified-body application?",
  "aliases": [
    "CQ-07-05",
    "15-questions/07-conformity-assessment/CQ-07-05-what-information-and-evidence-should-be-ready-for-a-notified-body-application"
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
  "ontology_path": "SelectedRoute → ApplicationRequirement → QMS/TechnicalDocumentation/DeviceList → SubmissionPackage",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-005-critical-care-configuration-classification-decision|CLD-PUMP-005]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# What information and evidence should be ready for a notified-body application?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`SelectedRoute → ApplicationRequirement → QMS/TechnicalDocumentation/DeviceList → SubmissionPackage`


## Answer

The application package should contain the information required by the selected route, including manufacturer and device scope, QMS documentation, technical documentation, device or Basic UDI-DI lists and the supporting regulatory evidence requested by the notified body. The ontology derives package requirements from the route and checks that each controlled item is present before submission.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-005-critical-care-configuration-classification-decision|CLD-PUMP-005 — Critical-care configuration classification decision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
