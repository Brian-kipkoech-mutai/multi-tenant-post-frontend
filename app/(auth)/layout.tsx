import type { ReactNode } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { ROUTES } from '@/lib/constants'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-16"
      style={{ background: '#080814' }}
    >
      {/* Ambient orbs */}
      <div
        className="pointer-events-none fixed left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href={ROUTES.home} aria-label="Back to Dextra home">
            <Logo size="lg" />
          </Link>
        </div>

        {children}

        <p className="mt-8 text-center text-xs text-white/25">
          © 2026 Dextra Technologies · Built for East Africa
        </p>
      </div>
    </div>
  )
}
