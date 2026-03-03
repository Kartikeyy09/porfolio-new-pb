import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxSection({ children, speed = 0.3, className = '' }) {
    const containerRef = useRef(null)
    const innerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const inner = innerRef.current
        if (!container || !inner) return

        const tween = gsap.to(inner, {
            yPercent: -speed * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        })

        return () => {
            tween.scrollTrigger?.kill()
            tween.kill()
        }
    }, [speed])

    return (
        <div ref={containerRef} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
            <div ref={innerRef}>{children}</div>
        </div>
    )
}