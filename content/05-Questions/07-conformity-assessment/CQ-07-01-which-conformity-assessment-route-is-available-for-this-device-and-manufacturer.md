---
{
  "id": "CQ-07-01",
  "type": "competency-question",
  "title": "Which conformity-assessment route is available for this device and manufacturer?",
  "aliases": [
    "CQ-07-01",
    "15-questions/07-conformity-assessment/CQ-07-01-which-conformity-assessment-route-is-available-for-this-device-and-manufacturer"
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
  "ontology_path": "DeviceClass/DeviceType → ConformityAssessmentRule → RouteOption[] → SelectedRoute → Rationale",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# Which conformity-assessment route is available for this device and manufacturer?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `risk_class`
- `device_type`
- `relevant_date`
- `certificate_state`

## Ontology path

`DeviceClass/DeviceType → ConformityAssessmentRule → RouteOption[] → SelectedRoute → Rationale`


## Answer

The available conformity-assessment routes depend on the device class and type and on characteristics such as sterility, measuring function or reusable surgical use, together with the manufacturer’s QMS arrangement. The ontology applies the conformity-assessment rules to those facts, records all route options and preserves the rationale for the selected route.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/certificate/CERT-PUMP-001-eu-mdr-quality-management-system-certificate|CERT-PUMP-001 — EU MDR quality-management-system certificate]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
