---
{
  "id": "CON-TD-001",
  "type": "constraint",
  "title": "Technical-documentation sets identify contents and configuration scope",
  "aliases": [
    "CON-TD-001",
    "01-ontology/constraints/CON-TD-001-technical-documentation-sets-identify-contents-and-configuration-scope"
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
    "[[PROV-MDR-ANNEX-II]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Technical-documentation sets identify contents and configuration scope

## Explanation

This constraint checks that a technical-documentation set identifies both its included records and the device configurations it covers. The combination defines what is inside the technical file and the product scope for which that collection is intended to demonstrate compliance.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "technical-documentation-set",
  "checks": [
    {
      "relation": "includes",
      "min": 1
    },
    {
      "relation": "applies_to_configuration",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
