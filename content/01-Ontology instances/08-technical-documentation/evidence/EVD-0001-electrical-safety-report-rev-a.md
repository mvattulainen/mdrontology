---
{
  "id": "EVD-0001",
  "type": "verification-evidence",
  "title": "Electrical safety report Rev A",
  "aliases": [
    "EVD-0001",
    "08-technical-documentation/evidence/EVD-0001-electrical-safety-report-rev-a"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/verification-evidence"
  ],
  "draft": false,
  "applies_to_configuration": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "demonstrates_compliance_with": [
    "[[CRI-0001-electrical-safety-requirement-instance|CRI-0001]]"
  ],
  "approved_at": "2026-07-10",
  "source_location": "synthetic://controlled-documents/EVD-0001"
}
---

# Electrical safety report Rev A

## Purpose

Represents objective verification evidence **Electrical safety report Rev A**. Its relationships identify the covered configuration and the requirement or control it supports.

## Key relationships

- `applies_to_configuration` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `demonstrates_compliance_with` → [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `approved` |
| `version` | `1` |
| `approved_at` | `2026-07-10` |

## Referenced by

- [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]] via `satisfied_by`
- [[TD-0001-example-technical-documentation|TD-0001]] via `includes`
- [[RCM-0001-independent-flow-monitoring|RCM-0001]] via `verified_by`
- [[CIA-0001-software-alarm-change-impact-assessment|CIA-0001]] via `supported_by`
- [[AST-0001-current-classification-assertion|AST-0001]] via `supported_by`
