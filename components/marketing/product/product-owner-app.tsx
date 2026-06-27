'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Bell, TrendingUp, Layers, Sparkles, BarChart3 } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const APP_FEATURES = [
  {
    icon: TrendingUp,
    title: 'Live revenue dashboard.',
    body: 'Today\'s revenue, sales count, average basket, gross margin — refreshing in real time. Revenue card shows percentage change vs. prior period.',
    accent: 'text-indigo-400',
  },
  {
    icon: Bell,
    title: 'Push notifications for what matters.',
    body: 'Sale completed, payment failed, low stock, return processed, subscription expiring — straight to your phone the moment it happens, even when the app is closed.',
    accent: 'text-violet-400',
  },
  {
    icon: Layers,
    title: 'All your shops, one screen.',
    body: 'Own multiple locations? See them ranked by revenue side by side. One tap to switch into a shop and see its full detail. No separate logins.',
    accent: 'text-emerald-400',
  },
  {
    icon: Sparkles,
    title: 'AI business assistant. Coming V3.',
    body: '"How did Westlands perform vs Karen last week?" — natural language queries against your own data. No raw PII exposed to the model. Aggregated insights only.',
    accent: 'text-amber-400',
  },
] as const

const LIVE_SALES = [
  { product: 'Samsung 25W Charger × 2', amount: 'KES 1,800', method: 'M-Pesa', cashier: 'Alice', time: '2 min ago' },
  { product: 'Indomie Noodles × 10', amount: 'KES 750', method: 'Cash', cashier: 'Brian', time: '7 min ago' },
  { product: 'Quencher 500ml × 6', amount: 'KES 300', method: 'M-Pesa', cashier: 'Alice', time: '12 min ago' },
] as const

export function ProductOwnerAppSection() {
  const reduced = useReducedMotion()

  return (
    <section id="owner-app" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #7c3aed 0%, transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-violet-400">
            04 — Owner Intelligence
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Know what's happening.
            <br />
            Without being there.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            The owner mobile app gives you real-time visibility across every shop you run.
            Sales, stock, staff, payments — in your pocket.
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: App mockup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideRight}
          >
            <div className="glass glow-indigo rounded-2xl overflow-hidden">
              {/* App header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div>
                  <p className="text-xs text-white/35">Westlands Shop</p>
                  <p className="text-base font-bold text-white">Today's Overview</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-400">Live</span>
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.05] border-b border-white/[0.07]">
                {[
                  { label: 'Revenue', value: 'KES 84,200', delta: '+14%', positive: true },
                  { label: 'Sales', value: '47', delta: '+8', positive: true },
                  { label: 'Avg Basket', value: 'KES 1,791', delta: '-3%', positive: false },
                  { label: 'Gross Margin', value: '38.4%', delta: '+2.1pp', positive: true },
                ].map((kpi) => (
                  <div key={kpi.label} className="px-4 py-3">
                    <p className="text-xs text-white/35">{kpi.label}</p>
                    <p className="mt-0.5 font-mono text-base font-bold text-white">{kpi.value}</p>
                    <p className={`text-xs font-medium ${kpi.positive ? 'text-emerald-400' : 'text-red-400'}`}>{kpi.delta}</p>
                  </div>
                ))}
              </div>

              {/* Alert strip */}
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-amber-500/5 px-5 py-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <p className="text-xs text-amber-400">2 products below threshold · 1 M-Pesa pending confirmation</p>
              </div>

              {/* Live sales */}
              <div className="px-5 pt-4 pb-1">
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-white/30">Live Sales</p>
                <div className="space-y-3">
                  {LIVE_SALES.map((sale) => (
                    <div key={sale.time} className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">{sale.product}</p>
                        <p className="text-xs text-white/35">{sale.cashier} · {sale.method}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-mono text-sm font-semibold text-white">{sale.amount}</p>
                        <p className="text-xs text-white/30">{sale.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-shop bar */}
              <div className="border-t border-white/[0.07] mt-4 px-5 py-4">
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-white/30">All Shops Today</p>
                <div className="space-y-2">
                  {[
                    { name: 'Westlands', rev: 'KES 84,200', bar: 'w-full' },
                    { name: 'Karen', rev: 'KES 61,500', bar: 'w-3/4' },
                    { name: 'CBD', rev: 'KES 29,800', bar: 'w-2/5' },
                  ].map((shop) => (
                    <div key={shop.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">{shop.name}</span>
                        <span className="font-mono text-white/80">{shop.rev}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06]">
                        <div className={`h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 ${shop.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature bullets */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="space-y-6"
          >
            {APP_FEATURES.map(({ icon: Icon, title, body, accent }) => (
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

            <motion.div variants={reduced ? {} : fadeUp} className="pt-4">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                  <p className="text-sm font-semibold text-white">Deep analytics. V2 roadmap.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Revenue by period', 'Top products', 'Staff leaderboard', 'Customer segments', 'Payment split', 'M-Pesa performance'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-indigo-400/60" />
                      <span className="text-xs text-white/40">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
