'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Store, TrendingUp, FileCheck } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const TESTIMONIALS = [
  {
    quote:
      'The M-Pesa STK push is smooth — customers pay in seconds. And the money lands in our Till directly. No waiting, no middleman.',
    name: 'Mary W.',
    role: 'Owner, Nairobi General Store',
    Icon: Store,
    stat: '3 min',
    statLabel: 'Average checkout time',
  },
  {
    quote:
      'I manage 3 shops now. Before Dextra, I had to drive to each one to know how sales were going. Now I see everything on my phone.',
    name: 'James O.',
    role: 'Owner, Kisumu Supermarket Group',
    Icon: TrendingUp,
    stat: '3 shops',
    statLabel: 'Managed from one dashboard',
  },
  {
    quote:
      'KRA receipts used to take 30 minutes of manual work per day. Now they generate automatically. My accountant is happy.',
    name: 'Sarah M.',
    role: 'Manager, Mombasa Retail Ltd.',
    Icon: FileCheck,
    stat: 'Auto',
    statLabel: 'KRA eTIMS receipts',
  },
]

export function PricingSocialProof() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-12 text-center"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            From the field
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            What shop owners say.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={reduced ? {} : stagger}
          className="grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map(({ quote, name, role, Icon, stat, statLabel }) => (
            <motion.div
              key={name}
              variants={reduced ? {} : fadeUp}
              className="glass flex flex-col gap-5 rounded-2xl p-6"
            >
              {/* Stat highlight */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/15 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">{stat}</div>
                  <div className="text-xs text-white/35">{statLabel}</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-white/55">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer>
                <p className="text-sm font-semibold text-white/80">{name}</p>
                <p className="text-xs text-white/35">{role}</p>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
