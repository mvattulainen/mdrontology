---
{
  "id": "RULE-CHANGE-IMPACT-001",
  "type": "rule",
  "title": "High-impact change reassessment",
  "aliases": [
    "RULE-CHANGE-IMPACT-001",
    "01-ontology/rules/RULE-CHANGE-IMPACT-001-high-impact-change-reassessment"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "change-impact",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001]]"
  ],
  "assurance_level": "review-trigger",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true
}
---

# High-impact change reassessment

## Explanation

This rule derives a reassessment requirement when a change record meets the governed high-impact conditions. Its purpose is to route consequential changes back through the appropriate compliance reasoning rather than allowing earlier conclusions to be reused without checking whether the changed configuration invalidates them.


```yaml ontology-rule
{
  "when": {
    "all": [
      {
        "subject_type": "change"
      },
      {
        "fact": "change_type",
        "in": [
          "intended-purpose",
          "software"
        ]
      }
    ]
  },
  "then": {
    "assert": [
      {
        "predicate": "requires_regulatory_reassessment",
        "object": true
      }
    ]
  }
}
```

```yaml ontology-tests
{
  "cases": [
    {
      "name": "positive intended purpose",
      "context": {
        "type": "change",
        "change_type": "intended-purpose"
      },
      "expect": {
        "requires_regulatory_reassessment": true
      }
    },
    {
      "name": "negative editorial",
      "context": {
        "type": "change",
        "change_type": "editorial"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary software",
      "context": {
        "type": "change",
        "change_type": "software"
      },
      "expect": {
        "requires_regulatory_reassessment": true
      }
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Battery cell supplier replacement]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
