import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxSection({ children, speed = 0.3, className = '' }) {
    const ref = useRef(null)
    const innerRef = useRef(null)

    useEffect(() => {
        const el = ref.current
        const inner = innerRef.current
        if (!el || !inner) return

        gsap.to(inner, {
            yPercent: -speed * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [speed])

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <div ref={innerRef}>{children}</div>
        </div>
    )
}