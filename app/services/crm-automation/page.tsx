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
  GitBranch, 
  Layers, 
  Layout, 
  LineChart, 
  Lock, 
  Mail, 
  MessageSquare, 
  MousePointerClick, 
  Network, 
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
  title: 'CRM & Automation Services | RevOps & Lifecycle Engineering | Romine Labs',
  description: 'Romine Labs connects customer journeys, CRMs, and internal operations. We architect automated workflows, sales pipelines, lead routing, and revenue systems.',
  alternates: { canonical: 'https://rominelabs.com/services/crm-automation' },
  openGraph: {
    title: 'CRM & Automation Services | Romine Labs',
    description: 'Eliminate manual data entry and disconnected software. Architect automated CRM workflows, lead qualification, and customer lifecycle systems.',
    url: 'https://rominelabs.com/services/crm-automation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM & Automation Services | Romine Labs',
    description: 'Build a business that runs smarter. Connected CRMs, lead routing, sales pipelines, AI workflows, and RevOps infrastructure.',
  },
}

const crmServices = [
  ['CRM Strategy & Lifecycle Architecture', 'Map customer lifecycle stages, pipeline rules, contact properties, and data models aligned to your actual business process.', Database],
  ['CRM System Selection & Setup', 'Evaluate, configure, and customize platforms like HubSpot, Salesforce, Zoho, or Pipedrive tailored to your team size and sales model.', Layout],
  ['Data Migration & Cleaning', 'Clean, deduplicate, normalize, and map legacy spreadsheets or outdated databases into a structured, unified CRM instance.', RefreshCw],
  ['Custom System Integrations', 'Connect your website, forms, advertising accounts, payment processors, calendars, and support tools cleanly via APIs and webhooks.', Network],
  ['Automated Lead Routing & Assignment', 'Eliminate delayed follow-ups with instant rule-based lead assignment based on territory, deal size, availability, or service type.', Workflow],
  ['Lead Qualification & Scoring', 'Build scoring frameworks using form inputs, email engagement, and website activity to highlight high-intent SQLs for sales reps.', Filter],
  ['Sales Pipeline & Deal Automation', 'Automate task creation, stage-change alerts, deal probability updates, and follow-up reminders so no opportunity falls through the cracks.', TrendingUp],
  ['Customer Onboarding Workflows', 'Trigger automated welcome sequences, document requests, internal task assignments, and check-ins immediately after a deal closes.', Sparkles],
  ['Lifecycle Email & Nurture Workflows', 'Deliver context-aware email sequences triggered by user behavior, stage transitions, or inactivity to drive retention and upsells.', Mail],
  ['RevOps Analytics & Executive Dashboards', 'Build pipeline reporting, conversion rate tracking, sales cycle benchmarks, and customer acquisition cost dashboards.', BarChart3],
] as const

const pipelineStages = [
  ['New Lead', 'Inquiry captured & validated', '100% Volume'],
  ['Qualified (SQL)', 'Fit & intent criteria met', '35% Conversion'],
  ['Discovery Call', 'Need & timeline evaluated', '65% Progress'],
  ['Proposal / Demo', 'Custom solution presented', '50% Progress'],
  ['Negotiation', 'Terms & pricing reviewed', '80% Progress'],
  ['Closed Won', 'Contract signed & onboarded', 'Revenue Realized'],
] as const

const workflowSteps = [
  ['Trigger', 'Prospect submits consultation form on landing page.'],
  ['Condition Check', 'Evaluate company size, geography, and service selection.'],
  ['CRM Action', 'Create contact record, assign deal owner, and set lead score.'],
  ['Automation Action', 'Send instant personalized email confirmation with calendar link.'],
  ['Notification', 'Alert assigned sales rep via internal chat with lead context.'],
  ['Fallback Action', 'If unbooked after 48 hours, enroll in 3-part educational email drip.'],
] as const

const processSteps = [
  ['01', 'Discovery & System Audit', 'We inspect your existing tools, data quality, sales process, manual bottlenecks, and operational friction.'],
  ['02', 'Customer Lifecycle Mapping', 'We define clear lifecycle stages (MQL, SQL, Opportunity, Customer) and trigger conditions across marketing and sales.'],
  ['03', 'Architecture & Data Model', 'We design contact properties, deal pipelines, custom fields, and governance rules before touching any software.'],
  ['04', 'Integration & Webhooks', 'We connect web forms, advertising platforms, payment gateways, and scheduling software to your CRM core.'],
  ['05', 'Workflow & Rule Building', 'We construct automated lead routing, tasks, internal alerts, email nurtures, and onboarding triggers.'],
  ['06', 'Data Migration & Testing', 'We clean, map, and import historic data while rigorously testing edge cases across every automated branch.'],
  ['07', 'Team Onboarding & SOPs', 'We train your sales and ops teams with clear documentation and simple interface views to ensure rapid adoption.'],
  ['08', 'Monitoring & Refinement', 'We monitor workflow logs, error alerts, rep adoption, and pipeline conversion rates to refine performance continually.'],
] as const

const maturityLevels = [
  ['Level 01: Disconnected', 'Spreadsheets, manual lead entry, lost follow-ups, and no central history.'],
  ['Level 02: Basic CRM', 'Central contact database used as a digital address book without automation.'],
  ['Level 03: Structured Pipeline', 'Clear deal stages, defined lifecycle rules, and manual team accountability.'],
  ['Level 04: Connected Engine', 'Automated lead routing, instant notifications, website sync, and email nurtures.'],
  ['Level 05: Revenue Operations', 'Fully integrated CRM, AI assistance, automated onboarding, and multi-touch attribution.'],
] as const

const faqs = [
  ['What is the difference between a CRM and marketing automation?', 'A CRM (Customer Relationship Management) is the central database that organizes contact history, deals, activities, and customer status. Marketing automation is the engine that uses that CRM data to trigger automated actions—such as sending emails, assigning tasks, routing leads, and updating deal stages.'],
  ['Will a new CRM setup force us to change how our team sells?', 'No. We design CRM architectures around your proven sales process rather than forcing rigid templates. The goal is to eliminate administrative drag so your sales reps spend more time speaking with qualified prospects and less time typing notes.'],
  ['Can you connect our custom Next.js website or forms to our CRM?', 'Yes. We specialize in server-side API integrations, webhooks, and secure backend form processing. Leads captured on your custom website flow instantly into your CRM with full attribution context and zero exposed API keys.'],
  ['Can you help us migrate data from spreadsheets or an old CRM?', 'Yes. We clean, deduplicate, format, and map your historic contacts, company records, and deals into your new CRM instance to ensure data integrity from day one.'],
  ['How do you prevent automated emails from sounding robotic or spammy?', 'We use behavioral triggers, dynamic personalization tokens, and clean plain-text formatting matched to specific user actions. Emails feel like personal 1-to-1 communications rather than blast newsletters.'],
  ['Which CRM platforms do you work with?', 'We design strategies for major enterprise ecosystems including HubSpot, Salesforce, Zoho CRM, and Pipedrive. We select or optimize platforms based on your business model, team size, and integration requirements.'],
  ['How does AI fit into CRM and automation workflows?', 'AI can be embedded into workflows to summarize long customer emails, draft initial response templates, categorize inbound inquiry sentiment, extract data from documents, and assist with lead scoring.'],
  ['How long does a typical CRM and automation implementation take?', 'A focused CRM optimization or integration build takes 2 to 3 weeks. A complete enterprise implementation—including data migration, custom integrations, pipeline architecture, and team training—typically takes 4 to 8 weeks.'],
  ['How do CRM and automation support our other marketing efforts?', 'Connected CRMs complete the marketing loop. They allow your paid media, SEO, social, and lead generation campaigns to be evaluated on closed-won revenue and pipeline value rather than top-of-funnel form fills alone.'],
  ['Do you provide training for our team after the system is built?', 'Yes. System adoption is critical. We provide clear standard operating procedures (SOPs), video walkthroughs, and live team training sessions to ensure your staff uses the CRM comfortably.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'CRM & Automation Services', url: 'https://rominelabs.com/services/crm-automation', description: metadata.description },
    { '@type': 'Service', name: 'CRM & Automation Services', serviceType: 'Revenue Operations, CRM Architecture & Business Process Automation', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/crm-automation' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'CRM & Automation', item: 'https://rominelabs.com/services/crm-automation' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

function Label({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase tracking-[.2em] text-brand">{children}</p> }
function Heading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) { return <div className="max-w-4xl"><Label>{label}</Label><h2 className="mt-4 text-4xl font-black tracking-[-.035em] sm:text-5xl lg:text-6xl">{title}</h2>{children && <p className="mt-6 text-lg leading-8 text-muted-foreground">{children}</p>}</div> }
function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand">{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link> }

export default function CrmAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-hidden bg-background text-foreground">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section data-hero-dark className="relative min-h-[55vh] overflow-hidden bg-slate-950 text-white">
          <Image src="/images/hero-data.png" alt="CRM and business process automation data flow visualization" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/50" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-white/80">
                <Workflow className="size-3.5 text-brand" /> CRM & AUTOMATION
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
                Build a Business That <span className="text-brand">Runs Smarter.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                We connect customer data, sales pipelines, website forms, and internal operations into automated systems that eliminate manual friction, speed up sales follow-ups, and power sustainable growth.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Automate My Business <ArrowRight className="size-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white hover:bg-white/10">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / CONNECTED VS DISCONNECTED */}
        {/* ========================================== */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-5">
              <Heading label="Operational Reality" title="Your business runs on systems. Are they connected?" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-8 text-muted-foreground">
                Most companies do not suffer from a lack of software tools. They suffer from software silos. When lead forms, CRMs, email tools, sales calendars, and payment gateways operate independently, your team wastes hours copying data, dropping follow-ups, and working blindly.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Leads sitting unassigned in inbox folders for hours.',
                  'Manual data entry into multiple spreadsheets.',
                  'Sales reps forgetting crucial prospect follow-up tasks.',
                  'No central history of customer communications.',
                  'Inability to track closed revenue back to ad channels.',
                  'Post-sale onboarding requiring manual email sends.',
                  'Outdated CRM records full of duplicate entries.',
                  'Disconnected tools causing customer support confusion.',
                ].map((x) => (
                  <div key={x} className="flex gap-3 border-t border-border py-3 text-sm leading-6">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-9 border-l-2 border-brand pl-5 text-sm leading-7 text-muted-foreground">
                CRM is the central memory of your organization. Automation is the operational backbone that moves work forward reliably without human error.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. CONNECTED ECOSYSTEM DIAGRAM */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="System Integration" title="Connecting the dots across your customer lifecycle.">
              We build seamless API webhooks and data pipelines that connect every digital touchpoint directly into your core CRM engine.
            </Heading>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {[
                ['01. Capture', 'Website forms, lead ads, calendar bookings, and phone calls.'],
                ['02. Structure', 'Data validation, deduplication, contact & company creation.'],
                ['03. Score & Route', 'Lead scoring, MQL/SQL rules, and instant owner assignment.'],
                ['04. Sales Action', 'Deal creation, task assignment, and SMS/chat alerts.'],
                ['05. Nurture', 'Behavioral email drips, retargeting sync, and content delivery.'],
                ['06. Conversion', 'Contract signature, payment gateway sync, deal won status.'],
                ['07. Onboarding', 'Automated welcome packet, task generation, team handoff.'],
                ['08. Intelligence', 'Closed-loop attribution reporting back to ad platforms.'],
              ].map(([title, desc]) => (
                <div key={title} className="bg-background p-6">
                  <p className="font-mono text-xs text-brand">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-black">Persuasion & Process Efficiency</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Speed to lead is critical. Responding to a qualified prospect within 5 minutes increases conversion rates exponentially compared to responding an hour later. Automation ensures instant action every time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Data Hygiene & Governance</h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  A CRM is only as useful as the quality of data inside it. We establish strict property formatting, required field rules, and automated deduplication routines to keep your customer database clean.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. SALES PIPELINE CANVAS */}
        {/* ========================================== */}
        <section className="bg-slate-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Label>Pipeline Visibility</Label>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Engineered Sales Pipelines</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Transform vague sales stages into a structured pipeline. Reps always know what action to take next, and leadership gains clear revenue forecasting.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-white/10 bg-white/[.03] p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Sales Pipeline Architecture</p>
                  <div className="mt-6 space-y-4">
                    {pipelineStages.map(([stage, desc, metric]) => (
                      <div key={stage} className="border-b border-white/10 pb-3 last:border-0">
                        <div className="flex justify-between text-sm font-bold">
                          <span>{stage}</span>
                          <span className="text-brand font-mono text-xs">{metric}</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. CRM SERVICES GRID */}
        {/* ========================================== */}
        <section id="services" className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Complete Capability" title="Full-service CRM, automation, and RevOps engineering.">
              From strategic data modeling and custom API webhooks to sales pipeline automation and executive reporting dashboards.
            </Heading>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {crmServices.map(([title, text, Icon]) => (
                <article key={title} className="bg-background p-7">
                  <Icon className="size-5 text-brand" />
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand">
              Audit My CRM Architecture <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. AUTOMATION LOGIC CANVAS */}
        {/* ========================================== */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Heading label="Logic Engine" title="Trigger → Condition → Action Architecture" />
                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  We construct reliable multi-branch workflow logic. Every trigger evaluates lead context and executes precise actions across your technology stack without human intervention.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-border bg-background p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">Illustrative Workflow Canvas</p>
                  <div className="mt-6 space-y-4">
                    {workflowSteps.map(([step, desc], i) => (
                      <div key={step} className="border-b border-border pb-3 last:border-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-brand font-bold">Step 0{i + 1} [{step}]</span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. MATURITY LADDER */}
        {/* ========================================== */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="System Evolution" title="Where does your organization sit on the CRM maturity ladder?">
              We help companies transition from manual spreadsheet chaos into fully integrated Revenue Operations systems.
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
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Our 8-stage implementation roadmap.</h2>
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
              Start Implementation Blueprint <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading label="Integrated Growth" title="How CRM & Automation power your growth engine.">
              Your CRM connects seamlessly with acquisition, conversion, and analytics practices across your business.
            </Heading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {[
                ['Lead Generation', 'Route inbound inquiries instantly into qualified sales pipelines.', '/services/lead-generation', 'Explore Lead Generation'],
                ['Conversion Rate Optimization', 'Capture lead context and optimize multi-step form submissions.', '/services/conversion-rate-optimization', 'Explore CRO'],
                ['Analytics & Tracking', 'Feed closed-won revenue data back to ad platforms for closed-loop attribution.', '/services/analytics-tracking', 'Explore Analytics'],
                ['Web Development', 'Integrate custom API webhooks and serverless form actions natively.', '/services/web-development', 'Explore Web Engineering'],
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
            <Heading label="Frequently asked questions" title="Answers to common CRM & automation questions.">
              Direct clarity on how our system architecture and integration services operate.
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
              Talk to a CRM Consultant <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 11. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
          <Image src="/images/hero-data.png" alt="Connected business operations abstract background" fill sizes="100vw" className="object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/98 via-slate-950/72 to-slate-950/40" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <Label>Your business shouldn't depend on manual work</Label>
              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl lg:text-7xl">
                Ready to connect your customer journey and automate repetitive work?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Schedule a consultation with our RevOps architects. We will evaluate your current technology stack and design a connected system for your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold text-white hover:bg-brand/90">
                  Build My CRM & Automation System <ArrowRight className="size-4" />
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