---
{
  "id": "CLD-0001",
  "type": "classification-decision",
  "title": "Example classification decision",
  "aliases": [
    "CLD-0001",
    "03-devices/classification/CLD-0001-example-classification-decision"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/classification-decision"
  ],
  "draft": false,
  "concerns": [
    "[[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]"
  ],
  "concludes_class": [
    "[[CLASS-IIb-class-iib|CLASS-IIb]]"
  ],
  "considers_rule": [
    "[[CRULE-MDR-12-mdr-annex-viii-rule-12|CRULE-MDR-12]]"
  ],
  "approved_by": [
    "[[ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]"
  ],
  "decision_date": "2026-07-01",
  "conclusion": "IIb"
}
---

# Example classification decision

## Purpose

Represents the auditable regulatory decision **Example classification decision**. It connects controlled device facts and candidate classification rules to an approved conclusion and its legal basis.

## Key relationships

- `concerns` → [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]]
- `concludes_class` → CLASS-IIb
- `considers_rule` → [[CRULE-MDR-12-mdr-annex-viii-rule-12|CRULE-MDR-12]]
- `approved_by` → [[ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]
- `derived_from` → [[PROV-MDR-ANNEX-VIII-mdr-annex-viii-classification|PROV-MDR-ANNEX-VIII]]

## Current represented state

| Field | Value |
|---|---|
| `status` | `active` |
| `version` | `1` |
| `decision_date` | `2026-07-01` |

## Referenced by

- [[DEVC-0001-example-infusion-pump-adult-10|DEVC-0001]] via `classified_by`
