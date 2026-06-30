'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Logo } from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { fadeUp, stagger } from '@/lib/animations'

const LINK_HREFS: Record<string, string> = {
  'Contact': '/contact',
}

const FOOTER_COLS = [
  {
    title: 'Product',
    links: ['Dashboard', 'Inventory', 'M-Pesa Payments', 'KRA eTIMS', 'Owner App'],
  },
  {
    title: 'Company',
    links: ['About Dextra', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'],
  },
] as const

const REGIONS = ['KE', 'UG', 'TZ'] as const

export function MarketingFooter() {
  const reduced = useReducedMotion()

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={reduced ? {} : stagger}
        className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16"
      >
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-12">
          {/* Brand */}
          <motion.div variants={reduced ? {} : fadeUp} className="col-span-2">
            <Logo size="sm" className="mb-4" />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/35">
              The modern POS platform built for East African retail. M-Pesa native. KRA compliant.
              Owner-first.
            </p>
            <div className="flex gap-2">
              {REGIONS.map((r) => (
                <span
                  key={r}
                  className="rounded-lg px-2.5 py-1 text-xs font-semibold text-white/40"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  {r}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <motion.div key={col.title} variants={reduced ? {} : fadeUp}>
              <p className="mb-4 text-sm font-semibold text-white">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={LINK_HREFS[link] ?? '#'}
                      className="text-sm text-white/35 transition-colors duration-200 hover:text-white/80"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-10 bg-white/[0.06]" />

        <motion.div
          variants={reduced ? {} : fadeUp}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-sm text-white/25">© 2026 Dextra Technologies. All rights reserved.</p>
          <p className="text-sm text-white/20">Built for East Africa · Nairobi, Kenya 🇰🇪</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
