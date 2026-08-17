---
{
  "id": "PMS-PLAN-0001",
  "type": "pms-plan",
  "title": "Example PMS plan",
  "aliases": [
    "PMS-PLAN-0001",
    "11-post-market/pms-plans/PMS-PLAN-0001-example-pms-plan"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/pms-plan"
  ],
  "draft": false,
  "applies_to_configuration": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "approved_by": [
    "[[ROLE-QUALITY-quality|ROLE-QUALITY]]"
  ]
}
---

# Example PMS plan

## Purpose

Represents the controlled PMS plan **Example PMS plan** for the linked marketed configuration.

## Key relationships

- `applies_to_configuration` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `approved_by` → [[ROLE-QUALITY-quality|ROLE-QUALITY]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `approved` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `covered_by_pms_plan`
