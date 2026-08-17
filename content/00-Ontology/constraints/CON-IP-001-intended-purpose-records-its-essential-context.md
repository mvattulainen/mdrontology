---
{
  "id": "CON-IP-001",
  "type": "constraint",
  "title": "Intended purpose records its essential context",
  "aliases": [
    "CON-IP-001",
    "01-ontology/constraints/CON-IP-001-intended-purpose-records-its-essential-context"
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

# Intended purpose records its essential context

## Explanation

This constraint checks that an intended-purpose statement is anchored in controlled wording and identifies its target population, intended user and use environment. These contextual elements are advisory completeness checks because they materially influence classification, risk management, clinical evaluation and usability reasoning even when terminology varies between products.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "intended-purpose",
  "checks": [
    {
      "relation": "asserted_in",
      "min": 1
    },
    {
      "relation": "has_target_population",
      "min": 1
    },
    {
      "relation": "has_intended_user",
      "min": 1
    },
    {
      "relation": "has_use_environment",
      "min": 1
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This constraint page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
