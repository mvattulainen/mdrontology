---
{
  "id": "CERT-PUMP-003",
  "type": "certificate",
  "title": "Electrical safety CB test certificate",
  "aliases": [
    "CERT-PUMP-003",
    "CERT-PUMP-003-electrical-safety-cb-test-certificate",
    "18-ontology-notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate",
    "03-Ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/certificate",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-10 Conformity/MDR Certificates Register.xlsx",
  "technical_file_identifier": "CERT-PUMP-003",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]",
  "valid_to": "2029-08-14",
  "certificate_state": "valid",
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]"
  ]
}
---

# Electrical safety CB test certificate

## Semantic role

Represents one certificate, its configuration coverage and temporal validity state.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `CERT-PUMP-003`
- **type:** `certificate`
- **title:** `Electrical safety CB test certificate`
- **aliases:** `CERT-PUMP-003`, `CERT-PUMP-003-electrical-safety-cb-test-certificate`, `18-ontology-notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate`, `03-Ontology notes/certificate/CERT-PUMP-003-electrical-safety-cb-test-certificate`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/certificate`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-10 Conformity/MDR Certificates Register.xlsx`
- **technical_file_identifier:** `CERT-PUMP-003`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]
- **valid_to:** `2029-08-14`
- **certificate_state:** `valid`
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `has_certificate` from [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-003-infpump-flowguard-paediatric-configuration-10|DEVC-PUMP-003 — Infpump FlowGuard paediatric configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["CERT-PUMP-003<br/>Electrical safety CB test certificate"]
  PREV0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  PREV0 -->|"has_certificate"| CURRENT
  NEXT0["DEVC-PUMP-003<br/>Infpump FlowGuard paediatric configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
