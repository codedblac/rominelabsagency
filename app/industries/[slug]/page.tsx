import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { industriesWithPages, getIndustry } from "@/lib/data/industries"
import { getServiceTitle, getService } from "@/lib/data/services"

export function generateStaticParams() {
  return industriesWithPages.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}
  return {
    title: `${industry.name} Digital Agency`,
    description: industry.intro ?? industry.blurb,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} — Romine Labs`,
      description: industry.intro ?? industry.blurb,
      url: `/industries/${industry.slug}`,
      images: [{ url: industry.image, width: 1200, height: 630, alt: industry.name }],
    },
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry || !industry.hasPage) notFound()

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${industry.slug}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <PageHero
        eyebrow="Industry"
        title={`${industry.name}`}
        description={industry.intro ?? industry.blurb}
        crumbs={crumbs}
      />

      <section className="bg-background">
        <Container className="-mt-8 lg:-mt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={industry.image || "/placeholder.svg"}
              alt={industry.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Challenges */}
      {industry.challenges && industry.challenges.length > 0 ? (
        <section className="bg-background py-20 lg:py-28">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <SectionHeading eyebrow="The landscape" title={`Challenges in ${industry.name.toLowerCase()}.`} />
              </div>
              <div className="lg:col-span-8">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {industry.challenges.map((c, i) => (
                    <Reveal key={c} delay={(i % 2) * 60}>
                      <li className="flex items-start gap-3 rounded-xl border border-border bg-card p-6 leading-relaxed text-foreground/90">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                        {c}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* How we help — relevant services */}
      {industry.services && industry.services.length > 0 ? (
        <section className="border-y border-border bg-card py-20 lg:py-28">
          <Container>
            <SectionHeading
              eyebrow="How we help"
              title="Services that move the needle here."
              description={`The disciplines we most often bring to ${industry.name.toLowerCase()} engagements.`}
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industry.services.map((s, i) => {
                const svc = getService(s)
                return (
                  <Reveal key={s} delay={(i % 2) * 60}>
                    <Link
                      href={`/services/${s}`}
                      className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
                    >
                      <div>
                        <h3 className="font-serif text-lg text-foreground group-hover:text-brand">
                          {getServiceTitle(s)}
                        </h3>
                        {svc ? (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{svc.summary}</p>
                        ) : null}
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        eyebrow={`${industry.name} growth`}
        title={`Let's grow your ${industry.name.toLowerCase()} business.`}
        description="Tell us about your goals and we'll map the highest-impact opportunities for your market."
      />
    </>
  )
}
