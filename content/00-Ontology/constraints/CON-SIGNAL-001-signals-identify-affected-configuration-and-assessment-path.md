---
{
  "id": "CON-SIGNAL-001",
  "type": "constraint",
  "title": "Signals identify affected configuration and assessment path",
  "aliases": [
    "CON-SIGNAL-001",
    "01-ontology/constraints/CON-SIGNAL-001-signals-identify-affected-configuration-and-assessment-path"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "completeness",
  "assurance_level": "advisory",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "severity": "warning",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-83]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Signals identify affected configuration and assessment path

## Explanation

This constraint checks that a post-market signal identifies the affected configuration and the assessment or action path it triggers. Those links make the signal operationally reviewable and help prevent potentially important information from remaining disconnected from the product scope and follow-up process.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "signal",
  "checks": [
    {
      "relation": "concerns",
      "min": 1
    },
    {
      "relation": "triggers",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
