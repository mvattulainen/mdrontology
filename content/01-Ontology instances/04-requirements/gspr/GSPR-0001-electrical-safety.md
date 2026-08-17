---
{
  "id": "GSPR-0001",
  "type": "gspr-requirement",
  "title": "Electrical safety",
  "aliases": [
    "GSPR-0001",
    "04-requirements/gspr/GSPR-0001-electrical-safety"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/gspr-requirement"
  ],
  "draft": false,
  "derived_from": [
    "[[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001]]"
  ]
}
---

# Electrical safety

## Purpose

Represents the reusable generic requirement **Electrical safety**. It is instantiated separately for each applicable device configuration so applicability, method, evidence and compliance state remain device-specific.

## Requirement use

### Device-specific instances

- [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]]

### Evidence connected through instances

- [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]

### Compliance and gaps

- [Generated compliance view](/07_other/_generated/requirement-compliance/gspr-0001)
- [Open compliance gaps](/07_other/_generated/compliance-gaps/)

## Key relationships

- `derived_from` → [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]] via `instantiates_requirement`

## Infpump FlowGuard ontology-note examples

These device-specific notes reuse this canonical requirement or source instead of duplicating it:

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001 — Risk reduction and acceptable residual risk]]
