import Image from "next/image"
import Link from "next/link"
import { Container, SectionHeading, ArrowLink } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { industries } from "@/lib/data/industries"

export function IndustriesStrip() {
  const shown = industries.slice(0, 6)
  return (
    <section className="bg-ink py-20 text-ink-foreground lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            onDark
            eyebrow="Industries"
            title="Depth where it counts."
            description="We bring pattern recognition from working across sectors — and tailor every engagement to the realities of yours."
          />
          <ArrowLink href="/industries" onDark>
            All industries
          </ArrowLink>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((industry, i) => {
            const href = industry.hasPage ? `/industries/${industry.slug}` : "/industries"
            return (
              <Reveal key={industry.slug} delay={(i % 3) * 80}>
                <Link
                  href={href}
                  className="group relative flex aspect-[3/2] flex-col justify-end overflow-hidden rounded-xl"
                >
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="relative p-6">
                    <h3 className="font-serif text-xl text-ink-foreground">{industry.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{industry.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
