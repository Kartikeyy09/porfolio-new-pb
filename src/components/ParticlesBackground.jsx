import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import "../App.css"

const ParticlesBackground = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const particles = []
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.left = `${Math.random() * 100}%`
            particle.style.top = `${Math.random() * 100}%`
            particle.style.opacity = `${Math.random() * 0.5 + 0.1}`
            particle.style.width = `${Math.random() * 3 + 1}px`
            particle.style.height = particle.style.width
            container.appendChild(particle)
            particles.push(particle)

            gsap.to(particle, {
                y: `random(-100, 100)`,
                x: `random(-50, 50)`,
                opacity: `random(0.1, 0.5)`,
                duration: `random(4, 8)`,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: Math.random() * 4,
            })
        }

        return () => {
            particles.forEach((p) => p.remove())
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
        />
    )
}

export default ParticlesBackground