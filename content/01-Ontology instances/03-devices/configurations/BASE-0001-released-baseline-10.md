---
{
  "id": "BASE-0001",
  "type": "configuration-baseline",
  "title": "Released baseline 1.0",
  "aliases": [
    "BASE-0001",
    "03-devices/configurations/BASE-0001-released-baseline-10"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/configuration-baseline"
  ],
  "draft": false,
  "includes": [
    "[[SW-0001-infusion-controller-10|SW-0001]]",
    "[[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]]"
  ]
}
---

# Released baseline 1.0

## Purpose

Provides the stable `configuration-baseline` node **Released baseline 1.0** so people, validation rules and retrieval tools can refer to the same regulatory object and traverse its context.

## Key relationships

- `includes` → [[SW-0001-infusion-controller-10|SW-0001]], [[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_baseline`
