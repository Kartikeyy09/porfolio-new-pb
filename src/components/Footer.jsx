import { Link } from 'react-router-dom'
import "../App.css"

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5" role="contentinfo">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl gradient-rainbow flex items-center justify-center text-white font-bold text-lg font-display">P</div>
                            <span className="text-xl font-bold font-display text-gradient-rainbow">Pratishtha Bhadoria</span>
                        </Link>
                        <p className="text-dark-500 text-sm leading-relaxed max-w-xs">
                            Digital Marketing Strategist crafting data-driven digital experiences. MSc student at the University of Hertfordshire.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold font-display text-sm uppercase tracking-widest">Navigate</h3>
                        <nav className="flex flex-col gap-2" aria-label="Footer">
                            {['/', '/projects', '/contact'].map((p, i) => (
                                <Link key={p} to={p} className="text-dark-500 hover:text-coral text-sm transition-colors w-fit">
                                    {['Home', 'Projects', 'Contact'][i]}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold font-display text-sm uppercase tracking-widest">Connect</h3>
                        <div className="space-y-2 text-sm text-dark-500">
                            <a href="mailto:bhadoriapratishtha@gmail.com" className="block hover:text-coral transition-colors">bhadoriapratishtha@gmail.com</a>
                            <a href="tel:+447404964963" className="block hover:text-sky transition-colors">+44 7404 964963</a>
                            <p>London, UK 🇬🇧</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/pratishtha-bhadoria/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-dark-300 hover:text-sky px-4 py-2 rounded-xl text-sm transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-dark-600 text-xs">© {new Date().getFullYear()} Pratishtha Bhadoria. Made with 💛 & ☕</p>
                    <p className="text-dark-700 text-xs">University of Hertfordshire — Digital Marketing Portfolio</p>
                </div>
            </div>
        </footer>
    )
}