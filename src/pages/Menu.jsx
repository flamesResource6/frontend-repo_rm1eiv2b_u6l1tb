import React from 'react'
import SEO from '../components/SEO'

const Section = ({ title, items }) => (
  <section className="mt-10">
    <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a52]">{title}</h2>
    <ul className="mt-4 space-y-4">
      {items.map((it, i) => (
        <li key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-slate-900">{it.name}</h3>
            <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
          </div>
          <div className="text-[#1a3a52] font-semibold whitespace-nowrap">€{it.price.toFixed(2)}</div>
        </li>
      ))}
    </ul>
  </section>
)

export default function Menu() {
  const appetizers = [
    { name: 'Lángos Bites', desc: 'Crispy garlic flatbread with sour cream and cheese.', price: 7.5 },
    { name: 'Duck Liver Pâté', desc: 'Silky pâté with Tokaji jelly and brioche.', price: 12.0 },
    { name: 'Goulash Soup', desc: 'Classic beef and paprika broth with csipetke noodles.', price: 9.5 },
  ]
  const mains = [
    { name: 'Beef Pörkölt', desc: 'Rich paprika beef stew with galuska dumplings.', price: 19.0 },
    { name: 'Chicken Paprikash', desc: 'Creamy paprika sauce and nokedli dumplings.', price: 17.5 },
    { name: 'Mangalica Pork', desc: 'Chargrilled tenderloin, smoked jus, roast potato.', price: 22.0 },
  ]
  const desserts = [
    { name: 'Somlói Galuska', desc: 'Walnut sponge, rum cream, chocolate sauce.', price: 8.0 },
    { name: 'Dobos Torte', desc: 'Caramel-topped sponge with chocolate buttercream.', price: 7.5 },
  ]
  const drinks = [
    { name: 'Tokaji Furmint (glass)', desc: 'Elegant Hungarian white wine.', price: 7.0 },
    { name: 'Egri Bikavér (glass)', desc: 'Classic full-bodied red.', price: 7.5 },
    { name: 'Homemade Raspberry Soda', desc: 'Lightly sweet, refreshing.', price: 4.5 },
  ]

  return (
    <>
      <SEO title="Menu" description="Explore the Taste of Budapest menu — authentic Hungarian cuisine, appetizers, mains, desserts, and drinks." />
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1a3a52]">Menu</h1>
          <p className="mt-3 text-slate-700">Fine dining in Budapest with dishes inspired by regional heritage and seasonal produce.</p>
          <Section title="Appetizers" items={appetizers} />
          <Section title="Main Courses" items={mains} />
          <Section title="Desserts" items={desserts} />
          <Section title="Drinks" items={drinks} />
        </div>
      </div>
    </>
  )
}
