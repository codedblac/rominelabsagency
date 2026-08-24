import type { Metadata } from "next"
import { Container } from "@/components/ui/primitives"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { WorkGrid } from "@/components/work/work-grid"
import { projects } from "@/lib/data/work"

export const metadata: Metadata = {
  title: "Work — Selected Projects & Case Studies",
  description:
    "Selected projects from Romine Labs across web, brand, social, content, growth and e-commerce. Explore our portfolio and case studies.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <PageHero
        eyebrow="Selected work"
        title="Work we're proud to put our name on."
        description="A cross-section of recent projects. Every engagement is different — these show the range of what an integrated team can deliver."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <section className="bg-background py-20 lg:py-28">
        <Container>
          <WorkGrid projects={projects} />
        </Container>
      </section>
      <CtaBand
        eyebrow="Your project next"
        title="Let's create something worth showing off."
        description="Bring us a challenge. We'll bring the strategy, craft and follow-through to solve it."
      />
    </>
  )
}
