---
{
  "id": "RULE-GAP-RELEASE-001",
  "type": "rule",
  "title": "Unsatisfied requirements require release review",
  "aliases": [
    "RULE-GAP-RELEASE-001",
    "01-ontology/rules/RULE-GAP-RELEASE-001-unsatisfied-requirements-require-release-review"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "lifecycle-gate",
  "assurance_level": "review-trigger",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "source_provisions": [
    "[[PROV-MDR-ANNEX-I]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ANNEX-I]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Unsatisfied requirements require release review

## Explanation

This rule flags a device-specific requirement marked not satisfied for release review. It makes the unresolved condition visible to the release process so a qualified reviewer can determine whether release must be blocked, remediation is required or the underlying status needs correction.

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
        "subject_type": "compliance-requirement-instance"
      },
      {
        "fact": "compliance_status",
        "equals": "not-satisfied"
      }
    ]
  },
  "then": {
    "derive": [
      {
        "field": "release_review_required",
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
      "name": "positive not satisfied",
      "context": {
        "type": "compliance-requirement-instance",
        "compliance_status": "not-satisfied"
      },
      "expect": {
        "release_review_required": true
      }
    },
    {
      "name": "negative satisfied",
      "context": {
        "type": "compliance-requirement-instance",
        "compliance_status": "satisfied"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary unresolved",
      "context": {
        "type": "compliance-requirement-instance",
        "compliance_status": "unresolved"
      },
      "expect_no_match": true
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
