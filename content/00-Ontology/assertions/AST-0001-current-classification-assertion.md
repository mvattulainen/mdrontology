---
{
  "id": "AST-0001",
  "type": "assertion",
  "title": "Current classification assertion",
  "aliases": [
    "AST-0001",
    "01-ontology/assertions/AST-0001-current-classification-assertion"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/assertion"
  ],
  "draft": false,
  "subject": "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]",
  "predicate": "classified_as",
  "object": "[[CLASS-IIb-class-iib|CLASS-IIb]]",
  "assertion_status": "accepted",
  "assertion_kind": "derived",
  "valid_from": "2026-07-01",
  "derived_by_rule": [
    "[[RULE-GATE-MARKET-001-market-release-readiness|RULE-GATE-MARKET-001]]"
  ],
  "supported_by": [
    "[[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]"
  ],
  "source_provisions": [
    "[[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Current classification assertion

## Purpose

Represents the reviewable claim **Current classification assertion**. Its subject, predicate, object, validity, rule, evidence and provenance make the conclusion auditable instead of leaving it as an unqualified property.

## Key relationships

- `derived_by_rule` → [[RULE-GATE-MARKET-001-market-release-readiness|RULE-GATE-MARKET-001]]
- `supported_by` → [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]
- `source_provisions` → [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

No canonical note currently references this node. Backlinks will appear as the vault grows.

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This assertion page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
