---
{
  "id": "REL-UPDATES-BASELINE",
  "type": "relation-definition",
  "title": "updates_baseline",
  "aliases": [
    "REL-UPDATES-BASELINE"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-21",
  "modified": "2026-08-21",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "updates_baseline",
  "label": "updates baseline",
  "domain": [
    "change"
  ],
  "range": [
    "configuration-baseline"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": true,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013]]"
  ]
}
---

# updates_baseline

Relates an approved and implemented change to the controlled configuration baseline in which the changed design state is recorded. The predicate does not imply that assessment or approval occurred after implementation; those lifecycle gates remain separately recorded.

## Purpose

This relation makes the post-change configuration transition visible without assigning a new identity to a device configuration whose controlled baseline has changed.

## Relation contract

| Property | Value |
|---|---|
| Domain | `change` |
| Range | `configuration-baseline` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `true` |
| Temporal qualification required | `true` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-013-battery-energy-reserve-threshold-update|CHG-PUMP-013 — Battery energy-reserve threshold update]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
