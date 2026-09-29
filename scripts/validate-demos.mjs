import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const data = JSON.parse(fs.readFileSync(path.join(root, 'src/data/demos.json'), 'utf8'))
const tax = JSON.parse(fs.readFileSync(path.join(root, 'src/data/demo-taxonomies.json'), 'utf8'))
const demos = data.demos ?? []
const industries = new Set(tax.industries.map((x) => x.id))
const services = new Set(tax.services.map((x) => x.id))
const visibility = new Set(tax.visibility)
const statuses = new Set(tax.status)
let errors = 0, warnings = 0
const seen = new Set()
const error = (slug, msg) => { errors++; console.error(`ERROR [${slug || 'unknown'}] ${msg}`) }
const warn = (slug, msg) => { warnings++; console.warn(`WARN  [${slug || 'unknown'}] ${msg}`) }
for (const d of demos) {
  const slug = d.slug
  if (!slug) error(slug, 'slug wajib diisi')
  if (!d.title) error(slug, 'title wajib diisi')
  if (slug && seen.has(slug)) error(slug, 'slug harus unik')
  seen.add(slug)
  if (!industries.has(d.industry)) error(slug, `industry tidak valid: ${d.industry}`)
  if (!services.has(d.service)) error(slug, `service tidak valid: ${d.service}`)
  if (!visibility.has(d.visibility)) error(slug, `visibility tidak valid: ${d.visibility}`)
  if (!statuses.has(d.status)) error(slug, `status tidak valid: ${d.status}`)
  if (!d.description || d.description.length < 50) warn(slug, 'description terlalu pendek')
  if (!d.liveDemoUrl) warn(slug, 'liveDemoUrl belum tersedia')
  const assetDir = path.join(root, 'public/demos', slug || '')
  if (!fs.existsSync(assetDir)) warn(slug, 'folder asset belum tersedia')
  else {
    const files = fs.readdirSync(assetDir)
    const cover = files.some((f) => /^cover\.(avif|webp|png|jpe?g)$/i.test(f))
    const desktop = files.some((f) => /^desktop-01\.(avif|webp|png|jpe?g)$/i.test(f))
    const mobile = files.some((f) => /^mobile-01\.(avif|webp|png|jpe?g)$/i.test(f))
    if (!cover && !desktop) warn(slug, 'cover.webp/desktop-01 belum tersedia; UI memakai placeholder')
    if (!mobile) warn(slug, 'mobile screenshot belum tersedia')
  }
}
console.log(`\n${demos.length} demo checked — ${errors} error(s), ${warnings} warning(s).`)
if (errors) process.exit(1)
