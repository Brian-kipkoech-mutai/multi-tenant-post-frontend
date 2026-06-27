'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, RefreshCw, Lock, Globe, CheckCircle } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger, scaleIn } from '@/lib/animations'

const FISCAL_STATES = [
  {
    state: 'PENDING',
    label: 'Receipt issued instantly',
    detail: 'Cashier is never blocked — receipt prints immediately.',
    color: 'border-white/20 text-white/60 bg-white/[0.04]',
    dot: 'bg-white/30',
  },
  {
    state: 'QUEUED',
    label: 'KRA job queued in background',
    detail: 'BullMQ picks it up without blocking the POS.',
    color: 'border-indigo-600/30 text-indigo-400 bg-indigo-600/10',
    dot: 'bg-indigo-400',
  },
  {
    state: 'SUBMITTED',
    label: 'Submitted to KRA eTIMS OSCU',
    detail: 'Invoice posted to Kenya Revenue Authority API.',
    color: 'border-violet-600/30 text-violet-400 bg-violet-600/10',
    dot: 'bg-violet-400',
  },
  {
    state: 'CUIN RECEIVED',
    label: 'CUIN added to receipt',
    detail: 'Control Unit Invoice Number & QR code attached.',
    color: 'border-emerald-600/30 text-emerald-400 bg-emerald-600/10',
    dot: 'bg-emerald-400',
  },
] as const

const COMPLIANCE_POINTS = [
  {
    icon: RefreshCw,
    title: '3 auto-retries with exponential backoff.',
    body: 'If the KRA API is slow or returns an error, we retry automatically — 3 attempts. Failed receipts surface clearly so you know when manual follow-up is needed.',
    accent: 'text-indigo-400',
  },
  {
    icon: Lock,
    title: 'Credentials encrypted with AES-256-GCM.',
    body: 'Your KRA PIN, branch ID, device serial, username, and password are encrypted at rest. They never appear in API responses — only masked summaries are returned.',
    accent: 'text-violet-400',
  },
  {
    icon: ShieldCheck,
    title: 'Sandbox before production. Always.',
    body: 'Each shop migrates from KRA sandbox to production independently. Test your integration before any real invoice is submitted.',
    accent: 'text-emerald-400',
  },
  {
    icon: Globe,
    title: 'Non-VAT shops are fully supported.',
    body: 'eTIMS filing is opt-in per shop. If your shop is not VAT-registered, it runs normally with EXEMPT fiscal status — no configuration needed.',
    accent: 'text-amber-400',
  },
] as const

export function ProductComplianceSection() {
  const reduced = useReducedMotion()

  return (
    <section id="compliance" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #ef4444 0%, transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-red-400">
            03 — Tax & Compliance
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            KRA eTIMS.
            <br />
            Automatic. Not an afterthought.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Every VAT sale submits to Kenya Revenue Authority in the background.
            Your cashier never waits. Your receipts are always compliant.
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Fiscal flow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="order-2 lg:order-1"
          >
            {/* Receipt card mockup */}
            <motion.div variants={reduced ? {} : scaleIn} className="glass rounded-2xl overflow-hidden mb-8">
              <div className="border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-sm font-semibold text-white">REC-000391</p>
                    <p className="text-xs text-white/35 mt-0.5">Westlands Shop · 27 Jun 2026 14:32</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                    COMPLETED
                  </span>
                </div>
              </div>
              <div className="px-5 py-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Subtotal</span>
                  <span className="font-mono text-white">KES 3,448.28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">VAT 16%</span>
                  <span className="font-mono text-white">KES 551.72</span>
                </div>
                <div className="flex justify-between border-t border-white/[0.07] pt-2 text-sm font-semibold">
                  <span className="text-white">Total</span>
                  <span className="font-mono text-white">KES 4,000.00</span>
                </div>
              </div>
              <div className="border-t border-white/[0.07] bg-emerald-500/5 px-5 py-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-400">KRA eTIMS Filed</p>
                    <p className="font-mono text-xs text-white/50 mt-1">CUIN: KRA-ETM-2026-8841729</p>
                    <p className="text-xs text-white/35 mt-0.5">Verify at itax.kra.go.ke · Scan QR code on receipt</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fiscal states flow */}
            <div className="space-y-3">
              {FISCAL_STATES.map((step, i) => (
                <motion.div
                  key={step.state}
                  variants={reduced ? {} : fadeUp}
                  className={`flex items-center gap-4 rounded-xl border p-4 ${step.color}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${step.dot}`} />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold tracking-widest uppercase">{step.state}</span>
                      <p className="text-xs text-white/40 mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                  {i < FISCAL_STATES.length - 1 && (
                    <span className="ml-auto text-xs text-white/20 flex-shrink-0">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Key points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="order-1 space-y-6 lg:order-2"
          >
            {COMPLIANCE_POINTS.map(({ icon: Icon, title, body, accent }) => (
              <motion.div key={title} variants={reduced ? {} : slideLeft} className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.04] p-2">
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-white/50">{body}</p>
                </div>
              </motion.div>
            ))}

            {/* Country roadmap */}
            <motion.div
              variants={reduced ? {} : fadeUp}
              className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
            >
              <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-white/35">Fiscal compliance roadmap</p>
              <div className="space-y-2">
                {[
                  { country: '🇰🇪 Kenya', system: 'KRA eTIMS OSCU', status: 'Live', color: 'text-emerald-400 bg-emerald-500/10' },
                  { country: '🇺🇬 Uganda', system: 'URA eTax', status: 'Coming soon', color: 'text-amber-400 bg-amber-500/10' },
                  { country: '🇹🇿 Tanzania', system: 'TRA e-Receipt', status: 'Planned', color: 'text-white/40 bg-white/[0.05]' },
                ].map((row) => (
                  <div key={row.country} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{row.country}</span>
                      <span className="text-xs text-white/35">· {row.system}</span>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
