'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Wifi, Smartphone, FileCheck, Bell, Database, Globe } from 'lucide-react'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'

const INTEGRATIONS = [
  {
    icon: Smartphone,
    name: 'M-Pesa STK Push',
    desc: 'Safaricom Daraja. Customer confirms payment on their phone. Per-shop shortcode.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'border-[#00a550]/20 bg-[#00a550]/5',
    iconColor: 'text-[#00a550]',
  },
  {
    icon: Wifi,
    name: 'M-Pesa Paybill',
    desc: 'Manual confirmation flow. Cashier verifies transaction code from customer SMS.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'border-[#00a550]/20 bg-[#00a550]/5',
    iconColor: 'text-[#00a550]',
  },
  {
    icon: Database,
    name: 'M-Pesa Buy Goods',
    desc: 'Till Number payments. Same manual confirmation flow as Paybill.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'border-[#00a550]/20 bg-[#00a550]/5',
    iconColor: 'text-[#00a550]',
  },
  {
    icon: FileCheck,
    name: 'KRA eTIMS OSCU',
    desc: 'Kenya Revenue Authority fiscal filing. CUIN + QR code on every VAT receipt.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'border-red-500/20 bg-red-500/5',
    iconColor: 'text-red-400',
  },
  {
    icon: Bell,
    name: 'Firebase Cloud Messaging',
    desc: 'Push notifications to the owner mobile app. Background delivery via FCM.',
    status: 'Live',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'border-amber-500/20 bg-amber-500/5',
    iconColor: 'text-amber-400',
  },
  {
    icon: Globe,
    name: 'Uganda TRA e-Receipt',
    desc: 'Fiscal compliance for Uganda. Same architecture as KRA — different provider service.',
    status: 'Coming soon',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    accent: 'border-white/[0.07] bg-white/[0.02]',
    iconColor: 'text-white/30',
  },
] as const

export function ProductIntegrationsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="integrations" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            06 — Integrations
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built on the infrastructure
            <br />
            East Africa actually runs on.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            M-Pesa, KRA eTIMS, push notifications — wired in natively, not adapters bolted on later.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INTEGRATIONS.map(({ icon: Icon, name, desc, status, statusColor, accent, iconColor }) => (
            <motion.div
              key={name}
              variants={reduced ? {} : scaleIn}
              whileHover={reduced ? {} : { y: -4 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col gap-4 rounded-xl border p-5 ${accent}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor}`}>
                  {status}
                </span>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-white">{name}</p>
                <p className="text-xs leading-relaxed text-white/50">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : fadeUp}
          className="mt-12 rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 text-center"
        >
          <p className="text-sm font-semibold text-white mb-2">Multi-country architecture, ready to extend.</p>
          <p className="text-sm text-white/45 max-w-2xl mx-auto">
            The fiscal orchestrator routes by shop country. Kenya → KRA eTIMS. Uganda → URA (coming). Tanzania → TRA (planned).
            Adding a new country is a new provider service and a routing case — no existing code changes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
