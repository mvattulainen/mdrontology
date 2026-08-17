---
{
  "id": "CHG-0001",
  "type": "change",
  "title": "Software alarm refinement",
  "aliases": [
    "CHG-0001",
    "12-changes/changes/CHG-0001-software-alarm-refinement"
  ],
  "status": "released",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/change"
  ],
  "draft": false,
  "concerns": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "has_impact_assessment": [
    "[[CIA-0001-software-alarm-change-impact-assessment|CIA-0001]]"
  ],
  "impacts": [
    "[[SW-0001-infusion-controller-10|SW-0001]]",
    "[[RISK-0001-excessive-delivery-risk|RISK-0001]]",
    "[[CE-0001-example-clinical-evaluation|CE-0001]]"
  ],
  "change_type": "software",
  "impact_domains": [
    "risk",
    "clinical",
    "software",
    "technical-documentation",
    "udi",
    "conformity"
  ]
}
---

# Software alarm refinement

## Purpose

Represents the controlled change **Software alarm refinement** and its effects across configuration, risk, clinical evidence, documentation, UDI and conformity.

## Key relationships

- `concerns` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `has_impact_assessment` → [[CIA-0001-software-alarm-change-impact-assessment|CIA-0001]]
- `impacts` → [[SW-0001-infusion-controller-10|SW-0001]], [[RISK-0001-excessive-delivery-risk|RISK-0001]], [[CE-0001-example-clinical-evaluation|CE-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `released` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_change`
- [[SIGNAL-0001-example-low-severity-signal|SIGNAL-0001]] via `triggers`
