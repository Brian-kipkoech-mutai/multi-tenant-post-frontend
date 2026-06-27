'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { fadeUp, stagger } from '@/lib/animations'

const FAQS = [
  {
    q: 'Do I need a KRA PIN to use Dextra?',
    a: 'No. KRA eTIMS fiscal filing is optional and activates only if you configure your KRA credentials per shop. Shops without a KRA PIN run with EXEMPT fiscal status — fully functional, no filing required.',
  },
  {
    q: 'Does Dextra hold my customers\' money?',
    a: 'Never. The money flows directly from your customer\'s M-Pesa wallet to your own Paybill shortcode or Till Number. Dextra facilitates the communication with Safaricom\'s Daraja API — we are never in the payment chain.',
  },
  {
    q: 'How many shops can I manage?',
    a: 'Unlimited. Add shops, configure per-shop M-Pesa credentials, set up independent KRA credentials for each, assign your team with per-shop roles. Every shop is fully isolated — one shop\'s data cannot touch another\'s.',
  },
  {
    q: 'Is my data and credentials safe?',
    a: 'All sensitive credentials (M-Pesa consumer keys, KRA credentials) are encrypted at rest using AES-256-GCM with a unique IV per entry. They are never returned in API responses — only masked summaries. The encryption key is stored separately from the data.',
  },
  {
    q: 'What happens if the KRA API goes down?',
    a: 'Your receipt is issued immediately — the cashier is never blocked by a third-party API. KRA submission runs in the background via a job queue with 3 auto-retries and exponential backoff. Failed receipts are visible so you know when manual follow-up is needed.',
  },
  {
    q: 'Can I use Dextra without M-Pesa?',
    a: 'Yes. Cash sales work completely independently. M-Pesa integration is optional per transaction — you can choose any combination of payment methods in a single sale.',
  },
  {
    q: 'What payment methods does Dextra support?',
    a: 'Cash, M-Pesa STK Push (Daraja), M-Pesa Paybill manual confirmation, and M-Pesa Buy Goods (Till Number) manual confirmation. All four are in a single unified sale flow.',
  },
  {
    q: 'Does Dextra work in Uganda and Tanzania?',
    a: 'Currently, Dextra is optimised for Kenya — M-Pesa Daraja STK and KRA eTIMS. The architecture is built to extend: Uganda (URA e-Receipt) and Tanzania (TRA) are on the roadmap. Adding a new country is a new provider, not a rewrite.',
  },
] as const

export function ProductFaqSection() {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : stagger}
          className="mb-12 text-center"
        >
          <motion.p variants={reduced ? {} : fadeUp} className="mb-3 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Common questions
          </motion.p>
          <motion.h2 variants={reduced ? {} : fadeUp} className="text-4xl font-extrabold tracking-tight text-white">
            FAQ
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reduced ? {} : fadeUp}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-1 data-[state=open]:border-indigo-600/25 data-[state=open]:bg-indigo-600/5"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-white hover:text-indigo-400 hover:no-underline [&[data-state=open]]:text-indigo-400">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-white/55 pb-4">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
