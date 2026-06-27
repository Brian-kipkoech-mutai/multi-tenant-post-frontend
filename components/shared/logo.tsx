import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  iconOnly?: boolean
}

const sizes = {
  sm: { wrap: 'h-7 w-7 rounded-lg', icon: 14, text: 'text-base' },
  md: { wrap: 'h-9 w-9 rounded-xl', icon: 18, text: 'text-lg' },
  lg: { wrap: 'h-12 w-12 rounded-2xl', icon: 22, text: 'text-2xl' },
} as const

export function Logo({ size = 'md', className, iconOnly = false }: LogoProps) {
  const s = sizes[size]
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center justify-center',
          s.wrap,
        )}
        style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
      >
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </div>
      {!iconOnly && (
        <span className={cn('font-bold tracking-tight text-white', s.text)}>
          Dextra
        </span>
      )}
    </div>
  )
}
