'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  Calendar,
  ChevronRight,
  Info,
  TriangleAlert,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
} from 'lucide-react'
import { DOCS, getCategoryMeta } from '@/lib/docs/content'
import type { Doc, DocSection } from '@/lib/docs/types'
import { fadeUp, stagger } from '@/lib/animations'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// Section renderers
// ─────────────────────────────────────────────────────────────────────────────

function SectionBody({ body }: { body: string | string[] }): React.JSX.Element {
  const paragraphs = Array.isArray(body) ? body : [body]
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-white/60">
          {p}
        </p>
      ))}
    </div>
  )
}

function SectionSteps({ steps }: { steps: NonNullable<DocSection['steps']> }): React.JSX.Element {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-xs font-bold text-indigo-400">
            {i + 1}
          </span>
          <div className="flex-1">
            <p className="mb-1 text-sm font-semibold text-white/80">{step.title}</p>
            <p className="text-sm leading-relaxed text-white/50">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function SectionTable({
  table,
}: {
  table: NonNullable<DocSection['table']>
}): React.JSX.Element {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/8">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/8 bg-white/4">
            {table.headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/40"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-white/60">
                  {cell || <span className="text-white/20">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Callout({
  type,
  text,
}: {
  type: 'note' | 'warning' | 'tip'
  text: string
}): React.JSX.Element {
  const map = {
    note: {
      Icon: Info,
      bg: 'bg-indigo-600/10 border-indigo-600/25',
      icon: 'text-indigo-400',
      label: 'Note',
      labelColor: 'text-indigo-300',
    },
    warning: {
      Icon: TriangleAlert,
      bg: 'bg-amber-500/10 border-amber-500/25',
      icon: 'text-amber-400',
      label: 'Important',
      labelColor: 'text-amber-300',
    },
    tip: {
      Icon: Lightbulb,
      bg: 'bg-emerald-500/10 border-emerald-500/25',
      icon: 'text-emerald-400',
      label: 'Tip',
      labelColor: 'text-emerald-300',
    },
  }

  const { Icon, bg, icon, label, labelColor } = map[type]

  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${bg}`}>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${icon}`} aria-hidden="true" />
      <div>
        <p className={`mb-1 text-xs font-bold uppercase tracking-wider ${labelColor}`}>{label}</p>
        <p className="text-sm leading-relaxed text-white/60">{text}</p>
      </div>
    </div>
  )
}

function DocSection({
  section,
  index,
}: {
  section: DocSection
  index: number
}): React.JSX.Element {
  const id = section.heading ? slugifyHeading(section.heading) : `section-${index}`

  return (
    <section id={id} className="scroll-mt-24">
      {section.heading && (
        <h2 className="mb-5 text-xl font-bold text-white/90">{section.heading}</h2>
      )}
      <div className="space-y-5">
        {section.body && <SectionBody body={section.body} />}
        {section.steps && <SectionSteps steps={section.steps} />}
        {section.table && <SectionTable table={section.table} />}
        {section.note && <Callout type="note" text={section.note} />}
        {section.warning && <Callout type="warning" text={section.warning} />}
        {section.tip && <Callout type="tip" text={section.tip} />}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// TOC sidebar
// ─────────────────────────────────────────────────────────────────────────────

function TableOfContents({
  sections,
  activeId,
}: {
  sections: DocSection[]
  activeId: string
}): React.JSX.Element {
  const headings = sections.filter((s) => s.heading)

  return (
    <nav aria-label="Table of contents">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">
        In this article
      </p>
      <ul className="space-y-1">
        {headings.map((s, i) => {
          const id = slugifyHeading(s.heading!)
          const isActive = id === activeId
          return (
            <li key={i}>
              <a
                href={`#${id}`}
                className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-indigo-600/15 font-medium text-indigo-400'
                    : 'text-white/35 hover:bg-white/4 hover:text-white/70'
                }`}
              >
                {s.heading}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Related docs
// ─────────────────────────────────────────────────────────────────────────────

function RelatedDocs({ slugs }: { slugs: string[] }): React.JSX.Element | null {
  const related = slugs
    .map((s) => DOCS.find((d) => d.slug === s))
    .filter(Boolean) as typeof DOCS

  if (!related.length) return null

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/25">
        Related guides
      </p>
      <ul className="space-y-1.5">
        {related.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              className="group flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-white/35 transition-colors hover:bg-white/4 hover:text-white/70"
            >
              <ChevronRight
                className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpful feedback widget
// ─────────────────────────────────────────────────────────────────────────────

function HelpfulWidget(): React.JSX.Element {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null)

  return (
    <div className="mt-10 rounded-2xl border border-white/8 bg-white/4 px-6 py-5 text-center">
      {voted ? (
        <div className="flex items-center justify-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Thanks for the feedback!
        </div>
      ) : (
        <>
          <p className="mb-4 text-sm text-white/40">Was this guide helpful?</p>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setVoted('yes')}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/50 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <ThumbsUp className="h-4 w-4" aria-hidden="true" />
              Yes, it helped
            </button>
            <button
              type="button"
              onClick={() => setVoted('no')}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm text-white/50 transition-colors hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
            >
              <ThumbsDown className="h-4 w-4" aria-hidden="true" />
              Not really
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Doc page layout
// ─────────────────────────────────────────────────────────────────────────────

interface DocPageProps {
  doc: Doc
}

export function DocPage({ doc }: DocPageProps): React.JSX.Element {
  const reduced = useReducedMotion()
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const category = getCategoryMeta(doc.category)
  const headings = doc.sections.filter((s) => s.heading)

  // Track which section is visible
  useEffect(() => {
    const ids = headings
      .map((s) => slugifyHeading(s.heading!))
      .filter(Boolean)

    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [doc.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative px-4 pb-24 pt-28 md:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-white/30">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span className="text-white/50">{category?.label}</span>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span className="text-white/70 line-clamp-1">{doc.title}</span>
        </nav>

        {/* Main layout: sidebar + content */}
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-14 xl:grid-cols-[260px_1fr]">

          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">

              {/* Back link */}
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white/60"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All guides
              </Link>

              {headings.length > 0 && (
                <TableOfContents sections={doc.sections} activeId={activeId} />
              )}

              {doc.relatedSlugs && doc.relatedSlugs.length > 0 && (
                <div className="border-t border-white/6 pt-6">
                  <RelatedDocs slugs={doc.relatedSlugs} />
                </div>
              )}
            </div>
          </aside>

          {/* ── Content ─────────────────────────────────────────────────── */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={reduced ? {} : stagger}
            className="min-w-0"
          >
            {/* Article header */}
            <motion.header variants={reduced ? {} : fadeUp} className="mb-10">
              <div className="mb-3 flex items-center gap-3 text-xs text-white/30">
                <span className="font-medium text-indigo-400/80">{category?.label}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {doc.readTime} min read
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  Updated {formatDate(doc.updatedAt)}
                </span>
              </div>

              <h1
                className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl"
              >
                {doc.title}
              </h1>

              <p className="text-lg leading-relaxed text-white/45">{doc.description}</p>

              <div className="mt-6 h-px bg-white/6" />
            </motion.header>

            {/* Sections */}
            <motion.div variants={reduced ? {} : stagger} className="space-y-12">
              {doc.sections.map((section, i) => (
                <motion.div key={i} variants={reduced ? {} : fadeUp}>
                  <DocSection section={section} index={i} />
                </motion.div>
              ))}
            </motion.div>

            {/* Helpful widget */}
            <motion.div variants={reduced ? {} : fadeUp}>
              <HelpfulWidget />
            </motion.div>

            {/* Related docs — mobile only */}
            {doc.relatedSlugs && doc.relatedSlugs.length > 0 && (
              <motion.div
                variants={reduced ? {} : fadeUp}
                className="mt-10 lg:hidden"
              >
                <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
                  <RelatedDocs slugs={doc.relatedSlugs} />
                </div>
              </motion.div>
            )}

            {/* Back to docs — mobile */}
            <motion.div variants={reduced ? {} : fadeUp} className="mt-8 lg:hidden">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-sm text-white/35 transition-colors hover:text-white/60"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All guides
              </Link>
            </motion.div>
          </motion.article>

        </div>
      </div>
    </div>
  )
}
