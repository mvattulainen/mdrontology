---
{
  "id": "CEVD-0001",
  "type": "clinical-evidence",
  "title": "Synthetic clinical literature set",
  "aliases": [
    "CEVD-0001",
    "06-clinical/evidence/CEVD-0001-synthetic-clinical-literature-set"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/clinical-evidence"
  ],
  "draft": false,
  "applies_to_configuration": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ]
}
---

# Synthetic clinical literature set

## Purpose

Represents clinical evidence **Synthetic clinical literature set** used by a clinical evaluation for a defined configuration, intended purpose or claim.

## Key relationships

- `applies_to_configuration` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `approved` |
| `version` | `1` |

## Referenced by

- [[CE-0001-example-clinical-evaluation|CE-0001]] via `uses_evidence`
