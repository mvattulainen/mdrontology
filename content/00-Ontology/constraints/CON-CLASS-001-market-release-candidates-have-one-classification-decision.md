---
{
  "id": "CON-CLASS-001",
  "type": "constraint",
  "title": "Market-release candidates have one classification decision",
  "aliases": [
    "CON-CLASS-001",
    "01-ontology/constraints/CON-CLASS-001-market-release-candidates-have-one-classification-decision"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "integrity",
  "severity": "major",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# Market-release candidates have one classification decision

## Explanation

This constraint requires each device configuration proposed for market release to point to exactly one classification decision. It prevents release reasoning from proceeding with no classification basis or with conflicting decisions, while leaving the substantive MDR classification judgment to the documented decision and its supporting evidence.


```yaml ontology-constraint
{
  "target_type": "device-configuration",
  "when": {
    "all": [
      {
        "fact": "market_release_candidate",
        "equals": true
      }
    ]
  },
  "checks": [
    {
      "relation": "classified_by",
      "min": 1,
      "max": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
