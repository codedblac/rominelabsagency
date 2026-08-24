'use client'

import { useState } from 'react'
import { Container, Eyebrow } from '@/components/ui/primitives'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="display mt-7 text-balance text-5xl sm:text-6xl">Tell us what you&apos;re building.</h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">Have a challenge, a big idea or a project that needs momentum? Share a little context and we&apos;ll be in touch.</p>
            <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground"><p>Prefer email?</p><a className="mt-2 inline-block text-foreground underline decoration-brand underline-offset-4" href="mailto:hello@rominelabs.com">hello@rominelabs.com</a></div>
          </div>
          <form className="flex flex-col gap-6" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">Name<input required name="name" className="h-12 rounded-lg border border-border bg-background px-4 font-normal outline-none transition-colors focus:border-brand" /></label>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">Work email<input required type="email" name="email" className="h-12 rounded-lg border border-border bg-background px-4 font-normal outline-none transition-colors focus:border-brand" /></label>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">What can we help with?<textarea required name="message" rows={6} className="resize-y rounded-lg border border-border bg-background p-4 font-normal outline-none transition-colors focus:border-brand" /></label>
            <button type="submit" className="h-12 w-fit rounded-full bg-brand px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand/90">{sent ? 'Message received' : 'Send inquiry'}</button>
            {sent && <p role="status" className="text-sm text-muted-foreground">Thanks — we&apos;ll follow up shortly.</p>}
          </form>
        </div>
      </Container>
    </section>
  )
}
