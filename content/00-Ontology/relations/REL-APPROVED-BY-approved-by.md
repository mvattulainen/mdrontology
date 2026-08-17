---
{
  "id": "REL-APPROVED-BY",
  "type": "relation-definition",
  "title": "approved_by",
  "aliases": [
    "REL-APPROVED-BY",
    "01-ontology/relations/REL-APPROVED-BY-approved-by"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "approved_by",
  "label": "approved by",
  "domain": [
    "decision",
    "document-version"
  ],
  "range": [
    "person",
    "role"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-001-device-description-rev-c|DOC-PUMP-001]]"
  ]
}
---

# approved_by

Relates decision, document-version to person, role.

## Purpose

Defines the ontology predicate `approved_by`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `decision`, `document-version` |
| Range | `person`, `role` |
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

- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-001-device-description-rev-c|DOC-PUMP-001 — Device description Rev C]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
