# EU MDR Manufacturer Ontology

An Obsidian-friendly, Quartz 5 knowledge vault for manufacturer-centred EU MDR reasoning. Markdown under `content/` is canonical; the typed graph, validation results, compliance gaps and question context packets are deterministic build outputs.

> This project is an engineering and educational implementation, not legal advice. Device-specific regulatory decisions require appropriately qualified review.

## What is implemented

- 793 canonical semantic Markdown notes, including 310 Infpump FlowGuard infusion-pump ontology notes and the full 90-question catalogue
- core class, relation, vocabulary, assertion, decision, source, rule and constraint models
- a synthetic manufacturer/device regulatory thread spanning risk, clinical, QMS, evidence, conformity, PMS and change
- a typed Markdown graph compiler with ID, link, type, predicate, domain/range and date validation
- 9 deterministic rules with positive, negative and boundary tests
- 22 tiered constraints that separate blocking compliance gaps from non-blocking advisory findings
- hard, advisory and review-trigger assurance levels with provenance, confidence and human-review metadata
- source-freshness checks and authority metadata
- per-question LLM context packets that expose missing facts instead of inventing them
- Quartz 5 explorer, search, backlinks, graph and Obsidian-flavoured Markdown support

## Install and verify

Requirements: Node.js 22 or later and npm 10.9.2 or later.

```bash
npm ci
npm run ontology:notes
npm run ontology:build
npm test
```

The ontology build writes:

- `generated/graph.json`
- `generated/id-registry.json`
- `generated/validation-report.md`
- `generated/question-context/*.json`
- `content/07_Other/_generated/` Quartz-readable reports and context pages

## Use the vault

Open `content/` as the Obsidian vault. Start at `content/HOME-MDR-ONTOLOGY-eu-mdr-manufacturer-ontology.md`.

## Build and serve the Quartz site

```bash
npm run serve
```

Then open the local address printed by Quartz. The preview uses `public-dev/`, so a production build cannot replace assets used by the running server. A non-serving production build is available through `npm run build`, which validates the ontology before Quartz renders it to `public/`.

## Generate an answer context packet

```bash
npm run ontology:context -- CQ-02-01 DEVC-0001 2026-08-14
```

Arguments are competency-question ID, subject ID and relevant date. Facts absent from the resulting packet are listed in `missing_facts`; they are not silently inferred.

## Authoring workflow

1. Add or edit canonical notes under `content/`, preserving globally unique stable IDs.
2. Use defined ontology predicates for semantic wikilinks.
3. Add provenance to rules, assertions and regulatory decisions.
4. Run `npm run ontology:notes` after changing the generated infusion-pump example set or its cross-linking rules.
5. Run `npm run ontology:build` and `npm test` before review.
6. Treat generated files as reproducible indexes, never as the only location of regulatory meaning.

`npm run ontology:seed` is intended only for a new empty checkout. It refuses to overwrite existing notes unless explicitly called with `--force`.

## Project specification

The normative implementation specification is `eu-mdr-manufacturer-ontology-specification.md`.
