import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const SERVICES_LIST = [
  'Strength & Powerlifting',
  'HIIT Training',
  'Boxing & Combat',
  'Yoga & Mobility',
  'Nutrition Coaching',
  'Personal Training',
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-steel-700">
      {/* Top Band */}
      <div className="bg-fire-500 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl tracking-widest text-steel-900">
            READY TO FUEL YOUR ALPHA?
          </p>
          <Link to="/contact" className="btn-outline border-steel-900 text-steel-900 hover:bg-steel-900 hover:text-fire-500 text-sm py-2.5">
            START TODAY
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl tracking-[0.2em] mb-1">ALPHAFUEL</div>
            <div className="font-body text-xs tracking-[0.4em] text-fire-500 font-semibold mb-5">GYM · HYDERABAD</div>
            <p className="font-body text-steel-300 text-sm leading-relaxed">
              India ka sabse badiya gym. Where champions are forged, limits are shattered, and legacies begin.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {['IG', 'FB', 'YT', 'TW'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-steel-700 flex items-center justify-center font-display text-xs text-steel-300 hover:bg-fire-500 hover:text-steel-900 transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-label mb-5">Quick Links</div>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="font-body text-steel-300 text-sm hover:text-fire-500 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-steel-500 group-hover:bg-fire-500 group-hover:w-6 transition-all duration-200" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="section-label mb-5">Our Services</div>
            <div className="flex flex-col gap-3">
              {SERVICES_LIST.map(s => (
                <Link
                  key={s}
                  to="/services"
                  className="font-body text-steel-300 text-sm hover:text-fire-500 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-steel-500 group-hover:bg-fire-500 group-hover:w-6 transition-all duration-200" />
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="section-label mb-5">Find Us</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-fire-500 text-lg mt-0.5">📍</span>
                <p className="font-body text-steel-300 text-sm leading-relaxed">
                  Plot 42, Fitness Nagar, Banjara Hills,<br />
                  Hyderabad, Telangana — 500034
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-fire-500 text-lg">📞</span>
                <a href="tel:+919876543210" className="font-body text-steel-300 text-sm hover:text-fire-500 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-fire-500 text-lg">✉️</span>
                <a href="mailto:fuel@alphafuelgym.in" className="font-body text-steel-300 text-sm hover:text-fire-500 transition-colors">
                  fuel@alphafuelgym.in
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-fire-500 text-lg">🕐</span>
                <div className="font-body text-steel-300 text-sm leading-relaxed">
                  Mon–Sat: 5:00 AM – 10:00 PM<br />
                  Sunday: 6:00 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-700 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-steel-500 text-xs">
            © 2024 AlphaFuel Gym. All rights reserved. Made with 💪 in India 🇮🇳
          </p>
          <p className="font-body text-steel-500 text-xs">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
