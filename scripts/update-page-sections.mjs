import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { loadEntityDefinitions } from "./lib/entity-definitions.mjs"

const root = process.cwd()
const contentRoot = path.join(root, "content")
const getEntityDefinition = await loadEntityDefinitions(root)

async function markdownFiles(folder) {
  const entries = await readdir(folder, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(folder, entry.name)
    return entry.isDirectory() ? markdownFiles(target) : entry.isFile() && entry.name.endsWith(".md") ? [target] : []
  }))
  return nested.flat()
}

function removeSection(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const pattern = new RegExp(`\\n## ${escaped}\\s*\\r?\\n[\\s\\S]*?(?=\\n## |$)`, "g")
  return markdown.replace(pattern, "")
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) return null
  return { match, data: JSON.parse(match[1]), body: markdown.slice(match[0].length) }
}

let changed = 0
let classPages = 0
const files = await markdownFiles(contentRoot)
for (const file of files) {
  const original = await readFile(file, "utf8")
  let updated = removeSection(original, "Explore next")
  updated = removeSection(updated, "Interpretation guardrail")

  const relative = path.relative(contentRoot, file).replaceAll("\\", "/")
  if (relative.startsWith("00-Ontology/classes/")) {
    const parsed = parseFrontmatter(updated)
    if (!parsed?.data?.class_key) throw new Error(`Ontology class page lacks class_key frontmatter: ${relative}`)
    const { definition, terminologyType } = getEntityDefinition(parsed.data.class_key)
    parsed.data.terminology_type = terminologyType
    parsed.data.definition = definition

    let body = parsed.body
    body = body.replace(/^Semantic class `[^`]+`\.\s*\r?\n+/m, "")
    body = removeSection(`\n${body}`, "Purpose").slice(1)
    body = removeSection(`\n${body}`, "Key relationships").slice(1)
    body = removeSection(`\n${body}`, "Referenced by").slice(1)
    body = removeSection(`\n${body}`, "Definition").slice(1)

    const titleMatch = body.match(/^# .+\r?\n/m)
    if (!titleMatch) throw new Error(`Ontology class page lacks H1 title: ${relative}`)
    const definitionBlock = `\n## Definition\n\n**Terminology type:** ${terminologyType}\n\n${definition}\n`
    body = body.slice(0, titleMatch.index + titleMatch[0].length) + definitionBlock + body.slice(titleMatch.index + titleMatch[0].length).replace(/^\s+/, "\n")
    updated = `---\n${JSON.stringify(parsed.data, null, 2)}\n---\n\n${body.trim()}\n`
    classPages += 1
  }

  if (updated !== original) {
    await writeFile(file, updated.replace(/\r\n/g, "\n"), "utf8")
    changed += 1
  }
}

console.log(`Updated ${changed} Markdown pages, including ${classPages} ontology-class pages.`)
