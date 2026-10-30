import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { fabricImages } from '../data/fabricImages'
import { fabricProducts } from '../data/fabricProducts'

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Collections"
        title="For your special occasion."
        description="Asoebi, bridal fabrics, brocades, headties, veils, and accessories from Asoebi by Jay."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {fabricProducts.map((collection, index) => (
          <article key={collection.id} className="group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] bg-[#294438] p-8 text-white md:min-h-[380px] md:p-10">
            <img
              src={collection.image}
              alt={`${collection.name} collection`}
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17251e]/90 via-[#17251e]/20 to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.22rem] text-white/75">
              0{index + 1} · Asoebi by Jay
            </p>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl">{collection.name}</h2>
            <p className="mt-3 max-w-md text-base leading-7 text-white/85">{collection.description}</p>
            <Link
              to={`/fabric/${collection.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/90"
            >
              Explore fabric <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="relative isolate mt-10 flex flex-col gap-5 overflow-hidden rounded-[28px] bg-[#20352b] p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
        <img src={fabricImages.laceDetail} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#20352b]/85" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Visit us in Abuja</p>
          <p className="mt-3 text-lg leading-7">19 Kampala Street, Wuse 2, Abuja, Nigeria</p>
        </div>
        <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#294438]">
          Contact &amp; directions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
