export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...params })
  window.dispatchEvent(new CustomEvent('infitech:analytics', { detail: { name, params } }))
}
