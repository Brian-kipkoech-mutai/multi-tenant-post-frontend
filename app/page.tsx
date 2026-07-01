import { MarketingNav } from '@/components/marketing/nav'
import { HeroSection } from '@/components/marketing/hero'
import { TrustStrip } from '@/components/marketing/trust-strip'
import { ChapterSell } from '@/components/marketing/chapter-sell'
import { ChapterInventory } from '@/components/marketing/chapter-inventory'
import { ChapterTax } from '@/components/marketing/chapter-tax'
import { ChapterAnywhere } from '@/components/marketing/chapter-anywhere'
import { ChapterAI } from '@/components/marketing/chapter-ai'
import { ChapterScale } from '@/components/marketing/chapter-scale'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { Testimonial } from '@/components/marketing/testimonial'
import { CtaSection } from '@/components/marketing/cta-section'
import { MarketingFooter } from '@/components/marketing/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <MarketingNav />
      <main>
        <HeroSection />
        <TrustStrip />
        <ChapterAI />
        <ChapterSell />
        <ChapterInventory />
        <ChapterTax />
        <ChapterAnywhere />
        <ChapterScale />
        <FeatureGrid />
        <Testimonial />
        <CtaSection />
      </main>
      <MarketingFooter />
    </div>
  )
}
