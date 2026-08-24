import type { Metadata } from 'next'
import Image from 'next/image'
import { Container, Eyebrow, SectionHeading } from '@/components/ui/primitives'
import { CtaBand } from '@/components/shared/cta-band'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Romine Labs',
  description: 'Romine Labs is an international digital growth, creative and technology agency built for ambitious teams.',
  alternates: { canonical: `${siteConfig.url}/about` },
}

const values = [
  ['Clarity over noise', 'We simplify the complex and focus every decision on the outcome that matters.'],
  ['Craft with purpose', 'Beautiful work is useful work. Strategy and execution stay close together.'],
  ['Built to compound', 'We create systems, content and digital products that get stronger over time.'],
]

export default function AboutPage() {
  return (
    <>
      <section data-hero-dark className="bg-ink py-28 text-ink-foreground md:py-40">
        <Container>
          <Eyebrow onDark>About Romine Labs</Eyebrow>
          <h1 className="display mt-7 max-w-4xl text-balance text-5xl sm:text-6xl lg:text-8xl">The team behind better digital growth.</h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">We are a remote-first team of strategists, designers, developers and growth specialists helping ambitious businesses build what is next.</p>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image src="/images/about-studio.png" alt="Romine Labs creative studio workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
            <div>
              <SectionHeading eyebrow="How we work" title="One partner. The whole picture." description="Growth rarely lives in one channel. We connect brand, technology and performance so the pieces reinforce each other." />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">From the first strategic question through launch and iteration, our senior team stays close to the work. No layers of handoff. No vanity metrics. Just focused collaboration and measurable progress.</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-y border-border bg-secondary py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our principles" title="The way we show up." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {values.map(([title, text]) => <div key={title} className="bg-background p-7 md:p-9"><h2 className="font-serif text-2xl text-foreground">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
        </Container>
      </section>
      <CtaBand eyebrow="Start a conversation" title="Let&apos;s make the next move a smart one." />
    </>
  )
}
