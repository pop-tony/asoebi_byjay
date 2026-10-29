import { Link, NavLink } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eae2d6] bg-[#f7f5f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-6">
          <button type="button" className="rounded-full border border-[#e7e1d8] p-2 md:hidden" aria-label="Menu">
            <Menu className="h-4 w-4 text-[#111111]" />
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
          <button type="button" className="hidden rounded-full border border-[#e7e1d8] p-2 md:flex" aria-label="Search">
            <Search className="h-4 w-4 text-[#111111]" />
          </button>
          <Link to="/shop" className="hidden rounded-full border border-[#e7e1d8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#111111] md:inline-flex">
            Shop now
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-[#111111] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white">
            Contact us
          </Link>
        </div>
      </div>
    </header>
  )
}
