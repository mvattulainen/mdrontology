---
{
  "id": "REL-MAY-CAUSE",
  "type": "relation-definition",
  "title": "may_cause",
  "aliases": [
    "REL-MAY-CAUSE",
    "01-ontology/relations/REL-MAY-CAUSE-may-cause"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "may_cause",
  "label": "may cause",
  "domain": [
    "hazardous-situation"
  ],
  "range": [
    "harm"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-001-patient-connected-while-pump-delivers-above-programmed-rate|HS-PUMP-001]]"
  ]
}
---

# may_cause

Relates hazardous-situation to harm.

## Purpose

Defines the ontology predicate `may_cause`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `hazardous-situation` |
| Range | `harm` |
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

- [[06-Infpump FlowGuard ontology notes/hazardous-situation/HS-PUMP-001-patient-connected-while-pump-delivers-above-programmed-rate|HS-PUMP-001 — Patient connected while pump delivers above programmed rate]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
