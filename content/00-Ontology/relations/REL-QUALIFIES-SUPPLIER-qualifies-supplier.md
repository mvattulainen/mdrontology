---
{
  "id": "REL-QUALIFIES-SUPPLIER",
  "type": "relation-definition",
  "title": "qualifies_supplier",
  "aliases": [
    "REL-QUALIFIES-SUPPLIER"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "qualifies_supplier",
  "label": "qualifies supplier",
  "domain": [
    "qms-process",
    "change-impact-assessment"
  ],
  "range": [
    "supplier"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004]]"
  ]
}
---

# qualifies_supplier

Relates a governed QMS process or change-impact assessment to the supplier whose qualification it controls.

## Purpose

This predicate distinguishes supplier qualification from outsourcing and from the manufacturer's general supplier-control responsibility.

## Relation contract

| Property | Value |
|---|---|
| Domain | `qms-process`, `change-impact-assessment` |
| Range | `supplier` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/qms-process/PROC-PUMP-004-infusion-pump-supplier-control-process|PROC-PUMP-004 — Infusion-pump supplier-control process]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
