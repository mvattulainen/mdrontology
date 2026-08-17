---
{
  "id": "REL-SOURCE-PROVISIONS",
  "type": "relation-definition",
  "title": "source_provisions",
  "aliases": [
    "REL-SOURCE-PROVISIONS",
    "01-ontology/relations/REL-SOURCE-PROVISIONS-source-provisions"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/relation-definition"
  ],
  "draft": false,
  "predicate": "source_provisions",
  "label": "source provisions",
  "domain": [
    "rule",
    "constraint",
    "decision",
    "competency-question",
    "assertion",
    "device-family",
    "device-model",
    "device-variant",
    "device-configuration",
    "configuration-baseline",
    "software-version",
    "intended-purpose",
    "compliance-requirement-instance",
    "clinical-evaluation",
    "clinical-evidence",
    "technical-documentation-set",
    "pms-plan"
  ],
  "range": [
    "legal-provision",
    "source"
  ],
  "inverse": null,
  "transitive": false,
  "symmetric": false,
  "functional": false,
  "provenance_required": true,
  "temporal_qualification_required": false,
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# source_provisions

Implementation bridge relation.

## Purpose

Defines the ontology predicate `source_provisions`. It constrains which subject and object classes may be connected and gives graph edges a stable, machine-checkable meaning.

## Relation contract

| Property | Value |
|---|---|
| Domain | `rule`, `constraint`, `decision`, `competency-question`, `assertion`, `device-family`, `device-model`, `device-variant`, `device-configuration`, `configuration-baseline`, `software-version`, `intended-purpose`, `compliance-requirement-instance`, `clinical-evaluation`, `clinical-evidence`, `technical-documentation-set`, `pms-plan` |
| Range | `legal-provision`, `source` |
| Functional | `false` |
| Transitive | `false` |
| Provenance required | `true` |

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

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This relation-definition page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
