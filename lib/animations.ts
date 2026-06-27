import type { Variants } from 'framer-motion'

export const EASE_EXPO = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

export const cardHover = {
  y: -6,
  boxShadow: '0 24px 64px rgba(79,70,229,0.2)',
  transition: { duration: 0.2, ease: 'easeOut' },
}

export const FLOAT = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
}
