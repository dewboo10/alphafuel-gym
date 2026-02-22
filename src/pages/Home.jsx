import { Link } from 'react-router-dom'

const STATS = [
  { val: '2,400+', label: 'Active Members' },
  { val: '14+', label: 'Elite Trainers' },
  { val: '8', label: 'Years Strong' },
  { val: '98%', label: 'Success Rate' },
]

const FEATURES = [
  { icon: '🏋️', title: '10,000 sq ft Facility', desc: 'Premium floor space with international-grade equipment, zero compromise.' },
  { icon: '👨‍🏫', title: 'Certified Elite Coaches', desc: 'NSCA & ACE-certified trainers who have trained national-level athletes.' },
  { icon: '🥗', title: 'Nutrition Lab', desc: 'In-house dietitians crafting Indian macros-based meal plans for real results.' },
  { icon: '♾️', title: '365 Days Open', desc: 'We are open every single day of the year. No holidays, no excuses.' },
  { icon: '🔬', title: 'Body Composition Analysis', desc: 'InBody 570 scanning to track your transformation with data, not guesswork.' },
  { icon: '🤝', title: 'Community Brotherhood', desc: 'A tribe that pushes each other. Accountability built into every session.' },
]

const TESTIMONIALS = [
  {
    name: 'Rohan Kapoor',
    city: 'Hyderabad',
    text: 'AlphaFuel changed my life in 6 months. Lost 18 kg and built a physique I never thought was possible. The coaches here are on another level.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    city: 'Secunderabad',
    text: 'Best gym in Hyderabad, hands down. The nutrition guidance from Priya ma\'am is unmatched. Finally understand what to eat and when.',
    rating: 5,
  },
  {
    name: 'Arjun Bhat',
    city: 'Banjara Hills',
    text: 'Joined for boxing, stayed for everything. The HIIT sessions are brutal but the results speak for themselves. Won my first amateur bout after 4 months here!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-steel-900">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(232,144,10,0.08),transparent_65%)]" />

        {/* Right panel */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[45%] bg-steel-800 hidden lg:flex items-center justify-center overflow-hidden"
          style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          {/* Big decorative letters */}
          <div className="font-display text-[260px] leading-none text-steel-700 select-none absolute pointer-events-none">
            AF
          </div>
          {/* Fire icon with glow */}
          <div
            className="relative z-10 text-[100px]"
            style={{ filter: 'drop-shadow(0 0 50px rgba(232,144,10,0.5))' }}
          >
            ⚡
          </div>
          {/* Diagonal accent bars */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-fire-500" />
          <div className="absolute top-0 left-0 w-1 h-full bg-fire-500 opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
          <div className="max-w-xl">
            <div className="section-label fade-up animate-delay-100 mb-5">
              🇮🇳 Hyderabad's #1 Premium Gym
            </div>
            <h1
              className="font-display text-[clamp(72px,9vw,120px)] leading-none tracking-wide mb-6 fade-up animate-delay-200"
            >
              FUEL YOUR<br />
              <span className="text-fire-500" style={{ textShadow: '0 0 60px rgba(232,144,10,0.4)' }}>
                ALPHA
              </span>
              <br />WITHIN
            </h1>
            <p className="font-body text-steel-300 text-lg leading-relaxed mb-10 fade-up animate-delay-300 max-w-md">
              AlphaFuel Gym — where ordinary ends and legends are forged. World-class coaching, elite equipment, and a community that refuses to quit.
            </p>
            <div className="flex flex-wrap gap-4 fade-up animate-delay-400">
              <Link to="/services" className="btn-primary text-base">
                EXPLORE PLANS
              </Link>
              <Link to="/about" className="btn-outline text-base">
                OUR STORY
              </Link>
            </div>

            {/* Mini trust signals */}
            <div className="flex items-center gap-6 mt-12 fade-up animate-delay-500">
              <div className="flex -space-x-2">
                {['R','S','A','V','P'].map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-fire-500 flex items-center justify-center font-display text-sm text-steel-900 border-2 border-steel-900"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-fire-500 text-sm">★★★★★</div>
                <p className="font-body text-steel-400 text-xs mt-0.5">2,400+ members trust us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-steel-500 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-fire-500 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-fire-500 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`text-center ${i < STATS.length - 1 ? 'md:border-r md:border-steel-900/20' : ''}`}
            >
              <div className="font-display text-[clamp(36px,4vw,56px)] text-steel-900 leading-none">
                {s.val}
              </div>
              <div className="font-body text-xs tracking-[0.25em] text-steel-900/60 uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY ALPHAFUEL ── */}
      <section className="bg-steel-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Why Choose Us</div>
              <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none mb-6">
                WHERE INDIA<br />
                <span className="text-fire-500">LIFTS</span>
              </h2>
              <p className="font-body text-steel-300 text-base leading-relaxed mb-6">
                Born from the spirit of Indian determination, AlphaFuel is more than a gym — it's a movement. We blend world-class training science with the relentless grit that defines us as a nation.
              </p>
              <p className="font-body text-steel-300 text-base leading-relaxed mb-8">
                Since 2016, we've transformed over 2,400 lives across Hyderabad. Our coaches don't just train bodies — they build champions, confidence, and character.
              </p>
              <Link to="/about" className="btn-outline">LEARN MORE</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <div key={i} className="card-dark p-5">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-display text-lg tracking-wide mb-2">{f.title}</h3>
                  <p className="font-body text-steel-300 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Real Stories</div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-none">
              RESULTS DON'T <span className="text-fire-500">LIE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-dark p-7 relative">
                <div
                  className="absolute top-4 right-5 font-display text-7xl leading-none text-fire-500 opacity-20 select-none"
                >
                  "
                </div>
                <div className="flex gap-0.5 text-fire-500 text-sm mb-4">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="font-body text-steel-300 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-fire-500 flex items-center justify-center font-display text-lg text-steel-900">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm">{t.name}</div>
                    <div className="font-body text-steel-400 text-xs">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-steel-800 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,144,10,0.06),transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="section-label mb-4">Limited Slots Available</div>
          <h2 className="font-display text-[clamp(48px,6vw,84px)] leading-none mb-6">
            START YOUR<br />
            <span className="text-fire-500">TRANSFORMATION</span><br />
            TODAY
          </h2>
          <p className="font-body text-steel-300 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Join 2,400+ members who chose to stop dreaming and start doing. First week is on us — walk in any day, any time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              CLAIM FREE TRIAL
            </Link>
            <Link to="/services" className="btn-outline text-base">
              VIEW PLANS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
