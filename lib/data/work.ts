export type WorkCategory =
  | 'Web'
  | 'Brand'
  | 'Social'
  | 'Content'
  | 'Growth'
  | 'E-commerce'
  | 'Automation'

export type Project = {
  slug: string
  title: string
  client: string
  category: WorkCategory
  categories: WorkCategory[]
  summary: string
  image: string
  services: string[]
  // Detail fields — realistic placeholders, easily replaced with real project data.
  projectType: string
  challenge: string
  strategy: string
  execution: string[]
  deliverables: string[]
  gallery: string[]
  /** Only populate with real, verified outcomes. Left empty by default. */
  results: { label: string; value: string }[]
  /** Only populate with a real, attributed testimonial. */
  testimonial?: { quote: string; name: string; role: string }
}

/**
 * PLACEHOLDER portfolio. Copy is tasteful and generic where real project
 * detail is unavailable — replace fields with verified information later.
 * No fabricated statistics or results are included.
 */
export const projects: Project[] = [
  {
    slug: 'for-the-love-of-endo',
    title: 'For The Love Of Endo',
    client: 'For The Love Of Endo Podcast',
    category: 'Content',
    categories: ['Content', 'Brand', 'Social'],
    summary:
      'Content and brand support for a purpose-driven podcast building an engaged, informed community.',
    image: '/images/work-podcast.png',
    services: ['content-production', 'social-media', 'brand-creative'],
    projectType: 'Podcast brand & content system',
    challenge:
      'A meaningful, expertise-led podcast needed a consistent visual identity and a repeatable way to turn long-form episodes into shareable content that grows its audience.',
    strategy:
      'We shaped a recognisable brand system and a content engine that repurposes each episode into short-form video, audiograms and social assets — keeping the presence consistent between releases.',
    execution: [
      'Defined brand direction and episode templates',
      'Built a repeatable short-form content workflow',
      'Produced social cut-downs and supporting graphics',
      'Established a consistent publishing cadence',
    ],
    deliverables: ['Brand & episode templates', 'Short-form video edits', 'Social content system'],
    gallery: ['/images/work-podcast.png', '/images/work-social.png', '/images/work-brand.png'],
    results: [],
  },
  {
    slug: 'in-context-learning-solutions',
    title: 'In Context Learning Solutions',
    client: 'In Context Learning Solutions',
    category: 'Web',
    categories: ['Web', 'Brand'],
    summary:
      'A clear, credible digital presence for a learning solutions provider focused on real-world outcomes.',
    image: '/images/work-learning.png',
    services: ['web-development', 'brand-creative', 'seo'],
    projectType: 'Website & digital presence',
    challenge:
      'The organisation needed a professional website that communicated its approach clearly and made it easy for prospective clients to understand and enquire.',
    strategy:
      'We structured the messaging around outcomes and clarity, then designed and built a fast, accessible site with a foundation for search visibility and future growth.',
    execution: [
      'Clarified positioning and site structure',
      'Designed a clean, credible visual system',
      'Built a fast, accessible, responsive site',
      'Established SEO and analytics foundations',
    ],
    deliverables: ['Responsive website', 'Content structure', 'SEO foundation'],
    gallery: ['/images/work-learning.png', '/images/insight-web.png', '/images/hero-data.png'],
    results: [],
  },
  {
    slug: 'commerce-brand-launch',
    title: 'Commerce Brand Launch',
    client: 'Placeholder E-commerce Brand',
    category: 'E-commerce',
    categories: ['E-commerce', 'Web', 'Growth'],
    summary:
      'A store experience and acquisition foundation for a modern consumer brand entering the market.',
    image: '/images/work-ecommerce.png',
    services: ['web-development', 'paid-advertising', 'email-marketing'],
    projectType: 'E-commerce build & launch',
    challenge:
      'A new consumer brand needed a store that reflected its quality and a clear plan to acquire and retain customers profitably from launch.',
    strategy:
      'We built a fast, conversion-focused store and set up the acquisition and lifecycle systems needed to turn first-time visitors into repeat customers.',
    execution: [
      'Designed and built a conversion-focused store',
      'Implemented tracking and analytics',
      'Set up lifecycle email flows',
      'Prepared paid acquisition campaigns',
    ],
    deliverables: ['E-commerce store', 'Lifecycle email flows', 'Campaign setup'],
    gallery: ['/images/work-ecommerce.png', '/images/industry-ecommerce.png', '/images/work-growth.png'],
    results: [],
  },
  {
    slug: 'brand-identity-system',
    title: 'Brand Identity System',
    client: 'Placeholder Brand Project',
    category: 'Brand',
    categories: ['Brand'],
    summary:
      'A complete visual identity and guideline system for a business ready to look the part.',
    image: '/images/work-brand.png',
    services: ['brand-creative'],
    projectType: 'Brand identity & guidelines',
    challenge:
      'The business had outgrown its original look and needed a cohesive identity that could scale across every channel with confidence.',
    strategy:
      'We defined a clear brand direction and built a flexible identity system with guidelines the team could apply consistently everywhere.',
    execution: [
      'Established brand direction and positioning',
      'Designed logo suite and visual system',
      'Created templates and asset library',
      'Documented brand guidelines',
    ],
    deliverables: ['Logo suite', 'Visual identity system', 'Brand guidelines'],
    gallery: ['/images/work-brand.png', '/images/about-studio.png', '/images/insight-web.png'],
    results: [],
  },
  {
    slug: 'growth-website-redesign',
    title: 'Growth Website Redesign',
    client: 'Placeholder Web Project',
    category: 'Web',
    categories: ['Web', 'Growth'],
    summary:
      'A performance-focused redesign that turned a dated site into a modern growth platform.',
    image: '/images/insight-web.png',
    services: ['web-development', 'conversion-optimization', 'seo'],
    projectType: 'Website redesign',
    challenge:
      'A slow, dated website was holding back both search visibility and conversion, and was difficult for the team to maintain.',
    strategy:
      'We rebuilt the site on a modern stack with performance, accessibility and conversion designed in from the start, and gave the team an easy way to manage it.',
    execution: [
      'Audited performance, SEO and UX',
      'Redesigned around key user journeys',
      'Rebuilt on a modern, fast framework',
      'Optimized Core Web Vitals and tracking',
    ],
    deliverables: ['Redesigned website', 'Performance foundation', 'CMS handover'],
    gallery: ['/images/insight-web.png', '/images/hero-technology.png', '/images/work-growth.png'],
    results: [],
  },
  {
    slug: 'social-content-engine',
    title: 'Social Content Engine',
    client: 'Placeholder Social Project',
    category: 'Social',
    categories: ['Social', 'Content'],
    summary:
      'A repeatable content and social system that turned expertise into a consistent presence.',
    image: '/images/work-social.png',
    services: ['social-media', 'content-production'],
    projectType: 'Social & content system',
    challenge:
      'The business had valuable expertise but no consistent way to produce and publish content across its channels.',
    strategy:
      'We built a content engine — pillars, calendar and production workflow — that turned existing knowledge into a steady stream of on-brand content.',
    execution: [
      'Defined content pillars and cadence',
      'Built a short-form production workflow',
      'Produced and scheduled ongoing content',
      'Reported on performance and iterated',
    ],
    deliverables: ['Content strategy', 'Monthly content system', 'Performance reporting'],
    gallery: ['/images/work-social.png', '/images/work-podcast.png', '/images/insight-ai.png'],
    results: [],
  },
]

export const workCategories: (WorkCategory | 'All')[] = [
  'All',
  'Web',
  'Brand',
  'Social',
  'Content',
  'Growth',
  'E-commerce',
  'Automation',
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
