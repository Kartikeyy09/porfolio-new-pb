import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ChevronDownIcon,
    ChevronUpIcon,
    BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import { COLOR_MAP } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)
    const [expanded, setExpanded] = useState(false)
    const cm = COLOR_MAP[project.color] || COLOR_MAP.coral

    useEffect(() => {
        const el = cardRef.current
        if (!el) return

        gsap.set(el, { opacity: 0, y: 50, scale: 0.95 })

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: 'power3.out',
                })
            },
        })

        return () => trigger.kill()
    }, [index])

    return (
        <article
            ref={cardRef}
            className="glass-card card-lift group overflow-hidden"
            style={{ opacity: 0 }}
        >
            {/* Image */}
            <div className="project-img-wrap">
                <img
                    src={project.image}
                    alt={`${project.title} — ${project.type}`}
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background =
                            'linear-gradient(135deg, rgba(255,107,107,0.12), rgba(77,150,255,0.12))'
                    }}
                />
                <div className="project-img-overlay" />

                {/* Type badge */}
                <div className="project-img-badge">
                    <span
                        className="tag-tool"
                        style={{
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(8px)',
                            color: 'white',
                        }}
                    >
                        {project.type}
                    </span>
                </div>

                {/* Emoji */}
                <span className="project-img-emoji">{project.emoji}</span>

                {/* Title on image */}
                <div className="project-img-info">
                    <h3
                        className="font-display c-white"
                        style={{ fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.3 }}
                    >
                        {project.title}
                    </h3>
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.65)',
                            fontSize: '0.8rem',
                            marginTop: '0.2rem',
                        }}
                    >
                        {project.subtitle}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-col gap-5">
                {/* Company Badge */}
                {project.company && (
                    <div
                        className={`${cm.bg} rounded-xl`}
                        style={{
                            padding: '0.75rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <BuildingOfficeIcon
                            className={cm.text}
                            style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0 }}
                        />
                        <div>
                            <p
                                className={`${cm.text} font-display`}
                                style={{ fontWeight: 700, fontSize: '0.8rem' }}
                            >
                                {project.company}
                            </p>
                            <p
                                className="c-gray-500"
                                style={{ fontSize: '0.7rem', marginTop: '0.1rem' }}
                            >
                                {project.companyPeriod}
                            </p>
                        </div>
                    </div>
                )}

                {/* Objective */}
                <div>
                    <h4 className={`${cm.text} font-display text-label mb-2`}>
                        Objective
                    </h4>
                    <p className="text-card-body">{project.objective}</p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={`${cm.bg} ${cm.text} tag`}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Tools */}
                <div>
                    <h4 className={`${cm.text} font-display text-label mb-2`}>
                        Tools Used
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.tools.map((tool) => (
                            <span key={tool} className="tag-tool">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Expand toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={`${cm.text} font-display`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        width: '100%',
                        cursor: 'pointer',
                    }}
                    aria-expanded={expanded}
                    aria-controls={`details-${project.id}`}
                >
                    {expanded ? 'Show Less' : 'View Full Details'}
                    {expanded ? (
                        <ChevronUpIcon style={{ width: '1rem', height: '1rem' }} />
                    ) : (
                        <ChevronDownIcon style={{ width: '1rem', height: '1rem' }} />
                    )}
                </button>

                {/* Expandable content */}
                <div
                    id={`details-${project.id}`}
                    style={{
                        overflow: 'hidden',
                        maxHeight: expanded ? '3000px' : '0',
                        opacity: expanded ? 1 : 0,
                        transition: 'all 0.5s ease',
                    }}
                >
                    <div
                        className="flex-col gap-5"
                        style={{
                            paddingTop: '1.25rem',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        {/* Target Audience */}
                        <div>
                            <h4 className={`${cm.text} font-display text-label mb-2`}>
                                Target Audience
                            </h4>
                            <p className="text-card-body">{project.targetAudience}</p>
                        </div>

                        {/* Strategy */}
                        <div>
                            <h4 className={`${cm.text} font-display text-label mb-2`}>
                                Strategy & Approach
                            </h4>
                            <p className="text-card-body">{project.strategy}</p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h4 className={`${cm.text} font-display text-label mb-2`}>
                                Key Features
                            </h4>
                            <ul className="flex-col gap-2">
                                {project.features.map((f, i) => (
                                    <li key={i} className="bullet-item">
                                        <span className={`bullet-marker ${cm.text}`}>◆</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Results */}
                        <div
                            className={`${cm.bg} rounded-2xl p-5`}
                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <h4 className={`${cm.text} font-display text-label mb-2`}>
                                📊 Results & Outcomes
                            </h4>
                            <p
                                className="c-gray-300 text-small"
                                style={{ lineHeight: 1.7 }}
                            >
                                {project.results}
                            </p>
                        </div>

                        {/* Reflection */}
                        <div
                            className="bg-surface-overlay rounded-2xl p-5"
                            style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            <h4 className="font-display c-gray-300 text-label mb-2">
                                💭 Reflection & Learning
                            </h4>
                            <p
                                className="c-gray-500 text-small italic"
                                style={{ lineHeight: 1.7 }}
                            >
                                "{project.reflection}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard