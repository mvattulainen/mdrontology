---
{
  "id": "REL-REQUIRES-EVIDENCE",
  "type": "relation-definition",
  "title": "requires_evidence",
  "aliases": [
    "REL-REQUIRES-EVIDENCE",
    "01-ontology/relations/REL-REQUIRES-EVIDENCE-requires-evidence"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "requires_evidence",
  "label": "requires evidence",
  "domain": [
    "compliance-requirement-instance"
  ],
  "range": [
    "evidence-type"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change|CRI-PUMP-051]]"
  ]
}
---

# requires_evidence

Relates compliance-requirement-instance to evidence-type.

## Purpose

Defines the ontology predicate `requires_evidence`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `compliance-requirement-instance` |
| Range | `evidence-type` |
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

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-051-battery-endurance-after-cell-supplier-change|CRI-PUMP-051 — Battery endurance after cell-supplier change]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
