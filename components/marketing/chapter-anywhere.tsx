'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, Package, Users, ArrowRight } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

// ─────────────────────────────────────────────────────────────────────────────
// Sparkline bar heights — fixed Tailwind classes to avoid inline styles
// ─────────────────────────────────────────────────────────────────────────────

const SPARKLINE_BARS = ['h-3', 'h-5', 'h-4', 'h-7', 'h-5', 'h-9', 'h-11'] as const

// ─────────────────────────────────────────────────────────────────────────────
// App store badge — "coming soon" treatment
// ─────────────────────────────────────────────────────────────────────────────

type StoreType = 'apple' | 'google'

interface AppStoreBadgeProps {
  store: StoreType
}

function AppStoreBadge({ store }: AppStoreBadgeProps): React.JSX.Element {
  const isApple = store === 'apple'

  return (
    <div className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 opacity-50 select-none">
      {/* Placeholder logo */}
      {isApple ? (
        /* Apple logo approximation */
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-white"
          aria-hidden="true"
        >
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
      ) : (
        /* Google Play triangle approximation */
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-white"
          aria-hidden="true"
        >
          <path d="M3.18 23.76c.35.2.74.24 1.1.14l11.34-11.34L12 9l-8.82 14.76zM20.7 10.37l-2.8-1.62-3.44 3.43 3.44 3.44 2.83-1.64c.8-.47.8-1.63-.03-2.1zM2.18.7C2.07.95 2 1.22 2 1.54v20.92c0 .32.07.6.18.84L13.5 12 2.18.7zM15.62 2.86L4.28.14c-.36-.1-.75-.07-1.1.14L14.5 12l3.12-3.12-2-6.02z" />
        </svg>
      )}
      <div>
        <div className="text-[9px] uppercase tracking-widest text-white/35">Coming soon</div>
        <div className="text-sm font-semibold text-white">
          {isApple ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile dashboard mockup
// ─────────────────────────────────────────────────────────────────────────────

function MobileDashboard(): React.JSX.Element {
  return (
    <div className="mx-auto w-64">
      {/* Phone body */}
      <div className="rounded-[3rem] border-2 border-white/10 bg-zinc-950 p-2.5 shadow-2xl shadow-indigo-950/60">
        {/* Dynamic island */}
        <div className="mb-1 flex justify-center">
          <div className="h-7 w-24 rounded-b-2xl bg-black" />
        </div>

        {/* Screen */}
        <div className="overflow-hidden rounded-[2.3rem] bg-[#08080f]">
          <div className="px-4 pt-3 pb-6">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] text-white/30">Active shop</p>
                <p className="text-[13px] font-bold leading-tight text-white">Westlands Shop</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/25 text-[11px] font-extrabold text-indigo-300">
                JK
              </div>
            </div>

            {/* Revenue hero card */}
            <div className="mb-3 rounded-2xl border border-indigo-600/20 bg-indigo-600/[0.12] p-3">
              <p className="mb-0.5 text-[9px] text-white/35">Total Revenue · Today</p>
              <p className="text-[22px] font-extrabold leading-none text-white">KES 84,500</p>
              <p className="mt-1 text-[10px] text-emerald-400">▲ 12% vs yesterday</p>

              {/* Sparkline */}
              <div className="mt-2.5 flex items-end gap-1">
                {SPARKLINE_BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm bg-indigo-400/50 ${h}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="mb-3 grid grid-cols-2 gap-2">
              {[
                { label: 'Sales', value: '47', note: '▲ 8%' },
                { label: 'Avg Basket', value: '1.8K', note: '▼ 2%' },
              ].map(({ label, value, note }) => (
                <div key={label} className="rounded-xl bg-white/[0.04] px-2.5 py-2">
                  <p className="text-[8px] text-white/25">{label}</p>
                  <p className="text-[13px] font-bold text-white">{value}</p>
                  <p className="text-[8px] text-white/35">{note}</p>
                </div>
              ))}
            </div>

            {/* Live feed */}
            <div>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="text-[9px] font-medium text-white/30">Live sales</span>
              </div>
              {[
                { amount: 'KES 3,200', meta: 'M-Pesa · Alice', ago: '2m ago' },
                { amount: 'KES 850', meta: 'Cash · Brian', ago: '8m ago' },
                { amount: 'KES 5,600', meta: 'M-Pesa · Alice', ago: '15m ago' },
              ].map(({ amount, meta, ago }) => (
                <div key={ago} className="mb-1.5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-white">{amount}</span>
                    <span className="ml-1 text-[9px] text-white/30">{meta}</span>
                  </div>
                  <span className="text-[9px] text-white/20">{ago}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Ambient glow beneath phone */}
      <div
        aria-hidden="true"
        className="mx-auto mt-0 h-10 w-40 rounded-full blur-2xl opacity-20 [background:#4f46e5]"
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature bullets
// ─────────────────────────────────────────────────────────────────────────────

const BULLETS = [
  {
    Icon: TrendingUp,
    title: 'Live revenue feed',
    body: 'Watch every sale post the moment it completes — from any shop, any cashier.',
  },
  {
    Icon: Package,
    title: 'Inventory alerts',
    body: 'Your phone buzzes before a product runs out. Reorder before your cashier notices.',
  },
  {
    Icon: Users,
    title: 'Team visibility',
    body: "See who's logged in, what they're selling, and how each shift is performing.",
  },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// Section export
// ─────────────────────────────────────────────────────────────────────────────

export function ChapterAnywhere(): React.JSX.Element {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden bg-white/1.5 px-4 py-24 md:px-6 md:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full opacity-[0.08] blur-[80px] [background:radial-gradient(circle,#4f46e5_0%,transparent_70%)] md:h-150 md:w-150"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── Left — copy + badges ──────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={reduced ? {} : fadeUp}
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400"
            >
              04 — Owner App
            </motion.p>

            <motion.h2
              variants={reduced ? {} : fadeUp}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl"
            >
              Your shops,
              <br />
              <span className="text-gradient-brand">in your pocket.</span>
            </motion.h2>

            <motion.p
              variants={reduced ? {} : fadeUp}
              className="mb-10 text-lg leading-relaxed text-white/50"
            >
              The Dextra mobile app gives you a live command centre for every shop you own.
              Watch sales, spot problems, and manage your team — without being physically present.
            </motion.p>

            {/* Feature bullets */}
            <motion.ul variants={reduced ? {} : stagger} className="mb-10 space-y-5">
              {BULLETS.map(({ Icon, title, body }) => (
                <motion.li
                  key={title}
                  variants={reduced ? {} : fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600/15">
                    <Icon className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-sm font-semibold text-white/80">{title}</p>
                    <p className="text-sm leading-relaxed text-white/45">{body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* App store badges */}
            <motion.div variants={reduced ? {} : fadeUp}>
              <p className="mb-3 text-xs text-white/30">Available soon on</p>
              <div className="flex flex-wrap gap-3">
                <AppStoreBadge store="apple" />
                <AppStoreBadge store="google" />
              </div>

              {/* Early access CTA */}
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Get early access when it launches
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-1 text-xs text-white/20">
                iOS & Android · Free with your Dextra subscription
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right — phone mockup ──────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideLeft}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MobileDashboard />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
