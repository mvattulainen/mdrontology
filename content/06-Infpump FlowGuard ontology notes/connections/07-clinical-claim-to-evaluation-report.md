---
{
  "title": "Clinical claim to evaluation report",
  "aliases": [
    "Ontology note connection — Clinical claim to evaluation report",
    "03-Ontology notes/connections/07-clinical-claim-to-evaluation-report",
    "18-ontology-notes/connections/07-clinical-claim-to-evaluation-report"
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

The arrows show the reasoning path used in this example. Select a diagram node, or use the links below, to open the underlying ontology note.

```mermaid
flowchart TD
  N1["DEVC-PUMP-001<br/>Bedside configuration"]
  N2["IP-PUMP-001<br/>Adult inpatient intended purpose"]
  N3["CLM-PUMP-002<br/>Continuous therapy claim"]
  N4["CEVD-PUMP-001<br/>Clinical evidence set"]
  N5["CE-PUMP-001<br/>Continuous clinical evaluation"]
  N6["CER-PUMP-001<br/>Clinical evaluation report"]
  N7["DOC-PUMP-004<br/>Controlled CER document version"]
  N8["CRI-PUMP-046<br/>Clinical-evaluation requirement"]
  N1 -->|has intended purpose| N2
  N2 -->|frames claim| N3
  N4 -->|supports| N3
  N5 -->|uses evidence| N4
  N5 -->|evaluates| N1
  N5 -->|documented by| N6
  N6 -->|controlled as| N7
  N8 -->|satisfied by| N6
  click N1 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-001-infpump-flowguard-bedside-configuration-10" "Open DEVC-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/intended-purpose/ip-pump-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients" "Open IP-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/clinical-claim/clm-pump-002-supports-continuous-intravenous-therapy" "Open CLM-PUMP-002"
  click N4 "/06-infpump-flowguard-ontology-notes/clinical-evidence/cevd-pump-001-infpump-flowguard-clinical-evidence-set" "Open CEVD-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/clinical-evaluation/ce-pump-001-infpump-flowguard-continuous-clinical-evaluation" "Open CE-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/clinical-evaluation-report/cer-pump-001-infpump-flowguard-clinical-evaluation-report-rev-d" "Open CER-PUMP-001"
  click N7 "/06-infpump-flowguard-ontology-notes/document-version/doc-pump-004-clinical-evaluation-report-rev-c" "Open DOC-PUMP-004"
  click N8 "/06-infpump-flowguard-ontology-notes/compliance-requirement-instance/cri-pump-046-clinical-evaluation-support" "Open CRI-PUMP-046"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Bedside configuration]]
- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients|IP-PUMP-001 — Adult inpatient intended purpose]]
- [[06-Infpump FlowGuard ontology notes/clinical-claim/CLM-PUMP-002-supports-continuous-intravenous-therapy|CLM-PUMP-002 — Continuous therapy claim]]
- [[06-Infpump FlowGuard ontology notes/clinical-evidence/CEVD-PUMP-001-infpump-flowguard-clinical-evidence-set|CEVD-PUMP-001 — Clinical evidence set]]
- [[06-Infpump FlowGuard ontology notes/clinical-evaluation/CE-PUMP-001-infpump-flowguard-continuous-clinical-evaluation|CE-PUMP-001 — Continuous clinical evaluation]]
- [[06-Infpump FlowGuard ontology notes/clinical-evaluation-report/CER-PUMP-001-infpump-flowguard-clinical-evaluation-report-rev-d|CER-PUMP-001 — Clinical evaluation report]]
- [[06-Infpump FlowGuard ontology notes/document-version/DOC-PUMP-004-clinical-evaluation-report-rev-c|DOC-PUMP-004 — Controlled CER document version]]
- [[06-Infpump FlowGuard ontology notes/compliance-requirement-instance/CRI-PUMP-046-clinical-evaluation-support|CRI-PUMP-046 — Clinical-evaluation requirement]]

These connections are navigation and reasoning aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
