---
{
  "title": "Clinical claim to evaluation report",
  "aliases": [
    "Ontology note connection — Clinical claim to evaluation report",
    "03-Ontology notes/connections/07-clinical-claim-to-evaluation-report"
  ],
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology-note/connection-diagram",
    "device/infpump-flowguard"
  ],
  "draft": false
}
---

# Clinical claim to evaluation report

Shows how a device and intended purpose frame a clinical claim that is assessed through evidence, evaluation and controlled reporting.

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["DEVC-PUMP-001<br/>Bedside configuration"]
  N2["IP-PUMP-001<br/>Adult inpatient intended purpose"]
  N3["CLM-PUMP-002<br/>Continuous therapy claim"]
  N4["CEVD-PUMP-001<br/>Clinical evidence set"]
  N5["CE-PUMP-001<br/>Continuous clinical evaluation"]
  N6["CER-PUMP-001<br/>Clinical evaluation report"]
  N7["DOC-PUMP-006<br/>Controlled CER document version Rev D"]
  N8["CRI-PUMP-046<br/>Clinical-evaluation requirement"]
  N9["EVD-PUMP-029<br/>Clinical-claims evidence summary"]
  N1 -->|has_intended_purpose| N2
  N1 -->|makes_clinical_claim| N3
  N4 -->|supports_claim| N3
  N5 -->|uses_evidence| N4
  N5 -->|evaluates| N1
  N5 -->|documented_by| N6
  N6 -->|represented_by_document_version| N7
  N8 -->|satisfied_by| N9
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-001-infpump-flowguard-bedside-configuration-10" "Open DEVC-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/intended-purpose/ip-pump-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients" "Open IP-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/clinical-claim/clm-pump-002-supports-continuous-intravenous-therapy" "Open CLM-PUMP-002"
  click N4 "/06-infpump-flowguard-ontology-notes/clinical-evidence/cevd-pump-001-infpump-flowguard-clinical-evidence-set" "Open CEVD-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/clinical-evaluation/ce-pump-001-infpump-flowguard-continuous-clinical-evaluation" "Open CE-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/clinical-evaluation-report/cer-pump-001-infpump-flowguard-clinical-evaluation-report-rev-d" "Open CER-PUMP-001"
  click N7 "/06-infpump-flowguard-ontology-notes/document-version/doc-pump-006-clinical-evaluation-report-rev-d" "Open DOC-PUMP-006"
  click N8 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-046-clinical-evaluation-support" "Open CRI-PUMP-046"
  click N9 "/06-infpump-flowguard-ontology-notes/verification-evidence/evd-pump-029-clinical-claims-evidence-summary" "Open EVD-PUMP-029"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Bedside configuration]]
- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients|IP-PUMP-001 — Adult inpatient intended purpose]]
- [[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-002-supports-continuous-intravenous-therapy|CLM-PUMP-002 — Continuous therapy claim]]
- [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Clinical evidence set]]
- [[06-Infpump FlowGuard ontology notes/clinical-evaluation/CE-PUMP-001-infpump-flowguard-continuous-clinical-evaluation|CE-PUMP-001 — Continuous clinical evaluation]]
- [[06-Infpump FlowGuard ontology notes/clinical-evaluation-report/CER-PUMP-001-infpump-flowguard-clinical-evaluation-report-rev-d|CER-PUMP-001 — Clinical evaluation report]]
- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-006-clinical-evaluation-report-rev-d|DOC-PUMP-006 — Controlled CER document version Rev D]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-046-clinical-evaluation-support|CRI-PUMP-046 — Clinical-evaluation requirement]]
- [[06-Infpump FlowGuard ontology notes/verification-evidence/EVD-PUMP-029-clinical-claims-evidence-summary|EVD-PUMP-029 — Clinical-claims evidence summary]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
