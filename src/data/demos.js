import demoData from './demos.json'
import taxonomyData from './demo-taxonomies.json'
import assetManifest from './demo-assets.generated.json'

export const demoIndustries = taxonomyData.industries.map(({ id, label }) => ({ slug: id, name: label }))
export const demoServiceTypes = taxonomyData.services.map(({ id, label }) => ({ slug: id, name: label }))

const assetsFor = (slug) => assetManifest[slug] ?? { cover: null, desktop: [], mobile: [] }

const normalizeDemo = (raw) => {
  const assets = assetsFor(raw.slug)
  return {
    ...raw,
    id: raw.slug,
    style: raw.design?.join(' · ') ?? '',
    tags: raw.design ?? [],
    coverImage: assets.cover ?? null,
    screenshots: assets.desktop ?? [],
    mobileScreenshots: assets.mobile ?? [],
  }
}

export const demoCatalog = demoData.demos.map(normalizeDemo)
export const getPublicDemos = () => demoCatalog.filter((demo) => demo.visibility === 'public' && demo.status === 'concept')
export const getDemoIndustry = (slug) => demoIndustries.find((item) => item.slug === slug) ?? null
export const getDemoServiceType = (slug) => demoServiceTypes.find((item) => item.slug === slug) ?? null
export const getDemoById = (id) => demoCatalog.find((demo) => demo.id === id) ?? null
export const getDemoByRoute = (industry, slug) => getPublicDemos().find((demo) => demo.industry === industry && demo.slug === slug) ?? null
export const getFeaturedDemos = (limit) => {
  const items = getPublicDemos().filter((demo) => demo.featured).sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  return typeof limit === 'number' ? items.slice(0, limit) : items
}
export const filterDemos = ({ industry, service, status = 'concept', query } = {}) => {
  const normalizedQuery = query?.trim().toLowerCase()
  return demoCatalog.filter((demo) => {
    if (demo.visibility !== 'public') return false
    if (industry && demo.industry !== industry) return false
    if (service && demo.service !== service) return false
    if (status && demo.status !== status) return false
    if (!normalizedQuery) return true
    const searchable = [demo.title, demo.description, ...demo.tags, ...demo.bestFor, ...demo.features, ...demo.pages, getDemoIndustry(demo.industry)?.name, getDemoServiceType(demo.service)?.name].filter(Boolean).join(' ').toLowerCase()
    return searchable.includes(normalizedQuery)
  }).sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
}
export const getRelatedDemos = (currentDemo, limit = 3) => {
  if (!currentDemo) return []
  const currentTags = new Set(currentDemo.tags ?? [])
  return getPublicDemos().filter((demo) => demo.slug !== currentDemo.slug).map((demo) => ({
    demo,
    score: (demo.industry === currentDemo.industry ? 4 : 0) + (demo.service === currentDemo.service ? 3 : 0) + (demo.tags ?? []).filter((tag) => currentTags.has(tag)).length + ((demo.priority ?? 0) / 1000),
  })).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map((item) => item.demo)
}
export const getDemoRoute = (demo) => `/demo/${demo.industry}/${demo.slug}`
export const getRelatedServiceRoute = (demo) => `/layanan/${demo.service}`
