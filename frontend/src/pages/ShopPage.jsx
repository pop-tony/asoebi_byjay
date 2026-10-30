import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FabricCard from '../components/FabricCard'
import SectionTitle from '../components/SectionTitle'
import { fabricImages } from '../data/fabricImages'
import { fabricProducts } from '../data/fabricProducts'

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Asoebi by Jay · Abuja"
        title="Find fabrics for your celebration."
        description="Explore fabric styles and inspiration for bridal looks, asoebi celebrations, and special occasions. Contact us to confirm current availability and pricing."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fabricProducts.map((fabric) => (
          <FabricCard key={fabric.id} fabric={fabric} />
        ))}
      </div>

      <div className="relative isolate mt-10 overflow-hidden rounded-[28px] bg-[#20352b] p-8 text-white md:p-10">
        <img src={fabricImages.foldedTextiles} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#20352b]/85" />
        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Current fabrics &amp; availability</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl">See what’s in store.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#e2e1d9]">
            Visit us in Wuse 2, Abuja, or message us on Instagram for current styles and pricing.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/asoebi_byjay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#294438]"
            >
              <ArrowRight className="h-4 w-4" />
              @asoebi_byjay
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white"
            >
              Visit &amp; directions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
