import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll({ children, className = '' }) {
    const containerRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const scrollEl = scrollRef.current
        if (!container || !scrollEl) return

        const totalWidth = scrollEl.scrollWidth - container.offsetWidth

        gsap.to(scrollEl, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top 20%',
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={scrollRef} className="flex gap-6 w-max">
                {children}
            </div>
        </div>
    )
}