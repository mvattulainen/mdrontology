---
{
  "id": "PROV-MDR-ANNEX-VIII",
  "type": "legal-provision",
  "title": "MDR Annex VIII — classification",
  "aliases": [
    "PROV-MDR-ANNEX-VIII",
    "14-sources/legislation/PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification"
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
    "[[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001]]"
  ]
}
---

# MDR Annex VIII — classification

Provision node for traceable rules and decisions.

## Purpose

Represents the traceable legal-source fragment **MDR Annex VIII — classification**. Requirements, rules and decisions link here to retain provenance without organising the manufacturer workflow around article numbers.

## Key relationships

- `part_of` → [[SRC-MDR-2017-745-regulation-eu-2017745-consolidated-text|SRC-MDR-2017-745]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |
| `normative_status` | `binding` |

## Referenced by

- [[CRULE-MDR-12-mdr-annex-viii-rule-12|CRULE-MDR-12]] via `derived_from`
- [[CLD-0001-example-classification-decision|CLD-0001]] via `derived_from`
- [[AST-0001-current-classification-assertion|AST-0001]] via `source_provisions`
- [[CQ-02-01-which-annex-viii-classification-rules-are-candidates-for-this-device|CQ-02-01]] via `uses_source`
- [[CQ-02-02-what-duration-of-use-category-applies-to-the-intended-use-scenario|CQ-02-02]] via `uses_source`
- [[CQ-02-03-is-the-device-invasive-or-surgically-invasive-for-classification-purposes|CQ-02-03]] via `uses_source`
- [[CQ-02-04-is-the-product-an-active-device-under-the-mdr-classification-concepts|CQ-02-04]] via `uses_source`
- [[CQ-02-05-how-should-the-software-be-classified-for-its-intended-medical-function|CQ-02-05]] via `uses_source`
- [[CQ-02-06-does-the-device-meet-the-implantable-device-concept|CQ-02-06]] via `uses_source`
- [[CQ-02-07-do-the-substance-based-device-rules-apply|CQ-02-07]] via `uses_source`
- [[CQ-02-08-what-happens-when-more-than-one-classification-rule-or-sub-rule-applies|CQ-02-08]] via `uses_source`
- [[CQ-02-09-how-is-an-accessory-classified-relative-to-the-associated-device|CQ-02-09]] via `uses_source`
- [[CQ-02-10-what-evidence-and-rationale-must-support-the-final-classification-conclusion|CQ-02-10]] via `uses_source`

## Infpump FlowGuard ontology-note examples

These device-specific notes reuse this canonical requirement or source instead of duplicating it:

- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001 — Bedside configuration classification decision]]
