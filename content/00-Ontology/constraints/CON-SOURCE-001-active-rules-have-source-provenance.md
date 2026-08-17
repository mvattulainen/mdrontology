---
{
  "id": "CON-SOURCE-001",
  "type": "constraint",
  "title": "Active rules have source provenance",
  "aliases": [
    "CON-SOURCE-001",
    "01-ontology/constraints/CON-SOURCE-001-active-rules-have-source-provenance"
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
  "severity": "critical",
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

# Active rules have source provenance

## Explanation

This constraint requires each active executable rule to identify the source provision or governed basis from which it was derived. Source provenance lets reviewers assess whether the rule remains justified, current and correctly interpreted instead of accepting automated behavior as self-authorizing.


```yaml ontology-constraint
{
  "target_type": "rule",
  "when": {
    "all": [
      {
        "fact": "status",
        "equals": "active"
      }
    ]
  },
  "checks": [
    {
      "relation": "derived_from",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
