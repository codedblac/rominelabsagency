import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Text-based ROMINE LABS wordmark with a subtle RL monogram.
 * Designed to be easily swapped for a final custom logo later.
 */
export function Logo({
  onDark,
  className,
  href = '/',
}: {
  onDark?: boolean
  className?: string
  href?: string
}) {
  return (
    <Link
      href={href}
      aria-label="Romine Labs — home"
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span
        aria-hidden
        className={cn(
          'grid size-9 place-items-center rounded-md border font-mono text-sm font-semibold tracking-tight transition-colors',
          onDark
            ? 'border-ink-border text-ink-foreground group-hover:border-brand-soft'
            : 'border-border text-foreground group-hover:border-brand',
        )}
      >
        RL
      </span>
      <span
        className={cn(
          'font-mono text-sm font-semibold uppercase tracking-[0.18em]',
          onDark ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        Romine Labs
      </span>
    </Link>
  )
}
