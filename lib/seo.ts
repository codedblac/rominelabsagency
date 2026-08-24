import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

export function createMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  type = 'website',
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}): Metadata {
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: 'en_US',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${title} — ${siteConfig.name}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [imageUrl] },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  }
}

export function titleFor(subject: string) {
  return `${subject} | ${siteConfig.name}`
}
