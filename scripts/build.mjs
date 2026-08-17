import { compileOntology } from "./lib/ontology.mjs"

const api = await compileOntology()
const { errors, warnings } = api.graph.diagnostics
console.log(`Ontology: ${api.graph.nodes.length} nodes, ${api.graph.edges.length} edges, ${api.graph.derived_assertions.length} derived assertions, ${api.graph.compliance_gaps.length} blocking gaps, ${api.graph.advisory_findings.length} advisory findings.`)
console.log(`Diagnostics: ${errors.length} error(s), ${warnings.length} warning(s).`)
if (errors.length) {
  for (const error of errors.slice(0, 30)) console.error(`${error.code}: ${error.id ?? error.path}: ${error.message}`)
  process.exitCode = 1
}
