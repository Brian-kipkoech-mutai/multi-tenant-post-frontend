export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export const APP_NAME = 'Dextra'
export const APP_TAGLINE = 'The POS platform your shop deserves.'

export const ROUTES = {
  home: '/',
  product: '/product',
  pricing: '/pricing',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  sales: '/sales',
  newSale: '/sales/new',
  inventory: '/inventory',
  customers: '/customers',
  reports: '/reports',
  settings: '/settings',
  contact: '/contact',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
