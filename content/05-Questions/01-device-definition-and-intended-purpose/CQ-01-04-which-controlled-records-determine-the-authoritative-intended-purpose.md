---
{
  "id": "CQ-01-04",
  "type": "competency-question",
  "title": "Which controlled records determine the authoritative intended purpose?",
  "aliases": [
    "CQ-01-04",
    "15-questions/01-device-definition-and-intended-purpose/CQ-01-04-which-controlled-records-determine-the-authoritative-intended-purpose"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-14",
  "tags": [
    "ontology/competency-question"
  ],
  "draft": false,
  "requirement_class": "01-device-definition-and-intended-purpose",
  "answer_pattern": "[[AP-QUAL-ap-qual-answer-pattern|AP-QUAL]]",
  "starts_from": [
    "device-configuration"
  ],
  "requires_context": [
    "intended_purpose",
    "manufacturer",
    "market",
    "relevant_date"
  ],
  "traverses": [
    "has_intended_purpose",
    "asserted_in",
    "derived_from"
  ],
  "applies_rule_families": [
    "01-device-definition-and-intended-purpose"
  ],
  "checks_constraint": [
    "[[CON-MFR-001-marketed-configurations-have-one-manufacturer|CON-MFR-001]]"
  ],
  "uses_source": [
    "[[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]"
  ],
  "ontology_path": "IntendedPurpose → assertedIn → Label/IFU/TechnicalDocumentation/ClinicalEvaluation/MarketingClaim → ConsistencyAssertion",
  "example_ontology_notes": [
    "[[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-004-controlled-infusion-of-oncology-medicines|IP-PUMP-004]]",
    "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
  ],
  "example_device_context": "[[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]]"
}
---

# Which controlled records determine the authoritative intended purpose?

> [!summary] Manufacturer answer
> Assemble this answer from the graph and expose missing facts; do not infer absent device data.

## Required context

- `intended_purpose`
- `manufacturer`
- `market`
- `relevant_date`

## Ontology path

`IntendedPurpose → assertedIn → Label/IFU/TechnicalDocumentation/ClinicalEvaluation/MarketingClaim → ConsistencyAssertion`


## Answer

The authoritative intended purpose is the approved intended-purpose record together with its controlled assertions in the label, instructions for use, technical documentation and clinical evaluation; marketing claims must remain consistent with them but do not independently redefine the purpose. The ontology follows asserted-in links across those records and uses a consistency assertion to expose any conflicting wording or version.

## Infusion-pump example context

This competency question is grounded in the imaginary Infpump FlowGuard device context [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004]] and the following device-specific ontology notes:

- [[06-Infpump FlowGuard ontology notes/intended-purpose/IP-PUMP-004-controlled-infusion-of-oncology-medicines|IP-PUMP-004 — Controlled infusion of oncology medicines]]
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-004-infpump-flowguard-oncology-configuration-11|DEVC-PUMP-004 — Infpump FlowGuard oncology configuration 1.1]]

Follow the linked note to its technical-file name, record identifier, relationships and review boundary before synthesising an answer.
## Related entities

Start from the resolved `device-configuration`.

## Source basis

Binding source: [[PROV-MDR-ARTICLE-10-mdr-article-10-manufacturer-obligations|PROV-MDR-ARTICLE-10]]
