'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Smartphone,
  Building2,
  Store,
  FileCheck2,
  Globe2,
  Bell,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

interface Integration {
  name: string
  tagline: string
  description: string
  keyFact: string
  category: string
  Icon: React.ElementType
  iconBg: string
  iconColor: string
  dotColor: string
  facts: string[]
}

const PAYMENT_INTEGRATIONS: Integration[] = [
  {
    name: 'M-Pesa STK Push',
    tagline: 'Customer pays from their phone, no app download needed.',
    description:
      'Dextra calls the Safaricom Daraja API directly. The customer receives an STK prompt on their phone, enters their PIN, and the payment confirms via webhook in real time. No aggregator. No extra cut.',
    keyFact: '< 10s confirmation',
    category: 'Payments',
    Icon: Smartphone,
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    dotColor: 'bg-[#00a550]',
    facts: [
      'Direct Safaricom Daraja API — no aggregator markup',
      '3-minute timeout window with graceful failure handling',
      'Real-time webhook confirmation before receipt prints',
      'Auto-retry on transient network failures',
      'Payment lands directly in your registered account',
    ],
  },
  {
    name: 'M-Pesa Paybill',
    tagline: 'Your business name on every STK prompt. Not ours.',
    description:
      "When a customer pays to your Paybill number, the STK prompt shows your business name — not Dextra. We register each shop's Daraja credentials separately, encrypted with AES-256, so your identity and money stay yours.",
    keyFact: 'Your name on the prompt',
    category: 'Payments',
    Icon: Building2,
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    dotColor: 'bg-[#00a550]',
    facts: [
      'Per-shop Daraja credentials, never shared',
      'AES-256-GCM encryption for all stored credentials',
      'Business name on every customer STK prompt',
      'Full transaction audit trail per sale',
      'Works across multiple shops with separate Paybill numbers',
    ],
  },
  {
    name: 'M-Pesa Buy Goods (Till)',
    tagline: 'Accept payments to your Till. Simpler for walk-in customers.',
    description:
      'For shops that use a Till number instead of Paybill, Dextra integrates the same way — direct API, your number, your account. Every till transaction links back to the sale record automatically.',
    keyFact: 'Payments go to your Till',
    category: 'Payments',
    Icon: Store,
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    dotColor: 'bg-[#00a550]',
    facts: [
      'Direct integration with your registered Till number',
      'Automatic sale ↔ payment linkage',
      'Pending confirmation flow for manual Till verification',
      'Same audit trail as STK and Paybill',
      'Can mix Till and Paybill across shops in one account',
    ],
  },
]

const COMPLIANCE_INTEGRATIONS: Integration[] = [
  {
    name: 'KRA eTIMS / OSCU',
    tagline: 'Every sale files itself. Zero manual KRA work.',
    description:
      'Every completed sale generates a KRA-compliant fiscal receipt with a CUIN (Control Unit Invoice Number). Dextra talks directly to the KRA OSCU endpoint. If internet drops, receipts queue locally and auto-submit the moment connectivity returns — no sale is ever unsubmitted.',
    keyFact: 'Zero manual filing',
    category: 'Tax & Compliance',
    Icon: FileCheck2,
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    dotColor: 'bg-red-400',
    facts: [
      'Automatic CUIN on every completed sale receipt',
      'Offline queue — receipts retry on reconnect',
      'KRA OSCU Bearer token auto-refreshed (cached 27 min)',
      '4-state fiscal flow: PENDING → QUEUED → SUBMITTED → CUIN',
      'Legally required in Kenya — we make it invisible',
    ],
  },
  {
    name: 'Uganda TRA',
    tagline: 'Same architecture. Uganda tax compliance. Coming Q2 2026.',
    description:
      "Uganda's Tax Revenue Authority integration is being built on the same OSCU pattern used for Kenya. Every sale will generate a URA-compliant receipt with the same offline queue and auto-retry logic.",
    keyFact: 'Q2 2026',
    category: 'Tax & Compliance',
    Icon: Globe2,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
    facts: [
      'Same architecture as KRA eTIMS — proven, reliable',
      'Offline queue included from day one',
      'Per-country routing — Uganda shops auto-use URA endpoint',
      'Enterprise plans get early beta access',
    ],
  },
]

const NOTIFICATION_INTEGRATIONS: Integration[] = [
  {
    name: 'Firebase Cloud Messaging',
    tagline: 'Real-time alerts to the owner\'s phone. Even when the app is closed.',
    description:
      'Every sale, payment failure, low-stock alert, and staff event triggers a Firebase push notification to the owner\'s mobile app. When the app is foregrounded, in-app toasts appear instead of system notifications. Deep-linked taps open the exact relevant screen.',
    keyFact: 'Arrives in < 2s',
    category: 'Notifications',
    Icon: Bell,
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
    facts: [
      'FCM token registered per device on login, cleared on logout',
      'Works when app is closed, backgrounded, or open',
      'In-app toast replaces system notification when foregrounded',
      'Per-event toggle in notification preferences',
      'Deep-linked: tap notification → open exact screen',
    ],
  },
]

function IntegrationCard({ integration }: { integration: Integration }) {
  const reduced = useReducedMotion()
  const { name, tagline, description, keyFact, category, Icon, iconBg, iconColor, dotColor, facts } =
    integration

  return (
    <motion.article
      variants={reduced ? {} : fadeUp}
      className="glass group flex flex-col rounded-2xl p-7 transition-colors duration-300 hover:border-white/[0.16]"
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{name}</h3>
              <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-white/35">{category}</span>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
          Live
        </span>
      </div>

      {/* Tagline */}
      <p className="mb-3 text-sm font-medium text-white/80">{tagline}</p>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-white/45">{description}</p>

      {/* Key fact pill */}
      <div className={`mb-5 inline-flex w-fit items-center gap-1.5 rounded-full ${iconBg} px-3 py-1.5`}>
        <CheckCircle2 className={`h-3.5 w-3.5 ${iconColor}`} aria-hidden="true" />
        <span className={`text-xs font-semibold ${iconColor}`}>{keyFact}</span>
      </div>

      {/* Feature list */}
      <ul className="mt-auto space-y-2">
        {facts.map((fact) => (
          <li key={fact} className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/20" aria-hidden="true" />
            <span className="text-xs leading-snug text-white/40">{fact}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function SectionLabel({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className={`h-px flex-1 ${accent} opacity-30`} />
      <span className="text-xs font-semibold uppercase tracking-widest text-white/35">{label}</span>
      <div className={`h-px flex-1 ${accent} opacity-30`} />
    </div>
  )
}

export function IntegrationsLiveSection() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 pb-20 md:px-6">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Live Today
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.12 }}
          >
            Everything your shop needs
            <br />
            <span className="text-gradient-brand">is already connected.</span>
          </motion.h2>
        </motion.div>

        {/* M-Pesa */}
        <div>
          <SectionLabel label="Payments — M-Pesa (Safaricom Daraja API)" accent="bg-[#00a550]" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {PAYMENT_INTEGRATIONS.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}
          </motion.div>
        </div>

        {/* Tax & Compliance */}
        <div>
          <SectionLabel label="Tax & Compliance" accent="bg-red-500" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {COMPLIANCE_INTEGRATIONS.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}
          </motion.div>
        </div>

        {/* Notifications */}
        <div>
          <SectionLabel label="Notifications" accent="bg-orange-500" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {NOTIFICATION_INTEGRATIONS.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}

            {/* Coming soon cards inline */}
            {(['WhatsApp Business', 'Email Notifications'] as const).map((name) => (
              <motion.div
                key={name}
                variants={reduced ? {} : fadeUp}
                className="flex flex-col items-start justify-between rounded-2xl border border-white/[0.05] bg-white/[0.02] p-7"
              >
                <div className="mb-4 flex w-full items-start justify-between">
                  <div>
                    <p className="font-semibold text-white/40">{name}</p>
                    <p className="mt-1 text-xs text-white/25">
                      {name === 'WhatsApp Business'
                        ? 'Sale alerts, low-stock, and daily summaries. No app needed.'
                        : 'Transactional receipts, daily summaries, and product updates.'}
                    </p>
                  </div>
                  <span className="ml-3 shrink-0 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold text-indigo-400">
                    Coming
                  </span>
                </div>
                <div className="mt-auto h-px w-full bg-white/[0.05]" />
                <p className="mt-3 text-xs text-white/20">In development</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
