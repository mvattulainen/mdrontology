---
{
  "id": "REL-HAS-APPLICABLE-REQUIREMENT",
  "type": "relation-definition",
  "title": "has_applicable_requirement",
  "aliases": [
    "REL-HAS-APPLICABLE-REQUIREMENT",
    "01-ontology/relations/REL-HAS-APPLICABLE-REQUIREMENT-has-applicable-requirement"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "has_applicable_requirement",
  "label": "has applicable requirement",
  "domain": [
    "device-configuration"
  ],
  "range": [
    "compliance-requirement-instance"
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

# has_applicable_requirement

Relates device-configuration to compliance-requirement-instance.

## Purpose

Defines the ontology predicate `has_applicable_requirement`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `device-configuration` |
| Range | `compliance-requirement-instance` |
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
