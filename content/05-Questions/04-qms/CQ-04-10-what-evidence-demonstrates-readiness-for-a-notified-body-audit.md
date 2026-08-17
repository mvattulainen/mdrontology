---
{
  "id": "CQ-04-10",
  "type": "competency-question",
  "title": "What evidence demonstrates readiness for a notified-body audit?",
  "aliases": [
    "CQ-04-10",
    "15-questions/04-qms/CQ-04-10-what-evidence-demonstrates-readiness-for-a-notified-body-audit"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "04-qms",
  "answer_pattern": "[[AP-PROC-ap-proc-answer-pattern|AP-PROC]]",
  "starts_from": [
    "manufacturer"
  ],
  "requires_context": [
    "manufacturer",
    "device_portfolio",
    "lifecycle_state"
  ],
  "traverses": [
    "owned_by",
    "covered_by_qms",
    "responsible_party",
    "generated_by"
  ],
  "applies_rule_families": [
    "04-qms"
  ],
  "checks_constraint": [
    "[[CON-SOURCE-001-active-rules-have-source-provenance|CON-SOURCE-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "AuditScope → QMSProcess/RequirementInstance → ObjectiveEvidence → OpenGap → AuditReadinessView",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-005-administration-set-critical-supplier|SUP-PUMP-005]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# What evidence demonstrates readiness for a notified-body audit?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `manufacturer`
- `device_portfolio`
- `lifecycle_state`

## Ontology path

`AuditScope → QMSProcess/RequirementInstance → ObjectiveEvidence → OpenGap → AuditReadinessView`


## Answer

Audit readiness is demonstrated by current objective evidence that the QMS processes in scope implement each applicable requirement, records are retrievable and consistent, and known gaps have accountable actions and status. The ontology maps audit scope to processes and requirement instances, gathers objective evidence and open gaps, and presents the result in an audit-readiness view without treating unresolved gaps as conforming.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-005-administration-set-critical-supplier|SUP-PUMP-005 — Administration-set critical supplier]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `manufacturer`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
