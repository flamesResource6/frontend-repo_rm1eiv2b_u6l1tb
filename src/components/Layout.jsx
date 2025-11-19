import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-[#d4af37]' : 'text-white/90 hover:text-[#d4af37]'
  }`

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fb] text-slate-800">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-[#1a3a52]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1a3a52]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] to-amber-500 flex items-center justify-center text-[#1a3a52] font-extrabold shadow-inner">TB</div>
              <span className="text-white font-semibold tracking-wide">Taste of Budapest</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/reservations" className={navLinkClass}>Reservations</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>
            <button aria-label="Open Menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200/20 bg-[#1a3a52]">
            <div className="px-4 pb-4 space-y-1">
              <NavLink onClick={() => setOpen(false)} to="/" className="block px-3 py-2 text-white/90 hover:text-[#d4af37]">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/menu" className="block px-3 py-2 text-white/90 hover:text-[#d4af37]">Menu</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className="block px-3 py-2 text-white/90 hover:text-[#d4af37]">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/reservations" className="block px-3 py-2 text-white/90 hover:text-[#d4af37]">Reservations</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className="block px-3 py-2 text-white/90 hover:text-[#d4af37]">Contact</NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-[#1a3a52] font-semibold">Taste of Budapest</h4>
            <p className="text-slate-600 mt-2 text-sm">Authentic Hungarian cuisine, crafted with seasonal ingredients and Budapest hospitality.</p>
          </div>
          <div>
            <h4 className="text-[#1a3a52] font-semibold">Visit Us</h4>
            <p className="text-slate-600 mt-2 text-sm">Dorottya utca 8., 1051 Budapest, Hungary</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Taste of Budapest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
