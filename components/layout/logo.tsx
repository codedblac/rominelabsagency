// components/logo.tsx
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  onDark?: boolean
  className?: string
}

export function Logo({ onDark = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'relative block h-10 w-40 shrink-0 transition-transform active:scale-95 sm:h-11 sm:w-44',
        className
      )}
      aria-label="Home"
    >
      {/* Light Logo (Visible before scroll over dark hero) */}
      <Image
        src="/logo-lights.png"
        alt="Logo"
        fill
        priority
        className={cn(
          'object-contain object-left transition-all duration-300 scale-105',
          onDark ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Dark Logo (Visible after scroll on light navbar background) */}
      <Image
        src="/logo-darks.png"
        alt="Logo"
        fill
        priority
        className={cn(
          'object-contain object-left transition-all duration-300',
          onDark ? 'opacity-0' : 'opacity-100'
        )}
      />
    </Link>
  )
}