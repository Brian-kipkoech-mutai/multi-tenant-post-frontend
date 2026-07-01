'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Users, ArrowRightLeft, FileText, CheckCircle } from 'lucide-react'
import { fadeUp, slideRight, slideLeft, stagger } from '@/lib/animations'

const ROLES = [
  {
    role: 'Owner',
    permissions: ['Full shop access', 'Manage staff & roles', 'View all reports', 'Edit settings & credentials', 'Cross-shop view'],
    accent: 'border-indigo-600/30 bg-indigo-600/10 text-indigo-400',
    badge: 'bg-indigo-600/20 text-indigo-400',
  },
  {
    role: 'Manager',
    permissions: ['Process sales', 'Manage inventory', 'View reports', 'Manage customers', 'View staff list'],
    accent: 'border-violet-600/30 bg-violet-600/10 text-violet-400',
    badge: 'bg-violet-600/20 text-violet-400',
  },
  {
    role: 'Cashier',
    permissions: ['Process sales', 'View products', 'Create customers', 'View own sales', 'M-Pesa STK push'],
    accent: 'border-white/[0.1] bg-white/[0.04] text-white/60',
    badge: 'bg-white/[0.08] text-white/50',
  },
] as const

const SHOPS = [
  { name: 'Westlands Shop', city: 'Nairobi', staff: 5, status: 'Active', active: true },
  { name: 'Karen Branch', city: 'Nairobi', staff: 3, status: 'Active', active: false },
  { name: 'CBD Store', city: 'Nairobi', staff: 2, status: 'Active', active: false },
] as const

const MULTI_SHOP_POINTS = [
  {
    icon: ArrowRightLeft,
    title: 'One account. Unlimited shops.',
    body: 'Add shops without creating new logins. Your team switches active context in one tap. JWT updates — data is always scoped to the selected shop.',
  },
  {
    icon: Users,
    title: 'Same person. Different roles in each shop.',
    body: 'Alice can be Manager in Westlands and Cashier in CBD. Roles are per user-shop assignment, not global. No compromises on access control.',
  },
  {
    icon: FileText,
    title: 'Audit logs on every sensitive action.',
    body: 'Sales created, cancelled, returned. Staff added or removed. Credentials updated. Settings changed. Every action attributed to a user and timestamp.',
  },
] as const

export function ProductMultiShopSection() {
  const reduced = useReducedMotion()

  return (
    <section id="multi-shop" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_75%_60%,#10b981_0%,transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-16 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-emerald-400">
            05 — Multi-Shop & Teams
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grow without
            <br />
            switching platforms.
          </motion.h2>
          <motion.p variants={reduced ? {} : fadeUp} className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            From one shop to twenty — same platform, same workflows. Each shop is fully isolated.
            Your team, your roles, your permissions.
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : stagger}
            className="space-y-6"
          >
            {MULTI_SHOP_POINTS.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={reduced ? {} : slideRight} className="flex gap-4">
                <div className="mt-0.5 shrink-0 rounded-lg border border-white/8 bg-white/4 p-2">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-white/50">{body}</p>
                </div>
              </motion.div>
            ))}

            {/* RBAC permission grid */}
            <motion.div variants={reduced ? {} : fadeUp}>
              <div className="mt-4 space-y-3">
                {ROLES.map(({ role, permissions, accent, badge }) => (
                  <div key={role} className={`rounded-xl border p-4 ${accent}`}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge}`}>{role}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {permissions.map((p) => (
                        <div key={p} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 opacity-60" />
                          <span className="text-xs opacity-70">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Shop switcher mockup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reduced ? {} : slideLeft}
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="border-b border-white/[0.07] px-5 py-4">
                <p className="text-sm font-semibold text-white">My Shops</p>
                <p className="text-xs text-white/35 mt-0.5">Switch active shop — context updates instantly</p>
              </div>

              <div className="divide-y divide-white/5 px-5">
                {SHOPS.map((shop) => (
                  <div
                    key={shop.name}
                    className={`flex items-center justify-between py-4 ${shop.active ? 'opacity-100' : 'opacity-70'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${shop.active ? 'bg-linear-to-br from-indigo-600 to-violet-700 text-white' : 'bg-white/6 text-white/50'}`}>
                        {shop.name.charAt(0)}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${shop.active ? 'text-white' : 'text-white/60'}`}>{shop.name}</p>
                        <p className="text-xs text-white/35">{shop.city} · {shop.staff} staff</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {shop.active ? (
                        <span className="rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Active</span>
                      ) : (
                        <button type="button" className="rounded-lg border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/8 hover:text-white">
                          Switch
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/7 px-5 py-4">
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/10 py-2.5 text-sm text-white/35 transition-colors hover:border-indigo-600/30 hover:text-indigo-400">
                  <span>+ Add new shop</span>
                </button>
              </div>
            </div>

            {/* Isolation callout */}
            <motion.div
              variants={reduced ? {} : fadeUp}
              className="mt-4 rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-4"
            >
              <p className="text-xs font-semibold text-emerald-400 mb-1">Fully isolated tenancy</p>
              <p className="text-xs text-white/45">
                Every query is scoped to the active shop at the application layer. One shop&apos;s data cannot bleed into another&apos;s — even for the same user account.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
