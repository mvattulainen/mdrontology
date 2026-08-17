import { readFile, readdir, stat } from "node:fs/promises"
import path from "node:path"

const outputRoot = path.resolve(process.argv[2] ?? "public")

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(target))
    else if (entry.isFile()) files.push(target)
  }
  return files
}

const exists = async (target) => {
  try {
    return (await stat(target)).isFile()
  } catch {
    return false
  }
}

const sourceUrl = (file) => {
  const relative = path.relative(outputRoot, file).replaceAll("\\", "/")
  if (relative === "index.html") return "/"
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`
  return `/${relative.replace(/\.html$/, "")}`
}

const files = await walk(outputRoot)
const htmlFiles = files.filter((file) => file.endsWith(".html"))
const broken = []
let checked = 0

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8")
  for (const match of html.matchAll(/\bhref=(?:"([^"]*)"|'([^']*)')/gi)) {
    const href = (match[1] ?? match[2]).replaceAll("&amp;", "&")
    if (!href || href.startsWith("#") || /^(?:mailto|tel|data|javascript):/i.test(href) || href.startsWith("//")) continue
    let resolved
    try {
      resolved = new URL(href, `http://local.test${sourceUrl(file)}`)
    } catch {
      continue
    }
    if (resolved.hostname !== "local.test") continue
    let pathname
    try {
      pathname = decodeURIComponent(resolved.pathname)
    } catch {
      pathname = resolved.pathname
    }
    const relativeTarget = pathname.replace(/^\/+/, "")
    const baseTarget = path.join(outputRoot, ...relativeTarget.split("/"))
    const candidates = pathname.endsWith("/")
      ? [path.join(baseTarget, "index.html")]
      : [baseTarget, `${baseTarget}.html`, path.join(baseTarget, "index.html")]
    checked += 1
    if (!(await Promise.any(candidates.map(async (candidate) => (await exists(candidate)) ? candidate : Promise.reject())).catch(() => null))) {
      broken.push({ source: path.relative(outputRoot, file).replaceAll("\\", "/"), href, target: pathname })
    }
  }
}

const unique = [...new Map(broken.map((item) => [`${item.source}\0${item.href}`, item])).values()]
console.log(`Checked ${checked} internal links across ${htmlFiles.length} rendered pages.`)
if (unique.length) {
  console.error(`Found ${unique.length} broken internal links:`)
  for (const item of unique.slice(0, 200)) console.error(`- ${item.source} -> ${item.href} (${item.target})`)
  if (unique.length > 200) console.error(`- ...and ${unique.length - 200} more`)
  process.exitCode = 1
} else {
  console.log("No broken internal links found.")
}
