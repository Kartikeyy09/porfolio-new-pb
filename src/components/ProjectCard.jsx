import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ArrowTopRightOnSquareIcon,
    TagIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/24/outline'
import "../App.css"

gsap.registerPlugin(ScrollTrigger)

const tagColors = {
    'Social Media': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Content Creation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Brand Strategy': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    Instagram: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    SEO: 'bg-green-500/10 text-green-400 border-green-500/20',
    'Content Writing': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Blog: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    'Keyword Research': 'bg-lime-500/10 text-lime-400 border-lime-500/20',
    'Email Marketing': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Copywriting: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    GDPR: 'bg-red-500/10 text-red-400 border-red-500/20',
    'Customer Journey': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    'Market Research': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'Competitive Analysis': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    Strategy: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    'Data Analysis': 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
    'Power BI': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Data Analytics': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Dashboard: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Business Intelligence': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
}

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const el = cardRef.current
        if (!el) return

        gsap.fromTo(
            el,
            { opacity: 0, y: 60, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [index])

    return (
        <article
            ref={cardRef}
            className="glass-light rounded-2xl overflow-hidden card-hover group"
        >
            {/* Image Placeholder */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary-900/50 to-accent-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-2xl font-bold text-white font-heading">
                                {project.id}
                            </span>
                        </div>
                        <span className="text-dark-300 text-sm font-medium">
                            {project.type}
                        </span>
                    </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-dark-900/80 backdrop-blur-sm text-primary-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-primary-500/20">
                        <TagIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        {project.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 font-heading">
                    {project.title}
                </h3>

                <p className="text-dark-400 text-sm leading-relaxed line-clamp-3">
                    {project.objective}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-xs px-2.5 py-1 rounded-lg border ${tagColors[tag] || 'bg-dark-800 text-dark-300 border-dark-700'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Expandable Details */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-300 w-full"
                    aria-expanded={expanded}
                    aria-controls={`project-details-${project.id}`}
                >
                    {expanded ? 'Show Less' : 'View Full Details'}
                    {expanded ? (
                        <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                    )}
                </button>

                <div
                    id={`project-details-${project.id}`}
                    className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="space-y-5 pt-4 border-t border-dark-700/50">
                        {/* Target Audience */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-300 mb-1.5 uppercase tracking-wide">
                                Target Audience
                            </h4>
                            <p className="text-dark-400 text-sm leading-relaxed">
                                {project.targetAudience}
                            </p>
                        </div>

                        {/* Strategy */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-300 mb-1.5 uppercase tracking-wide">
                                Strategy & Approach
                            </h4>
                            <p className="text-dark-400 text-sm leading-relaxed">
                                {project.strategy}
                            </p>
                        </div>

                        {/* Tools */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-300 mb-1.5 uppercase tracking-wide">
                                Tools Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-xs bg-dark-800 text-dark-200 px-3 py-1.5 rounded-lg border border-dark-700"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h4 className="text-sm font-semibold text-primary-300 mb-1.5 uppercase tracking-wide">
                                Key Features
                            </h4>
                            <ul className="space-y-1.5">
                                {project.keyFeatures.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="text-dark-400 text-sm flex items-start gap-2"
                                    >
                                        <span className="text-primary-400 mt-1.5 flex-shrink-0">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                                                <circle cx="6" cy="6" r="3" />
                                            </svg>
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Results */}
                        <div>
                            <h4 className="text-sm font-semibold text-accent-300 mb-1.5 uppercase tracking-wide">
                                Results & Outcomes
                            </h4>
                            <p className="text-dark-400 text-sm leading-relaxed">
                                {project.results}
                            </p>
                        </div>

                        {/* Reflection */}
                        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700/50">
                            <h4 className="text-sm font-semibold text-accent-300 mb-1.5 uppercase tracking-wide">
                                Reflection & Learning
                            </h4>
                            <p className="text-dark-400 text-sm leading-relaxed italic">
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