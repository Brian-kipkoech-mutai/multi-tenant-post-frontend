import type { Metadata } from 'next'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { CtaSection } from '@/components/marketing/cta-section'
import { ContactHero } from '@/components/marketing/contact/contact-hero'
import { ContactChannels } from '@/components/marketing/contact/contact-channels'
import { ContactForm } from '@/components/marketing/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us — Dextra POS',
  description:
    'Get in touch with the Dextra team. Sales, support, billing, or partnerships — we respond to every message. WhatsApp, email, or office visit in Nairobi.',
  openGraph: {
    title: 'Contact Us — Dextra POS',
    description:
      'Talk to the Dextra team about your shop setup, M-Pesa integration, KRA eTIMS, or anything else. Real people, real replies.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#080814', color: '#f8fafc' }}>
      <MarketingNav />

      <main>
        <ContactHero />

        <div className="section-divider" />
        <ContactChannels />

        <div className="section-divider" />
        <ContactForm />

        <div className="section-divider" />
        <CtaSection />
      </main>

      <MarketingFooter />
    </div>
  )
}
