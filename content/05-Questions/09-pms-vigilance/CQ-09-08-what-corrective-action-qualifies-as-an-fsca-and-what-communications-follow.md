---
{
  "id": "CQ-09-08",
  "type": "competency-question",
  "title": "What corrective action qualifies as an FSCA and what communications follow?",
  "aliases": [
    "CQ-09-08",
    "15-questions/09-pms-vigilance/CQ-09-08-what-corrective-action-qualifies-as-an-fsca-and-what-communications-follow"
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
  "ontology_path": "SafetyIssue → RiskAssessment → FieldAction → FSCADecision → FSN/AuthorityCommunication → Effectiveness",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line|RISK-PUMP-008]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
}
---

# What corrective action qualifies as an FSCA and what communications follow?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`SafetyIssue → RiskAssessment → FieldAction → FSCADecision → FSN/AuthorityCommunication → Effectiveness`


## Answer

A corrective action is an FSCA when the manufacturer takes it for technical or medical reasons to prevent or reduce the risk of a serious incident involving a device made available on the market, including return, modification, exchange, destruction or updated advice. The ontology links the safety issue and risk assessment to the field action, records the FSCA decision and connects the required authority communication, field safety notice and effectiveness evidence.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-008-delayed-detection-or-secondary-harm-from-air-introduced-into-infusion-line|RISK-PUMP-008 — Delayed detection or secondary harm from air introduced into infusion line]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
