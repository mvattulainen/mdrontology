---
{
  "id": "REL-ASSERTED-IN",
  "type": "relation-definition",
  "title": "asserted_in",
  "aliases": [
    "REL-ASSERTED-IN",
    "01-ontology/relations/REL-ASSERTED-IN-asserted-in"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "asserted_in",
  "label": "asserted in",
  "domain": [
    "intended-purpose",
    "claim"
  ],
  "range": [
    "document-version"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients|IP-PUMP-001]]"
  ]
}
---

# asserted_in

Relates intended-purpose, claim to document-version.

## Purpose

Defines the ontology predicate `asserted_in`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `intended-purpose`, `claim` |
| Range | `document-version` |
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

- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients|IP-PUMP-001 — Controlled infusion of prescribed fluids for adult inpatients]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
