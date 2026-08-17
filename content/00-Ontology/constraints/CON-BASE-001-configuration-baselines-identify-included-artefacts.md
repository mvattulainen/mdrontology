---
{
  "id": "CON-BASE-001",
  "type": "constraint",
  "title": "Configuration baselines identify included artefacts",
  "aliases": [
    "CON-BASE-001",
    "01-ontology/constraints/CON-BASE-001-configuration-baselines-identify-included-artefacts"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "versioning",
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

# Configuration baselines identify included artefacts

## Explanation

This constraint makes a configuration baseline auditable by requiring it to identify at least one artefact that belongs to the controlled release state. Without those links, a baseline would be only a label and reviewers could not determine which document versions, software items, drawings or other records collectively define the configuration.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "configuration-baseline",
  "checks": [
    {
      "relation": "includes",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
