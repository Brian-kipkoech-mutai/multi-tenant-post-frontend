import { describe, it, expect } from 'vitest'
import { cn, formatKES, formatDate, extractApiError } from './utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('resolves conflicting tailwind classes (last wins)', () => {
    expect(cn('text-sm', 'text-lg')).toBe('text-lg')
  })

  it('filters out falsy values', () => {
    expect(cn('foo', false && 'bar', undefined, null as unknown as string)).toBe('foo')
  })

  it('handles conditional class with object syntax', () => {
    expect(cn({ 'text-red-500': true, 'text-green-500': false })).toBe('text-red-500')
  })
})

describe('formatKES', () => {
  it('formats a whole number with thousands separator', () => {
    const result = formatKES(1000)
    expect(result).toContain('1,000')
    // currency symbol is locale-dependent ('KES' vs 'Ksh') — don't assert on it
  })

  it('includes two decimal places', () => {
    expect(formatKES(1234)).toContain('1,234.00')
  })

  it('formats a decimal amount', () => {
    expect(formatKES(1234.5)).toContain('1,234.50')
  })

  it('accepts a string input', () => {
    expect(formatKES('5000')).toContain('5,000')
  })

  it('formats zero', () => {
    expect(formatKES(0)).toContain('0.00')
  })

  it('formats large amounts', () => {
    expect(formatKES(84200)).toContain('84,200')
  })
})

describe('formatDate', () => {
  it('returns a non-empty string for a valid date', () => {
    const result = formatDate('2026-06-28')
    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
  })

  it('accepts a Date object', () => {
    const result = formatDate(new Date('2026-01-01'))
    expect(result).toBeTruthy()
  })
})

describe('extractApiError', () => {
  it('returns the default message when there is no response', () => {
    expect(extractApiError(new Error('network error'))).toBe(
      'Something went wrong. Please try again.',
    )
  })

  it('returns the string message from the response body', () => {
    const err = { response: { data: { message: 'Invalid credentials' } } }
    expect(extractApiError(err)).toBe('Invalid credentials')
  })

  it('returns the first item when response message is an array', () => {
    const err = {
      response: { data: { message: ['Email is required', 'Password is required'] } },
    }
    expect(extractApiError(err)).toBe('Email is required')
  })

  it('returns the default message when response data has no message field', () => {
    const err = { response: { data: {} } }
    expect(extractApiError(err)).toBe('Something went wrong. Please try again.')
  })

  it('returns the default message for null input', () => {
    expect(extractApiError(null)).toBe('Something went wrong. Please try again.')
  })
})
