import fs from 'node:fs'
const demoData=JSON.parse(fs.readFileSync('src/data/demos.json','utf8'))
const base='https://infitechdigi.com'
const staticRoutes=['/','/solusi','/layanan','/demo','/portfolio','/harga','/tentang','/kontak']
const serviceSlugs=['mulai-digital','landing-page','company-profile','toko-online','sistem-bisnis','custom-development','managed-website']
const urls=[...staticRoutes,...serviceSlugs.map(s=>`/layanan/${s}`),...(demoData.demos||[]).filter(d=>d.visibility==='public'&&d.status==='concept').map(d=>`/demo/${d.industry}/${d.slug}`)]
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${base}${u}</loc></url>`).join('\n')}\n</urlset>\n`
fs.writeFileSync('public/sitemap.xml',xml); console.log(`Generated sitemap with ${urls.length} URLs.`)
