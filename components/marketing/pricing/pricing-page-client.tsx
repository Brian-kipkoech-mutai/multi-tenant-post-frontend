'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Check,
  Zap,
  Building2,
  Crown,
  ArrowRight,
  ShieldCheck,
  Banknote,
  Timer,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/animations'

type BillingPeriod = 'monthly' | 'annual'

interface PlanFeature {
  text: string
  note?: string
}

interface Plan {
  id: 'starter' | 'growth' | 'enterprise'
  name: string
  tagline: string
  Icon: React.ElementType
  monthlyPrice: number | null
  annualMonthlyPrice: number | null
  annualTotal: number | null
  highlight: boolean
  badge: string | null
  ctaLabel: string
  ctaVariant: 'brand' | 'ghost_white'
  ctaHref: string
  accent: 'emerald' | 'indigo' | 'violet'
  features: PlanFeature[]
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'One shop. One step forward.',
    Icon: Zap,
    monthlyPrice: 2500,
    annualMonthlyPrice: 2000,
    annualTotal: 24000,
    highlight: false,
    badge: null,
    ctaLabel: 'Start free trial',
    ctaVariant: 'ghost_white',
    ctaHref: ROUTES.register,
    accent: 'emerald',
    features: [
      { text: '1 shop location' },
      { text: 'Up to 3 users' },
      { text: 'M-Pesa STK Push', note: 'Safaricom fees at cost, zero markup' },
      { text: 'Cash sales' },
      { text: 'KRA eTIMS fiscal receipts' },
      { text: '500-item product catalog' },
      { text: 'Stock tracking & movements' },
      { text: 'Daily & weekly reports' },
      { text: '30-day transaction history' },
      { text: 'Email support (72h)' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Multi-shop visibility. One dashboard.',
    Icon: Building2,
    monthlyPrice: 7500,
    annualMonthlyPrice: 6000,
    annualTotal: 72000,
    highlight: true,
    badge: 'Most Popular',
    ctaLabel: 'Start free trial',
    ctaVariant: 'brand',
    ctaHref: ROUTES.register,
    accent: 'indigo',
    features: [
      { text: 'Up to 5 shop locations' },
      { text: 'Up to 15 users' },
      { text: 'M-Pesa STK + Paybill + Buy Goods', note: 'Safaricom fees at cost, zero markup' },
      { text: 'Unlimited product catalog' },
      { text: 'WAC inventory engine' },
      { text: 'Low-stock alerts & reorder reminders' },
      { text: 'Real-time owner mobile dashboard' },
      { text: 'Cross-shop analytics' },
      { text: 'Firebase push notifications' },
      { text: 'Bulk CSV product import' },
      { text: 'Custom receipt branding' },
      { text: '12-month transaction history' },
      { text: 'Priority support (24h)' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Retail chains. Franchise groups. Any scale.',
    Icon: Crown,
    monthlyPrice: null,
    annualMonthlyPrice: null,
    annualTotal: null,
    highlight: false,
    badge: null,
    ctaLabel: 'Talk to sales',
    ctaVariant: 'ghost_white',
    ctaHref: '#contact',
    accent: 'violet',
    features: [
      { text: 'Unlimited shop locations' },
      { text: 'Unlimited users' },
      { text: 'Everything in Growth' },
      { text: 'Uganda TRA compliance', note: 'Q2 2026' },
      { text: 'Tanzania ZRA compliance', note: 'Roadmap' },
      { text: 'REST API + webhooks' },
      { text: 'Custom integrations' },
      { text: 'Dedicated account manager' },
      { text: '99.9% uptime SLA' },
      { text: 'White-label option available' },
      { text: 'On-site training & onboarding' },
      { text: 'Same-day support (phone & WhatsApp)' },
    ],
  },
]

const TRUST_BADGES = [
  { Icon: Timer, text: '30-day free trial' },
  { Icon: ShieldCheck, text: 'No credit card required' },
  { Icon: Banknote, text: 'Cancel anytime' },
] as const

const ACCENT_STYLES = {
  emerald: {
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    check: 'text-emerald-400',
  },
  indigo: {
    iconBg: 'bg-indigo-600/20',
    iconText: 'text-indigo-400',
    check: 'text-indigo-400',
  },
  violet: {
    iconBg: 'bg-violet-600/10',
    iconText: 'text-violet-400',
    check: 'text-violet-400',
  },
}

export function PricingPageClient() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')
  const reduced = useReducedMotion()
  const isAnnual = billing === 'annual'

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-36 text-center md:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-[0.22]"
          style={{
            background: 'radial-gradient(circle, #4f46e5 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 top-1/2 h-[350px] w-[350px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduced ? {} : stagger}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <motion.div variants={reduced ? {} : fadeUp}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Simple, Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            variants={reduced ? {} : fadeUp}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ lineHeight: 1.08 }}
          >
            Pricing that respects
            <br />
            <span className="text-gradient-brand">your margin.</span>
          </motion.h1>

          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55"
          >
            Flat monthly plans. M-Pesa transaction fees passed through at Safaricom's rate —{' '}
            <span className="font-medium text-white/80">
              we never take a cut of your sales.
            </span>
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {TRUST_BADGES.map(({ Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-sm text-white/40">
                <Icon className="h-3.5 w-3.5 text-white/25" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Billing toggle */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            className="mt-10 flex justify-center"
          >
            <div className="relative flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] p-1 shadow-inner">
              <motion.div
                className="absolute inset-y-1 rounded-full bg-indigo-600"
                initial={false}
                animate={{
                  left: isAnnual ? '50%' : '4px',
                  width: isAnnual ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                }}
                transition={{ type: 'spring', stiffness: 420, damping: 38 }}
              />
              <button
                onClick={() => setBilling('monthly')}
                className={`relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  !isAnnual ? 'text-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`relative z-10 flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  isAnnual ? 'text-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                Annual
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold transition-colors duration-200 ${
                    isAnnual
                      ? 'bg-emerald-500/25 text-emerald-300'
                      : 'bg-white/10 text-white/30'
                  }`}
                >
                  −20%
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Pricing cards ─── */}
      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-6 lg:grid-cols-3"
          >
            {PLANS.map((plan) => {
              const { Icon, accent } = plan
              const accentStyle = ACCENT_STYLES[accent]
              const displayPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice

              return (
                <motion.article
                  key={plan.id}
                  variants={reduced ? {} : fadeUp}
                  className={`relative flex flex-col rounded-2xl p-7 transition-colors duration-300 ${
                    plan.highlight
                      ? 'border border-indigo-600/50 bg-gradient-to-b from-indigo-600/12 via-indigo-600/5 to-transparent shadow-[0_0_72px_rgba(79,70,229,0.18)]'
                      : 'border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14] hover:bg-white/[0.05]'
                  }`}
                >
                  {/* "Most Popular" badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/40">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon + plan name */}
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentStyle.iconBg} ${accentStyle.iconText}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">{plan.name}</h2>
                      <p className="text-xs text-white/35 leading-tight">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 min-h-[72px]">
                    {displayPrice !== null ? (
                      <>
                        <div className="flex items-end gap-1">
                          <span className="mb-1.5 text-sm font-medium text-white/40">KES</span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`${plan.id}-${billing}`}
                              initial={reduced ? {} : { opacity: 0, y: -8 }}
                              animate={reduced ? {} : { opacity: 1, y: 0 }}
                              exit={reduced ? {} : { opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="text-4xl font-extrabold leading-none text-white"
                            >
                              {displayPrice.toLocaleString()}
                            </motion.span>
                          </AnimatePresence>
                          <span className="mb-1 text-sm text-white/35">/mo</span>
                        </div>
                        <AnimatePresence mode="wait">
                          {isAnnual && plan.annualTotal ? (
                            <motion.p
                              key="annual-label"
                              initial={reduced ? {} : { opacity: 0 }}
                              animate={reduced ? {} : { opacity: 1 }}
                              exit={reduced ? {} : { opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1.5 text-xs text-white/30"
                            >
                              Billed KES {plan.annualTotal.toLocaleString()}/yr · Save KES{' '}
                              {((plan.monthlyPrice! - plan.annualMonthlyPrice!) * 12).toLocaleString()}
                            </motion.p>
                          ) : (
                            <motion.p
                              key="annual-hint"
                              initial={reduced ? {} : { opacity: 0 }}
                              animate={reduced ? {} : { opacity: 1 }}
                              exit={reduced ? {} : { opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1.5 text-xs text-white/25"
                            >
                              or KES {plan.annualMonthlyPrice?.toLocaleString()}/mo billed annually
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-extrabold leading-none text-white">
                          Custom
                        </span>
                        <p className="mt-1.5 text-xs text-white/35">
                          Tailored to your shop count and needs
                        </p>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mb-7">
                    <motion.div whileHover={reduced ? {} : { scale: 1.02 }} whileTap={reduced ? {} : { scale: 0.98 }}>
                      <Button variant={plan.ctaVariant} className="w-full gap-2" asChild>
                        <Link href={plan.ctaHref}>
                          {plan.ctaLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                    {plan.id !== 'enterprise' && (
                      <p className="mt-2.5 text-center text-xs text-white/25">
                        30-day free trial · No credit card
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mb-5 h-px w-full bg-white/[0.07]" />

                  {/* Feature list */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map(({ text, note }) => (
                      <li key={text} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${accentStyle.check}`}
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-snug text-white/60">
                          {text}
                          {note && (
                            <span className="ml-1.5 inline-flex items-center gap-1 text-xs text-white/30">
                              <Info className="h-3 w-3" aria-hidden="true" />
                              {note}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </motion.div>

          {/* M-Pesa fee transparency callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reduced ? {} : fadeUp}
            className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5"
          >
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4 sm:text-left">
              <Banknote className="h-5 w-5 shrink-0 text-emerald-400" />
              <p className="text-sm text-white/55">
                <span className="font-semibold text-emerald-400">
                  M-Pesa transaction fees are charged by Safaricom
                </span>{' '}
                and passed through to you at cost. Dextra takes{' '}
                <strong className="text-white">zero percentage</strong> of your sales. Your
                customer's payment goes directly from their M-Pesa to your Paybill or Till — not
                through us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
