---
{
  "id": "TD-0001",
  "type": "technical-documentation-set",
  "title": "Example technical documentation",
  "aliases": [
    "TD-0001",
    "08-technical-documentation/sets/TD-0001-example-technical-documentation"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/technical-documentation-set"
  ],
  "draft": false,
  "includes": [
    "[[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]]",
    "[[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]"
  ],
  "applies_to_configuration": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ]
}
---

# Example technical documentation

## Purpose

Represents the controlled technical-documentation set **Example technical documentation** and the evidence and document versions included for its product scope.

## Key relationships

- `includes` → [[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]], [[EVD-0001-electrical-safety-report-rev-a|EVD-0001]]
- `applies_to_configuration` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_technical_documentation`
