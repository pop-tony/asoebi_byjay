import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#eae2d6] bg-[#f3efe9]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/asoebi-by-jay-logo.jpg" alt="" className="h-14 w-14 rounded-full object-cover" />
            <p className="font-['Playfair_Display'] text-lg tracking-[0.12em] text-[#111111] uppercase">Asoebi by Jay</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-[#666666]">
            Exclusive and exquisite fabrics for asoebi, bridal celebrations, and special occasions.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2rem] text-[#666666]">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-[#111111]">
            <li><Link to="/shop">Fabrics</Link></li>
            <li><Link to="/shop">Asoebi</Link></li>
            <li><Link to="/shop">Headties &amp; veils</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2rem] text-[#666666]">Visit us</p>
          <ul className="mt-5 space-y-3 text-sm text-[#111111]">
            <li>19 Kampala Street</li>
            <li>Wuse 2, Abuja, Nigeria</li>
            <li><Link to="/contact">Contact &amp; directions</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2rem] text-[#666666]">Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-[#111111]">
            <li>
              <a href="https://www.instagram.com/asoebi_byjay/" target="_blank" rel="noreferrer">
                Instagram @asoebi_byjay
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=2347031008862" target="_blank" rel="noreferrer">
                WhatsApp +234 703 100 8862
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/antu_fabrics/" target="_blank" rel="noreferrer">
                Fabric partner @antu_fabrics
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#eae2d6] px-4 py-6 text-center text-xs uppercase tracking-[0.18em] text-[#666666] md:px-8">
        © 2026 Asoebi by Jay · Abuja, Nigeria
      </div>
    </footer>
  )
}
