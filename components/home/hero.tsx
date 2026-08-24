'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const slides = [
  {
    src: '/images/hero-technology.png',
    alt: 'Modern technology workstation with glowing blue data interfaces in a dark studio',
    eyebrow: 'Digital foundations',
    title: <>Build the systems<br />that move business<br />forward.</>,
    description: 'Digital products and platforms designed to make ambitious businesses clearer, faster, and easier to choose.',
    primary: 'Build a stronger foundation',
    secondary: 'Explore digital work',
  },
  {
    src: '/images/hero-creative.png',
    alt: 'Professional video production studio with a cinema camera and color grading monitors',
    eyebrow: 'Creative direction',
    title: <>Make your point<br />of view impossible<br />to miss.</>,
    description: 'Brand, content, and creative systems that turn expertise into attention people remember.',
    primary: 'Shape your story',
    secondary: 'See creative work',
  },
  {
    src: '/images/hero-leadership.png',
    alt: 'Executive team in a glass-walled boardroom overlooking a city skyline at dusk',
    eyebrow: 'Growth strategy',
    title: <>Turn ambition<br />into measurable<br />momentum.</>,
    description: 'Practical growth strategy connecting the right audience, the right offer, and the next best decision.',
    primary: 'Find your next move',
    secondary: 'Explore growth services',
  },
  {
    src: '/images/hero-architecture.png',
    alt: 'Dramatic low-angle view of a sleek modern glass corporate skyscraper',
    eyebrow: 'Brand & positioning',
    title: <>Look ready for<br />where you are<br />going.</>,
    description: 'A sharper position and a more confident digital presence for the next phase of your business.',
    primary: 'Refine your position',
    secondary: 'Explore our approach',
  },
  {
    src: '/images/hero-data.png',
    alt: 'Abstract glowing blue analytics dashboards representing data and digital growth',
    eyebrow: 'Analytics & optimization',
    title: <>Replace guesswork<br />with a clearer<br />signal.</>,
    description: 'Measurement and optimization systems that help your team decide what to improve next.',
    primary: 'Make better decisions',
    secondary: 'Explore analytics',
  },
]

const AUTOPLAY_MS = 6000

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const go = useCallback((i: number) => {
    setActive((i + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion.current) return
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, active])

  return (
    <section
      data-hero-dark
      aria-roledescription="carousel"
      aria-label="Romine Labs featured imagery"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-ink-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== active}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={slide.src || '/placeholder.svg'}
              alt={slide.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-28 pt-28 sm:px-8 lg:px-12">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-brand-soft">
          {slides[active].eyebrow}
        </p>
        <h1 key={active} className="display mt-6 max-w-4xl text-balance text-[clamp(2.75rem,8vw,6.5rem)] text-ink-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
          {slides[active].title}
        </h1>
        <p key={`description-${active}`} className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg animate-in fade-in duration-700">
          {slides[active].description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand/90"
          >
            {slides[active].primary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-border px-7 text-sm font-medium text-ink-foreground transition-colors hover:bg-white/5"
          >
            {slides[active].secondary}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 pb-8 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                onClick={() => go(i)}
                className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/20"
              >
                <span
                  className="absolute inset-0 origin-left rounded-full bg-brand-soft transition-transform duration-300"
                  style={{ transform: `scaleX(${i === active ? 1 : 0})` }}
                />
              </button>
            ))}
          </div>
          <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted sm:flex">
            <span className="inline-block h-4 w-px animate-pulse bg-ink-muted" aria-hidden />
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}
