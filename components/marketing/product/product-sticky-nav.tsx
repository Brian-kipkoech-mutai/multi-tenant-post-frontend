'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'sales', label: 'Sales & Payments' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'compliance', label: 'Tax & Compliance' },
  { id: 'owner-app', label: 'Owner App' },
  { id: 'multi-shop', label: 'Multi-Shop' },
  { id: 'integrations', label: 'Integrations' },
] as const

export function ProductStickyNav() {
  const [active, setActive] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    const heroEl = document.getElementById('product-hero')
    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!(entry?.isIntersecting ?? true)),
      { threshold: 0.05 },
    )
    if (heroEl) heroObserver.observe(heroEl)

    return () => {
      sectionObserver.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return (
    <motion.nav
      aria-label="Product sections"
      className="fixed left-0 right-0 top-[64px] z-40 border-b border-white/[0.07] bg-[#080814]/90 backdrop-blur-xl"
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -6,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2.5 md:px-6">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
              active === id
                ? 'border border-indigo-600/30 bg-indigo-600/15 text-indigo-400'
                : 'text-white/45 hover:text-white/75'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
