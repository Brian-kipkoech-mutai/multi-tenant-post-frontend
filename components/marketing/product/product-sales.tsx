'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Smartphone, BadgeDollarSign, RefreshCw, Building2, CheckCircle2 } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const DIFFERENTIATORS = [
  {
    icon: Smartphone,
    title: 'Your business name on their phone.',
    body: 'Per-shop Daraja credentials mean the M-Pesa STK push shows your shop\'s name — not ours. The customer sees exactly who they\'re paying.',
    accent: 'text-indigo-400',
    bg: 'bg-indigo-600/10',
    border: 'border-indigo-600/20',
  },
  {
    icon: BadgeDollarSign,
    title: 'Money goes directly to your account.',
    body: 'Funds flow from the customer\'s M-Pesa wallet to your own Paybill or Till Number. Dextra is never in between. We never touch your money.',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
  },
  {
    icon: RefreshCw,
    title: '3 minutes. Then we decide.',
    body: 'If a customer doesn\'t confirm within 3 minutes, the payment auto-cancels. No stuck sales. No phantom completed orders. The cashier retries or moves on.',
    accent: 'text-amber-400',
    bg: 'bg-amber-600/10',
    border: 'border-amber-600/20',
  },
  {
    icon: Building2,
    title: 'Paybill, Till, or STK — your choice.',
    body: 'Cash, M-Pesa STK push, Paybill manual confirmation, and Buy Goods manual confirmation. All in one sale flow. Mix payment methods in a single transaction.',
    accent: 'text-violet-400',
    bg: 'bg-violet-600/10',
    border: 'border-violet-600/20',
  },
] as const

const SALE_ITEMS = [
  { name: 'Samsung 25W Charger', qty: 2, price: 'KES 1,800' },
  { name: 'Indomie Noodles', qty: 5, price: 'KES 375' },
  { name: 'Quencher 500ml', qty: 4, price: 'KES 200' },
] as const

const PAYMENT_METHODS = ['Cash', 'M-Pesa STK', 'Paybill', 'Buy Goods'] as const

export function ProductSalesSection() {
  const reduced = useReducedMotion()

  return (
    <section id="sales" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            01 — Sales & Payments
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Three taps. Money in your account.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            M-Pesa built into the checkout, not tacked on. Every method — cash, STK push, Paybill, Buy Goods — in a single unified flow.
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* POS Mockup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideRight}
            className="order-2 lg:order-1"
          >
            <div className="glass glow-indigo rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div>
                  <p className="text-xs text-white/35">New Sale</p>
                  <p className="font-mono text-sm font-semibold text-white">REC-000412</p>
                </div>
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-400">
                  PENDING
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-white/[0.05] px-5">
                {SALE_ITEMS.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-white/35">× {item.qty}</p>
                    </div>
                    <p className="font-mono text-sm text-white/80">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-5 py-4">
                <p className="text-sm font-semibold text-white/60">Total</p>
                <p className="font-mono text-lg font-bold text-white">KES 2,375</p>
              </div>

              {/* Payment methods */}
              <div className="border-t border-white/[0.07] px-5 pt-4 pb-2">
                <p className="mb-3 text-xs font-medium tracking-widest uppercase text-white/30">Payment method</p>
                <div className="flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method}
                      aria-pressed={method === 'M-Pesa STK'}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                        method === 'M-Pesa STK'
                          ? 'bg-[#00a550] text-white shadow-[0_0_12px_rgba(0,165,80,0.4)]'
                          : 'border border-white/[0.1] bg-white/[0.04] text-white/50'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone field */}
              <div className="px-5 pt-4 pb-4">
                <p className="mb-1.5 text-xs text-white/35">Customer phone</p>
                <div className="flex items-center rounded-lg border border-indigo-600/30 bg-white/[0.04] px-3 py-2.5">
                  <span className="mr-2 text-sm text-white/40">🇰🇪</span>
                  <span className="font-mono text-sm text-white">+254 712 345 678</span>
                </div>
              </div>

              {/* STK status */}
              <div className="border-t border-white/[0.07] bg-[#00a550]/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00a550]/20">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#00a550] opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00a550]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Waiting for M-Pesa confirmation</p>
                    <p className="text-xs text-white/40">2 min 43 sec remaining · Sent to Westlands Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="order-1 space-y-5 lg:order-2"
          >
            {DIFFERENTIATORS.map(({ icon: Icon, title, body, accent, bg, border }) => (
              <motion.div
                key={title}
                variants={reduced ? {} : slideLeft}
                className={`flex gap-4 rounded-xl border p-5 ${bg} ${border}`}
              >
                <div className={`mt-0.5 flex-shrink-0 rounded-lg p-2 ${bg}`}>
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <div>
                  <p className={`mb-1 text-sm font-semibold ${accent}`}>{title}</p>
                  <p className="text-sm leading-relaxed text-white/55">{body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={reduced ? {} : fadeUp} className="flex items-center gap-2 pt-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-white/40">Works offline for cash sales. M-Pesa syncs when reconnected.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
