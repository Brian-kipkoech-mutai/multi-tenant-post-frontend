'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, MessageCircle, Database, ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const DEMO_MESSAGES = [
  {
    role: 'owner' as const,
    text: 'Which product should I reorder first?',
  },
  {
    role: 'ai' as const,
    text: 'Samsung 45W Charger — 2 units left, selling 4.2 units/day. You\'ll stock out in under 12 hours. Infinix Hot 40 is next at 3 units, 0.8/day → 4 days.',
    stat: 'Based on 30-day velocity',
  },
  {
    role: 'owner' as const,
    text: 'How did Westlands compare to Karen last week?',
  },
  {
    role: 'ai' as const,
    text: 'Westlands: KES 584,200 (+14%). Karen: KES 401,000 (−3%). Westlands peaked Monday at KES 94K. Karen leads on Phone Cases — outselling Westlands 2×. Westlands leads on margin: 28% vs 21%.',
    stat: 'Cross-shop revenue comparison',
  },
] as const

const AI_FEATURES = [
  {
    Icon: MessageCircle,
    title: 'Natural language queries',
    body: 'Ask your business anything. "How did this week compare to last?" "Who is my best cashier?" No dashboards to navigate.',
  },
  {
    Icon: Database,
    title: 'MCP server',
    body: 'Model Context Protocol gives AI tools secure, read-only access to your Dextra data. Build custom AI workflows on top of your business.',
  },
  {
    Icon: Sparkles,
    title: 'Context-aware answers',
    body: 'The AI knows your shop structure, inventory velocity, team performance, and payment patterns — not just raw numbers.',
  },
] as const

export function IntegrationsAiSection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(79,70,229,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-14 text-center"
        >
          <motion.div variants={reduced ? {} : fadeUp}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-600/40 bg-indigo-600/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              V3 — Coming Soon
            </span>
          </motion.div>

          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.12 }}
          >
            Your business, explained
            <br />
            <span className="text-gradient-brand">by AI.</span>
          </motion.h2>

          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/50"
          >
            Ask questions in plain English. Get answers backed by your actual sales data, inventory
            levels, and team performance — no dashboards to navigate.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — chat demo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : fadeUp}
            className="flex flex-col"
          >
            <div className="glass flex-1 rounded-2xl p-6 shadow-[0_0_60px_rgba(79,70,229,0.12)]">
              {/* Chat header */}
              <div className="mb-5 flex items-center gap-3 border-b border-white/[0.07] pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/20">
                  <Sparkles className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dextra AI</p>
                  <p className="text-xs text-white/30">Business Assistant · Read-only access</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Live data
                </span>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                {DEMO_MESSAGES.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'owner' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'owner' ? (
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-indigo-600/25 px-4 py-2.5">
                        <p className="text-sm text-white/85">{msg.text}</p>
                      </div>
                    ) : (
                      <div className="max-w-[85%] space-y-1.5">
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
              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <p className="mb-2.5 text-xs text-white/25">Quick prompts</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Today's summary",
                    'Compare my shops',
                    'What should I reorder?',
                    'Best product this week',
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-white/40 transition-colors hover:border-indigo-600/30 hover:bg-indigo-600/10 hover:text-indigo-400"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/20">
              Conversations are session-only — never stored server-side. No PII exposed to the AI.
            </p>
          </motion.div>

          {/* Right — feature list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reduced ? {} : stagger}
            className="flex flex-col justify-center space-y-6"
          >
            {AI_FEATURES.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={reduced ? {} : fadeUp}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/15 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{body}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={reduced ? {} : fadeUp}
              className="rounded-xl border border-indigo-600/20 bg-indigo-600/5 p-4"
            >
              <div className="flex items-start gap-3">
                <Database className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                <p className="text-sm text-white/50">
                  <span className="font-semibold text-indigo-400">MCP server</span> — the AI
                  connects via Anthropic's Model Context Protocol, giving it structured, read-only
                  access to your analytics endpoints. Your data never leaves Dextra's
                  infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div variants={reduced ? {} : fadeUp}>
              <p className="flex items-center gap-2 text-sm text-white/30">
                <ArrowRight className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                Available on Growth and Enterprise plans · Launching V3
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
