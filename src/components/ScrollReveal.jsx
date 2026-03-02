import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.9,
    distance = 60,
    className = '',
    stagger = 0,
    scale = false
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const fromVars = { opacity: 0 }
        if (direction === 'up') fromVars.y = distance
        if (direction === 'down') fromVars.y = -distance
        if (direction === 'left') fromVars.x = distance
        if (direction === 'right') fromVars.x = -distance
        if (scale) fromVars.scale = 0.85

        const toVars = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
        }

        if (stagger && el.children.length > 0) {
            gsap.fromTo(el.children, fromVars, { ...toVars, stagger })
        } else {
            gsap.fromTo(el, fromVars, toVars)
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}