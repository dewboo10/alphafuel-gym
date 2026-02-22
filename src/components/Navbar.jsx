import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-steel-900/98 shadow-[0_2px_30px_rgba(0,0,0,0.8)]' : 'bg-steel-900/80'
      } backdrop-blur-md border-b border-steel-700`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 bg-fire-500 flex items-center justify-center text-steel-900 text-xl font-display group-hover:bg-fire-400 transition-colors"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            ⚡
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-[0.2em] text-[#F0ECE0]">ALPHAFUEL</div>
            <div className="font-body text-[9px] tracking-[0.4em] text-fire-500 font-semibold">GYM · HYDERABAD</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-body font-semibold text-xs tracking-[0.25em] uppercase px-4 py-2 transition-colors duration-200 ${
                location.pathname === path
                  ? 'text-fire-500 border-b-2 border-fire-500'
                  : 'text-steel-300 hover:text-fire-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:inline-block btn-primary text-sm py-2.5 px-7">
            JOIN NOW
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-fire-500 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-fire-500 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-fire-500 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-steel-800 border-t border-steel-700 ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-body font-semibold text-sm tracking-widest uppercase py-3 border-b border-steel-700 last:border-0 ${
                location.pathname === path ? 'text-fire-500' : 'text-steel-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-center mt-4 text-sm">JOIN NOW</Link>
        </div>
      </div>
    </nav>
  )
}
