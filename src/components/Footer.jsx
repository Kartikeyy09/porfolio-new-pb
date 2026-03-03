import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} role="contentinfo">
            <div className="container-site" style={{ padding: '4rem 1.25rem' }}>
                <div className="grid-skills" style={{ gridTemplateColumns: undefined }}>
                    <style>{`
            @media (min-width: 768px) {
              .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
            }
          `}</style>
                    <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
                        {/* Brand */}
                        <div>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div className="gradient-rainbow" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                                    P
                                </div>
                                <span className="font-display text-gradient-rainbow" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Pratishtha Bhadoria</span>
                            </Link>
                            <p style={{ color: '#737373', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '20rem' }}>
                                Strategic Marketing & Digital Media Enthusiast. MSc student at the University of Hertfordshire, London.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="font-display" style={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Navigate</h3>
                            <nav className="flex-col gap-2" aria-label="Footer">
                                {[['/', 'Home'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([p, n]) => (
                                    <Link key={p} to={p} style={{ color: '#737373', fontSize: '0.875rem', transition: 'color 0.3s', width: 'fit-content' }}>{n}</Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-display" style={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Connect</h3>
                            <div className="flex-col gap-2" style={{ fontSize: '0.875rem', color: '#737373' }}>
                                <a href="mailto:bhadoriapratishtha@gmail.com" style={{ transition: 'color 0.3s' }}>bhadoriapratishtha@gmail.com</a>
                                <a href="tel:+447404964963" style={{ transition: 'color 0.3s' }}>+44 7404 964963</a>
                                <span>London, UK 🇬🇧</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/pratishtha-bhadoria-a37054270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', color: '#a3a3a3', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}
                                aria-label="LinkedIn Profile"
                            >
                                <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ color: '#404040', fontSize: '0.75rem' }}>© {new Date().getFullYear()} Pratishtha Bhadoria</p>
                    <p style={{ color: '#404040', fontSize: '0.75rem' }}>University of Hertfordshire — Digital Marketing Portfolio</p>
                </div>
            </div>
        </footer>
    )
}