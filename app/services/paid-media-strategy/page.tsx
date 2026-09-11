/* cspell:disable */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Gauge,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TestTube2,
  Users,
  Zap,
  TrendingUp,
  Layers3,
  Filter,
  Workflow
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paid Media Strategy & Advertising Services | Google, Meta, TikTok & LinkedIn | Romine Labs',
  description: 'Paid media strategy and performance advertising across Google, Meta, TikTok and LinkedIn. Build measurable acquisition systems for lead generation, e-commerce and growth.',
  alternates: { canonical: 'https://rominelabs.com/services/paid-media' },
  openGraph: { 
    title: 'Paid Media Strategy & Advertising Services | Romine Labs', 
    description: 'Performance-focused paid acquisition strategy, advertising management, tracking, testing and optimization.', 
    url: 'https://rominelabs.com/services/paid-media', 
    type: 'website' 
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Paid Media Strategy & Advertising Services | Romine Labs', 
    description: 'Paid acquisition systems built around strategy, creative, measurement and business outcomes.' 
  },
}

const platforms = [
  { name: 'Google Ads', tag: 'Paid Search + Video', description: 'Capture existing commercial intent across Search, Shopping, YouTube, Display, Performance Max and remarketing where the channel fits.', icon: Search },
  { name: 'Meta Ads', tag: 'Facebook + Instagram', description: 'Build prospecting, lead generation, sales and retargeting campaigns around audience signals, offers and platform-native creative.', icon: Target },
  { name: 'TikTok Ads', tag: 'Creative-led acquisition', description: 'Use short-form, creator-style concepts, prospecting, retargeting and conversion campaigns when the audience and offer fit the platform.', icon: Zap },
  { name: 'LinkedIn Ads', tag: 'B2B + Professional', description: 'Reach professional and company audiences for B2B, SaaS, enterprise, recruitment and longer consideration journeys.', icon: Users },
  { name: 'X Ads', tag: 'Conversation + demand', description: 'Evaluate X when audience behavior, conversation and campaign objectives make the channel commercially relevant.', icon: Megaphone },
]

const services = [
  ['Paid Media Strategy', 'A channel, audience, funnel, budget and measurement plan built around business objectives rather than platform activity.'],
  ['Google Ads Management', 'Search, Shopping, Performance Max, YouTube, Display and remarketing with keyword, search-term, bidding and conversion strategy.'],
  ['Meta Ads Management', 'Facebook and Instagram prospecting, retargeting, lead generation, sales, catalog campaigns and structured creative testing.'],
  ['TikTok Advertising', 'Platform-native short-form concepts, prospecting, retargeting, Spark Ads where appropriate and conversion-focused testing.'],
  ['LinkedIn Advertising', 'B2B lead generation, professional targeting, company audiences, retargeting and campaigns designed for longer sales cycles.'],
  ['Retargeting Systems', 'Segmented journeys for visitors, product viewers, engaged audiences, form openers, cart abandoners and existing customers.'],
  ['Lead Generation Campaigns', 'Landing pages or lead forms, qualification, CRM integration, source tracking and routing for service and B2B businesses.'],
  ['E-commerce Advertising', 'Product feeds, catalogs, Shopping, dynamic retargeting, product-level analysis, promotions and customer segmentation.'],
  ['Campaign Launch & Management', 'Account setup, tracking QA, launch, monitoring, testing, optimization and ongoing performance management.'],
  ['Paid Media Audits', 'A structured review of account architecture, targeting, creative, tracking, landing pages, budgets, search terms and data quality.'],
]

const funnel = [
  ['01', 'DISCOVER', 'Reach new audiences with a clear reason to pay attention.'],
  ['02', 'ENGAGE', 'Use platform-native creative and messaging to earn the next click or interaction.'],
  ['03', 'CONSIDER', 'Match the ad promise with a useful landing page, proof and a clear offer.'],
  ['04', 'CONVERT', 'Turn intent into a lead, purchase, booking, enquiry or other defined business event.'],
  ['05', 'RETARGET', 'Change the message as intent increases instead of showing the same ad repeatedly.'],
  ['06', 'NURTURE', 'Connect advertising with email, CRM and sales follow-up where the journey requires it.'],
  ['07', 'SCALE', 'Reallocate budget toward validated opportunities while continuing to test the system.'],
]

const process = [
  ['01', 'Discovery', 'Understand the business, market, audience, offer, economics, sales process and growth objectives.'],
  ['02', 'Research', 'Study audiences, competitors, search demand, existing campaigns, customer journeys and commercial gaps.'],
  ['03', 'Strategy', 'Select channels, define funnel stages, budget logic, campaign architecture, KPIs and measurement.'],
  ['04', 'Tracking', 'Configure events, conversions, analytics, pixels, UTMs and CRM connections appropriate to the stack.'],
  ['05', 'Creative & Messaging', 'Develop hooks, angles, copy, visual concepts and offers suited to each platform and audience stage.'],
  ['06', 'Campaign Build', 'Configure campaigns, targeting, placements, budgets, bidding and quality-assurance checks.'],
  ['07', 'Launch & Optimization', 'Monitor performance, investigate signals, test deliberately and improve the parts of the system that matter.'],
  ['08', 'Reporting & Scaling', 'Turn performance data into decisions about budget, audiences, creative, offers and next experiments.'],
]

const faqs = [
  ['What is paid media?', 'Paid media is advertising purchased through digital channels to reach defined audiences and drive measurable actions such as visits, leads, bookings or purchases. It includes paid search, paid social, video, display and other digital advertising channels.'],
  ['What is paid media strategy?', 'Paid media strategy is the planning layer behind advertising. It determines which channels to use, who to reach, what to offer, how campaigns should be structured, how budgets should be allocated and how results will be measured and improved.'],
  ['How does paid advertising work?', 'A business defines an objective and audience, creates an offer and advertising message, sends traffic to a relevant destination, measures conversions and uses performance data to improve future decisions. The strongest systems connect advertising to the landing page, CRM and sales process.'],
  ['What is PPC?', 'PPC means pay-per-click. It commonly describes advertising models where an advertiser pays when someone clicks an ad, especially in search advertising. In practice, paid media can use other buying models too, so PPC and paid media are related but not identical terms.'],
  ['How much should I spend on advertising?', 'There is no universal best budget. A sensible budget depends on market size, competition, offer economics, conversion rates, customer value, sales capacity and the amount of testing needed to gather useful data. We recommend budgeting around the economics and learning requirements of the business.'],
  ['Which advertising platform should my business use?', 'It depends on where demand exists and how customers make decisions. Google can capture active search intent; Meta and TikTok can stimulate demand through creative; LinkedIn can be valuable for professional and B2B audiences. Channel selection should follow the customer journey, not platform popularity.'],
  ['Should I advertise on Google or Meta?', 'They solve different problems. Google Search is often strongest when people are already looking for a product or service. Meta can be effective for creating demand, visual storytelling, prospecting and retargeting. Many businesses can use both when the economics and funnel support it.'],
  ['Do you manage Meta Ads?', 'Yes. Our Meta approach can include campaign strategy, audience planning, creative testing, lead generation, sales campaigns, retargeting, catalog advertising where appropriate, tracking and ongoing optimization.'],
  ['Do you manage Google Ads?', 'Yes. Depending on the business, this can include Search, Shopping, Performance Max, YouTube, Display and remarketing, along with keyword strategy, negative keywords, ad copy, bidding and conversion tracking.'],
  ['Do you run TikTok Ads?', 'TikTok can be part of the media mix when the audience, offer and creative format fit. Campaigns can include prospecting, retargeting, creator-style concepts, Spark Ads where appropriate and conversion-focused testing.'],
  ['Do you run LinkedIn Ads?', 'LinkedIn can be used for B2B, professional services, SaaS, enterprise and recruitment campaigns where professional or company-level targeting is useful. The strategy may prioritize qualified opportunities rather than immediate purchases.'],
  ['Can you manage multiple advertising platforms?', 'Yes, when there is a strategic reason to do so. Multi-channel management should not mean duplicating the same campaign everywhere. Each platform needs its own role, creative treatment, audience logic and measurement context.'],
  ['How long does it take to see results?', 'Timing varies by channel, market, offer, budget, conversion volume and sales cycle. Early campaigns often generate directional learning before there is enough evidence for confident scaling. Longer B2B journeys can require more time because a lead may not become an opportunity immediately.'],
  ['Can you guarantee leads or ROAS?', 'No responsible agency can guarantee a specific number of leads, sales or ROAS without controlling every part of the commercial system. Performance depends on the offer, market, competition, creative, website, budget, tracking, sales process and changing market conditions.'],
  ['What is retargeting?', 'Retargeting is advertising to people who have already interacted with a brand, such as website visitors, product viewers, video viewers or form openers. Effective retargeting changes the message based on the user’s stage and intent rather than repeating the same advertisement.'],
  ['What is conversion tracking?', 'Conversion tracking records meaningful actions generated after an ad interaction, such as a purchase, qualified form submission, call or booking. It allows campaign decisions to be based on business events rather than clicks and impressions alone.'],
  ['Why are my ads getting clicks but no customers?', 'Clicks can be healthy while the acquisition system is weak. Common causes include poor message-to-page match, a weak offer, slow pages, unclear calls to action, form friction, low-quality traffic, broken tracking or a sales process that does not follow up effectively.'],
  ['Why are my leads low quality?', 'Lead quality can be affected by targeting, messaging, offer design, qualification questions, landing-page positioning and optimization signals. We look beyond CPL and connect lead source data with qualification and downstream sales feedback where the CRM allows it.'],
  ['Do you create ad creatives?', 'Creative strategy can cover static ads, short-form video, carousels, product demonstrations, educational concepts, founder-led creative, UGC-style concepts and other formats suited to the platform. Exact production scope depends on the engagement.'],
  ['Do you write ad copy?', 'Yes. Copy can be developed around customer problems, benefits, objections, awareness levels, differentiators, proof and a clear next action. Messaging is adapted to the platform rather than copied unchanged across every channel.'],
  ['Do you build landing pages?', 'We can collaborate on or provide landing-page development where it fits the engagement. We also evaluate message match, mobile UX, page speed, trust, form friction, CTA clarity and conversion tracking.'],
  ['Can you optimize my existing campaigns?', 'Yes. An existing account can be audited before recommendations are made. We can review structure, targeting, creative, search terms, tracking, landing pages, budgets, conversion quality and historical data to identify what should be retained, changed or tested.'],
  ['How do you measure paid advertising performance?', 'The measurement framework depends on the business model. Useful metrics can include spend, reach, CPM, CTR, CPC, leads, qualified leads, CPL, purchases, CPA, revenue, ROAS, conversion rate, CAC and, where relevant, LTV or marketing efficiency measures.'],
  ['What is ROAS?', 'ROAS means return on ad spend. It compares attributed revenue with advertising spend. ROAS can be useful for e-commerce, but it is not the same as profit and should be interpreted alongside margins, returns, discounts, shipping, customer value and attribution limitations.'],
  ['What is CAC?', 'CAC means customer acquisition cost. It estimates how much it costs to acquire a customer. Depending on the measurement model, CAC can include more than media spend, so the definition should be agreed before comparing it across reports.'],
  ['What is CPL?', 'CPL means cost per lead. It divides advertising spend by the number of leads attributed to a campaign or channel. A lower CPL is not automatically better if those leads are poorly qualified or rarely become customers.'],
  ['Do you work with e-commerce businesses?', 'Yes. E-commerce strategy can include product feeds, catalogs, Shopping, dynamic retargeting, product-level analysis, promotions and segmentation. We also consider AOV, margins, returns, discounts, CAC and repeat purchases rather than judging campaigns on ROAS alone.'],
  ['Do you work with B2B companies?', 'Yes. B2B paid media often requires a longer view of performance because several stakeholders may influence a purchase. Campaigns can be connected to content, retargeting, lead nurturing and CRM reporting so the focus moves toward qualified opportunities rather than raw lead volume.'],
  ['Can paid advertising work with SEO?', 'Yes. SEO can capture organic search demand while paid search captures immediate commercial opportunities and paid social can stimulate demand. The channels can also generate useful insights about messaging, offers and audience response. Paid advertising does not directly improve organic rankings.'],
  ['What happens after I contact you?', 'We start by understanding the business, goals, current advertising activity and constraints. If the fit is right, the next step can be a paid media audit, strategy discussion or scoped engagement with clear responsibilities and measurement expectations.'],
]

const mistakes = [
  ['Optimizing for cheap clicks', 'Low CPC means little if visitors do not become qualified leads or customers.'],
  ['Scaling before validating', 'Increasing spend before the offer, tracking and conversion path are understood can simply multiply waste.'],
  ['Using one creative everywhere', 'Each platform has different user behavior, placements and creative conventions.'],
  ['Ignoring the landing page', 'The ad can win the click while the page loses the customer.'],
  ['Treating platform data as perfect', 'Attribution differs between platforms, analytics tools and CRM systems.'],
  ['Chasing vanity metrics', 'Impressions, CTR and engagement can matter, but they should connect to the actual business objective.'],
]

const ecosystem = [
  ['Web Development', 'Build landing pages and websites that support the promise made in the ad.', '/services/web-development'],
  ['SEO', 'Capture relevant organic demand alongside paid acquisition.', '/services/seo'],
  ['AEO', 'Structure useful answers and entities for modern answer-engine discovery.', '/services/aeo'],
  ['Social Media Management', 'Build organic presence and community alongside paid distribution.', '/services/social-media-management'],
  ['Content Marketing', 'Develop education and proof that can support longer buying journeys.', '/services/content-marketing'],
  ['Email Marketing', 'Nurture leads and customers after the initial acquisition event.', '/services/email-marketing'],
  ['Conversion Optimization', 'Improve the experience between click and conversion.', '/services/conversion-rate-optimization'],
  ['Analytics & Tracking', 'Create the measurement layer needed for informed decisions.', '/services/analytics-optimisation'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { 
      '@type': 'Service', 
      name: 'Paid Media Strategy & Advertising Services', 
      serviceType: 'Paid Media Strategy', 
      provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, 
      areaServed: 'Worldwide', 
      url: 'https://rominelabs.com/services/paid-media' 
    },
    { 
      '@type': 'BreadcrumbList', 
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' }, 
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' }, 
        { '@type': 'ListItem', position: 3, name: 'Paid Media', item: 'https://rominelabs.com/services/paid-media' }
      ] 
    },
    { 
      '@type': 'FAQPage', 
      mainEntity: faqs.map(([question, answer]) => ({ 
        '@type': 'Question', 
        name: question, 
        acceptedAnswer: { '@type': 'Answer', text: answer } 
      })) 
    },
  ],
}

// Brand helper primitives
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

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

function SectionHeading({
  eyebrow,
  title,
  description,
  children,
  onDark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  onDark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl leading-[1.12] ${onDark ? 'text-white' : 'text-[#0B1B35]'}`}>
        {title}
      </h2>
      {(description || children) && (
        <div className={`mt-5 font-sans text-base leading-relaxed sm:text-lg ${onDark ? 'text-[#687386]' : 'text-[#687386]'}`}>
          {description || children}
        </div>
      )}
    </div>
  )
}

function ArrowLink({ href, children, onDark = false }: { href: string; children: React.ReactNode; onDark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
        onDark ? 'text-white hover:text-[#C69A52]' : 'text-[#0B1B35] hover:text-[#C69A52]'
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1.5" />
    </Link>
  )
}

// Visual Component 1: Paid Acquisition Funnel Diagram
function PaidAcquisitionFunnelVisual() {
  const steps = [
    { num: '01', title: 'Targeted Audience', desc: 'Custom intent & search signals' },
    { num: '02', title: 'Ad Creative', desc: 'Hook, offer & visual message' },
    { num: '03', title: 'Qualified Click', desc: 'High-intent traffic flow' },
    { num: '04', title: 'Landing Page', desc: 'Conversion UX & message match' },
    { num: '05', title: 'Lead / Purchase', desc: 'Captured conversion event' },
    { num: '06', title: 'CRM & Nurture', desc: 'Retargeting & sales follow-up' },
  ]

  return (
    <div className="border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">System Architecture</span>
          <h3 className="font-serif text-lg text-white">Paid Acquisition Pipeline Flow</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase text-[#687386] sm:inline-block">Illustrative Framework</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {steps.map((s, i) => (
          <div key={s.num} className="relative border border-white/10 bg-[#0B1B35] p-4 text-left">
            <span className="font-mono text-[10px] font-bold text-[#C69A52]">{s.num}</span>
            <p className="mt-2 font-serif text-sm font-normal text-white">{s.title}</p>
            <p className="mt-1 font-sans text-[11px] text-[#687386]">{s.desc}</p>
            {i < steps.length - 1 && (
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

// Visual Component 2: Campaign Performance Dashboard Mockup
function PaidMediaDashboardMockup() {
  return (
    <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C69A52]">Illustrative Example</span>
          <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Campaign Performance Dashboard</h3>
        </div>
        <BarChart3 className="size-5 text-[#C69A52]" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Monthly Ad Spend</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">$18,450</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Optimized Allocation</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Click-Through Rate (CTR)</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">3.82%</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">+0.9% Above Benchmark</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Cost Per Acquisition (CPA)</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">$42.10</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">-18.4% Efficiency Gain</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Return On Ad Spend (ROAS)</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">4.2x</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Attributed Revenue</p>
        </div>
      </div>
    </div>
  )
}

// Visual Component 3: Audience & Offer Strategy Matrix
function AudienceMatrixVisual() {
  const matrix = [
    { audience: 'Cold Intent (Search)', intent: 'High Commercial', message: 'Direct Solution & Spec', offer: 'Free Strategy Call', channel: 'Google Search Ads' },
    { audience: 'Cold Discovery (Social)', intent: 'Problem Aware', message: 'Pattern Interrupt & Proof', offer: 'Guide / Video Walkthrough', channel: 'Meta / TikTok Ads' },
    { audience: 'B2B Enterprise', intent: 'Evaluative', message: 'Case Study & ROI Evidence', offer: 'Executive Consultation', channel: 'LinkedIn Ads' },
    { audience: 'Warm Site Visitors', intent: 'High Consideration', message: 'Testimonials & Objections', offer: 'Demo / Direct Trial', channel: 'Retargeting (Google/Meta)' },
  ]

  return (
    <div className="border border-[#E4E7EB] bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#C69A52]">Audience Architecture</span>
          <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Paid Channel & Intent Matrix</h3>
        </div>
        <Target className="size-5 text-[#C69A52]" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans text-xs">
          <thead>
            <tr className="border-b border-[#E4E7EB] bg-[#0B1B35] font-mono text-xs uppercase text-[#C69A52]">
              <th className="p-3.5 font-bold">Audience Segment</th>
              <th className="p-3.5 font-bold">Intent Level</th>
              <th className="p-3.5 font-bold">Core Angle</th>
              <th className="p-3.5 font-bold">Primary Offer</th>
              <th className="p-3.5 font-bold">Channel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E4E7EB]">
            {matrix.map((row) => (
              <tr key={row.audience} className="hover:bg-[#F7F5F0] transition-colors">
                <td className="p-3.5 font-serif text-sm font-normal text-[#0B1B35]">{row.audience}</td>
                <td className="p-3.5 font-mono text-xs text-[#687386]">{row.intent}</td>
                <td className="p-3.5 text-[#111827]">{row.message}</td>
                <td className="p-3.5 text-[#111827] font-medium">{row.offer}</td>
                <td className="p-3.5 font-mono text-xs font-bold text-[#C69A52]">{row.channel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function PaidMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-white text-[#111827]">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[62vh] overflow-hidden bg-[#0B1B35] text-white">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero-data.png" 
              alt="Paid media performance dashboard and digital advertising analytics" 
              fill 
              priority 
              sizes="100vw" 
              className="object-cover object-center opacity-25 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/85 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
            <div className="max-w-5xl">
              <Eyebrow onDark>Paid Media Strategy & Performance</Eyebrow>

              <h1 className="mt-6 max-w-5xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Turn paid advertising into a <span className="text-[#C69A52] font-serif italic">measurable acquisition system.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
                Romine Labs builds paid media strategies around audience research, offers, creative, funnels, tracking and optimization so advertising decisions connect to real business outcomes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Paid Media Strategy</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>

              <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-widest text-[#687386] sm:grid-cols-4">
                <span>01 / Strategy</span>
                <span>02 / Creative</span>
                <span>03 / Measurement</span>
                <span>04 / Scaling</span>
              </div>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="border-b border-[#E4E7EB] bg-[#F7F5F0]">
          <Container>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 py-4 font-mono text-xs text-[#687386]">
              <Link href="/" className="hover:text-[#0B1B35] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#0B1B35] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#0B1B35] font-semibold">Paid Media</span>
            </nav>
          </Container>
        </div>

        {/* ========================================== */}
        {/* 2. INTRODUCTION & SYSTEM VIEW */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeading 
                  eyebrow="Commercial Difference" 
                  title="Paid advertising is simple. Profitable paid acquisition is engineered." 
                />
              </div>
              <div className="space-y-6 font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                <p>
                  Launching an ad is a platform task. Building a growth system requires a broader commercial perspective: <strong className="text-[#0B1B35]">Audience → Offer → Creative → Click → Landing Page → Conversion → Sales → Revenue.</strong>
                </p>
                <p>
                  We treat media buying as one part of a connected commercial system. A high click-through rate can still produce weak economics if the offer is unclear, the landing page creates friction, tracking is incomplete or the sales process fails to follow through.
                </p>
                <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-4">
                  {[
                    ['01', 'Audience Signal'],
                    ['02', 'Offer Fit'],
                    ['03', 'Creative Hook'],
                    ['04', 'Conversion Flow'],
                  ].map(([n, t]) => (
                    <div key={n} className="bg-white p-5">
                      <span className="font-mono text-xs font-bold text-[#C69A52]">{n}</span>
                      <p className="mt-2 font-serif text-sm font-normal text-[#0B1B35]">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 3. FUNNEL VISUAL SECTION */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-16 text-white border-b border-white/10">
          <Container>
            <PaidAcquisitionFunnelVisual />
          </Container>
        </section>

        {/* ========================================== */}
        {/* 4. DEFINITION / STRATEGY FIRST */}
        {/* ========================================== */}
        <section className="border-b border-[#E4E7EB] bg-[#F7F5F0] py-20 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <div>
                <SectionHeading 
                  eyebrow="Methodology" 
                  title="Strategy first. Platform second." 
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <article className="border border-[#E4E7EB] border-l-2 border-l-[#C69A52] bg-white p-6">
                  <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Paid Media Strategy</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">Planning audience signals, funnel stages, budgets, creative hooks and measurement rules.</p>
                </article>
                <article className="border border-[#E4E7EB] border-l-2 border-l-[#0B1B35] bg-white p-6">
                  <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Media Management</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">Executing campaigns, monitoring account health, structured testing and prompt iterations.</p>
                </article>
                <article className="border border-[#E4E7EB] border-l-2 border-l-[#0B1B35] bg-white p-6">
                  <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Performance Growth</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">Connecting ad spend directly to pipeline revenue, customer acquisition cost and business LTV.</p>
                </article>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 5. WHY CAMPAIGNS FAIL */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Root Cause Analysis" 
              title="Why campaigns fail even when the ads look good."
              description="Performance bottlenecks are rarely media-buying errors alone. We investigate the entire pathway from impression to closed revenue."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] md:grid-cols-2 lg:grid-cols-3">
              {[
                ['Offer Disconnect', 'The target market fails to perceive clear differentiation or compelling commercial value.'],
                ['Weak Creative Hook', 'The ad concept fails to interrupt feed noise or the message misaligns with audience intent.'],
                ['Broad Targeting', 'Audience parameters are either too wide, too restrictive or misaligned with buying stage.'],
                ['Landing Page Friction', 'Ad traffic arrives at a slow, confusing, or unaligned web experience.'],
                ['Tracking Attribution Breakdown', 'Conversions are unverified, duplicated or disconnected from CRM revenue events.'],
                ['Sales Process Delay', 'Inbound leads arrive quickly, but slow qualification or sales response degrades conversion.'],
              ].map(([t, d], i) => (
                <article key={t} className="bg-white p-8 transition hover:bg-[#F7F5F0]">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-xl font-normal text-[#0B1B35]">{t}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{d}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 6. PLATFORMS */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <SectionHeading 
              eyebrow="Channel Selection" 
              title="Choose the channel that fits the customer journey."
              description="We do not force every business into every network. Channel allocation follows audience behavior, commercial intent, creative requirements, and economics."
              onDark
            />

            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {platforms.map((p) => (
                <article key={p.name} className="grid gap-6 py-8 md:grid-cols-[60px_200px_1fr] md:items-start">
                  <div className="flex size-12 items-center justify-center border border-white/15 bg-[#142B4A]/60">
                    <p.icon className="size-5 text-[#C69A52]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D8B978]">{p.tag}</span>
                    <h3 className="mt-1 font-serif text-2xl font-normal text-white">{p.name}</h3>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#687386] max-w-2xl">{p.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 font-sans text-xs text-[#687386]">
              * Additional networks such as Pinterest, Microsoft Advertising, Reddit and programmatic DSPs are evaluated where audience scale and unit economics justify them.
            </p>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 7. AUDIENCE MATRIX VISUAL */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Audience Architecture" 
              title="Mapping commercial intent to the offer."
              description="Before selecting targeting options inside ad platforms, we map buyer awareness, triggers, objections, and messaging angles."
            />
            <div className="mt-12">
              <AudienceMatrixVisual />
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 8. SERVICES STACK */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="flex flex-col justify-between gap-6 border-b border-[#E4E7EB] pb-8 lg:flex-row lg:items-end">
              <div>
                <Eyebrow>Full Capabilities</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#0B1B35] sm:text-5xl">
                  A paid media service stack built for acquisition.
                </h2>
              </div>
              <ArrowLink href="/contact">Find the right advertising strategy</ArrowLink>
            </div>

            <div className="divide-y divide-[#E4E7EB]">
              {services.map(([title, desc], i) => (
                <article key={title} className="grid gap-4 py-7 md:grid-cols-[70px_260px_1fr] md:items-start">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-[#687386] max-w-2xl">{desc}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 9. CREATIVE STRATEGY & TESTING */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1fr_.8fr] lg:items-center">
              <div>
                <Eyebrow onDark>Creative Engineering</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-5xl text-white leading-[1.12]">
                  Creative is the first sales conversation.
                </h2>
                <p className="mt-5 font-sans text-base leading-relaxed text-[#687386]">
                  Ad networks distribute creative, but they cannot fix an uninspired message. We engineer structured visual and copy testing frameworks around hooks, angles, and proof points.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 font-sans text-xs text-white sm:grid-cols-3">
                  {['Static Ad Concepts', 'Short-Form Video', 'UGC-Style Content', 'Carousel Decks', 'Product Demonstrations', 'Founder-Led Ads', 'Educational Angles', 'Problem / Solution', 'Comparison Visuals'].map((x) => (
                    <div key={x} className="flex items-center gap-2">
                      <Check className="size-3.5 text-[#C69A52]" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 bg-[#142B4A]/60 p-7 backdrop-blur-md">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C69A52]">Testing Matrix Variables</span>
                <div className="mt-6 space-y-3">
                  {['Hook & Pattern Interrupt', 'Core Messaging Angle', 'Visual Format & Layout', 'Proof & Testimonial Element', 'Offer Incentive', 'Call To Action (CTA)'].map((x, i) => (
                    <div key={x} className="flex items-center justify-between border-b border-white/10 pb-3 font-sans text-xs">
                      <span className="text-white">{x}</span>
                      <span className="font-mono text-[10px] text-[#C69A52]">Variable 0{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 10. DASHBOARD MOCKUP & MEASUREMENT */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Measurement Framework" 
              title="Tracking metrics that connect spend to revenue."
              description="We look beyond platform surface metrics. Our measurement architectures align spend, cost per lead, customer acquisition cost, and revenue return."
            />
            <div className="mt-12">
              <PaidMediaDashboardMockup />
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 11. LANDING PAGES & ATTRIBUTION */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
              <div>
                <SectionHeading eyebrow="Post-Click Conversion" title="The ad is only half the acquisition journey.">
                  <p>
                    Paid traffic requires a dedicated destination that continues the ad's commercial message. We evaluate post-click experiences for message alignment, loading speed, trust signals, and form friction.
                  </p>
                </SectionHeading>
                <div className="mt-8">
                  <ArrowLink href="/services/web-development">Explore Web Development</ArrowLink>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2">
                {[
                  ['Message Match', 'The page headline and value proposition must immediately confirm the ad promise.'],
                  ['Page Speed', 'Sub-second rendering prevents bounce-rate spikes on mobile ad traffic.'],
                  ['Trust Signals', 'Case proof, testimonials, and clear risk reduction remove buyer friction.'],
                  ['Conversion Path', 'Single-purpose CTA hierarchy guides the prospect straight to conversion.'],
                ].map(([t, d]) => (
                  <div key={t} className="bg-white p-7">
                    <h3 className="font-serif text-lg font-normal text-[#0B1B35]">{t}</h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 12. MISTAKES & OPERATING PRINCIPLES */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Operating Principles" 
              title="What we refuse to do in paid acquisition."
              description="High-performing media management is defined as much by disciplined constraints as execution."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] md:grid-cols-2 lg:grid-cols-3">
              {mistakes.map(([t, d], i) => (
                <div key={t} className="bg-white p-8">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-lg font-normal text-[#0B1B35]">{t}</h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 13. PROCESS & METHODOLOGY */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <Eyebrow onDark>Predictable Execution</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal tracking-tight sm:text-5xl text-white">
              Our 8-stage paid media operating process.
            </h2>

            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {process.map(([n, t, d]) => (
                <article key={n} className="bg-[#0B1B35] p-7">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{n}</span>
                  <h3 className="mt-5 font-serif text-lg font-normal text-white">{t}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{d}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link 
                href="/contact" 
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Plan My Campaign</span>
                <ArrowRight className="size-4 text-[#C69A52]" />
              </Link>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 14. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="System Integration" 
              title="Paid media performs best when the surrounding system is healthy."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] md:grid-cols-2 lg:grid-cols-4">
              {ecosystem.map(([t, d, href]) => (
                <Link key={t} href={href} className="group bg-white p-7 transition hover:bg-[#F7F5F0]">
                  <h3 className="font-serif text-lg font-normal text-[#0B1B35] group-hover:text-[#C69A52] transition-colors">{t}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{d}</p>
                  <div className="mt-6 flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider text-[#0B1B35] group-hover:text-[#C69A52]">
                    <span>Explore</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 15. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionHeading 
                eyebrow="Frequently Asked Questions" 
                title="Questions worth answering before you commit budget."
                description="Direct clarity on channels, budgets, conversion tracking, and campaign optimization."
              />

              <div className="mt-14 border-y border-[#E4E7EB]">
                {faqs.map(([q, a]) => (
                  <details key={q} className="group border-b border-[#E4E7EB] last:border-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-normal text-[#0B1B35] focus:outline-none [&::-webkit-details-marker]:hidden">
                      <span>{q}</span>
                      <ChevronRight className="size-5 shrink-0 text-[#C69A52] transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="max-w-3xl pb-6 pr-8 font-sans text-xs leading-relaxed text-[#687386]">{a}</p>
                  </details>
                ))}
              </div>

              <div className="mt-10">
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Talk to a Paid Media Strategist</span>
                  <ArrowRight className="size-4 text-[#C69A52]" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 16. FINAL CTA */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
          <Image 
            src="/images/hero-data.png" 
            alt="Paid media abstract background" 
            fill 
            sizes="100vw" 
            className="object-cover object-center opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/90 to-[#142B4A]/80" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Eyebrow onDark>Start With Paid Acquisition</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white leading-[1.08]">
                Stop guessing. Start building a smarter acquisition system.
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                Bring your existing campaigns, a new acquisition goal, an e-commerce challenge or a lead-generation funnel. We will start with the commercial context and work toward the right media strategy.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Start My Paid Media Strategy</span>
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
          </Container>
        </section>

      </main>
    </>
  )
}