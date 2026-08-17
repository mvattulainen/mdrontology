---
{
  "id": "REL-SUPPORTS-CLAIM",
  "type": "relation-definition",
  "title": "supports_claim",
  "aliases": [
    "REL-SUPPORTS-CLAIM",
    "01-ontology/relations/REL-SUPPORTS-CLAIM-supports-claim"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "supports_claim",
  "label": "supports claim",
  "domain": [
    "clinical-evidence"
  ],
  "range": [
    "clinical-claim"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001]]"
  ]
}
---

# supports_claim

Relates clinical-evidence to clinical-claim.

## Purpose

Defines the ontology predicate `supports_claim`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `clinical-evidence` |
| Range | `clinical-claim` |
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

- [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Infpump FlowGuard clinical evidence set]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
