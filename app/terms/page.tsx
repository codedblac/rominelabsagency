/* cspell:disable */
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Scale,
  AlertCircle,
  Check,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  FileText,
  Globe,
  Database,
  Cpu,
  Mail,
  Server,
  UserCheck,
  Megaphone,
  Search,
  Layout,
  Wrench,
  Bot,
  BarChart3,
  CircleDollarSign,
  Briefcase,
  Lock,
  RefreshCw,
  Zap,
  Clock,
  Building2,
  CreditCard,
  Code2,
  Image,
  Video,
  MessageSquare,
  Settings,
  Target,
  FileCheck,
  Handshake,
  Ban,
  Gavel,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Romine Labs Agency',
  description:
    'Read the Terms of Service governing use of the Romine Labs Agency website and the delivery of digital marketing, web development, advertising, SEO, content, automation, analytics, and creative services.',
  alternates: {
    canonical: 'https://rominelabsagency.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Romine Labs Agency',
    description:
      'Terms governing website use, digital marketing services, web development, advertising, SEO, creative services, automation, client engagements, payments, intellectual property, and more.',
    url: 'https://rominelabsagency.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Romine Labs Agency',
    description:
      'The official Terms of Service for Romine Labs Agency.',
  },
}

function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  )
}

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode
  onDark?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-[#C69A52]" />
      <span
        className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${
          onDark ? 'text-[#D8B978]' : 'text-[#C69A52]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

function SectionAnchor({
  id,
  title,
  number,
}: {
  id: string
  title: string
  number: string
}) {
  return (
    <div
      id={id}
      className="mb-6 flex scroll-m-24 items-center justify-between border-b border-[#E4E7EB] pb-3"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-[#C69A52]">
          {number}
        </span>

        <h2 className="font-serif text-2xl font-normal text-[#0B1B35] sm:text-3xl">
          {title}
        </h2>
      </div>

      <a
        href={`#${id}`}
        aria-label={`Permalink to ${title}`}
        className="font-mono text-[10px] text-[#687386] transition-colors hover:text-[#C69A52]"
      >
        #PERMALINK
      </a>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-[#E4E7EB] bg-white p-5">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="size-4 text-[#C69A52]" />
        <h3 className="font-serif text-base font-normal text-[#0B1B35]">
          {title}
        </h3>
      </div>

      <div className="font-sans text-xs leading-relaxed text-[#687386]">
        {children}
      </div>
    </div>
  )
}

export default function TermsOfServicePage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#111827]">
      {/* HERO */}
      <section
        data-hero-dark
        className="relative min-h-[48vh] overflow-hidden bg-[#0B1B35] text-white"
      >
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#C69A52_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <Eyebrow onDark>Legal & Client Framework</Eyebrow>

            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Terms of Service
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#B7C0CC] sm:text-lg">
              These Terms of Service establish the rules governing access to
              the Romine Labs Agency website and the professional relationship
              between Romine Labs Agency and its clients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 font-mono text-xs text-[#D8B978]">
              <div>
                <span className="mr-2 uppercase text-[#7F8A9A]">
                  Effective Date:
                </span>
                <span className="font-bold">September 10, 2026</span>
              </div>

              <div className="hidden text-white/20 sm:block">•</div>

              <div>
                <span className="mr-2 uppercase text-[#7F8A9A]">
                  Last Updated:
                </span>
                <span className="font-bold">September 10, 2026</span>
              </div>

              <div className="hidden text-white/20 sm:block">•</div>

              <div>
                <span className="mr-2 uppercase text-[#7F8A9A]">
                  Website:
                </span>
                <span className="font-bold">rominelabsagency.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-[#E4E7EB] bg-[#F7F5F0]">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 py-3.5 font-mono text-xs text-[#687386]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#0B1B35]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-semibold text-[#0B1B35]">
              Terms of Service
            </span>
          </nav>
        </Container>
      </div>

      {/* QUICK NAVIGATION */}
      <div className="sticky top-0 z-30 border-b border-[#E4E7EB] bg-white/95 shadow-sm backdrop-blur-md">
        <Container>
          <div className="no-scrollbar flex items-center gap-6 overflow-x-auto py-3.5 font-mono text-[11px] text-[#687386]">
            <span className="shrink-0 font-bold uppercase text-[#0B1B35]">
              Quick Jump:
            </span>

            <a href="#agreement" className="whitespace-nowrap hover:text-[#C69A52]">
              01. Agreement
            </a>

            <a href="#definitions" className="whitespace-nowrap hover:text-[#C69A52]">
              02. Definitions
            </a>

            <a href="#website-use" className="whitespace-nowrap hover:text-[#C69A52]">
              03. Website Use
            </a>

            <a href="#services" className="whitespace-nowrap hover:text-[#C69A52]">
              04. Services
            </a>

            <a href="#client-responsibilities" className="whitespace-nowrap hover:text-[#C69A52]">
              05. Client Responsibilities
            </a>

            <a href="#fees" className="whitespace-nowrap hover:text-[#C69A52]">
              06. Fees & Payments
            </a>

            <a href="#third-party" className="whitespace-nowrap hover:text-[#C69A52]">
              07. Third Parties
            </a>

            <a href="#intellectual-property" className="whitespace-nowrap hover:text-[#C69A52]">
              08. Intellectual Property
            </a>

            <a href="#ai" className="whitespace-nowrap hover:text-[#C69A52]">
              09. AI & Automation
            </a>

            <a href="#liability" className="whitespace-nowrap hover:text-[#C69A52]">
              10. Liability
            </a>

            <a href="#termination" className="whitespace-nowrap hover:text-[#C69A52]">
              11. Termination
            </a>

            <a href="#contact" className="whitespace-nowrap hover:text-[#C69A52]">
              12. Contact
            </a>
          </div>
        </Container>
      </div>

      {/* MAIN DOCUMENT */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-16 lg:col-span-8">
              {/* IMPORTANT NOTICE */}
              <div className="border border-[#E4E7EB] border-l-4 border-l-[#C69A52] bg-[#F7F5F0] p-6 text-xs leading-relaxed text-[#687386]">
                <div className="mb-2 flex items-center gap-2 font-serif text-sm font-normal text-[#0B1B35]">
                  <AlertCircle className="size-4 text-[#C69A52]" />
                  <span>Important Contractual Notice</span>
                </div>

                <p>
                  These Terms establish the general contractual framework for
                  use of the Romine Labs Agency website and engagement with our
                  services. Individual client projects may be governed by
                  additional written agreements, including proposals,
                  Statements of Work, Master Services Agreements, invoices,
                  service agreements, and Data Processing Agreements. Where a
                  specific written agreement expressly conflicts with these
                  Terms, the specific agreement will control for the subject
                  matter of that engagement.
                </p>
              </div>

              {/* 01 */}
              <div>
                <SectionAnchor
                  id="agreement"
                  title="Agreement to These Terms"
                  number="01"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    These Terms of Service (&quot;Terms&quot;) constitute a
                    legally binding agreement between you and <strong className="text-[#0B1B35]">
                      Romine Labs Agency
                    </strong>{' '}
                    (&quot;Romine Labs,&quot; &quot;we,&quot; &quot;us,&quot;
                    or &quot;our&quot;) concerning your use of
                    <strong className="text-[#0B1B35]">
                      {' '}
                      rominelabsagency.com
                    </strong>{' '}
                    and our professional services.
                  </p>

                  <p>
                    By accessing or using the website, submitting an inquiry,
                    requesting a proposal, purchasing services, approving a
                    project, or otherwise engaging Romine Labs Agency, you
                    acknowledge that you have read, understood, and agreed to
                    these Terms.
                  </p>

                  <p>
                    If you do not agree with these Terms, you should not use the
                    website or request services from Romine Labs Agency.
                  </p>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <strong className="mb-1 block text-[#0B1B35]">
                      Business-to-Business Engagements
                    </strong>

                    <p className="text-xs">
                      Where an individual accepts these Terms on behalf of a
                      company, organization, or other legal entity, that
                      individual represents that they have authority to bind
                      that entity to the applicable agreement.
                    </p>
                  </div>
                </div>
              </div>

              {/* 02 */}
              <div>
                <SectionAnchor
                  id="definitions"
                  title="Definitions"
                  number="02"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <InfoCard icon={Building2} title="Romine Labs Agency">
                    The digital growth, marketing, technology, automation, and
                    creative agency operating under the Romine Labs Agency
                    brand.
                  </InfoCard>

                  <InfoCard icon={UserCheck} title="Client">
                    The person, business, organization, or other entity that
                    purchases, requests, approves, or receives services from
                    Romine Labs Agency.
                  </InfoCard>

                  <InfoCard icon={Globe} title="Website">
                    The website located at rominelabsagency.com and any
                    associated pages or digital experiences operated by Romine
                    Labs Agency.
                  </InfoCard>

                  <InfoCard icon={Briefcase} title="Services">
                    Professional services provided by Romine Labs Agency,
                    including digital marketing, advertising, social media,
                    SEO, web development, analytics, automation, content, and
                    creative services.
                  </InfoCard>

                  <InfoCard icon={FileText} title="Deliverables">
                    The agreed work products created for a client under an
                    applicable proposal, Statement of Work, or service
                    agreement.
                  </InfoCard>

                  <InfoCard icon={FileCheck} title="Statement of Work">
                    A written document defining project scope, deliverables,
                    timelines, responsibilities, pricing, milestones, and
                    applicable project conditions.
                  </InfoCard>

                  <InfoCard icon={Image} title="Client Content">
                    Text, photographs, videos, logos, trademarks, product
                    information, documents, data, credentials, and other
                    materials supplied by the Client.
                  </InfoCard>

                  <InfoCard icon={Server} title="Third-Party Services">
                    External platforms, software, APIs, hosting providers,
                    advertising networks, analytics systems, payment
                    providers, CRM systems, and other technologies used in
                    connection with a project.
                  </InfoCard>
                </div>
              </div>

              {/* 03 */}
              <div>
                <SectionAnchor
                  id="website-use"
                  title="Website Use & Acceptable Conduct"
                  number="03"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    You may use the Romine Labs Agency website for lawful
                    purposes and in a manner consistent with these Terms.
                  </p>

                  <p>You must not:</p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      Use the website for unlawful, fraudulent, deceptive, or
                      malicious purposes.
                    </li>
                    <li>
                      Attempt to gain unauthorized access to website
                      infrastructure, accounts, databases, systems, or
                      administrative interfaces.
                    </li>
                    <li>
                      Introduce malware, malicious code, ransomware, viruses,
                      bots, scripts, or other harmful technology.
                    </li>
                    <li>
                      Interfere with the availability, security, or performance
                      of the website.
                    </li>
                    <li>
                      Scrape, copy, reproduce, harvest, or systematically
                      extract website information without written authorization.
                    </li>
                    <li>
                      Impersonate Romine Labs Agency, its employees, contractors,
                      clients, or other businesses.
                    </li>
                    <li>
                      Submit false, misleading, fraudulent, or abusive
                      inquiries.
                    </li>
                    <li>
                      Use website content to develop a competing service or
                      commercial database without authorization.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 04 */}
              <div>
                <SectionAnchor
                  id="services"
                  title="Services & Engagement Scope"
                  number="04"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency provides integrated digital growth,
                    marketing, technology, automation, analytics, and creative
                    services. Depending on the engagement, services may include
                    the following.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={Megaphone} title="Social Media Management">
                      Strategy, content planning, publishing, scheduling,
                      community management, engagement, profile optimization,
                      reporting, and platform-specific growth activities.
                    </InfoCard>

                    <InfoCard icon={Video} title="Content Production">
                      Short-form video, long-form video, social content,
                      graphics, motion content, campaign creative, editing,
                      thumbnails, and related production services.
                    </InfoCard>

                    <InfoCard icon={Target} title="Paid Advertising">
                      Campaign strategy, account setup, audience development,
                      creative testing, campaign management, optimization,
                      remarketing, reporting, and conversion-focused
                      advertising.
                    </InfoCard>

                    <InfoCard icon={Search} title="SEO & AEO">
                      Technical SEO, on-page optimization, content strategy,
                      keyword research, search-intent mapping, structured data,
                      answer-engine optimization, and performance monitoring.
                    </InfoCard>

                    <InfoCard icon={Layout} title="Web Development">
                      Corporate websites, landing pages, ecommerce websites,
                      web applications, redesigns, integrations, performance
                      optimization, maintenance, and conversion-focused digital
                      experiences.
                    </InfoCard>

                    <InfoCard icon={Briefcase} title="Lead Generation">
                      Lead-generation campaigns, landing pages, forms, funnels,
                      qualification workflows, booking systems, CRM routing,
                      nurturing, and conversion systems.
                    </InfoCard>

                    <InfoCard icon={Mail} title="Email Marketing">
                      Email strategy, campaign development, newsletters,
                      automations, lifecycle communication, segmentation,
                      campaign optimization, and reporting.
                    </InfoCard>

                    <InfoCard icon={Settings} title="CRM & Automation">
                      CRM setup, integrations, workflows, lead routing,
                      notifications, pipeline automation, data synchronization,
                      and business process automation.
                    </InfoCard>

                    <InfoCard icon={Bot} title="AI & Automation">
                      AI-assisted workflows, business automation, AI
                      integrations, assistants, data processing, API
                      integrations, and operational automation.
                    </InfoCard>

                    <InfoCard icon={BarChart3} title="Analytics & Tracking">
                      Analytics implementation, conversion tracking, dashboards,
                      reporting, attribution, performance measurement, and
                      optimization recommendations.
                    </InfoCard>

                    <InfoCard icon={Award} title="Brand & Creative">
                      Brand strategy, visual identity, campaign creative,
                      graphic design, creative direction, messaging, and brand
                      systems.
                    </InfoCard>

                    <InfoCard icon={Code2} title="Digital Engineering">
                      Custom digital platforms, integrations, APIs, ecommerce
                      systems, frontend development, backend integrations, and
                      technical optimization.
                    </InfoCard>
                  </div>

                  <p>
                    The presence of a service on this website does not mean that
                    every service is included in every engagement. The actual
                    scope of a Client engagement is determined by the applicable
                    proposal, quotation, Statement of Work, service agreement,
                    or written confirmation.
                  </p>

                  <div className="border border-[#C69A52]/30 bg-[#F7F5F0] p-5">
                    <strong className="mb-1 block text-[#0B1B35]">
                      Scope Controls
                    </strong>

                    <p className="text-xs">
                      Romine Labs Agency is not obligated to perform work that
                      falls outside an agreed scope. Additional work,
                      functionality, revisions, platforms, campaigns, or
                      deliverables may require a change request, revised
                      quotation, or additional fee.
                    </p>
                  </div>
                </div>
              </div>

              {/* 05 */}
              <div>
                <SectionAnchor
                  id="client-responsibilities"
                  title="Client Responsibilities"
                  number="05"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Successful delivery depends on timely Client
                    participation. The Client agrees to provide accurate,
                    complete, and timely information, approvals, assets, access,
                    and decisions reasonably required to perform the Services.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      Provide accurate business, product, service, pricing, and
                      contact information.
                    </li>
                    <li>
                      Provide logos, brand guidelines, photographs, videos,
                      product information, credentials, documents, and other
                      necessary assets.
                    </li>
                    <li>
                      Provide appropriate access to advertising accounts,
                      websites, analytics systems, social platforms, CRMs, and
                      other relevant systems.
                    </li>
                    <li>
                      Ensure that Client Content supplied to Romine Labs Agency
                      is lawful and does not knowingly infringe another party's
                      rights.
                    </li>
                    <li>
                      Review and approve content, advertising materials,
                      websites, campaigns, and other deliverables within agreed
                      review periods.
                    </li>
                    <li>
                      Maintain responsibility for the accuracy of claims,
                      pricing, product descriptions, regulatory statements, and
                      other factual information supplied for publication.
                    </li>
                    <li>
                      Maintain appropriate access, security, payment methods,
                      licenses, subscriptions, and accounts where those items
                      remain under Client control.
                    </li>
                  </ul>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <strong className="mb-1 block text-[#0B1B35]">
                      Client Delays
                    </strong>

                    <p className="text-xs">
                      Delays caused by missing information, unavailable
                      accounts, late approvals, incomplete feedback,
                      unavailable personnel, unpaid invoices, or other
                      Client-controlled factors may result in revised
                      deadlines, rescheduled campaigns, additional costs, or
                      changes to delivery schedules.
                    </p>
                  </div>
                </div>
              </div>

              {/* 06 */}
              <div>
                <SectionAnchor
                  id="approvals"
                  title="Approvals, Reviews & Revisions"
                  number="06"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Where Client approval is required, approval may be provided
                    through email, project-management software, messaging
                    platforms, content calendars, digital approval systems, or
                    other documented communication.
                  </p>

                  <p>
                    Once a Client approves a deliverable, Romine Labs Agency
                    may publish, deploy, schedule, launch, or otherwise
                    implement that deliverable in accordance with the approved
                    instructions.
                  </p>

                  <p>
                    The Client remains responsible for reviewing approved
                    materials for factual accuracy, legal compliance,
                    regulatory requirements, trademark usage, pricing,
                    promotions, claims, and industry-specific requirements.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={Check} title="Approved Work">
                      Written or digitally recorded approval authorizes Romine
                      Labs Agency to proceed with the approved work.
                    </InfoCard>

                    <InfoCard icon={RefreshCw} title="Revisions">
                      Revision limits are determined by the applicable project
                      scope. Additional revisions may be treated as additional
                      work.
                    </InfoCard>
                  </div>
                </div>
              </div>

              {/* 07 */}
              <div>
                <SectionAnchor
                  id="fees"
                  title="Fees, Advertising Spend & Payments"
                  number="07"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <div>
                    <h3 className="mb-2 font-serif text-lg font-normal text-[#0B1B35]">
                      Service Fees
                    </h3>

                    <p className="text-xs">
                      Fees are established in the applicable proposal,
                      quotation, Statement of Work, invoice, retainer
                      agreement, or other written commercial agreement.
                      Services may be charged as fixed project fees, monthly
                      retainers, hourly or usage-based fees, or other agreed
                      structures.
                    </p>
                  </div>

                  <div className="border border-[#C69A52]/30 bg-[#0B1B35] p-6 text-white">
                    <div className="mb-2 flex items-center gap-2">
                      <CircleDollarSign className="size-5 text-[#C69A52]" />

                      <h3 className="font-serif text-lg font-normal">
                        Advertising Spend Is Separate
                      </h3>
                    </div>

                    <p className="text-xs leading-relaxed text-[#B7C0CC]">
                      Advertising budgets paid to platforms such as Google,
                      Meta, TikTok, LinkedIn, Pinterest, Snapchat, or other
                      advertising networks are separate from Romine Labs
                      Agency service fees unless a written agreement expressly
                      states otherwise. Platform charges, taxes, currency
                      conversion costs, account charges, and advertising
                      budgets are the Client's responsibility where the Client
                      maintains the advertising account.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-lg font-normal text-[#0B1B35]">
                      Payment Requirements
                    </h3>

                    <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                      <li>
                        Project deposits or initial payments may be required
                        before work begins.
                      </li>
                      <li>
                        Retainer services are billed according to the agreed
                        recurring billing schedule.
                      </li>
                      <li>
                        Invoices must be paid according to the payment terms
                        stated on the applicable invoice or agreement.
                      </li>
                      <li>
                        Romine Labs Agency may suspend work where invoices
                        remain unpaid after reasonable notice.
                      </li>
                      <li>
                        The Client remains responsible for approved work,
                        committed third-party costs, and other non-cancellable
                        expenses incurred before suspension or termination.
                      </li>
                    </ul>
                  </div>

                  <div className="border border-[#E4E7EB] p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <CreditCard className="size-4 text-[#C69A52]" />

                      <h3 className="font-serif text-base font-normal text-[#0B1B35]">
                        Taxes & Transaction Costs
                      </h3>
                    </div>

                    <p className="text-xs">
                      Applicable taxes, transaction charges, payment-processing
                      fees, currency conversion costs, banking charges, and
                      similar expenses may be payable in addition to the stated
                      service fee where applicable.
                    </p>
                  </div>
                </div>
              </div>

              {/* 08 */}
              <div>
                <SectionAnchor
                  id="marketing-results"
                  title="Marketing Performance & Results"
                  number="08"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency uses professional strategies and
                    reasonable industry practices to improve digital visibility,
                    marketing performance, lead generation, conversion
                    opportunities, and business growth.
                  </p>

                  <p>
                    However, digital marketing outcomes depend on factors that
                    may be outside our control, including market conditions,
                    competition, pricing, product quality, customer demand,
                    sales processes, website performance, client response
                    times, advertising-platform policies, algorithm changes,
                    economic conditions, and third-party technology.
                  </p>

                  <p>
                    Unless expressly guaranteed in a signed written agreement,
                    Romine Labs Agency does not guarantee:
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>A specific amount of revenue or profit.</li>
                    <li>A specific number of leads or sales.</li>
                    <li>A particular advertising return or ROAS.</li>
                    <li>A specific cost per lead or customer acquisition cost.</li>
                    <li>Specific search-engine rankings.</li>
                    <li>Specific AI or answer-engine visibility.</li>
                    <li>Viral content or guaranteed follower growth.</li>
                    <li>
                      Continued approval or availability of third-party
                      advertising or social-media accounts.
                    </li>
                  </ul>

                  <p className="text-xs">
                    Performance targets included in a proposal are objectives
                    and planning benchmarks unless the applicable written
                    agreement expressly identifies them as contractual
                    guarantees.
                  </p>
                </div>
              </div>

              {/* 09 */}
              <div>
                <SectionAnchor
                  id="third-party"
                  title="Third-Party Platforms & Services"
                  number="09"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency may use or integrate third-party
                    platforms and technologies when delivering Services. These
                    may include advertising networks, social-media platforms,
                    hosting providers, analytics systems, CRMs, email systems,
                    payment processors, APIs, content-management systems,
                    communication tools, and automation platforms.
                  </p>

                  <p>
                    Third-party services operate under their own terms,
                    policies, pricing structures, technical limitations, and
                    availability. The Client agrees that Romine Labs Agency
                    cannot control or guarantee the continued availability,
                    functionality, pricing, policies, algorithms, APIs, or
                    security of third-party services.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={Megaphone} title="Advertising Platforms">
                      Advertising platforms may reject advertisements, restrict
                      accounts, change policies, alter delivery systems, or
                      suspend campaigns without prior notice.
                    </InfoCard>

                    <InfoCard icon={Globe} title="Social Platforms">
                      Social platforms may modify algorithms, APIs, features,
                      reach, moderation rules, account requirements, or
                      monetization systems.
                    </InfoCard>

                    <InfoCard icon={Server} title="Hosting & Infrastructure">
                      Hosting providers and infrastructure services may
                      experience outages, maintenance periods, security events,
                      service changes, or capacity limitations.
                    </InfoCard>

                    <InfoCard icon={Database} title="Software & APIs">
                      External software and APIs may change functionality,
                      pricing, limits, authentication requirements, or
                      compatibility.
                    </InfoCard>
                  </div>
                </div>
              </div>

              {/* 10 */}
              <div>
                <SectionAnchor
                  id="web-development"
                  title="Web Development, Hosting & Technical Services"
                  number="10"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Web development projects are delivered according to the
                    agreed scope, specifications, technology stack, milestones,
                    and acceptance criteria defined for the project.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      Domain registration and ownership remain with the Client
                      unless expressly agreed otherwise.
                    </li>
                    <li>
                      Hosting arrangements and infrastructure responsibilities
                      are determined by the applicable project agreement.
                    </li>
                    <li>
                      Third-party software, plugins, themes, APIs, fonts,
                      libraries, platforms, and subscriptions remain subject to
                      their respective licenses and terms.
                    </li>
                    <li>
                      Website functionality may depend on third-party services
                      and integrations.
                    </li>
                    <li>
                      Ongoing maintenance, security updates, content changes,
                      monitoring, hosting management, and technical support may
                      require a separate maintenance agreement.
                    </li>
                    <li>
                      Website launch dates depend on timely Client approvals,
                      content, access, payment, and third-party dependencies.
                    </li>
                  </ul>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <strong className="mb-1 block text-[#0B1B35]">
                      Post-Launch Support
                    </strong>

                    <p className="text-xs">
                      Unless a separate support or maintenance agreement
                      provides otherwise, the project ends when the agreed
                      deliverables have been completed, approved, and
                      delivered. Future changes, new features, content
                      updates, integrations, maintenance, and troubleshooting
                      may constitute additional work.
                    </p>
                  </div>
                </div>
              </div>

              {/* 11 */}
              <div>
                <SectionAnchor
                  id="intellectual-property"
                  title="Intellectual Property"
                  number="11"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <div className="space-y-3">
                    <div className="border border-[#E4E7EB] p-5">
                      <h3 className="mb-2 font-serif text-base font-normal text-[#0B1B35]">
                        Client-Owned Materials
                      </h3>

                      <p className="text-xs">
                        The Client retains ownership of trademarks, logos,
                        photographs, videos, copy, product information, data,
                        documents, and other materials supplied by the Client.
                      </p>
                    </div>

                    <div className="border border-[#E4E7EB] p-5">
                      <h3 className="mb-2 font-serif text-base font-normal text-[#0B1B35]">
                        Romine Labs Agency Materials
                      </h3>

                      <p className="text-xs">
                        Romine Labs Agency retains ownership of its pre-existing
                        methodologies, frameworks, templates, systems,
                        processes, reusable components, internal tools,
                        techniques, know-how, code libraries, automation
                        structures, strategic frameworks, and proprietary
                        materials.
                      </p>
                    </div>

                    <div className="border border-[#C69A52]/30 bg-[#F7F5F0] p-5">
                      <h3 className="mb-2 font-serif text-base font-normal text-[#0B1B35]">
                        Custom Deliverables
                      </h3>

                      <p className="text-xs">
                        Unless a project agreement states otherwise, ownership
                        or the agreed license to final custom deliverables
                        created specifically for a Client transfers only after
                        all applicable invoices and amounts due for those
                        deliverables have been paid in full.
                      </p>
                    </div>

                    <div className="border border-[#E4E7EB] p-5">
                      <h3 className="mb-2 font-serif text-base font-normal text-[#0B1B35]">
                        Third-Party Materials
                      </h3>

                      <p className="text-xs">
                        Stock imagery, fonts, software, open-source libraries,
                        plugins, APIs, music, footage, platform assets, and
                        other third-party materials remain subject to their
                        respective licenses and may not be transferred beyond
                        the rights granted by those licenses.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs">
                    Romine Labs Agency does not transfer ownership of internal
                    processes, reusable systems, generalized knowledge, or
                    proprietary agency infrastructure merely because those
                    resources were used to create a Client deliverable.
                  </p>
                </div>
              </div>

              {/* 12 */}
              <div>
                <SectionAnchor
                  id="portfolio"
                  title="Portfolio & Case Study Rights"
                  number="12"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Unless the applicable agreement states otherwise, Romine
                    Labs Agency may identify a Client relationship and display
                    publicly available work produced for that Client in its
                    portfolio, website, proposals, presentations, social-media
                    channels, case studies, and business-development materials.
                  </p>

                  <p>
                    Romine Labs Agency will not intentionally publish
                    confidential business information, private credentials,
                    restricted customer data, or non-public financial
                    information without appropriate authorization.
                  </p>

                  <p className="text-xs">
                    If a project is subject to a confidentiality agreement,
                    non-disclosure agreement, or written portfolio restriction,
                    that agreement will control.
                  </p>
                </div>
              </div>

              {/* 13 */}
              <div>
                <SectionAnchor
                  id="confidentiality"
                  title="Confidentiality"
                  number="13"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Each party may receive confidential information belonging
                    to the other party during an engagement. Confidential
                    information may include business strategies, customer
                    information, financial information, credentials,
                    technical information, product plans, marketing plans,
                    unpublished creative materials, and other non-public
                    information.
                  </p>

                  <p>
                    Each party agrees to use reasonable care to protect
                    confidential information and to use it only for purposes
                    related to the applicable relationship.
                  </p>

                  <p className="text-xs">
                    Confidentiality obligations do not generally apply to
                    information that is publicly available through no breach of
                    obligation, was already lawfully known, is independently
                    developed without use of confidential information, or must
                    be disclosed by law or lawful authority.
                  </p>
                </div>
              </div>

              {/* 14 */}
              <div>
                <SectionAnchor
                  id="data-protection"
                  title="Privacy & Data Protection"
                  number="14"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Personal information collected through the Romine Labs
                    Agency website is handled in accordance with our{' '}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-[#C69A52] underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <p>
                    Depending on the services provided, Romine Labs Agency may
                    process personal information on behalf of a Client. The
                    parties may enter into additional data-processing terms
                    where required by the nature of the engagement or applicable
                    requirements.
                  </p>

                  <p className="text-xs">
                    Clients remain responsible for determining whether the
                    information they provide to Romine Labs Agency may lawfully
                    be processed, shared, transferred, marketed to, or used for
                    the intended purpose.
                  </p>
                </div>
              </div>

              {/* 15 */}
              <div>
                <SectionAnchor
                  id="ai"
                  title="Artificial Intelligence & Automation"
                  number="15"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency may use artificial intelligence,
                    machine-learning systems, automation tools, APIs, and
                    algorithmic technologies when providing Services.
                  </p>

                  <p>
                    Depending on the engagement, these technologies may assist
                    with research, content development, ideation, analysis,
                    workflow automation, data processing, customer
                    communication, reporting, software development, and other
                    business processes.
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      AI-generated or AI-assisted output may require human
                      review before use.
                    </li>
                    <li>
                      AI systems may produce inaccurate, incomplete, outdated,
                      biased, or unsuitable outputs.
                    </li>
                    <li>
                      Clients are responsible for reviewing material that
                      requires legal, regulatory, technical, financial, medical,
                      or other professional accuracy.
                    </li>
                    <li>
                      AI output may not always qualify for copyright or other
                      intellectual-property protection in every jurisdiction.
                    </li>
                    <li>
                      Third-party AI services may be subject to their own
                      privacy policies, terms, retention rules, and technical
                      limitations.
                    </li>
                  </ul>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Bot className="size-4 text-[#C69A52]" />

                      <h3 className="font-serif text-base font-normal text-[#0B1B35]">
                        Human Oversight
                      </h3>
                    </div>

                    <p className="text-xs">
                      Romine Labs Agency may use human review and professional
                      judgment alongside automated systems. Unless expressly
                      agreed otherwise, AI and automation are tools used in the
                      delivery process and are not represented as infallible or
                      independently authoritative.
                    </p>
                  </div>
                </div>
              </div>

              {/* 16 */}
              <div>
                <SectionAnchor
                  id="security"
                  title="Security & Account Access"
                  number="16"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency takes reasonable measures to protect
                    systems and information used in connection with its
                    Services. However, no online system, software platform,
                    network, or method of electronic transmission can be
                    guaranteed to be completely secure.
                  </p>

                  <p>
                    Clients are responsible for maintaining appropriate
                    security over accounts they control, including passwords,
                    authentication methods, administrator permissions, payment
                    methods, domains, hosting accounts, advertising accounts,
                    and social-media accounts.
                  </p>

                  <p className="text-xs">
                    Clients should not send passwords, payment-card information,
                    private authentication codes, or other highly sensitive
                    credentials through ordinary website forms or unsecured
                    communications.
                  </p>
                </div>
              </div>

              {/* 17 */}
              <div>
                <SectionAnchor
                  id="warranties"
                  title="Warranties & Disclaimers"
                  number="17"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency will perform agreed professional Services
                    with reasonable care and skill consistent with the nature of
                    the engagement.
                  </p>

                  <p>
                    Except where expressly stated in a written agreement, the
                    website and Services are provided without guarantees that
                    they will be uninterrupted, error-free, permanently
                    available, compatible with every system, or capable of
                    achieving a particular commercial result.
                  </p>

                  <p className="text-xs">
                    Romine Labs Agency does not guarantee that third-party
                    platforms, APIs, search engines, social networks,
                    advertising systems, hosting services, or software
                    integrations will remain available or unchanged.
                  </p>
                </div>
              </div>

              {/* 18 */}
              <div>
                <SectionAnchor
                  id="liability"
                  title="Limitation of Liability"
                  number="18"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p className="font-semibold text-[#0B1B35]">
                    To the maximum extent permitted by applicable law:
                  </p>

                  <ul className="list-disc space-y-3 pl-5 text-xs text-[#111827]">
                    <li>
                      Romine Labs Agency will not be responsible for indirect,
                      incidental, special, consequential, exemplary, or
                      punitive damages arising from or related to the Services.
                    </li>

                    <li>
                      Romine Labs Agency will not be responsible for loss of
                      profits, revenue, business opportunities, anticipated
                      savings, goodwill, reputation, or business interruption
                      except where such limitation is prohibited by applicable
                      law.
                    </li>

                    <li>
                      Romine Labs Agency will not be responsible for losses
                      caused by Client Content, Client instructions, Client
                      decisions, third-party platforms, third-party services,
                      account restrictions, platform outages, or circumstances
                      outside reasonable control.
                    </li>

                    <li>
                      Unless a signed project agreement expressly provides
                      otherwise, Romine Labs Agency's aggregate liability
                      arising from a specific engagement will not exceed the
                      total professional fees actually paid to Romine Labs
                      Agency for that engagement during the three-month period
                      immediately preceding the event giving rise to the claim.
                    </li>
                  </ul>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <strong className="mb-1 block text-[#0B1B35]">
                      Non-Excludable Liability
                    </strong>

                    <p className="text-xs">
                      Nothing in these Terms is intended to exclude or limit
                      liability that cannot lawfully be excluded or limited.
                    </p>
                  </div>
                </div>
              </div>

              {/* 19 */}
              <div>
                <SectionAnchor
                  id="indemnification"
                  title="Client Indemnification"
                  number="19"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    To the extent permitted by applicable law, the Client agrees
                    to defend and indemnify Romine Labs Agency and its
                    personnel, contractors, and service providers against
                    third-party claims, losses, liabilities, damages, and
                    reasonable costs arising from:
                  </p>

                  <ul className="list-disc space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      Client Content supplied to Romine Labs Agency.
                    </li>
                    <li>
                      Claims that Client Content infringes intellectual-property
                      or other rights.
                    </li>
                    <li>
                      Unlawful or misleading products, services, claims,
                      promotions, or advertising supplied or approved by the
                      Client.
                    </li>
                    <li>
                      Client's breach of these Terms or another applicable
                      agreement.
                    </li>
                    <li>
                      Client's unlawful use of the Services or third-party
                      platforms.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 20 */}
              <div>
                <SectionAnchor
                  id="termination"
                  title="Suspension & Termination"
                  number="20"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Client engagements may be terminated in accordance with the
                    applicable proposal, Statement of Work, retainer agreement,
                    or other written commercial agreement.
                  </p>

                  <p>
                    Where an agreement does not specify a termination process,
                    either party may request termination by providing reasonable
                    written notice.
                  </p>

                  <p>
                    Romine Labs Agency may suspend or terminate access to
                    Services where there is a material breach, persistent
                    non-payment, abusive conduct, unlawful activity, security
                    risk, misuse of systems, or other circumstances that make
                    continued performance unreasonable.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={Clock} title="Outstanding Payments">
                      Fees for work completed, approved expenses, and committed
                      non-cancellable third-party costs remain payable after
                      termination.
                    </InfoCard>

                    <InfoCard icon={FileText} title="Client Deliverables">
                      Completed deliverables will be provided according to the
                      applicable agreement and subject to payment of outstanding
                      amounts.
                    </InfoCard>

                    <InfoCard icon={Ban} title="Access Suspension">
                      Access to managed services may be suspended when continued
                      operation creates financial, security, legal, or
                      operational risk.
                    </InfoCard>

                    <InfoCard icon={RefreshCw} title="Future Services">
                      Termination does not prevent either party from entering
                      into a new agreement in the future.
                    </InfoCard>
                  </div>
                </div>
              </div>

              {/* 21 */}
              <div>
                <SectionAnchor
                  id="refunds"
                  title="Refunds & Cancellation"
                  number="21"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Refund eligibility depends on the nature of the Service,
                    work already performed, third-party costs incurred, and
                    the terms of the applicable project or service agreement.
                  </p>

                  <p>
                    Deposits or advance payments may be non-refundable to the
                    extent they cover reserved capacity, completed strategy,
                    research, design, development, production, third-party
                    costs, or other work already performed.
                  </p>

                  <p className="text-xs">
                    A Client may not cancel a completed or partially completed
                    service solely to avoid payment for work already performed
                    or costs already incurred.
                  </p>

                  <p className="text-xs">
                    Where a specific written agreement contains a different
                    cancellation or refund policy, that agreement controls.
                  </p>
                </div>
              </div>

              {/* 22 */}
              <div>
                <SectionAnchor
                  id="disputes"
                  title="Disputes & Resolution"
                  number="22"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    If a dispute arises between Romine Labs Agency and a
                    Client, both parties agree to make a reasonable effort to
                    resolve the matter through direct communication before
                    escalating the dispute.
                  </p>

                  <ol className="list-decimal space-y-2 pl-5 text-xs text-[#111827]">
                    <li>
                      The party raising the dispute should provide written
                      notice describing the issue and the requested resolution.
                    </li>
                    <li>
                      The parties should make reasonable efforts to discuss the
                      matter and seek a commercially reasonable solution.
                    </li>
                    <li>
                      Where appropriate, the parties may agree to mediation or
                      another alternative dispute-resolution process.
                    </li>
                    <li>
                      If the dispute cannot be resolved through reasonable
                      discussion or an agreed alternative process, either party
                      may pursue remedies available under applicable law.
                    </li>
                  </ol>

                  <div className="flex gap-3 border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <Gavel className="mt-0.5 size-5 shrink-0 text-[#C69A52]" />

                    <p className="text-xs">
                      These Terms are intended to be interpreted consistently
                      with applicable law. Nothing in these Terms prevents a
                      party from exercising rights or seeking remedies that
                      cannot legally be waived.
                    </p>
                  </div>
                </div>
              </div>

              {/* 23 */}
              <div>
                <SectionAnchor
                  id="general"
                  title="General Provisions"
                  number="23"
                />

                <div className="space-y-4 font-sans text-xs leading-relaxed text-[#687386]">
                  <p>
                    <strong className="text-[#0B1B35]">
                      Entire Agreement.
                    </strong>{' '}
                    These Terms and any applicable proposals, Statements of
                    Work, service agreements, invoices, and other written
                    agreements constitute the applicable understanding between
                    the parties concerning the relevant Services.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Order of Precedence.
                    </strong>{' '}
                    Where a signed project or service agreement expressly
                    conflicts with these website Terms, the specific written
                    agreement controls for that engagement.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Severability.
                    </strong>{' '}
                    If any provision is determined to be invalid or
                    unenforceable, the remaining provisions will continue to
                    the extent permitted.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      No Waiver.
                    </strong>{' '}
                    Failure to enforce a provision does not constitute a waiver
                    of the right to enforce it later.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Assignment.
                    </strong>{' '}
                    Neither party may transfer its rights or obligations under
                    a specific engagement in a manner that materially affects
                    the other party without appropriate authorization, except
                    where otherwise permitted by the applicable agreement.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Independent Contractor.
                    </strong>{' '}
                    Romine Labs Agency operates as an independent service
                    provider. Nothing in these Terms creates a partnership,
                    employment relationship, joint venture, franchise, or
                    agency relationship unless expressly agreed in writing.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Electronic Communications.
                    </strong>{' '}
                    Electronic proposals, invoices, approvals, signatures,
                    emails, project-management records, and other digital
                    communications may be used to document and confirm
                    agreements and instructions.
                  </p>

                  <p>
                    <strong className="text-[#0B1B35]">
                      Force Majeure.
                    </strong>{' '}
                    Neither party will be responsible for unreasonable delays
                    caused by circumstances beyond reasonable control,
                    including major infrastructure failures, natural disasters,
                    widespread network outages, cyber incidents, governmental
                    restrictions, platform outages, civil emergencies, or
                    similar events.
                  </p>
                </div>
              </div>

              {/* 24 */}
              <div>
                <SectionAnchor
                  id="changes"
                  title="Changes to These Terms"
                  number="24"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency may update these Terms from time to time
                    to reflect changes to its Services, technology, business
                    practices, legal requirements, or website functionality.
                  </p>

                  <p>
                    The updated version will be published on this page with a
                    revised effective or update date. Your continued use of the
                    website after an update constitutes acceptance of the
                    revised Terms to the extent permitted by applicable law.
                  </p>

                  <p className="text-xs">
                    Existing Client engagements will continue to be governed by
                    their applicable signed agreements where those agreements
                    contain specific terms that differ from an updated version
                    of these website Terms.
                  </p>
                </div>
              </div>

              {/* 25 */}
              <div>
                <SectionAnchor
                  id="contact"
                  title="Contact & Legal Notices"
                  number="25"
                />

                <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center bg-[#0B1B35]">
                      <Scale className="size-5 text-[#C69A52]" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-normal text-[#0B1B35]">
                        Romine Labs Agency
                      </h3>

                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#687386]">
                        Digital Growth • Technology • Creative
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#687386]">
                        Website
                      </p>

                      <a
                        href="https://rominelabsagency.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-sm font-semibold text-[#0B1B35] transition-colors hover:text-[#C69A52]"
                      >
                        rominelabsagency.com
                        <ArrowRight className="size-3.5" />
                      </a>
                    </div>

                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#687386]">
                        General & Legal Contact
                      </p>

                      <a
                        href="mailto:hello@rominelabsagency.com"
                        className="flex items-center gap-2 font-sans text-sm font-semibold text-[#0B1B35] transition-colors hover:text-[#C69A52]"
                      >
                        hello@rominelabsagency.com
                        <Mail className="size-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#E4E7EB] pt-5">
                    <p className="font-sans text-xs leading-relaxed text-[#687386]">
                      For questions concerning these Terms, project
                      agreements, service engagements, invoices, intellectual
                      property, or contractual matters, please contact Romine
                      Labs Agency through the email address above.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-20 space-y-6">
                {/* SUMMARY */}
                <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Scale className="size-5 text-[#C69A52]" />

                    <h3 className="font-serif text-base font-normal text-[#0B1B35]">
                      Terms Summary
                    </h3>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-[#687386]">
                    These Terms establish the general rules for using the
                    Romine Labs Agency website and engaging our digital
                    marketing, technology, automation, analytics, and creative
                    services.
                  </p>

                  <div className="mt-5 space-y-3 border-t border-[#E4E7EB] pt-5">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        Clear project scope and deliverables
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        Transparent service and advertising costs
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        Defined intellectual-property principles
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        Client approval and revision controls
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        AI and third-party platform provisions
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#C69A52]" />
                      <span className="font-sans text-xs text-[#687386]">
                        Liability and termination framework
                      </span>
                    </div>
                  </div>
                </div>

                {/* CLIENT CONTRACTS */}
                <div className="border border-[#E4E7EB] bg-white p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Handshake className="size-5 text-[#C69A52]" />

                    <h3 className="font-serif text-base font-normal text-[#0B1B35]">
                      Client Engagements
                    </h3>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-[#687386]">
                    Specific projects may include additional contractual
                    documents defining exact scope, timelines, fees,
                    deliverables, responsibilities, and commercial terms.
                  </p>

                  <div className="mt-5 space-y-2 border-t border-[#E4E7EB] pt-4 font-sans text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#687386]">Proposal</span>
                      <FileText className="size-3.5 text-[#C69A52]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#687386]">Statement of Work</span>
                      <FileCheck className="size-3.5 text-[#C69A52]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#687386]">
                        Service Agreement
                      </span>
                      <Briefcase className="size-3.5 text-[#C69A52]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#687386]">
                        Data Processing Terms
                      </span>
                      <Database className="size-3.5 text-[#C69A52]" />
                    </div>
                  </div>
                </div>

                {/* PRIVACY */}
                <div className="border border-[#E4E7EB] bg-white p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <ShieldCheck className="size-5 text-[#C69A52]" />

                    <h3 className="font-serif text-base font-normal text-[#0B1B35]">
                      Privacy & Data
                    </h3>
                  </div>

                  <p className="mb-4 font-sans text-xs leading-relaxed text-[#687386]">
                    Information collected through the website is handled under
                    the Romine Labs Agency Privacy Policy.
                  </p>

                  <Link
                    href="/privacy-policy"
                    className="flex items-center justify-between border-t border-[#E4E7EB] pt-4 font-sans text-xs font-semibold text-[#0B1B35] transition-colors hover:text-[#C69A52]"
                  >
                    <span>Read Privacy Policy</span>
                    <ChevronRight className="size-4 text-[#C69A52]" />
                  </Link>
                </div>

                {/* CONTACT */}
                <div className="border border-[#0B1B35] bg-[#0B1B35] p-6 text-white">
                  <Eyebrow onDark>Romine Labs Agency</Eyebrow>

                  <h3 className="mt-3 font-serif text-2xl font-normal text-white">
                    Questions about our terms?
                  </h3>

                  <p className="mt-3 font-sans text-xs leading-relaxed text-[#B7C0CC]">
                    Contact our team regarding service agreements, proposals,
                    project scope, payments, intellectual property, or other
                    contractual questions.
                  </p>

                  <a
                    href="mailto:hello@rominelabsagency.com"
                    className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C69A52] transition-colors hover:text-[#F0C97A]"
                  >
                    <Mail className="size-3.5" />
                    <span>hello@rominelabsagency.com</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FINAL CTA / DOCUMENT FOOTER */}
      <section className="border-t border-[#E4E7EB] bg-[#0B1B35] py-16 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow onDark>Romine Labs Agency</Eyebrow>

              <h2 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl">
                Built for serious digital partnerships.
              </h2>

              <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#B7C0CC]">
                Our engagements are structured around clear objectives,
                defined scope, transparent communication, measurable work, and
                long-term client relationships.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-wider text-[#7F8A9A]">
                <span className="flex items-center gap-2">
                  <Lock className="size-3 text-[#C69A52]" />
                  Structured Engagements
                </span>

                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-3 text-[#C69A52]" />
                  Professional Standards
                </span>

                <span className="flex items-center gap-2">
                  <Zap className="size-3 text-[#C69A52]" />
                  Digital Growth
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C69A52] px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#0B1B35] transition-colors hover:bg-[#D8B978]"
              >
                Contact Romine Labs
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#C69A52] hover:text-[#D8B978]"
              >
                Privacy Policy
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-wider text-[#687386] sm:flex-row sm:items-center sm:justify-between">
            <span>
              © 2026 Romine Labs Agency. All rights reserved.
            </span>

            <span>
              Terms of Service · Updated September 10, 2026
            </span>
          </div>
        </Container>
      </section>
    </main>
  )
}