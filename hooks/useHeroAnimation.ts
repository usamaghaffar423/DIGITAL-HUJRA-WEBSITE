'use client'
import { useEffect } from 'react'
import { gsap, registerGsap } from '@/lib/gsap'
export function useHeroAnimation() {
  useEffect(() => {
    registerGsap()
    const tl = gsap.timeline({ delay: 0.15 })
    tl.from('.hero-eyebrow', { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' })
      .from('.hero-line-inner', { y: '105%', opacity: 0, duration: 0.9, stagger: 0.13, ease: 'power4.out' }, '-=0.3')
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.55')
      .from('.hero-actions', { opacity: 0, y: 16, duration: 0.7 }, '-=0.5')
      .from('.hero-location-tag', { opacity: 0, y: 12, duration: 0.6 }, '-=0.45')
      .from('.hero-stat-card', { opacity: 0, x: 28, duration: 0.7, stagger: 0.1 }, '-=0.7')
      .from('.hero-svc-pill', { opacity: 0, x: 20, duration: 0.5, stagger: 0.07 }, '-=0.5')
      .to('.hero-amber-underline', { scaleX: 1, duration: 0.7, transformOrigin: 'left center' }, '-=0.3')
    return () => { tl.kill() }
  }, [])
}
