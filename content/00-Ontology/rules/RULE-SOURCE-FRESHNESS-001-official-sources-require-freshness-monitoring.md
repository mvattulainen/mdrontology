---
{
  "id": "RULE-SOURCE-FRESHNESS-001",
  "type": "rule",
  "title": "Official sources require freshness monitoring",
  "aliases": [
    "RULE-SOURCE-FRESHNESS-001",
    "01-ontology/rules/RULE-SOURCE-FRESHNESS-001-official-sources-require-freshness-monitoring"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "source-validity",
  "assurance_level": "review-trigger",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "source_provisions": [
    "[[SRC-MDR-2017-745]]"
  ],
  "derived_from": [
    "[[SRC-MDR-2017-745]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Official sources require freshness monitoring

## Explanation

This rule flags records with an official source URL for a freshness review. It supports governance of externally maintained regulatory material by prompting confirmation that the cited page, document and interpretation remain current; it does not infer that an unchanged URL guarantees unchanged content.

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
        "fact": "official_url",
        "exists": true
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "source_freshness_review_required",
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
      "name": "positive official source",
      "context": {
        "type": "source",
        "official_url": "https://example.invalid/source"
      },
      "expect": {
        "source_freshness_review_required": true
      }
    },
    {
      "name": "negative internal record",
      "context": {
        "type": "internal-source"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary empty URL",
      "context": {
        "type": "source",
        "official_url": ""
      },
      "expect_no_match": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
