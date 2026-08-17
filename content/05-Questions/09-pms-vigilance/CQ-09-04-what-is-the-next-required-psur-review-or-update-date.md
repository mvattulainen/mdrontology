---
{
  "id": "CQ-09-04",
  "type": "competency-question",
  "title": "What is the next required PSUR review or update date?",
  "aliases": [
    "CQ-09-04",
    "15-questions/09-pms-vigilance/CQ-09-04-what-is-the-next-required-psur-review-or-update-date"
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
  "ontology_path": "DeviceClass → PSURCadenceRule → LastApprovedPSUR → NextDueDate → TemporalConstraint",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-004-delayed-detection-or-secondary-harm-from-insufficient-delivered-flow|RISK-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# What is the next required PSUR review or update date?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`DeviceClass → PSURCadenceRule → LastApprovedPSUR → NextDueDate → TemporalConstraint`


## Answer

The next PSUR date is calculated from device class and the applicable cadence: class IIa PSURs are updated when necessary and at least every two years, while class IIb and III PSURs are updated when necessary and at least annually. The ontology applies the cadence rule to the last approved PSUR date and records the resulting due date as a temporal constraint.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-004-delayed-detection-or-secondary-harm-from-insufficient-delivered-flow|RISK-PUMP-004 — Delayed detection or secondary harm from insufficient delivered flow]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
