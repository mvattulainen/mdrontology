---
{
  "id": "CIA-0001",
  "type": "change-impact-assessment",
  "title": "Software alarm change impact assessment",
  "aliases": [
    "CIA-0001",
    "12-changes/impact-assessments/CIA-0001-software-alarm-change-impact-assessment"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/change-impact-assessment"
  ],
  "draft": false,
  "concerns": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "supported_by": [
    "[[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]"
  ],
  "approved_by": [
    "[[ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]"
  ]
}
---

# Software alarm change impact assessment

## Purpose

Represents the impact assessment **Software alarm change impact assessment** used to justify and approve a controlled change.

## Key relationships

- `concerns` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `supported_by` → [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]
- `approved_by` → [[ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[CHG-0001-software-alarm-refinement|CHG-0001]] via `has_impact_assessment`
