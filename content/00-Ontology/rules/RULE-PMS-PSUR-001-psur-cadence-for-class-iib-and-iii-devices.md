---
{
  "id": "RULE-PMS-PSUR-001",
  "type": "rule",
  "title": "PSUR cadence for Class IIb and III devices",
  "aliases": [
    "RULE-PMS-PSUR-001",
    "01-ontology/rules/RULE-PMS-PSUR-001-psur-cadence-for-class-iib-and-iii-devices"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/rule"
  ],
  "draft": false,
  "rule_kind": "scheduling",
  "source_provisions": [
    "[[PROV-MDR-ARTICLE-86-mdr-article-86-psur|PROV-MDR-ARTICLE-86]]"
  ],
  "derived_from": [
    "[[PROV-MDR-ARTICLE-86-mdr-article-86-psur|PROV-MDR-ARTICLE-86]]"
  ],
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001]]"
  ],
  "assurance_level": "hard",
  "normative_basis": "regulatory-source",
  "confidence": "high",
  "human_review_required": false
}
---

# PSUR cadence for Class IIb and III devices

## Explanation

This rule determines that a periodic safety update report is required at the governed cadence when the device class and market status meet the encoded MDR conditions. It supports consistent surveillance planning, while the manufacturer remains responsible for confirming classification, applicability, timing and any product-specific regulatory circumstances.


```yaml ontology-rule
{
  "when": {
    "all": [
      {
        "subject_type": "device-configuration"
      },
      {
        "fact": "risk_class",
        "in": [
          "IIb",
          "III"
        ]
      }
    ]
  },
  "then": {
    "assert": [
      {
        "predicate": "requires_report_type",
        "object": "PSUR"
      }
    ],
    "derive": [
      {
        "field": "maximum_update_interval",
        "value": "P1Y"
      }
    ]
  }
}
```

```yaml ontology-tests
{
  "cases": [
    {
      "name": "positive IIb",
      "context": {
        "type": "device-configuration",
        "risk_class": "IIb"
      },
      "expect": {
        "requires_report_type": "PSUR",
        "maximum_update_interval": "P1Y"
      }
    },
    {
      "name": "negative Class I",
      "context": {
        "type": "device-configuration",
        "risk_class": "I"
      },
      "expect_no_match": true
    },
    {
      "name": "boundary Class III",
      "context": {
        "type": "device-configuration",
        "risk_class": "III"
      },
      "expect": {
        "requires_report_type": "PSUR"
      }
    }
  ]
}
```

## Infusion-pump ontology-note example

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Infpump FlowGuard bedside configuration 1.0]]

This rule page is connected to a concrete Infpump FlowGuard ontology note so its terminology or contract can be inspected in device-specific context.
