---
{
  "id": "HAZ-0001",
  "type": "hazard",
  "title": "Excessive flow",
  "aliases": [
    "HAZ-0001",
    "05-risk/hazards/HAZ-0001-excessive-flow"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/hazard"
  ],
  "draft": false,
  "can_lead_to": [
    "[[HS-0001-patient-receives-excessive-flow|HS-0001]]"
  ]
}
---

# Excessive flow

## Purpose

Represents the hazard **Excessive flow** at the start of a risk-management causal chain.

## Key relationships

- `can_lead_to` → [[HS-0001-patient-receives-excessive-flow|HS-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_hazard`
