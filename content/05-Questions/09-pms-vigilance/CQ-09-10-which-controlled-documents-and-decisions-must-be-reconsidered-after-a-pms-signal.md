---
{
  "id": "CQ-09-10",
  "type": "competency-question",
  "title": "Which controlled documents and decisions must be reconsidered after a PMS signal?",
  "aliases": [
    "CQ-09-10",
    "15-questions/09-pms-vigilance/CQ-09-10-which-controlled-documents-and-decisions-must-be-reconsidered-after-a-pms-signal"
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
  "ontology_path": "PMSignal → ImpactAssessment → Risk/CER/PMCF/GSPR/Label/Design/CAPA → Change → UpdatedEvidence",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-010-therapy-log-timestamp-discrepancies|SIGNAL-PUMP-010]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]]"
}
---

# Which controlled documents and decisions must be reconsidered after a PMS signal?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `market_status`
- `risk_class`
- `event_facts`
- `relevant_date`

## Ontology path

`PMSignal → ImpactAssessment → Risk/CER/PMCF/GSPR/Label/Design/CAPA → Change → UpdatedEvidence`


## Answer

A PMS signal requires a documented impact assessment of the risk-management file, clinical evaluation report, PMCF, GSPR conclusions, labels and IFU, design, CAPA and regulatory reporting or field-action decisions, with changes and new evidence controlled as necessary. The ontology fans the signal into those affected objects and preserves the resulting change and updated evidence, making an unassessed dependency visible.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-010-therapy-log-timestamp-discrepancies|SIGNAL-PUMP-010 — Therapy-log timestamp discrepancies]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-005-infpump-flowguard-critical-care-configuration-11|DEVC-PUMP-005 — Infpump FlowGuard critical-care configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-83-mdr-article-83-pms-system|PROV-MDR-ARTICLE-83]]
