import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const demosDir = path.join(root, 'public', 'demos')
const output = path.join(root, 'src', 'data', 'demo-assets.generated.json')
const imagePattern = /\.(avif|webp|png|jpe?g)$/i

fs.mkdirSync(demosDir, { recursive: true })
const manifest = {}
for (const entry of fs.readdirSync(demosDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  const dir = path.join(demosDir, entry.name)
  const files = fs.readdirSync(dir).filter((f) => imagePattern.test(f)).sort()
  const cover = files.find((f) => /^cover\./i.test(f)) ?? files.find((f) => /^desktop-01\./i.test(f)) ?? null
  manifest[entry.name] = {
    cover: cover ? `/demos/${entry.name}/${cover}` : null,
    desktop: files.filter((f) => /^desktop-\d+\./i.test(f)).map((f) => `/demos/${entry.name}/${f}`),
    mobile: files.filter((f) => /^mobile-\d+\./i.test(f)).map((f) => `/demos/${entry.name}/${f}`)
  }
}
fs.writeFileSync(output, JSON.stringify(manifest, null, 2) + '\n')
console.log(`Demo asset manifest: ${Object.keys(manifest).length} folder(s) indexed.`)
