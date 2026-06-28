import type { Metadata } from 'next'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { CtaSection } from '@/components/marketing/cta-section'
import { PricingPageClient } from '@/components/marketing/pricing/pricing-page-client'
import { PricingComparison } from '@/components/marketing/pricing/pricing-comparison'
import { PricingSocialProof } from '@/components/marketing/pricing/pricing-social-proof'
import { PricingFaqSection } from '@/components/marketing/pricing/pricing-faq'

export const metadata: Metadata = {
  title: 'Pricing — Dextra POS',
  description:
    'Simple, flat pricing plans for East African retail. No markup on M-Pesa fees. KRA eTIMS compliance on every plan. Start free for 30 days.',
  openGraph: {
    title: 'Pricing — Dextra POS',
    description:
      'Simple, flat pricing plans for East African retail. No markup on M-Pesa fees. Start free for 30 days.',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ background: '#080814', color: '#f8fafc' }}>
      <MarketingNav />

      <main>
        <PricingPageClient />

        <div className="section-divider" />
        <PricingComparison />

        <div className="section-divider" />
        <PricingSocialProof />

        <div className="section-divider" />
        <PricingFaqSection />

        <div className="section-divider" />
        <CtaSection />
      </main>

      <MarketingFooter />
    </div>
  )
}
