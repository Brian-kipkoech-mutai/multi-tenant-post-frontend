import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { AxiosError } from 'axios'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatKES(amount: string | number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2,
  }).format(Number(amount))
}

export function formatDate(date: string | Date, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-KE', {
    dateStyle: 'medium',
    ...opts,
  }).format(new Date(date))
}

export function extractApiError(err: unknown): string {
  const axiosErr = err as AxiosError<{ message: string | string[] }>
  const msg = axiosErr?.response?.data?.message
  if (!msg) return 'Something went wrong. Please try again.'
  return Array.isArray(msg) ? msg[0] : msg
}

