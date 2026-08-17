---
{
  "id": "CRI-0001",
  "type": "compliance-requirement-instance",
  "title": "Electrical safety requirement instance",
  "aliases": [
    "CRI-0001",
    "04-requirements/instances/CRI-0001-electrical-safety-requirement-instance"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/compliance-requirement-instance"
  ],
  "draft": false,
  "instantiates_requirement": [
    "[[GSPR-0001-electrical-safety|GSPR-0001]]"
  ],
  "satisfied_by": [
    "[[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "applicable": true,
  "applicability_rationale": "Active electrical device",
  "compliance_method": "Verified testing",
  "compliance_status": "satisfied"
}
---

# Electrical safety requirement instance

## Purpose

Represents the concrete manufacturer obligation **Electrical safety requirement instance** for an applicable product context. This is where applicability rationale, compliance method, objective evidence and gap status are evaluated.

## Compliance evaluation

- Generic requirement: [[GSPR-0001-electrical-safety|GSPR-0001]]
- Objective evidence: [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]
- [Generated requirement compliance views](/07_other/_generated/requirement-compliance/)
- [Open compliance gaps](/07_other/_generated/compliance-gaps/)

## Key relationships

- `instantiates_requirement` → [[GSPR-0001-electrical-safety|GSPR-0001]]
- `satisfied_by` → [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]
- `derived_from` → [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |
| `applicable` | `true` |
| `applicability_rationale` | `Active electrical device` |
| `compliance_method` | `Verified testing` |
| `compliance_status` | `satisfied` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_applicable_requirement`
- [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]] via `demonstrates_compliance_with`
