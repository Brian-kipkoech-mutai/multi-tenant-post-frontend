'use client'

import { useState, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import {
  Rocket,
  CreditCard,
  FileCheck,
  Users,
  Package,
  BarChart2,
  Store,
  Settings,
  Search,
  ChevronRight,
  Clock,
  ArrowRight,
  X,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { CATEGORIES, DOCS, getDocsByCategory } from '@/lib/docs/content'
import type { DocCategory } from '@/lib/docs/types'
import { fadeUp, stagger } from '@/lib/animations'

// ─────────────────────────────────────────────────────────────────────────────
// Per-category visual config — accent color, card bg, hover glow
// ─────────────────────────────────────────────────────────────────────────────

interface CategoryStyle {
  Icon: React.FC<{ className?: string }>
  cardBg: string
  cardBorder: string
  iconRing: string
  iconText: string
  hoverGlow: string
}

const CATEGORY_STYLES: Record<DocCategory, CategoryStyle> = {
  'getting-started': {
    Icon: Rocket,
    cardBg: 'bg-indigo-600/8',
    cardBorder: 'border-indigo-600/20',
    iconRing: 'bg-indigo-600/15',
    iconText: 'text-indigo-400',
    hoverGlow: '0 20px 60px rgba(79,70,229,0.22)',
  },
  payments: {
    Icon: CreditCard,
    cardBg: 'bg-[#00a550]/8',
    cardBorder: 'border-[#00a550]/20',
    iconRing: 'bg-[#00a550]/15',
    iconText: 'text-[#00a550]',
    hoverGlow: '0 20px 60px rgba(0,165,80,0.2)',
  },
  'tax-compliance': {
    Icon: FileCheck,
    cardBg: 'bg-red-500/8',
    cardBorder: 'border-red-500/20',
    iconRing: 'bg-red-500/15',
    iconText: 'text-red-400',
    hoverGlow: '0 20px 60px rgba(239,68,68,0.2)',
  },
  'team-access': {
    Icon: Users,
    cardBg: 'bg-violet-600/8',
    cardBorder: 'border-violet-600/20',
    iconRing: 'bg-violet-600/15',
    iconText: 'text-violet-400',
    hoverGlow: '0 20px 60px rgba(124,58,237,0.2)',
  },
  inventory: {
    Icon: Package,
    cardBg: 'bg-amber-500/8',
    cardBorder: 'border-amber-500/20',
    iconRing: 'bg-amber-500/15',
    iconText: 'text-amber-400',
    hoverGlow: '0 20px 60px rgba(245,158,11,0.2)',
  },
  'dashboard-reports': {
    Icon: BarChart2,
    cardBg: 'bg-emerald-500/8',
    cardBorder: 'border-emerald-500/20',
    iconRing: 'bg-emerald-500/15',
    iconText: 'text-emerald-400',
    hoverGlow: '0 20px 60px rgba(16,185,129,0.2)',
  },
  'multi-shop': {
    Icon: Store,
    cardBg: 'bg-indigo-600/8',
    cardBorder: 'border-indigo-600/20',
    iconRing: 'bg-indigo-600/15',
    iconText: 'text-indigo-400',
    hoverGlow: '0 20px 60px rgba(79,70,229,0.22)',
  },
  'account-settings': {
    Icon: Settings,
    cardBg: 'bg-white/4',
    cardBorder: 'border-white/10',
    iconRing: 'bg-white/10',
    iconText: 'text-white/60',
    hoverGlow: '0 20px 60px rgba(255,255,255,0.08)',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Search results list
// ─────────────────────────────────────────────────────────────────────────────

interface SearchResultsProps {
  query: string
  onClear: () => void
}

function SearchResults({ query, onClear }: SearchResultsProps): React.JSX.Element {
  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return DOCS.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.includes(q),
    ).slice(0, 8)
  }, [query])

  if (!results.length) {
    return (
      <div className="mt-4 text-center text-sm text-white/30">
        No results for &ldquo;{query}&rdquo;. Try a different keyword.
      </div>
    )
  }

  return (
    <ul className="mt-4 space-y-2">
      {results.map((doc) => {
        const cat = CATEGORIES.find((c) => c.id === doc.category)
        return (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              onClick={onClear}
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 transition-colors hover:border-indigo-600/30 hover:bg-indigo-600/8"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-white/85">{doc.title}</p>
                <p className="mt-0.5 text-xs text-white/35">{cat?.label}</p>
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-white/20">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {doc.readTime}m
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Category card — shadcn Card with per-category accent + hover glow
// ─────────────────────────────────────────────────────────────────────────────

interface CategoryCardProps {
  id: DocCategory
  label: string
  description: string
  docCount: number
  reduced: boolean
}

function CategoryCard({
  id,
  label,
  description,
  docCount,
  reduced,
}: CategoryCardProps): React.JSX.Element {
  const style = CATEGORY_STYLES[id]
  const { Icon } = style

  return (
    <motion.div
      whileHover={reduced ? {} : { y: -6, boxShadow: style.hoverGlow }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Link href={`/docs#${id}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl">
        <Card
          className={`${style.cardBg} ${style.cardBorder} h-full cursor-pointer border transition-colors duration-300 hover:brightness-110`}
        >
          <CardContent className="flex h-full flex-col gap-4 p-5">
            {/* Icon + count row */}
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${style.iconRing}`}>
                <Icon className={`h-5 w-5 ${style.iconText}`} aria-hidden="true" />
              </div>
              <span className="text-xs text-white/25">
                {docCount} {docCount === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {/* Copy */}
            <div className="flex-1">
              <h3 className="mb-1.5 text-sm font-bold text-white/90">{label}</h3>
              <p className="text-xs leading-relaxed text-white/40">{description}</p>
            </div>

            {/* Browse link hint */}
            <div className={`flex items-center gap-1 text-xs font-medium ${style.iconText}`}>
              Browse
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Article row inside each category section
// ─────────────────────────────────────────────────────────────────────────────

interface ArticleLinkProps {
  slug: string
  title: string
  description: string
  readTime: number
}

function ArticleLink({ slug, title, description, readTime }: ArticleLinkProps): React.JSX.Element {
  return (
    <Link
      href={`/docs/${slug}`}
      className="group flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3.5 transition-all duration-200 hover:border-white/15 hover:bg-white/6"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
          {title}
        </p>
        <p className="mt-0.5 line-clamp-1 text-xs text-white/35">{description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1 pt-0.5 text-xs text-white/20">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {readTime}m
        <ArrowRight className="ml-1 h-3.5 w-3.5 text-white/15 transition-all group-hover:translate-x-0.5 group-hover:text-white/40" aria-hidden="true" />
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Hub export
// ─────────────────────────────────────────────────────────────────────────────

export function DocsHub(): React.JSX.Element {
  const reduced = useReducedMotion() ?? false
  const [query, setQuery] = useState('')

  return (
    <div className="relative overflow-hidden px-4 pb-24 pt-32 md:px-6">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px] [background:radial-gradient(circle,#4f46e5_0%,transparent_65%)]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduced ? {} : stagger}
          className="mb-14 text-center"
        >
          {/* Eyebrow — same Sparkles + label pattern as chapter-ai.tsx */}
          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Documentation
          </motion.p>

          <motion.h1
            variants={reduced ? {} : fadeUp}
            className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl"
          >
            How can we help?
          </motion.h1>

          <motion.p
            variants={reduced ? {} : fadeUp}
            className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/45"
          >
            Guides for shop owners, managers, and IT teams setting up Dextra.
            From first sale to KRA compliance.
          </motion.p>

          {/* Search */}
          <motion.div variants={reduced ? {} : fadeUp} className="mx-auto max-w-lg">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search guides..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-11 pr-11 text-sm text-white placeholder:text-white/25 focus:border-indigo-600/50 focus:outline-none focus:ring-1 focus:ring-indigo-600/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {query.trim().length > 1 && (
              <SearchResults query={query} onClear={() => setQuery('')} />
            )}
          </motion.div>
        </motion.div>

        {!query.trim() && (
          <>
            {/* ── Category card grid ──────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={reduced ? {} : stagger}
              className="mb-20 grid grid-cols-2 gap-3 md:grid-cols-4"
            >
              {CATEGORIES.map((cat) => (
                <motion.div key={cat.id} variants={reduced ? {} : fadeUp}>
                  <CategoryCard
                    id={cat.id}
                    label={cat.label}
                    description={cat.description}
                    docCount={getDocsByCategory(cat.id).length}
                    reduced={reduced}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* ── Browse by category (with anchor IDs for card links) ─── */}
            <div className="space-y-14">
              {CATEGORIES.map((cat) => {
                const docs = getDocsByCategory(cat.id)
                const style = CATEGORY_STYLES[cat.id]
                const { Icon } = style
                if (!docs.length) return null

                return (
                  <motion.section
                    key={cat.id}
                    id={cat.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={reduced ? {} : stagger}
                    className="scroll-mt-28"
                  >
                    {/* Section header */}
                    <motion.div
                      variants={reduced ? {} : fadeUp}
                      className="mb-5 flex items-center gap-3"
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${style.iconRing}`}>
                        <Icon className={`h-4 w-4 ${style.iconText}`} aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white/80">{cat.label}</h2>
                        <p className="text-xs text-white/30">
                          {docs.length} {docs.length === 1 ? 'guide' : 'guides'}
                        </p>
                      </div>
                    </motion.div>

                    {/* Article list */}
                    <motion.div
                      variants={reduced ? {} : stagger}
                      className="grid gap-2 sm:grid-cols-2"
                    >
                      {docs.map((doc) => (
                        <motion.div key={doc.slug} variants={reduced ? {} : fadeUp}>
                          <ArticleLink
                            slug={doc.slug}
                            title={doc.title}
                            description={doc.description}
                            readTime={doc.readTime}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>
                )
              })}
            </div>
          </>
        )}

      </div>
    </div>
  )
}
