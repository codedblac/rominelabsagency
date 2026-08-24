import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { industries } from "@/lib/data/industries"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Romine Labs works across healthcare, dental, real estate, technology, e-commerce, professional services and more — bringing sector insight to every engagement.",
  alternates: { canonical: "/industries" },
}

export default function IndustriesPage() {
  const featured = industries.filter((i) => i.hasPage)
  const others = industries.filter((i) => !i.hasPage)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />
      <PageHero
        eyebrow="Industries"
        title="Sector insight, tailored execution."
        description="We bring pattern recognition from working across industries — then tailor every engagement to the realities, buyers and regulations of yours."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
                >
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <div className="relative p-7">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-2xl text-ink-foreground">{industry.name}</h2>
                      <ArrowUpRight className="size-5 text-ink-foreground/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-foreground" />
                    </div>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-muted">{industry.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {others.length > 0 ? (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                We also work with
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((industry) => (
                  <li key={industry.slug} className="border-b border-border pb-4">
                    <span className="font-serif text-lg text-foreground">{industry.name}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{industry.blurb}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>

      <CtaBand
        eyebrow="Don't see your industry?"
        title="We work with ambitious businesses of every kind."
        description="If you have a growth goal and the drive to reach it, we'd like to hear about it."
      />
    </>
  )
}
