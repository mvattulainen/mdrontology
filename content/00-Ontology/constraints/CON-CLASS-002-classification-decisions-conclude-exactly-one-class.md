---
{
  "id": "CON-CLASS-002",
  "type": "constraint",
  "title": "Classification decisions conclude exactly one class",
  "aliases": [
    "CON-CLASS-002",
    "01-ontology/constraints/CON-CLASS-002-classification-decisions-conclude-exactly-one-class"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "cardinality",
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

# Classification decisions conclude exactly one class

## Explanation

This constraint requires each classification decision to conclude exactly one device class. A single explicit conclusion makes downstream conformity-assessment, clinical, surveillance and documentation obligations computable and avoids ambiguity caused by missing or multiple class outcomes.

## Assurance

- Level: `hard`
- Normative basis: `regulatory-source`
- Failure effect: blocking compliance gap

```yaml ontology-constraint
{
  "target_type": "classification-decision",
  "checks": [
    {
      "relation": "concludes_class",
      "min": 1,
      "max": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
