---
{
  "id": "REL-OUTSOURCED-TO",
  "type": "relation-definition",
  "title": "outsourced_to",
  "aliases": [
    "REL-OUTSOURCED-TO",
    "01-ontology/relations/REL-OUTSOURCED-TO-outsourced-to"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "outsourced_to",
  "label": "outsourced to",
  "domain": [
    "process"
  ],
  "range": [
    "supplier"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004]]"
  ]
}
---

# outsourced_to

Relates process to supplier.

## Purpose

Defines the ontology predicate `outsourced_to`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `process` |
| Range | `supplier` |
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

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004 — Infusion-pump supplier-control process]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
