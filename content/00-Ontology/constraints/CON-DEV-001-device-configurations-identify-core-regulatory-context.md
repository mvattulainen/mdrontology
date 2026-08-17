---
{
  "id": "CON-DEV-001",
  "type": "constraint",
  "title": "Device configurations identify core regulatory context",
  "aliases": [
    "CON-DEV-001",
    "01-ontology/constraints/CON-DEV-001-device-configurations-identify-core-regulatory-context"
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
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": true,
  "severity": "major",
  "source_provisions": [
    "[[PROV-MDR-ANNEX-II]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Device configurations identify core regulatory context

## Explanation

This constraint requires every device configuration to have one controlled intended purpose, one classification decision and one configuration baseline. Those three relationships establish the minimum regulatory context needed to reason consistently about what the device is, how it is classified and which released artefacts define it.

## Assurance

- Level: `hard`
- Normative basis: `regulatory-source`
- Failure effect: blocking compliance gap

```yaml ontology-constraint
{
  "target_type": "device-configuration",
  "checks": [
    {
      "relation": "has_intended_purpose",
      "min": 1,
      "max": 1
    },
    {
      "relation": "classified_by",
      "min": 1,
      "max": 1
    },
    {
      "relation": "has_baseline",
      "min": 1,
      "max": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
