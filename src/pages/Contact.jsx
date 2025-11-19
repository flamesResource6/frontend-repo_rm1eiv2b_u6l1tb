import React, { useState } from 'react'
import SEO from '../components/SEO'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: false, message: 'Please fill in all required fields.' })
      return
    }
    setStatus({ loading: true, success: null, message: '' })
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: 'Thank you, your message has been sent.' })
        setForm(initial)
      } else {
        throw new Error(data.detail || 'Something went wrong')
      }
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message || 'Submission failed' })
    }
  }

  return (
    <>
      <SEO title="Contact" description="Contact Taste of Budapest — address, opening hours, phone, email, and contact form for our Hungarian restaurant in Budapest." />
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1a3a52]">Contact</h1>

          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-[#1a3a52]">Visit Us</h2>
              <p className="mt-2 text-slate-700">Dorottya utca 8., 1051 Budapest, Hungary</p>
              <h3 className="mt-6 text-lg font-semibold text-[#1a3a52]">Opening Hours</h3>
              <ul className="mt-2 text-slate-700 space-y-1 text-sm">
                <li>Mon–Thu: 12:00 – 22:00</li>
                <li>Fri–Sat: 12:00 – 23:00</li>
                <li>Sun: 12:00 – 21:00</li>
              </ul>
              <h3 className="mt-6 text-lg font-semibold text-[#1a3a52]">Contact</h3>
              <p className="text-slate-700 text-sm">Phone: +36 1 234 5678</p>
              <p className="text-slate-700 text-sm">Email: reservations@tasteofbudapest.hu</p>

              <div className="mt-6 h-48 rounded-xl bg-[#f7f8fb] border border-slate-200 flex items-center justify-center text-slate-500 text-sm">
                Map area — embed Google Map or add a screenshot here
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#1a3a52]">Send a Message</h2>
              <form onSubmit={onSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name*</label>
                  <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email*</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message*</label>
                  <textarea name="message" rows={5} value={form.message} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
                </div>
                <button disabled={status.loading} className="inline-flex items-center justify-center rounded-md bg-[#d4af37] px-6 py-3 text-[#1a3a52] font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37]">
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
                {status.message && (
                  <p className={`${status.success ? 'text-emerald-700' : 'text-red-700'} font-medium`}>{status.message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
