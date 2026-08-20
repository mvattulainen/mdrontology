---
{
  "id": "REL-IMPLEMENTED-BY-CONTROL",
  "type": "relation-definition",
  "title": "implemented_by_control",
  "aliases": [
    "REL-IMPLEMENTED-BY-CONTROL"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "implemented_by_control",
  "label": "implemented by control",
  "domain": [
    "compliance-requirement-instance"
  ],
  "range": [
    "risk-control-measure"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052]]"
  ]
}
---

# implemented_by_control

Relates a device-specific compliance requirement to the risk-control measure that implements it in the scoped configuration.

## Purpose

This predicate distinguishes requirement implementation from verification: the control implements the requirement, while separate evidence demonstrates that the control performs as intended.

## Relation contract

| Property | Value |
|---|---|
| Domain | `compliance-requirement-instance` |
| Range | `risk-control-measure` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-052-minimum-post-change-battery-endurance|CRI-PUMP-052 — Minimum post-change battery endurance]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
