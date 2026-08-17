---
{
  "id": "CRI-0002",
  "type": "compliance-requirement-instance",
  "title": "Cybersecurity requirement instance",
  "aliases": [
    "CRI-0002",
    "04-requirements/instances/CRI-0002-cybersecurity-requirement-instance"
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
    "[[GSPR-0002-software-and-cybersecurity|GSPR-0002]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]"
  ],
  "applicable": true,
  "applicability_rationale": "Software controls therapy",
  "compliance_method": "Threat modelling and verification",
  "compliance_status": "not-satisfied"
}
---

# Cybersecurity requirement instance

## Purpose

Represents the concrete manufacturer obligation **Cybersecurity requirement instance** for an applicable product context. This is where applicability rationale, compliance method, objective evidence and gap status are evaluated.

## Compliance evaluation

- Generic requirement: [[GSPR-0002-software-and-cybersecurity|GSPR-0002]]
- Objective evidence: No evidence linked; inspect the open-gap view.
- [Generated requirement compliance views](/07_other/_generated/requirement-compliance/)
- [Open compliance gaps](/07_other/_generated/compliance-gaps/)

## Key relationships

- `instantiates_requirement` → [[GSPR-0002-software-and-cybersecurity|GSPR-0002]]
- `derived_from` → [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |
| `applicable` | `true` |
| `applicability_rationale` | `Software controls therapy` |
| `compliance_method` | `Threat modelling and verification` |
| `compliance_status` | `not-satisfied` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_applicable_requirement`
