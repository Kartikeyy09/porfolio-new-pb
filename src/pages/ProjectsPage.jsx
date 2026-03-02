import { useEffect, useState } from 'react'
import { ArrowRightIcon, ChevronDownIcon, ChevronUpIcon, FunnelIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import ColorBlob from '../components/ColorBlob'
import MarqueeText from '../components/MarqueeText'
import { projects, COLOR_MAP } from '../data/portfolioData'

const allTags = [...new Set(projects.flatMap(p => p.tags))]

function ProjectCard({ project, index }) {
    const [expanded, setExpanded] = useState(false)
    const cm = COLOR_MAP[project.color] || COLOR_MAP.coral

    return (
        <ScrollReveal delay={index * 0.1} scale>
            <article className="glass-card rounded-3xl overflow-hidden card-lift group">
                {/* Header */}
                <div className={`${cm.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <span className="inline-block text-white text-xs font-bold font-display px-3 py-1.5 rounded-xl mb-3" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
                                {project.type}
                            </span>
                            <h3 className="text-white font-display font-bold text-xl lg:text-2xl">{project.title}</h3>
                            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{project.subtitle}</p>
                        </div>
                        <span className="text-5xl opacity-80 group-hover:scale-125 transition-transform duration-500">{project.emoji}</span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-8 space-y-5">
                    <div>
                        <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>Objective</h4>
                        <p className="text-sm leading-relaxed" style={{ color: '#a3a3a3' }}>{project.objective}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className={`text-xs ${cm.bg} ${cm.text} px-3 py-1.5 rounded-xl`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map(tool => (
                                <span key={tool} className="text-xs px-3 py-1.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d4' }}>{tool}</span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className={`flex items-center gap-2 ${cm.text} text-sm font-bold font-display transition-opacity w-full hover:opacity-70`}
                        aria-expanded={expanded}
                    >
                        {expanded ? 'Show Less' : 'View Full Details'}
                        {expanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                    </button>

                    <div className={`overflow-hidden transition-all duration-600 ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="space-y-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div>
                                <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>Target Audience</h4>
                                <p className="text-sm leading-relaxed" style={{ color: '#a3a3a3' }}>{project.targetAudience}</p>
                            </div>

                            <div>
                                <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>Strategy & Approach</h4>
                                <p className="text-sm leading-relaxed" style={{ color: '#a3a3a3' }}>{project.strategy}</p>
                            </div>

                            <div>
                                <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>Key Features</h4>
                                <ul className="space-y-2">
                                    {project.features.map((f, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2.5" style={{ color: '#a3a3a3' }}>
                                            <span className={`${cm.text} mt-0.5 text-xs`}>◆</span>{f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`${cm.bg} rounded-2xl p-5`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                <h4 className={`${cm.text} text-xs font-bold font-display uppercase tracking-widest mb-2`}>📊 Results</h4>
                                <p className="text-sm leading-relaxed" style={{ color: '#d4d4d4' }}>{project.results}</p>
                            </div>

                            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 className="text-xs font-bold font-display uppercase tracking-widest mb-2" style={{ color: '#d4d4d4' }}>💭 Reflection</h4>
                                <p className="text-sm leading-relaxed italic" style={{ color: '#737373' }}>"{project.reflection}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </ScrollReveal>
    )
}

export default function ProjectsPage() {
    const [filter, setFilter] = useState('All')

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

    return (
        <div className="pt-20 lg:pt-24">
            {/* Header */}
            <section className="relative py-20 lg:py-28 overflow-hidden" aria-label="Projects Header">
                <ColorBlob color="coral" size={400} top="-10%" right="10%" opacity={0.08} />
                <ColorBlob color="lavender" size={350} bottom="0" left="5%" opacity={0.06} />
                <ColorBlob color="mint" size={250} top="30%" right="40%" opacity={0.04} />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10 text-center">
                    <ScrollReveal>
                        <span className="inline-block gradient-berry text-white text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6">Portfolio</span>
                    </ScrollReveal>

                    <TextReveal
                        text="Projects that showcase strategy, creativity & impact"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-8 max-w-4xl mx-auto leading-tight"
                    />

                    <ScrollReveal delay={0.3}>
                        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: '#a3a3a3' }}>
                            Each project demonstrates a unique blend of digital marketing strategy, creative execution, and data-driven thinking.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <FunnelIcon className="w-4 h-4 mr-1" style={{ color: '#525252' }} />
                            <button
                                onClick={() => setFilter('All')}
                                className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-display transition-all duration-300 ${filter === 'All' ? 'gradient-rainbow text-white' : 'glass-card'
                                    }`}
                                style={filter !== 'All' ? { color: '#a3a3a3' } : {}}
                            >
                                All Projects
                            </button>
                            {allTags.slice(0, 8).map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setFilter(tag)}
                                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-display transition-all duration-300 ${filter === tag ? 'gradient-rainbow text-white' : 'glass-card'
                                        }`}
                                    style={filter !== tag ? { color: '#a3a3a3' } : {}}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <MarqueeText items={['Strategy', 'Creativity', 'Impact', 'Innovation', 'Analytics', 'Design']} speed={20} />

            {/* Grid */}
            <section className="relative py-16 lg:py-20" aria-label="Projects">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                    </div>
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <span className="text-5xl mb-4 block">🔍</span>
                            <p className="text-lg font-display" style={{ color: '#737373' }}>No projects match this filter.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Skills Summary */}
            <section className="relative py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-5 sm:px-8">
                    <ScrollReveal>
                        <div className="border-gradient">
                            <div className="rounded-3xl p-8 lg:p-12 text-center" style={{ background: '#171717' }}>
                                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6">
                                    Skills Demonstrated Across All Projects
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        { s: 'SEO Optimisation', c: 'coral' }, { s: 'Content Strategy', c: 'sky' },
                                        { s: 'Social Media', c: 'mint' }, { s: 'Email Marketing', c: 'lavender' },
                                        { s: 'Data Analytics', c: 'sunny' }, { s: 'Brand Development', c: 'peach' },
                                        { s: 'Competitive Analysis', c: 'coral' }, { s: 'Power BI', c: 'sky' },
                                        { s: 'GDPR Compliance', c: 'mint' }, { s: 'Customer Journey', c: 'lavender' },
                                        { s: 'UX Principles', c: 'sunny' }, { s: 'Campaign Planning', c: 'peach' },
                                    ].map(({ s, c }) => {
                                        const cm = COLOR_MAP[c] || COLOR_MAP.coral
                                        return (
                                            <span key={s} className={`${cm.bg} ${cm.text} px-4 py-2 rounded-xl text-sm font-medium`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                                {s}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}