import { useEffect, useState } from 'react'
import {
    EnvelopeIcon, PhoneIcon, MapPinIcon,
    PaperAirplaneIcon, CheckCircleIcon, ArrowDownTrayIcon,
} from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import ColorBlob from '../components/ColorBlob'
import { personalInfo } from '../data/portfolioData'

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

    const inputStyle = {
        background: 'rgba(255,255,255,0.03)',
        color: 'white',
    }
    const inputClass = (field) =>
        `w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 ${errors[field] ? '' : ''
        }`
    const inputBorder = (field) => errors[field]
        ? '1px solid var(--color-coral)'
        : '1px solid rgba(255,255,255,0.1)'

    return (
        <div className="pt-20 lg:pt-24">
            {/* Header */}
            <section className="relative py-20 lg:py-28 overflow-hidden" aria-label="Contact Header">
                <ColorBlob color="coral" size={400} top="-10%" left="10%" opacity={0.08} />
                <ColorBlob color="sky" size={350} bottom="0" right="10%" opacity={0.06} />
                <ColorBlob color="sunny" size={250} top="50%" left="50%" opacity={0.04} />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10 text-center">
                    <ScrollReveal>
                        <span className="inline-block gradient-sunset text-xs font-bold font-display px-4 py-2 rounded-full uppercase tracking-widest mb-6" style={{ color: '#171717' }}>Get in Touch</span>
                    </ScrollReveal>
                    <TextReveal
                        text="Let's create something amazing together"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
                    />
                    <ScrollReveal delay={0.3}>
                        <p className="text-lg max-w-xl mx-auto" style={{ color: '#a3a3a3' }}>
                            I'm always open to new opportunities, collaborations, and conversations about digital marketing ✨
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main */}
            <section className="relative py-12 lg:py-20" aria-label="Contact Form">
                <div className="max-w-7xl mx-auto px-5 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left */}
                        <div className="lg:col-span-2 space-y-5">
                            {[
                                { emoji: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                { emoji: '📞', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, '')}` },
                                { emoji: '📍', label: 'Location', value: personalInfo.location, href: null },
                            ].map((c, i) => {
                                const inner = (
                                    <div className="glass-card rounded-2xl p-5 flex items-center gap-4 card-lift group">
                                        <span className="text-2xl">{c.emoji}</span>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest font-bold font-display" style={{ color: '#525252' }}>{c.label}</span>
                                            <p className="text-white font-medium text-sm mt-0.5">{c.value}</p>
                                        </div>
                                    </div>
                                )
                                return (
                                    <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                                        {c.href ? <a href={c.href}>{inner}</a> : inner}
                                    </ScrollReveal>
                                )
                            })}

                            <ScrollReveal direction="left" delay={0.3}>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block glass-card rounded-2xl p-5 card-lift group">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl">💼</span>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest font-bold font-display" style={{ color: '#525252' }}>LinkedIn</span>
                                            <p className="text-white font-medium text-sm mt-0.5">linkedin.com/in/pratishtha-bhadoria</p>
                                        </div>
                                    </div>
                                </a>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.4}>
                                <div className="border-gradient">
                                    <div className="rounded-3xl p-6 text-center" style={{ background: '#171717' }}>
                                        <span className="text-4xl block mb-3">📄</span>
                                        <h3 className="text-white font-display font-bold mb-2">Download My CV</h3>
                                        <p className="text-sm mb-4" style={{ color: '#737373' }}>Get a detailed overview of my experience and skills.</p>
                                        <MagneticButton>
                                            <button
                                                className="gradient-sunset px-6 py-3 rounded-2xl text-sm font-bold font-display inline-flex items-center gap-2 transition-all"
                                                style={{ color: '#171717', boxShadow: '0 8px 30px rgba(255,217,61,0.15)' }}
                                                onClick={() => alert('Add your CV PDF to the public folder and link it here!')}
                                            >
                                                <ArrowDownTrayIcon className="w-4 h-4" />
                                                Download CV
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.5}>
                                <div className="glass-card rounded-2xl p-5 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full dot-mint animate-pulse-dot" />
                                    <span className="text-sm font-medium" style={{ color: '#d4d4d4' }}>Available for internships, collaborations & freelance</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3">
                            <ScrollReveal direction="right">
                                <div className="border-gradient">
                                    <div className="rounded-3xl p-7 lg:p-10" style={{ background: '#171717' }}>
                                        <h3 className="text-white font-display font-bold text-2xl mb-2">Send Me a Message ✉️</h3>
                                        <p className="text-sm mb-8" style={{ color: '#737373' }}>I'll get back to you within 24–48 hours.</p>

                                        {sent ? (
                                            <div className="text-center py-16">
                                                <CheckCircleIcon className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--color-mint)' }} />
                                                <h4 className="text-white font-display font-bold text-xl mb-2">Message Sent! 🎉</h4>
                                                <p style={{ color: '#a3a3a3' }}>Thank you for reaching out!</p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                                {[
                                                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                                                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' },
                                                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this regarding?' },
                                                ].map(field => (
                                                    <div key={field.id}>
                                                        <label htmlFor={field.id} className="block text-sm font-bold font-display mb-2" style={{ color: '#d4d4d4' }}>
                                                            {field.label} <span className="c-coral">*</span>
                                                        </label>
                                                        <input
                                                            type={field.type}
                                                            id={field.id}
                                                            name={field.id}
                                                            value={form[field.id]}
                                                            onChange={handleChange}
                                                            placeholder={field.placeholder}
                                                            className={inputClass(field.id)}
                                                            style={{ ...inputStyle, border: inputBorder(field.id) }}
                                                            aria-required="true"
                                                            aria-invalid={errors[field.id] ? 'true' : 'false'}
                                                        />
                                                        {errors[field.id] && <p className="c-coral text-xs mt-1.5 font-medium" role="alert">{errors[field.id]}</p>}
                                                    </div>
                                                ))}

                                                <div>
                                                    <label htmlFor="message" className="block text-sm font-bold font-display mb-2" style={{ color: '#d4d4d4' }}>
                                                        Message <span className="c-coral">*</span>
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={5}
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        placeholder="Tell me about your project or opportunity..."
                                                        className={`${inputClass('message')} resize-none`}
                                                        style={{ ...inputStyle, border: inputBorder('message') }}
                                                        aria-required="true"
                                                        aria-invalid={errors.message ? 'true' : 'false'}
                                                    />
                                                    {errors.message && <p className="c-coral text-xs mt-1.5 font-medium" role="alert">{errors.message}</p>}
                                                </div>

                                                <MagneticButton className="w-full block">
                                                    <button type="submit" className="w-full gradient-sunset py-4 rounded-2xl font-bold font-display text-base flex items-center justify-center gap-2 transition-all" style={{ color: '#171717', boxShadow: '0 10px 40px rgba(255,217,61,0.15)' }}>
                                                        <PaperAirplaneIcon className="w-5 h-5" />
                                                        Send Message 🚀
                                                    </button>
                                                </MagneticButton>

                                                <p className="text-xs text-center" style={{ color: '#404040' }}>Your info is safe. Only used to respond to your message.</p>
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
            <section className="relative py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
                    <ScrollReveal>
                        <div className="glass-card rounded-3xl p-8 lg:p-12">
                            <h3 className="text-2xl font-display font-bold text-white mb-4">
                                Based in <span className="text-gradient-sunset">London, UK</span> 🇬🇧
                            </h3>
                            <p className="mb-6" style={{ color: '#a3a3a3' }}>Studying at the University of Hertfordshire. Open to opportunities across the UK and beyond.</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    { t: '🇬🇧 UK Based', cm: COLOR_MAP.coral },
                                    { t: '🌍 Open to Remote', cm: COLOR_MAP.sky },
                                    { t: '✈️ Willing to Travel', cm: COLOR_MAP.mint },
                                ].map(({ t, cm }, i) => (
                                    <span key={i} className={`${cm.bg} ${cm.text} px-5 py-2.5 rounded-2xl text-sm font-bold font-display`} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}