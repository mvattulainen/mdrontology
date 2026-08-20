---
{
  "id": "REL-SUPPLIED-COMPONENT",
  "type": "relation-definition",
  "title": "supplied_component",
  "aliases": [
    "REL-SUPPLIED-COMPONENT"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "supplied_component",
  "label": "supplied component",
  "domain": [
    "supplier"
  ],
  "range": [
    "component"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001]]"
  ]
}
---

# supplied_component

Relates a controlled supplier record to the component it supplies.

## Purpose

This predicate makes supplier-to-component traceability part of the governed ontology rather than leaving it as unvalidated display metadata.

## Relation contract

| Property | Value |
|---|---|
| Domain | `supplier` |
| Range | `component` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/supplier/SUP-PUMP-001-battery-pack-critical-supplier|SUP-PUMP-001 — Battery pack critical supplier]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
