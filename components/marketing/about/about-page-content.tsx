'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Testimonial } from '@/components/marketing/testimonial'
import { fadeUp, FLOAT, slideLeft, slideRight, stagger } from '@/lib/animations'
import { ROUTES } from '@/lib/constants'

const STATS = [
  { label: 'Countries', value: '3' },
  { label: 'Shops active', value: '1,200+' },
  { label: 'Sales processed daily', value: '28K+' },
  { label: 'KRA filings automated', value: '100%' },
] as const

const VALUES = [
  {
    title: 'Built for the daily grind',
    copy: 'From opening stock to closing cash, every workflow is designed to feel calm, fast, and clear on a busy shop floor.',
    icon: Store,
  },
  {
    title: 'Payments that feel native',
    copy: 'M-Pesa, cash, and digital receipts all live in one flow so the team can move without friction and the owner can trust the numbers.',
    icon: BadgeCheck,
  },
  {
    title: 'Compliance without drama',
    copy: 'KRA eTIMS, real-time stock movement, and clean reporting are built in rather than bolted on at month-end.',
    icon: ShieldCheck,
  },
] as const

const TIMELINE = [
  {
    year: '2023',
    title: 'The idea',
    copy: 'We watched shop owners in Nairobi juggle notebooks, M-Pesa statements, and spreadsheets just to know if they had made a profit that day.',
    icon: Lightbulb,
  },
  {
    year: '2024',
    title: 'First pilot',
    copy: 'Dextra went live in a handful of Nairobi shops, built shoulder-to-shoulder with cashiers and owners — not in a boardroom.',
    icon: Rocket,
  },
  {
    year: '2025',
    title: 'Regional expansion',
    copy: 'M-Pesa native payments, KRA eTIMS compliance, and multi-shop support shipped as owners in Uganda and Tanzania came on board.',
    icon: MapPin,
  },
  {
    year: 'Today',
    title: 'Growing, one shop at a time',
    copy: 'Dextra now runs sales, inventory, and compliance for shops across three countries — one calm dashboard at a time.',
    icon: TrendingUp,
  },
] as const

export function AboutPageContent() {
  const reduced = useReducedMotion()

  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-36">
          <div
            className="animate-blob pointer-events-none absolute left-0 top-10 h-[320px] w-[320px] rounded-full opacity-20 md:h-[480px] md:w-[480px]"
            style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', filter: 'blur(80px)' }}
            aria-hidden="true"
          />
          <div
            className="animate-blob pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full opacity-15 md:h-[400px] md:w-[400px]"
            style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '3s' }}
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={reduced ? {} : stagger} className="max-w-2xl">
              <motion.div
                variants={reduced ? {} : fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                About Dextra
              </motion.div>
              <motion.h1
                variants={reduced ? {} : fadeUp}
                className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Built for the realities
                <br />
                <span className="text-gradient-brand">of everyday retail.</span>
              </motion.h1>
              <motion.p variants={reduced ? {} : fadeUp} className="mb-8 text-lg leading-relaxed text-white/60">
                We created Dextra to give East African shops something better than clunky software
                and disconnected tools — a calm operating system for selling, stock, payments, and
                growth.
              </motion.p>
              <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <Button variant="brand" size="lg" className="gap-2" asChild>
                  <Link href={ROUTES.register}>
                    Start free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost_white" size="lg" asChild>
                  <Link href={ROUTES.contact}>Talk to the team</Link>
                </Button>
              </motion.div>

              <motion.div variants={reduced ? {} : stagger} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map((s) => (
                  <motion.div key={s.label} variants={reduced ? {} : fadeUp} className="glass rounded-2xl px-4 py-3.5 text-center">
                    <div className="text-xl font-bold text-white md:text-2xl">{s.value}</div>
                    <div className="mt-0.5 text-xs text-white/45">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={reduced ? {} : stagger} className="relative">
              <motion.div
                variants={reduced ? {} : slideLeft}
                animate={reduced ? undefined : FLOAT.animate}
                transition={reduced ? undefined : FLOAT.transition}
                className="glass glow-indigo rounded-[28px] p-6 md:p-7"
              >
                <div className="rounded-2xl border border-white/10 bg-[#0f1030]/90 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Nairobi Junction Store</p>
                      <p className="text-xs text-white/40">One platform, every touchpoint</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      Live
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                        <Building2 className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                        Multi-shop overview
                      </div>
                      <p className="text-sm text-white/55">Track revenue, stock, and payments from one calm dashboard.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                        <Globe2 className="h-4 w-4 text-violet-400" aria-hidden="true" />
                        Built for East Africa
                      </div>
                      <p className="text-sm text-white/55">Local-first payments, local operations, and local support.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/15 to-violet-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                        Audit-ready by design
                      </div>
                      <p className="text-sm text-white/55">Every sale, refund, and stock change stays clear and trustworthy.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        {/* Origin story + timeline */}
        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={reduced ? {} : slideRight}
              className="mb-14 max-w-2xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">Why we built it</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Retail software should feel like a tool, not a tax.
              </h2>
              <p className="text-lg leading-relaxed text-white/60">
                We saw shops getting buried under dashboards that were either too generic or too
                complicated. Dextra was born to make daily operations feel simple, trustworthy, and
                deeply practical.
              </p>
            </motion.div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={reduced ? {} : stagger}
              className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {TIMELINE.map((item) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={item.year}
                    variants={reduced ? {} : slideLeft}
                    className="relative rounded-[24px] border border-white/10 bg-[#0e1029] p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-300">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{item.copy}</p>
                  </motion.li>
                )
              })}
            </motion.ol>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={reduced ? {} : fadeUp}
              className="mb-10 max-w-2xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">What matters to us</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A product shaped by real shop owners, not abstract assumptions.
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {VALUES.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.article
                    key={value.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={reduced ? {} : fadeUp}
                    transition={{ delay: index * 0.06 }}
                    whileHover={reduced ? {} : { y: -6, boxShadow: '0 24px 64px rgba(79,70,229,0.2)', transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{value.copy}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <Testimonial />
      </main>
    </div>
  )
}
