---
{
  "id": "CQ-09-01",
  "type": "competency-question",
  "title": "What PMS plan applies to each marketed device or justified device group?",
  "aliases": [
    "CQ-09-01",
    "15-questions/09-pms-vigilance/CQ-09-01-what-pms-plan-applies-to-each-marketed-device-or-justified-device-group"
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
  "ontology_path": "MarketedDevice/Group → PMSRequirement → PMSPlan → DataSource/Method/Owner/Indicator/Threshold",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan|PMS-PLAN-PUMP-001]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
}
---

# What PMS plan applies to each marketed device or justified device group?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`MarketedDevice/Group → PMSRequirement → PMSPlan → DataSource/Method/Owner/Indicator/Threshold`


## Answer

Each marketed device or justified device group needs a controlled PMS plan proportionate to its risks, intended purpose and available experience, with defined data sources, collection methods, responsibilities, indicators, thresholds and review arrangements. The ontology links the marketed scope to the PMS requirement and plan and makes those operational elements explicit.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-001-infpump-flowguard-post-market-surveillance-plan|PMS-PLAN-PUMP-001 — Infpump FlowGuard post-market surveillance plan]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
