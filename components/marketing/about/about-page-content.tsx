'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Building2, Globe2, ShieldCheck, Store, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, slideLeft, slideRight, stagger } from '@/lib/animations'
import { ROUTES } from '@/lib/constants'

const VALUES = [
  {
    title: 'Built for the daily grind',
    copy:
      'From opening stock to closing cash, every workflow is designed to feel calm, fast, and clear on a busy shop floor.',
    icon: Store,
  },
  {
    title: 'Payments that feel native',
    copy:
      'M-Pesa, cash, and digital receipts all live in one flow so the team can move without friction and the owner can trust the numbers.',
    icon: BadgeCheck,
  },
  {
    title: 'Compliance without drama',
    copy:
      'KRA eTIMS, real-time stock movement, and clean reporting are built in rather than bolted on at month-end.',
    icon: ShieldCheck,
  },
] as const

const IMPACT = [
  'One view for sales, inventory, and payments across every shop.',
  'A product language that feels local, not imported.',
  'Support from people who understand retail in East Africa.',
] as const

export function AboutPageContent() {
  const reduced = useReducedMotion()

  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-36">
          <div
            className="pointer-events-none absolute left-0 top-10 h-[320px] w-[320px] rounded-full opacity-20 md:h-[480px] md:w-[480px]"
            style={{
              background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full opacity-15 md:h-[400px] md:w-[400px]"
            style={{
              background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
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
                className="mb-3 text-3xl font-semibold tracking-[0.2em] text-indigo-300 sm:text-4xl"
              >
                About Dextra
              </motion.h1>
              <motion.h2
                variants={reduced ? {} : fadeUp}
                className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Built for the realities of everyday retail.
              </motion.h2>
              <motion.p
                variants={reduced ? {} : fadeUp}
                className="mb-8 text-lg leading-relaxed text-white/60"
              >
                We created Dextra to give East African shops something better than clunky software and disconnected tools. A calm operating system for selling, stock, payments, and growth.
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
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reduced ? {} : stagger}
              className="relative"
            >
              <motion.div variants={reduced ? {} : slideLeft} className="glass glow-indigo rounded-[28px] p-6 md:p-7">
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

        <section className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.05fr_0.95fr] md:p-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reduced ? {} : slideRight}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-400">Why we built it</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Retail software should feel like a tool, not a tax.
              </h2>
              <p className="text-lg leading-relaxed text-white/60">
                We saw shops getting buried under dashboards that were either too generic or too complicated. Dextra was born to make daily operations feel simple, trustworthy, and deeply practical.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reduced ? {} : slideLeft} className="space-y-3">
              {IMPACT.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#0e1029] p-4 text-sm leading-relaxed text-white/65">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reduced ? {} : fadeUp} className="mb-10 max-w-2xl">
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
      </main>
    </div>
  )
}
