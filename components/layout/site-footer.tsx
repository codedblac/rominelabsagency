import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { footerCompany, footerServices } from '@/lib/nav'
import { Logo } from './logo'

const connect: { label: string; href: string }[] = []

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <Logo onDark />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-ink-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-ink-muted">
              An international digital growth, technology and creative agency. Remote-first delivery
              worldwide.
            </p>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-foreground hover:text-brand-soft"
            >
              {siteConfig.email}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <FooterCol title="Services" links={footerServices} />
          <FooterCol title="Company" links={footerCompany} />

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Connect</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {connect.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-ink-muted hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-ink-muted hover:text-ink-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="lg:col-span-3">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
