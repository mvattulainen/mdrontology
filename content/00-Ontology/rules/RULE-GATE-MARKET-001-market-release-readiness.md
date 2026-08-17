---
{
  "id": "RULE-GATE-MARKET-001",
  "type": "rule",
  "title": "Market release readiness",
  "aliases": [
    "RULE-GATE-MARKET-001",
    "01-ontology/rules/RULE-GATE-MARKET-001-market-release-readiness"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "lifecycle-gate",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": false
}
---

# Market release readiness

## Explanation

This rule asserts market-release readiness only when a device configuration is a release candidate and its declared release prerequisites are met. It provides a consistent lifecycle gate for downstream views and queries, but its reliability depends on the completeness and correctness of the prerequisite assessments supplied to the ontology.


```yaml ontology-rule
{
  "when": {
    "all": [
      {
        "subject_type": "device-configuration"
      },
      {
        "fact": "market_release_candidate",
        "equals": true
      },
      {
        "fact": "release_prerequisites_met",
        "equals": true
      }
    ]
  },
  "then": {
    "assert": [
      {
        "predicate": "market_release_ready",
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
      "name": "positive ready",
      "context": {
        "type": "device-configuration",
        "market_release_candidate": true,
        "release_prerequisites_met": true
      },
      "expect": {
        "market_release_ready": true
      }
    },
    {
      "name": "negative incomplete",
      "context": {
        "type": "device-configuration",
        "market_release_candidate": true,
        "release_prerequisites_met": false
      },
      "expect_no_match": true
    },
    {
      "name": "boundary not candidate",
      "context": {
        "type": "device-configuration",
        "market_release_candidate": false,
        "release_prerequisites_met": true
      },
      "expect_no_match": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
