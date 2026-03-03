import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal({ text, className = '', tag: Tag = 'h2' }) {
    const ref = useRef(null)
    const animated = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el || animated.current) return

        const words = el.querySelectorAll('.tr-word')
        if (!words.length) return

        gsap.set(words, { opacity: 0.08, y: 15 })

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => {
                animated.current = true
                gsap.to(words, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    duration: 0.5,
                    ease: 'power3.out',
                })
            },
        })

        return () => {
            trigger.kill()
        }
    }, [text])

    return (
        <Tag ref={ref} className={`text-section-title ${className}`}>
            {text.split(' ').map((word, i) => (
                <span
                    key={i}
                    className="tr-word"
                    style={{ display: 'inline-block', marginRight: '0.3em', opacity: 0.08 }}
                >
                    {word}
                </span>
            ))}
        </Tag>
    )
}