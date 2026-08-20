---
{
  "id": "REL-SUPPORTS-CERTIFICATE",
  "type": "relation-definition",
  "title": "supports_certificate",
  "aliases": [
    "REL-SUPPORTS-CERTIFICATE"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "supports_certificate",
  "label": "supports certificate",
  "domain": [
    "verification-evidence"
  ],
  "range": [
    "certificate"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008]]"
  ]
}
---

# supports_certificate

Relates verification evidence to a certificate whose assessed scope relies on that evidence.

## Purpose

This predicate records evidence-to-certificate provenance without overloading the general `supported_by` relation with incompatible source semantics.

## Relation contract

| Property | Value |
|---|---|
| Domain | `verification-evidence` |
| Range | `certificate` |
| Functional | `false` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-008-electrical-safety-test-report|EVD-PUMP-008 — Electrical safety test report]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
