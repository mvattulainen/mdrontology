---
{
  "id": "PROV-MDR-ANNEX-I",
  "type": "legal-provision",
  "title": "MDR Annex I — GSPRs",
  "aliases": [
    "PROV-MDR-ANNEX-I",
    "14-sources/legislation/PROV-MDR-ANNEX-I-mdr-annex-i-gsprs"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/legal-provision"
  ],
  "draft": false,
  "part_of": "[[SRC-MDR-2017-745-regulation-eu-2017745-consolidated-text|SRC-MDR-2017-745]]",
  "normative_status": "binding",
  "retrieved_at": "2026-08-14",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001]]"
  ]
}
---

# MDR Annex I — GSPRs

Provision node for traceable rules and decisions.

## Purpose

Represents the traceable legal-source fragment **MDR Annex I — GSPRs**. Requirements, rules and decisions link here to retain provenance without organising the manufacturer workflow around article numbers.

## Key relationships

- `part_of` → [[SRC-MDR-2017-745-regulation-eu-2017745-consolidated-text|SRC-MDR-2017-745]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |
| `normative_status` | `binding` |

## Referenced by

- [[GSPR-0001-electrical-safety|GSPR-0001]] via `derived_from`
- [[GSPR-0002-software-and-cybersecurity|GSPR-0002]] via `derived_from`
- [[CRI-0001-electrical-safety-requirement-instance|CRI-0001]] via `derived_from`
- [[CRI-0002-cybersecurity-requirement-instance|CRI-0002]] via `derived_from`
- [[CQ-03-01-which-annex-i-gsprs-are-applicable-to-this-exact-device-configuration|CQ-03-01]] via `uses_source`
- [[CQ-03-02-what-information-should-a-device-specific-gspr-compliance-matrix-contain|CQ-03-02]] via `uses_source`
- [[CQ-03-03-when-is-use-of-a-harmonised-standard-optional-relevant-or-useful-as-presumption-of-conformity-evidence|CQ-03-03]] via `uses_source`
- [[CQ-03-04-how-are-applicable-gsprs-connected-to-hazards-risks-and-risk-controls|CQ-03-04]] via `uses_source`
- [[CQ-03-05-what-biological-evaluation-or-testing-is-justified-for-patient-contacting-materials|CQ-03-05]] via `uses_source`
- [[CQ-03-06-what-electrical-safety-and-emc-evidence-is-applicable-to-the-configuration|CQ-03-06]] via `uses_source`
- [[CQ-03-07-what-software-and-cybersecurity-evidence-is-needed-for-the-released-software-version|CQ-03-07]] via `uses_source`
- [[CQ-03-08-what-usability-engineering-work-is-required-for-the-intended-users-and-use-environment|CQ-03-08]] via `uses_source`
- [[CQ-03-09-what-sterile-device-sterilisation-and-packaging-evidence-is-required|CQ-03-09]] via `uses_source`
- [[CQ-03-10-which-language-requirements-apply-to-labels-and-instructions-in-each-target-market|CQ-03-10]] via `uses_source`

## Infpump FlowGuard ontology-note examples

These device-specific notes reuse this canonical requirement or source instead of duplicating it:

- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-001-risk-reduction-and-acceptable-residual-risk|CRI-PUMP-001 — Risk reduction and acceptable residual risk]]
