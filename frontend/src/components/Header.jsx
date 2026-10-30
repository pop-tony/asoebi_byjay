import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useStore } from '../store/useStore'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = useStore((state) => state.cartCount())
  const toggleDrawer = useStore((state) => state.toggleDrawer)

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8e0d5] bg-[#f7f5f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="rounded-full border border-[#e7e1d8] p-2 text-[#294438] md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link to="/" className="flex items-center gap-3" aria-label="Asoebi by Jay home">
            <img src="/asoebi-by-jay-logo.jpg" alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-['Playfair_Display'] text-sm font-semibold tracking-[0.12em] text-[#111111] uppercase md:text-base">
              Asoebi by Jay
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.18em] transition ${
                  isActive ? 'text-[#111111]' : 'text-[#666666] hover:text-[#111111]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDrawer}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e1d8] text-[#294438] transition hover:border-[#294438]"
            aria-label={`Open shopping bag${cartCount ? `, ${cartCount} items` : ''}`}
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#294438] px-1 text-[10px] text-white">
                {cartCount}
              </span>
            ) : null}
          </button>
          <Link to="/shop" className="hidden rounded-full border border-[#e7e1d8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#294438] transition hover:border-[#294438] md:inline-flex">
            Shop now
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-[#294438] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#1d3329]">
            Contact us
          </Link>
        </div>
      </div>
      {menuOpen ? (
        <nav id="mobile-navigation" className="border-t border-[#e8e0d5] bg-[#f7f5f2] px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b border-[#e8e0d5] py-3 text-xs uppercase tracking-[0.18em] last:border-0 ${
                  isActive ? 'text-[#294438]' : 'text-[#68665f]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
