---
{
  "title": "Device identity and regulatory context",
  "aliases": [
    "Ontology note connection — Device identity and regulatory context",
    "03-Ontology notes/connections/01-device-identity-and-regulatory-context"
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

# Device identity and regulatory context

Shows how the regulated product is narrowed from family to released configuration and then anchored to its intended purpose, classification, baseline and software version.

Every arrow reproduces a typed relation asserted in the linked ontology notes. Select a diagram node, or use the links below, to inspect the underlying semantic record.

```mermaid
%%{init: {"flowchart": {"curve": "linear"}}}%%
flowchart TD
  N1["DEVF-PUMP-001<br/>Infusion-pump family"]
  N2["DEVM-PUMP-001<br/>FG-100 model"]
  N3["DEVV-PUMP-001<br/>EU professional-use variant"]
  N4["DEVC-PUMP-001<br/>Bedside configuration 1.0"]
  N5["IP-PUMP-001<br/>Adult inpatient intended purpose"]
  N6["CLD-PUMP-001<br/>Classification decision"]
  N7["BASE-PUMP-001<br/>Released design baseline"]
  N8["SW-PUMP-001<br/>Control software 4.2.0"]
  N1 -->|has_model| N2
  N2 -->|has_variant| N3
  N3 -->|has_configuration| N4
  N4 -->|has_intended_purpose| N5
  N4 -->|classified_by| N6
  N4 -->|has_baseline| N7
  N4 -->|includes_software_version| N8
  click N1 "/06-infpump-flowguard-ontology-notes/device-family/devf-pump-001-infpump-flowguard-infusion-pump-family" "Open DEVF-PUMP-001"
  click N2 "/06-infpump-flowguard-ontology-notes/device-model/devm-pump-001-infpump-flowguard-fg-100-model" "Open DEVM-PUMP-001"
  click N3 "/06-infpump-flowguard-ontology-notes/device-variant/devv-pump-001-infpump-flowguard-fg-100-eu-professional-use-variant" "Open DEVV-PUMP-001"
  click N4 "/06-infpump-flowguard-ontology-notes/device-configuration/devc-pump-001-infpump-flowguard-bedside-configuration-10" "Open DEVC-PUMP-001"
  click N5 "/06-infpump-flowguard-ontology-notes/intended-purpose/ip-pump-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients" "Open IP-PUMP-001"
  click N6 "/06-infpump-flowguard-ontology-notes/classification-decision/cld-pump-001-bedside-configuration-classification-decision" "Open CLD-PUMP-001"
  click N7 "/06-infpump-flowguard-ontology-notes/configuration-baseline/base-pump-001-infpump-flowguard-released-design-baseline-11" "Open BASE-PUMP-001"
  click N8 "/06-infpump-flowguard-ontology-notes/software-version/sw-pump-001-infpump-flowguard-control-software-420" "Open SW-PUMP-001"
```

## Linked ontology notes

- [[06-Infpump FlowGuard ontology notes/device-family/DEVF-PUMP-001-infpump-flowguard-infusion-pump-family|DEVF-PUMP-001 — Infusion-pump family]]
- [[06-Infpump FlowGuard ontology notes/device-model/DEVM-PUMP-001-infpump-flowguard-fg-100-model|DEVM-PUMP-001 — FG-100 model]]
- [[06-Infpump FlowGuard ontology notes/device-variant/DEVV-PUMP-001-infpump-flowguard-fg-100-eu-professional-use-variant|DEVV-PUMP-001 — EU professional-use variant]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|DEVC-PUMP-001 — Bedside configuration 1.0]]
- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-001-controlled-infusion-of-prescribed-fluids-for-adult-inpatients|IP-PUMP-001 — Adult inpatient intended purpose]]
- [[06-Infpump FlowGuard ontology notes/classification-decision/CLD-PUMP-001-bedside-configuration-classification-decision|CLD-PUMP-001 — Classification decision]]
- [[06-Infpump FlowGuard ontology notes/configuration-baseline/BASE-PUMP-001-infpump-flowguard-released-design-baseline-11|BASE-PUMP-001 — Released design baseline]]
- [[06-Infpump FlowGuard ontology notes/software-version/SW-PUMP-001-infpump-flowguard-control-software-420|SW-PUMP-001 — Control software 4.2.0]]

These connections are graph projections and navigation aids. The linked notes and their governed metadata remain the semantic source; the diagram does not create additional regulatory facts.
