import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

const SectionHeading = ({ label, title, subtitle, align = 'center' }) => {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        gsap.fromTo(
            el.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <div
            ref={ref}
            className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'
                }`}
        >
            {label && (
                <span className="inline-block gradient-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                    {label}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 text-glow">
                {title}
            </h2>
            {subtitle && (
                <p className="text-dark-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeading