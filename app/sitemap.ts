import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { services } from '@/lib/data/services'
import { subservices } from '@/lib/data/subservices'
import { projects } from '@/lib/data/work'
import { industries } from '@/lib/data/industries'
import { articles } from '@/lib/data/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/work', '/industries', '/insights', '/about', '/contact']
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : 0.7 })),
    ...services.map((item) => ({ url: `${siteConfig.url}/services/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...subservices.map((item) => ({ url: `${siteConfig.url}/services/specialties/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.65 })),
    ...projects.map((item) => ({ url: `${siteConfig.url}/work/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...industries.map((item) => ({ url: `${siteConfig.url}/industries/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...articles.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(item.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
