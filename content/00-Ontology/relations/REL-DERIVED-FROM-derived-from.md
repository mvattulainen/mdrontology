---
{
  "id": "REL-DERIVED-FROM",
  "type": "relation-definition",
  "title": "derived_from",
  "aliases": [
    "REL-DERIVED-FROM",
    "01-ontology/relations/REL-DERIVED-FROM-derived-from"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "derived_from",
  "label": "derived from",
  "domain": [
    "requirement",
    "rule",
    "assertion",
    "decision",
    "classification-rule",
    "gspr-requirement"
  ],
  "range": [
    "source",
    "legal-provision"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001]]"
  ]
}
---

# derived_from

Relates requirement, rule, assertion, decision, classification-rule, gspr-requirement to source, legal-provision.

## Purpose

Defines the ontology predicate `derived_from`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `requirement`, `rule`, `assertion`, `decision`, `classification-rule`, `gspr-requirement` |
| Range | `source`, `legal-provision` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `true` |

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

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001 — Bedside configuration classification decision]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
