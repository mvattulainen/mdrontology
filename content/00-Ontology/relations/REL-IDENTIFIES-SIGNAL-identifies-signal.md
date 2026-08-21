---
{
  "id": "REL-IDENTIFIES-SIGNAL",
  "type": "relation-definition",
  "title": "identifies_signal",
  "aliases": [
    "REL-IDENTIFIES-SIGNAL"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "identifies_signal",
  "label": "identifies signal",
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
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# identifies_signal

Relates a PMS plan to a signal identified through surveillance performed under that plan.

## Purpose

This predicate makes the transition from planned post-market surveillance to an assessed signal explicit without implying that the plan itself is raw PMS data.

## Relation contract

| Property | Value |
|---|---|
| Domain | `pms-plan` |
| Range | `signal` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
