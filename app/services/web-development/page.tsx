'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  HeartHandshake,
  Layers3,
  Layout,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
  Database,
  BarChart3,
  Workflow,
  PenTool,
  ChevronRight,
  Cpu,
  CheckCircle2,
} from 'lucide-react'

// Reusable Eyebrow primitive
function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-[#C69A52]" />
      <span className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? 'text-[#D8B978]' : 'text-[#C69A52]'}`}>
        {children}
      </span>
    </div>
  )
}

const websiteTypes = [
  {
    id: 'professional',
    number: '01',
    title: 'Professional Business Websites',
    eyebrow: 'For businesses that need a stronger digital presence',
    description:
      'A strategically structured website for service businesses, startups, consultants, professional firms and growing companies that need to explain what they do clearly and turn visitors into enquiries.',
    image: '/images/business-websites.png',
    features: [
      'Strategic page architecture',
      'Services and solution pages',
      'Lead capture and contact flows',
      'Mobile-first responsive design',
      'SEO-ready content structure',
    ],
  },
  {
    id: 'corporate',
    number: '02',
    title: 'Corporate Websites',
    eyebrow: 'For established organizations and enterprises',
    description:
      'Scalable corporate websites that organize complex information into clear user journeys across services, departments, company information, careers, news, resources and stakeholder content.',
    image: '/images/corporate-websites.png',
    features: [
      'Multi-section information architecture',
      'Department and service structures',
      'CMS-driven content',
      'Careers and news functionality',
      'Analytics and conversion tracking',
    ],
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'Portfolio & Personal Websites',
    eyebrow: 'For experts, creatives and personal brands',
    description:
      'Digital portfolios designed to make expertise, work, achievements and credibility easy to discover—whether you are a creative, consultant, coach, developer, photographer or professional.',
    image: '/images/portfolio-websites.png',
    features: [
      'Project and case-study showcases',
      'Personal brand positioning',
      'Testimonials and credentials',
      'Enquiry and booking journeys',
      'Content and blog publishing',
    ],
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-commerce Websites',
    eyebrow: 'For businesses selling products online',
    description:
      'Complete digital commerce systems—not simply product pages. We build storefronts around discovery, trust, checkout, payments, orders, customer accounts and the operational needs behind online sales.',
    image: '/images/ecommerce-development.png',
    features: [
      'Product catalogues and categories',
      'Search and product filtering',
      'Cart and checkout experiences',
      'Payment and order workflows',
      'Customer accounts and analytics',
    ],
  },
  {
    id: 'landing',
    number: '05',
    title: 'Landing Pages',
    eyebrow: 'For campaigns, offers and lead generation',
    description:
      'Focused pages built around one objective: moving the right visitor toward a specific action. Ideal for paid campaigns, services, product launches, webinars, events and lead generation.',
    image: '/images/landing-pages.png',
    features: [
      'Conversion-focused messaging',
      'Clear CTA architecture',
      'Lead forms and integrations',
      'Campaign tracking',
      'A/B testing-ready structure',
    ],
  },
  {
    id: 'ngo',
    number: '06',
    title: 'NGO & Nonprofit Websites',
    eyebrow: 'For organizations that need to communicate impact',
    description:
      'Purpose-built nonprofit platforms that make programs, impact, resources and opportunities to support the organization easy to understand and act on.',
    image: '/images/ngo-websites.png',
    features: [
      'Programs and impact stories',
      'Donation journeys',
      'Volunteer and enquiry forms',
      'Reports and resources',
      'Events and news publishing',
    ],
  },
  {
    id: 'education',
    number: '07',
    title: 'Educational Websites',
    eyebrow: 'For schools, educators and learning organizations',
    description:
      'Web experiences that make programs, courses, admissions, resources and educational services easier for students, parents, partners and prospective customers to navigate.',
    image: '/images/education-websites.png',
    features: [
      'Programs and course structures',
      'Admissions and enquiry flows',
      'Resource libraries',
      'Events and announcements',
      'CMS and content management',
    ],
  },
  {
    id: 'membership',
    number: '08',
    title: 'Membership & Community Websites',
    eyebrow: 'For organizations with logged-in users',
    description:
      'Web platforms for organizations that need accounts, memberships, protected content, profiles, subscriptions or member-specific experiences.',
    image: '/images/membership-websites.png',
    features: [
      'User accounts and profiles',
      'Membership tiers',
      'Restricted content',
      'Subscriptions and payments',
      'Member dashboards',
    ],
  },
  {
    id: 'custom',
    number: '09',
    title: 'Custom Web Applications',
    eyebrow: 'When a standard website is not enough',
    description:
      'Browser-based applications built around unique business workflows—from dashboards and client portals to booking systems, SaaS products, internal tools and custom management systems.',
    image: '/images/custom-web-applications.png',
    features: [
      'Custom business workflows',
      'Dashboards and portals',
      'Database-backed applications',
      'API integrations',
      'Role-based experiences',
    ],
  },
  {
    id: 'campaign',
    number: '10',
    title: 'Campaigns & Microsites',
    eyebrow: 'For launches, events and special initiatives',
    description:
      'Focused digital experiences for campaigns, events, product launches, special initiatives and brand activations that need their own message, audience journey and conversion goal.',
    image: '/images/campaign-microsites.png',
    features: [
      'Campaign-specific messaging',
      'Event and registration flows',
      'Launch pages',
      'Tracking and analytics',
      'Fast deployment',
    ],
  },
]

const services = [
  ['Website Development', 'Strategy, UX, UI and development brought together into a complete digital experience.', Layout],
  ['Corporate Websites', 'Scalable information architecture for organizations with complex services and audiences.', Globe2],
  ['Landing Pages', 'Focused experiences built around a campaign, offer, lead or conversion objective.', Rocket],
  ['E-commerce Development', 'Online stores engineered around product discovery, checkout and operational workflows.', ShoppingBag],
  ['Custom Web Applications', 'Purpose-built browser applications for workflows that standard websites cannot handle.', Code2],
  ['Website Redesign', 'Modernize an outdated website while protecting useful content and SEO equity where possible.', Sparkles],
  ['Website Maintenance', 'Ongoing updates, monitoring, bug fixes, content changes, security and technical support.', ShieldCheck],
  ['Performance Optimization', 'Improve loading, rendering, image delivery, Core Web Vitals and technical efficiency.', Zap],
  ['UX/UI Design', 'Interfaces designed around hierarchy, usability, accessibility and the actions users need to take.', PenTool],
  ['CMS Development', 'Give your team a practical way to manage pages, articles, products and other content.', Database],
  ['API & Third-Party Integrations', 'Connect your website to CRMs, calendars, payment systems, marketing tools and other platforms.', Workflow],
  ['Conversion Optimization', 'Improve messaging, layouts, CTAs, forms and journeys using analytics and user behavior.', BarChart3],
]

const differentiators = [
  ['Strategy-led', 'The build starts with business goals, audiences, content architecture and user journeys—not code.'],
  ['Conversion-focused', 'Pages are structured to make the next useful action obvious, whether that is enquiring, booking, buying or learning.'],
  ['SEO-ready', 'Technical foundations are considered during architecture and development rather than bolted on after launch.'],
  ['AEO-ready', 'Clear content structures, entities, schema and direct answers help machines interpret what your organization offers.'],
  ['Fast by design', 'Performance is treated as part of the product through efficient assets, rendering and component architecture.'],
  ['Mobile-first', 'The experience is designed for the way people actually browse, enquire and buy today.'],
  ['Scalable', 'The architecture can accommodate new pages, features, integrations and content as the organization grows.'],
  ['Secure', 'Modern development practices, sensible integrations and security considerations are built into the implementation.'],
  ['Analytics-ready', 'Important actions can be measured so the website can be improved using evidence rather than guesswork.'],
  ['Manageable', 'Where a CMS is appropriate, content teams can update the parts of the site they need without developer intervention.'],
]

const features = [
  'Contact forms',
  'Lead capture',
  'WhatsApp integration',
  'Calendars & booking',
  'Newsletter signup',
  'CRM integration',
  'Payment gateways',
  'Product search',
  'Product filtering',
  'Shopping carts',
  'Customer accounts',
  'Dashboards',
  'Maps',
  'Testimonials & reviews',
  'Social integrations',
  'Analytics',
  'Live chat',
  'API integrations',
  'CMS',
  'Multi-language support',
  'Site search',
  'File downloads',
  'Blog systems',
  'Custom workflows',
]

const process = [
  ['01', 'Discovery', 'We understand your organization, audience, competitors, goals, existing website, content and functional requirements.'],
  ['02', 'Strategy', 'We define the sitemap, content architecture, user journeys, conversion objectives and SEO/AEO direction.'],
  ['03', 'UX & Wireframes', 'We plan page hierarchy and interaction before visual design so the experience has a clear purpose.'],
  ['04', 'UI Design', 'We establish the visual system, layouts, typography, imagery, components and responsive behavior.'],
  ['05', 'Development', 'We build the approved experience with the technology and integrations appropriate to the project.'],
  ['06', 'SEO, AEO & Optimization', 'We implement technical foundations, metadata, structured data, internal linking and performance improvements.'],
  ['07', 'Testing & QA', 'We test responsiveness, forms, links, browsers, accessibility, functionality, performance and search fundamentals.'],
  ['08', 'Launch & Support', 'We deploy the site, verify the live experience and provide an appropriate path for ongoing maintenance and improvements.'],
]

const faqs = [
  ['How much does a professional website cost?', 'There is no useful one-size-fits-all price. Investment depends on the website type, page count, design complexity, functionality, integrations, content requirements, e-commerce needs, SEO requirements and ongoing support. We scope the project around what the business actually needs.'],
  ['How long does it take to build a website?', 'A project timeline depends on scope, content readiness, design requirements, integrations and feedback cycles. A focused business website can move much faster than an e-commerce platform or custom application. After discovery, we can provide a realistic project timeline based on the agreed scope.'],
  ['What type of website does my business need?', 'Start with the business objective. A professional business website is usually appropriate for service companies; corporate sites suit larger or more complex organizations; e-commerce is for online product sales; landing pages are ideal for focused campaigns; and custom applications are appropriate when you need workflows, dashboards, accounts or functionality beyond a conventional website.'],
  ['Do you build e-commerce websites?', 'Yes. E-commerce projects can include catalogues, categories, product pages, search, filtering, carts, checkout, payment integrations, customer accounts, order workflows, inventory connections and analytics depending on the project.'],
  ['Can you redesign an existing website?', 'Yes. A redesign can address outdated visual design, poor UX, weak conversion paths, performance problems, mobile issues and content architecture. Where possible, useful existing content and SEO equity should be assessed before changes are made.'],
  ['Can you migrate my existing website?', 'Yes. Migration can include moving content, rebuilding the front end, changing CMS platforms, restructuring URLs and implementing appropriate redirects and technical checks. The migration plan should be based on the existing site rather than blindly replacing it.'],
  ['Will my website be mobile-friendly?', 'Yes. Responsive behavior should be considered throughout the design and development process, including typography, navigation, grids, forms, imagery, touch targets and performance.'],
  ['Will my website be optimized for Google?', 'The website can be developed with technical SEO foundations such as semantic HTML, logical headings, crawlable architecture, metadata, canonical URLs, structured data, XML sitemaps, internal linking, image optimization, responsive design and performance considerations. SEO performance also depends on content, authority, competition and ongoing optimization.'],
  ['What is AEO and does my website need it?', 'Answer Engine Optimization focuses on making information easier for search and answer systems to understand, retrieve and present. Clear definitions, structured content, strong entities, useful FAQs and accurate schema can support machine understanding. It is not a guarantee of visibility in any particular AI system.'],
  ['Can you integrate my CRM?', 'Yes. Depending on the CRM and project requirements, forms and other website actions can be connected to systems such as CRM, email marketing, automation or analytics platforms through native integrations or APIs.'],
  ['Can you integrate payment gateways?', 'Yes. Payment integration can be included where required, with the exact provider and implementation depending on the market, business model, currency and project requirements.'],
  ['Can you build custom web applications?', 'Yes. We can scope dashboards, portals, booking systems, SaaS products, internal tools, management systems and other database-backed browser applications where a standard marketing website is not enough.'],
  ['Do you provide website maintenance?', 'Maintenance can include software and dependency updates, security checks, content changes, bug fixes, monitoring, performance work and technical support. The exact support scope can be defined around your organization.'],
  ['Can I update the website myself?', 'If the project uses a CMS, appropriate content can be made editable by your team. The CMS is selected based on the type of content, workflow, technical requirements and long-term maintenance needs.'],
  ['Do you build websites for NGOs and startups?', 'Yes. The architecture is tailored to the organization. For an NGO, that may mean programs, impact stories, donations, resources and volunteer journeys. For a startup, it may mean product positioning, investor or customer information, lead capture and a scalable content structure.'],
  ['Can you improve my existing website speed?', 'Yes. We can audit areas such as image delivery, JavaScript, rendering, fonts, caching, third-party scripts, component architecture and Core Web Vitals, then prioritize improvements according to their likely impact.'],
  ['Do you provide hosting?', 'Hosting and deployment can be discussed as part of the project. The appropriate setup depends on the technology stack, traffic expectations, integrations, security requirements and operational preferences.'],
  ['What happens after the website launches?', 'Launch is not necessarily the end. We can provide handover, analytics verification, monitoring, maintenance and further optimization so the website can continue evolving with the organization.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  serviceType: 'Web Development',
  description:
    'Professional web development services including business websites, corporate websites, e-commerce, landing pages, NGO websites, portfolio sites and custom web applications.',
  provider: {
    '@type': 'Organization',
    name: 'Romine Labs',
    url: 'https://rominelabs.com',
  },
  areaServed: 'Worldwide',
  url: 'https://rominelabs.com/services/web-development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: websiteTypes.map((item) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: item.title,
      },
    })),
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

// Visual Component: Web Architecture Workflow Diagram
function WebArchitectureVisual() {
  const nodes = [
    { label: 'Business Goals', sub: 'Commercial Strategy' },
    { label: 'Audience & UX', sub: 'Information Architecture' },
    { label: 'Design System', sub: 'Visual & UI Engineering' },
    { label: 'Next.js Build', sub: 'High-Performance Engine' },
    { label: 'SEO & Performance', sub: 'AEO & Core Web Vitals' },
    { label: 'Conversion & Growth', sub: 'Pipeline Generation' },
  ]

  return (
    <div className="mt-12 rounded-none border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">System Architecture</span>
          <h3 className="font-serif text-lg text-white">Website Engineering Pipeline</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase text-[#687386] sm:inline-block">Illustrative Framework</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {nodes.map((node, i) => (
          <div key={node.label} className="relative border border-white/10 bg-[#0B1B35] p-4 text-left">
            <span className="font-mono text-[10px] font-bold text-[#C69A52]">0{i + 1}</span>
            <p className="mt-2 font-serif text-sm font-normal text-white">{node.label}</p>
            <p className="mt-1 font-sans text-[11px] text-[#687386]">{node.sub}</p>
            {i < nodes.length - 1 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#C69A52]/40">
                <ChevronRight className="size-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeType, setActiveType] = useState(0)

  const active = websiteTypes[activeType]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="overflow-x-hidden bg-[#FFFFFF] text-[#111827]">
        {/* HERO */}
        <section data-hero-dark className="relative min-h-[82vh] overflow-hidden bg-[#0B1B35] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/insight-web.png"
              alt="Modern digital interface representing professional web development"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-200 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/85 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <Eyebrow onDark>Web & Digital Engineering</Eyebrow>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Websites built to <span className="text-[#C69A52] font-serif italic">work</span>, not just exist.
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
                We design and develop professional websites, e-commerce experiences and custom web applications around your business goals—combining UX, development, performance, SEO and AEO from the start.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Start Your Web Project</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <a
                  href="#website-types"
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  Explore Website Types
                </a>
              </div>

              <div className="mt-14 grid max-w-3xl grid-cols-2 border-t border-white/10 pt-8 sm:grid-cols-4">
                {[
                  ['Strategy', 'Business-first planning'],
                  ['UX/UI', 'Purposeful experiences'],
                  ['Development', 'Modern architecture'],
                  ['Growth', 'SEO + AEO foundations'],
                ].map(([title, text]) => (
                  <div key={title} className="border-r border-white/10 px-4 first:pl-0 last:border-0">
                    <p className="font-serif text-base font-normal text-white">{title}</p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / VALUE */}
        <section className="border-b border-[#E4E7EB] bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Eyebrow>Strategic Role</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl leading-[1.12]">
                Your website should have a job.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                A modern website is not simply an online brochure. It is part brand experience, part sales tool, part credibility asset and part digital infrastructure. We build around the role your website needs to play in the business.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
                {[
                  'Brand experience',
                  'Lead generation',
                  'Sales enablement',
                  'Search visibility',
                  'Customer information',
                  'Conversion platform',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 font-sans text-sm font-semibold text-[#111827]">
                    <Check className="size-4 shrink-0 text-[#C69A52]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 border-l-2 border-[#C69A52] bg-[#F7F5F0] p-6 font-sans text-sm leading-relaxed text-[#687386]">
                Design, development, UX, SEO, AEO, performance, analytics and conversion strategy work together—not as disconnected add-ons.
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SYSTEM VISUALIZATION */}
        <section className="bg-[#0B1B35] py-16 text-white border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <WebArchitectureVisual />
          </div>
        </section>

        {/* WEBSITE TYPES */}
        <section id="website-types" className="bg-[#F7F5F0] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Eyebrow>Project Scoping</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-6xl leading-[1.12]">
                What kind of website do you need?
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                There is no universal website package. Choose the model closest to your objective, then we tailor the architecture, content, functionality and technology around your requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="overflow-hidden border border-[#E4E7EB] bg-white">
                  {websiteTypes.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveType(index)}
                      className={`flex w-full items-center gap-4 border-b border-[#E4E7EB] px-5 py-4 text-left font-sans transition last:border-0 ${
                        activeType === index ? 'bg-[#0B1B35] text-white' : 'hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold ${activeType === index ? 'text-[#C69A52]' : 'text-[#687386]'}`}>
                        {item.number}
                      </span>
                      <span className="flex-1 text-sm font-semibold">{item.title}</span>
                      <ArrowRight className={`size-4 ${activeType === index ? 'text-[#C69A52]' : 'text-[#687386]'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden border border-[#E4E7EB] bg-white lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 sm:h-80">
                    <Image
                      src={active.image}
                      alt={`${active.title} web development example`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35]/90 via-[#0B1B35]/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#C69A52]">{active.number} / {active.eyebrow}</p>
                      <h3 className="mt-2 font-serif text-3xl font-normal text-white sm:text-4xl">{active.title}</h3>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9">
                    <p className="max-w-3xl font-sans text-base leading-relaxed text-[#687386]">{active.description}</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {active.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 font-sans text-sm font-medium text-[#111827]">
                          <span className="flex size-6 shrink-0 items-center justify-center bg-[#F7F5F0] text-[#C69A52]">
                            <Check className="size-3.5" />
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-9 pt-0 border-t border-transparent">
                  <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#0B1B35] hover:text-[#C69A52] transition-colors">
                    <span>Discuss this type of project</span>
                    <ArrowRight className="size-4 text-[#C69A52]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>Capabilities</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl leading-[1.12]">
                  Everything needed to build a better digital presence.
                </h2>
                <p className="mt-5 font-sans text-base leading-relaxed text-[#687386]">
                  Select only what your project requires. We can work across the full lifecycle or focus on a specific part of the build.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                {services.map(([title, description, Icon]) => (
                  <article key={title as string} className="bg-white p-6 transition hover:bg-[#F7F5F0]">
                    <Icon className="size-6 text-[#C69A52]" />
                    <h3 className="mt-5 font-serif text-lg font-normal text-[#0B1B35]">{title as string}</h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{description as string}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATION */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Eyebrow onDark>The Romine Standard</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-6xl leading-[1.12]">
                We do not separate the website from the business.
              </h2>
              <p className="mt-5 font-sans text-lg leading-relaxed text-[#687386]">
                The strongest builds connect strategy, experience, technology and growth. That is the standard we use when planning a project.
              </p>
            </div>

            <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {differentiators.map(([title, description]) => (
                <article key={title} className="border-b border-r border-white/10 p-6 sm:p-7 bg-[#0B1B35]">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">/</span>
                  <h3 className="mt-6 font-serif text-lg font-normal text-white">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO / AEO */}
        <section className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-6">
              <div className="relative min-h-[480px] overflow-hidden border border-[#E4E7EB] bg-[#0B1B35]">
                <Image
                  src="/images/services/web-development-seo.jpg"
                  alt="Search and structured web architecture concept"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-[#0B1B35]/40 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <Eyebrow onDark>Search Architecture</Eyebrow>
                  <p className="mt-3 font-serif text-2xl font-normal text-white">Built for Search. Structured for Answers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Eyebrow>SEO + AEO Framework</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl leading-[1.12]">
                Make the website understandable to people—and machines.
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-[#687386]">
                Search visibility starts with a technically sound website, but rankings and AI visibility are never guaranteed by code alone. We create strong foundations so your content is easier to crawl, interpret, connect and retrieve.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Semantic HTML & heading hierarchy',
                  'Metadata & canonical URLs',
                  'XML sitemap & robots controls',
                  'Structured data / Schema',
                  'Internal linking architecture',
                  'Open Graph & sharing metadata',
                  'Image optimization',
                  'Core Web Vitals considerations',
                  'Search-friendly URL structure',
                  'FAQ and answer-focused content',
                  'Organization / Service schema',
                  'Product / Article schema where relevant',
                ].map((item) => (
                  <div key={item} className="flex gap-3 font-sans text-xs font-medium text-[#111827]">
                    <Search className="size-4 shrink-0 text-[#C69A52]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 border border-[#E4E7EB] bg-[#F7F5F0] p-5 font-sans text-xs leading-relaxed text-[#687386]">
                <strong className="text-[#0B1B35]">AEO principle:</strong> We do not promise AI rankings. We structure useful, authoritative information so search and answer systems have clearer signals about your organization, services and content.
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-y border-[#E4E7EB] bg-[#F7F5F0] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Eyebrow>Functional Modules</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl leading-[1.12]">
                What can we build into it?
              </h2>
              <p className="mt-5 font-sans text-base text-[#687386]">
                Functionality is selected around the project—not added simply to make a feature list look impressive.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {features.map((feature) => (
                <span key={feature} className="inline-flex items-center gap-2 border border-[#E4E7EB] bg-white px-4 py-2.5 font-sans text-xs font-semibold text-[#0B1B35]">
                  <Check className="size-3.5 text-[#C69A52]" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>Delivery Pipeline</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl leading-[1.12]">
                  A process designed to reduce guesswork.
                </h2>
                <p className="mt-5 font-sans text-base leading-relaxed text-[#687386]">
                  Good development is not just about the final code. It is about making the important decisions in the right order.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-[#E4E7EB]">
                  {process.map(([number, title, description]) => (
                    <div key={number} className="grid gap-4 border-b border-[#E4E7EB] py-7 sm:grid-cols-[70px_220px_1fr]">
                      <span className="font-mono text-xs font-bold text-[#C69A52]">{number}</span>
                      <h3 className="font-serif text-lg font-normal text-[#0B1B35]">{title}</h3>
                      <p className="font-sans text-xs leading-relaxed text-[#687386]">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE BUILD FOR + STACK */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div className="border border-[#E4E7EB] bg-white p-8 sm:p-10">
              <Eyebrow>Target Client Archetypes</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-[#0B1B35] sm:text-4xl">Different organizations. Different requirements.</h2>
              <div className="mt-8 grid grid-cols-2 gap-y-3 font-sans text-xs font-semibold text-[#111827]">
                {[
                  'Startups',
                  'Small businesses',
                  'Growing businesses',
                  'Established companies',
                  'Corporations',
                  'NGOs',
                  'Nonprofits',
                  'Schools',
                  'Consultants',
                  'Coaches',
                  'Professionals',
                  'Personal brands',
                  'Creatives',
                  'E-commerce businesses',
                  'Organizations',
                  'Entrepreneurs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#C69A52]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-[#0B1B35] p-8 text-white sm:p-10">
              <Eyebrow onDark>Technical Stack</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl">The right stack for the right problem.</h2>
              <p className="mt-5 font-sans text-xs leading-relaxed text-[#687386]">
                Technology should serve the business. Depending on the project, we can work with modern frameworks, CMS platforms, databases and APIs without forcing every client into the same technical setup.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'WordPress', 'Headless CMS', 'Supabase', 'PostgreSQL', 'REST APIs', 'Third-party APIs', 'Payment platforms'].map((item) => (
                  <div key={item} className="border border-white/10 bg-[#142B4A]/60 px-3 py-3 font-mono text-xs font-semibold text-[#D8B978]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO PLACEHOLDER */}
        <section id="portfolio" className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 border-b border-[#E4E7EB] pb-8 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>Selected Work</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl">Built for real-world objectives.</h2>
              </div>
              <Link href="/portfolio" className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#0B1B35] hover:text-[#C69A52] transition-colors">
                <span>View Our Work</span>
                <ArrowRight className="size-4 text-[#C69A52]" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ['/images/work-ecommerce.png', 'E-commerce', 'Product discovery, commerce and conversion'],
                ['/images/insight-web.png', 'Business Website', 'Clear positioning and lead generation'],
                ['/images/work-brand.png', 'Brand / Organization', 'Storytelling, credibility and engagement'],
              ].map(([image, category, title]) => (
                <div key={category} className="group overflow-hidden border border-[#E4E7EB] bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image}
                      alt={`${category} website project`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs font-bold uppercase text-[#C69A52]">{category}</p>
                    <h3 className="mt-2 font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                    <p className="mt-2 font-sans text-xs text-[#687386]">Add verified project challenge, solution, features and outcomes here when case study data is available.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="bg-[#F7F5F0] py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <Eyebrow>Project Investment</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl">The right scope comes before the price.</h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#687386]">
              Website investment depends on the type of build, number of pages, design complexity, functionality, integrations, e-commerce requirements, CMS, content, SEO and ongoing support.
            </p>
            <div className="mx-auto mt-9 grid max-w-3xl gap-px border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-3">
              {[
                ['Scope', 'What needs to be built?'],
                ['Complexity', 'How much custom functionality?'],
                ['Growth', 'What happens after launch?'],
              ].map(([title, description]) => (
                <div key={title} className="bg-white p-6">
                  <p className="font-serif text-base font-normal text-[#0B1B35]">{title}</p>
                  <p className="mt-2 font-sans text-xs text-[#687386]">{description}</p>
                </div>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="mt-9 inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="size-4 text-[#C69A52]" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#FFFFFF] py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mb-12 text-center">
              <Eyebrow>Answers Before You Start</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl">Frequently asked questions</h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-[#687386]">
                Straight answers to the questions businesses usually have before starting a web project.
              </p>
            </div>

            <div className="border-t border-[#E4E7EB]">
              {faqs.map(([question, answer], index) => (
                <div key={question} className="border-b border-[#E4E7EB]">
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-lg font-normal text-[#0B1B35] sm:text-xl">{question}</span>
                    <ChevronDown className={`size-5 shrink-0 text-[#C69A52] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="max-w-3xl pb-6 pr-8 font-sans text-sm leading-relaxed text-[#687386]">
                      {answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <div className="mx-auto flex size-14 items-center justify-center border border-white/10 bg-white/5 text-[#C69A52]">
              <MonitorSmartphone className="size-6" />
            </div>
            <div className="mt-7 flex justify-center">
              <Eyebrow onDark>Start With The Right Conversation</Eyebrow>
            </div>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-6xl text-white leading-[1.08]">
              Let&apos;s build a website that works as hard as your business.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
              Tell us about your business, your current website, a new website you need, an e-commerce project, a redesign or a custom application. We&apos;ll help define the right next step.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Start Your Web Project</span>
                <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}