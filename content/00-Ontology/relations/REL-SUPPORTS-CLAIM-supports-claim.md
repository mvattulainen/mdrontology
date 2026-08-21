---
{
  "id": "REL-SUPPORTS-CLAIM",
  "type": "relation-definition",
  "title": "supports_claim",
  "aliases": [
    "REL-SUPPORTS-CLAIM",
    "01-ontology/relations/REL-SUPPORTS-CLAIM-supports-claim"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "supports_claim",
  "label": "supports claim",
  "domain": [
    "clinical-evidence",
    "verification-evidence"
  ],
  "range": [
    "clinical-claim"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001]]"
  ]
}
---

# supports_claim

Relates clinical or verification evidence to a clinical claim to which that evidence contributes. The relation is non-exclusive: verification evidence may support the technical-performance aspect of a claim without being sufficient clinical substantiation for the whole claim.

## Purpose

Defines the ontology predicate `supports_claim`, while preventing a single evidence link from being interpreted automatically as complete claim substantiation. Claim adequacy remains a governed conclusion of the relevant clinical evaluation.

## Relation contract

| Property | Value |
|---|---|
| Domain | `clinical-evidence`, `verification-evidence` |
| Range | `clinical-claim` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `false` |

## Key relationships

No outgoing instance relationships are asserted in this seed note.

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

No canonical note currently references this node. Backlinks will appear as the vault grows.

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Infpump FlowGuard clinical evidence set]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
