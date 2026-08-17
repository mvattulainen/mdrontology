---
{
  "id": "CQ-09-02",
  "type": "competency-question",
  "title": "Which proactive and reactive data sources should the PMS system collect?",
  "aliases": [
    "CQ-09-02",
    "15-questions/09-pms-vigilance/CQ-09-02-which-proactive-and-reactive-data-sources-should-the-pms-system-collect"
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
  "ontology_path": "DeviceRisk/Claims/MarketHistory → PMSObjective → PMSDataSource[] → CollectionMethod → ReviewActivity",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend|SIGNAL-PUMP-002]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
}
---

# Which proactive and reactive data sources should the PMS system collect?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`DeviceRisk/Claims/MarketHistory → PMSObjective → PMSDataSource[] → CollectionMethod → ReviewActivity`


## Answer

The PMS system should combine proactive sources such as PMCF, registries, surveys, literature and trend monitoring with reactive sources such as complaints, incidents, service data, returns and field actions, selected according to device risks, claims and market history. The ontology maps PMS objectives to each source, collection method and review activity so important signals are not omitted.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-002-delayed-occlusion-alarm-trend|SIGNAL-PUMP-002 — Delayed occlusion alarm trend]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
