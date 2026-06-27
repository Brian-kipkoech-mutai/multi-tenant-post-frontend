'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, X, Clock } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const ROWS = [
  { feature: 'M-Pesa STK push checkout', manual: false, generic: null, dextra: true },
  { feature: 'Your business name on the STK push', manual: false, generic: false, dextra: true },
  { feature: 'Funds direct to your Paybill/Till', manual: false, generic: false, dextra: true },
  { feature: 'KRA eTIMS auto-filing', manual: false, generic: false, dextra: true },
  { feature: 'Weighted Average Cost inventory', manual: false, generic: null, dextra: true },
  { feature: 'Stock deducts at payment, not sale creation', manual: false, generic: false, dextra: true },
  { feature: 'Multi-shop from one login', manual: false, generic: false, dextra: true },
  { feature: 'Real-time owner mobile app', manual: false, generic: false, dextra: true },
  { feature: 'Per-action audit log', manual: false, generic: null, dextra: true },
  { feature: 'Role-based team permissions (3 roles)', manual: false, generic: null, dextra: true },
  { feature: 'AES-256-GCM credential encryption', manual: false, generic: false, dextra: true },
  { feature: 'Push notifications on key events', manual: false, generic: false, dextra: true },
] as const

type CellValue = boolean | null

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-emerald-400" aria-label="Yes" />
  if (value === false) return <X className="mx-auto h-4 w-4 text-white/25" aria-label="No" />
  return <Clock className="mx-auto h-4 w-4 text-amber-400" aria-label="Partial" />
}

export function ProductComparisonSection() {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-12 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            How Dextra compares
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Not adapted for East Africa.
            <br />
            Built for it.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : fadeUp}
        >
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/40">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-white/40">Manual / WhatsApp</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-white/40">Generic POS</th>
                  <th className="bg-indigo-600/10 px-6 py-4 text-center">
                    <span className="text-sm font-semibold text-indigo-400">Dextra</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {ROWS.map(({ feature, manual, generic, dextra }, i) => (
                  <tr
                    key={feature}
                    className={`transition-colors hover:bg-white/[0.02] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                  >
                    <td className="px-6 py-3.5 text-sm text-white/70">{feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={manual} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={generic} />
                    </td>
                    <td className="bg-indigo-600/5 px-6 py-3.5 text-center">
                      <Cell value={dextra} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-white/35">
            <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Yes</div>
            <div className="flex items-center gap-1.5"><X className="h-3.5 w-3.5 text-white/25" /> No</div>
            <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-amber-400" /> Partial or depends on provider</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
