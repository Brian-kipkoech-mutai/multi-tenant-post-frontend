'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeUp, stagger } from '@/lib/animations'
import { ROUTES } from '@/lib/constants'

export function CtaSection() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl" style={{ position: 'relative', background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 40%, #0c4a6e 100%)' }}>
        {/* Decorative orbs */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="relative z-10 px-6 py-14 text-center md:px-10 md:py-16"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-300"
          >
            Start today
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          >
            Your shop is waiting
            <br />
            for a smarter system.
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mx-auto mb-10 max-w-xl text-lg text-white/55"
          >
            Set up in under 15 minutes. M-Pesa live on your first day. KRA credentials take
            5 minutes. No lock-in.
          </motion.p>

          <motion.div
            variants={reduced ? {} : fadeUp}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="brand"
                size="lg"
                className="h-13 gap-2 px-8 text-base font-bold shadow-[0_8px_40px_rgba(79,70,229,0.5)]"
                asChild
              >
                <Link href={ROUTES.register}>
                  Open your free account
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button variant="ghost_white" size="lg" className="h-13 px-8 text-base font-semibold">
                Talk to the team
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mt-6 text-sm text-white/30"
          >
            No credit card · Free for your first 30 days
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
