import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({ text, className = '', tag: Tag = 'h2' }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const words = el.querySelectorAll('.word')
        gsap.fromTo(
            words,
            { opacity: 0.1, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.6,
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
        <Tag ref={ref} className={className}>
            {text.split(' ').map((word, i) => (
                <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
            ))}
        </Tag>
    )
}