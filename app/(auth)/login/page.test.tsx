import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { authApi } from '@/lib/api/auth'
import LoginPage from './page'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, replace: vi.fn(), back: vi.fn() }),
}))

vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

vi.mock('framer-motion')

vi.mock('@/lib/api/auth', () => ({
  authApi: {
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    refreshToken: vi.fn(),
  },
}))

describe('LoginPage', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(authApi.login).mockResolvedValue({
      accessToken: 'mock-token',
      message: 'Login successful',
    })
  })

  it('renders the email and password fields and submit button', () => {
    render(<LoginPage />)

    expect(screen.getByPlaceholderText('you@yourshop.co.ke')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email on submit', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    await user.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument()
    })
  })

  it('shows a validation error for an empty password on submit', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'alice@example.com')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(screen.getByText(/password is required/i)).toBeInTheDocument()
    })
  })

  it('redirects to /dashboard on successful login', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'alice@shop.co.ke')
    await user.type(screen.getByPlaceholderText('••••••••'), 'password123')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard')
    })
  })

  it('displays a server error message on failed login', async () => {
    vi.mocked(authApi.login).mockRejectedValueOnce({
      response: { data: { message: 'Invalid email or password' } },
    })

    const user = userEvent.setup()
    render(<LoginPage />)

    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'alice@shop.co.ke')
    await user.type(screen.getByPlaceholderText('••••••••'), 'wrongpassword')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument()
    })
  })

  it('toggles password visibility', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const passwordInput = screen.getByPlaceholderText('••••••••')
    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(passwordInput).toHaveAttribute('type', 'text')

    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(passwordInput).toHaveAttribute('type', 'password')
  })
})
