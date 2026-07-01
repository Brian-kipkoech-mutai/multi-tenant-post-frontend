export type DocCategory =
  | 'getting-started'
  | 'payments'
  | 'tax-compliance'
  | 'team-access'
  | 'inventory'
  | 'dashboard-reports'
  | 'multi-shop'
  | 'account-settings'

export interface DocStep {
  title: string
  body: string
}

export interface DocTableData {
  headers: string[]
  rows: string[][]
}

export interface DocSection {
  heading?: string
  /** One paragraph or multiple paragraphs */
  body?: string | string[]
  steps?: DocStep[]
  table?: DocTableData
  note?: string
  warning?: string
  tip?: string
}

export interface Doc {
  slug: string
  title: string
  description: string
  category: DocCategory
  /** Estimated reading time in minutes */
  readTime: number
  updatedAt: string
  sections: DocSection[]
  /** Slugs of related docs shown at bottom of page */
  relatedSlugs?: string[]
}

export interface CategoryMeta {
  id: DocCategory
  label: string
  description: string
  accent: string
  /** Tailwind icon bg class */
  iconBg: string
  /** Tailwind icon text class */
  iconColor: string
}
