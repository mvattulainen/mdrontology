---
{
  "id": "REL-CONCERNS",
  "type": "relation-definition",
  "title": "concerns",
  "aliases": [
    "REL-CONCERNS",
    "01-ontology/relations/REL-CONCERNS-concerns"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "concerns",
  "label": "concerns",
  "domain": [
    "decision",
    "change",
    "signal",
    "risk",
    "supply-interruption"
  ],
  "range": [
    "device-configuration",
    "device"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001]]"
  ]
}
---

# concerns

Implementation bridge relation.

## Purpose

Defines the ontology predicate `concerns`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `decision`, `change`, `signal`, `risk`, `supply-interruption` |
| Range | `device-configuration`, `device` |
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

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001 — Bedside configuration classification decision]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
