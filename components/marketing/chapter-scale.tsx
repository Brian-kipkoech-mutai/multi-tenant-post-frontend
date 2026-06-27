'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { fadeUp, slideLeft, stagger } from '@/lib/animations'

const FEATURES = [
  'One user, many shops — switch with a single tap',
  'Granular RBAC: cashier, manager, owner per shop',
  'Audit log for every sensitive action, forever',
  'Platform admin dashboard for managing all tenants',
] as const

const SHOPS = [
  { name: 'Nairobi Junction', role: 'Owner', revenue: 'KES 84,500', active: true },
  { name: 'Westlands Mart', role: 'Manager', revenue: 'KES 41,200', active: false },
  { name: 'Kisumu Trade Centre', role: 'Owner', revenue: 'KES 29,800', active: false },
] as const

export function ChapterScale() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400"
          >
            05 — Scale
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            One account.
            <br />
            <span className="text-emerald-400">Every shop.</span>
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-8 text-lg leading-relaxed text-white/50"
          >
            Add branches, assign staff, set per-role permissions — each shop is fully isolated,
            each user gets exactly the access their role demands. Grow from one till to twenty
            without changing platforms.
          </motion.p>
          <motion.ul variants={reduced ? {} : stagger} className="mb-8 space-y-3">
            {FEATURES.map((f) => (
              <motion.li
                key={f}
                variants={reduced ? {} : fadeUp}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                {f}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={reduced ? {} : fadeUp}>
            <button className="flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all hover:gap-3">
              See how multi-tenancy works
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>

        {/* Visual — shop switcher */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="space-y-3"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-4 text-sm font-medium text-white/30">
            Switch shop
          </motion.p>
          {SHOPS.map((shop) => (
            <motion.div
              key={shop.name}
              variants={reduced ? {} : slideLeft}
              whileHover={reduced ? {} : { y: -3, transition: { duration: 0.2 } }}
              className="flex cursor-pointer items-center justify-between rounded-2xl p-5 transition-all"
              style={{
                background: shop.active ? 'rgba(79,70,229,0.15)' : 'rgba(255,255,255,0.04)',
                border: shop.active
                  ? '1px solid rgba(79,70,229,0.4)'
                  : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{
                    background: shop.active
                      ? 'linear-gradient(135deg,#4f46e5,#7c3aed)'
                      : 'rgba(255,255,255,0.1)',
                  }}
                >
                  {shop.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{shop.name}</p>
                  <p className="text-xs text-white/40">{shop.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className="text-sm font-bold"
                  style={{ color: shop.active ? '#a5b4fc' : '#34d399' }}
                >
                  {shop.revenue}
                </p>
                {shop.active && <p className="text-xs text-indigo-400">Active</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
