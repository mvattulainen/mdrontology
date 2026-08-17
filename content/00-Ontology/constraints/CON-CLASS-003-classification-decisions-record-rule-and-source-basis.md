---
{
  "id": "CON-CLASS-003",
  "type": "constraint",
  "title": "Classification decisions record rule and source basis",
  "aliases": [
    "CON-CLASS-003",
    "01-ontology/constraints/CON-CLASS-003-classification-decisions-record-rule-and-source-basis"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "traceability",
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true,
  "severity": "major",
  "source_provisions": [
    "[[PROV-MDR-ANNEX-VIII]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Classification decisions record rule and source basis

## Explanation

This constraint requires a classification decision to record both the classification rule considered and the source from which the decision was derived. These links make the conclusion explainable and reviewable against the applicable MDR classification criteria instead of presenting the class as an unsupported assertion.

## Assurance

- Level: `hard`
- Normative basis: `regulatory-source`
- Failure effect: blocking compliance gap

```yaml ontology-constraint
{
  "target_type": "classification-decision",
  "checks": [
    {
      "relation": "considers_rule",
      "min": 1
    },
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
