import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    useEffect(() => { setOpen(false) }, [location])

    return (
        <nav
            className={scrolled ? 'glass-nav' : ''}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                transition: 'all 0.5s ease',
                ...(!scrolled ? { background: 'transparent' } : {}),
            }}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="container-site">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4.5rem' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} aria-label="Home">
                        <div className="gradient-rainbow" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem', fontFamily: "'Space Grotesk', sans-serif", transition: 'transform 0.3s' }}>
                            P
                        </div>
                        <span className="font-display text-gradient-rainbow" style={{ fontSize: '1.125rem', fontWeight: 700, display: 'none' }}>Pratishtha</span>
                    </Link>

                    {/* Desktop */}
                    <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="nav-desktop">
                        {links.map(link => {
                            const active = location.pathname === link.path
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-display ${active ? 'gradient-rainbow' : ''}`}
                                    style={{
                                        padding: '0.625rem 1.25rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 600,
                                        color: active ? 'white' : '#a3a3a3',
                                        ...(active ? { boxShadow: '0 4px 20px rgba(255,107,107,0.15)' } : {}),
                                        transition: 'all 0.3s',
                                    }}
                                    aria-current={active ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                        <Link
                            to="/contact"
                            className="gradient-sunset font-display"
                            style={{ marginLeft: '0.75rem', padding: '0.625rem 1.5rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 700, color: '#171717', boxShadow: '0 4px 20px rgba(255,217,61,0.15)', transition: 'all 0.3s' }}
                        >
                            Let's Talk ✨
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="nav-mobile-btn"
                        style={{ padding: '0.5rem', borderRadius: '0.75rem', color: '#a3a3a3', background: 'transparent', border: 'none' }}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                    >
                        {open ? <XMarkIcon style={{ width: '1.5rem', height: '1.5rem' }} /> : <Bars3Icon style={{ width: '1.5rem', height: '1.5rem' }} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                style={{
                    overflow: 'hidden',
                    maxHeight: open ? '400px' : '0',
                    opacity: open ? 1 : 0,
                    transition: 'all 0.5s ease',
                }}
                className="nav-mobile-menu"
            >
                <div className="glass-nav" style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex-col gap-2">
                        {links.map(link => {
                            const active = location.pathname === link.path
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-display ${active ? 'gradient-rainbow' : ''}`}
                                    style={{
                                        display: 'block', padding: '0.75rem 1.25rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 600,
                                        color: active ? 'white' : '#a3a3a3',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                        <Link
                            to="/contact"
                            className="gradient-sunset font-display"
                            style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 700, color: '#171717', marginTop: '0.5rem' }}
                        >
                            Let's Talk ✨
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (min-width: 640px) {
          .nav-desktop + div .font-display { display: inline !important; }
        }
        @media (min-width: 640px) {
          nav a[aria-label="Home"] span { display: inline !important; }
        }
      `}</style>
        </nav>
    )
}