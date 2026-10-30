import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import FabricCard from '../components/FabricCard'
import { fabricProducts } from '../data/fabricProducts'

export default function FabricDetailPage() {
  const { slug } = useParams()
  const fabric = fabricProducts.find((item) => item.slug === slug)
  const relatedFabrics = fabricProducts.filter((item) => item.id !== fabric?.id).slice(0, 3)

  if (!fabric) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-['Playfair_Display'] text-4xl text-[#294438]">Fabric not found</h1>
        <Link to="/shop" className="mt-5 inline-flex items-center gap-2 text-sm text-[#776852]">
          <ArrowLeft className="h-4 w-4" /> Back to fabrics
        </Link>
      </div>
    )
  }

  const inquiry = `Hello Asoebi by Jay, I would like to ask about the "${fabric.name}" fabric inspiration. Could you please confirm current availability and pricing?`
  const whatsappUrl = `https://api.whatsapp.com/send?phone=2347031008862&text=${encodeURIComponent(inquiry)}`

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <Link to="/shop" className="mb-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#776852] transition hover:text-[#294438]">
        <ArrowLeft className="h-4 w-4" /> All fabrics
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[30px] bg-[#e8e0d5]"
        >
          <img
            src={fabric.image}
            alt={fabric.name}
            fetchPriority="high"
            className="aspect-[4/4.5] h-full max-h-[720px] w-full object-cover"
          />
          <span className="absolute left-5 top-5 rounded-full bg-[#fbf9f5]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#294438] backdrop-blur">
            Fabric inspiration
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col justify-center py-2 lg:py-8"
        >
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#927a52]">{fabric.category} · Asoebi by Jay</p>
          <h1 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight text-[#294438] md:text-6xl">{fabric.name}</h1>
          <p className="mt-5 text-lg leading-8 text-[#68665f]">{fabric.description}</p>
          <p className="mt-4 text-sm leading-7 text-[#68665f]">{fabric.details}</p>

          <div className="mt-8 grid gap-5 border-y border-[#e8e0d5] py-6 sm:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#927a52]">Occasion inspiration</p>
              <p className="mt-2 text-sm leading-6 text-[#294438]">{fabric.occasion}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#927a52]">Colors shown</p>
              <p className="mt-2 text-sm leading-6 text-[#294438]">{fabric.colors}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#294438] px-6 py-3.5 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#1d3329]"
            >
              Ask about this fabric <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d0c3] px-6 py-3.5 text-xs uppercase tracking-[0.15em] text-[#294438] transition hover:border-[#294438]"
            >
              Visit our store
            </Link>
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-[20px] bg-[#f0ece4] p-4 text-sm leading-6 text-[#68665f]">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#927a52]" />
            <span>19 Kampala Street, Wuse 2, Abuja. Message us to confirm current in-store designs, availability, and pricing.</span>
          </div>

          <p className="mt-5 text-xs leading-5 text-[#77746d]">
            Photos are general fabric inspiration and may not show current in-store stock. Contact us to confirm the exact fabric, color, availability, and price.
          </p>
          {fabric.attribution ? (
            <p className="mt-3 text-xs text-[#77746d]">
              Photo credit:{' '}
              <a href={fabric.attributionUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                {fabric.attribution}
              </a>
            </p>
          ) : null}
        </motion.div>
      </div>

      <section className="mt-20">
        <SectionTitle
          eyebrow="Keep exploring"
          title="More fabric inspiration"
          description="Browse other textures and styles, then message us to find out what is available in store."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedFabrics.map((item) => (
            <FabricCard key={item.id} fabric={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
