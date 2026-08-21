---
{
  "id": "REL-ACCEPTANCE-SUPPORTED-BY",
  "type": "relation-definition",
  "title": "acceptance_supported_by",
  "aliases": [
    "REL-ACCEPTANCE-SUPPORTED-BY"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-21",
  "modified": "2026-08-21",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "acceptance_supported_by",
  "label": "acceptance supported by",
  "domain": [
    "risk"
  ],
  "range": [
    "verification-evidence"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": true,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041]]"
  ]
}
---

# acceptance_supported_by

Relates a risk to verification evidence used when deciding whether the post-control residual risk is acceptable. The evidence does not make the decision automatically; accountable risk-management review remains necessary.

## Purpose

This relation prevents a risk from appearing accepted before the relevant control has been implemented and verified.

## Relation contract

| Property | Value |
|---|---|
| Domain | `risk` |
| Range | `verification-evidence` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `true` |
| Temporal qualification required | `true` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/risk/RISK-PUMP-041-therapy-interruption-after-battery-endurance-degradation|RISK-PUMP-041 — Therapy interruption after battery-endurance degradation]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
