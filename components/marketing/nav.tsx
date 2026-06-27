'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

const NAV_LINKS = ['Product', 'Pricing', 'Integrations', 'Docs'] as const

export function MarketingNav() {
  return (
    <motion.header
      className="nav-blur fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={ROUTES.home} aria-label="Dextra home">
          <Logo size="md" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.login}
            className="hidden text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white md:block"
          >
            Sign in
          </Link>
          <Button variant="brand" size="sm" asChild>
            <Link href={ROUTES.register}>Get started free</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
