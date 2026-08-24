export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  author: string
  role: string
  date: string
  readingTime: string
  image: string
  /** Body as an array of blocks — easy to swap for CMS content later. */
  body: { type: 'p' | 'h2'; text: string }[]
}

export const insightCategories = [
  'Digital Strategy',
  'SEO',
  'Web Development',
  'AI & Automation',
  'Social Media',
  'Lead Generation',
  'Branding',
  'Technology',
]

/**
 * PLACEHOLDER editorial content. Titles and structure are realistic; the copy
 * is original and general, written to be replaced by a CMS or real articles.
 */
export const articles: Article[] = [
  {
    slug: 'what-a-digital-growth-agency-actually-does',
    title: 'What a Digital Growth Agency Actually Does',
    category: 'Digital Strategy',
    excerpt:
      'Beyond the buzzwords: how an integrated growth partner connects strategy, build, acquisition and automation into one system.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-01-12',
    readingTime: '6 min read',
    image: '/images/hero-data.png',
    body: [
      { type: 'p', text: 'A digital growth agency helps a business attract the right audience, convert attention into customers and scale what works — using strategy, technology, creative and marketing as one connected system rather than isolated tactics.' },
      { type: 'h2', text: 'Why integration matters' },
      { type: 'p', text: 'Most businesses do not lack tactics — they lack a system. A great website with no acquisition strategy underperforms. Strong ads pointing at a weak funnel waste budget. Integrated growth means every part reinforces the others.' },
      { type: 'h2', text: 'The shape of a growth system' },
      { type: 'p', text: 'It usually starts with strategy and positioning, moves into the digital build, then acquisition through search, paid and content, then conversion and automation, and finally measurement that feeds the next iteration.' },
      { type: 'p', text: 'The goal is compounding progress: each cycle makes the next one more efficient.' },
    ],
  },
  {
    slug: 'how-seo-helps-businesses-in-2026',
    title: 'How SEO Helps Businesses Compete in 2026',
    category: 'SEO',
    excerpt:
      'Search is changing, but intent is not. How modern SEO earns durable visibility across search and AI answer engines.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-01-20',
    readingTime: '7 min read',
    image: '/images/insight-seo.png',
    body: [
      { type: 'p', text: 'SEO helps businesses become easier to discover when people search for what they offer — building durable, high-intent traffic that compounds over time.' },
      { type: 'h2', text: 'Search and answer engines' },
      { type: 'p', text: 'Traditional search results now sit alongside AI answer engines. Both reward the same fundamentals: clear structure, genuine expertise and content that directly answers real questions.' },
      { type: 'h2', text: 'What durable SEO looks like' },
      { type: 'p', text: 'Technical health, intent-matched content, strong internal linking and structured data all help engines understand and trust your business. Done consistently, the results accumulate.' },
    ],
  },
  {
    slug: 'building-websites-that-convert',
    title: 'Building Websites That Convert, Not Just Impress',
    category: 'Web Development',
    excerpt:
      'A beautiful site is not enough. The principles behind pages that turn visitors into customers.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-02-02',
    readingTime: '5 min read',
    image: '/images/insight-web.png',
    body: [
      { type: 'p', text: 'A high-performing website balances brand and conversion. It looks credible, loads fast and guides visitors toward a clear next step.' },
      { type: 'h2', text: 'Clarity beats cleverness' },
      { type: 'p', text: 'Visitors decide quickly. The clearer your message and the more obvious the next action, the more of them convert.' },
      { type: 'h2', text: 'Performance is conversion' },
      { type: 'p', text: 'Speed, accessibility and stability are not just technical concerns — they directly affect how many visitors stay and act.' },
    ],
  },
  {
    slug: 'ai-automation-for-lean-teams',
    title: 'AI & Automation for Lean Teams',
    category: 'AI & Automation',
    excerpt:
      'How small teams use intelligent systems to respond faster, reduce manual work and scale operations.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-02-14',
    readingTime: '6 min read',
    image: '/images/insight-ai.png',
    body: [
      { type: 'p', text: 'AI and automation let lean teams do more without adding headcount — handling repetitive work, responding instantly and keeping systems in sync.' },
      { type: 'h2', text: 'Start with the bottleneck' },
      { type: 'p', text: 'The best automations remove a specific, repeated pain — slow lead response, manual follow-up or hours lost to reporting.' },
      { type: 'h2', text: 'Reliable beats impressive' },
      { type: 'p', text: 'Automation earns trust by being dependable. We design with clear guardrails so systems stay accurate as they scale.' },
    ],
  },
  {
    slug: 'social-presence-that-builds-trust',
    title: 'Building a Social Presence That Builds Trust',
    category: 'Social Media',
    excerpt:
      'Consistency and quality over virality: how to turn expertise into a presence people remember.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-02-24',
    readingTime: '5 min read',
    image: '/images/work-social.png',
    body: [
      { type: 'p', text: 'A strong social presence is built on consistency and clarity — a recognisable voice, useful content and a steady cadence.' },
      { type: 'h2', text: 'Pillars over posts' },
      { type: 'p', text: 'Defining a few clear content pillars keeps output focused and on-brand, and makes production far more repeatable.' },
      { type: 'h2', text: 'Repurpose everything' },
      { type: 'p', text: 'One long-form idea can become many pieces across formats and platforms — the foundation of a sustainable content engine.' },
    ],
  },
  {
    slug: 'lead-generation-systems-that-last',
    title: 'Lead Generation Systems That Last',
    category: 'Lead Generation',
    excerpt:
      'Why the businesses that win build systems, not one-off campaigns, to turn attention into pipeline.',
    author: 'Romine Labs',
    role: 'Editorial',
    date: '2026-03-05',
    readingTime: '6 min read',
    image: '/images/work-ecommerce.png',
    body: [
      { type: 'p', text: 'Durable lead generation is a system: a clear offer, pages that convert, qualification that protects sales time and follow-up that never drops a lead.' },
      { type: 'h2', text: 'Design the whole journey' },
      { type: 'p', text: 'Focusing on a single step — more traffic, a nicer page — rarely moves the needle. The system as a whole determines results.' },
      { type: 'h2', text: 'Follow-up wins deals' },
      { type: 'p', text: 'Most leads are lost in the gaps. Consistent, automated follow-up is often the highest-leverage improvement a business can make.' },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
