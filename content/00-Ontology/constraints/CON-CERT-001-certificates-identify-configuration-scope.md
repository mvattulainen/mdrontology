---
{
  "id": "CON-CERT-001",
  "type": "constraint",
  "title": "Certificates identify configuration scope",
  "aliases": [
    "CON-CERT-001",
    "01-ontology/constraints/CON-CERT-001-certificates-identify-configuration-scope"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/constraint"
  ],
  "draft": false,
  "constraint_kind": "configuration",
  "assurance_level": "advisory",
  "normative_basis": "ontology-governance",
  "confidence": "medium",
  "human_review_required": true,
  "severity": "warning",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-10]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ]
}
---

# Certificates identify configuration scope

## Explanation

This constraint checks that every certificate is linked to the device configuration or configurations it is intended to cover. The link lets reviewers compare the certified scope with the product being assessed and helps prevent a certificate from being treated as applicable to an unspecified or different configuration.

## Assurance

- Level: `advisory`
- Normative basis: `ontology-governance`
- Failure effect: non-blocking advisory finding requiring review

```yaml ontology-constraint
{
  "target_type": "certificate",
  "checks": [
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
