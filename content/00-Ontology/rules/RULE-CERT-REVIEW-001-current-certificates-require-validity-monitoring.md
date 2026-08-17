---
{
  "id": "RULE-CERT-REVIEW-001",
  "type": "rule",
  "title": "Current certificates require validity monitoring",
  "aliases": [
    "RULE-CERT-REVIEW-001",
    "01-ontology/rules/RULE-CERT-REVIEW-001-current-certificates-require-validity-monitoring"
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
  "normative_basis": "regulatory-source",
  "confidence": "medium",
  "human_review_required": true,
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Current certificates require validity monitoring

## Explanation

This rule flags a certificate recorded as current or approved for a human validity review. The reviewer is expected to confirm matters such as status, expiry, scope and continuing applicability; the flag is a monitoring trigger and does not itself conclude that the certificate is valid or sufficient.

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
        "subject_type": "certificate"
      },
      {
        "fact": "status",
        "in": [
          "current",
          "approved"
        ]
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "certificate_validity_review_required",
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
      "name": "positive approved certificate",
      "context": {
        "type": "certificate",
        "status": "approved"
      },
      "expect": {
        "certificate_validity_review_required": true
      }
    },
    {
      "name": "negative expired certificate",
      "context": {
        "type": "certificate",
        "status": "expired"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary current certificate",
      "context": {
        "type": "certificate",
        "status": "current"
      },
      "expect": {
        "certificate_validity_review_required": true
      }
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
