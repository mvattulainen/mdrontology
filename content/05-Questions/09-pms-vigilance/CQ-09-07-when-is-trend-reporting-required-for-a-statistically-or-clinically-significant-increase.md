---
{
  "id": "CQ-09-07",
  "type": "competency-question",
  "title": "When is trend reporting required for a statistically or clinically significant increase?",
  "aliases": [
    "CQ-09-07",
    "15-questions/09-pms-vigilance/CQ-09-07-when-is-trend-reporting-required-for-a-statistically-or-clinically-significant-increase"
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
  "ontology_path": "EventSeries/ComplaintSeries → Baseline/Threshold → TrendAnalysis → TrendReportingRule → ReportDecision",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision|CHG-PUMP-003]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# When is trend reporting required for a statistically or clinically significant increase?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`EventSeries/ComplaintSeries → Baseline/Threshold → TrendAnalysis → TrendReportingRule → ReportDecision`


## Answer

Trend reporting is required when analysis shows a statistically significant increase in the frequency or severity of incidents that are not serious incidents, or expected undesirable side-effects, which could significantly affect benefit-risk analysis and have led or may lead to unacceptable risks. The ontology compares an event or complaint series with its baseline and threshold, records the analysis and applies the trend-reporting rule to the report decision.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-003-air-sensor-component-revision|CHG-PUMP-003 — Air-sensor component revision]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
