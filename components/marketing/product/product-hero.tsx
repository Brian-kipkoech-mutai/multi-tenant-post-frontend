'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Zap, Clock, ShieldCheck, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/animations'

const STATS = [
  { icon: Zap, value: '< 1s', label: 'Cash checkout speed' },
  { icon: Clock, value: '3 min', label: 'M-Pesa timeout window' },
  { icon: ShieldCheck, value: 'AES-256', label: 'Credential encryption' },
  { icon: Globe, value: 'KE + UG + TZ', label: 'Countries in roadmap' },
] as const

const JUMP_LINKS = [
  { id: 'sales', label: 'Sales & Payments' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'compliance', label: 'Tax & Compliance' },
  { id: 'owner-app', label: 'Owner App' },
  { id: 'multi-shop', label: 'Multi-Shop' },
  { id: 'integrations', label: 'Integrations' },
] as const

export function ProductHero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="product-hero"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-36 text-center md:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18]"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 65%)', filter: 'blur(90px)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)', filter: 'blur(80px)' }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={reduced ? {} : stagger}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.div variants={reduced ? {} : fadeUp}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Full Product Overview
          </span>
        </motion.div>

        <motion.h1
          variants={reduced ? {} : fadeUp}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.08 }}
        >
          The operating system
          <br />
          <span className="text-gradient-brand">for East African retail.</span>
        </motion.h1>

        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55"
        >
          Every other POS was built for point-of-sale and bolted on M-Pesa. Dextra was built{' '}
          <em className="not-italic text-white/80">around</em> M-Pesa. Sales, inventory, KRA eTIMS compliance,
          and real-time business intelligence — native from day one, not adapted after the fact.
        </motion.p>

        <motion.div
          variants={reduced ? {} : fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="brand" size="lg" asChild>
            <Link href={ROUTES.register}>Start free trial</Link>
          </Button>
          <Button variant="ghost_white" size="lg" asChild>
            <Link href={ROUTES.login}>Sign in</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={reduced ? {} : stagger}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={reduced ? {} : fadeUp}
              className="glass rounded-xl p-4 text-center"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-indigo-400" />
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="mt-0.5 text-xs text-white/40">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reduced ? {} : fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="flex items-center gap-1.5 text-xs text-white/25">
            <ArrowDown className="h-3 w-3" />
            Explore
          </span>
          {JUMP_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/40 transition-all duration-200 hover:border-indigo-600/30 hover:bg-indigo-600/10 hover:text-indigo-400"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
