/* cspell:disable */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  Scale,
  FileText,
  Check,
  ChevronRight,
  AlertCircle,
  Globe,
  Database,
  Cpu,
  Mail,
  ArrowRight,
  Info,
  Server,
  UserCheck,
  RefreshCw,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection & Privacy | Romine Labs Agency',
  description:
    'Official Privacy Policy for Romine Labs Agency explaining how personal information is collected, used, protected, retained, and disclosed across our website and professional digital services.',
  alternates: {
    canonical: 'https://rominelabsagency.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Romine Labs Agency',
    description:
      'Learn how Romine Labs Agency collects, uses, protects, retains, and processes personal information across its website and digital services.',
    url: 'https://rominelabsagency.com/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Romine Labs Agency',
    description:
      'Data protection and privacy practices for Romine Labs Agency website visitors, prospects, clients, and partners.',
  },
}

const sections = [
  ['introduction', '01. Introduction'],
  ['about-romine-labs', '02. About Romine Labs Agency'],
  ['scope', '03. Scope'],
  ['information-we-collect', '04. Information We Collect'],
  ['sources-of-data', '05. Sources of Information'],
  ['purposes-table', '06. How We Use Information'],
  ['legal-bases', '07. Legal Bases'],
  ['lead-generation', '08. Lead Generation'],
  ['marketing-communications', '09. Marketing Communications'],
  ['cookies-tracking', '10. Cookies & Tracking'],
  ['third-party-services', '11. Third-Party Services'],
  ['ai-automation', '12. AI & Automation'],
  ['client-processing', '13. Client Data Processing'],
  ['data-sharing', '14. Data Sharing'],
  ['international-transfers', '15. International Transfers'],
  ['data-retention', '16. Data Retention'],
  ['data-security', '17. Data Security'],
  ['incident-management', '18. Security Incidents'],
  ['data-subject-rights', '19. Your Privacy Rights'],
  ['exercising-rights', '20. Exercising Your Rights'],
  ['childrens-privacy', "21. Children's Privacy"],
  ['third-party-links', '22. Third-Party Links'],
  ['data-accuracy', '23. Data Accuracy'],
  ['complaints', '24. Complaints'],
  ['policy-changes', '25. Policy Changes'],
  ['contact-information', '26. Contact Information'],
]

function Container({
  children,
  className = '',
}: {
  children: ReactNode
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
  children: ReactNode
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 text-xs leading-relaxed text-[#111827]">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  )
}

function InfoCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-5">
      <h3 className="mb-2 font-serif text-base font-normal text-[#0B1B35]">
        {title}
      </h3>
      <div className="font-sans text-xs leading-relaxed text-[#687386]">
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#111827]">
      {/* HERO */}
      <section
        data-hero-dark
        className="relative min-h-[48vh] overflow-hidden bg-[#0B1B35] text-white"
      >
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#C69A52_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <Eyebrow onDark>Legal Governance & Privacy</Eyebrow>

            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#AAB3C1] sm:text-lg">
              This Privacy Policy explains how Romine Labs Agency collects,
              uses, protects, retains, and discloses personal information
              across our website, communications, client relationships, and
              digital services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs text-[#D8B978]">
              <div>
                <span className="mr-2 uppercase text-[#687386]">
                  Effective:
                </span>
                <span className="font-bold">September 10, 2026</span>
              </div>

              <div className="hidden text-white/20 sm:block">•</div>

              <div>
                <span className="mr-2 uppercase text-[#687386]">
                  Updated:
                </span>
                <span className="font-bold">September 10, 2026</span>
              </div>

              <div className="hidden text-white/20 sm:block">•</div>

              <div>
                <span className="mr-2 uppercase text-[#687386]">
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
              Privacy Policy
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

            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap transition-colors hover:text-[#C69A52]"
              >
                {label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* MAIN DOCUMENT */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* CONTENT */}
            <div className="space-y-16 lg:col-span-8">
              {/* NOTICE */}
              <div className="border border-[#E4E7EB] border-l-4 border-l-[#C69A52] bg-[#F7F5F0] p-6">
                <div className="mb-2 flex items-center gap-2 font-serif text-sm font-normal text-[#0B1B35]">
                  <AlertCircle className="size-4 text-[#C69A52]" />
                  <span>Important Privacy Notice</span>
                </div>

                <p className="font-sans text-xs leading-relaxed text-[#687386]">
                  This Privacy Policy describes the general privacy practices
                  of Romine Labs Agency. Specific client engagements may be
                  governed by additional contractual terms, Data Processing
                  Agreements, platform-specific terms, or other written
                  agreements. Where additional terms apply, they should be
                  read together with this Privacy Policy.
                </p>
              </div>

              {/* 01 */}
              <section>
                <SectionAnchor
                  id="introduction"
                  title="Introduction & Overview"
                  number="01"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Welcome to <strong className="text-[#0B1B35]">Romine Labs Agency</strong>{' '}
                    (&quot;Romine Labs Agency,&quot; &quot;Romine Labs,&quot;
                    &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                  </p>

                  <p>
                    Romine Labs Agency is a digital growth, technology, creative,
                    and marketing agency providing services that may include web
                    development, search engine optimization, paid advertising,
                    social media management, content production, lead
                    generation, CRM and automation, email marketing, artificial
                    intelligence solutions, analytics, conversion optimization,
                    and brand creative services.
                  </p>

                  <p>
                    This Privacy Policy explains how we process personal
                    information when you visit our website, communicate with
                    us, request our services, become a client, interact with
                    our marketing communications, or otherwise engage with
                    Romine Labs Agency.
                  </p>
                </div>
              </section>

              {/* 02 */}
              <section>
                <SectionAnchor
                  id="about-romine-labs"
                  title="About Romine Labs Agency"
                  number="02"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency operates as a professional digital
                    services provider. Depending on the relationship and the
                    service being delivered, we may process information in
                    different capacities.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard title="A. Our Own Business Operations">
                      When you visit our website, submit an inquiry, subscribe
                      to communications, request a proposal, schedule a
                      consultation, or communicate with our team, Romine Labs
                      Agency generally determines the purposes for which your
                      information is processed.
                    </InfoCard>

                    <InfoCard title="B. Services Delivered for Clients">
                      When we process personal information supplied by a client
                      for the purpose of delivering contracted services, the
                      client may determine the purposes and means of processing.
                      In those circumstances, our role may be that of a service
                      provider or processor acting according to the client&apos;s
                      documented instructions.
                    </InfoCard>
                  </div>
                </div>
              </section>

              {/* 03 */}
              <section>
                <SectionAnchor
                  id="scope"
                  title="Scope of this Policy"
                  number="03"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    This Privacy Policy applies to personal information
                    processed in connection with:
                  </p>

                  <div className="grid gap-2 text-xs font-medium text-[#111827]">
                    {[
                      'Visitors and users of the Romine Labs Agency website.',
                      'Prospective clients, business leads, and professional contacts.',
                      'Current and former clients and their authorized representatives.',
                      'Subscribers to newsletters, insights, and commercial communications.',
                      'Individuals who communicate with our team by email, forms, phone, or digital channels.',
                      'Individuals interacting with official Romine Labs Agency social media profiles.',
                      'Information processed while delivering contracted agency services.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 border-b border-[#E4E7EB] pb-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C69A52]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 04 */}
              <section>
                <SectionAnchor
                  id="information-we-collect"
                  title="Information We Collect"
                  number="04"
                />

                <div className="space-y-7 font-sans text-sm leading-relaxed text-[#687386]">
                  <div>
                    <h3 className="mb-2 font-serif text-lg font-normal text-[#0B1B35]">
                      A. Information You Provide
                    </h3>

                    <p className="mb-3">
                      Depending on how you interact with us, you may provide:
                    </p>

                    <BulletList
                      items={[
                        'Name and contact information such as email address and telephone number.',
                        'Company, organization, role, industry, website, and professional information.',
                        'Project requirements, objectives, budgets, target audiences, and service preferences.',
                        'Messages, questions, feedback, attachments, and other information you voluntarily submit.',
                        'Scheduling and consultation information.',
                        'Billing, invoicing, tax, and business administration information.',
                        'Communication preferences and subscription choices.',
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-lg font-normal text-[#0B1B35]">
                      B. Technical and Usage Information
                    </h3>

                    <p className="mb-3">
                      When you use our website, certain information may be
                      collected automatically, depending on the technologies
                      enabled on the website:
                    </p>

                    <BulletList
                      items={[
                        'IP address and general network information.',
                        'Browser type, device type, operating system, and technical configuration.',
                        'Pages visited, navigation patterns, referring pages, and interaction events.',
                        'Approximate geographic information derived from technical data.',
                        'Timestamps, diagnostic information, security logs, and error information.',
                        'Cookie identifiers and similar technologies where enabled.',
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-lg font-normal text-[#0B1B35]">
                      C. Client-Provided Information
                    </h3>

                    <p>
                      Clients may provide information to us as part of a
                      contracted project. This can include lead records,
                      subscriber information, customer information, campaign
                      data, CRM records, analytics information, or other
                      business data required to perform the agreed services.
                    </p>
                  </div>
                </div>
              </section>

              {/* 05 */}
              <section>
                <SectionAnchor
                  id="sources-of-data"
                  title="Sources of Personal Information"
                  number="05"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Personal information may come from several sources,
                    including:
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Direct website forms and inquiries',
                      'Consultation and scheduling requests',
                      'Client organizations and authorized representatives',
                      'Email and business communications',
                      'Cookies and website analytics technologies',
                      'Social media interactions',
                      'Public professional and business sources',
                      'Third-party platforms used to support our services',
                    ].map((source) => (
                      <div
                        key={source}
                        className="border border-[#E4E7EB] bg-[#F7F5F0] p-4 text-xs font-medium text-[#0B1B35]"
                      >
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 06 */}
              <section>
                <SectionAnchor
                  id="purposes-table"
                  title="How We Use Personal Information"
                  number="06"
                />

                <p className="mb-6 font-sans text-sm leading-relaxed text-[#687386]">
                  We use personal information only for legitimate business,
                  contractual, operational, security, communication, or
                  service-delivery purposes consistent with the context in
                  which the information was collected.
                </p>

                <div className="overflow-x-auto border border-[#E4E7EB]">
                  <table className="w-full min-w-[680px] text-left font-sans text-xs">
                    <thead>
                      <tr className="border-b border-[#E4E7EB] bg-[#0B1B35] font-mono text-[11px] uppercase text-[#C69A52]">
                        <th className="p-3.5">Purpose</th>
                        <th className="p-3.5">Information</th>
                        <th className="p-3.5">Typical Basis</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#E4E7EB]">
                      {[
                        [
                          'Responding to inquiries',
                          'Contact and project information',
                          'Pre-contract steps / legitimate interests',
                        ],
                        [
                          'Scheduling consultations',
                          'Contact and scheduling information',
                          'Pre-contract steps / legitimate interests',
                        ],
                        [
                          'Delivering services',
                          'Client and project information',
                          'Contractual necessity',
                        ],
                        [
                          'Billing and administration',
                          'Business and billing information',
                          'Contractual / legal requirements',
                        ],
                        [
                          'Marketing communications',
                          'Contact details and preferences',
                          'Consent / legitimate interests where permitted',
                        ],
                        [
                          'Website security',
                          'Technical and security information',
                          'Legitimate interests / legal requirements',
                        ],
                        [
                          'Analytics and optimization',
                          'Usage and technical information',
                          'Consent or legitimate interests where permitted',
                        ],
                        [
                          'Service improvement',
                          'Usage, feedback, and communications',
                          'Legitimate interests',
                        ],
                      ].map(([purpose, data, basis]) => (
                        <tr
                          key={purpose}
                          className="transition-colors hover:bg-[#F7F5F0]"
                        >
                          <td className="p-3.5 font-serif text-sm text-[#0B1B35]">
                            {purpose}
                          </td>
                          <td className="p-3.5 text-[#687386]">{data}</td>
                          <td className="p-3.5 font-mono text-[11px] text-[#0B1B35]">
                            {basis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 07 */}
              <section>
                <SectionAnchor
                  id="legal-bases"
                  title="Legal Bases for Processing"
                  number="07"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Depending on the circumstances and applicable privacy law,
                    processing may rely on one or more lawful grounds.
                  </p>

                  <div className="grid gap-3">
                    <InfoCard title="Consent">
                      Where required, we may ask for consent before processing
                      information for a specified purpose. You may withdraw
                      consent where applicable.
                    </InfoCard>

                    <InfoCard title="Contractual Necessity">
                      We may process information where necessary to provide
                      requested services, administer an agreement, or take
                      steps requested before entering into an agreement.
                    </InfoCard>

                    <InfoCard title="Legal Obligations">
                      Information may be processed when necessary to comply
                      with applicable legal, regulatory, accounting, tax, or
                      security obligations.
                    </InfoCard>

                    <InfoCard title="Legitimate Interests">
                      We may process information where reasonably necessary
                      for legitimate business interests, such as security,
                      service improvement, business communications, and
                      operational administration, while considering applicable
                      privacy rights.
                    </InfoCard>
                  </div>
                </div>
              </section>

              {/* 08 */}
              <section>
                <SectionAnchor
                  id="lead-generation"
                  title="Lead Generation Practices"
                  number="08"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <InfoCard title="Romine Labs Agency Leads">
                    If you submit your information to Romine Labs Agency through
                    a contact form, consultation request, lead form, or similar
                    channel, we may use that information to evaluate your
                    inquiry, respond to you, provide requested information,
                    prepare proposals, and discuss potential services.
                  </InfoCard>

                  <InfoCard title="Client Lead Generation">
                    When we create or manage lead-generation campaigns for a
                    client, information collected through the client&apos;s
                    campaigns is generally processed for that client&apos;s
                    purposes. The client is responsible for providing an
                    appropriate privacy notice and lawful instructions for the
                    collection and use of those leads.
                  </InfoCard>
                </div>
              </section>

              {/* 09 */}
              <section>
                <SectionAnchor
                  id="marketing-communications"
                  title="Marketing Communications & Opt-Out"
                  number="09"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Where permitted, Romine Labs Agency may send business
                    updates, insights, educational content, service
                    announcements, invitations, or other marketing
                    communications.
                  </p>

                  <p>
                    You can unsubscribe from promotional email communications
                    at any time using the unsubscribe mechanism included in
                    the relevant communication or by contacting us directly.
                  </p>

                  <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-4 text-xs">
                    <strong className="text-[#0B1B35]">
                      Important:
                    </strong>{' '}
                    Unsubscribing from marketing communications does not
                    necessarily stop transactional communications relating to
                    active projects, invoices, account security, contractual
                    matters, or technical service notifications.
                  </div>
                </div>
              </section>

              {/* 10 */}
              <section>
                <SectionAnchor
                  id="cookies-tracking"
                  title="Cookies & Tracking Technologies"
                  number="10"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Our website may use cookies, pixels, tags, local storage,
                    analytics technologies, and similar mechanisms to provide
                    functionality, understand website usage, improve
                    performance, support security, and measure marketing
                    effectiveness.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard title="Essential Technologies">
                      Support security, navigation, basic functionality, and
                      other features necessary for the website to operate.
                    </InfoCard>

                    <InfoCard title="Functional Technologies">
                      May remember preferences and choices to improve the
                      website experience.
                    </InfoCard>

                    <InfoCard title="Analytics Technologies">
                      Help us understand traffic, engagement, performance, and
                      website usage.
                    </InfoCard>

                    <InfoCard title="Marketing Technologies">
                      Where implemented and permitted, may help measure
                      advertising performance, conversions, or remarketing
                      activity.
                    </InfoCard>
                  </div>

                  <p className="text-xs">
                    You can manage certain cookies through your browser or
                    available cookie-control mechanisms. Disabling some
                    technologies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* 11 */}
              <section>
                <SectionAnchor
                  id="third-party-services"
                  title="Third-Party Services & Providers"
                  number="11"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We may use third-party service providers to operate,
                    maintain, secure, analyze, or support our business and
                    client services.
                  </p>

                  <BulletList
                    items={[
                      'Website hosting and cloud infrastructure providers.',
                      'Business email and communication services.',
                      'Scheduling and consultation platforms.',
                      'CRM and customer-management systems.',
                      'Analytics and performance measurement services.',
                      'Payment, invoicing, and financial administration providers.',
                      'Advertising and social media platforms.',
                      'Automation and integration platforms.',
                      'Artificial intelligence and machine-learning service providers.',
                    ]}
                  />

                  <p className="text-xs">
                    Third-party providers may process information according to
                    their own privacy policies and contractual obligations.
                    Where we engage providers to process information on our
                    behalf, we seek appropriate contractual and security
                    protections.
                  </p>
                </div>
              </section>

              {/* 12 */}
              <section>
                <SectionAnchor
                  id="ai-automation"
                  title="Artificial Intelligence & Automation"
                  number="12"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency may use artificial intelligence,
                    machine-learning systems, automation platforms, and
                    algorithmic tools in delivering certain services and
                    operating internal workflows.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard title="Human Oversight">
                      Where appropriate, AI-assisted outputs are reviewed,
                      edited, validated, or supervised by people before being
                      used in important client-facing work.
                    </InfoCard>

                    <InfoCard title="Purpose Limitation">
                      AI and automation tools are used for legitimate
                      operational or service purposes such as research,
                      drafting, analysis, classification, workflow automation,
                      coding, content assistance, and data processing.
                    </InfoCard>

                    <InfoCard title="Confidential Information">
                      We take reasonable measures to avoid unnecessary
                      disclosure of confidential client information to
                      third-party AI services and configure services according
                      to available privacy and security controls.
                    </InfoCard>

                    <InfoCard title="Output Limitations">
                      AI-generated or AI-assisted outputs can contain errors,
                      omissions, or inaccurate information. Human review remains
                      important where accuracy, compliance, or business impact
                      is material.
                    </InfoCard>
                  </div>
                </div>
              </section>

              {/* 13 */}
              <section>
                <SectionAnchor
                  id="client-processing"
                  title="Processing Personal Data on Behalf of Clients"
                  number="13"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Some Romine Labs Agency services require access to personal
                    information controlled by a client. Examples may include
                    CRM records, email subscriber lists, customer records,
                    campaign leads, website analytics, or advertising
                    audiences.
                  </p>

                  <BulletList
                    items={[
                      'Clients are responsible for having an appropriate lawful basis to provide information to us.',
                      'We process client-provided personal information only for agreed service purposes and documented instructions.',
                      'Access should be limited to personnel and providers who reasonably require it for service delivery.',
                      'Clients should provide only information reasonably necessary for the contracted service.',
                      'Additional data-processing terms may apply where required by law or contract.',
                    ]}
                  />
                </div>
              </section>

              {/* 14 */}
              <section>
                <SectionAnchor
                  id="data-sharing"
                  title="Data Sharing & Disclosure"
                  number="14"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Romine Labs Agency does not sell personal information for
                    monetary consideration as a core business practice.
                  </p>

                  <p>
                    Information may nevertheless be disclosed where reasonably
                    necessary for legitimate business or legal purposes,
                    including:
                  </p>

                  <BulletList
                    items={[
                      'Service providers supporting our operations.',
                      'Professional advisers, contractors, and authorized service partners.',
                      'Client organizations where information was collected or processed on their behalf.',
                      'Payment, accounting, hosting, security, analytics, advertising, or technology providers.',
                      'Authorities or other parties where disclosure is required by applicable law or valid legal process.',
                      'A successor organization in connection with a merger, acquisition, restructuring, or transfer of business assets.',
                    ]}
                  />
                </div>
              </section>

              {/* 15 */}
              <section>
                <SectionAnchor
                  id="international-transfers"
                  title="International Data Transfers"
                  number="15"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <div className="flex gap-3 border border-[#E4E7EB] bg-[#F7F5F0] p-5">
                    <Globe className="mt-0.5 size-5 shrink-0 text-[#C69A52]" />

                    <p className="text-xs leading-relaxed">
                      Because modern cloud, communication, analytics,
                      advertising, payment, and technology providers may
                      operate infrastructure in multiple countries, personal
                      information may be processed outside the country in which
                      it was originally collected.
                    </p>
                  </div>

                  <p>
                    Where applicable law requires safeguards for international
                    transfers, we seek to use appropriate contractual,
                    organizational, technical, or recognized transfer
                    mechanisms.
                  </p>

                  <p className="text-xs">
                    The exact location of processing may change as service
                    providers update their infrastructure or as we adopt new
                    technologies.
                  </p>
                </div>
              </section>

              {/* 16 */}
              <section>
                <SectionAnchor
                  id="data-retention"
                  title="Data Retention"
                  number="16"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We retain personal information only for as long as
                    reasonably necessary for the purposes described in this
                    Policy, contractual obligations, legal requirements,
                    security, dispute resolution, or legitimate business
                    requirements.
                  </p>

                  <div className="overflow-x-auto border border-[#E4E7EB]">
                    <table className="w-full min-w-[650px] text-left font-sans text-xs">
                      <thead>
                        <tr className="bg-[#0B1B35] font-mono text-[11px] uppercase text-[#C69A52]">
                          <th className="p-3.5">Information</th>
                          <th className="p-3.5">Purpose</th>
                          <th className="p-3.5">General Approach</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-[#E4E7EB]">
                        <tr>
                          <td className="p-3.5 font-serif text-sm text-[#0B1B35]">
                            Website inquiries
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Business communication
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Retained while reasonably useful and for legitimate
                            recordkeeping needs.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3.5 font-serif text-sm text-[#0B1B35]">
                            Client records
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Service and administration
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Retained during the relationship and afterward as
                            reasonably necessary.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3.5 font-serif text-sm text-[#0B1B35]">
                            Marketing subscriptions
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Communications
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Retained while subscribed and as necessary to
                            maintain suppression records.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-3.5 font-serif text-sm text-[#0B1B35]">
                            Security records
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Security and fraud prevention
                          </td>
                          <td className="p-3.5 text-[#687386]">
                            Retained for periods reasonably necessary for
                            security and investigation.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 17 */}
              <section>
                <SectionAnchor
                  id="data-security"
                  title="Data Security Safeguards"
                  number="17"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We use reasonable administrative, technical, and
                    organizational safeguards designed to protect personal
                    information against unauthorized access, alteration,
                    disclosure, destruction, or loss.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Access controls and permission management',
                      'Secure transmission technologies where appropriate',
                      'Authentication and account-security controls',
                      'Least-privilege access principles',
                      'Confidentiality obligations for authorized personnel',
                      'Security monitoring and incident response procedures',
                      'Reasonable vendor and platform security assessments',
                      'Secure management of service credentials and API access',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border border-[#E4E7EB] bg-white p-4 text-xs text-[#111827]"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-[#C69A52]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs">
                    No method of electronic storage or transmission can be
                    guaranteed to be completely secure. Accordingly, we cannot
                    guarantee absolute security of information.
                  </p>
                </div>
              </section>

              {/* 18 */}
              <section>
                <SectionAnchor
                  id="incident-management"
                  title="Security Incidents & Data Breaches"
                  number="18"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    If we become aware of a confirmed security incident
                    involving personal information, we will take reasonable
                    steps to investigate, contain, mitigate, and remediate the
                    incident.
                  </p>

                  <p>
                    Where notification is required by applicable law or
                    contractual obligations, we will provide appropriate
                    notifications within the applicable legal or contractual
                    timeframe.
                  </p>

                  <div className="flex gap-3 border border-[#E4E7EB] bg-[#F7F5F0] p-4">
                    <Lock className="mt-0.5 size-4 shrink-0 text-[#C69A52]" />

                    <p className="text-xs">
                      Clients should promptly notify Romine Labs Agency if
                      they believe credentials, accounts, datasets, or other
                      information shared with us have been compromised.
                    </p>
                  </div>
                </div>
              </section>

              {/* 19 */}
              <section>
                <SectionAnchor
                  id="data-subject-rights"
                  title="Your Privacy Rights"
                  number="19"
                />

                <div className="space-y-5 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Depending on your location and the law applicable to your
                    information, you may have rights relating to your personal
                    information.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Right to know how personal information is processed',
                      'Right to request access to personal information',
                      'Right to request correction of inaccurate information',
                      'Right to request deletion where legally available',
                      'Right to object to certain processing',
                      'Right to request restriction of processing',
                      'Right to data portability where applicable',
                      'Right to withdraw consent where processing relies on consent',
                      'Right to opt out of certain marketing communications',
                    ].map((right) => (
                      <div
                        key={right}
                        className="border border-[#E4E7EB] bg-[#F7F5F0] p-3 text-xs font-medium text-[#0B1B35]"
                      >
                        {right}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 20 */}
              <section>
                <SectionAnchor
                  id="exercising-rights"
                  title="How to Exercise Your Privacy Rights"
                  number="20"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    To submit a privacy request, contact Romine Labs Agency
                    using the details provided in the Contact Information
                    section of this Policy.
                  </p>

                  <p>
                    Please provide enough information for us to understand your
                    request and locate the relevant information. We may need to
                    verify your identity or authority before completing certain
                    requests.
                  </p>

                  <p className="text-xs">
                    We aim to respond within a reasonable period and within any
                    timeframe required by applicable privacy law.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C69A52] transition-colors hover:text-[#0B1B35]"
                  >
                    Contact Romine Labs Agency
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </section>

              {/* 21 */}
              <section>
                <SectionAnchor
                  id="childrens-privacy"
                  title="Children's Privacy"
                  number="21"
                />

                <p className="font-sans text-sm leading-relaxed text-[#687386]">
                  Our website and professional services are primarily intended
                  for businesses, organizations, and adult professional users.
                  We do not knowingly design our services to collect personal
                  information from children. If you believe a child has
                  provided personal information to us, please contact us so
                  that we can review and take appropriate action.
                </p>
              </section>

              {/* 22 */}
              <section>
                <SectionAnchor
                  id="third-party-links"
                  title="Third-Party Links & Platforms"
                  number="22"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    Our website, communications, campaigns, and digital
                    materials may contain links to third-party websites,
                    platforms, applications, or services.
                  </p>

                  <p>
                    Third-party services operate independently from Romine Labs
                    Agency and may have their own terms, privacy policies,
                    cookies, and data practices. We encourage you to review
                    those policies before submitting information directly to
                    third parties.
                  </p>
                </div>
              </section>

              {/* 23 */}
              <section>
                <SectionAnchor
                  id="data-accuracy"
                  title="Data Accuracy"
                  number="23"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We seek to maintain personal information that is reasonably
                    accurate and appropriate for the purpose for which it is
                    used.
                  </p>

                  <p>
                    You should notify us if information you have provided
                    changes or if you believe information associated with you
                    is inaccurate.
                  </p>
                </div>
              </section>

              {/* 24 */}
              <section>
                <SectionAnchor
                  id="complaints"
                  title="Privacy Complaints"
                  number="24"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We encourage you to contact Romine Labs Agency first if you
                    have a concern regarding our handling of personal
                    information. We will review the concern and seek to resolve
                    it appropriately.
                  </p>

                  <p>
                    Depending on your location and applicable law, you may also
                    have the right to lodge a complaint with the relevant
                    privacy or data-protection supervisory authority.
                  </p>
                </div>
              </section>

              {/* 25 */}
              <section>
                <SectionAnchor
                  id="policy-changes"
                  title="Changes to this Privacy Policy"
                  number="25"
                />

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#687386]">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes to our services, technologies, business
                    practices, legal requirements, or privacy procedures.
                  </p>

                  <p>
                    When we update the Policy, we will revise the Last Updated
                    date displayed at the beginning of the document. Material
                    changes may also be communicated through appropriate
                    channels where required.
                  </p>

                  <div className="flex gap-3 border border-[#E4E7EB] bg-[#F7F5F0] p-4">
                    <RefreshCw className="mt-0.5 size-4 shrink-0 text-[#C69A52]" />

                    <p className="text-xs">
                      We recommend reviewing this page periodically so you
                      remain informed about our current privacy practices.
                    </p>
                  </div>
                </div>
              </section>

              {/* 26 */}
              <section>
                <SectionAnchor
                  id="contact-information"
                  title="Contact Information"
                  number="26"
                />

                <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center bg-[#0B1B35]">
                      <Mail className="size-4 text-[#C69A52]" />
                    </div>

                    <div>
                      <p className="font-serif text-lg font-normal text-[#0B1B35]">
                        Romine Labs Agency
                      </p>

                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#687386]">
                        Privacy & Data Protection Contact
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 font-sans text-xs text-[#687386]">
                    <div className="flex flex-col gap-1 border-b border-[#E4E7EB] pb-3 sm:flex-row sm:justify-between">
                      <span>Website</span>

                      <a
                        href="https://rominelabsagency.com"
                        className="font-medium text-[#0B1B35] hover:text-[#C69A52]"
                      >
                        rominelabsagency.com
                      </a>
                    </div>

                    <div className="flex flex-col gap-1 border-b border-[#E4E7EB] pb-3 sm:flex-row sm:justify-between">
                      <span>General Contact</span>

                      <a
                        href="mailto:hello@rominelabsagency.com"
                        className="font-medium text-[#0B1B35] hover:text-[#C69A52]"
                      >
                        hello@rominelabsagency.com
                      </a>
                    </div>

                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                      <span>Privacy & Legal Contact</span>

                      <a
                        href="mailto:legal@rominelabsagency.com"
                        className="font-medium text-[#0B1B35] hover:text-[#C69A52]"
                      >
                        legal@rominelabsagency.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-20 space-y-6">
                {/* OVERVIEW */}
                <div className="border border-[#E4E7EB] bg-[#F7F5F0] p-6">
                  <div className="flex items-center gap-2 font-serif text-base text-[#0B1B35]">
                    <ShieldCheck className="size-5 text-[#C69A52]" />
                    <span>Privacy Overview</span>
                  </div>

                  <p className="mt-4 font-sans text-xs leading-relaxed text-[#687386]">
                    Romine Labs Agency is committed to responsible handling of
                    personal information and transparent communication about
                    how information is used.
                  </p>

                  <div className="mt-5 space-y-3 border-t border-[#E4E7EB] pt-4 font-mono text-[11px]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#687386]">Data Sales</span>
                      <span className="font-bold text-[#0B1B35]">
                        Not Our Business Model
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#687386]">Policy Updated</span>
                      <span className="font-bold text-[#0B1B35]">
                        Sep 10, 2026
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#687386]">Privacy Requests</span>
                      <span className="font-bold text-[#0B1B35]">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* PRINCIPLES */}
                <div className="border border-[#E4E7EB] bg-white p-6">
                  <div className="mb-5 flex items-center gap-2 font-serif text-base text-[#0B1B35]">
                    <Scale className="size-5 text-[#C69A52]" />
                    <span>Our Privacy Principles</span>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Lock,
                        title: 'Protect',
                        text: 'Use reasonable safeguards to protect information.',
                      },
                      {
                        icon: Database,
                        title: 'Limit',
                        text: 'Use information for legitimate and relevant purposes.',
                      },
                      {
                        icon: UserCheck,
                        title: 'Respect',
                        text: 'Respect applicable privacy rights and preferences.',
                      },
                      {
                        icon: ShieldCheck,
                        title: 'Be Transparent',
                        text: 'Explain our information practices clearly.',
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <div key={title} className="flex gap-3">
                        <Icon className="mt-0.5 size-4 shrink-0 text-[#C69A52]" />

                        <div>
                          <p className="font-serif text-sm text-[#0B1B35]">
                            {title}
                          </p>

                          <p className="mt-1 font-sans text-[11px] leading-relaxed text-[#687386]">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PRIVACY CONTACT */}
                <div className="space-y-4 border border-[#0B1B35] bg-[#0B1B35] p-6 text-white">
                  <Eyebrow onDark>Privacy Office</Eyebrow>

                  <h3 className="font-serif text-xl font-normal text-white">
                    Have a Privacy Question?
                  </h3>

                  <p className="font-sans text-xs leading-relaxed text-[#AAB3C1]">
                    Contact Romine Labs Agency regarding privacy requests,
                    personal information, data-processing questions, or
                    privacy concerns.
                  </p>

                  <a
                    href="mailto:legal@rominelabsagency.com"
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C69A52] transition-colors hover:text-[#D8B978]"
                  >
                    <span>Email Privacy Contact</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>

                {/* RELATED DOCUMENTS */}
                <div className="border border-[#E4E7EB] bg-white p-6">
                  <h4 className="font-serif text-sm font-normal text-[#0B1B35]">
                    Related Legal Documents
                  </h4>

                  <ul className="mt-4 space-y-3 font-sans text-xs text-[#687386]">
                    <li>
                      <Link
                        href="/terms"
                        className="flex items-center justify-between transition-colors hover:text-[#C69A52]"
                      >
                        <span>Terms of Service</span>
                        <ChevronRight className="size-3 text-[#C69A52]" />
                      </Link>
                    </li>

                    <li className="border-t border-[#E4E7EB] pt-3">
                      <Link
                        href="/cookie-policy"
                        className="flex items-center justify-between transition-colors hover:text-[#C69A52]"
                      >
                        <span>Cookie Policy</span>
                        <ChevronRight className="size-3 text-[#C69A52]" />
                      </Link>
                    </li>

                    <li className="border-t border-[#E4E7EB] pt-3">
                      <Link
                        href="/contact"
                        className="flex items-center justify-between transition-colors hover:text-[#C69A52]"
                      >
                        <span>Contact Romine Labs Agency</span>
                        <ChevronRight className="size-3 text-[#C69A52]" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FINAL LEGAL CTA */}
      <section className="border-t border-[#E4E7EB] bg-[#0B1B35] py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Eyebrow onDark>Privacy & Trust</Eyebrow>

              <h2 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight text-white sm:text-4xl">
                Questions about how Romine Labs Agency handles information?
              </h2>

              <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#AAB3C1]">
                We welcome privacy-related questions, data requests, and
                inquiries about how personal information is handled during our
                services.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="mailto:legal@rominelabsagency.com"
                className="inline-flex items-center justify-center gap-3 bg-[#C69A52] px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#0B1B35] transition-colors hover:bg-[#D8B978]"
              >
                Contact Privacy Office
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}