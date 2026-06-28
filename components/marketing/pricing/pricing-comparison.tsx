'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, X, Clock } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

type CellValue =
  | { type: 'check' }
  | { type: 'cross' }
  | { type: 'text'; value: string }
  | { type: 'coming'; value: string }

interface ComparisonRow {
  label: string
  starter: CellValue
  growth: CellValue
  enterprise: CellValue
}

interface ComparisonSection {
  title: string
  rows: ComparisonRow[]
}

const check: CellValue = { type: 'check' }
const cross: CellValue = { type: 'cross' }
const t = (value: string): CellValue => ({ type: 'text', value })
const soon = (value: string): CellValue => ({ type: 'coming', value })

const SECTIONS: ComparisonSection[] = [
  {
    title: 'Locations & Team',
    rows: [
      { label: 'Shop locations', starter: t('1'), growth: t('Up to 5'), enterprise: t('Unlimited') },
      { label: 'Users', starter: t('3'), growth: t('15'), enterprise: t('Unlimited') },
      { label: 'Role-based access (Owner / Manager / Cashier)', starter: check, growth: check, enterprise: check },
      { label: 'Per-shop credential isolation', starter: check, growth: check, enterprise: check },
      { label: 'Bulk user management', starter: cross, growth: cross, enterprise: check },
    ],
  },
  {
    title: 'Sales & Payments',
    rows: [
      { label: 'Cash sales', starter: check, growth: check, enterprise: check },
      { label: 'M-Pesa STK Push', starter: check, growth: check, enterprise: check },
      { label: 'M-Pesa Paybill', starter: cross, growth: check, enterprise: check },
      { label: 'M-Pesa Buy Goods (Till)', starter: cross, growth: check, enterprise: check },
      { label: 'M-Pesa fees passed at cost (no markup)', starter: check, growth: check, enterprise: check },
      { label: 'Per-shop M-Pesa identity', starter: cross, growth: check, enterprise: check },
      { label: 'Sale returns & voids', starter: check, growth: check, enterprise: check },
      { label: 'Transaction history', starter: t('30 days'), growth: t('12 months'), enterprise: t('Unlimited') },
    ],
  },
  {
    title: 'Inventory',
    rows: [
      { label: 'Product catalog', starter: t('500 items'), growth: t('Unlimited'), enterprise: t('Unlimited') },
      { label: 'Stock tracking (RESTOCK / SALE / RETURN / DAMAGE)', starter: check, growth: check, enterprise: check },
      { label: 'WAC (Weighted Average Cost) engine', starter: cross, growth: check, enterprise: check },
      { label: 'Low-stock alerts', starter: cross, growth: check, enterprise: check },
      { label: 'Reorder reminders', starter: cross, growth: check, enterprise: check },
      { label: 'Bulk CSV product import', starter: cross, growth: check, enterprise: check },
      { label: 'Cross-shop stock visibility', starter: cross, growth: check, enterprise: check },
    ],
  },
  {
    title: 'Tax & Compliance',
    rows: [
      { label: 'KRA eTIMS fiscal receipts (Kenya)', starter: check, growth: check, enterprise: check },
      { label: 'CUIN on every receipt', starter: check, growth: check, enterprise: check },
      { label: 'KRA offline queue (auto-retry on reconnect)', starter: check, growth: check, enterprise: check },
      { label: 'Uganda TRA compliance', starter: cross, growth: cross, enterprise: soon('Q2 2026') },
      { label: 'Tanzania ZRA compliance', starter: cross, growth: cross, enterprise: soon('Roadmap') },
    ],
  },
  {
    title: 'Analytics & Reports',
    rows: [
      { label: 'Daily & weekly sales reports', starter: check, growth: check, enterprise: check },
      { label: 'Cross-shop analytics', starter: cross, growth: check, enterprise: check },
      { label: 'Real-time owner mobile dashboard', starter: cross, growth: check, enterprise: check },
      { label: 'Firebase push notifications', starter: cross, growth: check, enterprise: check },
      { label: 'Margin & WAC reports', starter: cross, growth: check, enterprise: check },
      { label: 'Export to CSV', starter: cross, growth: check, enterprise: check },
      { label: 'Custom reporting & BI', starter: cross, growth: cross, enterprise: check },
    ],
  },
  {
    title: 'Customisation',
    rows: [
      { label: 'Custom receipt branding (your business name)', starter: cross, growth: check, enterprise: check },
      { label: 'Per-shop M-Pesa business name on STK prompt', starter: cross, growth: check, enterprise: check },
      { label: 'White-label option', starter: cross, growth: cross, enterprise: check },
    ],
  },
  {
    title: 'Integrations & API',
    rows: [
      { label: 'Firebase Cloud Messaging', starter: cross, growth: check, enterprise: check },
      { label: 'REST API access', starter: cross, growth: cross, enterprise: check },
      { label: 'Webhooks', starter: cross, growth: cross, enterprise: check },
      { label: 'Custom integrations', starter: cross, growth: cross, enterprise: check },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Email support', starter: t('72h'), growth: t('24h'), enterprise: t('Same-day') },
      { label: 'Phone & WhatsApp support', starter: cross, growth: cross, enterprise: check },
      { label: 'Dedicated account manager', starter: cross, growth: cross, enterprise: check },
      { label: 'On-site training & onboarding', starter: cross, growth: cross, enterprise: check },
      { label: 'Uptime SLA', starter: cross, growth: cross, enterprise: t('99.9%') },
    ],
  },
]

function Cell({ value }: { value: CellValue }) {
  if (value.type === 'check') {
    return <Check className="mx-auto h-4 w-4 text-emerald-400" aria-label="Included" />
  }
  if (value.type === 'cross') {
    return <X className="mx-auto h-4 w-4 text-white/20" aria-label="Not included" />
  }
  if (value.type === 'coming') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {value.value}
      </span>
    )
  }
  return <span className="text-sm text-white/70">{value.value}</span>
}

export function PricingComparison() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-14 text-center"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            Full Feature Breakdown
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.12 }}
          >
            Compare every feature.
            <br />
            <span className="text-gradient-brand">Pick the right plan.</span>
          </motion.h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={reduced ? {} : fadeUp}
          className="overflow-x-auto rounded-2xl border border-white/[0.06]"
        >
          <table className="w-full min-w-[640px] border-collapse">
            {/* Column headers */}
            <thead>
              <tr className="border-b border-white/[0.07] bg-white/[0.03]">
                <th className="px-6 py-4 text-left text-xs font-medium text-white/30">Feature</th>
                {(['Starter', 'Growth', 'Enterprise'] as const).map((name, i) => (
                  <th key={name} className="px-4 py-4 text-center">
                    <span
                      className={`text-sm font-bold ${
                        i === 1 ? 'text-indigo-400' : 'text-white/60'
                      }`}
                    >
                      {name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {SECTIONS.map((section, sectionIdx) => (
                <>
                  {/* Section header row */}
                  <tr key={`${section.title}-header`} className="border-b border-white/[0.04]">
                    <td
                      colSpan={4}
                      className="bg-white/[0.02] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white/35"
                    >
                      {section.title}
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {section.rows.map((row, rowIdx) => (
                    <tr
                      key={row.label}
                      className={`border-b border-white/[0.04] transition-colors duration-150 hover:bg-white/[0.02] ${
                        rowIdx === section.rows.length - 1 && sectionIdx < SECTIONS.length - 1
                          ? 'border-b-white/[0.06]'
                          : ''
                      }`}
                    >
                      <td className="px-6 py-3.5 text-sm text-white/55">{row.label}</td>
                      <td className="px-4 py-3.5 text-center">
                        <Cell value={row.starter} />
                      </td>
                      <td className="bg-indigo-600/[0.04] px-4 py-3.5 text-center">
                        <Cell value={row.growth} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
