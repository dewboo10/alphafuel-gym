import { useState } from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: '🏋️',
    title: 'Strength & Powerlifting',
    tag: 'MOST POPULAR',
    tagColor: 'bg-fire-500 text-steel-900',
    price: '₹1,499',
    period: '/month',
    desc: 'Build raw, functional strength using Olympic barbells, power racks, and progressive overload programming. Tailored for beginners through advanced athletes.',
    features: [
      'Olympic & powerlifting barbell access',
      'Custom periodized program',
      'Monthly strength assessments',
      'Form video reviews',
      'Group lifting sessions 6x/week',
    ],
    gradient: 'from-orange-900/30 to-transparent',
  },
  {
    icon: '🥊',
    title: 'Boxing & Combat Training',
    tag: 'INTENSE',
    tagColor: 'bg-red-600 text-white',
    price: '₹1,999',
    period: '/month',
    desc: 'Ring training, heavy bag circuits, sparring, and footwork drills led by ex-professional boxer Arjun Malhotra. Build discipline, speed, and explosive power.',
    features: [
      'Full boxing ring access',
      'Heavy bags & speed bags',
      'Sparring sessions (optional)',
      'Footwork & defense coaching',
      'Gloves & hand wraps included',
    ],
    gradient: 'from-red-900/20 to-transparent',
  },
  {
    icon: '🔥',
    title: 'HIIT & Functional Training',
    tag: '',
    tagColor: '',
    price: '₹1,299',
    period: '/month',
    desc: 'High-intensity interval training built around athletic performance — kettlebells, ropes, sleds, and bodyweight circuits. Burn fat, build endurance, move better.',
    features: [
      'Daily 45-min HIIT classes',
      'Functional equipment access',
      'Heart rate zone tracking',
      'Metabolic conditioning programs',
      'Nutritional guidelines included',
    ],
    gradient: 'from-yellow-900/20 to-transparent',
  },
  {
    icon: '🧘',
    title: 'Yoga & Mobility',
    tag: 'RECOVERY',
    tagColor: 'bg-emerald-600 text-white',
    price: '₹999',
    period: '/month',
    desc: 'Rooted in ancient Indian practice, enhanced by modern sports science. Restore flexibility, prevent injury, and unlock athletic potential through mindful movement.',
    features: [
      'Daily yoga sessions',
      'Mobility & stretching protocols',
      'Breath work & meditation',
      'Injury prevention programming',
      'Access to recovery tools',
    ],
    gradient: 'from-emerald-900/20 to-transparent',
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    tag: '',
    tagColor: '',
    price: '₹799',
    period: '/month',
    desc: 'Personalized Indian meal plans created by certified dietitian Priya Sharma. Macro tracking, supplement guidance, and weekly check-ins — no fad diets, just real food.',
    features: [
      'Personalized Indian meal plan',
      'Weekly dietitian check-ins',
      'Supplement guidance',
      'InBody scan (monthly)',
      'WhatsApp support',
    ],
    gradient: 'from-lime-900/20 to-transparent',
  },
  {
    icon: '⚡',
    title: 'Personal Training',
    tag: 'PREMIUM',
    tagColor: 'bg-amber-400 text-steel-900',
    price: '₹3,999',
    period: '/month',
    desc: 'One-on-one sessions with our elite trainers. 100% personalized programs, dedicated time, maximum accountability. Ideal for rapid transformation goals.',
    features: [
      '12 personal sessions/month',
      'Fully custom program design',
      'Dedicated trainer 1-on-1',
      'Nutrition plan included',
      'Priority access to all equipment',
    ],
    gradient: 'from-amber-900/30 to-transparent',
  },
]

const MEMBERSHIPS = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    desc: 'Perfect for beginners starting their fitness journey.',
    perks: ['Gym floor access', 'Group classes (2/week)', 'Basic locker', 'App access'],
    cta: 'GET STARTED',
    highlight: false,
  },
  {
    name: 'Alpha',
    price: '₹1,799',
    period: '/month',
    desc: 'Most popular. Everything you need to transform.',
    perks: ['Unlimited gym access', 'All group classes', 'Monthly body scan', 'Nutrition basics guide', '1 PT session/month', 'Premium locker'],
    cta: 'GO ALPHA',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹3,499',
    period: '/month',
    desc: 'For serious athletes who want it all.',
    perks: ['Everything in Alpha', '4 PT sessions/month', 'Full nutrition coaching', 'Quarterly strategy review', 'Guest passes (2/month)', 'Towel service'],
    cta: 'JOIN ELITE',
    highlight: false,
  },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Strength', 'Cardio', 'Recovery', 'Coaching']

  return (
    <div className="pt-16">
      {/* ── HEADER ── */}
      <section className="relative bg-steel-800 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(232,144,10,0.07),transparent_60%)]" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[150px] text-steel-700 opacity-10 hidden lg:block select-none">
          SV
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-label mb-4 fade-up animate-delay-100">What We Offer</div>
          <h1 className="font-display text-[clamp(60px,8vw,100px)] leading-none fade-up animate-delay-200 mb-6">
            OUR<br /><span className="text-fire-500">SERVICES</span>
          </h1>
          <p className="font-body text-steel-300 text-lg max-w-xl leading-relaxed fade-up animate-delay-300">
            Six premium services. One goal: your complete transformation. Pick what you need — or take everything.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Specialty Programs</div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none">
              CHOOSE YOUR <span className="text-fire-500">WEAPON</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className={`card-dark overflow-hidden bg-gradient-to-br ${s.gradient} relative group`}>
                {/* Top Bar */}
                <div className="h-1 bg-fire-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="p-7">
                  {/* Tag */}
                  {s.tag && (
                    <span className={`inline-block ${s.tagColor} font-body text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-4`}>
                      {s.tag}
                    </span>
                  )}

                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">{s.icon}</div>
                  <h3 className="font-display text-2xl tracking-wide mb-2">{s.title}</h3>
                  <p className="font-body text-steel-300 text-sm leading-relaxed mb-5">{s.desc}</p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-fire-500 text-xs mt-0.5 flex-shrink-0">▸</span>
                        <span className="font-body text-steel-300 text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-end justify-between border-t border-steel-600 pt-5">
                    <div>
                      <span className="font-display text-3xl text-fire-500">{s.price}</span>
                      <span className="font-body text-steel-400 text-sm">{s.period}</span>
                    </div>
                    <Link to="/contact" className="btn-primary text-xs py-2.5 px-6">ENROLL</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS ── */}
      <section className="bg-steel-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Membership Tiers</div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none mb-4">
              SIMPLE <span className="text-fire-500">PRICING</span>
            </h2>
            <p className="font-body text-steel-300 text-base max-w-md mx-auto">
              No hidden fees. No annual lock-ins. Pay monthly, cancel anytime. Results guaranteed or money back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {MEMBERSHIPS.map((m, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  m.highlight
                    ? 'border-2 border-fire-500 bg-steel-900 shadow-[0_0_60px_rgba(232,144,10,0.15)]'
                    : 'card-dark'
                }`}
              >
                {m.highlight && (
                  <div className="bg-fire-500 text-steel-900 text-center py-2">
                    <span className="font-body font-bold text-xs tracking-[0.25em] uppercase">⭐ Best Value</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-3xl tracking-widest mb-1">{m.name}</h3>
                  <p className="font-body text-steel-400 text-sm mb-5">{m.desc}</p>
                  <div className="mb-6">
                    <span className={`font-display text-5xl ${m.highlight ? 'text-fire-500' : ''}`}>{m.price}</span>
                    <span className="font-body text-steel-400 text-sm">{m.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {m.perks.map((p, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className={`text-sm flex-shrink-0 ${m.highlight ? 'text-fire-500' : 'text-steel-400'}`}>✓</span>
                        <span className="font-body text-steel-200 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center block ${m.highlight ? 'btn-primary' : 'btn-outline'} text-sm`}
                  >
                    {m.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-steel-500 text-xs text-center mt-8">
            * All prices are inclusive of GST. Student & corporate discounts available. Ask at the front desk.
          </p>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">World-Class Facility</div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none">
              THE <span className="text-fire-500">EQUIPMENT</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏋️', title: '20+ Power Racks', sub: 'Never wait for a rack again' },
              { icon: '🏃', title: '30 Treadmills', sub: 'Commercial-grade cardio' },
              { icon: '💪', title: 'Dumbbell Island', sub: '2.5 kg to 60 kg range' },
              { icon: '🥊', title: 'Boxing Ring', sub: 'Full-size professional ring' },
              { icon: '🧘', title: 'Yoga Studio', sub: 'Dedicated silent space' },
              { icon: '🚿', title: 'Premium Locker Rooms', sub: 'Hot showers & steam' },
              { icon: '📊', title: 'InBody Scanner', sub: 'Medical-grade body comp' },
              { icon: '☕', title: 'Fuel Bar', sub: 'Protein shakes & nutrition' },
            ].map((f, i) => (
              <div key={i} className="card-dark p-5 text-center group hover:bg-steel-700">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                <div className="font-display text-base tracking-wide mb-1">{f.title}</div>
                <div className="font-body text-steel-400 text-xs">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-fire-500 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-steel-900 leading-none mb-4">
            NOT SURE WHERE TO START?
          </h2>
          <p className="font-body text-steel-900/70 text-base mb-8 leading-relaxed">
            Book a free 30-minute consultation. Our coaches will assess your goals and build the perfect plan for you.
          </p>
          <Link to="/contact" className="btn-outline border-steel-900 text-steel-900 hover:bg-steel-900 hover:text-fire-500">
            BOOK FREE CONSULT
          </Link>
        </div>
      </section>
    </div>
  )
}
