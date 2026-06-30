'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

export function ContactHero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-6 md:pb-20 md:pt-40">
      {/* Ambient background orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 opacity-[0.14]"
        style={{
          background:
            'radial-gradient(ellipse at center, #4f46e5 0%, #7c3aed 40%, transparent 70%)',
          filter: 'blur(72px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-48 h-64 w-64 rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #34d399 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={reduced ? {} : stagger}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400"
        >
          Contact us
        </motion.p>

        <motion.h1
          variants={reduced ? {} : fadeUp}
          className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          We&apos;re here
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            for your business.
          </span>
        </motion.h1>

        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mx-auto max-w-xl text-lg leading-relaxed text-white/55"
        >
          Whether you&apos;re setting up your first shop, scaling to ten, or need help with M-Pesa
          or KRA — reach out and a real person will respond.
        </motion.p>

        {/* Response time badges */}
        <motion.div
          variants={reduced ? {} : fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { label: 'Sales replies in < 2 hrs', color: 'text-emerald-400', dot: '#34d399' },
            { label: 'Support replies in < 4 hrs', color: 'text-indigo-400', dot: '#818cf8' },
            { label: 'WhatsApp available', color: 'text-amber-400', dot: '#fbbf24' },
          ].map(({ label, color, dot }) => (
            <span
              key={label}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium ${color}`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: dot }}
              />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
