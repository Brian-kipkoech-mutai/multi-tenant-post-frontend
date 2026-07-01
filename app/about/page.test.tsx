import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AboutPage from './page'

vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

describe('AboutPage', () => {
  it('renders the hero and key messaging for the about page', () => {
    render(<AboutPage />)

    expect(screen.getByRole('heading', { name: /about dextra/i })).toBeInTheDocument()
    expect(screen.getByText(/built for the realities of everyday retail/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start free/i })).toBeInTheDocument()
  })
})
