---
{
  "id": "REL-OWNED-BY",
  "type": "relation-definition",
  "title": "owned_by",
  "aliases": [
    "REL-OWNED-BY",
    "01-ontology/relations/REL-OWNED-BY-owned-by"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "owned_by",
  "label": "owned by",
  "domain": [
    "process",
    "activity"
  ],
  "range": [
    "organisation",
    "role"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-001-infusion-pump-design-and-development-control|PROC-PUMP-001]]"
  ]
}
---

# owned_by

Relates process, activity to organisation, role.

## Purpose

Defines the ontology predicate `owned_by`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `process`, `activity` |
| Range | `organisation`, `role` |
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

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-001-infusion-pump-design-and-development-control|PROC-PUMP-001 — Infusion-pump design and development control]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
