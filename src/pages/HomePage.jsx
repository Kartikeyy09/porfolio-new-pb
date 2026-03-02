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
    certifications, interests, languages, COLOR_MAP,
} from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
    const heroRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 })
            tl.fromTo('.hero-badge', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' })
                .fromTo('.hero-greeting', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
                .fromTo('.hero-name-line', { opacity: 0, y: 50, rotateX: 30 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
                .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
                .fromTo('.hero-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
                .fromTo('.hero-btn', { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.2')
                .fromTo('.hero-scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1')

            gsap.utils.toArray('.floating-shape').forEach((shape, i) => {
                gsap.to(shape, {
                    y: `random(-40, 40)`, x: `random(-30, 30)`, rotation: `random(-15, 15)`,
                    duration: `random(4, 8)`, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.5,
                })
            })
        }, heroRef)
        return () => ctx.revert()
    }, [])

    return (
        <>
            {/* ===== HERO ===== */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-overlay" aria-label="Introduction">
                <ColorBlob color="coral" size={600} top="-10%" right="-5%" opacity={0.12} className="animate-float-slow" />
                <ColorBlob color="sky" size={500} bottom="10%" left="-10%" opacity={0.1} className="animate-float-medium" />
                <ColorBlob color="lavender" size={400} top="40%" right="30%" opacity={0.08} />
                <ColorBlob color="mint" size={300} top="20%" left="20%" opacity={0.06} className="animate-float-slow" />
                <ColorBlob color="sunny" size={250} bottom="20%" right="15%" opacity={0.07} className="animate-float-medium" />

                <div className="floating-shape absolute top-[15%] left-[10%] w-16 h-16 rounded-2xl rotate-12" style={{ border: '2px solid rgba(255,107,107,0.2)' }} aria-hidden="true" />
                <div className="floating-shape absolute top-[25%] right-[12%] w-12 h-12 rounded-full" style={{ border: '2px solid rgba(77,150,255,0.2)' }} aria-hidden="true" />
                <div className="floating-shape absolute bottom-[30%] left-[15%] w-20 h-20 rounded-3xl -rotate-12" style={{ border: '2px solid rgba(107,203,119,0.15)' }} aria-hidden="true" />
                <div className="floating-shape absolute top-[60%] right-[20%] w-10 h-10 rounded-xl rotate-45" style={{ background: 'rgba(166,108,255,0.05)' }} aria-hidden="true" />
                <div className="floating-shape absolute top-[10%] right-[40%] w-8 h-8 rounded-full" style={{ background: 'rgba(255,217,61,0.08)' }} aria-hidden="true" />
                <div className="floating-shape absolute bottom-[15%] right-[35%] w-14 h-14 rounded-2xl rotate-6" style={{ border: '2px solid rgba(255,176,133,0.15)' }} aria-hidden="true" />

                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} aria-hidden="true" />

                <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center py-16 z-10">
                    <div className="hero-badge mb-8 opacity-0">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#d4d4d4' }}>
                            <span className="w-2 h-2 rounded-full dot-mint animate-pulse-dot" />
                            {personalInfo.university} — {personalInfo.degree.split('with')[0].trim()}
                        </span>
                    </div>

                    <p className="hero-greeting text-lg sm:text-xl font-display font-light mb-3 opacity-0" style={{ color: '#a3a3a3' }}>
                        Hello, I'm
                    </p>

                    <h1 className="mb-6" style={{ perspective: '1000px' }}>
                        <span className="hero-name-line block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-gradient-sunset leading-[1.1] opacity-0">
                            {personalInfo.firstName}
                        </span>
                        <span className="hero-name-line block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-gradient-ocean leading-[1.1] opacity-0">
                            {personalInfo.lastName}
                        </span>
                    </h1>

                    <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl font-display font-light mb-4 max-w-2xl mx-auto opacity-0" style={{ color: '#d4d4d4' }}>
                        {personalInfo.subtitle}
                    </p>

                    <p className="hero-tagline text-base mb-10 opacity-0" style={{ color: '#737373' }}>
                        {personalInfo.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <MagneticButton>
                            <Link to="/projects" className="hero-btn opacity-0 group gradient-sunset px-8 py-4 rounded-2xl font-bold font-display text-base inline-flex items-center gap-2 transition-shadow duration-300" style={{ color: '#171717', boxShadow: '0 10px 40px rgba(255,217,61,0.15)' }}>
                                Explore My Work
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link to="/contact" className="hero-btn opacity-0 glass-card px-8 py-4 rounded-2xl font-bold font-display text-base inline-flex items-center gap-2 transition-all duration-300" style={{ color: 'white' }}>
                                Say Hello 👋
                            </Link>
                        </MagneticButton>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {stats.map((s, i) => {
                            const cm = COLOR_MAP[s.color] || COLOR_MAP.coral
                            return (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className={`glass-card rounded-2xl p-5 text-center card-lift`}>
                                        <div className={`text-3xl lg:text-4xl font-display font-bold ${cm.text}`}>
                                            <CountUp target={s.number} suffix={s.suffix} />
                                        </div>
                                        <div className="text-xs mt-1.5 uppercase tracking-widest font-medium" style={{ color: '#737373' }}>{s.label}</div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>

                    <div className="hero-scroll-indicator mt-16 opacity-0">
                        <a href="#about" className="flex flex-col items-center gap-2 transition-colors" style={{ color: '#525252' }} aria-label="Scroll down">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
                            <ArrowDownIcon className="w-4 h-4 animate-bounce" />
                        </a>
                    </div>
                </div>
            </section>

            <MarqueeText items={['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Design', 'Analytics', 'Social Media', 'Email Marketing', 'Power BI']} speed={25} />

            {/* ===== ABOUT ===== */}
            <section id="about" className="relative py-24 lg:py-32 overflow-hidden" aria-label="About Me">
                <ColorBlob color="coral" size={400} top="0" right="-5%" opacity={0.06} />
                <ColorBlob color="sky" size={350} bottom="10%" left="-5%" opacity={0.05} />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <ScrollReveal>
                        <span className="inline-block gradient-sunset text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6" style={{ color: '#171717' }}>About Me</span>
                    </ScrollReveal>

                    <TextReveal
                        text="I craft digital experiences that blend creativity with data to deliver real impact."
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-16 max-w-5xl"
                        tag="h2"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left */}
                        <div className="lg:col-span-4 space-y-6">
                            <ScrollReveal direction="left">
                                <div className="border-gradient">
                                    <div className="rounded-3xl p-8 text-center" style={{ background: '#171717' }}>
                                        <div className="w-32 h-32 mx-auto rounded-3xl gradient-rainbow flex items-center justify-center mb-5 animate-float-slow">
                                            <span className="text-5xl font-display font-bold text-white">PB</span>
                                        </div>
                                        <h3 className="text-white font-display font-bold text-xl">{personalInfo.name}</h3>
                                        <p className="c-coral text-sm font-medium mt-1">{personalInfo.title}</p>
                                        <p className="text-sm mt-1" style={{ color: '#737373' }}>📍 {personalInfo.location}</p>
                                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                                            {languages.map(l => (
                                                <span key={l.name} className="glass-card px-3 py-1.5 rounded-xl text-xs" style={{ color: '#d4d4d4' }}>
                                                    {l.flag} {l.name} — {l.level}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.1}>
                                <div className="glass-card rounded-3xl p-6">
                                    <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-6 h-1 gradient-sunset rounded-full inline-block" />
                                        My Mission
                                    </h4>
                                    <p className="text-sm leading-relaxed italic" style={{ color: '#a3a3a3' }}>"{personalInfo.mission}"</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.2}>
                                <div className="glass-card rounded-3xl p-6">
                                    <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-3">Beyond Work 🌈</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {interests.map((int, i) => (
                                            <div key={i} className="rounded-2xl p-3 text-center transition-colors" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                <span className="text-2xl block mb-1">{int.emoji}</span>
                                                <span className="text-xs" style={{ color: '#a3a3a3' }}>{int.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right */}
                        <div className="lg:col-span-8 space-y-8">
                            <ScrollReveal>
                                <div className="glass-card rounded-3xl p-8 lg:p-10">
                                    <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#d4d4d4' }}>{personalInfo.bio}</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <h3 className="text-white font-display font-bold text-2xl mb-5 flex items-center gap-3">
                                    <span className="text-2xl">💼</span> Experience
                                </h3>
                                {experience.map((exp, i) => (
                                    <div key={i} className="glass-card rounded-3xl p-6 lg:p-8" style={{ borderLeft: '4px solid var(--color-coral)' }}>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <div>
                                                <h4 className="text-white font-display font-bold text-lg">{exp.role}</h4>
                                                <p className="c-coral font-medium text-sm">{exp.company}</p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2 sm:mt-0 text-sm" style={{ color: '#737373' }}>
                                                <span>📅 {exp.period}</span>
                                                <span>📍 {exp.location}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="text-sm flex items-start gap-3" style={{ color: '#a3a3a3' }}>
                                                    <span className="c-coral mt-0.5">▸</span>{h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <h3 className="text-white font-display font-bold text-2xl mb-5 flex items-center gap-3">
                                    <span className="text-2xl">🎓</span> Education
                                </h3>
                                <div className="space-y-4">
                                    {education.map((edu, i) => {
                                        const cm = COLOR_MAP[edu.color] || COLOR_MAP.coral
                                        return (
                                            <div key={i} className={`glass-card rounded-3xl p-5 card-lift`} style={{ borderLeft: `4px solid var(--color-${edu.color})` }}>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                    <div>
                                                        <h4 className="text-white font-display font-bold text-base">{edu.degree}</h4>
                                                        <p className={`${cm.text} text-sm font-medium mt-0.5`}>{edu.institution}, {edu.location}</p>
                                                    </div>
                                                    <span className="text-sm mt-1 sm:mt-0" style={{ color: '#737373' }}>{edu.period}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {edu.highlights.map((h, j) => (
                                                        <span key={j} className={`text-xs ${cm.bg} ${cm.text} px-3 py-1 rounded-xl`} style={{ border: `1px solid rgba(255,255,255,0.08)` }}>{h}</span>
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

            {/* ===== SKILLS ===== */}
            <section className="relative py-24 lg:py-32 overflow-hidden" aria-label="Skills">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.01), transparent)' }} />
                <ColorBlob color="lavender" size={400} top="10%" left="-5%" opacity={0.06} />
                <ColorBlob color="mint" size={350} bottom="5%" right="-5%" opacity={0.05} />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="inline-block gradient-ocean text-white text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6">Expertise</span>
                            <TextReveal text="Skills that make the magic happen" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white" tag="h2" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skills.map((skill, i) => {
                            const cm = COLOR_MAP[skill.color] || COLOR_MAP.coral
                            return (
                                <ScrollReveal key={skill.category} delay={i * 0.08} scale>
                                    <div className={`glass-card rounded-3xl p-6 card-lift h-full`}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="text-3xl">{skill.emoji}</span>
                                            <h3 className="text-white font-display font-bold text-lg">{skill.category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map(item => (
                                                <span key={item} className={`text-xs ${cm.bg} ${cm.text} px-3 py-1.5 rounded-xl`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ===== PARALLAX DIVIDER ===== */}
            <ParallaxSection speed={0.2} className="py-24 lg:py-32">
                <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-gradient-rainbow mb-6">
                            Let's see the work
                        </h2>
                        <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: '#737373' }}>
                            From social media campaigns to data dashboards — each project tells a story of strategy meets creativity.
                        </p>
                        <MagneticButton>
                            <Link to="/projects" className="inline-flex items-center gap-2 gradient-berry text-white px-8 py-4 rounded-2xl font-bold font-display transition-all duration-300 group" style={{ boxShadow: '0 10px 40px rgba(166,108,255,0.15)' }}>
                                View All Projects
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* ===== FEATURED PROJECTS ===== */}
            <section className="relative py-24 lg:py-32 overflow-hidden" aria-label="Featured Projects">
                <ColorBlob color="coral" size={350} top="5%" right="0" opacity={0.05} />
                <ColorBlob color="sky" size={300} bottom="10%" left="0" opacity={0.05} />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="inline-block gradient-fire text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6" style={{ color: '#171717' }}>Portfolio</span>
                            <TextReveal text="Featured work that I'm proud of" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white" tag="h2" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { id: 1, title: 'Instagram Brand Campaign', type: 'Social Media', emoji: '📱', gradient: 'gradient-sunset', textColor: 'c-coral' },
                            { id: 2, title: 'SEO Blog Article', type: 'SEO & Content', emoji: '🔍', gradient: 'gradient-ocean', textColor: 'c-mint' },
                            { id: 3, title: 'Email Welcome Sequence', type: 'Email Marketing', emoji: '📧', gradient: 'gradient-berry', textColor: 'c-lavender' },
                        ].map((p, i) => (
                            <ScrollReveal key={p.id} delay={i * 0.1} scale>
                                <Link to="/projects" className="block group">
                                    <div className="glass-card rounded-3xl overflow-hidden card-lift">
                                        <div className={`h-48 ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                                            <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{p.emoji}</span>
                                            <div className="absolute inset-0 transition-colors duration-300" style={{ background: 'rgba(0,0,0,0.1)' }} />
                                        </div>
                                        <div className="p-6">
                                            <span className={`${p.textColor} text-xs font-bold font-display uppercase tracking-widest`}>{p.type}</span>
                                            <h3 className="text-white font-display font-bold text-lg mt-2">{p.title}</h3>
                                            <div className={`flex items-center gap-1 ${p.textColor} text-sm mt-4 font-bold font-display`}>
                                                View Project <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="text-center">
                            <MagneticButton>
                                <Link to="/projects" className="inline-flex items-center gap-2 gradient-rainbow text-white px-8 py-4 rounded-2xl font-bold font-display transition-all duration-300 group" style={{ boxShadow: '0 10px 40px rgba(255,107,107,0.15)' }}>
                                    View All 5 Projects <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== CERTIFICATIONS ===== */}
            <section className="relative py-24 lg:py-32 overflow-hidden" aria-label="Certifications">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="inline-block gradient-aurora text-white text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6">Achievements</span>
                            <TextReveal text="Certifications & awards" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white" tag="h2" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {certifications.map((cert, i) => (
                            <ScrollReveal key={i} delay={i * 0.06} scale>
                                <div className="glass-card rounded-2xl p-5 flex items-center gap-4 card-lift h-full">
                                    <span className="text-2xl flex-shrink-0">{cert.emoji}</span>
                                    <span className="text-sm font-medium" style={{ color: '#e5e5e5' }}>{cert.name}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <MarqueeText items={['Creative', 'Strategic', 'Data-Driven', 'Innovative', 'Passionate', 'Collaborative', 'Results-Oriented']} speed={30} />

            {/* ===== CTA ===== */}
            <section className="relative py-24 lg:py-36 overflow-hidden" aria-label="Call to Action">
                <ColorBlob color="coral" size={500} top="-10%" left="20%" opacity={0.08} />
                <ColorBlob color="sky" size={400} bottom="-10%" right="20%" opacity={0.07} />
                <ColorBlob color="lavender" size={300} top="50%" left="-5%" opacity={0.05} />

                <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
                    <ScrollReveal>
                        <div className="border-gradient">
                            <div className="rounded-3xl p-10 lg:p-16" style={{ background: '#171717' }}>
                                <span className="text-5xl mb-5 block">✨</span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-5">
                                    Let's Create Something{' '}
                                    <span className="text-gradient-rainbow">Amazing</span>
                                </h2>
                                <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: '#a3a3a3' }}>
                                    Open to internships, collaborations, and conversations about digital marketing and beyond.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <MagneticButton>
                                        <Link to="/contact" className="group gradient-sunset px-8 py-4 rounded-2xl font-bold font-display inline-flex items-center gap-2 transition-all" style={{ color: '#171717', boxShadow: '0 10px 40px rgba(255,217,61,0.2)' }}>
                                            Get in Touch <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card text-white px-8 py-4 rounded-2xl font-bold font-display inline-flex items-center gap-2 transition-all">
                                            LinkedIn
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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