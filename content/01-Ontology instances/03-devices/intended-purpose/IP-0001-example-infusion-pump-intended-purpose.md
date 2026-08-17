---
{
  "id": "IP-0001",
  "type": "intended-purpose",
  "title": "Example Infusion Pump intended purpose",
  "aliases": [
    "IP-0001",
    "03-devices/intended-purpose/IP-0001-example-infusion-pump-intended-purpose"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/intended-purpose"
  ],
  "draft": false,
  "asserted_in": [
    "[[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]]"
  ],
  "has_target_population": [
    "[[POP-0001-adult-patients|POP-0001]]"
  ],
  "has_intended_user": [
    "[[USER-0001-trained-healthcare-professional|USER-0001]]"
  ],
  "has_use_environment": [
    "[[ENV-0001-professional-healthcare-environment|ENV-0001]]"
  ]
}
---

# Example Infusion Pump intended purpose

## Purpose

Provides the stable `intended-purpose` node **Example Infusion Pump intended purpose** so people, validation rules and retrieval tools can refer to the same regulatory object and traverse its context.

## Key relationships

- `asserted_in` → [[DOC-IFU-0001-instructions-for-use-rev-a|DOC-IFU-0001]]
- `has_target_population` → [[POP-0001-adult-patients|POP-0001]]
- `has_intended_user` → [[USER-0001-trained-healthcare-professional|USER-0001]]
- `has_use_environment` → [[ENV-0001-professional-healthcare-environment|ENV-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVM-0001-example-infusion-pump|DEVM-0001]] via `has_intended_purpose`
- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `has_intended_purpose`
