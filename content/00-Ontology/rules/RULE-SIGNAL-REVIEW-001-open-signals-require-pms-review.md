---
{
  "id": "RULE-SIGNAL-REVIEW-001",
  "type": "rule",
  "title": "Open signals require PMS review",
  "aliases": [
    "RULE-SIGNAL-REVIEW-001",
    "01-ontology/rules/RULE-SIGNAL-REVIEW-001-open-signals-require-pms-review"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "feedback",
  "assurance_level": "review-trigger",
  "normative_basis": "regulatory-source",
  "confidence": "medium",
  "human_review_required": true,
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-83]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-83]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Open signals require PMS review

## Explanation

This rule flags open or under-assessment post-market signals for PMS review. The flag ensures that unresolved safety or performance information enters the surveillance workflow, but it does not determine the signal's validity, reportability, risk significance or required corrective action.

## Assurance

- Level: `review-trigger`
- Normative basis: `regulatory-source`
- Confidence: `medium`

This rule derives a review flag, not a final legal or compliance conclusion. A qualified reviewer remains responsible for the resulting decision.

```yaml ontology-rule
{
  "when": {
    "all": [
      {
        "subject_type": "signal"
      },
      {
        "fact": "status",
        "in": [
          "open",
          "under-assessment"
        ]
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "pms_review_required",
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
      "name": "positive open signal",
      "context": {
        "type": "signal",
        "status": "open"
      },
      "expect": {
        "pms_review_required": true
      }
    },
    {
      "name": "negative closed signal",
      "context": {
        "type": "signal",
        "status": "closed"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary under assessment",
      "context": {
        "type": "signal",
        "status": "under-assessment"
      },
      "expect": {
        "pms_review_required": true
      }
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
