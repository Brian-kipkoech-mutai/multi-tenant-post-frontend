'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useInView, animate } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface Stat {
  value: number
  suffix: string
  label: string
  sublabel: string
}

const STATS: Stat[] = [
  { value: 5, suffix: '', label: 'Live integrations', sublabel: 'Ready today' },
  { value: 3, suffix: '', label: 'In development', sublabel: 'Shipping next' },
  { value: 6, suffix: '+', label: 'On the roadmap', sublabel: 'More coming' },
  { value: 3, suffix: '', label: 'Countries planned', sublabel: 'KE · UG · TZ' },
]

interface CountUpProps {
  target: number
  suffix: string
  disabled: boolean
}

function CountUp({ target, suffix, disabled }: CountUpProps): React.JSX.Element {
  const spanRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(spanRef, { once: true })

  useEffect(() => {
    const el = spanRef.current
    if (!el || disabled || !inView) return
    el.textContent = `0${suffix}`
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      onUpdate(latest: number) {
        el.textContent = `${Math.round(latest)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, target, suffix, disabled])

  return (
    <span ref={spanRef} suppressHydrationWarning>
      {`${target}${suffix}`}
    </span>
  )
}

export function IntegrationsHero(): React.JSX.Element {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-36 text-center md:px-6">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/4 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[90px] [background:radial-gradient(circle,#4f46e5_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-100 w-100 rounded-full opacity-12 blur-[100px] [background:radial-gradient(circle,#00a550_0%,transparent_65%)]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={reduced ? {} : stagger}
        className="relative z-10 mx-auto w-full max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={reduced ? {} : fadeUp}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Integrations & Ecosystem
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={reduced ? {} : fadeUp}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.08 }}
        >
          Your shop. East Africa&apos;s
          <br />
          <span className="text-gradient-brand">financial stack. Connected.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={reduced ? {} : fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55"
        >
          Dextra connects directly to the APIs that move money and file taxes in East Africa.
          Not aggregators. Not middleware. Direct integrations — so your money is faster,
          your compliance is automatic, and your data is yours.
        </motion.p>

        {/* ── Premium stats strip ─────────────────────────────────────────── */}
        <motion.div variants={reduced ? {} : fadeUp} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map(({ value, suffix, label, sublabel }, idx) => (
                <div
                  key={label}
                  className={cn(
                    'relative flex flex-col items-center justify-center px-6 py-10 text-center',
                    /* Right border: always on col 0 + 2; only sm+ for col 1 */
                    (idx === 0 || idx === 2) && 'border-r border-white/[0.07]',
                    idx === 1 && 'sm:border-r sm:border-white/[0.07]',
                    /* Bottom border: first row on mobile only */
                    idx < 2 && 'border-b border-white/[0.07] sm:border-b-0',
                  )}
                >
                  {/* Per-cell radial glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_70%_50%_at_50%_110%,rgba(79,70,229,0.09)_0%,transparent_100%)]"
                  />

                  {/* Gradient number */}
                  <div className="relative bg-linear-to-br from-indigo-300 via-violet-300 to-violet-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
                    <CountUp target={value} suffix={suffix} disabled={!!reduced} />
                  </div>

                  {/* Labels */}
                  <div className="mt-3 text-sm font-semibold text-white/70">{label}</div>
                  <div className="mt-0.5 text-xs text-white/30">{sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
