'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

const COUNTS = [
  { value: '5', label: 'Live integrations' },
  { value: '3', label: 'In development' },
  { value: '6+', label: 'On the roadmap' },
  { value: '3', label: 'Countries planned' },
] as const

export function IntegrationsHero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-36 text-center md:px-6">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 65%)', filter: 'blur(90px)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #00a550 0%, transparent 65%)', filter: 'blur(100px)' }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={reduced ? {} : stagger}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.div variants={reduced ? {} : fadeUp}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Integrations & Ecosystem
          </span>
        </motion.div>

        <motion.h1
          variants={reduced ? {} : fadeUp}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.08 }}
        >
          Your shop. East Africa's
          <br />
          <span className="text-gradient-brand">financial stack. Connected.</span>
        </motion.h1>

        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55"
        >
          Dextra connects directly to the APIs that move money and file taxes in East Africa.
          Not aggregators. Not middleware. Direct integrations — so your money is faster,
          your compliance is automatic, and your data is yours.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={reduced ? {} : stagger}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {COUNTS.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={reduced ? {} : fadeUp}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-extrabold text-white">{value}</div>
              <div className="mt-0.5 text-xs text-white/40">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
