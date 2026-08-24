import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { TrustBar } from "@/components/home/trust-bar"
import { ServicesOverview } from "@/components/home/services-overview"
import { FeaturedWork } from "@/components/home/featured-work"
import { IndustriesStrip } from "@/components/home/industries-strip"
import { Process } from "@/components/home/process"
import { InsightsPreview } from "@/components/home/insights-preview"
import { CtaBand } from "@/components/shared/cta-band"

export const metadata: Metadata = {
  title: "Romine Labs — Digital Growth, Technology & Creative Agency",
  description:
    "Romine Labs is an integrated digital agency combining technology, creative and growth strategy to help ambitious businesses build stronger digital experiences and turn attention into measurable growth.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <FeaturedWork />
      <IndustriesStrip />
      <Process />
      <InsightsPreview />
      <CtaBand />
    </>
  )
}
