---
{
  "id": "REL-APPLIES-TO-CONFIGURATION",
  "type": "relation-definition",
  "title": "applies_to_configuration",
  "aliases": [
    "REL-APPLIES-TO-CONFIGURATION",
    "01-ontology/relations/REL-APPLIES-TO-CONFIGURATION-applies-to-configuration"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "applies_to_configuration",
  "label": "applies to configuration",
  "domain": [
    "evidence-item",
    "technical-documentation-set",
    "certificate",
    "pms-plan"
  ],
  "range": [
    "device-configuration"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report|EVD-PUMP-001]]"
  ]
}
---

# applies_to_configuration

Relates evidence-item, technical-documentation-set, certificate, pms-plan to device-configuration.

## Purpose

Defines the ontology predicate `applies_to_configuration`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `evidence-item`, `technical-documentation-set`, `certificate`, `pms-plan` |
| Range | `device-configuration` |
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

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-001-flow-accuracy-verification-report|EVD-PUMP-001 — Flow accuracy verification report]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
