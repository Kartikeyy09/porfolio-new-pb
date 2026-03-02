import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({ text, className = '', tag: Tag = 'h2' }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const words = el.querySelectorAll('.tr-word')
        gsap.fromTo(words, { opacity: 0.08, y: 15 }, {
            opacity: 1, y: 0, stagger: 0.04, duration: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        })
    }, [])

    return (
        <Tag ref={ref} className={`text-section-title ${className}`}>
            {text.split(' ').map((w, i) => (
                <span key={i} className="tr-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>{w}</span>
            ))}
        </Tag>
    )
}