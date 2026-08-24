export type NavLink = { label: string; href: string }

export const mainNav: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

export const footerServices: NavLink[] = [
  { label: 'Web & Digital', href: '/services/web-development' },
  { label: 'Growth', href: '/services/seo' },
  { label: 'Social & Content', href: '/services/social-media' },
  { label: 'Lead Generation', href: '/services/lead-generation' },
  { label: 'AI & Automation', href: '/services/ai-automation' },
  { label: 'Analytics & Optimization', href: '/services/analytics' },
  { label: 'Brand & Creative', href: '/services/brand-creative' },
]

export const footerCompany: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]
