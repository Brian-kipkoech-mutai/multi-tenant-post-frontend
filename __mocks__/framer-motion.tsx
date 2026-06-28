/**
 * Stable Framer Motion manual mock for Vitest.
 * Each element type is a single stable forwardRef component so React never
 * remounts the component tree due to a changing component reference.
 */
import React from 'react'

type AnyProps = { children?: React.ReactNode; [key: string]: unknown }

const makeEl = (tag: string) =>
  React.forwardRef<HTMLElement, AnyProps>(({ children, ...props }, ref) =>
    React.createElement(tag, { ...props, ref }, children as React.ReactNode),
  )

export const motion = {
  a: makeEl('a'),
  button: makeEl('button'),
  div: makeEl('div'),
  form: makeEl('form'),
  h1: makeEl('h1'),
  h2: makeEl('h2'),
  h3: makeEl('h3'),
  header: makeEl('header'),
  li: makeEl('li'),
  nav: makeEl('nav'),
  p: makeEl('p'),
  section: makeEl('section'),
  span: makeEl('span'),
  ul: makeEl('ul'),
}

export const useReducedMotion = () => false
export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const useAnimation = () => ({ start: () => {}, stop: () => {}, set: () => {} })
export const useMotionValue = (initial: number) => ({ get: () => initial, set: () => {} })
