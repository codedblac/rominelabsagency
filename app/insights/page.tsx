import type { Metadata } from "next"
import { Container } from "@/components/ui/primitives"
import { PageHero } from "@/components/shared/page-hero"
import { CtaBand } from "@/components/shared/cta-band"
import { InsightsGrid } from "@/components/insights/insights-grid"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Insights — Growth, Search, AI & Digital Strategy",
  description:
    "Practical thinking on digital growth, SEO, web development, AI automation and brand — from the team at Romine Labs.",
  alternates: { canonical: `${siteConfig.url}/insights` },
  openGraph: {
    title: "Insights — Romine Labs",
    description: "Practical thinking on digital growth, SEO, AI automation and brand.",
    url: `${siteConfig.url}/insights`,
  },
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas worth building on."
        description="Practical perspectives on strategy, search, technology and brand — written to be useful, not to chase trends."
      />
      <section className="py-16 md:py-24">
        <Container>
          <InsightsGrid />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
