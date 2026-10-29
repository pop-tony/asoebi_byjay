import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const collections = [
  {
    title: 'Bridal',
    description: 'Explore fabric options for bridal style and wedding celebrations.'
  },
  {
    title: 'Asoebi',
    description: 'Find fabrics for coordinated looks at weddings and special occasions.'
  },
  {
    title: 'Brocades & premium fabrics',
    description: 'Discover fabrics for a memorable occasion outfit.'
  },
  {
    title: 'Headties, veils & accessories',
    description: 'Add the finishing touches to your celebration look.'
  }
]

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Collections"
        title="For your special occasion."
        description="Asoebi, bridal fabrics, brocades, headties, veils, and accessories from Asoebi by Jay."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {collections.map((collection, index) => (
          <article key={collection.title} className="rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#9b7a3d]">
              0{index + 1} · Asoebi by Jay
            </p>
            <h2 className="mt-5 font-['Playfair_Display'] text-3xl text-[#111111]">{collection.title}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#666666]">{collection.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 rounded-[28px] bg-[#111111] p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Visit us in Abuja</p>
          <p className="mt-3 text-lg leading-7">19 Kampala Street, Wuse 2, Abuja, Nigeria</p>
        </div>
        <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#111111]">
          Contact &amp; directions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
