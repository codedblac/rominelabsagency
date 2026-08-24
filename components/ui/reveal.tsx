'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'span'
}

/**
 * Lightweight scroll-reveal via IntersectionObserver.
 * Styling + reduced-motion handling live in globals.css ([data-reveal]).
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as React.ElementType
  return (
    <Tag
      ref={ref as never}
      data-reveal={shown ? 'in' : ''}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  )
}
