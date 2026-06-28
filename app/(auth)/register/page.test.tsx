import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { authApi } from '@/lib/api/auth'
import RegisterPage from './page'

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

describe('RegisterPage', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(authApi.register).mockResolvedValue({
      accessToken: 'mock-token',
      message: 'Account created',
    })
  })

  it('renders username, email, and password fields', () => {
    render(<RegisterPage />)

    expect(screen.getByPlaceholderText('john_doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@yourshop.co.ke')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
  })

  it('renders the create account button', () => {
    render(<RegisterPage />)

    expect(screen.getByRole('button', { name: /create free account/i })).toBeInTheDocument()
  })

  it('shows password strength hints when user starts typing a password', async () => {
    const user = userEvent.setup()
    render(<RegisterPage />)

    await user.type(screen.getByPlaceholderText('••••••••'), 'sec')

    expect(screen.getByText('At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('One uppercase letter')).toBeInTheDocument()
    expect(screen.getByText('One number')).toBeInTheDocument()
  })

  it('shows all password hints as met with a strong password', async () => {
    const user = userEvent.setup()
    render(<RegisterPage />)

    await user.type(screen.getByPlaceholderText('••••••••'), 'Secret123')

    expect(screen.getByText('At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('One uppercase letter')).toBeInTheDocument()
    expect(screen.getByText('One number')).toBeInTheDocument()
  })

  it('shows a validation error for invalid username on submit', async () => {
    const user = userEvent.setup()
    render(<RegisterPage />)

    await user.type(screen.getByPlaceholderText('john_doe'), 'ab')
    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'john@shop.co.ke')
    await user.type(screen.getByPlaceholderText('••••••••'), 'Secret123')
    await user.click(screen.getByRole('button', { name: /create free account/i }))

    await waitFor(() => {
      expect(screen.getByText(/at least 3 characters/i)).toBeInTheDocument()
    })
  })

  it('redirects to /dashboard on successful registration', async () => {
    const user = userEvent.setup()
    render(<RegisterPage />)

    await user.type(screen.getByPlaceholderText('john_doe'), 'john_doe')
    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'john@shop.co.ke')
    await user.type(screen.getByPlaceholderText('••••••••'), 'Secret123')
    await user.click(screen.getByRole('button', { name: /create free account/i }))

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard')
    })
  })

  it('displays a server error on registration failure', async () => {
    vi.mocked(authApi.register).mockRejectedValueOnce({
      response: { data: { message: 'Email already in use' } },
    })

    const user = userEvent.setup()
    render(<RegisterPage />)

    await user.type(screen.getByPlaceholderText('john_doe'), 'john_doe')
    await user.type(screen.getByPlaceholderText('you@yourshop.co.ke'), 'taken@shop.co.ke')
    await user.type(screen.getByPlaceholderText('••••••••'), 'Secret123')
    await user.click(screen.getByRole('button', { name: /create free account/i }))

    await waitFor(() => {
      expect(screen.getByText('Email already in use')).toBeInTheDocument()
    })
  })
})
