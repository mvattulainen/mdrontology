---
{
  "id": "REL-CLASSIFIED-UNDER-NOMENCLATURE",
  "type": "relation-definition",
  "title": "classified_under_nomenclature",
  "aliases": [
    "REL-CLASSIFIED-UNDER-NOMENCLATURE",
    "01-ontology/relations/REL-CLASSIFIED-UNDER-NOMENCLATURE-classified-under-nomenclature"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "classified_under_nomenclature",
  "label": "classified under nomenclature",
  "domain": [
    "device"
  ],
  "range": [
    "emdn-code"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# classified_under_nomenclature

Relates device to emdn-code.

## Purpose

Defines the ontology predicate `classified_under_nomenclature`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `device` |
| Range | `emdn-code` |
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

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
