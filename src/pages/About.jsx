import React from 'react'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About" description="The story of Taste of Budapest — a Hungarian restaurant in Budapest celebrating authentic Hungarian cuisine and fine dining traditions." />
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#1a3a52]">About Us</h1>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>Founded in the heart of the city, Taste of Budapest is a celebration of Hungarian hospitality. Our dining room blends timeless elegance with a warm, welcoming mood—perfect for intimate dinners and special occasions alike.</p>
            <p>We honour the country’s culinary heritage with thoughtful sourcing and slow techniques. From paprika-forward stews to refined pastries, our menu is rooted in tradition while embracing contemporary fine dining in Budapest.</p>
            <p>Our wine list features the best of Tokaj, Eger, and beyond, carefully paired to complement authentic Hungarian cuisine.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a52]">Meet the Chef</h2>
            <p className="mt-3 text-slate-700">Chef Eszter Nagy trained in top kitchens across Europe before returning to Budapest. Her cooking balances comfort and elegance, showcasing seasonal produce, Mangalica pork, freshwater fish, and the soulful flavors of paprika and dill.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a3a52]">Ambiance</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Elegant dining room at Taste of Budapest" />
              <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1680359873864-43e89bf248ac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIdW5nYXJpYW4lMjBkaXNoZXMlMjBwcmVzZW50ZWQlMjBiZWF1dGlmdWxseXxlbnwwfDB8fHwxNzYzNTU2OTMzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hungarian dishes presented beautifully" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
