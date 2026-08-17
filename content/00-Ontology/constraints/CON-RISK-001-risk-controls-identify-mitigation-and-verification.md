---
{
  "id": "CON-RISK-001",
  "type": "constraint",
  "title": "Risk controls identify mitigation and verification",
  "aliases": [
    "CON-RISK-001",
    "01-ontology/constraints/CON-RISK-001-risk-controls-identify-mitigation-and-verification"
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
  "assurance_level": "advisory",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "severity": "warning",
  "source_provisions": [
    "[[PROV-MDR-ANNEX-I]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Risk controls identify mitigation and verification

## Explanation

This constraint checks that every risk-control measure identifies both the risk it mitigates and the verification evidence for its implementation. The two links connect the control's purpose with objective confirmation that it was implemented, supporting end-to-end risk-management traceability.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "risk-control-measure",
  "checks": [
    {
      "relation": "mitigates",
      "min": 1
    },
    {
      "relation": "verified_by",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
