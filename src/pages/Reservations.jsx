import React, { useState } from 'react'
import SEO from '../components/SEO'

const initial = { name: '', email: '', phone: '', date: '', time: '', guests: 2, special_requests: '' }

export default function Reservations() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.date || !form.time || !form.guests) {
      setStatus({ loading: false, success: false, message: 'Please fill in all required fields.' })
      return
    }
    setStatus({ loading: true, success: null, message: '' })
    try {
      const res = await fetch(`${backend}/api/reservations`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          time: form.time,
          guests: Number(form.guests),
          special_requests: form.special_requests || undefined,
        })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: 'Thank you, your reservation request has been received.' })
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
      <SEO title="Reservations" description="Book a table at Taste of Budapest — authentic Hungarian cuisine and fine dining in Budapest." />
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1a3a52]">Reservations</h1>
          <p className="mt-3 text-slate-700">Plan your evening at our Hungarian restaurant in Budapest. Please share your details and we will confirm shortly.</p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name*</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email*</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone*</label>
                <input name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Date*</label>
                <input type="date" name="date" value={form.date} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Time*</label>
                <input type="time" name="time" value={form.time} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Guests*</label>
                <input type="number" name="guests" min="1" max="20" value={form.guests} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Special requests</label>
              <textarea name="special_requests" value={form.special_requests} onChange={onChange} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
            </div>
            <div>
              <button disabled={status.loading} className="inline-flex items-center justify-center rounded-md bg-[#d4af37] px-6 py-3 text-[#1a3a52] font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37]">
                {status.loading ? 'Submitting...' : 'Submit Reservation'}
              </button>
            </div>
            {status.message && (
              <p className={`${status.success ? 'text-emerald-700' : 'text-red-700'} font-medium`}>{status.message}</p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
