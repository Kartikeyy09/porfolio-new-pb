import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import "../App.css"

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            })
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: 'power2.out'
            })
        }

        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 0, duration: 0.3 })
            gsap.to(follower, { scale: 2, duration: 0.3, borderColor: 'rgba(236, 72, 153, 0.5)' })
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 })
            gsap.to(follower, { scale: 1, duration: 0.3, borderColor: 'rgba(99, 102, 241, 0.5)' })
        }

        window.addEventListener('mousemove', onMouseMove)

        const links = document.querySelectorAll('a, button, [role="button"]')
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            links.forEach((link) => {
                link.removeEventListener('mouseenter', onMouseEnterLink)
                link.removeEventListener('mouseleave', onMouseLeaveLink)
            })
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="hidden lg:block fixed top-0 left-0 w-8 h-8 border border-primary-500/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
            />
        </>
    )
}

export default CustomCursor