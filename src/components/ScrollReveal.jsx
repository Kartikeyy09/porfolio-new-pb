import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.9,
    distance = 60,
    className = '',
    scale = false,
}) {
    const ref = useRef(null)
    const animated = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el || animated.current) return

        const fromVars = { opacity: 0 }
        if (direction === 'up') fromVars.y = distance
        else if (direction === 'down') fromVars.y = -distance
        else if (direction === 'left') fromVars.x = distance
        else if (direction === 'right') fromVars.x = -distance
        if (scale) fromVars.scale = 0.9

        gsap.set(el, fromVars)

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                animated.current = true
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration,
                    delay,
                    ease: 'power3.out',
                })
            },
        })

        return () => {
            trigger.kill()
        }
    }, [direction, delay, duration, distance, scale])

    return (
        <div ref={ref} className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    )
}