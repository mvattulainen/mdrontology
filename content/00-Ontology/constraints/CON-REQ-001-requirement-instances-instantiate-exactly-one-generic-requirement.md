---
{
  "id": "CON-REQ-001",
  "type": "constraint",
  "title": "Requirement instances instantiate exactly one generic requirement",
  "aliases": [
    "CON-REQ-001",
    "01-ontology/constraints/CON-REQ-001-requirement-instances-instantiate-exactly-one-generic-requirement"
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
    "[[PROV-MDR-ANNEX-I]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Requirement instances instantiate exactly one generic requirement

## Explanation

This constraint requires each device-specific compliance requirement instance to instantiate exactly one generic requirement. It preserves a clear link from the product-specific applicability and compliance record back to the reusable regulatory requirement from which it was created.

## Assurance

- Level: `hard`
- Normative basis: `regulatory-source`
- Failure effect: blocking compliance gap

```yaml ontology-constraint
{
  "target_type": "compliance-requirement-instance",
  "checks": [
    {
      "relation": "instantiates_requirement",
      "min": 1,
      "max": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
