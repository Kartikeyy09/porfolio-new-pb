import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CountUp({ target, suffix = '', duration = 2 }) {
    const ref = useRef(null)
    const [displayVal, setDisplayVal] = useState(0)
    const triggered = useRef(false)
    const num = parseInt(target, 10)

    useEffect(() => {
        const el = ref.current
        if (!el || isNaN(num) || triggered.current) return

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 92%',
            once: true,
            onEnter: () => {
                if (triggered.current) return
                triggered.current = true
                const obj = { val: 0 }
                gsap.to(obj, {
                    val: num,
                    duration,
                    ease: 'power2.out',
                    onUpdate: () => setDisplayVal(Math.floor(obj.val)),
                })
            },
        })

        return () => {
            trigger.kill()
        }
    }, [num, duration])

    if (isNaN(num)) {
        return <span ref={ref}>{target}</span>
    }

    return <span ref={ref}>{displayVal}{suffix}</span>
}