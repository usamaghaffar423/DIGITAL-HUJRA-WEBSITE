'use client'
import { useEffect, useRef } from 'react'
import { gsap, registerGsap } from '@/lib/gsap'
export function useCounterAnimation(target: number, suffix = '') {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        val: target, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
      })
    })
    return () => ctx.revert()
  }, [target, suffix])
  return ref
}
