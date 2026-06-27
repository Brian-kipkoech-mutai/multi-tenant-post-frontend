'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

const BRANDS = [
  'Nairobi Junction',
  'Westlands Mart',
  'Kisumu Trade',
  'Coast Retail',
  'Kampala Goods',
  'Dar Express',
] as const

export function TrustStrip() {
  const reduced = useReducedMotion()

  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <motion.section
        className="px-4 py-12 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={reduced ? {} : stagger}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-xs font-medium uppercase tracking-widest text-white/30"
          >
            Trusted by shops across East Africa
          </motion.p>
          <motion.div
            variants={reduced ? {} : stagger}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {BRANDS.map((name) => (
              <motion.span
                key={name}
                variants={reduced ? {} : fadeUp}
                className="text-sm font-semibold text-white/20"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div className="section-divider" aria-hidden="true" />
    </>
  )
}
