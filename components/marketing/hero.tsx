'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BarChart3, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, stagger, FLOAT } from '@/lib/animations'
import { ROUTES } from '@/lib/constants'

const STATS = [
  { label: 'Shops active', value: '1,200+' },
  { label: 'Sales processed daily', value: '28K+' },
  { label: 'KRA filings automated', value: '100%' },
  { label: 'Payment methods', value: '4' },
] as const

const MINI_CARDS = [
  { label: 'Sales', value: '47', delta: '↑ 8%', color: '#a5b4fc' },
  { label: 'Avg Basket', value: 'KES 1,797', delta: '↓ 2%', color: '#a5b4fc' },
  { label: 'Margin', value: '23%', delta: '↑ 1.2pp', color: '#34d399' },
  { label: 'Pending', value: '3', delta: 'M-Pesa', color: '#fbbf24' },
] as const

const SPARKLINE = [35, 55, 42, 78, 65, 90, 100] as const

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 md:px-6">
      {/* Ambient orbs */}
      <div
        className="animate-blob pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full opacity-20 md:h-[600px] md:w-[600px]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="animate-blob pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full opacity-15 md:h-[500px] md:w-[500px]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '3s',
        }}
        aria-hidden="true"
      />
      <div
        className="animate-blob pointer-events-none absolute right-1/3 top-1/3 h-[200px] w-[200px] rounded-full opacity-10 md:h-[300px] md:w-[300px]"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '5s',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial="hidden"
        animate="visible"
        variants={reduced ? {} : stagger}
      >
        {/* Badge */}
        <motion.div
          variants={reduced ? {} : fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          style={{
            background: 'rgba(79,70,229,0.15)',
            border: '1px solid rgba(79,70,229,0.3)',
            color: '#a5b4fc',
          }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: '#818cf8' }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: '#4f46e5' }}
            />
          </span>
          Built for East Africa · M-Pesa native · KRA eTIMS compliant
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={reduced ? {} : fadeUp}
          className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-white">The POS platform</span>
          <br />
          <span className="text-gradient-brand">your shop deserves.</span>
        </motion.h1>

        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/55"
        >
          Sell via cash or M-Pesa, track inventory to the unit, file VAT with KRA automatically,
          and watch your shops from anywhere — all from one beautifully simple platform.
        </motion.p>

        <motion.div
          variants={reduced ? {} : fadeUp}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button variant="brand" size="lg" className="h-12 gap-2 px-7 text-base font-semibold shadow-[0_8px_32px_rgba(79,70,229,0.4)]" asChild>
              <Link href={ROUTES.register}>
                Start free — no card needed
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button variant="ghost_white" size="lg" className="h-12 gap-2 px-7 text-base font-semibold">
              Watch 2-min demo
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          variants={reduced ? {} : stagger}
          className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={reduced ? {} : fadeUp}
              className="glass rounded-2xl px-5 py-4 text-center"
            >
              <div className="text-xl font-bold text-white md:text-2xl">{s.value}</div>
              <div className="mt-0.5 text-xs text-white/45">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero dashboard mockup */}
      <motion.div
        className="relative z-10 mx-auto mt-16 w-full max-w-4xl px-4 md:mt-20 md:px-0"
        initial={reduced ? {} : { opacity: 0, y: 40 }}
        animate={reduced ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={reduced ? {} : FLOAT.animate}
          transition={reduced ? {} : FLOAT.transition}
          className="glass glow-indigo rounded-3xl p-1"
        >
          <div className="rounded-[22px] p-4 md:p-6" style={{ background: '#0f0f23' }}>
            {/* Top bar */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-white/40">Nairobi Junction Store</p>
                <p className="text-lg font-bold text-white md:text-xl">
                  KES 84,500{' '}
                  <span className="text-sm font-normal text-emerald-400">▲ 12% today</span>
                </p>
              </div>
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live
              </div>
            </div>

            {/* Sparkline */}
            <div className="mb-6 flex h-16 items-end gap-1.5">
              {SPARKLINE.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background:
                      i === SPARKLINE.length - 1
                        ? 'linear-gradient(to top, #4f46e5, #818cf8)'
                        : 'rgba(79,70,229,0.25)',
                  }}
                />
              ))}
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {MINI_CARDS.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl p-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p className="mb-1 text-xs text-white/40">{c.label}</p>
                  <p className="text-sm font-bold text-white">{c.value}</p>
                  <p className="mt-0.5 text-xs" style={{ color: c.color }}>
                    {c.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4">
              <BarChart3 className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
              <p className="text-xs text-white/35">
                3 shops tracked · Last updated just now
              </p>
              <div className="ml-auto flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span className="text-xs text-emerald-400">KRA synced</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
