'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'

const FEATURES = [
  { icon: '💳', label: 'Cash & M-Pesa' },
  { icon: '📊', label: 'WAC Inventory' },
  { icon: '🧾', label: 'KRA eTIMS Filing' },
  { icon: '👥', label: 'Multi-Tenant RBAC' },
  { icon: '📱', label: 'Owner Mobile App' },
  { icon: '🔔', label: 'Real-time via SSE' },
  { icon: '📦', label: 'Product Catalog' },
  { icon: '🤝', label: 'Customer CRM' },
  { icon: '🔍', label: 'Audit Logs' },
  { icon: '📈', label: 'Analytics Dashboard' },
  { icon: '🔒', label: 'JWT + Session RBAC' },
  { icon: '⚡', label: 'BullMQ Job Queues' },
] as const

export function FeatureGrid() {
  const reduced = useReducedMotion()

  return (
    <section
      className="px-4 py-20 md:px-6"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-2xl font-extrabold text-white md:text-3xl"
          >
            Everything you need to run a serious shop
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="text-base text-white/45">
            Not a feature checklist. A coherent system built around how retail actually works.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.label}
              variants={reduced ? {} : scaleIn}
              whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="glass flex items-center gap-3 rounded-xl p-4"
            >
              <span className="text-xl" aria-hidden="true">{f.icon}</span>
              <span className="text-sm font-medium text-white">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
