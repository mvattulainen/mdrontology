---
{
  "id": "CQ-09-06",
  "type": "competency-question",
  "title": "What reporting deadline applies to this vigilance case?",
  "aliases": [
    "CQ-09-06",
    "15-questions/09-pms-vigilance/CQ-09-06-what-reporting-deadline-applies-to-this-vigilance-case"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "09-pms-vigilance",
  "answer_pattern": "[[AP-PMS-ap-pms-answer-pattern|AP-PMS]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "market_status",
    "risk_class",
    "event_facts",
    "relevant_date"
  ],
  "traverses": [
    "collects_from",
    "produces_signal",
    "triggers",
    "updates",
    "results_in"
  ],
  "applies_rule_families": [
    "post-market"
  ],
  "checks_constraint": [
    "[[CON-PMS-001-marketed-configurations-have-a-pms-plan|CON-PMS-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]"
  ],
  "ontology_path": "SeriousIncidentDecision → EventSeverity/ThreatType/AwarenessDate → ReportingDeadlineRule → DueDate",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-006-drug-library-synchronisation-failures|SIGNAL-PUMP-006]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# What reporting deadline applies to this vigilance case?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`SeriousIncidentDecision → EventSeverity/ThreatType/AwarenessDate → ReportingDeadlineRule → DueDate`


## Answer

The applicable vigilance deadline is derived from the confirmed reportability, event severity, public-health-threat status and the date the manufacturer became aware: serious public-health threats are reported immediately and no later than two days, death or unanticipated serious deterioration immediately and no later than ten days, and other serious incidents immediately and no later than fifteen days. The ontology applies the deadline rule to those facts and records the due date without delaying an initial report for an incomplete investigation.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-006-drug-library-synchronisation-failures|SIGNAL-PUMP-006 — Drug-library synchronisation failures]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
