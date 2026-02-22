import { Link } from 'react-router-dom'

const TEAM = [
  {
    name: 'Vikram Rathore',
    role: 'Head Coach & Founder',
    exp: '12 Years Experience',
    cert: 'NSCA-CSCS · Pro Powerlifter',
    bio: 'Former national-level powerlifter turned entrepreneur. Vikram founded AlphaFuel to bring world-class training to every Indian who dares to dream bigger.',
    emoji: '🏋️',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Nutrition Scientist',
    exp: '8 Years Experience',
    cert: 'M.Sc Dietetics · ISNR Certified',
    bio: 'A pioneer in Indian sports nutrition, Priya has created customized meal plans for 500+ athletes. She believes the kitchen is the real gym.',
    emoji: '🥗',
  },
  {
    name: 'Arjun Malhotra',
    role: 'Combat & HIIT Director',
    exp: '10 Years Experience',
    cert: 'WBC Boxing Coach · NASM-CPT',
    bio: 'Ex-professional boxer from Delhi. Arjun channels his ring discipline into classes that transform not just bodies, but mindsets.',
    emoji: '🥊',
  },
  {
    name: 'Divya Nair',
    role: 'Yoga & Recovery Specialist',
    exp: '9 Years Experience',
    cert: 'RYT-500 · Physiotherapy Diploma',
    bio: 'Bridging ancient Indian practice with modern sports science, Divya ensures every member moves better, recovers faster, and stays injury-free.',
    emoji: '🧘',
  },
]

const MILESTONES = [
  { year: '2016', event: 'AlphaFuel opens its doors in Banjara Hills with 200 sq ft and a dream.' },
  { year: '2018', event: 'Expanded to 5,000 sq ft. First 500 members. Hyderabad starts to notice.' },
  { year: '2020', event: 'Launched virtual training during the pandemic. Zero members lost. 300 added.' },
  { year: '2021', event: 'Opened full-service Nutrition Lab. Partnered with Hyderabad FC for conditioning.' },
  { year: '2023', event: 'Moved to flagship 10,000 sq ft facility. Crossed 2,000 active members.' },
  { year: '2024', event: 'Voted Best Gym in Hyderabad for the 3rd consecutive year.' },
]

const VALUES = [
  { icon: '🔥', title: 'Relentlessness', desc: 'We don\'t believe in off days. Every session, every rep, every choice — done with full intensity.' },
  { icon: '🤝', title: 'Brotherhood', desc: 'You don\'t succeed alone. Our community lifts each other — literally and figuratively.' },
  { icon: '🎯', title: 'Precision', desc: 'No guesswork. Every program is built on science, data, and years of real-world results.' },
  { icon: '🇮🇳', title: 'Indian Pride', desc: 'We celebrate Indian bodies, Indian schedules, and Indian food. Fitness is for everyone.' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-steel-800 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(232,144,10,0.07),transparent_60%)]" />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-steel-700 hidden lg:block"
          style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[140px] opacity-5 font-display hidden lg:block select-none">
          AB
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-label mb-4 fade-up animate-delay-100">Our Story</div>
          <h1 className="font-display text-[clamp(60px,8vw,100px)] leading-none fade-up animate-delay-200 mb-6">
            ABOUT<br /><span className="text-fire-500">ALPHAFUEL</span>
          </h1>
          <p className="font-body text-steel-300 text-lg max-w-2xl leading-relaxed fade-up animate-delay-300">
            Born from fire. Built on sweat. Dedicated to every Indian who ever doubted themselves in a mirror and decided — enough.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="relative">
            <div className="bg-steel-700 aspect-square max-w-md flex items-center justify-center relative overflow-hidden">
              <div className="font-display text-[200px] text-fire-500 opacity-10 absolute select-none">⚡</div>
              <div className="relative z-10 text-center px-10">
                <div className="text-6xl mb-6">⚡</div>
                <div className="font-display text-3xl tracking-widest mb-2">ALPHAFUEL</div>
                <div className="section-label">Est. 2016 · Hyderabad</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-fire-500" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-fire-500 text-steel-900 p-6">
              <div className="font-display text-4xl leading-none">8+</div>
              <div className="font-body text-xs font-semibold tracking-widest uppercase mt-1">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Story text */}
          <div>
            <div className="section-label mb-4">How It Started</div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none mb-6">
              FROM A DREAM TO <span className="text-fire-500">HYDERABAD'S FINEST</span>
            </h2>
            <p className="font-body text-steel-300 text-base leading-relaxed mb-5">
              In 2016, Vikram Rathore — a national-level powerlifter from Hyderabad — returned home after training abroad and couldn't find a gym that matched what he'd experienced. Premium equipment? Certified coaching? Nutrition science? It simply wasn't here.
            </p>
            <p className="font-body text-steel-300 text-base leading-relaxed mb-5">
              So he built it himself. With ₹12 lakhs in savings, a 200-square-foot space, and the absolute conviction that Indians deserve world-class fitness — AlphaFuel was born.
            </p>
            <p className="font-body text-steel-300 text-base leading-relaxed mb-8">
              Today, 8 years later, we occupy 10,000 sq ft, serve 2,400+ active members, and have helped hundreds of people achieve results they once thought impossible. The dream is very much alive — and it's just getting started.
            </p>
            <Link to="/contact" className="btn-primary">JOIN THE LEGACY</Link>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="bg-steel-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What Drives Us</div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-none">
              OUR <span className="text-fire-500">VALUES</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="card-dark p-7 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">{v.icon}</div>
                <h3 className="font-display text-xl tracking-wide mb-3 text-fire-500">{v.title}</h3>
                <p className="font-body text-steel-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Our Journey</div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-none">
              THE <span className="text-fire-500">MILESTONES</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-steel-600 hidden md:block" />

            <div className="flex flex-col gap-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 md:gap-10 items-start group">
                  <div className="flex-shrink-0 w-16 md:w-20">
                    <div className="font-display text-xl md:text-2xl text-fire-500 tracking-wide text-right">{m.year}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center mt-1.5">
                    <div className="w-4 h-4 bg-fire-500 rounded-full ring-4 ring-steel-900 group-hover:scale-125 transition-transform duration-200" />
                  </div>
                  <div className="flex-1 card-dark p-5">
                    <p className="font-body text-steel-200 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-steel-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">The Experts</div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-none">
              MEET THE <span className="text-fire-500">TEAM</span>
            </h2>
            <p className="font-body text-steel-300 text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Every trainer at AlphaFuel is certified, experienced, and obsessed with your transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="card-dark overflow-hidden group">
                {/* Avatar area */}
                <div className="h-44 bg-steel-700 relative flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">{member.emoji}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-fire-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                {/* Info */}
                <div className="p-5">
                  <div className="section-label text-[9px] mb-1">{member.exp}</div>
                  <h3 className="font-display text-xl tracking-wide mb-0.5">{member.name}</h3>
                  <p className="font-body text-fire-500 text-xs font-semibold mb-2">{member.role}</p>
                  <p className="font-body text-steel-400 text-xs mb-3">{member.cert}</p>
                  <p className="font-body text-steel-300 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-fire-500 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-steel-900 leading-none mb-4">
            TRAIN WITH THE BEST
          </h2>
          <p className="font-body text-steel-900/70 text-base mb-8 leading-relaxed">
            Our coaches are waiting for you. Take the first step — it only takes one.
          </p>
          <Link to="/contact" className="btn-outline border-steel-900 text-steel-900 hover:bg-steel-900 hover:text-fire-500">
            BOOK FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
