'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ROUTES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/animations'

const FAQS = [
  {
    q: 'Is there really a 30-day free trial with no credit card?',
    a: 'Yes. You get full access to your chosen plan for 30 days, no credit card required. At the end of the trial you can subscribe via M-Pesa Paybill or card — or simply stop. We will not charge you anything without your explicit action.',
  },
  {
    q: 'Do you take a percentage of my M-Pesa transactions?',
    a: 'No. Never. Safaricom charges per-transaction fees on STK Push, Paybill, and Buy Goods — those fees are passed through to you at exact cost. Dextra does not add any markup or take any percentage of your sales. Your customer\'s money goes straight from their M-Pesa wallet to your registered Till or Paybill number.',
  },
  {
    q: 'What is the WAC inventory engine and why does it matter?',
    a: 'WAC stands for Weighted Average Cost — the standard inventory valuation method required by Kenya\'s accounting standards. When you restock a product at different prices over time, the WAC engine automatically recalculates the average cost per unit. This gives you accurate margin data (what you actually paid on average, not just the last purchase price) and ensures your financial reporting is consistent and audit-ready.',
  },
  {
    q: 'Is KRA eTIMS compliance included on all plans?',
    a: 'Yes. KRA eTIMS fiscal receipts and CUIN generation are included on every plan, including Starter. This is a legal requirement for any registered business in Kenya — we believe it should never be paywalled. Dextra\'s integration with the KRA OSCU also queues receipts offline and retries automatically when your internet reconnects, so a slow connection never means a failed submission.',
  },
  {
    q: 'Can I manage multiple shops from one account?',
    a: 'Yes — this is one of Dextra\'s core strengths. The Growth plan supports up to 5 shops, each with their own inventory, users, M-Pesa Till or Paybill identity, and KRA registration. From the owner dashboard you see all shops in one view: total revenue, per-shop performance, cross-shop stock, and consolidated reports. Enterprise supports unlimited locations.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. You can upgrade at any time — your new plan takes effect immediately and you\'re billed the prorated difference for the rest of the month. Downgrading takes effect at the next billing cycle. If you downgrade from Growth to Starter and have more than 1 shop or 3 users configured, we\'ll walk you through what needs to be adjusted before the change is applied.',
  },
  {
    q: 'Do I need technical knowledge to set up Dextra?',
    a: 'No. The average shop owner is live within 15 minutes. You add your products (or import via CSV), configure your M-Pesa Paybill or Till details, and you\'re ready to make a sale. Our support team can assist with initial KRA eTIMS registration if you don\'t already have an OSCU. Enterprise plans include on-site onboarding.',
  },
  {
    q: 'When will Uganda and Tanzania support go live?',
    a: 'Uganda TRA (Tax Registration Authority) compliance is planned for Q2 2026 — available on Enterprise plans first, then rolled out to Growth. Tanzania ZRA integration is on the roadmap beyond that. Both will use the same architecture as our Kenya eTIMS integration. If you are operating in Uganda or Tanzania today, talk to sales about early access to the beta.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data is yours. If you cancel, you can export all transaction history, product catalog, and customer records as CSV before your subscription ends. We retain your data for 90 days after cancellation in case you decide to return. After 90 days it is permanently deleted.',
  },
]

export function PricingFaqSection() {
  const reduced = useReducedMotion()

  return (
    <section className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-12 text-center"
        >
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ lineHeight: 1.12 }}
          >
            Honest answers
            <br />
            <span className="text-gradient-brand">to real questions.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={reduced ? {} : fadeUp}
        >
          <Accordion type="multiple" className="space-y-3">
            {FAQS.map(({ q, a }, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="glass rounded-xl border-white/[0.08] px-6"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-white hover:text-white/90 hover:no-underline [&>svg]:text-indigo-400">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-white/55">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? {} : fadeUp}
          className="mt-10 text-center text-sm text-white/35"
        >
          Still have questions?{' '}
          <Link
            href={ROUTES.login}
            className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300"
          >
            Talk to us
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
