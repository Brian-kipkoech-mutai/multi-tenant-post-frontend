'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Globe2,
  CreditCard,
  Banknote,
  PhoneCall,
  BookOpen,
  Webhook,
  Code2,
  MessageSquare,
  Mail,
  Inbox,
  Clock,
} from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

type RoadmapStatus = 'in-development' | 'beta' | 'coming-soon' | 'roadmap'

interface RoadmapItem {
  name: string
  description: string
  Icon: React.ElementType
  status: RoadmapStatus
  eta?: string
  category: string
}

const STATUS_CONFIG: Record<
  RoadmapStatus,
  { label: string; borderColor: string; bgColor: string; textColor: string }
> = {
  'in-development': {
    label: 'In Development',
    borderColor: 'border-indigo-600/40',
    bgColor: 'bg-indigo-600/10',
    textColor: 'text-indigo-400',
  },
  beta: {
    label: 'Beta',
    borderColor: 'border-amber-500/40',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
  },
  'coming-soon': {
    label: 'Coming Soon',
    borderColor: 'border-violet-600/40',
    bgColor: 'bg-violet-600/10',
    textColor: 'text-violet-400',
  },
  roadmap: {
    label: 'Roadmap',
    borderColor: 'border-white/[0.1]',
    bgColor: 'bg-white/[0.04]',
    textColor: 'text-white/40',
  },
}

const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    name: 'WhatsApp Business',
    description:
      'Sale alerts, low-stock warnings, and daily revenue summaries delivered to WhatsApp. No app required — works on any phone.',
    Icon: MessageSquare,
    status: 'in-development',
    category: 'Notifications',
  },
  {
    name: 'Email Notifications',
    description:
      'Transactional receipts, daily summaries, subscription invoices, and product update emails sent to the owner and team.',
    Icon: Mail,
    status: 'in-development',
    category: 'Notifications',
  },
  {
    name: 'In-App Notification Centre',
    description:
      'Persistent notification inbox inside the dashboard and mobile app. All events in one place, searchable, filterable.',
    Icon: Inbox,
    status: 'in-development',
    category: 'Notifications',
  },
  {
    name: 'Uganda TRA Compliance',
    description:
      "Uganda Tax Revenue Authority fiscal receipts using the same OSCU architecture as KRA eTIMS. Offline queue included from day one.",
    Icon: Globe2,
    status: 'coming-soon',
    eta: 'Q2 2026',
    category: 'Tax & Compliance',
  },
  {
    name: 'Tanzania ZRA Compliance',
    description:
      "Tanzania Revenue Authority integration. Same per-country routing logic — Uganda and Tanzania route to their respective OSCU endpoints automatically.",
    Icon: Globe2,
    status: 'roadmap',
    category: 'Tax & Compliance',
  },
  {
    name: 'Airtel Money (KE + UG)',
    description:
      'Extend M-Pesa-style STK Push to Airtel subscribers in Kenya and Uganda. Covers the portion of the market Safaricom doesn\'t reach.',
    Icon: PhoneCall,
    status: 'roadmap',
    category: 'Payments',
  },
  {
    name: 'Bank Transfer / Pesalink',
    description:
      'Accept direct bank transfers via the Kenya Interbank Settlement System. Designed for large-value B2B orders above M-Pesa transaction limits.',
    Icon: Banknote,
    status: 'roadmap',
    category: 'Payments',
  },
  {
    name: 'Visa / Mastercard Tap-to-Pay',
    description:
      'Card acceptance for tourist-facing shops, upmarket retail, and customers who prefer not to use mobile money.',
    Icon: CreditCard,
    status: 'roadmap',
    category: 'Payments',
  },
  {
    name: 'REST API & Webhooks',
    description:
      'Full programmatic access to sales, inventory, customers, and analytics. Webhooks deliver real-time events to your own systems.',
    Icon: Webhook,
    status: 'coming-soon',
    category: 'Developer',
  },
  {
    name: 'QuickBooks / Wave Export',
    description:
      'Push daily sales totals, revenue, and COGS directly into your accounting software. End the manual export-import cycle.',
    Icon: BookOpen,
    status: 'roadmap',
    category: 'Accounting',
  },
  {
    name: 'Custom SDK',
    description:
      'TypeScript and Python SDKs for building on top of Dextra. For enterprise customers building custom workflows or white-label products.',
    Icon: Code2,
    status: 'roadmap',
    category: 'Developer',
  },
]

export function IntegrationsRoadmapSection() {
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
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400"
          >
            What&apos;s Next
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.12 }}
          >
            The ecosystem grows
            <br />
            <span className="text-gradient-brand">with East Africa.</span>
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/45"
          >
            We ship in the order that creates the most value for shop owners. Vote with your wallet
            — Enterprise customers shape the roadmap directly.
          </motion.p>
        </motion.div>

        {/* Status legend */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? {} : fadeUp}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
            <span key={key} className="flex items-center gap-2 text-xs text-white/40">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${config.borderColor} ${config.bgColor} ${config.textColor}`}
              >
                {config.label}
              </span>
            </span>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={reduced ? {} : stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ROADMAP_ITEMS.map((item) => {
            const statusCfg = STATUS_CONFIG[item.status]
            const { Icon } = item

            return (
              <motion.div
                key={item.name}
                variants={reduced ? {} : fadeUp}
                className="flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-200 hover:border-white/[0.10] hover:bg-white/[0.04]"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/40">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/70">{item.name}</p>
                      <p className="text-xs text-white/25">{item.category}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${statusCfg.borderColor} ${statusCfg.bgColor} ${statusCfg.textColor}`}
                    >
                      {item.eta && (
                        <Clock className="h-3 w-3" aria-hidden="true" />
                      )}
                      {item.eta ?? statusCfg.label}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-white/35">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? {} : fadeUp}
          className="mt-10 text-center text-sm text-white/25"
        >
          Enterprise customers can request integrations directly.{' '}
          <a href="#contact" className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300">
            Talk to sales
          </a>
        </motion.p>
      </div>
    </section>
  )
}
