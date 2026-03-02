import { useEffect, useState } from 'react'
import { PaperAirplaneIcon, CheckCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import ColorBlob from '../components/ColorBlob'
import { personalInfo, COLOR_MAP } from '../data/portfolioData'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [sent, setSent] = useState(false)
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.subject.trim()) e.subject = 'Subject is required'
        if (!form.message.trim()) e.message = 'Message is required'
        setErrors(e)
        return !Object.keys(e).length
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (validate()) {
            setSent(true)
            setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 4000)
        }
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setForm(p => ({ ...p, [name]: value }))
        if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
    }

    const contactItems = [
        { emoji: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { emoji: '📞', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, '')}` },
        { emoji: '📍', label: 'Location', value: personalInfo.location, href: null },
        { emoji: '🎓', label: 'University Email', value: personalInfo.universityEmail, href: `mailto:${personalInfo.universityEmail}` },
    ]

    return (
        <div style={{ paddingTop: '5rem' }}>
            {/* Header */}
            <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '3rem' }} aria-label="Contact Header">
                <ColorBlob color="coral" size={380} top="-8%" left="8%" opacity={0.06} />
                <ColorBlob color="sky" size={320} bottom="0" right="8%" opacity={0.05} />
                <div className="container-site relative z-10 text-center">
                    <ScrollReveal>
                        <span className="badge-section gradient-sunset mb-6" style={{ color: '#171717' }}>Get in Touch</span>
                    </ScrollReveal>
                    <TextReveal text="Let's create something amazing together" className="font-display mb-6" />
                    <ScrollReveal delay={0.2}>
                        <p className="c-gray-400 text-section-subtitle max-w-narrow mx-auto">
                            I am always open to collaboration and new opportunities. Feel free to connect with me ✨
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main */}
            <section className="section-space" aria-label="Contact Form">
                <div className="container-site">
                    <div className="grid-contact">
                        {/* Left */}
                        <div className="flex-col gap-5">
                            {contactItems.map((c, i) => {
                                const inner = (
                                    <div className="glass-card card-lift p-5" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '1.5rem' }}>{c.emoji}</span>
                                        <div>
                                            <span className="font-display c-gray-600 text-label">{c.label}</span>
                                            <p className="c-white text-small" style={{ fontWeight: 500, marginTop: '0.125rem', wordBreak: 'break-all' }}>{c.value}</p>
                                        </div>
                                    </div>
                                )
                                return (
                                    <ScrollReveal key={i} direction="left" delay={i * 0.08}>
                                        {c.href ? <a href={c.href}>{inner}</a> : inner}
                                    </ScrollReveal>
                                )
                            })}

                            <ScrollReveal direction="left" delay={0.35}>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                    <div className="glass-card card-lift p-5" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span style={{ fontSize: '1.5rem' }}>💼</span>
                                        <div>
                                            <span className="font-display c-gray-600 text-label">LinkedIn</span>
                                            <p className="c-white text-small" style={{ fontWeight: 500, marginTop: '0.125rem' }}>Connect on LinkedIn</p>
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.45}>
                                <div className="border-gradient-wrap">
                                    <div className="border-gradient-inner p-6 text-center">
                                        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' }}>📄</span>
                                        <h3 className="font-display c-white mb-2" style={{ fontWeight: 700 }}>Download My CV</h3>
                                        <p className="c-gray-500 text-small mb-4">Get a detailed overview of my experience and skills.</p>
                                        <MagneticButton>
                                            <button
                                                className="gradient-sunset font-display"
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#171717', padding: '0.75rem 1.5rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.875rem', border: 'none' }}
                                                onClick={() => alert('Add your CV PDF to the public folder and link it here!')}
                                            >
                                                <ArrowDownTrayIcon style={{ width: '1rem', height: '1rem' }} /> Download CV
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.55}>
                                <div className="glass-card p-5" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="dot-pulse-lg dot-mint anim-pulse-dot" />
                                    <span className="c-gray-300 text-small" style={{ fontWeight: 500 }}>Available for internships, collaborations & graduate roles</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right */}
                        <div>
                            <ScrollReveal direction="right">
                                <div className="border-gradient-wrap">
                                    <div className="border-gradient-inner" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                                        <h3 className="font-display c-white mb-2" style={{ fontWeight: 700, fontSize: '1.5rem' }}>Send Me a Message ✉️</h3>
                                        <p className="c-gray-500 text-small mb-8">I'll get back to you within 24–48 hours.</p>

                                        {sent ? (
                                            <div className="text-center" style={{ padding: '4rem 0' }}>
                                                <CheckCircleIcon style={{ width: '4rem', height: '4rem', color: '#6bcb77', margin: '0 auto 1rem' }} />
                                                <h4 className="font-display c-white mb-2" style={{ fontWeight: 700, fontSize: '1.25rem' }}>Message Sent! 🎉</h4>
                                                <p className="c-gray-400">Thank you for reaching out!</p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="flex-col gap-5" noValidate>
                                                {[
                                                    { id: 'name', label: 'Full Name', type: 'text', ph: 'Your full name' },
                                                    { id: 'email', label: 'Email Address', type: 'email', ph: 'your.email@example.com' },
                                                    { id: 'subject', label: 'Subject', type: 'text', ph: 'What is this regarding?' },
                                                ].map(f => (
                                                    <div key={f.id}>
                                                        <label htmlFor={f.id} className="field-label">{f.label} <span className="c-coral">*</span></label>
                                                        <input
                                                            type={f.type} id={f.id} name={f.id} value={form[f.id]}
                                                            onChange={handleChange} placeholder={f.ph}
                                                            className={`input-field ${errors[f.id] ? 'has-error' : ''}`}
                                                            aria-required="true" aria-invalid={errors[f.id] ? 'true' : 'false'}
                                                        />
                                                        {errors[f.id] && <p className="field-error" role="alert">{errors[f.id]}</p>}
                                                    </div>
                                                ))}
                                                <div>
                                                    <label htmlFor="message" className="field-label">Message <span className="c-coral">*</span></label>
                                                    <textarea
                                                        id="message" name="message" rows={5} value={form.message}
                                                        onChange={handleChange} placeholder="Tell me about your project or opportunity..."
                                                        className={`input-field ${errors.message ? 'has-error' : ''}`}
                                                        style={{ resize: 'none' }}
                                                        aria-required="true" aria-invalid={errors.message ? 'true' : 'false'}
                                                    />
                                                    {errors.message && <p className="field-error" role="alert">{errors.message}</p>}
                                                </div>
                                                <MagneticButton style={{ display: 'block', width: '100%' }}>
                                                    <button type="submit" className="gradient-sunset font-display w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#171717', padding: '1rem', borderRadius: '1rem', fontWeight: 700, fontSize: '1rem', border: 'none' }}>
                                                        <PaperAirplaneIcon style={{ width: '1.25rem', height: '1.25rem' }} /> Send Message 🚀
                                                    </button>
                                                </MagneticButton>
                                                <p className="c-gray-700 text-center" style={{ fontSize: '0.75rem' }}>Your info is safe. Only used to respond to your message.</p>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section style={{ paddingBottom: '5rem' }}>
                <div className="container-site max-w-medium mx-auto text-center">
                    <ScrollReveal>
                        <div className="glass-card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
                            <h3 className="font-display c-white mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                Based in <span className="text-gradient-sunset">London, UK</span> 🇬🇧
                            </h3>
                            <p className="c-gray-400 mb-6">Studying at the University of Hertfordshire. Open to opportunities across the UK and beyond.</p>
                            <div className="flex-wrap-center gap-3">
                                {[
                                    { t: '🇬🇧 UK Based', c: 'coral' },
                                    { t: '🌍 Open to Remote', c: 'sky' },
                                    { t: '✈️ Willing to Travel', c: 'mint' },
                                ].map(({ t, c }, i) => {
                                    const cm = COLOR_MAP[c]
                                    return <span key={i} className={`${cm.bg} ${cm.text} font-display tag`} style={{ padding: '0.625rem 1.25rem', fontWeight: 700 }}>{t}</span>
                                })}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}