import type { Metadata } from 'next'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { CtaSection } from '@/components/marketing/cta-section'
import { IntegrationsHero } from '@/components/marketing/integrations/integrations-hero'
import { IntegrationsLiveSection } from '@/components/marketing/integrations/integrations-live'
import { IntegrationsAiSection } from '@/components/marketing/integrations/integrations-ai'
import { IntegrationsRoadmapSection } from '@/components/marketing/integrations/integrations-roadmap'

export const metadata: Metadata = {
  title: 'Integrations — Dextra POS',
  description:
    'Direct integrations with Safaricom M-Pesa, KRA eTIMS, Firebase, and more. No aggregators, no middlemen. Built for East African retail.',
  openGraph: {
    title: 'Integrations — Dextra POS',
    description:
      'M-Pesa, KRA eTIMS, AI assistant, WhatsApp, and more — the full ecosystem connecting your shop to East Africa\'s financial infrastructure.',
  },
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#080814', color: '#f8fafc' }}>
      <MarketingNav />

      <main>
        <IntegrationsHero />

        <div className="section-divider" />
        <IntegrationsAiSection />

        <div className="section-divider" />
        <IntegrationsLiveSection />

        <div className="section-divider" />
        <IntegrationsRoadmapSection />

        <div className="section-divider" />
        <CtaSection />
      </main>

      <MarketingFooter />
    </div>
  )
}
