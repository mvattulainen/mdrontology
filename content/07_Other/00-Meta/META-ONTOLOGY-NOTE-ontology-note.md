---
{
  "id": "META-ONTOLOGY-NOTE",
  "type": "meta-page",
  "title": "Ontology note",
  "aliases": [
    "META-ONTOLOGY-NOTE",
    "Ontology note",
    "00-meta/META-ONTOLOGY-NOTE-ontology-note"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-16",
  "modified": "2026-08-16",
  "tags": [
    "ontology/meta-page",
    "ontology-note/guidance"
  ],
  "draft": false
}
---

# Ontology note

An **ontology note** is the vault’s representation of one independently identifiable regulatory object, such as a device configuration, intended purpose, classification decision, risk, control, clinical claim, evidence item, change or post-market signal. It is not merely a page about a topic: it gives the represented object a stable identity so that people and software can refer to the same thing consistently even when folders, filenames or source documents change.

Each ontology note has two complementary layers. Structured frontmatter records the identifier, class, state, dates, provenance, configuration scope, technical-file reference and typed relationships needed for deterministic queries and validation. The Markdown body renders the essential meaning for a human reader, including the note’s semantic role, verbal traceability to previous and succeeding dependencies, and a readable presentation of its structured metadata.

An ontology note normally represents one semantic subject that may change, be reviewed or be referenced independently. A technical-file document can contain many such subjects, while the note separates each subject from the document version that currently records it; for example, a risk keeps its stable risk-matrix identity while a revised risk-analysis file becomes the current technical-file source.

Ontology notes become useful as a knowledge graph because typed links connect them. A device configuration links to an intended purpose and classification decision; a risk links to its hazard, harm and controls; a control links to verification evidence; and a signal or change links back to the objects that require reassessment. These relationships allow navigation in both directions and expose the context, evidence and provenance behind a regulatory conclusion.

Humans use ontology notes to inspect traceability and review the current regulated state, while rules, constraints and retrieval software use them to derive findings, detect missing information and assemble grounded context for competency questions or LLM explanations. The note remains a governed semantic record rather than an automatic legal conclusion: extracted or generated content must retain its origin, review status and accountable human-review boundary.

## Explore examples

- [Browse all Infpump FlowGuard ontology notes](/06-infpump-flowguard-ontology-notes/)
- [[06-Infpump FlowGuard ontology notes/device-configuration/DEVC-PUMP-001-infpump-flowguard-bedside-configuration-10|Open a representative ontology note]]
- [Explore the ten ontology-note connection diagrams](/06-infpump-flowguard-ontology-notes/connections/)
