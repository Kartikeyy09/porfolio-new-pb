import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "../App.css"

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
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setOpen(false) }, [location])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'glass-dark shadow-2xl shadow-black/20' : 'bg-transparent'
                }`}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
                        <div className="w-10 h-10 rounded-2xl gradient-rainbow flex items-center justify-center text-white font-bold text-lg font-display group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            P
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold font-display text-gradient-rainbow">Pratishtha</span>
                        </div>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {links.map(link => {
                            const active = location.pathname === link.path
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-5 py-2.5 rounded-2xl text-sm font-semibold font-display transition-all duration-300 ${active
                                        ? 'gradient-rainbow text-white shadow-lg shadow-coral/20'
                                        : 'text-dark-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    aria-current={active ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                        <Link
                            to="/contact"
                            className="ml-3 gradient-sunset text-dark-900 px-6 py-2.5 rounded-2xl text-sm font-bold font-display hover:shadow-lg hover:shadow-sunny/25 hover:scale-105 transition-all duration-300"
                        >
                            Let's Talk ✨
                        </Link>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-xl text-dark-400 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                    >
                        {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 overflow-hidden ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="glass-dark border-t border-white/5 px-5 py-5 space-y-2">
                    {links.map(link => {
                        const active = location.pathname === link.path
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-5 py-3 rounded-2xl text-sm font-semibold font-display transition-all ${active ? 'gradient-rainbow text-white' : 'text-dark-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                    <Link
                        to="/contact"
                        className="block text-center gradient-sunset text-dark-900 px-5 py-3 rounded-2xl text-sm font-bold font-display mt-3"
                    >
                        Let's Talk ✨
                    </Link>
                </div>
            </div>
        </nav>
    )
}