import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Bot, 
  Check, 
  ChevronRight, 
  Clock, 
  Cpu, 
  Database, 
  FileText, 
  Filter, 
  GitBranch, 
  Globe, 
  HelpCircle, 
  Layers, 
  Layout, 
  LineChart, 
  Lock, 
  Mail, 
  MessageSquare, 
  Network, 
  RefreshCw, 
  Scale, 
  Search, 
  Send, 
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
  title: 'AI & Automation Services | Intelligent Business Systems | Romine Labs',
  description: 'Romine Labs designs AI-powered workflows, intelligent agents, CRM integrations, customer support systems, and automated business processes that reduce manual work and accelerate growth.',
  alternates: { canonical: 'https://rominelabs.com/services/ai-automation' },
  openGraph: {
    title: 'AI & Automation Services | Romine Labs',
    description: 'Automate repetitive operations and build intelligent systems. AI customer support, document processing, automated lead qualification, and connected workflows.',
    url: 'https://rominelabs.com/services/ai-automation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automation Services | Romine Labs',
    description: 'Build smarter business systems. Connected workflows, AI assistants, automated CRM updates, and intelligent customer journey infrastructure.',
  },
}

const automationCapabilities = [
  ['Lead Capture & Qualification', 'Automatically capture leads across forms, campaigns, and WhatsApp. AI classifies intent and qualifies contacts before routing to sales.', Target],
  ['Sales Follow-Up & Routing', 'Trigger instant multi-channel follow-ups after form submissions, quote requests, or missed calls based on lead priority and rep availability.', Zap],
  ['CRM & Data Synchronization', 'Eliminate manual data entry. Auto-create contacts, update pipeline stages, record interaction logs, and assign tasks across platforms.', Database],
  ['AI Customer Support Agents', 'Conversational AI assistants that answer routine questions, retrieve approved knowledge, log tickets, and escalate complex issues seamlessly.', Bot],
  ['Document Intelligence & Extraction', 'Extract structured information from PDFs, invoices, contracts, and applications automatically using advanced language and document models.', FileText],
  ['WhatsApp & Conversational AI', 'Automate customer support, appointment reminders, lead qualification, and order updates via native messaging APIs.', MessageSquare],
  ['Appointment & Calendar Systems', 'Automate booking requests, calendar sync, confirmation notifications, multi-step reminders, and CRM status updates.', Clock],
  ['Automated Reporting & Alerts', 'Aggregate data across marketing, sales, and operations into automated executive summaries, daily digests, and exception alerts.', BarChart3],
  ['Internal SOP Knowledge Assistants', 'Build secure, internal AI assistants connected directly to your company documentation, policies, and operating procedures.', Cpu],
  ['Content Repurposing Workflows', 'Automate transcription, key-takeaway extraction, and micro-content generation from long-form video, podcasts, and webinars.', RefreshCw],
] as const

const aiSystems = [
  ['AI Customer Support Agents', 'Conversational website and messaging assistants that resolve common FAQs, check order statuses, gather customer details, and hand off to human agents when confidence is low.', Bot],
  ['AI Lead Qualification Engines', 'Intelligent scoring workflows that analyze lead responses, industry profiles, budget signals, and urgency to categorize inbound inquiries into Priority SQLs.', Filter],
  ['Internal Knowledge Assistants', 'Secure AI assistants connected exclusively to your approved SOPs, product documentation, and internal manuals to give team members instant, accurate answers.', Search],
  ['Document Processing Pipelines', 'Automated document extraction systems that parse unstructured PDFs, invoices, forms, and contracts into clean, structured data for your database.', FileText],
  ['AI-Assisted Content Workflows', 'Structured content engines that transcribe long-form media, draft initial outlines, generate social snippets, and format multi-channel creative assets for human review.', Sparkles],
  ['Intelligent Reporting & Summarization', 'Systems that process raw analytics, CRM logs, and campaign performance data to generate human-readable executive digests and anomaly notifications.', LineChart],
] as const

const traditionalVsAi = {
  traditional: [
    ['Predictable Rules', 'Runs strictly on predefined IF/THEN logic.'],
    ['Form Data Capture', 'Creates a record when a form is submitted.'],
    ['Scheduled Alerts', 'Sends reminders based on fixed dates and times.'],
    ['Fixed Pipeline Shifts', 'Moves deal stage when a field is checked.'],
  ],
  aiPowered: [
    ['Language Interpretation', 'Understands context, sentiment, and user intent.'],
    ['Unstructured Processing', 'Extracts key details from raw text and documents.'],
    ['Dynamic Classification', 'Categorizes leads based on conversational depth.'],
    ['Automated Summarization', 'Distills complex customer threads for sales reps.'],
  ]
}

const processSteps = [
  ['01', 'Discovery & Workflow Audit', 'We inspect your current operations, identify repetitive manual bottlenecks, map software tools, and define clear business KPIs.'],
  ['02', 'System Architecture & Guardrails', 'We design the technical workflow, defining where deterministic rules apply, where AI adds value, and where human review is mandatory.'],
  ['03', 'API & Integration Mapping', 'We map webhooks, API endpoints, CRM properties, and database schemas to ensure data flows securely across all platforms.'],
  ['04', 'Workflow & AI Model Construction', 'We build the automation logic, configure AI prompts and knowledge retrieval boundaries, and set up error-handling paths.'],
  ['05', 'Testing & Human-in-the-Loop QA', 'We test edge cases, benchmark AI extraction accuracy, verify confidence thresholds, and ensure human fallback alerts fire correctly.'],
  ['06', 'Deployment & Team SOPs', 'We deploy the automated system in production, document operating procedures, and train your team on interface interactions.'],
  ['07', 'Monitoring & Anomaly Tracking', 'We monitor workflow logs, track execution success rates, inspect fallback escalations, and patch API updates proactively.'],
  ['08', 'Continuous Refinement', 'We analyze performance metrics, incorporate user feedback, and optimize prompt boundaries to compound operational efficiency.'],
] as const

const maturityLevels = [
  ['Level 01: Manual Operations', 'Team members spend hours manually copying data between email, spreadsheets, and software tools.'],
  ['Level 02: Basic Automation', 'Simple Zapier or web-form triggers handle basic notification tasks without central data sync.'],
  ['Level 03: Connected Systems', 'CRM, email, and website forms share data via structured webhooks and pipeline rules.'],
  ['Level 04: Intelligent Workflows', 'AI processes unstructured text, classifies intent, and assists human decision-making.'],
  ['Level 05: Autonomous Engine', 'End-to-end automated operations with real-time reporting, AI assistance, and closed-loop measurement.'],
] as const

const decisionMatrix = [
  ['Task Type', 'Best Approach', 'Primary Benefit'],
  ['Form Submission → CRM Record', 'Deterministic Rule', '100% Reliable & Instant'],
  ['Inbound Inquiry Categorization', 'AI Classification', 'Context-Aware Intent Detection'],
  ['Appointment Booking & Reminders', 'Deterministic Rule', 'Zero Misinterpretation Risk'],
  ['Unstructured PDF Data Extraction', 'AI Document Processing', 'Saves Hours of Manual Typing'],
  ['Complex Customer Complaint Escalation', 'Human + AI Assist', 'Empathy with Instant Context'],
  ['High-Value Contract Approval', 'Human-in-the-Loop', 'Risk Reduction & Governance'],
] as const

const faqs = [
  ['What is the difference between traditional automation and AI automation?', 'Traditional automation follows strict, hardcoded rules (e.g., "IF form is submitted, THEN create a contact"). AI automation adds cognitive understanding—allowing systems to interpret natural language, extract data from unstructured documents, gauge sentiment, and classify customer intent before taking action.'],
  ['Will AI replace our team members?', 'No. We design systems that eliminate repetitive administrative drudgery so your team can focus on high-value human activities—like building client relationships, solving complex problems, closing deals, and delivering creative strategy.'],
  ['How do you prevent AI assistants from giving incorrect information ("hallucinating")?', 'We implement strict guardrails. AI assistants are connected exclusively to your approved company knowledge bases (RAG architecture) with explicit instruction boundaries. When confidence falls below a defined threshold, the system escalates the inquiry directly to a human.'],
  ['Can you integrate AI with our existing CRM and software tools?', 'Yes. We build integrations using secure APIs and webhooks across platforms like HubSpot, Salesforce, Zoho, Pipedrive, Next.js applications, WhatsApp, Slack, and email systems. You rarely need to replace your core software.'],
  ['How long does an AI and automation implementation take?', 'Targeted automation builds (such as automated lead qualification or document extraction) take 2 to 3 weeks. Comprehensive enterprise workflow architectures take 4 to 8 weeks, including audit, testing, and team onboarding.'],
  ['What is "Human-in-the-Loop" automation?', 'Human-in-the-Loop is a design principle where critical or high-risk decisions require human approval before an automated action executes. The AI prepares the analysis, draft, or classification, but a human retains final authority.'],
  ['Can you build WhatsApp and conversational AI assistants?', 'Yes. We build native WhatsApp and website chat workflows that qualify incoming leads, answer product FAQs, schedule calendar bookings, and route priority inquiries directly to your sales team.'],
  ['How do you handle data privacy and security with AI models?', 'We prioritize data security. We use enterprise API endpoints where customer data is not used to train public AI models. All credentials, API keys, and webhooks are processed server-side with strict encryption.'],
  ['How do AI and automation connect with our marketing campaigns?', 'Automation connects campaign traffic to business revenue. When ads or SEO bring visitors to your site, automated workflows qualify leads instantly, trigger email nurtures, update your CRM, and report closed-won deals back to ad platforms.'],
  ['How do we get started with an automation project?', 'We begin with an operational discovery call and a workflow audit to identify your highest-impact bottlenecks. We then present a visual architecture blueprint, ROI estimation, and implementation roadmap.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' },
    { '@type': 'WebPage', name: 'AI & Automation Services', url: 'https://rominelabs.com/services/ai-automation', description: metadata.description },
    { '@type': 'Service', name: 'AI & Automation Services', serviceType: 'Intelligent Systems Architecture, AI Integration & Business Automation', provider: { '@type': 'Organization', name: 'Romine Labs', url: 'https://rominelabs.com' }, areaServed: 'Worldwide', url: 'https://rominelabs.com/services/ai-automation' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rominelabs.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rominelabs.com/services' },
        { '@type': 'ListItem', position: 3, name: 'AI & Automation', item: 'https://rominelabs.com/services/ai-automation' },
      ],
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}

// Brand primitives
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
  onDark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  onDark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-serif text-3xl font-normal tracking-tight sm:text-5xl leading-[1.12] ${onDark ? 'text-white' : 'text-[#0B1B35]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 font-sans text-base leading-relaxed sm:text-lg ${onDark ? 'text-[#687386]' : 'text-[#687386]'}`}>
          {description}
        </p>
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

// Visual Component 1: Lead Qualification Automation Pipeline
function LeadQualificationPipeline() {
  const nodes = [
    { type: 'TRIGGER', title: 'Inbound Inquiry (Form / WhatsApp)', status: 'Captured' },
    { type: 'VALIDATION', title: 'Email & Contact Data Formatting', status: 'Verified' },
    { type: 'AI MODEL', title: 'Context & Intent Classification via LLM', status: 'Classified' },
    { type: 'CONDITION', title: 'High Intent & Priority Fit Threshold', status: 'Matched' },
    { type: 'ACTION 01', title: 'Create Deal Record in CRM Pipeline', status: 'Executed' },
    { type: 'ACTION 02', title: 'Assign Rep & Notify via Slack / Email', status: 'Alerted' },
    { type: 'FALLBACK', title: 'If Unassigned > 15m → Escalate to Manager', status: 'Active' },
  ]

  return (
    <div className="border border-white/10 bg-[#142B4A]/60 p-6 sm:p-8 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#C69A52]">Workflow Visualizer</span>
          <h3 className="font-serif text-lg text-white">Automated Lead Qualification Pipeline</h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase text-[#687386] sm:inline-block">Illustrative Framework</span>
      </div>

      <div className="space-y-3">
        {nodes.map((node, i) => (
          <div key={node.type} className="flex flex-col justify-between border border-white/10 bg-[#0B1B35] p-4 text-xs sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#C69A52]">Node 0{i + 1} [{node.type}]</span>
              <p className="mt-1 font-serif text-sm font-normal text-white">{node.title}</p>
            </div>
            <span className="mt-2 sm:mt-0 font-mono text-[10px] uppercase text-[#D8B978] bg-[#142B4A] px-2.5 py-1 border border-white/10 self-start sm:self-auto">
              {node.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AiAutomationPage() {
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
              alt="Intelligent AI and business automation workflow architecture" 
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
              <Eyebrow onDark>AI & Automation Systems</Eyebrow>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
                Automate the Work. <span className="text-[#C69A52] font-serif italic">Amplify the Business.</span>
              </h1>

              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-xl">
                We design intelligent workflows, AI assistants, API integrations, and connected systems that eliminate repetitive tasks, speed up customer response, and optimize business operations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Automation System</span>
                  <ArrowRight className="size-4 text-[#C69A52] transition-transform group-hover:translate-x-1 group-hover:text-[#0B1B35]" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-13 items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. INTRODUCTION / STRATEGIC POSITIONING */}
        {/* ========================================== */}
        <section className="border-b border-[#E4E7EB] bg-white py-20 lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading 
                  eyebrow="Strategic Positioning" 
                  title="AI should do more than generate text. It should power your business." 
                />
              </div>
              <div className="lg:col-span-7">
                <p className="font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                  AI is not a marketing gimmick—it is infrastructure. The real value of modern AI lies in contextual interpretation: classifying inbound lead intent, extracting structured data from documents, summarizing customer histories, and routing inquiries intelligently without human delay.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Manual copying of data between emails, forms, and spreadsheets.',
                    'Delayed lead follow-ups allowing prospects to cold-call competitors.',
                    'Customer support teams bogged down by repetitive FAQ inquiries.',
                    'Sales reps wasting hours categorizing and scoring incoming leads.',
                    'Unstructured PDFs and invoices requiring manual data entry.',
                    'Disconnected software tools operating in isolated data silos.',
                    'Lack of automated executive alerts for operational bottlenecks.',
                    'Untracked manual steps creating high operational error rates.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 border-t border-[#E4E7EB] pt-3 font-sans text-sm font-medium text-[#111827]">
                      <span className="font-mono text-xs font-bold text-[#C69A52]">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-l-2 border-[#C69A52] bg-[#F7F5F0] p-6 font-sans text-sm leading-relaxed text-[#687386]">
                  <strong className="text-[#0B1B35]">The Romine Approach:</strong> We design practical, deterministic automation rules for predictable processes, while layering AI intelligence where language interpretation and context are required.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 3. TRADITIONAL AUTOMATION VS AI-POWERED */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Architecture Principles" 
              title="Traditional Rules vs. AI-Powered Automation"
              description="The strongest systems combine hardcoded, deterministic rules for predictable actions with AI models for complex interpretation."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Traditional */}
              <div className="border border-[#E4E7EB] bg-white p-8">
                <div className="inline-flex items-center gap-2 border border-[#E4E7EB] bg-[#F7F5F0] px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-[#0B1B35]">
                  <Workflow className="size-3.5 text-[#C69A52]" /> Deterministic Rules
                </div>
                <h3 className="mt-4 font-serif text-2xl font-normal text-[#0B1B35]">Traditional Automation</h3>
                <p className="mt-2 font-sans text-xs text-[#687386]">Best for fixed, repeatable 1-to-1 operational actions.</p>
                <div className="mt-6 space-y-4 border-t border-[#E4E7EB] pt-4">
                  {traditionalVsAi.traditional.map(([title, desc]) => (
                    <div key={title} className="border-b border-[#E4E7EB] pb-3 last:border-0">
                      <p className="font-serif text-sm font-normal text-[#0B1B35]">{title}</p>
                      <p className="mt-0.5 font-sans text-xs text-[#687386]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Powered */}
              <div className="border border-[#E4E7EB] bg-white p-8">
                <div className="inline-flex items-center gap-2 border border-[#C69A52]/30 bg-[#0B1B35] px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-[#D8B978]">
                  <Sparkles className="size-3.5 text-[#C69A52]" /> Cognitive Understanding
                </div>
                <h3 className="mt-4 font-serif text-2xl font-normal text-[#0B1B35]">AI-Powered Automation</h3>
                <p className="mt-2 font-sans text-xs text-[#687386]">Best when unstructured information requires interpretation.</p>
                <div className="mt-6 space-y-4 border-t border-[#E4E7EB] pt-4">
                  {traditionalVsAi.aiPowered.map(([title, desc]) => (
                    <div key={title} className="border-b border-[#E4E7EB] pb-3 last:border-0">
                      <p className="font-serif text-sm font-normal text-[#0B1B35]">{title}</p>
                      <p className="mt-0.5 font-sans text-xs text-[#687386]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 4. WORKFLOW PIPELINE CANVAS */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28 border-b border-white/10">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Eyebrow onDark>Intelligent Pipeline</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-5xl leading-[1.12]">
                  Automated Lead Qualification Architecture
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#687386]">
                  A look inside an intelligent workflow: Inbound inquiries are captured, validated, classified by AI models, updated in your CRM, and routed instantly to the right sales channel.
                </p>
              </div>
              <div className="lg:col-span-7">
                <LeadQualificationPipeline />
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 5. CAPABILITIES GRID */}
        {/* ========================================== */}
        <section id="services" className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Core Capabilities" 
              title="What can we automate across your business?"
              description="Opportunity exists anywhere repetitive digital work occurs. We design systems that connect your marketing, sales, and internal operations."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-3">
              {automationCapabilities.map(([title, text, Icon]) => (
                <article key={title} className="bg-white p-7 transition hover:bg-[#F7F5F0]">
                  <Icon className="size-5 text-[#C69A52]" />
                  <h3 className="mt-6 font-serif text-xl font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <ArrowLink href="/contact">Audit My Workflow Bottlenecks</ArrowLink>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 6. AI SYSTEMS WE BUILD */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Bespoke Implementations" 
              title="Custom AI systems engineered for your business."
              description="We engineer secure, fine-tuned AI assistants and data pipelines tailored specifically to your company operating procedures."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiSystems.map(([title, text, Icon]) => (
                <div key={title} className="flex flex-col justify-between border border-[#E4E7EB] bg-white p-8 transition-all hover:border-[#C69A52]">
                  <div>
                    <Icon className="size-6 text-[#C69A52]" />
                    <h3 className="mt-6 font-serif text-2xl font-normal text-[#0B1B35]">{title}</h3>
                    <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{text}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E4E7EB]">
                    <ArrowLink href="/contact">Build System</ArrowLink>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 7. HUMAN-IN-THE-LOOP & GUARDRAILS */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Eyebrow onDark>Governance & Guardrails</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight sm:text-5xl leading-[1.12]">
                  Human-in-the-Loop Architecture
                </h2>
                <p className="mt-6 font-sans text-base leading-relaxed text-[#687386]">
                  Automation should eliminate busywork without removing human judgment where it matters most. We build explicit confidence checks and escalation paths.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Confidence Scoring', 'AI tasks execute automatically only when confidence ratings exceed strict thresholds.'],
                    ['Human Review Queues', 'Complex inquiries or low-confidence extractions are queued for team review.'],
                    ['RAG Knowledge Constraints', 'AI models consult only your approved internal documentation to eliminate false outputs.'],
                    ['Audit Trail Logs', 'Every AI classification, API call, and data edit is logged for complete transparency.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="border border-white/10 bg-[#142B4A]/60 p-6 backdrop-blur-md">
                      <ShieldCheck className="size-5 text-[#C69A52]" />
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
        {/* 8. DECISION MATRIX TABLE */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Strategic Selection" 
              title="AI vs. Rule vs. Human Decision Matrix"
              description="We apply the right technology to the right task, ensuring maximum reliability and operational safety."
            />

            <div className="mt-14 overflow-x-auto border border-[#E4E7EB]">
              <table className="w-full text-left font-sans text-xs">
                <thead>
                  <tr className="border-b border-[#E4E7EB] bg-[#0B1B35] font-mono text-xs uppercase text-[#C69A52]">
                    {decisionMatrix[0].map((header) => (
                      <th key={header} className="p-4 font-bold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E7EB]">
                  {decisionMatrix.slice(1).map(([task, approach, benefit]) => (
                    <tr key={task} className="hover:bg-[#F7F5F0] transition-colors">
                      <td className="p-4 font-serif text-sm font-normal text-[#0B1B35]">{task}</td>
                      <td className="p-4 font-mono font-bold text-[#C69A52]">{approach}</td>
                      <td className="p-4 text-[#687386]">{benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 9. MATURITY ROADMAP */}
        {/* ========================================== */}
        <section className="bg-[#F7F5F0] py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="Maturity Roadmap" 
              title="Where does your business sit on the automation ladder?"
              description="We guide companies from manual, fragmented operations to intelligent, connected systems."
            />

            <div className="mt-14 grid gap-px overflow-hidden border border-[#E4E7EB] bg-[#E4E7EB] sm:grid-cols-2 lg:grid-cols-5">
              {maturityLevels.map(([title, desc]) => (
                <div key={title} className="bg-white p-6">
                  <h3 className="font-serif text-base font-normal text-[#0B1B35]">{title}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 10. 8-STAGE METHODOLOGY */}
        {/* ========================================== */}
        <section className="bg-[#0B1B35] py-20 text-white lg:py-28">
          <Container>
            <Eyebrow onDark>Predictable Execution</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-normal tracking-tight sm:text-5xl text-white">
              Our 8-stage engineering methodology.
            </h2>

            <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map(([n, a, b]) => (
                <div key={n} className="bg-[#0B1B35] p-7">
                  <span className="font-mono text-xs font-bold text-[#C69A52]">{n}</span>
                  <h3 className="mt-6 font-serif text-lg font-normal text-white">{a}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#687386]">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link 
                href="/contact" 
                className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
              >
                <span>Request Workflow Blueprint</span>
                <ArrowRight className="size-4 text-[#C69A52]" />
              </Link>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 11. ECOSYSTEM CROSS-LINKING */}
        {/* ========================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E4E7EB]">
          <Container>
            <SectionHeading 
              eyebrow="System Integration" 
              title="How AI & Automation connect across your digital stack."
              description="Intelligent automation amplifies the performance of every digital practice across your business."
            />

            <div className="mt-14 divide-y divide-[#E4E7EB] border-y border-[#E4E7EB]">
              {[
                ['CRM & Automation', 'Connect forms, lead scoring, and automated pipelines into your core CRM database.', '/services/crm-automation', 'Explore CRM Services'],
                ['Lead Generation', 'Qualify inbound campaign inquiries automatically and route hot SQLs to sales.', '/services/lead-generation', 'Explore Lead Generation'],
                ['Email Marketing', 'Trigger behavioral lifecycle emails based on AI classification and CRM deal stage changes.', '/services/email-marketing', 'Explore Email Marketing'],
                ['Analytics & Tracking', 'Track end-to-end customer journeys and feed revenue outcomes back to marketing systems.', '/services/analytics-tracking', 'Explore Analytics'],
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
        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================== */}
        <section id="faq" className="bg-[#F7F5F0] py-20 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <SectionHeading 
                eyebrow="Frequently Asked Questions" 
                title="Answers to common AI & automation questions."
                description="Direct clarity on how our intelligent systems engineering and automation integrations operate."
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
                  <span>Talk to an Automation Strategist</span>
                  <ArrowRight className="size-4 text-[#C69A52]" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================== */}
        {/* 13. BOTTOM CTA BANNER */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-[#0B1B35] py-24 text-white lg:py-32">
          <Image 
            src="/images/hero-data.png" 
            alt="AI automation system abstract background" 
            fill 
            sizes="100vw" 
            className="object-cover object-center opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0B1B35] via-[#0B1B35]/90 to-[#142B4A]/80" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Eyebrow onDark>Start With Automation</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-7xl text-white leading-[1.08]">
                Ready to remove repetitive work and build an intelligent operating system?
              </h2>
              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-[#687386] sm:text-lg">
                Schedule a consultation with our AI and automation strategists. We will evaluate your operational bottlenecks and design a connected system for your business.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact" 
                  className="group inline-flex h-13 items-center justify-center gap-3 bg-[#0B1B35] border border-[#C69A52] px-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C69A52] hover:text-[#0B1B35]"
                >
                  <span>Build My Automation System</span>
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