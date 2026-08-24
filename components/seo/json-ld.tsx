import { siteConfig } from '@/lib/site'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        slogan: siteConfig.tagline,
        logo: `${siteConfig.url}/images/og-default.png`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        areaServed: siteConfig.regions,
        contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: siteConfig.email, availableLanguage: ['English'] },
        knowsAbout: [
          'Web Development',
          'SEO',
          'Paid Advertising',
          'Social Media Marketing',
          'Lead Generation',
          'AI Automation',
          'Brand Strategy',
          'Digital Strategy',
        ],
      }}
    />
  )
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      }}
    />
  )
}

export function WebPageJsonLd({ title, description, path }: { title: string; description?: string; path: string }) {
  return <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: `${siteConfig.url}${path}`, isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url }, about: { '@type': 'Organization', name: siteConfig.name } }} />
}

export function ServiceJsonLd({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        serviceType: name,
        url: `${siteConfig.url}/services/${slug}`,
        areaServed: siteConfig.regions,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.href}`,
        })),
      }}
    />
  )
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  date,
  image,
}: {
  title: string
  description: string
  slug: string
  date: string
  image: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        image: `${siteConfig.url}${image}`,
        url: `${siteConfig.url}/insights/${slug}`,
        author: { '@type': 'Organization', name: siteConfig.name },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/og-default.png` },
        },
      }}
    />
  )
}
