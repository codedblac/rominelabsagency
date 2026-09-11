/* cspell:disable */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Cpu, 
  Database, 
  FileText, 
  Filter, 
  Globe, 
  Layers, 
  Layout, 
  LineChart, 
  Mail, 
  MessageSquare, 
  MousePointerClick, 
  PieChart, 
  Search, 
  Send, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Workflow, 
  Zap,
  Building2,
  Clock,
  UserCheck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lead Generation Services | Qualified B2B & B2C Acquisition Systems | Romine Labs',
  description: 'Romine Labs builds end-to-end lead generation systems: ICP strategy, offer engineering, landing pages, paid acquisition, lead qualification, and CRM integration.',
  alternates: { canonical: 'https://rominelabs.com/services/lead-generation' },
  openGraph: {
    title: 'Lead Generation Services | Romine Labs',
    description: 'Turn audience attention into qualified business opportunities. Data-driven lead generation, landing page conversion, qualification, and sales alignment.',
    url: 'https://rominelabs.com/services/lead-generation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Services | Romine Labs',
    description: 'Demand generation, offer strategy, lead qualification, and CRM sales integration built around revenue outcomes.',
  },
}

const leadServices = [
  ['Lead Generation Strategy & ICP', 'Identify your Ideal Customer Profile, craft high-converting offer positioning, and map channel acquisition funnels.', Target],
  ['Conversion Landing Pages', 'Design, write, and engineer high-intent landing experiences optimized specifically for visitor-to-lead conversion.', Layout],
  ['Paid Lead Acquisition', 'Execute targeted Google, Meta, TikTok, and LinkedIn campaigns designed to capture immediate commercial intent.', MousePointerClick],
  ['Organic & Content Acquisition', 'Build sustainable lead flow through SEO, AEO, educational content, social media, and digital authority assets.', Search],
  ['Lead Magnets & Value Assets', 'Create high-value guides, industry reports, calculators, and assessments that prospects willingly trade information for.', FileText],
  ['Lead Qualification & Scoring', 'Establish MQL/SQL criteria, multi-step qualification forms, and scoring models so sales reps focus on high-intent opportunities.', Filter],
  ['CRM Integration & Handoff', 'Connect lead forms directly to HubSpot, Salesforce, Zoho, or Pipedrive with automated routing and instant sales notifications.', Database],
  ['Lead Nurturing & Email Workflows', 'Build automated follow-up sequences, educational drip campaigns, and retargeting to convert not-yet-ready prospects.', Mail],
  ['Conversion Rate Optimization (CRO)', 'Continuously test headlines, forms, CTAs, trust elements, and user friction to increase the percentage of traffic that converts.', LineChart],
  ['Analytics & Pipeline Attribution', 'Track leads from initial click through landing page submission, CRM qualification, sales opportunity, and revenue won.', BarChart3],
] as const

const funnelStages = [
  ['01. Reach', 'Targeted prospects encounter your brand via Search, Ads, Social, or Content.'],
  ['02. Attention', 'High-impact value propositions and hooks earn immediate interest.'],
  ['03. Interest', 'Prospects explore your solution, proof, and offer on a dedicated landing page.'],
  ['04. Intent', 'Low-friction forms, interactive tools, or booking widgets prompt action.'],
  ['05. Conversion', 'Prospect submits information, becoming a trackable lead in your system.'],
  ['06. Qualification', 'Automated rules evaluate fit, budget, urgency, and decision-making authority.'],
  ['07. Nurturing', 'Leads not ready for immediate sales calls enter automated email sequences.'],
  ['08. Sales Handoff', 'Qualified SQLs are instantly assigned to sales reps for rapid discovery.'],
] as const

const qualificationSteps = [
  ['Data Validation', 'Verifying email accuracy, phone format, and company domain integrity.'],
  ['Profile Fit (ICP)', 'Evaluating industry, company size, location, and role against ideal criteria.'],
  ['Behavioral Intent', 'Measuring content engagement, pricing views, and form depth.'],
  ['Sales Routing', 'Directing high-score SQLs directly to reps for fast follow-up within minutes.'],
] as const

const leadMetrics = [
  ['Cost Per Lead (CPL)', 'Ad spend divided by total leads acquired—managed alongside quality.'],
  ['Cost Per Qualified Lead (CPQL)', 'Ad spend divided by SQLs—the true measure of acquisition efficiency.'],
  ['Lead-to-Opportunity Rate', 'Percentage of leads that convert into active sales conversations.'],
  ['Sales Pipeline Value', 'Total potential revenue created by qualified marketing leads.'],
  ['Customer Acquisition Cost (CAC)', 'Total marketing & sales investment required to acquire one paying customer.'],
  ['Speed to Lead', 'Time elapsed between form submission and first sales contact.'],
] as const

const faqs = [
  ['What is lead generation?', 'Lead generation is the process of attracting target prospects, capturing their interest and contact details, qualifying their buying intent, and guiding them into your sales pipeline.'],
  ['How is a lead generation system different from a simple contact form?', 'A simple contact form just collects text. A lead generation system combines audience targeting, offer positioning, conversion landing pages, automated qualification, CRM syncing, and follow-up workflows designed to generate qualified revenue opportunities.'],
  ['What is the difference between an MQL and an SQL?', 'A Marketing Qualified Lead (MQL) has shown interest and fits basic profile criteria. A Sales Qualified Lead (SQL) has demonstrated clear buying intent, budget, and urgency, making them ready for a direct sales call.'],
  ['How do you ensure lead quality over just lead volume?', 'We engineer multi-step qualification forms, clear offer positioning, custom lead scoring, and tight campaign targeting. This filters out low-intent inquiries so your sales team only speaks with viable prospects.'],
  ['Which platforms do you use to generate leads?', 'We select channels based on your Ideal Customer Profile. Common channels include Google Search Ads (for immediate intent), Meta/LinkedIn Ads (for targeted audience reach), SEO/AEO (for sustainable organic volume), and content marketing.'],
  ['Can you integrate leads directly into our CRM?', 'Yes. We connect lead capture touchpoints directly into CRMs such as HubSpot, Salesforce, Zoho, and Pipedrive, configuring real-time notifications, lead routing rules, and status tracking.'],
  ['Do you build the landing pages and lead magnets too?', 'Yes. We write, design, and engineer custom conversion landing pages, multi-step forms, and high-value lead magnets (calculators, guides, assessments) as part of an end-to-end acquisition build.'],
  ['How fast can a lead generation campaign go live?', 'Audit and campaign strategy builds typically take 1 to 2 weeks. Full system setups—including custom landing page engineering, CRM integration, and multi-channel launch—take 3 to 4 weeks.'],
  ['Do you offer lead generation for both B2B and B2C businesses?', 'Yes. B2B lead generation focuses on longer sales cycles, professional decision-makers, and high-value consultations. B2C lead generation focuses on immediate direct response, instant quotes, and local service appointments.'],
  ['Do you guarantee a specific number of leads?', 'Responsible marketing agencies cannot ethically guarantee exact lead volumes, as performance depends on market dynamics, pricing, offer appeal, and sales execution. However, we guarantee rigorous optimization, transparent tracking, and data-backed management.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Lead Generation Services', url: 'https://rominelabs.com/services/lead-generation', description: metadata.description },
    { '@type': 'Service', name: 'Lead Generation Services', serviceType: 'Customer Acquisition & Sales Lead Engineering', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/lead-generation' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Lead Generation', item: 'https://rominelabs.com/services/lead-generation' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
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

// Visual Component 1: Lead Generation Engine Diagram
function LeadEngineVisual() {
  const steps = [
    { num: '01', title: 'Traffic Channel', desc: 'Search, Paid Ads & Content' },
    { num: '02', title: 'Value Offer', desc: 'Hooks, Guides & Calculators' },
    { num: '03', title: 'Landing Page', desc: 'High-intent conversion UX' },
    { num: '04', title: 'Multi-Step Form', desc: 'Interactive qualification' },
    { num: '05', title: 'AI & Rule Scoring', desc: 'ICP fit & MQL/SQL rating' },
    { num: '06', title: 'CRM & Sales', desc: 'Instant routing & nurture' },
  ]

  return (
    <div className="border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">System Architecture</span>
          <h3 className="font-serif text-lg text-white">Lead Generation Acquisition Engine</h3>
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

// Visual Component 2: Lead Qualification Scoring Interface Mockup
function LeadScoringMockup() {
  return (
    <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-[#E4E7EB] pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#C69A52]">Illustrative Qualification Model</span>
          <h3 className="font-serif text-lg font-normal text-[#0B1B35]">Lead Scoring & Qualification Card</h3>
        </div>
        <UserCheck className="size-5 text-[#C69A52]" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">ICP Industry Fit</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">95 / 100</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Tier-1 B2B Target</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Buying Authority</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">VP / C-Level</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Verified Decision Maker</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Project Timeline</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">Immediate</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Active Budget Approved</p>
        </div>
        <div className="border border-[#E4E7EB] bg-white p-4">
          <p className="font-sans text-xs text-[#687386]">Pipeline Status</p>
          <p className="mt-2 font-serif text-2xl font-normal text-[#0B1B35]">SQL Passed</p>
          <p className="mt-1 font-mono text-[10px] text-[#C69A52]">Routed to Sales Rep</p>
        </div>
      </div>
    </div>
  )
}

export default function LeadGenerationPage() {
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
              alt="Lead generation analytics and sales funnel data visualization" 
              fill 
              priority 
              sizes="100vw" 
              className="object-cover object-center opacity-25 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/85 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1B35] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <Eyebrow onDark>Customer Lead Acquisition</Eyebrow>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Turn Attention Into <span className="text-[#C69A52] font-serif italic">Qualified Opportunities.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
                We design and engineer complete lead acquisition systems—connecting target audience research, conversion landing pages, paid/organic distribution, qualification rules, and CRM routing to fuel sales growth.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Acquisition System</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span>Book a Discovery Call</span>
                </Link>
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
              <span className="text-[#0B1B35] font-semibold">Lead Generation</span>
            </nav>
          </Container>
        </div>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / SYSTEM VS FORM */}
        {/* ========================================== */}
        <section className="border-b border-[#E4E7EB] bg-white py-20 lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Strategic Positioning" 
                  title="Lead generation is a system, not a form." 
                />
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                  Collecting name and email addresses is easy. Acquiring high-intent, qualified leads that turn into closed revenue requires a connected architecture. If your traffic lacks buying intent, your offer is weak, or your lead qualification is broken, your sales team wastes time chasing unqualified contacts.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Traffic driven to generic, distraction-filled homepages.',
                    'Unclear value propositions that fail to communicate differentiation.',
                    'Long, friction-filled forms driving high abandonment.',
                    'Unqualified contacts overwhelming sales reps.',
                    'Slow speed-to-lead response times killing conversions.',
                    'CRM disconnects leaving leads unassigned or untracked.',
                    'Zero automated nurturing for not-yet-ready prospects.',
                    'Inability to attribute revenue back to specific channels.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 border-t border-[#E4E7EB] pt-3 font-sans text-sm font-medium text-[#111827]">
                      <span className="font-mono text-xs font-bold text-[#C69A52]">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-l-2 border-[#C69A52] bg-[#F7F5F0] p-6 font-sans text-sm leading-relaxed text-[#687386]">
                  <strong className="text-[#0B1B35]">The Romine Approach:</strong> We engineer the entire customer acquisition journey: aligning audience targeting, offer messaging, landing page UX, lead scoring, and automated CRM routing.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 3. SYSTEM DIAGRAM VISUAL */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-16 text-white border-b border-white/10">
          <Container>
            <LeadEngineVisual />
          </Container>
        </section>

        {/* ========================================== */}
        {/* 4. END-TO-END SYSTEM FLOW */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Connected Architecture" 
              title="How our acquisition engine works."
              description="Every step in the lead journey must be deliberate. We build integrated systems that bridge marketing acquisition and sales execution."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-4">
              {funnelStages.map(([title, desc]) => (
                <div key={title} className="bg-white p-6">
                  <p className="font-mono text-xs font-bold text-[#C69A52]">{title}</p>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="border border-[#E4E7EB] bg-white p-8">
                <h3 className="font-serif text-2xl font-normal text-[#0B1B35]">Quality Over Quantity</h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">
                  Generating hundreds of low-intent leads creates sales fatigue and wastes commercial budget. We optimize campaigns for Sales Qualified Leads (SQLs) and pipeline value rather than vanity contact counts.
                </p>
              </div>
              <div className="border border-[#E4E7EB] bg-white p-8">
                <h3 className="font-serif text-2xl font-normal text-[#0B1B35]">Speed-to-Lead Automation</h3>
                <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">
                  Prospect interest degrades exponentially within hours. Our systems route new qualified leads directly into your CRM, notifying reps instantly and firing immediate confirmation sequences.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 5. QUALIFICATION ENGINE & MOCKUP */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <Eyebrow onDark>Lead Qualification Engine</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-5xl leading-[1.12]">
                  Protect Your Sales Team's Time
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#687386]">
                  Not all leads are created equal. We build qualification logic directly into forms and post-submission workflows to score, qualify, and segment inquiries automatically.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {qualificationSteps.map(([title, desc]) => (
                    <div key={title} className="border border-white/10 bg-[#142B4A]/60 p-6 backdrop-blur-md">
                      <Filter className="size-5 text-[#C69A52]" />
                      <h3 className="mt-4 font-serif text-lg font-normal text-white">{title}</h3>
                      <p className="mt-2 font-sans text-xs leading-relaxed text-[#687386]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 6. LEAD SERVICES GRID */}
        {/* ========================================== */}
        <section id="services" className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Full-Spectrum Capability" 
              title="End-to-end lead acquisition services."
              description="From strategic offer design and custom landing page engineering to paid media acquisition and CRM automation."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-3">
              {leadServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-white p-7 transition hover:bg-[#F7F5F0]">
                  <Icon className="size-5 text-[#C69A52]" />
                  <h3 className="mt-6 font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <ArrowLink href="/contact">Audit My Acquisition Funnel</ArrowLink>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 7. DASHBOARD & PIPELINE MEASUREMENT */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Commercial Rigor" 
                  title="Track pipeline metrics that matter to leadership."
                  description="We manage lead generation using real financial and operational metrics. You always know your exact cost per qualified lead, pipeline opportunity value, and return on investment."
                />
              </div>
              <div className="lg:col-span-7">
                <LeadScoringMockup />
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 8. METRICS MANAGED */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Acquisition Performance" 
              title="Core pipeline KPIs we monitor and optimize."
              description="We focus on metrics that bridge marketing performance and sales conversion."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-3">
              {leadMetrics.map(([title, text]) => (
                <div key={title} className="bg-white p-7">
                  <h3 className="font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 9. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="System Integration" 
              title="How lead generation connects with your marketing ecosystem."
              description="Lead generation connects seamlessly across all digital acquisition and conversion practices."
            />

            <div className="mt-14 divide-y divide-[#E4E7EB] border-y border-[#E4E7EB]">
              {[
                ['Paid Media', 'Target high-intent audiences on Google, Meta, and LinkedIn with direct response lead campaigns.', '/services/paid-media', 'Explore Paid Media'],
                ['Conversion Rate Optimization', 'Optimize landing page copy, layout hierarchy, and multi-step forms to maximize conversion rates.', '/services/conversion-rate-optimization', 'Explore CRO'],
                ['SEO & AEO Services', 'Capture high-intent organic search queries and AI answer engine recommendations.', '/services/seo', 'Explore SEO Services'],
                ['Analytics & Tracking', 'Track full-funnel customer journeys from initial click to closed CRM revenue.', '/services/analytics-optimisation', 'Explore Analytics'],
              ].map(([a, b, href, c]) => (
                <div key={a} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr_220px] lg:items-center">
                  <h3 className="font-serif text-xl font-normal text-[#0B1B35]">{a}</h3>
                  <p className="font-sans text-xs leading-relaxed text-[#687386]">{b}</p>
                  <ArrowLink href={href}>{c}</ArrowLink>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionHeading 
                eyebrow="Frequently Asked Questions" 
                title="Answers to common lead generation questions."
                description="Direct clarity on how our acquisition systems operate."
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
                  <span>Talk to a Lead Generation Strategist</span>
                  <ArrowRight className="size-4 text-[#C69A52]" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 11. FINAL CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
          <Image 
            src="/images/hero-data.png" 
            alt="Lead generation engine abstract background" 
            fill 
            sizes="100vw" 
            className="object-cover object-center opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/90 to-[#142B4A]/80" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Eyebrow onDark>Start With Acquisition</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white leading-[1.08]">
                Ready to fuel your sales pipeline with qualified opportunities?
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                Schedule a consultation with our acquisition strategists. We will evaluate your current funnels and map a clear lead generation roadmap for your business.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Lead Generation System</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                >
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

      </main>
    </>
  )
}