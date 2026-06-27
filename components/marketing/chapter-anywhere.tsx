'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, Package, Users, Zap } from 'lucide-react'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'

const CARDS = [
  {
    icon: TrendingUp,
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.15)',
    title: 'Live Revenue Feed',
    desc: 'Sales post in real time via SSE. See every transaction the moment it completes.',
  },
  {
    icon: Package,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.15)',
    title: 'Inventory Alerts',
    desc: 'FCM push when any product hits low-stock. Reorder before your cashier notices.',
  },
  {
    icon: Users,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.15)',
    title: 'Team Visibility',
    desc: "See who's logged in, what they're selling, and how each shift is performing.",
  },
  {
    icon: Zap,
    color: '#f87171',
    bg: 'rgba(248,113,113,0.15)',
    title: 'AI Assistant',
    desc: 'Ask "why did Kisumu store margin drop?" and get an answer backed by your own data.',
  },
] as const

export function ChapterAnywhere() {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-10 md:h-[600px] md:w-[600px]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            04 — Owner App
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            Your shops,
            <br />
            <span className="text-gradient-brand">in your pocket.</span>
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="text-lg leading-relaxed text-white/50">
            Watch sales happen in real time. Switch between shops. Ask the AI assistant why revenue
            dropped on Tuesday. Never be the last to know.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={reduced ? {} : scaleIn}
                whileHover={reduced ? {} : { y: -6, boxShadow: '0 24px 64px rgba(79,70,229,0.2)', transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6"
              >
                <div
                  className="mb-4 inline-flex rounded-xl p-2.5"
                  style={{ background: card.bg }}
                >
                  <Icon className="h-6 w-6" style={{ color: card.color }} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{card.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
