import { useRef } from 'react'
import gsap from 'gsap'
import "../App.css"

export default function MagneticButton({ children, className = '', ...props }) {
    const ref = useRef(null)

    const handleMouseMove = (e) => {
        const btn = ref.current
        if (!btn) return
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
        gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}