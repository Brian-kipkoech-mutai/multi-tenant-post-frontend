import type { Metadata } from 'next'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { AboutPageContent } from '@/components/marketing/about/about-page-content'
import { CtaSection } from '@/components/marketing/cta-section'

export const metadata: Metadata = {
  title: 'About Dextra — Modern POS for East African Retail',
  description:
    'Learn how Dextra helps shop owners run sales, inventory, payments, and compliance with one calm, local-first platform.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <MarketingNav />
      <AboutPageContent />
      <CtaSection />
      <MarketingFooter />
    </div>
  )
}
