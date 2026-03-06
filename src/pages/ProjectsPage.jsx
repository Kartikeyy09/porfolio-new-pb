import { useEffect, useState } from 'react'
import { FunnelIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import ColorBlob from '../components/ColorBlob'
import MarqueeText from '../components/MarqueeText'
import ProjectCard from '../components/ProjectCard'
import { projects, COLOR_MAP } from '../data/portfolioData'

const allTags = [...new Set(projects.flatMap((p) => p.tags))]

export default function ProjectsPage() {
    const [filter, setFilter] = useState('All')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const filtered =
        filter === 'All'
            ? projects
            : projects.filter((p) => p.tags.includes(filter))

    return (
        <div style={{ paddingTop: '5rem' }}>
            {/* Header */}
            <section
                className="relative overflow-hidden"
                style={{ paddingTop: '5rem', paddingBottom: '3rem' }}
                aria-label="Projects Header"
            >
                <ColorBlob
                    color="coral"
                    size={380}
                    top="-8%"
                    right="8%"
                    opacity={0.06}
                />
                <ColorBlob
                    color="lavender"
                    size={320}
                    bottom="0"
                    left="4%"
                    opacity={0.05}
                />

                <div className="container-site relative z-10 text-center">
                    <ScrollReveal>
                        <span
                            className="badge-section gradient-berry mb-6"
                            style={{ color: 'white' }}
                        >
                            Portfolio
                        </span>
                    </ScrollReveal>

                    <TextReveal
                        text="Projects that showcase strategy, creativity & impact"
                        className="font-display mb-8"
                    />

                    <ScrollReveal delay={0.2}>
                        <p
                            className="c-gray-400 text-section-subtitle max-w-narrow mx-auto mb-4"
                        >
                            A collection of real-world projects completed during my
                            internship at MakeMyTrip and academic studies — demonstrating
                            digital marketing strategy, data analytics, and creative
                            execution.
                        </p>
                    </ScrollReveal>

                    {/* MakeMyTrip context banner */}
                    <ScrollReveal delay={0.25}>
                        <div
                            className="glass-card mx-auto mb-10"
                            style={{
                                maxWidth: '36rem',
                                padding: '1rem 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>✈️</span>
                            <p
                                className="c-gray-300 text-small"
                                style={{ textAlign: 'left' }}
                            >
                                <strong className="c-coral">4 of 5 projects</strong> were
                                completed during my Sales & Digital Marketing internship
                                at{' '}
                                <strong className="c-white">
                                    MakeMyTrip (Franchise), Bhopal
                                </strong>{' '}
                                — Jul to Nov 2024.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Filters */}
                    <ScrollReveal delay={0.3}>
                        <div className="flex-wrap-center gap-2">
                            <FunnelIcon
                                style={{
                                    width: '1rem',
                                    height: '1rem',
                                    color: '#525252',
                                    marginRight: '0.25rem',
                                }}
                            />
                            {['All', ...allTags.slice(0, 10)].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() =>
                                        setFilter(tag === 'All' ? 'All' : tag)
                                    }
                                    className={`font-display ${filter === tag ||
                                            (tag === 'All' && filter === 'All')
                                            ? 'gradient-rainbow'
                                            : 'glass-card-sm'
                                        }`}
                                    style={{
                                        padding: '0.625rem 1rem',
                                        borderRadius: '1rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        border: 'none',
                                        color:
                                            filter === tag ||
                                                (tag === 'All' && filter === 'All')
                                                ? 'white'
                                                : '#a3a3a3',
                                        transition: 'all 0.3s',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {tag === 'All' ? 'All Projects' : tag}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <MarqueeText
                items={[
                    'Strategy',
                    'MakeMyTrip',
                    'Creativity',
                    'Impact',
                    'Analytics',
                    'Design',
                ]}
                speed={20}
            />

            {/* Projects Grid */}
            <section className="section-space" aria-label="Projects">
                <div className="container-site">
                    <div className="grid-projects">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <div className="text-center" style={{ padding: '5rem 0' }}>
                            <span
                                style={{
                                    fontSize: '3rem',
                                    display: 'block',
                                    marginBottom: '1rem',
                                }}
                            >
                                🔍
                            </span>
                            <p
                                className="font-display c-gray-500"
                                style={{ fontSize: '1.125rem' }}
                            >
                                No projects match this filter.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Skills Summary */}
            <section style={{ paddingBottom: '5rem' }}>
                <div className="container-site max-w-wide mx-auto">
                    <ScrollReveal>
                        <div className="border-gradient-wrap">
                            <div className="border-gradient-inner p-10 text-center">
                                <h3
                                    className="font-display c-white mb-3"
                                    style={{ fontSize: '1.5rem', fontWeight: 700 }}
                                >
                                    Skills Demonstrated Across All Projects
                                </h3>
                                <p
                                    className="c-gray-500 text-small mb-6"
                                    style={{ maxWidth: '30rem', margin: '0 auto 1.5rem' }}
                                >
                                    Developed through hands-on experience at MakeMyTrip
                                    and academic coursework at Sage University &amp;
                                    University of Hertfordshire.
                                </p>
                                <div className="flex-wrap-center gap-3">
                                    {[
                                        { s: 'SEO Optimisation', c: 'coral' },
                                        { s: 'Content Strategy', c: 'sky' },
                                        { s: 'Social Media', c: 'mint' },
                                        { s: 'Lead Generation', c: 'lavender' },
                                        { s: 'Data Analytics', c: 'sunny' },
                                        { s: 'Brand Positioning', c: 'peach' },
                                        { s: 'Competitive Analysis', c: 'coral' },
                                        { s: 'Power BI', c: 'sky' },
                                        { s: 'Market Research', c: 'mint' },
                                        { s: 'Customer Journey', c: 'lavender' },
                                        { s: 'Financial Modelling', c: 'sunny' },
                                        { s: 'Campaign Planning', c: 'peach' },
                                    ].map(({ s, c }) => {
                                        const ccm = COLOR_MAP[c]
                                        return (
                                            <span
                                                key={s}
                                                className={`${ccm.bg} ${ccm.text} tag`}
                                                style={{ padding: '0.5rem 1rem' }}
                                            >
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