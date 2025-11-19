import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const dishes = [
  { title: 'Gulyásleves (Goulash Soup)', desc: 'Slow-cooked beef, paprika, root vegetables, and csipetke noodles in a rich, aromatic broth.', alt: 'Goulash soup at Taste of Budapest' },
  { title: 'Hortobágyi Palacsinta', desc: 'Savory crêpes filled with paprika braised veal, topped with creamy paprika sauce.', alt: 'Hortobágyi palacsinta savory crepes' },
  { title: 'Mangalica Pork Tenderloin', desc: 'Chargrilled Mangalica with smoked paprika jus, roasted potatoes, and seasonal greens.', alt: 'Mangalica pork tenderloin dish' },
  { title: 'Chicken Paprikash', desc: 'Free-range chicken simmered in paprika cream, served with buttery nokedli dumplings.', alt: 'Chicken paprikash with nokedli' },
  { title: 'Halászlé (Fisherman’s Soup)', desc: 'Traditional Danube-style spicy fish soup with catfish and river paprika.', alt: 'Hungarian fisherman’s soup' },
  { title: 'Somlói Galuska', desc: 'Classic Hungarian trifle with sponge cake, walnuts, chocolate sauce, and rum cream.', alt: 'Somlói galuska dessert' },
]

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Taste of Budapest — Hungarian restaurant in Budapest serving authentic Hungarian cuisine and fine dining in Budapest." />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a3a52] text-white">
        <div aria-hidden className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Taste of Budapest</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">Authentic Hungarian Cuisine in the Heart of Budapest</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/reservations" className="inline-flex items-center justify-center rounded-md bg-[#d4af37] px-6 py-3 text-[#1a3a52] font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] focus:ring-offset-[#1a3a52]">Book a Table</Link>
            <Link to="/menu" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/10">Explore Menu</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a52]">Hungarian restaurant in Budapest</h2>
              <p className="mt-4 text-slate-700">Welcome to Taste of Budapest, a premium destination for authentic Hungarian cuisine. Our kitchen celebrates centuries-old traditions and seasonal ingredients, reimagined with a fine dining touch.</p>
              <p className="mt-3 text-slate-700">Located steps from the Danube, we offer warm hospitality, a curated wine list, and dishes that highlight the soul of Budapest.</p>
            </div>
            <img className="rounded-xl shadow object-cover w-full h-72 md:h-80" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1974&auto=format&fit=crop" alt="Dining room ambiance at Taste of Budapest" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#f7f8fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a52]">Signature Highlights</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((d, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#1a3a52]">{d.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a3a52]">What our guests say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[ 
              'A perfect evening—refined flavors and true Budapest warmth.',
              'The goulash was unforgettable. Elegant yet comforting.',
              'Beautiful setting, attentive service, and outstanding wines.'
            ].map((q, i) => (
              <blockquote key={i} className="bg-[#f7f8fb] rounded-xl p-5 border border-slate-200 text-slate-700">
                “{q}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
