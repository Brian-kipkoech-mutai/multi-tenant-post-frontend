import type { Metadata } from 'next'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { DocsHub } from '@/components/marketing/docs/docs-hub'

export const metadata: Metadata = {
  title: 'Documentation — Dextra POS',
  description:
    'Guides for shop owners, managers, and IT teams setting up Dextra. M-Pesa, KRA eTIMS, team management, inventory, and more.',
  openGraph: {
    title: 'Dextra Docs',
    description:
      'Step-by-step guides for East African shop owners using Dextra POS.',
  },
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <MarketingNav />
      <main>
        <DocsHub />
      </main>
      <MarketingFooter />
    </div>
  )
}
