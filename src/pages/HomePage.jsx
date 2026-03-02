import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import ParallaxSection from '../components/ParallaxSection'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import ColorBlob from '../components/ColorBlob'
import MarqueeText from '../components/MarqueeText'
import CountUp from '../components/CountUp'
import {
    personalInfo, stats, skills, education, experience,
    certifications, interests, languages, projects, COLOR_MAP,
} from '../data/portfolioData'
import pbimage from "./pb.jpg"
gsap.registerPlugin(ScrollTrigger)

const BORDER_COLORS = { coral: '#ff6b6b', sky: '#4d96ff', mint: '#6bcb77', lavender: '#a66cff', sunny: '#ffd93d', peach: '#ffb085' }

export default function HomePage() {
    const heroRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.15 })
            tl.fromTo('.h-badge', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' })
                .fromTo('.h-greet', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
                .fromTo('.h-name', { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }, '-=0.3')
                .fromTo('.h-sub', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
                .fromTo('.h-tag', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
                .fromTo('.h-btn', { opacity: 0, y: 18, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.7)' }, '-=0.15')
                .fromTo('.h-scroll', { opacity: 0 }, { opacity: 1, duration: 0.4 })
            gsap.utils.toArray('.f-shape').forEach((s, i) => {
                gsap.to(s, { y: `random(-35, 35)`, x: `random(-25, 25)`, rotation: `random(-12, 12)`, duration: `random(5, 9)`, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.4 })
            })
        }, heroRef)
        return () => ctx.revert()
    }, [])

    return (
        <>
            {/* ======== HERO ======== */}
            <section ref={heroRef} className="noise relative overflow-hidden flex-center" style={{ minHeight: '100vh', paddingTop: '5rem' }} aria-label="Introduction">
                <ColorBlob color="coral" size={550} top="-8%" right="-4%" opacity={0.1} className="anim-float-slow" />
                <ColorBlob color="sky" size={450} bottom="8%" left="-8%" opacity={0.08} className="anim-float-medium" />
                <ColorBlob color="lavender" size={350} top="38%" right="28%" opacity={0.06} />
                <ColorBlob color="mint" size={280} top="18%" left="18%" opacity={0.05} className="anim-float-slow" />
                <ColorBlob color="sunny" size={220} bottom="18%" right="12%" opacity={0.06} className="anim-float-medium" />

                {/* Floating shapes */}
                <div className="f-shape absolute" style={{ top: '15%', left: '10%', width: '3.5rem', height: '3.5rem', border: '2px solid rgba(255,107,107,0.18)', borderRadius: '1rem', transform: 'rotate(12deg)' }} aria-hidden="true" />
                <div className="f-shape absolute" style={{ top: '25%', right: '12%', width: '2.5rem', height: '2.5rem', border: '2px solid rgba(77,150,255,0.18)', borderRadius: '50%' }} aria-hidden="true" />
                <div className="f-shape absolute" style={{ bottom: '28%', left: '14%', width: '4rem', height: '4rem', border: '2px solid rgba(107,203,119,0.12)', borderRadius: '1.5rem', transform: 'rotate(-12deg)' }} aria-hidden="true" />
                <div className="f-shape absolute" style={{ top: '58%', right: '18%', width: '2rem', height: '2rem', background: 'rgba(166,108,255,0.05)', borderRadius: '0.75rem', transform: 'rotate(45deg)' }} aria-hidden="true" />

                {/* Dot grid */}
                <div className="absolute" style={{ inset: 0, opacity: 0.02, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

                <div className="relative z-10 w-full container-site text-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                    <div className="h-badge mb-8" style={{ opacity: 0 }}>
                        <span className="badge-hero">
                            <span className="dot-pulse dot-mint anim-pulse-dot" />
                            {personalInfo.university}
                        </span>
                    </div>

                    <p className="h-greet font-display c-gray-400" style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '0.75rem', opacity: 0 }}>Hello, I'm</p>

                    <h1 style={{ marginBottom: '1.5rem' }}>
                        <span className="h-name text-gradient-sunset font-display text-hero" style={{ display: 'block', opacity: 0 }}>{personalInfo.firstName}</span>
                        <span className="h-name text-gradient-ocean font-display text-hero" style={{ display: 'block', opacity: 0 }}>{personalInfo.lastName}</span>
                    </h1>

                    <p className="h-sub font-display c-gray-300 mx-auto" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)', fontWeight: 300, maxWidth: '38rem', marginBottom: '0.75rem', opacity: 0 }}>
                        {personalInfo.subtitle}
                    </p>

                    <p className="h-tag c-gray-500" style={{ marginBottom: '2.5rem', opacity: 0 }}>{personalInfo.tagline}</p>

                    <div className="flex-wrap-center gap-4 mb-16">
                        <MagneticButton>
                            <Link to="/projects" className="h-btn gradient-sunset font-display group" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 700, color: '#171717', opacity: 0 }}>
                                Explore My Work <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} className="transition-transform group-hover-shift" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link to="/contact" className="h-btn glass-card font-display" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontWeight: 700, color: 'white', opacity: 0 }}>
                                Say Hello 👋
                            </Link>
                        </MagneticButton>
                    </div>

                    {/* Stats */}
                    <div className="grid-stats mx-auto" style={{ maxWidth: '48rem' }}>
                        {stats.map((s, i) => {
                            const cm = COLOR_MAP[s.color]
                            return (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="glass-card card-lift text-center p-5">
                                        <div className={`${cm.text} font-display`} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700 }}>
                                            <CountUp target={s.number} suffix={s.suffix} />
                                        </div>
                                        <div className="c-gray-500 text-label mt-2">{s.label}</div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>

                    <div className="h-scroll mt-16" style={{ opacity: 0 }}>
                        <a href="#about" className="flex-col" style={{ alignItems: 'center', gap: '0.5rem', color: '#525252' }} aria-label="Scroll down">
                            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 500 }}>Scroll to explore</span>
                            <ArrowDownIcon style={{ width: '1rem', height: '1rem' }} className="anim-bounce" />
                        </a>
                    </div>
                </div>
            </section>

            <MarqueeText items={['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Design', 'Analytics', 'Social Media', 'Email Marketing', 'Power BI']} speed={25} />

            {/* ======== ABOUT ======== */}
            <section id="about" className="section-space relative overflow-hidden" aria-label="About Me">
                <ColorBlob color="coral" size={380} top="0" right="-4%" opacity={0.05} />
                <ColorBlob color="sky" size={320} bottom="8%" left="-4%" opacity={0.04} />

                <div className="container-site relative z-10">
                    <ScrollReveal>
                        <span className="badge-section gradient-sunset mb-6" style={{ color: '#171717' }}>About Me</span>
                    </ScrollReveal>

                    <TextReveal text="I craft digital experiences that blend creativity with data to deliver real impact." className="font-display mb-16" />

                    <div className="grid-about">
                        {/* Left column */}
                        <div className="flex-col gap-6">
                            <ScrollReveal direction="left">
                                <div className="border-gradient-wrap">
                                    <div className="border-gradient-inner p-8 text-center">
                                        <div className="anim-float-slow mx-auto mb-5" style={{ width: '9rem', height: '9rem', borderRadius: '1.5rem', padding: '3px', background: 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #a66cff)', overflow: 'hidden' }}>
                                            <img
                                                src={pbimage}
                                                alt="Pratishtha Bhadoria — Digital Marketing Strategist"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: 'calc(1.5rem - 3px)',
                                                    display: 'block',
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-display c-white" style={{ fontWeight: 700, fontSize: '1.25rem' }}>{personalInfo.name}</h3>
                                        <p className="c-coral text-small" style={{ fontWeight: 500, marginTop: '0.25rem' }}>{personalInfo.title}</p>
                                        <p className="c-gray-500 text-small mt-2">📍 {personalInfo.location}</p>
                                        <div className="flex-wrap-center gap-2 mt-6">
                                            {languages.map(l => (
                                                <span key={l.name} className="glass-card-sm" style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', color: '#d4d4d4' }}>
                                                    {l.flag} {l.name} — {l.level}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.1}>
                                <div className="glass-card p-6">
                                    <h4 className="font-display c-white text-label mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span className="accent-line gradient-sunset" /> My Mission
                                    </h4>
                                    <p className="c-gray-400 text-small italic" style={{ lineHeight: 1.7 }}>"{personalInfo.mission}"</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.15}>
                                <div className="glass-card p-6">
                                    <h4 className="font-display c-white text-label mb-3">Career Ambition 🎯</h4>
                                    <p className="c-gray-400" style={{ fontSize: '0.8rem', lineHeight: 1.8 }}>{personalInfo.ambition}</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="glass-card p-6">
                                    <h4 className="font-display c-white text-label mb-3">Beyond Work 🌈</h4>
                                    <div className="grid-interests">
                                        {interests.map((int, i) => (
                                            <div key={i} className="bg-surface-overlay rounded-2xl p-4 text-center">
                                                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>{int.emoji}</span>
                                                <span className="c-gray-400" style={{ fontSize: '0.75rem' }}>{int.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right column */}
                        <div className="flex-col gap-8">
                            <ScrollReveal>
                                <div className="glass-card" style={{ padding: '2rem 2.5rem' }}>
                                    <p className="c-gray-300" style={{ fontSize: '1rem', lineHeight: 1.85, marginBottom: '1rem' }}>{personalInfo.bio}</p>
                                    <p className="c-gray-400 text-small" style={{ lineHeight: 1.85 }}>{personalInfo.bioExtended}</p>
                                </div>
                            </ScrollReveal>

                            {/* Experience */}
                            <ScrollReveal delay={0.1}>
                                <h3 className="font-display c-white mb-5" style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>💼</span> Experience
                                </h3>
                                {experience.map((exp, i) => (
                                    <div key={i} className="glass-card border-l-4 border-coral-solid" style={{ padding: '1.5rem 2rem' }}>
                                        <div className="flex-between mb-4 gap-2">
                                            <div>
                                                <h4 className="font-display c-white text-card-title">{exp.role}</h4>
                                                <p className="c-coral text-small" style={{ fontWeight: 500 }}>{exp.company}</p>
                                            </div>
                                            <div className="c-gray-500 text-small" style={{ display: 'flex', gap: '0.75rem' }}>
                                                <span>📅 {exp.period}</span>
                                                <span>📍 {exp.location}</span>
                                            </div>
                                        </div>
                                        <ul className="flex-col gap-3">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="bullet-item">
                                                    <span className="bullet-marker c-coral">▸</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ScrollReveal>

                            {/* Education */}
                            <ScrollReveal delay={0.2}>
                                <h3 className="font-display c-white mb-5" style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🎓</span> Education
                                </h3>
                                <div className="flex-col gap-4">
                                    {education.map((edu, i) => {
                                        const cm = COLOR_MAP[edu.color]
                                        return (
                                            <div key={i} className={`glass-card card-lift border-l-4`} style={{ borderColor: BORDER_COLORS[edu.color], padding: '1.25rem 1.5rem' }}>
                                                <div className="flex-between">
                                                    <div>
                                                        <h4 className="font-display c-white" style={{ fontWeight: 700, fontSize: '1rem' }}>{edu.degree}</h4>
                                                        <p className={`${cm.text} text-small`} style={{ fontWeight: 500, marginTop: '0.125rem' }}>{edu.institution}, {edu.location}</p>
                                                    </div>
                                                    <span className="c-gray-500 text-small">{edu.period}</span>
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                                                    {edu.highlights.map((h, j) => (
                                                        <span key={j} className={`${cm.bg} ${cm.text} tag`}>{h}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======== SKILLS ======== */}
            <section className="section-space relative overflow-hidden" aria-label="Skills">
                <ColorBlob color="lavender" size={380} top="8%" left="-4%" opacity={0.05} />
                <ColorBlob color="mint" size={320} bottom="4%" right="-4%" opacity={0.04} />
                <div className="container-site relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="badge-section gradient-ocean mb-6" style={{ color: 'white' }}>Expertise</span>
                            <TextReveal text="Skills that make the magic happen" className="font-display" />
                        </div>
                    </ScrollReveal>
                    <div className="grid-skills">
                        {skills.map((skill, i) => {
                            const cm = COLOR_MAP[skill.color]
                            return (
                                <ScrollReveal key={skill.category} delay={i * 0.07} scale>
                                    <div className="glass-card card-lift p-6 h-full">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                            <span style={{ fontSize: '1.75rem' }}>{skill.emoji}</span>
                                            <h3 className="font-display c-white" style={{ fontWeight: 700, fontSize: '1.125rem' }}>{skill.category}</h3>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {skill.items.map(item => (
                                                <span key={item} className={`${cm.bg} ${cm.text} tag`}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ======== PARALLAX DIVIDER ======== */}
            <ParallaxSection speed={0.2} className="section-space">
                <div className="container-site text-center max-w-wide mx-auto">
                    <ScrollReveal>
                        <h2 className="font-display text-gradient-rainbow mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 700 }}>
                            Let's see the work
                        </h2>
                        <p className="c-gray-500 text-section-subtitle max-w-narrow mx-auto mb-8">
                            From UX evaluations to data dashboards — each project tells a story of strategy meets creativity.
                        </p>
                        <MagneticButton>
                            <Link to="/projects" className="gradient-berry font-display group" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 700 }}>
                                View All Projects <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} className="transition-transform group-hover-shift" />
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* ======== FEATURED PROJECTS ======== */}
            <section className="section-space relative overflow-hidden" aria-label="Featured Projects">
                <ColorBlob color="coral" size={320} top="4%" right="0" opacity={0.04} />
                <div className="container-site relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="badge-section gradient-fire mb-6" style={{ color: '#171717' }}>Portfolio</span>
                            <TextReveal text="Featured work that I'm proud of" className="font-display" />
                        </div>
                    </ScrollReveal>

                    <div className="grid-featured mb-12">
                        {projects.slice(0, 3).map((p, i) => {
                            const cm = COLOR_MAP[p.color]
                            return (
                                <ScrollReveal key={p.id} delay={i * 0.1} scale>
                                    <Link to="/projects" className="group" style={{ display: 'block' }}>
                                        <div className="glass-card card-lift overflow-hidden">
                                            <div className="project-img-wrap">
                                                <img src={p.image} alt={p.title} loading="lazy" />
                                                <div className="project-img-overlay" />
                                                <div className="project-img-badge">
                                                    <span className="tag-tool" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', color: 'white' }}>{p.type}</span>
                                                </div>
                                                <span className="project-img-emoji">{p.emoji}</span>
                                            </div>
                                            <div className="p-6">
                                                <span className={`${cm.text} font-display text-label`}>{p.type}</span>
                                                <h3 className="font-display c-white mt-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>{p.title}</h3>
                                                <p className="c-gray-500 text-tiny mt-2">{p.subtitle}</p>
                                                <div className={`${cm.text} font-display mt-4`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 700, fontSize: '0.875rem' }}>
                                                    View Project <ArrowRightIcon style={{ width: '0.875rem', height: '0.875rem' }} className="transition-transform group-hover-shift" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            )
                        })}
                    </div>

                    <ScrollReveal>
                        <div className="text-center">
                            <MagneticButton>
                                <Link to="/projects" className="gradient-rainbow font-display group" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 700 }}>
                                    View All {projects.length} Projects <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} className="transition-transform group-hover-shift" />
                                </Link>
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ======== CERTIFICATIONS ======== */}
            <section className="section-space relative overflow-hidden" aria-label="Certifications">
                <div className="container-site relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="badge-section gradient-aurora mb-6" style={{ color: 'white' }}>Achievements</span>
                            <TextReveal text="Certifications & awards" className="font-display" />
                        </div>
                    </ScrollReveal>
                    <div className="grid-certs">
                        {certifications.map((cert, i) => (
                            <ScrollReveal key={i} delay={i * 0.05} scale>
                                <div className="glass-card card-lift p-5 h-full" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{cert.emoji}</span>
                                    <span className="c-gray-200 text-small" style={{ fontWeight: 500 }}>{cert.name}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <MarqueeText items={['Creative', 'Strategic', 'Data-Driven', 'Innovative', 'Passionate', 'Collaborative']} speed={30} />

            {/* ======== CTA ======== */}
            <section className="section-space relative overflow-hidden" aria-label="CTA">
                <ColorBlob color="coral" size={450} top="-8%" left="18%" opacity={0.06} />
                <ColorBlob color="sky" size={380} bottom="-8%" right="18%" opacity={0.05} />
                <div className="container-site max-w-medium mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <div className="border-gradient-wrap">
                            <div className="border-gradient-inner" style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}>
                                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1.25rem' }}>✨</span>
                                <h2 className="font-display c-white mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700 }}>
                                    Let's Create Something <span className="text-gradient-rainbow">Amazing</span>
                                </h2>
                                <p className="c-gray-400 max-w-narrow mx-auto mb-10" style={{ fontSize: '1.125rem' }}>
                                    I am always open to collaboration and new opportunities. Feel free to connect with me.
                                </p>
                                <div className="flex-wrap-center gap-4">
                                    <MagneticButton>
                                        <Link to="/contact" className="gradient-sunset font-display group" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#171717', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 700 }}>
                                            Get in Touch <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} className="transition-transform group-hover-shift" />
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card font-display" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', padding: '1rem 2rem', fontWeight: 700 }}>
                                            LinkedIn <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </a>
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}