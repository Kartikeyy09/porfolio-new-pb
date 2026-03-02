import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CountUp({ target, suffix = '', duration = 2 }) {
    const ref = useRef(null)
    const [val, setVal] = useState(0)
    const num = parseInt(target)

    useEffect(() => {
        const el = ref.current
        if (!el || isNaN(num)) return
        const obj = { v: 0 }
        ScrollTrigger.create({
            trigger: el, start: 'top 90%', once: true,
            onEnter: () => gsap.to(obj, { v: num, duration, ease: 'power2.out', onUpdate: () => setVal(Math.floor(obj.v)) }),
        })
    }, [num, duration])

    return <span ref={ref}>{isNaN(num) ? target : `${val}${suffix}`}</span>
}