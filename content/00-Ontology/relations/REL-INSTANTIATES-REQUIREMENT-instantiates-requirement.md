---
{
  "id": "REL-INSTANTIATES-REQUIREMENT",
  "type": "relation-definition",
  "title": "instantiates_requirement",
  "aliases": [
    "REL-INSTANTIATES-REQUIREMENT",
    "01-ontology/relations/REL-INSTANTIATES-REQUIREMENT-instantiates-requirement"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "instantiates_requirement",
  "label": "instantiates requirement",
  "domain": [
    "compliance-requirement-instance"
  ],
  "range": [
    "regulatory-requirement"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001]]"
  ]
}
---

# instantiates_requirement

Relates compliance-requirement-instance to regulatory-requirement.

## Purpose

Defines the ontology predicate `instantiates_requirement`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `compliance-requirement-instance` |
| Range | `regulatory-requirement` |
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

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001 — Risk reduction and acceptable residual risk]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
