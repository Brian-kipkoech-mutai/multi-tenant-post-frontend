import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'
import { DocPage } from '@/components/marketing/docs/doc-page'
import { getDocBySlug, getAllSlugs } from '@/lib/docs/content'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): Array<{ slug: string }> {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc) return {}
  return {
    title: `${doc.title} — Dextra Docs`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} — Dextra Docs`,
      description: doc.description,
    },
  }
}

export default async function DocPageRoute({ params }: Props): Promise<React.JSX.Element> {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc) notFound()

  return (
    <div className="min-h-screen bg-[#080814] text-slate-50">
      <MarketingNav />
      <main>
        <DocPage doc={doc} />
      </main>
      <MarketingFooter />
    </div>
  )
}
