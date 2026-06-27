import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { CtaSection } from '@/components/marketing/cta-section'
import { ProductHero } from '@/components/marketing/product/product-hero'
import { ProductStickyNav } from '@/components/marketing/product/product-sticky-nav'
import { ProductSalesSection } from '@/components/marketing/product/product-sales'
import { ProductInventorySection } from '@/components/marketing/product/product-inventory'
import { ProductComplianceSection } from '@/components/marketing/product/product-compliance'
import { ProductOwnerAppSection } from '@/components/marketing/product/product-owner-app'
import { ProductMultiShopSection } from '@/components/marketing/product/product-multi-shop'
import { ProductIntegrationsSection } from '@/components/marketing/product/product-integrations'
import { ProductComparisonSection } from '@/components/marketing/product/product-comparison'
import { ProductFaqSection } from '@/components/marketing/product/product-faq'

export const metadata = {
  title: 'Product — Dextra POS',
  description:
    'Sales, inventory, KRA eTIMS compliance, and real-time business intelligence — built around M-Pesa and East African retail from day one.',
}

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ background: '#080814', color: '#f8fafc' }}>
      <MarketingNav />
      <ProductStickyNav />

      <main>
        <ProductHero />

        <div className="section-divider" />
        <ProductSalesSection />

        <div className="section-divider" />
        <ProductInventorySection />

        <div className="section-divider" />
        <ProductComplianceSection />

        <div className="section-divider" />
        <ProductOwnerAppSection />

        <div className="section-divider" />
        <ProductMultiShopSection />

        <div className="section-divider" />
        <ProductIntegrationsSection />

        <div className="section-divider" />
        <ProductComparisonSection />

        <div className="section-divider" />
        <ProductFaqSection />

        <div className="section-divider" />
        <CtaSection />
      </main>

      <MarketingFooter />
    </div>
  )
}
