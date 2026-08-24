export const siteConfig = {
  name: 'Romine Labs',
  legalName: 'Romine Labs',
  tagline: 'Digital Growth. Creative. Technology.',
  description:
    'Romine Labs is an international digital growth, technology and creative agency. We combine strategy, web development, SEO, paid media, content, brand and AI automation to help ambitious businesses build, launch and scale.',
  // Update to the production domain when live.
  url: 'https://www.rominelabs.com',
  email: 'hello@rominelabs.com',
  ogImage: '/images/og-default.png',
  regions: ['United States', 'United Kingdom', 'Canada', 'Australia', 'UAE', 'Global'],
  social: {},
} as const

export type SiteConfig = typeof siteConfig
