---
{
  "id": "REL-INFORMS-REQUIREMENT",
  "type": "relation-definition",
  "title": "informs_requirement",
  "aliases": [
    "REL-INFORMS-REQUIREMENT"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "informs_requirement",
  "label": "informs requirement",
  "domain": [
    "risk"
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
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041]]"
  ]
}
---

# informs_requirement

Relates an assessed risk to a device-specific requirement derived or revised in response to that assessment.

## Purpose

This predicate records that risk-management results inform a controlled requirement while keeping the risk assessment and requirement as separately reviewable objects.

## Relation contract

| Property | Value |
|---|---|
| Domain | `risk` |
| Range | `compliance-requirement-instance` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041 — Therapy interruption after battery-endurance degradation]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
