'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'

export function Testimonial() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="glass glow-indigo rounded-3xl p-8 text-center md:p-10"
        >
          <motion.div
            variants={reduced ? {} : scaleIn}
            className="mb-6 flex justify-center gap-1"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </motion.div>

          <motion.blockquote
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-xl font-medium leading-relaxed text-white md:text-2xl"
          >
            &ldquo;I used to call the store every hour to check sales. Now I just open Dextra on
            my phone. My cashiers stopped skimming the moment they knew I could see every
            transaction live.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={reduced ? {} : fadeUp}
            className="flex items-center justify-center gap-3"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)' }}
              aria-hidden="true"
            >
              JM
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">James M.</p>
              <p className="text-xs text-white/40">Owner, 3 shops across Nairobi</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
