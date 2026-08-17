---
{
  "id": "REL-CAN-LEAD-TO",
  "type": "relation-definition",
  "title": "can_lead_to",
  "aliases": [
    "REL-CAN-LEAD-TO",
    "01-ontology/relations/REL-CAN-LEAD-TO-can-lead-to"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "can_lead_to",
  "label": "can lead to",
  "domain": [
    "hazard",
    "sequence-of-events"
  ],
  "range": [
    "hazardous-situation"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-001-unintended-excessive-flow|HAZ-PUMP-001]]"
  ]
}
---

# can_lead_to

Relates hazard, sequence-of-events to hazardous-situation.

## Purpose

Defines the ontology predicate `can_lead_to`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `hazard`, `sequence-of-events` |
| Range | `hazardous-situation` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `false` |

## Key relationships

No outgoing instance relationships are asserted in this seed note.

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

No canonical note currently references this node. Backlinks will appear as the vault grows.

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/hazard/HAZ-PUMP-001-unintended-excessive-flow|HAZ-PUMP-001 — Unintended excessive flow]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
