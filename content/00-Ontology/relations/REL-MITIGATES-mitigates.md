---
{
  "id": "REL-MITIGATES",
  "type": "relation-definition",
  "title": "mitigates",
  "aliases": [
    "REL-MITIGATES",
    "01-ontology/relations/REL-MITIGATES-mitigates"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "mitigates",
  "label": "mitigates",
  "domain": [
    "risk-control-measure"
  ],
  "range": [
    "risk"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-001-independent-flow-monitoring|RCM-PUMP-001]]"
  ]
}
---

# mitigates

Relates risk-control-measure to risk.

## Purpose

Defines the ontology predicate `mitigates`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `risk-control-measure` |
| Range | `risk` |
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

- [[06-Infpump FlowGuard ontology notes/risk-control-measure/RCM-PUMP-001-independent-flow-monitoring|RCM-PUMP-001 — Independent flow monitoring]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
