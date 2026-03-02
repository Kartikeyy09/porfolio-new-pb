import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({ target, suffix = '' }) => {
    const ref = useRef(null)
    const [count, setCount] = useState(0)
    const numericTarget = parseInt(target)

    useEffect(() => {
        const el = ref.current
        if (!el || isNaN(numericTarget)) return

        const obj = { val: 0 }

        ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    val: numericTarget,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: () => setCount(Math.floor(obj.val)),
                })
            },
        })

        return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }, [numericTarget])

    const displayValue = isNaN(numericTarget) ? target : `${count}${suffix}`

    return <span ref={ref}>{displayValue}</span>
}

export default AnimatedCounter