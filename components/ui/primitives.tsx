import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12', className)}>{children}</div>
  )
}

export function Eyebrow({
  children,
  className,
  onDark,
}: {
  children: React.ReactNode
  className?: string
  onDark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em]',
        onDark ? 'text-ink-muted' : 'text-muted-foreground',
        className,
      )}
    >
      <span className={cn('h-px w-6', onDark ? 'bg-brand-soft' : 'bg-brand')} aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  onDark?: boolean
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'display text-balance text-3xl sm:text-4xl lg:text-5xl',
          onDark ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            onDark ? 'text-ink-muted' : 'text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

/** Text link with an animated arrow — the site's signature CTA affordance. */
export function ArrowLink({
  href,
  children,
  className,
  onDark,
  external,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onDark?: boolean
  external?: boolean
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group/arrow inline-flex items-center gap-1.5 text-sm font-medium transition-colors',
        onDark ? 'text-ink-foreground hover:text-brand-soft' : 'text-foreground hover:text-brand',
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
    </Link>
  )
}

/** Solid pill CTA (cobalt). */
export function CtaButton({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'ghost-dark'
  className?: string
  external?: boolean
}) {
  const base =
    'group inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-brand text-primary-foreground hover:bg-brand/90 focus-visible:ring-offset-background',
    ghost:
      'border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-muted focus-visible:ring-offset-background',
    'ghost-dark':
      'border border-ink-border bg-transparent text-ink-foreground hover:bg-white/5 focus-visible:ring-offset-ink',
  }
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, variants[variant], className)}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  )
}
