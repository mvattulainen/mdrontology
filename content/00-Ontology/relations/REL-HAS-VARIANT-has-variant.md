---
{
  "id": "REL-HAS-VARIANT",
  "type": "relation-definition",
  "title": "has_variant",
  "aliases": [
    "REL-HAS-VARIANT",
    "01-ontology/relations/REL-HAS-VARIANT-has-variant"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "has_variant",
  "label": "has variant",
  "domain": [
    "device-model"
  ],
  "range": [
    "device-variant"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001]]"
  ]
}
---

# has_variant

model contains variant

## Purpose

Defines the ontology predicate `has_variant`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `device-model` |
| Range | `device-variant` |
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

- [[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001 — Infpump FlowGuard FG-100 model]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
