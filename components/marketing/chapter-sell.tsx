'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle, Smartphone, Receipt } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const FEATURES = [
  'M-Pesa STK push with 3-minute auto-timeout',
  'Paybill & Buy Goods manual confirmation',
  'Cash sales complete in under 1 second',
  'Auto-retry with corrected phone number',
] as const

export function ChapterSell() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-10 md:h-[500px] md:w-[500px]"
        style={{
          background: 'radial-gradient(circle, #00a550 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
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
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            01 — Sell
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            Your next sale is
            <br />
            <span className="text-gradient-brand">three taps away.</span>
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-lg leading-relaxed text-white/50"
          >
            Cash or M-Pesa — the customer chooses, Dextra handles. STK push goes out automatically,
            stock deducts on confirmation, the receipt is printed. You never chase a payment again.
          </motion.p>
          <motion.ul variants={reduced ? {} : stagger} className="space-y-3">
            {FEATURES.map((f) => (
              <motion.li
                key={f}
                variants={reduced ? {} : fadeUp}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual — sale flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="space-y-3"
        >
          {/* Pending */}
          <motion.div
            variants={reduced ? {} : slideLeft}
            whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(79,70,229,0.2)' }}
                >
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Sale created</p>
                  <p className="text-xs text-white/40">2 items · KES 2,400</p>
                </div>
              </div>
              <span className="badge-pending rounded-full px-2.5 py-0.5 text-xs font-semibold">PENDING</span>
            </div>
            <div className="flex gap-2">
              <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/50">Maize Flour 2kg × 1</span>
              <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/50">Cooking Oil × 2</span>
            </div>
          </motion.div>

          {/* STK Push */}
          <motion.div
            variants={reduced ? {} : slideLeft}
            whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-5"
            style={{ border: '1px solid rgba(0,165,80,0.2)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(0,165,80,0.15)' }}>
                  <Smartphone className="h-5 w-5" style={{ color: '#00a550' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">M-Pesa STK push sent</p>
                  <p className="text-xs text-white/40">+254 712 *** 678 · Awaiting PIN</p>
                </div>
              </div>
              <span className="badge-awaiting rounded-full px-2.5 py-0.5 text-xs font-semibold">AWAITING</span>
            </div>
          </motion.div>

          {/* Completed */}
          <motion.div
            variants={reduced ? {} : slideLeft}
            whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl p-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(16,185,129,0.2)' }}>
                  <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Payment confirmed</p>
                  <p className="text-xs text-white/40">Ref: QGH3K7PLMN · Stock deducted</p>
                </div>
              </div>
              <span className="badge-completed rounded-full px-2.5 py-0.5 text-xs font-semibold">COMPLETED</span>
            </div>
          </motion.div>

          {/* Receipt + eTIMS */}
          <motion.div
            variants={reduced ? {} : slideLeft}
            whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: 'rgba(79,70,229,0.2)' }}>
                <Receipt className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Receipt #1,247 issued</p>
                <p className="text-xs text-white/40">KRA CUIN: KRA20240001247 · Queued for eTIMS</p>
              </div>
              <span className="badge-kra rounded-full px-2.5 py-0.5 text-xs font-semibold">KRA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
