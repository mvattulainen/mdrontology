---
{
  "id": "DOC-PUMP-002",
  "type": "document-version",
  "title": "Intended purpose specification Rev B",
  "aliases": [
    "DOC-PUMP-002",
    "DOC-PUMP-002-intended-purpose-specification-rev-b",
    "18-ontology-notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b",
    "03-Ontology notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b"
  ],
  "status": "approved",
  "version": "1",
  "created": "2026-08-15",
  "modified": "2026-08-15",
  "tags": [
    "ontology-note/document-version",
    "device/infpump-flowguard"
  ],
  "draft": false,
  "note_origin": "human-reviewed synthetic example",
  "technical_file": "TF-00 Technical Documentation/Document Master List.xlsx",
  "technical_file_identifier": "DOC-PUMP-002",
  "valid_from": "2026-08-15",
  "review_status": "approved",
  "device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]",
  "document_revision": "B",
  "approved_by": [
    "[[01-Ontology instances/02-organisations/roles/ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]"
  ],
  "applies_to_configuration": [
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]"
  ]
}
---

# Intended purpose specification Rev B

## Semantic role

Represents one controlled technical-file document version separately from the semantic objects recorded in it.

## Note

Human-readable rendering of this note's YAML/JSON frontmatter:

- **id:** `DOC-PUMP-002`
- **type:** `document-version`
- **title:** `Intended purpose specification Rev B`
- **aliases:** `DOC-PUMP-002`, `DOC-PUMP-002-intended-purpose-specification-rev-b`, `18-ontology-notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b`, `03-Ontology notes/document-version/DOC-PUMP-002-intended-purpose-specification-rev-b`
- **status:** `approved`
- **version:** `1`
- **created:** `2026-08-15`
- **modified:** `2026-08-15`
- **tags:** `ontology-note/document-version`, `device/infpump-flowguard`
- **draft:** `false`
- **note_origin:** `human-reviewed synthetic example`
- **technical_file:** `TF-00 Technical Documentation/Document Master List.xlsx`
- **technical_file_identifier:** `DOC-PUMP-002`
- **valid_from:** `2026-08-15`
- **review_status:** `approved`
- **device_context:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]
- **document_revision:** `B`
- **approved_by:** [[01-Ontology instances/02-organisations/roles/ROLE-REGULATORY-AFFAIRS-regulatory-affairs|ROLE-REGULATORY-AFFAIRS]]
- **applies_to_configuration:** [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002]]

## Traceability

Previous dependencies are ontology notes that lead into this record. They reach it through `asserted_in` from [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-002-controlled-infusion-during-intra-hospital-transport|IP-PUMP-002 — Controlled infusion during intra-hospital transport]]; `includes` from [[06-Infpump FlowGuard ontology notes/technical-documentation-set/TD-PUMP-001-infpump-flowguard-mdr-technical-documentation-set|TD-PUMP-001 — Infpump FlowGuard MDR technical documentation set]]. These incoming links show which product, decision, process or evidence records depend on the current note.

Succeeding dependencies are ontology notes to which this record leads. The trace continues through `applies_to_configuration` to [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-002-infpump-flowguard-transport-configuration-10|DEVC-PUMP-002 — Infpump FlowGuard transport configuration 1.0]]. These outgoing links identify the next product, risk, control, evidence, change or lifecycle records used by downstream reasoning.

The left-to-right diagram shows up to five asserted previous and five asserted succeeding ontology-note dependencies. When more links exist, the additional-dependency node states how many remain available through the verbal links and structured metadata above.

```mermaid
flowchart LR
  CURRENT["DOC-PUMP-002<br/>Intended purpose specification Rev B"]
  PREV0["IP-PUMP-002<br/>Controlled infusion during intra-hospital transport"]
  PREV0 -->|"asserted_in"| CURRENT
  PREV1["TD-PUMP-001<br/>Infpump FlowGuard MDR technical documentation set"]
  PREV1 -->|"includes"| CURRENT
  NEXT0["DEVC-PUMP-002<br/>Infpump FlowGuard transport configuration 1.0"]
  CURRENT -->|"applies_to_configuration"| NEXT0
  classDef current fill:#dbeafe,stroke:#2563eb,stroke-width:2px
  class CURRENT current
```
