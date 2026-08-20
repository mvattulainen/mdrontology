---
{
  "id": "REL-REPRESENTED-BY-DOCUMENT-VERSION",
  "type": "relation-definition",
  "title": "represented_by_document_version",
  "aliases": [
    "REL-REPRESENTED-BY-DOCUMENT-VERSION"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-20",
  "modified": "2026-08-20",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "represented_by_document_version",
  "label": "represented by document version",
  "domain": [
    "clinical-evaluation-report"
  ],
  "range": [
    "document-version"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": true,
  "provenance_required": false,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/clinical-evaluation-report/CER-PUMP-001-infpump-flowguard-clinical-evaluation-report-rev-d|CER-PUMP-001]]"
  ]
}
---

# represented_by_document_version

Relates a semantic clinical-evaluation-report record to the controlled document version that currently represents it.

## Purpose

This predicate keeps the report's regulatory meaning separate from revision-controlled document identity while preserving an auditable connection between them.

## Relation contract

| Property | Value |
|---|---|
| Domain | `clinical-evaluation-report` |
| Range | `document-version` |
| Functional | `true` |
| Transitive | `false` |

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/clinical-evaluation-report/CER-PUMP-001-infpump-flowguard-clinical-evaluation-report-rev-d|CER-PUMP-001 — Infpump FlowGuard clinical evaluation report Rev D]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
