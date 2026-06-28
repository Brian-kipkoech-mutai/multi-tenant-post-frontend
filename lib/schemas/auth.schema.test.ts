import { describe, it, expect } from 'vitest'
import { loginSchema, registerSchema } from './auth.schema'

describe('loginSchema', () => {
  it('accepts a valid login payload', () => {
    expect(loginSchema.safeParse({ email: 'alice@shop.co.ke', password: 'secret' }).success).toBe(true)
  })

  it('rejects a missing email', () => {
    const result = loginSchema.safeParse({ email: '', password: 'secret' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(['email'])
    }
  })

  it('rejects a malformed email', () => {
    const result = loginSchema.safeParse({ email: 'not-an-email', password: 'secret' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/valid email/i)
    }
  })

  it('rejects an empty password', () => {
    const result = loginSchema.safeParse({ email: 'alice@shop.co.ke', password: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(['password'])
    }
  })
})

describe('registerSchema', () => {
  const valid = {
    username: 'john_doe',
    email: 'john@shop.co.ke',
    password: 'Secret123',
  }

  it('accepts a valid register payload', () => {
    expect(registerSchema.safeParse(valid).success).toBe(true)
  })

  it('rejects a username shorter than 3 characters', () => {
    const result = registerSchema.safeParse({ ...valid, username: 'ab' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(['username'])
    }
  })

  it('rejects a username longer than 30 characters', () => {
    const result = registerSchema.safeParse({ ...valid, username: 'a'.repeat(31) })
    expect(result.success).toBe(false)
  })

  it('rejects a username with spaces', () => {
    const result = registerSchema.safeParse({ ...valid, username: 'john doe' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/letters, numbers/i)
    }
  })

  it('rejects a username with special characters', () => {
    expect(registerSchema.safeParse({ ...valid, username: 'john-doe!' }).success).toBe(false)
  })

  it('accepts a username with underscores', () => {
    expect(registerSchema.safeParse({ ...valid, username: 'john_doe_99' }).success).toBe(true)
  })

  it('rejects a password shorter than 8 characters', () => {
    const result = registerSchema.safeParse({ ...valid, password: 'Sec1' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/8 characters/i)
    }
  })

  it('rejects a password without an uppercase letter', () => {
    const result = registerSchema.safeParse({ ...valid, password: 'secret123' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/uppercase/i)
    }
  })

  it('rejects a password without a number', () => {
    const result = registerSchema.safeParse({ ...valid, password: 'SecretPass' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toMatch(/number/i)
    }
  })

  it('rejects a missing email', () => {
    const result = registerSchema.safeParse({ ...valid, email: 'bad' })
    expect(result.success).toBe(false)
  })
})
