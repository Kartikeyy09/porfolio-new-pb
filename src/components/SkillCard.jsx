import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    MegaphoneIcon,
    ChartBarIcon,
    PaintBrushIcon,
    BriefcaseIcon,
    UsersIcon,
    CogIcon,
} from '@heroicons/react/24/outline'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
    megaphone: MegaphoneIcon,
    chart: ChartBarIcon,
    paint: PaintBrushIcon,
    briefcase: BriefcaseIcon,
    users: UsersIcon,
    cog: CogIcon,
}

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null)
    const Icon = iconMap[skill.icon] || CogIcon

    useEffect(() => {
        const el = cardRef.current
        if (!el) return

        gsap.fromTo(
            el,
            { opacity: 0, y: 40, rotateX: 10 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.7,
                delay: index * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [index])

    const isPrimary = skill.color === 'primary'

    return (
        <div
            ref={cardRef}
            className="glass-light rounded-2xl p-6 card-hover group"
        >
            <div className="flex items-center gap-3 mb-4">
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${isPrimary
                            ? 'bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20'
                            : 'bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20'
                        } transition-colors duration-300`}
                >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-lg">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                    <span
                        key={item}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-300 ${isPrimary
                                ? 'bg-primary-500/5 text-primary-300 border-primary-500/15 group-hover:bg-primary-500/10 group-hover:border-primary-500/30'
                                : 'bg-accent-500/5 text-accent-300 border-accent-500/15 group-hover:bg-accent-500/10 group-hover:border-accent-500/30'
                            }`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillCard