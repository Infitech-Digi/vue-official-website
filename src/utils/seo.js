import { serviceDetails } from '../data/site'
import { getDemoByRoute, getDemoIndustry } from '../data/demos'

export const SITE_URL = 'https://infitechdigi.com'
export const DEFAULT_OG = `${SITE_URL}/og-default.png`
export function resolveSeo(to){
  let title = to.meta.title || 'InfitechDigi — Digital Solution Partner'
  let description = to.meta.description || 'Solusi digital untuk membantu bisnis bertumbuh.'
  let image = DEFAULT_OG
  if(to.name === 'service-detail'){
    const d=serviceDetails[to.params.slug]
    if(d){ title=`${d.title} | InfitechDigi`; description=d.lead }
  }
  if(to.name === 'demo-detail'){
    const d=getDemoByRoute(to.params.industry,to.params.slug)
    if(d){ const ind=getDemoIndustry(d.industry)?.name || d.industry; title=`${d.title} — Demo Website ${ind} | InfitechDigi`; description=d.description; image=d.coverImage ? `${SITE_URL}${d.coverImage}` : DEFAULT_OG }
  }
  return {title,description,image,url:`${SITE_URL}${to.path}`}
}
export function applySeo(to){
  const seo=resolveSeo(to); document.title=seo.title
  const meta=(selector,attrs,content)=>{let el=document.head.querySelector(selector);if(!el){el=document.createElement('meta');Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));document.head.appendChild(el)}el.setAttribute('content',content)}
  meta('meta[name="description"]',{name:'description'},seo.description)
  meta('meta[name="robots"]',{name:'robots'},to.meta.noindex?'noindex,nofollow':'index,follow')
  meta('meta[property="og:title"]',{property:'og:title'},seo.title); meta('meta[property="og:description"]',{property:'og:description'},seo.description); meta('meta[property="og:image"]',{property:'og:image'},seo.image); meta('meta[property="og:url"]',{property:'og:url'},seo.url); meta('meta[property="og:type"]',{property:'og:type'},'website')
  meta('meta[name="twitter:card"]',{name:'twitter:card'},'summary_large_image'); meta('meta[name="twitter:title"]',{name:'twitter:title'},seo.title); meta('meta[name="twitter:description"]',{name:'twitter:description'},seo.description); meta('meta[name="twitter:image"]',{name:'twitter:image'},seo.image)
  let c=document.head.querySelector('link[rel="canonical"]'); if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)} c.href=seo.url
  return seo
}
