import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxSection({ children, speed = 0.3, className = '' }) {
    const ref = useRef(null)
    const inner = useRef(null)

    useEffect(() => {
        if (!ref.current || !inner.current) return
        gsap.to(inner.current, {
            yPercent: -speed * 100,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [speed])

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <div ref={inner}>{children}</div>
        </div>
    )
}