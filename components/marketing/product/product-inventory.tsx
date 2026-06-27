'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, RotateCcw, History, TrendingDown } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const INVENTORY_FEATURES = [
  {
    icon: TrendingDown,
    title: 'Stock deducts at payment confirmation, not at sale creation.',
    body: 'If an M-Pesa push fails or times out, the sale is cancelled — and stock is never deducted. No phantom shortfalls from failed payments.',
    accent: 'text-indigo-400',
  },
  {
    icon: History,
    title: 'Every movement is permanent record.',
    body: 'RESTOCK, SALE, RETURN, DAMAGE, ADJUSTMENT — each recorded as an immutable entry. Movements are voided with a reversal, never deleted.',
    accent: 'text-violet-400',
  },
  {
    icon: RotateCcw,
    title: 'Returns restock automatically.',
    body: 'Process a return on a completed sale and the inventory restores itself. WAC recalculates to stay accurate across all subsequent movements.',
    accent: 'text-emerald-400',
  },
  {
    icon: AlertTriangle,
    title: 'Low-stock alerts before you run dry.',
    body: 'Set thresholds per product. When stock drops below your limit, the owner app flags it in real time — before the shelf empties, not after.',
    accent: 'text-amber-400',
  },
] as const

const STOCK_MOVEMENTS = [
  { type: 'RESTOCK', product: 'Samsung 25W Charger', qty: '+50', cost: 'KES 450', wac: 'KES 450.00', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { type: 'SALE', product: 'Samsung 25W Charger', qty: '-2', cost: '—', wac: 'KES 450.00', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { type: 'RESTOCK', product: 'Samsung 25W Charger', qty: '+30', cost: 'KES 470', wac: 'KES 458.00', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { type: 'RETURN', product: 'Quencher 500ml', qty: '+4', cost: 'KES 45', wac: 'KES 45.00', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { type: 'DAMAGE', product: 'Indomie Noodles', qty: '-12', cost: '—', wac: 'KES 62.00', color: 'text-red-400', bg: 'bg-red-500/10' },
] as const

export function ProductInventorySection() {
  const reduced = useReducedMotion()

  return (
    <section id="inventory" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #f59e0b 0%, transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-amber-400">
            02 — Inventory
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Stock you can trust.
            <br />
            Numbers that add up.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            WAC costing. Immutable audit trail. Stock that only moves when money actually arrives.
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="space-y-6"
          >
            {INVENTORY_FEATURES.map(({ icon: Icon, title, body, accent }) => (
              <motion.div key={title} variants={reduced ? {} : slideRight} className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.04] p-2">
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-white/50">{body}</p>
                </div>
              </motion.div>
            ))}

            {/* WAC formula callout */}
            <motion.div
              variants={reduced ? {} : fadeUp}
              className="mt-2 rounded-xl border border-amber-600/20 bg-amber-600/5 p-5"
            >
              <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
                Weighted Average Cost — KRA accepted
              </p>
              <div className="flex items-center gap-3 font-mono text-sm">
                <span className="text-white/60">WAC</span>
                <span className="text-white/30">=</span>
                <span className="rounded bg-white/[0.06] px-2 py-1 text-white">
                  (Old Stock × Old WAC) + (New Units × New Cost)
                </span>
                <span className="text-white/30">÷</span>
                <span className="rounded bg-white/[0.06] px-2 py-1 text-white">Total Units</span>
              </div>
              <p className="mt-2 text-xs text-white/35">
                Recalculated on every restock. Replays automatically if a historical entry is corrected.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Stock movement log */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideLeft}
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="border-b border-white/[0.07] px-5 py-4">
                <p className="text-sm font-semibold text-white">Stock Movement Log</p>
                <p className="text-xs text-white/35 mt-0.5">Every entry is immutable. Corrections create reversal entries.</p>
              </div>

              <div className="divide-y divide-white/[0.05]">
                {STOCK_MOVEMENTS.map((m, i) => (
                  <div key={i} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-3.5">
                    <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${m.bg} ${m.color}`}>
                      {m.type}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{m.product}</p>
                      {m.cost !== '—' && (
                        <p className="text-xs text-white/35">Cost: {m.cost}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className={`font-mono text-sm font-semibold ${m.color}`}>{m.qty}</p>
                      <p className="font-mono text-xs text-white/35">WAC {m.wac}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.07] bg-amber-500/5 px-5 py-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 flex-shrink-0 text-amber-400" />
                  <p className="text-xs text-amber-400 font-medium">Indomie Noodles: 8 units remaining · Below threshold (15)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
