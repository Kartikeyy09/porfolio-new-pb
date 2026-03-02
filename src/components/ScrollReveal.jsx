import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({
    children, direction = 'up', delay = 0, duration = 0.9,
    distance = 60, className = '', scale = false,
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const from = { opacity: 0 }
        if (direction === 'up') from.y = distance
        if (direction === 'down') from.y = -distance
        if (direction === 'left') from.x = distance
        if (direction === 'right') from.x = -distance
        if (scale) from.scale = 0.9

        gsap.fromTo(el, from, {
            opacity: 1, x: 0, y: 0, scale: 1, duration, delay,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [direction, delay, duration, distance, scale])

    return <div ref={ref} className={className} style={{ opacity: 0 }}>{children}</div>
}