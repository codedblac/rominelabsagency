export type Industry = {
  slug: string
  name: string
  blurb: string
  image: string
  hasPage: boolean
  intro?: string
  challenges?: string[]
  services?: string[]
}

/**
 * Industries shown in the grid. `hasPage: true` items have dedicated routes.
 * Add `hasPage: true` and the detail fields to promote an industry to its own page.
 */
export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    blurb: 'Digital systems that build trust and bring the right patients to your practice.',
    image: '/images/industry-healthcare.png',
    hasPage: true,
    intro:
      'Healthcare businesses win on trust, clarity and accessibility. We help practices and health brands build credible digital experiences, rank for the treatments they offer and convert enquiries into booked patients.',
    challenges: [
      'Standing out in a trust-sensitive market',
      'Ranking locally for high-intent treatments',
      'Converting website visitors into booked patients',
      'Maintaining a consistent, professional presence',
    ],
    services: ['web-development', 'seo', 'lead-generation', 'brand-creative'],
  },
  {
    slug: 'dental',
    name: 'Dental',
    blurb: 'Patient-focused websites, local SEO and campaigns that fill the schedule.',
    image: '/images/industry-dental.png',
    hasPage: true,
    intro:
      'Dental practices compete on reputation and local visibility. We build modern practice websites, dominate local search and run campaigns that keep the appointment book full.',
    challenges: [
      'Competing local practices for the same patients',
      'Turning a dated website into a booking engine',
      'Managing reviews and reputation',
      'Attracting higher-value treatment enquiries',
    ],
    services: ['web-development', 'seo', 'paid-advertising', 'lead-generation'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    blurb: 'Aspirational digital experiences that generate qualified buyer and seller leads.',
    image: '/images/industry-realestate.png',
    hasPage: true,
    intro:
      'Real estate is a visual, high-consideration purchase. We craft premium digital experiences and lead systems that attract serious buyers and sellers and nurture them to conversation.',
    challenges: [
      'Presenting properties and brand at a premium level',
      'Generating and qualifying buyer and seller leads',
      'Standing out in a crowded local market',
      'Following up consistently at scale',
    ],
    services: ['web-development', 'lead-generation', 'crm-automation', 'social-media'],
  },
  {
    slug: 'technology',
    name: 'Technology & SaaS',
    blurb: 'Growth systems for product-led and sales-led technology companies.',
    image: '/images/industry-technology.png',
    hasPage: true,
    intro:
      'Technology and SaaS companies need clarity and momentum. We help you articulate your product, build a conversion-focused site and drive qualified demand across search, paid and content.',
    challenges: [
      'Explaining a complex product simply',
      'Generating qualified pipeline efficiently',
      'Competing for attention in a fast market',
      'Aligning brand, site and growth motion',
    ],
    services: ['web-development', 'seo', 'paid-advertising', 'conversion-optimization'],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    blurb: 'Store experiences and acquisition systems built to sell and retain.',
    image: '/images/industry-ecommerce.png',
    hasPage: true,
    intro:
      'E-commerce lives and dies on experience and repeat purchase. We build fast, high-converting stores and the acquisition and retention systems that grow revenue profitably.',
    challenges: [
      'Converting traffic into first purchases',
      'Acquiring customers profitably',
      'Driving repeat purchase and loyalty',
      'Standing out in a saturated category',
    ],
    services: ['web-development', 'paid-advertising', 'email-marketing', 'conversion-optimization'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    blurb: 'Credible positioning and lead systems for firms that sell expertise.',
    image: '/images/industry-professional.png',
    hasPage: true,
    intro:
      'Professional services firms are chosen on credibility and clarity. We help law, finance and consulting firms present authority, rank for their expertise and turn enquiries into clients.',
    challenges: [
      'Communicating authority and trust',
      'Ranking for competitive, high-value terms',
      'Generating qualified enquiries',
      'Maintaining a consistent professional brand',
    ],
    services: ['web-development', 'seo', 'brand-creative', 'lead-generation'],
  },
  { slug: 'finance', name: 'Finance', blurb: 'Trusted digital presence for finance and fintech brands.', image: '/images/industry-professional.png', hasPage: false },
  { slug: 'legal', name: 'Legal', blurb: 'Authority-driven websites and search visibility for law firms.', image: '/images/industry-professional.png', hasPage: false },
  { slug: 'education', name: 'Education', blurb: 'Enrolment-focused digital experiences and content systems.', image: '/images/industry-technology.png', hasPage: false },
  { slug: 'hospitality', name: 'Hospitality', blurb: 'Experiences and campaigns that drive bookings and loyalty.', image: '/images/industry-realestate.png', hasPage: false },
  { slug: 'personal-brands', name: 'Personal Brands', blurb: 'Content and presence systems that scale your influence.', image: '/images/work-podcast.png', hasPage: false },
  { slug: 'creators', name: 'Professional Creators', blurb: 'Production and growth engines for serious creators.', image: '/images/work-social.png', hasPage: false },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}

export const industriesWithPages = industries.filter((i) => i.hasPage)
