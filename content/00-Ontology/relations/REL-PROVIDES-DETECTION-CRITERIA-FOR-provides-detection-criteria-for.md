---
{
  "id": "REL-PROVIDES-DETECTION-CRITERIA-FOR",
  "type": "relation-definition",
  "title": "provides_detection_criteria_for",
  "aliases": [
    "REL-PROVIDES-DETECTION-CRITERIA-FOR"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-21",
  "modified": "2026-08-21",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "provides_detection_criteria_for",
  "label": "provides detection criteria for",
  "domain": [
    "pms-plan"
  ],
  "range": [
    "signal"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": true,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-002-bedside-battery-endurance-post-market-surveillance-plan|PMS-PLAN-PUMP-002]]"
  ]
}
---

# provides_detection_criteria_for

Relates a PMS plan to a signal whose detection thresholds, data sources and escalation route are specified by that plan. It does not assert that the plan document itself generated or observed the signal; the signal must still be grounded in surveillance data or analysis performed under the plan.

## Purpose

This relation preserves the distinction between planned surveillance and the empirical PMS data that produces a signal.

## Relation contract

| Property | Value |
|---|---|
| Domain | `pms-plan` |
| Range | `signal` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `true` |
| Temporal qualification required | `true` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/pms-plan/PMS-PLAN-PUMP-002-bedside-battery-endurance-post-market-surveillance-plan|PMS-PLAN-PUMP-002 — Bedside battery-endurance post-market surveillance plan]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
