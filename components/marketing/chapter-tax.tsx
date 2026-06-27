'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Shield, Zap } from 'lucide-react'
import { fadeUp, slideLeft, stagger } from '@/lib/animations'

const FEATURES = [
  'KRA eTIMS VSCU integration, fully automated',
  'CUIN number on every receipt for customer verification',
  '3 automatic retries on KRA API failure',
  'Credentials encrypted at rest — AES-256-GCM',
] as const

export function ChapterTax() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{ background: 'linear-gradient(45deg, #ef4444 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-red-400"
          >
            03 — Tax Compliance
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            Every sale files
            <br />
            <span className="text-red-400">itself with KRA.</span>
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-lg leading-relaxed text-white/50"
          >
            For VAT-registered shops in Kenya, every completed sale is automatically submitted to
            KRA via eTIMS OSCU — in the background, while your cashier is already serving the
            next customer.
          </motion.p>
          <motion.ul variants={reduced ? {} : stagger} className="space-y-3">
            {FEATURES.map((f) => (
              <motion.li
                key={f}
                variants={reduced ? {} : fadeUp}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual — receipt mockup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="flex justify-center"
        >
          <motion.div
            variants={reduced ? {} : slideLeft}
            whileHover={reduced ? {} : { y: -6, transition: { duration: 0.2 } }}
            className="glass w-full max-w-sm rounded-2xl p-6"
            style={{ border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Dextra POS</p>
                <p className="text-xs text-white/40">Receipt #001247</p>
              </div>
              <span className="badge-kra rounded-full px-3 py-1 text-xs font-bold">VAT INVOICE</span>
            </div>

            <div className="mb-4 space-y-2 text-xs text-white/60">
              <div className="flex justify-between">
                <span>Maize Flour 2kg</span>
                <span>KES 220.00</span>
              </div>
              <div className="flex justify-between">
                <span>Cooking Oil 1L × 2</span>
                <span>KES 420.00</span>
              </div>
              <div className="my-2 border-t border-white/[0.08]" />
              <div className="flex justify-between text-white">
                <span className="font-semibold">Total</span>
                <span className="font-bold">KES 640.00</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>VAT (16%)</span>
                <span>KES 88.28</span>
              </div>
            </div>

            <div
              className="rounded-xl p-3"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <div className="mb-1 flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
                <p className="text-xs font-semibold text-red-400">KRA Verified</p>
              </div>
              <p className="font-mono text-xs text-white/50">CUIN: KRA20240001247</p>
              <p className="text-xs text-white/30">Filed automatically · 0.4s after sale</p>
            </div>

            <div
              className="mt-4 flex items-center gap-2 rounded-xl p-3"
              style={{ background: 'rgba(16,185,129,0.1)' }}
            >
              <Zap className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <p className="text-xs text-emerald-400">Submitted to eTIMS OSCU · No action required</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
