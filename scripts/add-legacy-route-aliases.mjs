import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"

const contentRoot = path.join(process.cwd(), "content")

function legacyPaths(relativePath) {
  const slashPath = relativePath.replaceAll(path.sep, "/").replace(/\.md$/, "")
  const mappings = [
    ["00-Ontology", ["01-ontology"]],
    ["02-Sources", ["14-sources"]],
    ["06-Infpump FlowGuard ontology notes", ["18-ontology-notes", "03-Ontology notes"]],
    ["04-Views", ["16-views"]],
    ["05-Questions", ["15-questions"]],
    ["07_Other/Use-case demonstrations", ["17-use-cases", "06-Use case demonstrations"]],
    ["07_Other/00-Meta", ["00-meta"]],
    ["07_Other/_generated", ["_generated"]],
  ]
  const instanceMatch = slashPath.match(/^01-Ontology instances\/(0[2-9]|1[0-3])-(.+)$/)
  if (instanceMatch) return [`${instanceMatch[1]}-${instanceMatch[2]}`.replace(/\/index$/, "")]
  for (const [current, previousPaths] of mappings) {
      if (slashPath === current || slashPath.startsWith(`${current}/`)) {
        return previousPaths.map((previous) => slashPath.replace(current, previous).replace(/\/index$/, ""))
      }
  }
  return []
}

async function markdownFiles(directory) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await markdownFiles(target))
    else if (entry.name.endsWith(".md")) files.push(target)
  }
  return files
}

let changed = 0
for (const file of await markdownFiles(contentRoot)) {
  const historicalAliases = legacyPaths(path.relative(contentRoot, file))
  if (!historicalAliases.length) continue
  const source = await readFile(file, "utf8")
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) continue
  let data
  try {
    data = JSON.parse(match[1])
  } catch {
    continue
  }
  const aliases = Array.isArray(data.aliases) ? data.aliases : data.aliases ? [data.aliases] : []
  const missingAliases = historicalAliases.filter((alias) => !aliases.includes(alias))
  if (!missingAliases.length) continue
  data.aliases = [...aliases, ...missingAliases]
  const updated = source.replace(match[0], `---\n${JSON.stringify(data, null, 2)}\n---`)
  await writeFile(file, updated, "utf8")
  changed += 1
}

console.log(`Added legacy route aliases to ${changed} Markdown files.`)
