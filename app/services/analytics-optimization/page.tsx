import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Activity, 
  ArrowRight, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Cpu, 
  Database, 
  Eye, 
  FileSearch, 
  FileText, 
  Filter, 
  FlaskConical, 
  GitBranch, 
  Globe, 
  Layers, 
  Layout, 
  LineChart, 
  Lock, 
  MousePointerClick, 
  Network, 
  PieChart, 
  RefreshCw, 
  Search, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Workflow, 
  Zap 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analytics & Optimisation Services | Data-Driven Growth | Romine Labs',
  description: 'Romine Labs builds measurement systems, attribution frameworks, conversion tracking, customer journey audits, A/B testing programs, and continuous digital optimisation.',
  alternates: { canonical: 'https://rominelabs.com/services/analytics-optimisation' },
  openGraph: {
    title: 'Analytics & Optimisation Services | Romine Labs',
    description: 'Turn business data into clearer decisions and continuous improvement. Technical GA4/GTM measurement, attribution, CRO, and experimentation frameworks.',
    url: 'https://rominelabs.com/services/analytics-optimisation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics & Optimisation Services | Romine Labs',
    description: 'Measure what matters. Optimise what moves the business. Comprehensive digital analytics, tracking, attribution, and experimentation.',
  },
}

const analyticsServices = [
  ['GA4 Architecture & Implementation', 'Engineered event models, custom dimensions, parameter schemas, cross-domain paths, and clean property configurations built around business objectives.', LineChart],
  ['Google Tag Manager & Governance', 'Structured tag container management, trigger conditions, custom variables, version control, consent mode integration, and GTM audits.', Layers],
  ['Server-Side & API Tracking', 'First-party measurement infrastructure utilizing serverless APIs and Conversions API (CAPI) setups for resilient signal capture.', Server],
  ['Attribution Modeling & CRM Sync', 'Connect multi-touch digital channels with downstream CRM records (HubSpot, Salesforce) to attribute closed-won revenue accurately.', Network],
  ['Customer Journey & Funnel Audits', 'Diagnose exact friction points, drop-off stages, messaging disconnects, and UX roadblocks across paid and organic user paths.', Filter],
  ['Conversion Rate Optimisation (CRO)', 'Form simplification, CTA hierarchy testing, value proposition positioning, and trust signal placement engineered to raise baseline conversion rates.', Target],
  ['A/B & Multivariate Experimentation', 'Hypothesis-driven controlled testing, variant engineering, statistical significance validation, and iterative rollout management.', FlaskConical],
  ['Data Quality & Tracking Audits', 'Uncover duplicate tags, broken conversion triggers, referral pollution, missing UTM parameters, and data discrepancies before they distort strategy.', FileSearch],
  ['Executive & Operational Dashboards', 'Decision-ready reporting interfaces in Looker Studio or custom BI tools that translate raw numbers into actionable growth priorities.', BarChart3],
  ['Website Performance & Core Web Vitals', 'Systematic refactoring of rendering paths, scripts, and asset loading to eliminate layout shifts and speed bottlenecks affecting conversions.', Zap],
] as const

const processSteps = [
  ['01', 'Discover & Objective Alignment', 'We clarify your core commercial KPIs, sales cycles, customer acquisition economics, and strategic growth priorities.'],
  ['02', 'Data Quality & Tracking Audit', 'We inspect current GA4, GTM, ad pixels, CRM routing, and event structures to find missing, duplicated, or misconfigured signals.'],
  ['03', 'Measurement Architecture', 'We author a comprehensive tracking plan mapping business goals to specific events, parameters, platforms, and reporting outputs.'],
  ['04', 'Instrumentation & Verification', 'We build clean GTM containers, server-side APIs, and custom website events, verifying data accuracy in live debugging environments.'],
  ['05', 'Funnel & Journey Diagnosis', 'We analyze user movement across traffic sources, landing pages, forms, and checkout steps to isolate exact drop-off points.'],
  ['06', 'Hypothesis & Prioritisation', 'We formulate test hypotheses and rank opportunities using Impact x Effort matrices to focus resources on high-value wins.'],
  ['07', 'Experimentation & Testing', 'We design, code, and execute controlled A/B or multivariate tests, monitoring statistical significance and pipeline impact.'],
  ['08', 'Continuous Optimisation', 'We deploy winning variations permanently, document learnings, and feed new insights into the next optimisation cycle.'],
] as const

const measurementPlan = [
  ['Generate Qualified B2B Leads', 'Sales Qualified Leads (SQLs)', 'Form Submission / Call Booking', 'generate_lead', 'GA4 / CRM', 'Sales Team'],
  ['E-Commerce Revenue Growth', 'Revenue Per Visitor (RPV)', 'Completed Purchase', 'purchase', 'GA4 / Shopify', 'Growth Team'],
  ['Trial Signups & SaaS Activation', 'Trial Activation Rate', 'Account Creation', 'sign_up', 'GA4 / Application', 'Product Team'],
  ['Service Consultations', 'Consultation Rate', 'Calendar Selection', 'booking_complete', 'GA4 / CRM', 'Marketing Team'],
] as const

const maturityLevels = [
  ['Level 01: Uncalibrated', 'Basic tracking installed without custom events, resulting in untrusted numbers and unmeasured conversions.'],
  ['Level 02: Tracking', 'Standard analytics collecting basic page views and form fills, but isolated from ad channels and CRM outcomes.'],
  ['Level 03: Measured', 'Core business conversions and key events defined accurately across GA4, GTM, and primary advertising pixels.'],
  ['Level 04: Integrated', 'Marketing channels, website events, and sales pipeline outcomes connected seamlessly into unified attribution dashboards.'],
  ['Level 05: Optimised', 'Continuous experimentation, automated anomaly detection, and data-backed CRO driving iterative revenue growth.'],
] as const

const faqs = [
  ['How is Analytics & Optimisation different from standard Google Analytics setup?', 'Standard analytics setups collect generic page views without business context. Our service combines technical measurement (GA4, GTM, server-side APIs, CRM sync) with active optimisation (funnel diagnosis, UX auditing, CRO, and A/B testing) to turn data into continuous revenue improvements.'],
  ['Why do our ad platforms report different conversion numbers than GA4?', 'Ad platforms (Meta, Google Ads) use different attribution windows, cross-device tracking rules, and self-reporting credit methodologies. GA4 uses first-party event models. We build unified attribution frameworks to reconcile these differences and provide a single source of truth.'],
  ['Do we need a massive amount of traffic to perform Conversion Rate Optimisation (CRO)?', 'No. While high-traffic websites run rapid A/B tests to reach statistical significance quickly, lower-traffic sites benefit immensely from qualitative funnel diagnostics, form friction reduction, messaging alignment, and high-impact UX improvements.'],
  ['How do you fix inaccurate or duplicated analytics data?', 'We perform a comprehensive Tracking Audit to isolate duplicate tags, broken triggers, referral self-attribution, missing UTMs, and consent mode issues. We then deploy a clean, documented GTM architecture to guarantee data integrity.'],
  ['What is server-side tracking, and do we need it?', 'Server-side tracking processes analytics and ad conversion events on a secure cloud server rather than directly in the user browser. It bypasses ad blockers, improves page speed, protects data privacy, and recovers signal lost to browser restrictions.'],
  ['How do you connect website analytics to our CRM?', 'We map website event identifiers (such as client IDs, UTM context, and form submission signals) directly into CRM records like HubSpot, Salesforce, or Zoho via webhooks and server-side integrations to track closed-won revenue.'],
  ['What is an Impact x Effort prioritization matrix?', 'It is a structured framework used to rank optimisation tests. Opportunities are evaluated based on potential commercial lift (Impact) vs. engineering complexity (Effort), ensuring high-value, fast-turnaround tests are executed first.'],
  ['How long does it take to see results from analytics and optimisation?', 'Fixing broken tracking and executing immediate UX/form improvements delivers quick wins within 2 to 3 weeks. Controlled A/B testing programs run on continuous 2- to 4-week cycles to compound gains over time.'],
  ['What deliverables do we receive during an engagement?', 'Deliverables include a comprehensive Tracking & CRO Audit, a documented Measurement Plan (event taxonomy), clean GTM/GA4 implementations, server-side tracking setups, custom Looker Studio dashboards, and an Experimentation Roadmap.'],
  ['Will running A/B tests or tracking scripts slow down our website?', 'No. We engineer custom, lightweight scripts and load tags asynchronously via GTM or server-side APIs. All implementations are refactored to preserve sub-second Core Web Vitals performance.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'Analytics & Optimisation Services', url: 'https://rominelabs.com/services/analytics-optimisation', description: metadata.description },
    { '@type': 'Service', name: 'Analytics & Optimisation Services', serviceType: 'Digital Analytics, Attribution, CRO & Continuous Optimisation', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/analytics-optimisation' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Analytics & Optimisation', item: 'https://rominelabs.com/services/analytics-optimisation' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }
function Server(props: React.SVGProps<SVGSVGElement>) { return <Database {...props} /> }

export default function AnalyticsOptimisationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="Digital analytics and performance optimisation dashboard environment" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <BarChart3 className="size-3.5 text-brand" /> ANALYTICS & OPTIMISATION
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                Turn Business Data <span className="text-brand">Into Better Decisions.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We engineer reliable measurement infrastructure, attribution models, customer journey diagnostics, and continuous CRO experimentation programs that turn raw metrics into growth.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Improve My Performance <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / THE OPTIMISATION LOOP */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="Growth Philosophy" title="Analytics is more than a passive dashboard." />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                A dashboard tells you what happened yesterday. A true optimisation system tells you why it happened, where friction exists, which acquisition channels drive real pipeline, and what specific experiments to run next to increase revenue.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Inaccurate, uncalibrated GA4 properties full of noise.',
                  'Missing or double-counted primary conversion events.',
                  'Inconsistent UTM campaign parameters across marketing.',
                  'Ad channels taking 100% credit for the same conversion.',
                  'High website traffic with zero visibility into drop-offs.',
                  'A/B tests launched on opinion rather than data evidence.',
                  'Analytics disconnected from downstream CRM pipeline.',
                  'Dashboards that collect dust without driving action.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                We combine technical tracking architecture with active Conversion Rate Optimisation (CRO) to build a repeatable loop: Measure → Understand → Diagnose → Prioritise → Test → Learn → Optimise.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. THE 7-STAGE OPTIMISATION LOOP DIAGRAM */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Operating System" title="From data collection to continuous revenue improvement.">
              Optimization is an ongoing discipline. Each stage feeds insights directly into the next refinement to compound commercial gains.
            </Heading>

            <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-7">
              {[
                ['01. Measure', 'Collect clean, verified data across web, app, and server APIs.'],
                ['02. Understand', 'Analyze customer intent, channel attribution, and user behavior.'],
                ['03. Diagnose', 'Pinpoint exact points of friction, drop-off, and drop-out.'],
                ['04. Prioritise', 'Score opportunities using Impact x Effort feasibility frameworks.'],
                ['05. Test', 'Execute controlled A/B and multivariate experiments.'],
                ['06. Optimise', 'Deploy validated winning variants into core codebase.'],
                ['07. Learn', 'Document statistical findings to inform future iterations.'],
              ].map(([stage, desc]) => (
                <div key={stage} className="bg-background p-6">
                  <p className="font-mono text-xs text-brand font-bold">{stage}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black">Data Hygiene & Signal Resilience</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  With browser privacy shifts and ad blockers, client-side tracking alone is insufficient. We deploy server-side measurement pipelines (CAPI, custom webhooks) to capture compliant, first-party signals reliably.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Closed-Loop Revenue Attribution</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Form submissions are only step one. We connect website event models directly to your CRM (HubSpot, Salesforce) to evaluate marketing channels against actual closed-won deal value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. MOCKUP METRIC INTERFACE (NON-IMAGE VISUAL) */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Label>Decision Architecture</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Executive & Operational Reporting</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Different stakeholders need different signals. We engineer decision-ready dashboards that present high-level KPIs for executives and detailed channel diagnostics for growth teams.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-white/10 bg-white/[.03] p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Growth Dashboard</p>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-white/10 pb-6">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Total Traffic</p>
                      <p className="text-xl font-black text-white mt-1">24,820</p>
                      <span className="text-[10px] font-mono text-emerald-400">↑ +14.2%</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Qualified SQLs</p>
                      <p className="text-xl font-black text-white mt-1">1,248</p>
                      <span className="text-[10px] font-mono text-emerald-400">↑ +22.8%</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Conversion Rate</p>
                      <p className="text-xl font-black text-white mt-1">4.82%</p>
                      <span className="text-[10px] font-mono text-emerald-400">↑ +1.15%</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Pipeline Value</p>
                      <p className="text-xl font-black text-white mt-1">$84,200</p>
                      <span className="text-[10px] font-mono text-emerald-400">↑ +18.5%</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      ['Organic Search (SEO)', '9,420 Visits', '4.2% CR', '$32,100 Value'],
                      ['Paid Search (Google Ads)', '6,180 Visits', '5.8% CR', '$28,400 Value'],
                      ['Paid Social (Meta/LinkedIn)', '5,210 Visits', '3.9% CR', '$15,200 Value'],
                      ['Direct & Referral', '4,010 Visits', '5.1% CR', '$8,500 Value'],
                    ].map(([channel, visits, cr, val]) => (
                      <div key={channel} className="flex items-center justify-between text-xs border-b border-white/5 pb-2 last:border-0">
                        <span className="font-semibold text-white">{channel}</span>
                        <div className="flex gap-4 text-slate-400 font-mono text-[11px]">
                          <span>{visits}</span>
                          <span>{cr}</span>
                          <span className="text-brand font-bold">{val}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. SERVICES GRID */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Full-Spectrum Capability" title="Analytics & Optimisation Services built for commercial outcomes.">
              From technical GTM and serverless tracking setups to customer journey auditing and controlled A/B testing programs.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {analyticsServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Audit My Analytics & Tracking <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. MEASUREMENT PLAN FRAMEWORK */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Measurement Plan" title="Aligning business goals directly to technical event signals.">
              We begin every engagement by documenting what matters to your business model before touching tag containers or writing code.
            </Heading>
            <div className="mt-14 overflow-x-auto border border-border bg-background">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50 font-mono text-xs uppercase text-brand">
                    <th className="p-4 font-bold">Business Goal</th>
                    <th className="p-4 font-bold">Core KPI</th>
                    <th className="p-4 font-bold">Conversion Action</th>
                    <th className="p-4 font-bold">Event Name</th>
                    <th className="p-4 font-bold">Data Source</th>
                    <th className="p-4 font-bold">Owner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {measurementPlan.map(([goal, kpi, action, event, source, owner]) => (
                    <tr key={goal} className="hover:bg-muted/20">
                      <td className="p-4 font-semibold text-foreground">{goal}</td>
                      <td className="p-4 text-muted-foreground">{kpi}</td>
                      <td className="p-4 text-muted-foreground">{action}</td>
                      <td className="p-4 font-mono text-xs text-brand font-bold">{event}</td>
                      <td className="p-4 text-xs font-mono text-slate-500">{source}</td>
                      <td className="p-4 text-xs font-semibold">{owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. MATURITY LADDER */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Analytics Maturity" title="Where does your business sit on the measurement ladder?">
              We help companies transition from uncalibrated noise to continuous, data-backed revenue optimisation.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {maturityLevels.map(([title, desc]) => (
                <div key={title} className="bg-background p-6">
                  <h3 className="font-black text-base">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. PROCESS TIMELINE */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Label>Predictable Execution</Label>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage methodology.</h2>
            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(([n, a, b]) => (
                <div key={n} className="bg-slate-950 p-7">
                  <span className="font-mono text-xs text-brand">{n}</span>
                  <h3 className="mt-6 text-lg font-black">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{b}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold text-white">
              Request an Analytics Audit <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated Growth" title="How measurement connects across your digital marketing stack.">
              Analytics and optimisation provide the intelligence layer that enhances performance across every practice.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Conversion Rate Optimization', 'Test landing pages, messaging, and forms using data-driven CRO hypotheses.', '/services/conversion-rate-optimization', 'Explore CRO Services'],
                ['Paid Media', 'Attribute leads and revenue accurately to lower Cost Per Acquisition (CPA).', '/services/paid-media', 'Explore Paid Media'],
                ['CRM & Automation', 'Sync website interaction signals directly into CRM contact records and pipelines.', '/services/crm-automation', 'Explore CRM & Automation'],
                ['Web Development', 'Refactor technical performance, image pipelines, and Core Web Vitals.', '/services/web-development', 'Explore Web Engineering'],
              ].map(([a, b, href, c]) => (
                <div key={a} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr_220px] lg:items-center">
                  <h3 className="text-xl font-black">{a}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{b}</p>
                  <ArrowLink href={href}>{c}</ArrowLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
            <Heading label="Frequently asked questions" title="Answers to common analytics & optimisation questions.">
              Direct clarity on how our measurement frameworks, tracking audits, and CRO experimentation programs operate.
            </Heading>
            <div className="mt-14 border-y border-border">
              {faqs.map(([q, a]) => (
                <details key={q} className="group border-b border-border last:border-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                    <span>{q}</span>
                    <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-bold text-background">
              Talk to an Analytics Specialist <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="Analytics and performance optimization abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Stop guessing. Start optimising.</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to turn your business data into continuous revenue growth?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our analytics architects. We will audit your current measurement setup and present a clear roadmap for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Improve My Performance <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}