---
{
  "id": "RULE-DOC-VERSION-REVIEW-001",
  "type": "rule",
  "title": "Approved documents require version confirmation",
  "aliases": [
    "RULE-DOC-VERSION-REVIEW-001",
    "01-ontology/rules/RULE-DOC-VERSION-REVIEW-001-approved-documents-require-version-confirmation"
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
    "[[PROV-MDR-ANNEX-II]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ANNEX-II]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Approved documents require version confirmation

## Explanation

This rule flags an approved document version for confirmation that it remains the correct controlled version for the current configuration and decision context. The review can identify supersession, scope mismatch or missing approval information, but the automated flag does not decide document acceptability.

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
        "subject_type": "document-version"
      },
      {
        "fact": "status",
        "equals": "approved"
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "version_review_required",
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
      "name": "positive approved document",
      "context": {
        "type": "document-version",
        "status": "approved"
      },
      "expect": {
        "version_review_required": true
      }
    },
    {
      "name": "negative draft document",
      "context": {
        "type": "document-version",
        "status": "draft"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary superseded document",
      "context": {
        "type": "document-version",
        "status": "superseded"
      },
      "expect_no_match": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
