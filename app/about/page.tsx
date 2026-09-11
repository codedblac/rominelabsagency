import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Globe2,
  Layers3,
  LineChart,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react'

import { Container, Eyebrow, SectionHeading } from '@/components/ui/primitives'
import { CtaBand } from '@/components/shared/cta-band'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Romine Labs | Digital Growth, Creative & Technology',
  description:
    'Discover Romine Labs — a remote-first digital growth, creative and technology agency helping ambitious businesses build stronger brands, better digital experiences and measurable growth systems.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About Romine Labs',
    description:
      'A digital growth, creative and technology partner for ambitious businesses.',
    url: `${siteConfig.url}/about`,
  },
}

const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    text: 'We turn business objectives into clear digital, marketing and growth strategies built around measurable outcomes.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Creative',
    text: 'We build brands, campaigns, content and experiences designed to earn attention and create meaningful action.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Technology',
    text: 'We design and develop digital platforms that are fast, scalable, useful and built for the people using them.',
    icon: Layers3,
  },
  {
    number: '04',
    title: 'Growth',
    text: 'We connect acquisition, content, SEO, paid media, conversion and retention into systems designed to compound.',
    icon: LineChart,
  },
]

const principles = [
  {
    number: '01',
    title: 'Think commercially',
    text: 'Marketing is not successful because it looks good. It is successful when it contributes to a business objective.',
  },
  {
    number: '02',
    title: 'Make complexity useful',
    text: 'Modern digital growth involves many moving parts. Our job is to make those parts understandable, connected and actionable.',
  },
  {
    number: '03',
    title: 'Stay close to the work',
    text: 'We believe senior thinking should remain close to execution. Fewer unnecessary layers means faster decisions and better work.',
  },
  {
    number: '04',
    title: 'Build for the long term',
    text: 'We create systems rather than isolated deliverables — assets, platforms, campaigns and processes that continue creating value.',
  },
]

const reasons = [
  'Senior-level thinking without unnecessary agency layers',
  'Strategy, creative, technology and growth under one roof',
  'Clear communication and transparent collaboration',
  'Work connected to measurable business objectives',
  'Flexible engagement models built around client needs',
  'A remote-first model built for international collaboration',
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        data-hero-dark
        className="relative overflow-hidden bg-ink text-ink-foreground"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.png"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>

        <Container className="relative">
          <div className="min-h-[78svh] py-28 md:py-36 lg:flex lg:items-end lg:py-24">
            <div className="max-w-6xl">
              <Eyebrow onDark>About Romine Labs</Eyebrow>

              <h1 className="display mt-7 max-w-5xl text-balance text-5xl leading-[0.96] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                We build the systems behind ambitious growth.
              </h1>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                <p className="max-w-3xl text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
                  Romine Labs is a remote-first digital growth, creative and
                  technology agency helping businesses turn ideas into stronger
                  brands, better digital experiences and measurable growth.
                </p>

                <div className="lg:justify-self-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium backdrop-blur-sm transition hover:bg-white hover:text-ink"
                  >
                    Work with us
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>Why Romine Labs</Eyebrow>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                One partner across the disciplines that increasingly determine
                how modern businesses compete.
              </p>
            </div>

            <div>
              <h2 className="display max-w-5xl text-balance text-4xl leading-tight sm:text-5xl md:text-6xl">
                The digital landscape became connected. Your agency should be
                too.
              </h2>

              <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Businesses rarely have a single marketing problem. A weak
                  website can undermine a strong campaign. Great content can
                  disappear without distribution. Traffic can become expensive
                  when conversion infrastructure is weak.
                </p>

                <p>
                  Romine Labs exists to connect those pieces. We bring strategy,
                  creative, technology and growth together so they work as one
                  system rather than a collection of disconnected activities.
                </p>

                <p>
                  The result is work that is not only more coherent, but more
                  useful — to your customers, your team and ultimately your
                  business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VISUAL STATEMENT */}
      <section className="border-y border-border bg-secondary">
        <Container>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[420px] overflow-hidden border-x border-border lg:min-h-[620px]">
              <Image
                src="/images/industry-technology.png"
                alt="Romine Labs digital strategy and creative team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                  Romine Labs / Operating model
                </p>
                <p className="mt-3 max-w-md text-2xl font-medium tracking-tight">
                  Strategy and execution should never feel like separate
                  conversations.
                </p>
              </div>
            </div>

            <div className="flex items-center border-r border-border p-8 md:p-12 lg:p-16">
              <div>
                <Eyebrow>Our approach</Eyebrow>

                <h2 className="display mt-6 text-4xl leading-tight md:text-5xl">
                  Think broadly. Execute precisely.
                </h2>

                <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                  We zoom out far enough to understand the business, then zoom
                  in far enough to make the work excellent.
                </p>

                <div className="mt-9 space-y-5">
                  {[
                    'Understand the business',
                    'Identify the highest-leverage opportunities',
                    'Build the right strategy',
                    'Create and implement',
                    'Measure, learn and improve',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-b border-border pb-5"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 md:py-28 lg:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we bring together"
              title="Four disciplines. One growth system."
              description="Our capabilities are designed to work independently when needed and together when the challenge demands it."
            />

            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium"
            >
              Explore capabilities
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.number}
                  className="group bg-background p-7 transition hover:bg-secondary md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {capability.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-muted-foreground transition-transform group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-14 font-serif text-3xl tracking-tight">
                    {capability.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                    {capability.text}
                  </p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-ink py-20 text-ink-foreground md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow onDark>Our principles</Eyebrow>

              <h2 className="display mt-6 max-w-md text-4xl leading-tight md:text-5xl">
                The standard behind the work.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-5 py-8 md:grid-cols-[80px_0.7fr_1fr] md:gap-8 md:py-10"
                >
                  <span className="font-mono text-xs text-ink-muted">
                    {principle.number}
                  </span>

                  <h3 className="font-serif text-2xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GLOBAL */}
      <section className="py-20 md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <div>
              <Eyebrow>Built for modern teams</Eyebrow>

              <h2 className="display mt-6 text-4xl leading-tight sm:text-5xl md:text-6xl">
                Remote by design. Global by ambition.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Romine Labs operates remotely, allowing us to work across
                markets, time zones and disciplines without building an agency
                around a traditional office structure.
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                That means access to a flexible team, efficient collaboration
                and a working model designed around the quality of the work —
                not where everyone happens to sit.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm font-medium">
                <Globe2 size={18} />
                <span>Working across borders and markets</span>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/images/glob.webp"
                alt="Global digital collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/20 bg-black/50 p-6 text-white backdrop-blur-md md:inset-x-8 md:bottom-8">
                <div className="flex items-center gap-3">
                  <Workflow size={19} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    Remote operating model
                  </span>
                </div>

                <p className="mt-4 text-xl font-medium">
                  The best talent does not need to share an office.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CLIENTS */}
      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>Why clients choose us</Eyebrow>
              <h2 className="display mt-6 text-4xl leading-tight md:text-5xl">
                Less friction. More momentum.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    <Check size={18} />
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-36">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-16 text-center text-ink-foreground md:px-12 md:py-24">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-3xl">
              <Eyebrow onDark>Start a conversation</Eyebrow>

              <h2 className="display mt-6 text-balance text-4xl leading-tight sm:text-5xl md:text-6xl">
                Have a business challenge worth solving?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Tell us where you are, where you want to go and what is
                getting in the way. We will help you identify the next move.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium text-ink transition hover:bg-white/90"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-4 text-sm font-medium transition hover:bg-white/10"
                >
                  See our work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}