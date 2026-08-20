---
{
  "id": "REL-REQUIRES-REASSESSMENT-OF",
  "type": "relation-definition",
  "title": "requires_reassessment_of",
  "aliases": [
    "REL-REQUIRES-REASSESSMENT-OF",
    "01-ontology/relations/REL-REQUIRES-REASSESSMENT-OF-requires-reassessment-of"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "requires_reassessment_of",
  "label": "requires reassessment of",
  "domain": [
    "change",
    "change-impact-assessment"
  ],
  "range": [
    "assessment",
    "document",
    "decision",
    "risk"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-002-battery-endurance-signal-change-impact-assessment|CIA-PUMP-002]]"
  ]
}
---

# requires_reassessment_of

Relates a change or change-impact assessment to an assessment, document, decision or risk requiring reassessment.

## Purpose

Defines the ontology predicate `requires_reassessment_of`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `change`, `change-impact-assessment` |
| Range | `assessment`, `document`, `decision`, `risk` |
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

- [[06-Infpump FlowGuard ontology notes/change-impact-assessment/CIA-PUMP-002-battery-endurance-signal-change-impact-assessment|CIA-PUMP-002 — Battery-endurance signal change-impact assessment]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
