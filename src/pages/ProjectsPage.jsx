import { useEffect, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, FunnelIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import ColorBlob from '../components/ColorBlob'
import MarqueeText from '../components/MarqueeText'
import { projects, COLOR_MAP } from '../data/portfolioData'

const allTags = [...new Set(projects.flatMap(p => p.tags))]

function ProjectCard({ project, index }) {
    const [open, setOpen] = useState(false)
    const cm = COLOR_MAP[project.color] || COLOR_MAP.coral

    return (
        <ScrollReveal delay={index * 0.08} scale>
            <article className="glass-card card-lift group overflow-hidden">
                {/* Image */}
                <div className="project-img-wrap">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-img-overlay" />
                    <div className="project-img-badge">
                        <span className="tag-tool" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'white' }}>{project.type}</span>
                    </div>
                    <span className="project-img-emoji">{project.emoji}</span>
                    <div className="project-img-info">
                        <h3 className="font-display c-white" style={{ fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.3 }}>{project.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{project.subtitle}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-col gap-5">
                    <div>
                        <h4 className={`${cm.text} font-display text-label mb-2`}>Objective</h4>
                        <p className="text-card-body">{project.objective}</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.tags.map(t => <span key={t} className={`${cm.bg} ${cm.text} tag`}>{t}</span>)}
                    </div>

                    <div>
                        <h4 className={`${cm.text} font-display text-label mb-2`}>Tools Used</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tools.map(t => <span key={t} className="tag-tool">{t}</span>)}
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className={`${cm.text} font-display`}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 700, background: 'none', border: 'none', padding: 0, width: '100%' }}
                        aria-expanded={open}
                    >
                        {open ? 'Show Less' : 'View Full Details'}
                        {open ? <ChevronUpIcon style={{ width: '1rem', height: '1rem' }} /> : <ChevronDownIcon style={{ width: '1rem', height: '1rem' }} />}
                    </button>

                    {/* Expandable */}
                    <div style={{ overflow: 'hidden', maxHeight: open ? '3000px' : '0', opacity: open ? 1 : 0, transition: 'all 0.5s ease' }}>
                        <div className="flex-col gap-5" style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div>
                                <h4 className={`${cm.text} font-display text-label mb-2`}>Target Audience</h4>
                                <p className="text-card-body">{project.targetAudience}</p>
                            </div>
                            <div>
                                <h4 className={`${cm.text} font-display text-label mb-2`}>Strategy & Approach</h4>
                                <p className="text-card-body">{project.strategy}</p>
                            </div>
                            <div>
                                <h4 className={`${cm.text} font-display text-label mb-2`}>Key Features</h4>
                                <ul className="flex-col gap-2">
                                    {project.features.map((f, i) => (
                                        <li key={i} className="bullet-item">
                                            <span className={`bullet-marker ${cm.text}`}>◆</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`${cm.bg} rounded-2xl p-5`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                <h4 className={`${cm.text} font-display text-label mb-2`}>📊 Results</h4>
                                <p className="c-gray-300 text-small" style={{ lineHeight: 1.7 }}>{project.results}</p>
                            </div>
                            <div className="bg-surface-overlay rounded-2xl p-5" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 className="font-display c-gray-300 text-label mb-2">💭 Reflection</h4>
                                <p className="c-gray-500 text-small italic" style={{ lineHeight: 1.7 }}>"{project.reflection}"</p>
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
        <div style={{ paddingTop: '5rem' }}>
            <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '3rem' }} aria-label="Projects Header">
                <ColorBlob color="coral" size={380} top="-8%" right="8%" opacity={0.06} />
                <ColorBlob color="lavender" size={320} bottom="0" left="4%" opacity={0.05} />
                <div className="container-site relative z-10 text-center">
                    <ScrollReveal>
                        <span className="badge-section gradient-berry mb-6" style={{ color: 'white' }}>Portfolio</span>
                    </ScrollReveal>
                    <TextReveal text="Projects that showcase strategy, creativity & impact" className="font-display mb-8" />
                    <ScrollReveal delay={0.2}>
                        <p className="c-gray-400 text-section-subtitle max-w-narrow mx-auto mb-10">
                            Each project demonstrates a blend of digital marketing strategy, creative execution, and data-driven thinking.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="flex-wrap-center gap-2">
                            <FunnelIcon style={{ width: '1rem', height: '1rem', color: '#525252', marginRight: '0.25rem' }} />
                            {['All', ...allTags.slice(0, 8)].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setFilter(tag === 'All' ? 'All' : tag)}
                                    className={`font-display ${(filter === tag || (tag === 'All' && filter === 'All')) ? 'gradient-rainbow' : 'glass-card-sm'}`}
                                    style={{
                                        padding: '0.625rem 1rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700, border: 'none',
                                        color: (filter === tag || (tag === 'All' && filter === 'All')) ? 'white' : '#a3a3a3',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    {tag === 'All' ? 'All Projects' : tag}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <MarqueeText items={['Strategy', 'Creativity', 'Impact', 'Innovation', 'Analytics', 'Design']} speed={20} />

            <section className="section-space" aria-label="Projects">
                <div className="container-site">
                    <div className="grid-projects">
                        {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
                    </div>
                    {filtered.length === 0 && (
                        <div className="text-center" style={{ padding: '5rem 0' }}>
                            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
                            <p className="font-display c-gray-500" style={{ fontSize: '1.125rem' }}>No projects match this filter.</p>
                        </div>
                    )}
                </div>
            </section>

            <section style={{ paddingBottom: '5rem' }}>
                <div className="container-site max-w-wide mx-auto">
                    <ScrollReveal>
                        <div className="border-gradient-wrap">
                            <div className="border-gradient-inner p-10 text-center">
                                <h3 className="font-display c-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Skills Demonstrated Across All Projects</h3>
                                <div className="flex-wrap-center gap-3">
                                    {[
                                        { s: 'SEO Optimisation', c: 'coral' }, { s: 'Content Strategy', c: 'sky' },
                                        { s: 'Social Media', c: 'mint' }, { s: 'Email Marketing', c: 'lavender' },
                                        { s: 'Data Analytics', c: 'sunny' }, { s: 'Brand Development', c: 'peach' },
                                        { s: 'Competitive Analysis', c: 'coral' }, { s: 'Power BI', c: 'sky' },
                                        { s: 'UX Evaluation', c: 'mint' }, { s: 'Customer Journey', c: 'lavender' },
                                        { s: 'Financial Modelling', c: 'sunny' }, { s: 'Campaign Planning', c: 'peach' },
                                    ].map(({ s, c }) => {
                                        const cm = COLOR_MAP[c]
                                        return <span key={s} className={`${cm.bg} ${cm.text} tag`} style={{ padding: '0.5rem 1rem' }}>{s}</span>
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