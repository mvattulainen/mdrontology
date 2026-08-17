---
{
  "id": "RULE-CHANGE-HIGH-IMPACT-001",
  "type": "rule",
  "title": "High-impact changes require multidomain review",
  "aliases": [
    "RULE-CHANGE-HIGH-IMPACT-001",
    "01-ontology/rules/RULE-CHANGE-HIGH-IMPACT-001-high-impact-changes-require-multidomain-review"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "change-impact",
  "assurance_level": "review-trigger",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001]]"
  ]
}
---

# High-impact changes require multidomain review

## Explanation

This rule flags a change assessed as high impact for review across the relevant regulatory, clinical, risk, design, verification and post-market domains. It ensures that a broad change is not evaluated in only one functional area, while qualified reviewers still decide which domains and actions are actually required.

## Assurance

- Level: `review-trigger`
- Normative basis: `ontology-governance`
- Confidence: `medium`

This rule derives a review flag, not a final legal or compliance conclusion. A qualified reviewer remains responsible for the resulting decision.

```yaml ontology-rule
{
  "when": {
    "all": [
      {
        "subject_type": "change"
      },
      {
        "fact": "impact_level",
        "equals": "high"
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "multidomain_review_required",
        "value": true
      }
    ]
  }
}
```

```yaml ontology-tests
{
  "cases": [
    {
      "name": "positive high impact",
      "context": {
        "type": "change",
        "impact_level": "high"
      },
      "expect": {
        "multidomain_review_required": true
      }
    },
    {
      "name": "negative low impact",
      "context": {
        "type": "change",
        "impact_level": "low"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary medium impact",
      "context": {
        "type": "change",
        "impact_level": "medium"
      },
      "expect_no_match": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/change/CHG-PUMP-001-battery-cell-supplier-replacement|CHG-PUMP-001 — Battery cell supplier replacement]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
