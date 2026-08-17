---
{
  "id": "REL-INCLUDES",
  "type": "relation-definition",
  "title": "includes",
  "aliases": [
    "REL-INCLUDES",
    "01-ontology/relations/REL-INCLUDES-includes"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "includes",
  "label": "includes",
  "domain": [
    "configuration-baseline",
    "technical-documentation-set"
  ],
  "range": [
    "document-version",
    "software-version",
    "packaging-configuration",
    "evidence-item"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11|BASE-PUMP-001]]"
  ]
}
---

# includes

Implementation bridge relation.

## Purpose

Defines the ontology predicate `includes`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `configuration-baseline`, `technical-documentation-set` |
| Range | `document-version`, `software-version`, `packaging-configuration`, `evidence-item` |
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

- [[06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11|BASE-PUMP-001 — Infpump FlowGuard released design baseline 1.1]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
