import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const categories = [
  ['Bridal fabrics', 'Fabrics for bridal looks and wedding celebrations.'],
  ['Asoebi', 'Occasion fabrics for coordinated celebration looks.'],
  ['Brocades & premium fabrics', 'Distinctive fabrics for special occasions.'],
  ['Headties, veils & accessories', 'Finishing touches for your complete look.']
]

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Asoebi by Jay · Abuja"
        title="Find fabrics for your celebration."
        description="Best prices on bridal, asoebi, brocades, and premium fabrics, with headties, veils, and accessories."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {categories.map(([title, description], index) => (
          <article key={title} className="rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-7 md:p-9">
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#9b7a3d]">
              0{index + 1} · Our specialties
            </p>
            <h2 className="mt-5 font-['Playfair_Display'] text-3xl text-[#111111]">{title}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#666666]">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[28px] bg-[#111111] p-8 text-white md:p-10">
        <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Current fabrics &amp; availability</p>
        <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl">See what’s in store.</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#d7d0c5]">
          Visit us in Wuse 2, Abuja, or message us on Instagram for current styles and pricing.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/asoebi_byjay/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#111111]"
          >
            <ArrowRight className="h-4 w-4" />
            @asoebi_byjay
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white"
          >
            Visit &amp; directions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
