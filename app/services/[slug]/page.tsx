import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Container, SectionHeading, CtaButton } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { Faq } from "@/components/shared/faq"
import { CtaBand } from "@/components/shared/cta-band"
import { ServiceJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { services, getService, getServiceTitle } from "@/lib/data/services"
import { createMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return createMetadata({
    title: `${service.title} — ${service.tagline}`,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.image,
  })
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ]

  return (
    <>
      <ServiceJsonLd name={service.title} description={service.summary} slug={service.slug} />
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd faqs={service.faqs} />

      <PageHero
        eyebrow={service.discipline}
        title={service.title}
        description={service.tagline}
        crumbs={crumbs}
        schemaPath={`/services/${service.slug}`}
        schemaDescription={service.summary}
      />

      {/* Intro + image */}
      <section className="bg-background py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-balance font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                {service.intro}
              </p>
              <div className="mt-10">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Problems we solve
                </h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.solve.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} at Romine Labs`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-y border-border bg-card py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="What's included" title="A complete, considered engagement." />
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {service.included.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60}>
                <div className="flex items-start gap-3 border-b border-border py-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                  <span className="leading-relaxed text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What we build */}
      {service.capabilities?.length ? (
        <section className="bg-background py-20 lg:py-28">
          <Container>
            <SectionHeading eyebrow="What we build" title="Specific work, shaped around the outcome." />
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {service.capabilities.map((capability, i) => (
                <Reveal key={capability.title} delay={(i % 3) * 60}>
                  <article className="h-full bg-card p-7">
                    <h3 className="font-serif text-xl text-foreground">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{capability.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Approach */}
      <section className="bg-background py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="How we deliver."
            description="A clear, collaborative process designed to reduce risk and compound results."
          />
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <li className="flex h-full flex-col gap-3 bg-card p-8">
                  <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Audience and context */}
      {(service.audiences?.length || service.technology?.length || service.outcomes?.length) ? (
        <section className="border-t border-border bg-card py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-3">
              {service.audiences?.length ? <div><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Who it&apos;s for</h2><ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">{service.audiences.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
              {service.technology?.length ? <div><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Context and tooling</h2><ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">{service.technology.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
              {service.outcomes?.length ? <div><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What improves</h2><ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Deliverables + engagement */}
      <section className="border-t border-border bg-card py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Deliverables" title="What you'll walk away with." />
              <ul className="mt-8 flex flex-col gap-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-ink p-8 text-ink-foreground lg:p-10">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Engagement</h3>
                <p className="mt-4 text-pretty font-serif text-xl leading-snug">{service.engagement}</p>
              </div>
              <CtaButton
                href="/contact"
                className="bg-ink-foreground text-ink hover:bg-brand hover:text-primary-foreground focus-visible:ring-offset-ink"
              >
                Request a proposal
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-background py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQs" title="Good questions, answered." />
            </div>
            <div className="lg:col-span-8">
              <Faq faqs={service.faqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {service.related.length > 0 ? (
        <section className="border-t border-border bg-card py-20 lg:py-24">
          <Container>
            <h2 className="font-serif text-2xl text-foreground">Related services</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {service.related.map((rel) => (
                <Link
                  key={rel}
                  href={`/services/${rel}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
                >
                  <span className="font-serif text-lg text-foreground group-hover:text-brand">
                    {getServiceTitle(rel)}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand />
    </>
  )
}
