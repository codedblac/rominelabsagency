// components/site-header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/lib/nav'
import { disciplines } from '@/lib/data/services'
import { Logo } from './logo'
import { SERVICE_ROUTES } from '@/lib/routes'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [expandedDiscipline, setExpandedDiscipline] = useState<string | null>(null)
  const [submenuSide, setSubmenuSide] = useState<'right' | 'left'>('right')
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const evaluate = () => {
      setScrolled(window.scrollY > 12)
      const hero = document.querySelector('[data-hero-dark]') as HTMLElement | null
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setOverHero(rect.top <= 0 && rect.bottom > 72)
      } else {
        setOverHero(false)
      }
    }
    evaluate()
    window.addEventListener('scroll', evaluate, { passive: true })
    window.addEventListener('resize', evaluate)
    return () => {
      window.removeEventListener('scroll', evaluate)
      window.removeEventListener('resize', evaluate)
    }
  }, [pathname])

  const onDark = overHero && !scrolled

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false)
      setExpandedDiscipline(null)
    }, 120)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setServicesOpen(false)
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Logo onDark={onDark} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
            const linkColor = active
              ? 'text-brand'
              : onDark
                ? 'text-ink-foreground/80 hover:text-ink-foreground'
                : 'text-foreground/80 hover:text-foreground'

            if (link.label === 'Services') {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={link.href}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onFocus={openServices}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active || servicesOpen ? 'text-brand' : linkColor,
                    )}
                  >
                    {link.label}
                  </Link>

                  {/* Desktop Services Dropdown */}
                  <div
                    className={cn(
                      'absolute left-0 top-[calc(100%+4px)] z-30 hidden lg:block',
                      servicesOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    )}
                  >
                    <div
                      className={cn(
                        'relative w-64 rounded-xl border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur-xl transition-all duration-200',
                        servicesOpen ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                      )}
                    >
                      {disciplines.map((d) => {
                        const serviceNames = (d.services || []).filter(Boolean)
                        const hasSubservices = serviceNames.length > 0

                        return (
                          <div key={d.id} className="relative">
                            <Link
                              href={`/services/${d.primarySlug}`}
                              onMouseEnter={(event) => {
                                if (hasSubservices) {
                                  setExpandedDiscipline(d.id)
                                  setSubmenuSide(
                                    event.currentTarget.getBoundingClientRect().right + 304 < window.innerWidth
                                      ? 'right'
                                      : 'left'
                                  )
                                } else {
                                  setExpandedDiscipline(null)
                                }
                              }}
                              className={cn(
                                'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted',
                                expandedDiscipline === d.id && 'bg-muted text-brand'
                              )}
                            >
                              <span>{d.title}</span>
                              {hasSubservices && (
                                <ChevronRight className="size-3.5 text-muted-foreground" />
                              )}
                            </Link>

                            {/* Flyout Submenu */}
                            {hasSubservices && expandedDiscipline === d.id ? (
                              <div
                                onMouseEnter={openServices}
                                className={cn(
                                  'absolute top-0 z-10 w-72 rounded-xl border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur-xl',
                                  submenuSide === 'right' ? 'left-full ml-2' : 'right-full mr-2'
                                )}
                              >
                                {serviceNames.map((name) => {
                                  const targetHref = SERVICE_ROUTES[name] || `/services/${d.primarySlug}`

                                  return (
                                    <Link
                                      key={name}
                                      href={targetHref}
                                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-brand"
                                    >
                                      {name}
                                    </Link>
                                  )
                                })}
                              </div>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  linkColor,
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              'hidden h-10 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors sm:inline-flex',
              onDark
                ? 'bg-ink-foreground text-ink hover:bg-brand hover:text-primary-foreground'
                : 'bg-foreground text-background hover:bg-brand hover:text-primary-foreground',
            )}
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full border lg:hidden transition-colors',
              onDark ? 'border-ink-border text-ink-foreground' : 'border-border text-foreground',
            )}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </header>
  )
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean
  onClose: () => void
  pathname: string
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Reset internal accordion states whenever the menu closes
  useEffect(() => {
    if (!open) {
      setServicesExpanded(false)
      setExpandedCategory(null)
    }
  }, [open])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden transition-all duration-300',
        open ? 'visible pointer-events-auto' : 'invisible pointer-events-none',
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-sm h-dvh flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li key={link.href} className="py-1">
                    <div className="flex items-center justify-between min-h-[44px]">
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="py-2 text-lg font-medium text-foreground hover:text-brand"
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        aria-label={servicesExpanded ? 'Collapse services' : 'Expand services'}
                        aria-expanded={servicesExpanded}
                        onClick={() => setServicesExpanded((v) => !v)}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                      >
                        <Plus
                          className={cn(
                            'size-4 transition-transform duration-200',
                            servicesExpanded && 'rotate-45',
                          )}
                        />
                      </button>
                    </div>

                    {servicesExpanded && (
                      <ul className="mb-2 mt-2 flex flex-col gap-1 border-l border-border pl-4">
                        {disciplines.map((d) => {
                          const serviceNames = (d.services || []).filter(Boolean)
                          const hasSubservices = serviceNames.length > 0
                          const isCategoryExpanded = expandedCategory === d.id

                          return (
                            <li key={d.id}>
                              <div className="flex items-center justify-between gap-3 min-h-[40px]">
                                <Link
                                  href={`/services/${d.primarySlug}`}
                                  onClick={onClose}
                                  className="block py-2 text-sm font-medium text-foreground hover:text-brand"
                                >
                                  {d.title}
                                </Link>
                                {hasSubservices && (
                                  <button
                                    type="button"
                                    aria-label={`${isCategoryExpanded ? 'Collapse' : 'Expand'} ${d.title}`}
                                    aria-expanded={isCategoryExpanded}
                                    onClick={() =>
                                      setExpandedCategory(isCategoryExpanded ? null : d.id)
                                    }
                                    className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                                  >
                                    <ChevronRight
                                      className={cn(
                                        'size-4 transition-transform duration-200',
                                        isCategoryExpanded && 'rotate-90',
                                      )}
                                    />
                                  </button>
                                )}
                              </div>

                              {hasSubservices && isCategoryExpanded && (
                                <ul className="mb-2 ml-2 flex flex-col gap-1 border-l border-border pl-3">
                                  {serviceNames.map((name) => {
                                    const targetHref = SERVICE_ROUTES[name] || `/services/${d.primarySlug}`
                                    return (
                                      <li key={name}>
                                        <Link
                                          href={targetHref}
                                          onClick={onClose}
                                          className="block py-1.5 text-xs text-muted-foreground transition-colors hover:text-brand"
                                        >
                                          {name}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              }

              const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'block py-3 text-lg font-medium transition-colors',
                      active ? 'text-brand' : 'text-foreground hover:text-brand',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-border p-5">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-medium text-primary-foreground transition-colors hover:bg-brand/90"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}