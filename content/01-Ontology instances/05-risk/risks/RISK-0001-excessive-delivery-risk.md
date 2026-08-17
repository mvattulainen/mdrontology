---
{
  "id": "RISK-0001",
  "type": "risk",
  "title": "Excessive delivery risk",
  "aliases": [
    "RISK-0001",
    "05-risk/risks/RISK-0001-excessive-delivery-risk"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/risk"
  ],
  "draft": false,
  "concerns": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ]
}
---

# Excessive delivery risk

## Purpose

Represents the evaluated risk **Excessive delivery risk** and provides the target for controls, verification and post-market reassessment.

## Key relationships

- `concerns` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[RCM-0001-independent-flow-monitoring|RCM-0001]] via `mitigates`
- [[CHG-0001-software-alarm-refinement|CHG-0001]] via `impacts`
