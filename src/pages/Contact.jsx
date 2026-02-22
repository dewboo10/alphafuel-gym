import { useState } from 'react'

const FAQS = [
  {
    q: 'Do you offer a free trial?',
    a: 'Yes! We offer a 7-day free trial for all new members. No credit card required. Walk in any day between 6 AM – 8 PM and ask at the front desk.',
  },
  {
    q: 'What are your operating hours?',
    a: 'We are open 365 days a year. Mon–Sat: 5:00 AM – 10:00 PM. Sunday: 6:00 AM – 8:00 PM. Even on national holidays — because gains don\'t take days off.',
  },
  {
    q: 'Can I switch between membership plans?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle with no penalty fees.',
  },
  {
    q: 'Do you have female-only workout zones?',
    a: 'Yes. We have a dedicated women\'s training zone available at all hours, staffed with certified female trainers during peak slots.',
  },
  {
    q: 'Are nutrition coaching and personal training included in general membership?',
    a: 'Basic nutrition guidance is included with Alpha and Elite memberships. Dedicated 1-on-1 nutrition coaching and PT sessions are available as add-ons or part of the Elite plan.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', interest: '', message: '' })
    }, 1500)
  }

  return (
    <div className="pt-16">
      {/* ── HEADER ── */}
      <section className="relative bg-steel-800 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(232,144,10,0.07),transparent_60%)]" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[150px] text-steel-700 opacity-10 hidden lg:block select-none">
          CT
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-label mb-4 fade-up animate-delay-100">Get In Touch</div>
          <h1 className="font-display text-[clamp(60px,8vw,100px)] leading-none fade-up animate-delay-200 mb-6">
            CONTACT<br /><span className="text-fire-500">US</span>
          </h1>
          <p className="font-body text-steel-300 text-lg max-w-xl leading-relaxed fade-up animate-delay-300">
            Ready to start? Have questions? Our team is here 7 days a week. Let's talk about your transformation.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ── */}
      <section className="bg-steel-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div>
            <div className="section-label mb-4">Visit · Call · Write</div>
            <h2 className="font-display text-[clamp(36px,4vw,52px)] leading-none mb-8">
              WE'RE HERE<br /><span className="text-fire-500">FOR YOU</span>
            </h2>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  icon: '📍',
                  title: 'Visit Us',
                  lines: ['Plot 42, Fitness Nagar, Banjara Hills,', 'Hyderabad, Telangana — 500034'],
                  action: null,
                },
                {
                  icon: '📞',
                  title: 'Call Us',
                  lines: ['+91 98765 43210', '+91 98765 43211 (WhatsApp)'],
                  action: 'tel:+919876543210',
                },
                {
                  icon: '✉️',
                  title: 'Email Us',
                  lines: ['fuel@alphafuelgym.in', 'support@alphafuelgym.in'],
                  action: 'mailto:fuel@alphafuelgym.in',
                },
                {
                  icon: '🕐',
                  title: 'Hours',
                  lines: ['Mon–Sat: 5:00 AM – 10:00 PM', 'Sunday: 6:00 AM – 8:00 PM'],
                  action: null,
                },
              ].map((info, i) => (
                <div key={i} className="card-dark p-5 flex gap-4 items-start group">
                  <div className="w-11 h-11 bg-fire-500/10 border border-fire-500/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-fire-500 group-hover:border-fire-500 transition-all duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-display text-base tracking-wide mb-1">{info.title}</div>
                    {info.lines.map((l, j) => (
                      info.action && j === 0
                        ? <a key={j} href={info.action} className="font-body text-steel-300 text-sm block hover:text-fire-500 transition-colors">{l}</a>
                        : <p key={j} className="font-body text-steel-300 text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-steel-800 border border-steel-600 h-56 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, #555 0px, #555 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #555 0px, #555 1px, transparent 1px, transparent 40px)',
                }}
              />
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-display text-lg tracking-widest text-fire-500">BANJARA HILLS</div>
                <div className="font-body text-steel-400 text-xs mt-1">Hyderabad, Telangana</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-body text-xs tracking-widest text-fire-500 hover:text-fire-400 border-b border-fire-500 pb-0.5"
                >
                  OPEN IN GOOGLE MAPS →
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="card-dark p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="font-display text-3xl tracking-widest text-fire-500 mb-3">MESSAGE SENT!</h3>
                  <p className="font-body text-steel-300 text-base leading-relaxed mb-6">
                    Our team will reach out within 2 hours. Get ready to transform.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <>
                  <div className="section-label mb-2">Send a Message</div>
                  <h3 className="font-display text-3xl tracking-wide mb-7">
                    LET'S <span className="text-fire-500">TALK</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs tracking-[0.2em] text-steel-400 uppercase block mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Rahul Sharma"
                          className="input-base"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-[0.2em] text-steel-400 uppercase block mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className="input-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs tracking-[0.2em] text-steel-400 uppercase block mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="rahul@example.com"
                        className="input-base"
                      />
                    </div>

                    <div>
                      <label className="font-body text-xs tracking-[0.2em] text-steel-400 uppercase block mb-1.5">I'm Interested In</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="input-base"
                      >
                        <option value="" disabled>Select a service…</option>
                        <option value="membership">General Membership</option>
                        <option value="strength">Strength & Powerlifting</option>
                        <option value="boxing">Boxing & Combat</option>
                        <option value="hiit">HIIT Training</option>
                        <option value="yoga">Yoga & Mobility</option>
                        <option value="nutrition">Nutrition Coaching</option>
                        <option value="pt">Personal Training</option>
                        <option value="trial">Free Trial</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs tracking-[0.2em] text-steel-400 uppercase block mb-1.5">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your goals, schedule, or any questions…"
                        className="input-base resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn-primary w-full text-center text-base mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? 'SENDING…' : 'SEND MESSAGE'}
                    </button>

                    <p className="font-body text-steel-500 text-xs text-center">
                      We respond within 2 hours · No spam ever · 100% private
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-steel-800 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Got Questions?</div>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none">
              FREQUENTLY ASKED <span className="text-fire-500">QUESTIONS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="card-dark overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-display text-lg tracking-wide group-hover:text-fire-500 transition-colors pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-fire-500 text-xl font-display flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="font-body text-steel-300 text-sm leading-relaxed px-6 pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-body text-steel-400 text-sm">
              Still have questions?{' '}
              <a href="tel:+919876543210" className="text-fire-500 hover:text-fire-400 transition-colors">
                Call us directly
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-fire-500 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-steel-900 leading-none mb-4">
            YOUR JOURNEY STARTS NOW
          </h2>
          <p className="font-body text-steel-900/70 text-base mb-2 leading-relaxed">
            First 7 days absolutely free. No commitments. Just results.
          </p>
          <p className="font-display text-xl text-steel-900 mb-8 tracking-widest">
            📞 +91 98765 43210
          </p>
          <a href="tel:+919876543210" className="btn-outline border-steel-900 text-steel-900 hover:bg-steel-900 hover:text-fire-500">
            CALL NOW & START FREE
          </a>
        </div>
      </section>
    </div>
  )
}
