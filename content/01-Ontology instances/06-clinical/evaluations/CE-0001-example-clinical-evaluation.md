---
{
  "id": "CE-0001",
  "type": "clinical-evaluation",
  "title": "Example clinical evaluation",
  "aliases": [
    "CE-0001",
    "06-clinical/evaluations/CE-0001-example-clinical-evaluation"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/clinical-evaluation"
  ],
  "draft": false,
  "evaluates": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "uses_evidence": [
    "[[CEVD-0001-synthetic-clinical-literature-set|CEVD-0001]]"
  ],
  "documented_by": [
    "[[CER-0001-clinical-evaluation-report-rev-a|CER-0001]]"
  ]
}
---

# Example clinical evaluation

## Purpose

Represents the clinical evaluation **Example clinical evaluation**, its device scope, evidence set and controlled report.

## Key relationships

- `evaluates` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `uses_evidence` → [[CEVD-0001-synthetic-clinical-literature-set|CEVD-0001]]
- `documented_by` → [[CER-0001-clinical-evaluation-report-rev-a|CER-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_clinical_evaluation`
- [[CHG-0001-software-alarm-refinement|CHG-0001]] via `impacts`
