'use client'

import { type FC } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Smartphone,
  Building2,
  Store,
  FileCheck2,
  Globe2,
  Bell,
  MessageSquare,
  Mail,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { fadeUp, stagger } from '@/lib/animations'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface Integration {
  name: string
  tagline: string
  description: string
  keyFact: string
  category: string
  Icon: LucideIcon
  /** rgba() string used for whileHover box-shadow glow */
  hoverGlow: string
  /** Tailwind classes for icon container background */
  iconBg: string
  /** Tailwind classes for icon color */
  iconColor: string
  /** Tailwind classes for key-fact pill background */
  factBg: string
  /** Tailwind classes for key-fact pill text */
  factText: string
  facts: readonly string[]
  /** When true, renders with tall visual header area */
  featured?: boolean
  /** FC rendered in the visual header of featured cards */
  Visual?: FC
  status: 'live' | 'coming-soon'
  eta?: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Visual mockup components — shown inside featured card header areas
// ─────────────────────────────────────────────────────────────────────────────

const MpesaStkMockup: FC = () => (
  <div className="flex h-56 items-center justify-center [background:linear-gradient(to_bottom,rgba(0,165,80,0.1),transparent)]">
    <div className="relative">
      {/* Phone body */}
      <div className="w-36 rounded-[1.75rem] border border-white/10 bg-zinc-950 p-2 shadow-2xl shadow-black/70">
        <div className="overflow-hidden rounded-[1.35rem] bg-zinc-900">
          {/* Dynamic island */}
          <div className="flex h-5 items-center justify-center">
            <div className="h-1.5 w-10 rounded-full bg-black" />
          </div>
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pb-1 text-[8px] text-white/25">
            <span>9:41</span>
            <span>Safaricom</span>
          </div>
          {/* STK prompt */}
          <div className="mx-2 mb-3 rounded-2xl border border-[#00a550]/20 bg-[#00a550]/[0.08] px-3 py-3 text-center">
            <div className="mb-0.5 text-[8px] font-extrabold tracking-[0.18em] text-[#00a550]">
              M-PESA
            </div>
            <div className="text-base font-bold text-white">KES 3,200</div>
            <div className="mb-2.5 text-[9px] text-white/45">to WESTLANDS SHOP</div>
            <div className="mb-1.5 text-[8px] text-white/35">Enter M-Pesa PIN to pay</div>
            {/* PIN dots */}
            <div className="flex justify-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-[#00a550]" />
              ))}
              {[5, 6].map((i) => (
                <div key={i} className="h-2 w-2 rounded-full border border-white/20" />
              ))}
            </div>
          </div>
          {/* Status */}
          <div className="mb-2.5 text-center text-[8px] text-emerald-400">
            ✓ &nbsp;Confirming payment…
          </div>
        </div>
      </div>
      {/* Glow beneath phone */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full blur-xl [background:#00a550] opacity-25"
      />
    </div>
  </div>
)

const KraReceiptMockup: FC = () => (
  <div className="flex h-56 items-center justify-center [background:linear-gradient(to_bottom,rgba(248,113,113,0.07),transparent)]">
    <div className="relative w-48 rounded-xl border border-white/10 bg-black/60 p-3.5 font-mono shadow-2xl shadow-black/70">
      {/* Header */}
      <div className="mb-3 border-b border-dashed border-white/10 pb-2.5 text-center">
        <div className="text-[9px] font-extrabold tracking-[0.2em] text-white/55">
          FISCAL RECEIPT
        </div>
        <div className="mt-0.5 text-[8px] text-white/25">KRA eTIMS Compliant</div>
      </div>
      {/* Line items */}
      <div className="mb-3 space-y-1.5">
        {(
          [
            ['Date', '28 Jun 2026'],
            ['Amount', 'KES 3,200'],
            ['VAT 16%', 'KES 441'],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="flex justify-between text-[9px]">
            <span className="text-white/35">{k}</span>
            <span className="text-white/65">{v}</span>
          </div>
        ))}
      </div>
      {/* CUIN — the important part */}
      <div className="rounded-lg border border-red-500/25 bg-red-500/[0.06] p-2 text-center">
        <div className="mb-0.5 text-[8px] text-white/25">CUIN</div>
        <div className="text-[11px] font-bold tracking-wide text-red-400">
          KE-2026-0081947
        </div>
        <div className="mt-1 text-[8px] text-red-400/60">✓ eTIMS Verified</div>
      </div>
    </div>
  </div>
)

const FirebaseNotifMockup: FC = () => (
  <div className="flex h-56 items-center justify-center [background:linear-gradient(to_bottom,rgba(251,146,60,0.07),transparent)]">
    <div className="w-56 space-y-2">
      {/* Notification 1 — sale */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900/90 px-3.5 py-2.5 shadow-lg backdrop-blur">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-600">
            <span className="text-[7px] font-extrabold text-white">D</span>
          </div>
          <span className="text-[10px] font-semibold text-white">Dextra</span>
          <span className="ml-auto text-[9px] text-white/25">now</span>
        </div>
        <div className="text-[10px] font-semibold text-white/90">
          Sale complete — KES 4,800
        </div>
        <div className="text-[9px] text-white/40">M-Pesa · Alice · Westlands</div>
      </div>
      {/* Notification 2 — alert */}
      <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.05] px-3.5 py-2.5 shadow-lg">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-600">
            <span className="text-[7px] font-extrabold text-white">D</span>
          </div>
          <span className="text-[10px] font-semibold text-white">Dextra</span>
          <span className="ml-auto text-[9px] text-white/25">2m ago</span>
        </div>
        <div className="text-[10px] font-semibold text-amber-300">
          ⚠ 3 items below restock level
        </div>
        <div className="text-[9px] text-white/40">Tap to view inventory alerts</div>
      </div>
    </div>
  </div>
)

// ─────────────────────────────────────────────────────────────────────────────
// Integration data
// ─────────────────────────────────────────────────────────────────────────────

const PAYMENT_INTEGRATIONS: Integration[] = [
  {
    name: 'M-Pesa STK Push',
    tagline: 'Customer pays from their phone. No app download. No aggregator.',
    description:
      'Dextra calls the Safaricom Daraja API directly. The customer receives an STK prompt, enters their PIN, and the payment confirms via webhook in real time. Money goes straight to your account.',
    keyFact: '< 10 s confirmation',
    category: 'Payments',
    Icon: Smartphone,
    hoverGlow: 'rgba(0,165,80,0.18)',
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    factBg: 'bg-[#00a550]/10',
    factText: 'text-[#00a550]',
    featured: true,
    Visual: MpesaStkMockup,
    facts: [
      'Direct Safaricom Daraja API — zero aggregator markup',
      '3-minute timeout window with graceful failure handling',
      'Real-time webhook confirmation before receipt prints',
      'Payment lands directly in your registered M-Pesa account',
    ],
    status: 'live',
  },
  {
    name: 'M-Pesa Paybill',
    tagline: 'Your business name on every STK prompt.',
    description:
      "STK prompts show your business name — not Dextra's. Each shop's Daraja credentials are registered separately and encrypted with AES-256. Your identity and money stay yours.",
    keyFact: 'Your name on the prompt',
    category: 'Payments',
    Icon: Building2,
    hoverGlow: 'rgba(0,165,80,0.15)',
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    factBg: 'bg-[#00a550]/10',
    factText: 'text-[#00a550]',
    facts: [
      'Per-shop Daraja credentials, never shared',
      'AES-256-GCM encryption for all stored credentials',
      'Full transaction audit trail per sale',
    ],
    status: 'live',
  },
  {
    name: 'M-Pesa Buy Goods (Till)',
    tagline: 'Accept payments to your Till. Simpler for walk-in customers.',
    description:
      'For shops using a Till number, the same direct API integration applies — your number, your account, automatic sale linkage.',
    keyFact: 'Payments go to your Till',
    category: 'Payments',
    Icon: Store,
    hoverGlow: 'rgba(0,165,80,0.15)',
    iconBg: 'bg-[#00a550]/15',
    iconColor: 'text-[#00a550]',
    factBg: 'bg-[#00a550]/10',
    factText: 'text-[#00a550]',
    facts: [
      'Direct integration with your registered Till number',
      'Automatic sale ↔ payment linkage',
      'Can mix Till and Paybill across shops in one account',
    ],
    status: 'live',
  },
]

const COMPLIANCE_INTEGRATIONS: Integration[] = [
  {
    name: 'KRA eTIMS / OSCU',
    tagline: 'Every sale files itself. Zero manual KRA work.',
    description:
      'Every completed sale generates a KRA-compliant fiscal receipt with a CUIN. If internet drops, receipts queue locally and auto-submit the moment connectivity returns — no sale is ever unsubmitted.',
    keyFact: 'Zero manual filing',
    category: 'Tax & Compliance',
    Icon: FileCheck2,
    hoverGlow: 'rgba(248,113,113,0.18)',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    factBg: 'bg-red-500/10',
    factText: 'text-red-400',
    featured: true,
    Visual: KraReceiptMockup,
    facts: [
      'Automatic CUIN on every completed sale receipt',
      'Offline queue — receipts retry on reconnect automatically',
      'KRA OSCU Bearer token auto-refreshed and cached (27 min)',
      '4-state fiscal flow: PENDING → QUEUED → SUBMITTED → CUIN',
    ],
    status: 'live',
  },
  {
    name: 'Uganda TRA',
    tagline: 'Same architecture. Uganda tax compliance. Coming Q2 2026.',
    description:
      "Built on the same OSCU pattern used for Kenya. Every sale will generate a URA-compliant receipt with the same offline queue and auto-retry logic.",
    keyFact: 'Q2 2026',
    category: 'Tax & Compliance',
    Icon: Globe2,
    hoverGlow: 'rgba(251,191,36,0.12)',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    factBg: 'bg-amber-500/10',
    factText: 'text-amber-400',
    facts: [
      'Same architecture as KRA eTIMS — proven, reliable',
      'Offline queue included from day one',
      'Enterprise plans get early beta access',
    ],
    status: 'coming-soon',
    eta: 'Q2 2026',
  },
]

const NOTIFICATION_INTEGRATIONS: Integration[] = [
  {
    name: 'Firebase Cloud Messaging',
    tagline: "Real-time alerts to the owner's phone — even when the app is closed.",
    description:
      'Every sale, payment failure, and low-stock event triggers a push notification. When the app is foregrounded, in-app toasts appear instead. Deep-linked taps open the exact relevant screen.',
    keyFact: 'Arrives in < 2 s',
    category: 'Notifications',
    Icon: Bell,
    hoverGlow: 'rgba(251,146,60,0.18)',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    factBg: 'bg-orange-500/10',
    factText: 'text-orange-400',
    featured: true,
    Visual: FirebaseNotifMockup,
    facts: [
      'FCM token registered per device on login, cleared on logout',
      'Works when app is closed, backgrounded, or open',
      'In-app toast replaces system notification when foregrounded',
      'Deep-linked: tap notification → open exact screen',
    ],
    status: 'live',
  },
  {
    name: 'WhatsApp Business',
    tagline: 'Sale alerts, low-stock warnings, and daily summaries on WhatsApp.',
    description:
      'No app required — works on any phone. Daily revenue summaries, payment failures, and restock alerts delivered to the owner and team via WhatsApp Business API.',
    keyFact: 'In development',
    category: 'Notifications',
    Icon: MessageSquare,
    hoverGlow: 'rgba(79,70,229,0.12)',
    iconBg: 'bg-indigo-600/10',
    iconColor: 'text-indigo-400',
    factBg: 'bg-indigo-600/10',
    factText: 'text-indigo-400',
    facts: [
      'Works on any phone — no app download needed',
      'Per-event notification toggle in settings',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Email Notifications',
    tagline: 'Transactional receipts, daily summaries, and product updates by email.',
    description:
      'Receipts sent to customers, daily revenue summaries for owners, and subscription invoices — all routed automatically based on event type.',
    keyFact: 'In development',
    category: 'Notifications',
    Icon: Mail,
    hoverGlow: 'rgba(79,70,229,0.12)',
    iconBg: 'bg-indigo-600/10',
    iconColor: 'text-indigo-400',
    factBg: 'bg-indigo-600/10',
    factText: 'text-indigo-400',
    facts: [
      'Customer receipts, owner summaries, subscription invoices',
      'Per-event toggle in notification preferences',
    ],
    status: 'coming-soon',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function LiveBadge(): React.JSX.Element {
  return (
    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Live
    </span>
  )
}

function ComingBadge({ label }: { label?: string }): React.JSX.Element {
  return (
    <span className="shrink-0 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-400">
      {label ?? 'Coming'}
    </span>
  )
}

interface SectionHeaderProps {
  Icon: LucideIcon
  label: string
  iconBg: string
  iconColor: string
}

function SectionHeader({ Icon, label, iconBg, iconColor }: SectionHeaderProps): React.JSX.Element {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className={cn('flex h-7 w-7 shrink-0 items-center justify-center rounded-lg', iconBg)}>
        <Icon className={cn('h-3.5 w-3.5', iconColor)} aria-hidden="true" />
      </div>
      <span className="text-sm font-semibold text-white/60">{label}</span>
      <div className="h-px flex-1 bg-white/[0.06]" />
    </div>
  )
}

interface IntegrationCardProps {
  integration: Integration
  /** Extra Tailwind classes for grid span, etc. */
  className?: string
}

function IntegrationCard({ integration, className }: IntegrationCardProps): React.JSX.Element {
  const reduced = useReducedMotion()
  const {
    name, tagline, description, keyFact, category, Icon,
    hoverGlow, iconBg, iconColor, factBg, factText,
    facts, featured, Visual, status, eta,
  } = integration

  const isLive = status === 'live'
  const dimmed = !isLive

  return (
    <motion.div
      variants={reduced ? {} : fadeUp}
      whileHover={reduced ? {} : { y: -5, boxShadow: `0 28px 72px ${hoverGlow}, 0 0 0 1px ${hoverGlow}` }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={cn('flex flex-col', className)}
    >
      <Card
        className={cn(
          'flex flex-1 flex-col overflow-hidden border border-white/8 bg-white/[0.03] text-white ring-0 transition-colors duration-300',
          !dimmed && 'hover:border-white/[0.14]',
          dimmed && 'opacity-70',
        )}
      >
        {/* Visual header — only on featured cards */}
        {featured && Visual && (
          <div className="overflow-hidden border-b border-white/[0.06]">
            <Visual />
          </div>
        )}

        <CardHeader className="px-6 pt-5 pb-0">
          <div className="flex items-start justify-between gap-3">
            {/* Icon + name + category */}
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                  iconBg,
                )}
              >
                <Icon className={cn('h-5 w-5', iconColor)} aria-hidden="true" />
              </div>
              <div>
                <div className="text-[15px] font-bold leading-snug text-white">{name}</div>
                <div className="text-xs text-white/35">{category}</div>
              </div>
            </div>
            {/* Status badge */}
            {isLive ? <LiveBadge /> : <ComingBadge label={eta} />}
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 px-6 pt-4 pb-6">
          {/* Tagline */}
          <p className="text-sm font-medium leading-snug text-white/75">{tagline}</p>

          {/* Description */}
          <p className="text-sm leading-relaxed text-white/40">{description}</p>

          {/* Key fact pill */}
          <div
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5',
              factBg,
            )}
          >
            <Check className={cn('h-3.5 w-3.5', factText)} aria-hidden="true" />
            <span className={cn('text-xs font-semibold', factText)}>{keyFact}</span>
          </div>

          {/* Facts list */}
          <ul className="mt-auto space-y-2">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/20" aria-hidden="true" />
                <span className="text-xs leading-snug text-white/38">{fact}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section export
// ─────────────────────────────────────────────────────────────────────────────

export function IntegrationsLiveSection(): React.JSX.Element {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 pb-20 md:px-6">
      <div className="mx-auto max-w-6xl space-y-20">

        {/* ── Section heading ──────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="text-center"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400"
          >
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

        {/* ── Payments — M-Pesa ────────────────────────────────────────────── */}
        <div>
          <SectionHeader
            Icon={Smartphone}
            label="Payments — M-Pesa (Safaricom Daraja API)"
            iconBg="bg-[#00a550]/15"
            iconColor="text-[#00a550]"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {PAYMENT_INTEGRATIONS.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}
          </motion.div>
        </div>

        {/* ── Tax & Compliance ─────────────────────────────────────────────── */}
        <div>
          <SectionHeader
            Icon={FileCheck2}
            label="Tax & Compliance"
            iconBg="bg-red-500/15"
            iconColor="text-red-400"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {/* KRA spans 2 cols — the flagship compliance integration */}
            <IntegrationCard
              integration={COMPLIANCE_INTEGRATIONS[0]!}
              className="md:col-span-2"
            />
            <IntegrationCard integration={COMPLIANCE_INTEGRATIONS[1]!} />
          </motion.div>
        </div>

        {/* ── Notifications ────────────────────────────────────────────────── */}
        <div>
          <SectionHeader
            Icon={Bell}
            label="Notifications"
            iconBg="bg-orange-500/15"
            iconColor="text-orange-400"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {/* Firebase spans 2 cols */}
            <IntegrationCard
              integration={NOTIFICATION_INTEGRATIONS[0]!}
              className="md:col-span-2"
            />
            {/* WhatsApp + Email stacked in the 3rd col */}
            <div className="flex flex-col gap-5">
              {NOTIFICATION_INTEGRATIONS.slice(1).map((integration) => (
                <IntegrationCard
                  key={integration.name}
                  integration={integration}
                  className="flex-1"
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
