'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const CHANNELS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+254 700 123 456',
    description: 'Fastest response. Talk to a product specialist about your shop setup.',
    badge: 'Recommended',
    badgeColor: 'text-emerald-400',
    badgeBg: 'rgba(52,211,153,0.1)',
    iconColor: '#25d366',
    iconBg: 'rgba(37,211,102,0.12)',
    hours: 'Mon–Sat · 8 AM–8 PM EAT',
    action: 'https://wa.me/254700123456',
    actionLabel: 'Open WhatsApp',
  },
  {
    icon: Mail,
    label: 'Sales',
    value: 'sales@dextra.co.ke',
    description: 'Pricing, custom plans, team onboarding, and enterprise questions.',
    badge: '< 2 hr reply',
    badgeColor: 'text-indigo-400',
    badgeBg: 'rgba(129,140,248,0.1)',
    iconColor: '#818cf8',
    iconBg: 'rgba(79,70,229,0.12)',
    hours: 'Mon–Fri · 8 AM–6 PM EAT',
    action: 'mailto:sales@dextra.co.ke',
    actionLabel: 'Send email',
  },
  {
    icon: Mail,
    label: 'Support',
    value: 'support@dextra.co.ke',
    description: 'Technical issues, M-Pesa integrations, KRA eTIMS setup, and billing.',
    badge: '< 4 hr reply',
    badgeColor: 'text-amber-400',
    badgeBg: 'rgba(251,191,36,0.1)',
    iconColor: '#fbbf24',
    iconBg: 'rgba(251,191,36,0.1)',
    hours: 'Mon–Fri · 8 AM–6 PM EAT',
    action: 'mailto:support@dextra.co.ke',
    actionLabel: 'Send email',
  },
  {
    icon: MapPin,
    label: 'Nairobi Office',
    value: 'Westlands, Nairobi',
    description: 'Delta House, Waiyaki Way. Book a demo and come meet the team in person.',
    badge: 'By appointment',
    badgeColor: 'text-white/40',
    badgeBg: 'rgba(255,255,255,0.06)',
    iconColor: '#f87171',
    iconBg: 'rgba(248,113,113,0.1)',
    hours: 'Mon–Fri · 9 AM–5 PM EAT',
    action: 'https://maps.google.com/?q=Westlands+Nairobi',
    actionLabel: 'Get directions',
  },
] as const

export function ContactChannels() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-8 md:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={reduced ? {} : stagger}
        className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2"
      >
        {CHANNELS.map((channel) => {
          const Icon = channel.icon
          return (
            <motion.div
              key={channel.label}
              variants={reduced ? {} : fadeUp}
              whileHover={reduced ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Subtle hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${channel.iconColor}08 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                {/* Icon */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: channel.iconBg }}
                >
                  <Icon className="h-5 w-5" style={{ color: channel.iconColor }} />
                </div>

                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-white">{channel.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${channel.badgeColor}`}
                      style={{ background: channel.badgeBg }}
                    >
                      {channel.badge}
                    </span>
                  </div>

                  <p className="mb-1 text-base font-semibold text-white/80">{channel.value}</p>
                  <p className="mb-3 text-sm leading-relaxed text-white/45">{channel.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <Clock className="h-3.5 w-3.5" />
                      {channel.hours}
                    </div>
                    <a
                      href={channel.action}
                      target={channel.action.startsWith('http') ? '_blank' : undefined}
                      rel={channel.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs font-semibold transition-colors duration-200 hover:text-white"
                      style={{ color: channel.iconColor }}
                    >
                      {channel.actionLabel} →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
