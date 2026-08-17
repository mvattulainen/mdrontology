---
{
  "id": "DEVM-0001",
  "type": "device-model",
  "title": "Example Infusion Pump",
  "aliases": [
    "DEVM-0001",
    "03-devices/models/DEVM-0001-example-infusion-pump"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/device-model"
  ],
  "draft": false,
  "manufactured_by": [
    "[[ORG-MFR-0001-example-medical-oy|ORG-MFR-0001]]"
  ],
  "has_variant": [
    "[[DEVV-0001-example-infusion-pump-adult|DEVV-0001]]"
  ],
  "has_intended_purpose": [
    "[[IP-0001-example-infusion-pump-intended-purpose|IP-0001]]"
  ]
}
---

# Example Infusion Pump

## Purpose

Provides the stable `device-model` node **Example Infusion Pump** so people, validation rules and retrieval tools can refer to the same regulatory object and traverse its context.

## Key relationships

- `manufactured_by` → [[ORG-MFR-0001-example-medical-oy|ORG-MFR-0001]]
- `has_variant` → [[DEVV-0001-example-infusion-pump-adult|DEVV-0001]]
- `has_intended_purpose` → [[IP-0001-example-infusion-pump-intended-purpose|IP-0001]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |

## Referenced by

- [[DEVF-0001-example-infusion-system|DEVF-0001]] via `has_model`
- [[SUPPLY-0001-synthetic-supply-interruption-scenario|SUPPLY-0001]] via `concerns`
