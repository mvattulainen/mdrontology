---
{
  "id": "HOME-MDR-ONTOLOGY",
  "type": "landing-page",
  "title": "EU MDR Manufacturer Ontology",
  "aliases": [
    "HOME-MDR-ONTOLOGY"
  ],
  "status": "active",
  "version": "1",
  "created": "2026-08-14",
  "modified": "2026-08-16",
  "tags": [
    "ontology/landing-page"
  ],
  "draft": false
}
---

# EU MDR Manufacturer Ontology

An ontology is a shared, explicit model of a subject area. It identifies the kinds of things that matter, gives those things consistent meanings, and records how they may be connected. In this vault, the subject area is the EU MDR manufacturer’s regulatory system: organisations, medical devices, requirements, risks, evidence, decisions, lifecycle activities and their provenance.

The ontology is made first of **classes**, which define reusable concepts such as Manufacturer, Device Configuration, Requirement, Risk and Verification Evidence. Individual records are **instances** of those classes: for example, a particular manufacturer, infusion-pump configuration, risk-control measure or test report. Controlled vocabularies provide consistent values for states such as approval, applicability and compliance.

It is also made of **relations**, which give meaning to connections between records. Relations express statements such as a manufacturer produces a device, a requirement applies to a configuration, evidence demonstrates compliance, or a risk control mitigates a risk. These typed connections turn separate Markdown pages into a traceable knowledge graph and preserve the source and scope of regulatory claims.

The current ontology has 179 class definitions, 85 relation definitions, 22 constraints and 9 executable rules. Its executable governance uses three assurance levels: hard constraints and rules may block a lifecycle decision, advisory constraints identify non-blocking data-quality findings, and review-trigger rules derive a need for qualified assessment rather than a final legal conclusion. This tiering permits broader machine assistance while keeping device-specific judgement and legally sensitive interpretation under accountable human review.

The ontology is used by linking technical-file records to the concepts and relations that describe their regulatory meaning. People can follow those links to review a device’s intended purpose, classification, requirements, risks, evidence and open gaps, while software can validate identifiers and relationships, apply governed rules and constraints, distinguish blocking gaps from advisory findings, and assemble grounded context for the competency questions. The result supports navigation and reasoning without replacing accountable regulatory decision-making.
