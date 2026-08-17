---
{
  "id": "REL-TRIGGERS",
  "type": "relation-definition",
  "title": "triggers",
  "aliases": [
    "REL-TRIGGERS",
    "01-ontology/relations/REL-TRIGGERS-triggers"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "triggers",
  "label": "triggers",
  "domain": [
    "signal",
    "event",
    "gap"
  ],
  "range": [
    "assessment",
    "capa",
    "change"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction|SIGNAL-PUMP-001]]"
  ]
}
---

# triggers

Relates signal, event, gap to assessment, capa, change.

## Purpose

Defines the ontology predicate `triggers`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `signal`, `event`, `gap` |
| Range | `assessment`, `capa`, `change` |
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

- [[06-Infpump FlowGuard ontology notes/signal/SIGNAL-PUMP-001-unexpected-battery-runtime-reduction|SIGNAL-PUMP-001 — Unexpected battery runtime reduction]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
