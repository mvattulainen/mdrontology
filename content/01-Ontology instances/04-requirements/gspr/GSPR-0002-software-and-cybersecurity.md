---
{
  "id": "GSPR-0002",
  "type": "gspr-requirement",
  "title": "Software and cybersecurity",
  "aliases": [
    "GSPR-0002",
    "04-requirements/gspr/GSPR-0002-software-and-cybersecurity"
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
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-002-known-and-foreseeable-hazard-control|CRI-PUMP-002]]"
  ]
}
---

# Software and cybersecurity

## Purpose

Represents the reusable generic requirement **Software and cybersecurity**. It is instantiated separately for each applicable device configuration so applicability, method, evidence and compliance state remain device-specific.

## Requirement use

### Device-specific instances

- [[CRI-0002-cybersecurity-requirement-instance|CRI-0002]]

### Evidence connected through instances

- No evidence is linked through a requirement instance; inspect open gaps.

### Compliance and gaps

- [Generated compliance view](/07_other/_generated/requirement-compliance/gspr-0002)
- [Open compliance gaps](/07_other/_generated/compliance-gaps/)

## Key relationships

- `derived_from` → [[PROV-MDR-ANNEX-I-mdr-annex-i-gsprs|PROV-MDR-ANNEX-I]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[CRI-0002-cybersecurity-requirement-instance|CRI-0002]] via `instantiates_requirement`

## Infpump FlowGuard ontology-note examples

These device-specific notes reuse this canonical requirement or source instead of duplicating it:

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-002-known-and-foreseeable-hazard-control|CRI-PUMP-002 — Known and foreseeable hazard control]]
