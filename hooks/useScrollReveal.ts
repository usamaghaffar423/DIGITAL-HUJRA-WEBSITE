'use client'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap'
export function useScrollReveal(selector: string, options: { y?: number; stagger?: number; duration?: number; start?: string } = {}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    registerGsap()
    const container = ref.current
    if (!container) return
    const els = container.querySelectorAll(selector)
    if (!els.length) return
    const ctx = gsap.context(() => {
      gsap.from(els, {
        scrollTrigger: { trigger: container, start: options.start ?? 'top 82%', once: true },
        y: options.y ?? 32, opacity: 0, duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0.1, ease: 'power3.out',
      })
    }, container)
    return () => ctx.revert()
  }, [])
  return ref
}
