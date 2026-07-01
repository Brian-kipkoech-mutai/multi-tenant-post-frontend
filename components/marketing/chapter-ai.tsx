'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, TrendingUp, ShoppingBag, TriangleAlert, ArrowRight } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const DEMO = [
  {
    role: 'owner' as const,
    text: 'Which shop made the most money this week?',
  },
  {
    role: 'ai' as const,
    text: 'Westlands: KES 584,200 (+14%). Karen: KES 401,000 (−3%). Westlands peaked Monday at KES 94K. Karen leads on Phone Cases — outselling Westlands 2×.',
    stat: 'Week comparison · 2 shops',
  },
  {
    role: 'owner' as const,
    text: 'Should I reorder Samsung 45W chargers?',
  },
  {
    role: 'ai' as const,
    text: "Yes. 2 units left, selling 4.2/day — you'll stock out before tomorrow afternoon. Infinix earbuds are next: 3 units, 0.8/day.",
    stat: 'Based on 30-day velocity',
  },
] as const

const BULLETS = [
  {
    Icon: TrendingUp,
    text: 'Compare shops, cashiers, or time periods — just ask.',
  },
  {
    Icon: ShoppingBag,
    text: 'Know what to reorder before your shelves run out.',
  },
  {
    Icon: TriangleAlert,
    text: 'Get warned about margin drops, slow movers, and anomalies.',
  },
] as const

export function ChapterAI(): React.JSX.Element {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px] [background:radial-gradient(circle,#4f46e5_0%,transparent_65%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left — Chat demo ─────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideRight}
            className="order-2 lg:order-1"
          >
            <div className="glass rounded-2xl p-5 shadow-[0_0_80px_rgba(79,70,229,0.12)]">
              {/* Chat header */}
              <div className="mb-4 flex items-center gap-3 border-b border-white/[0.07] pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/20">
                  <Sparkles className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dextra AI</p>
                  <p className="text-xs text-white/30">Business Assistant</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Your live data
                </span>
              </div>

              {/* Messages */}
              <div className="space-y-3">
                {DEMO.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'owner' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'owner' ? (
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-indigo-600/25 px-4 py-2.5">
                        <p className="text-sm text-white/85">{msg.text}</p>
                      </div>
                    ) : (
                      <div className="max-w-[85%] space-y-1">
                        <div className="rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-2.5">
                          <p className="text-sm leading-relaxed text-white/75">{msg.text}</p>
                        </div>
                        {'stat' in msg && (
                          <p className="px-1 text-xs text-white/25">{msg.stat}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick prompts */}
              <div className="mt-4 border-t border-white/[0.06] pt-4">
                <p className="mb-2 text-xs text-white/20">Try asking</p>
                <div className="flex flex-wrap gap-2">
                  {["Today's summary", 'Compare my shops', 'What should I reorder?'].map(
                    (prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-white/35 transition-colors hover:border-indigo-600/30 hover:bg-indigo-600/10 hover:text-indigo-400"
                      >
                        {prompt}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-white/20">
              Conversations are session-only. No business data is stored by the AI.
            </p>
          </motion.div>

          {/* ── Right — Copy ─────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={reduced ? {} : fadeUp}
              className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              AI Assistant
            </motion.p>

            <motion.h2
              variants={reduced ? {} : fadeUp}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl"
            >
              Your business,
              <br />
              <span className="text-gradient-brand">explained by AI.</span>
            </motion.h2>

            <motion.p
              variants={reduced ? {} : fadeUp}
              className="mb-8 text-lg leading-relaxed text-white/50"
            >
              Ask any question in plain English. The AI reads your actual sales data,
              inventory levels, and team performance — then answers in seconds.
              No dashboards to navigate. No spreadsheets to export.
            </motion.p>

            <motion.ul
              variants={reduced ? {} : stagger}
              className="mb-10 space-y-5"
            >
              {BULLETS.map(({ Icon, text }) => (
                <motion.li
                  key={text}
                  variants={reduced ? {} : fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600/15">
                    <Icon className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                  </div>
                  <p className="text-base leading-relaxed text-white/60">{text}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={reduced ? {} : fadeUp}>
              <a
                href="/integrations#ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
              >
                See how the AI integration works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
