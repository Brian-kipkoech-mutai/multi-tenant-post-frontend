'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle, BarChart3 } from 'lucide-react'
import { fadeUp, slideRight, stagger } from '@/lib/animations'

const FEATURES = [
  'Weighted Average Cost recalculated on every restock',
  'Cost snapshot on every sale item for accurate margins',
  'Void any movement — reversal entry keeps the trail clean',
  'Low-stock alerts before you run out',
] as const

const STOCK_ITEMS = [
  { name: 'Maize Flour 2kg', sku: 'MF-2KG', qty: 142, wac: 'KES 98.50', status: 'ok' },
  { name: 'Cooking Oil 1L', sku: 'CO-1L', qty: 23, wac: 'KES 210.00', status: 'low' },
  { name: 'Sugar 1kg', sku: 'SG-1KG', qty: 0, wac: 'KES 145.00', status: 'out' },
] as const

const STATUS_COLOR = { ok: '#34d399', low: '#fbbf24', out: '#f87171' } as const
const STATUS_LABEL = { ok: 'In stock', low: 'Low stock', out: 'Out of stock' } as const

export function ChapterInventory() {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-10 md:h-[500px] md:w-[500px]"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="space-y-4"
        >
          {/* Stock table */}
          <motion.div variants={reduced ? {} : slideRight} className="glass rounded-2xl p-5">
            <p className="mb-4 text-sm font-semibold text-white">
              Stock Levels — Westlands Store
            </p>
            <div className="space-y-3">
              {STOCK_ITEMS.map((p) => (
                <div
                  key={p.sku}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div>
                    <p className="text-sm font-medium text-white">{p.name}</p>
                    <p className="text-xs text-white/35">
                      {p.sku} · WAC {p.wac}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold" style={{ color: STATUS_COLOR[p.status] }}>
                      {p.qty} units
                    </p>
                    <p className="text-xs text-white/30">{STATUS_LABEL[p.status]}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WAC explanation */}
          <motion.div variants={reduced ? {} : slideRight} className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: 'rgba(245,158,11,0.2)' }}
              >
                <BarChart3 className="h-5 w-5 text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-white">
                  Weighted Average Cost engine
                </p>
                <p className="text-xs leading-relaxed text-white/45">
                  Every restock recalculates WAC. Every sale snapshot preserves the cost at that
                  moment — so your margin reports never lie, even after restocking at a different
                  price.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400"
          >
            02 — Inventory
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            Always know
            <br />
            <span className="text-amber-400">what you have.</span>
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-lg leading-relaxed text-white/50"
          >
            Stock deducts the moment a sale completes — not before, not after. Restock, damage, and
            adjustment movements create a permanent audit trail you can never erase.
          </motion.p>
          <motion.ul variants={reduced ? {} : stagger} className="space-y-3">
            {FEATURES.map((f) => (
              <motion.li
                key={f}
                variants={reduced ? {} : fadeUp}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                  aria-hidden="true"
                />
                {f}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
