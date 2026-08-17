---
{
  "id": "REL-VERIFIED-BY",
  "type": "relation-definition",
  "title": "verified_by",
  "aliases": [
    "REL-VERIFIED-BY",
    "01-ontology/relations/REL-VERIFIED-BY-verified-by"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "verified_by",
  "label": "verified by",
  "domain": [
    "risk-control-measure"
  ],
  "range": [
    "verification-evidence"
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

# verified_by

Relates risk-control-measure to verification-evidence.

## Purpose

Defines the ontology predicate `verified_by`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `risk-control-measure` |
| Range | `verification-evidence` |
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
