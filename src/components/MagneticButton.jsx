import { useRef } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children, className = '' }) {
    const ref = useRef(null)
    const move = (e) => {
        const b = ref.current
        if (!b) return
        const r = b.getBoundingClientRect()
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25, duration: 0.4, ease: 'power2.out' })
    }
    const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.3)' })

    return (
        <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={className} style={{ display: 'inline-block' }}>
            {children}
        </div>
    )
}