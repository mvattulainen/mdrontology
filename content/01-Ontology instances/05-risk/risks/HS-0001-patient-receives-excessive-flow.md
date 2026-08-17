---
{
  "id": "HS-0001",
  "type": "hazardous-situation",
  "title": "Patient receives excessive flow",
  "aliases": [
    "HS-0001",
    "05-risk/risks/HS-0001-patient-receives-excessive-flow"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/hazardous-situation"
  ],
  "draft": false,
  "may_cause": [
    "[[HARM-0001-fluid-overload|HARM-0001]]"
  ]
}
---

# Patient receives excessive flow

## Purpose

Represents the hazardous situation **Patient receives excessive flow** connecting a hazard or sequence of events to possible harm.

## Key relationships

- `may_cause` → [[HARM-0001-fluid-overload|HARM-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[HAZ-0001-excessive-flow|HAZ-0001]] via `can_lead_to`
