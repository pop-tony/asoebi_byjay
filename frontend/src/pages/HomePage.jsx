import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import FabricCard from '../components/FabricCard'
import SectionTitle from '../components/SectionTitle'
import { fabricImages } from '../data/fabricImages'
import { fabricProducts } from '../data/fabricProducts'

const specialties = [
  {
    title: 'Asoebi fabrics',
    description: 'Find fabrics for weddings, celebrations, and coordinated occasion looks.',
    image: fabricImages.waxPrintShop
  },
  {
    title: 'Bridal fabrics',
    description: 'Explore fabric options for bridal style and special moments.',
    image: fabricImages.laceDetail
  },
  {
    title: 'Brocades & premium fabrics',
    description: 'Discover distinctive textures for memorable looks.',
    image: fabricImages.fabricBolts
  },
  {
    title: 'Headties, veils & accessories',
    description: 'Complete your outfit with the finishing touches.',
    image: fabricImages.foldedTextiles
  }
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.3rem] text-[#776852]">
            Fabrics · Asoebi · Abuja, Nigeria
          </p>
          <h1 className="max-w-2xl font-['Playfair_Display'] text-5xl leading-[0.98] text-[#23332d] md:text-7xl">
            The art of dressing for your moment.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#68665f] md:text-lg">
            Discover exquisite bridal lace, asoebi, brocades, and premium fabrics—thoughtfully selected for celebrations that stay with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#294438] px-6 py-3.5 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#1d3329]"
            >
              Explore our fabrics <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.instagram.com/asoebi_byjay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d0c3] px-6 py-3.5 text-sm uppercase tracking-[0.15em] text-[#294438] transition hover:border-[#294438]"
            >
              Follow our story
            </a>
          </div>
          <div className="mt-10 flex items-start gap-3 border-t border-[#e5ddd1] pt-6 text-sm leading-6 text-[#68665f]">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#9b7a3d]" />
            <span>19 Kampala Street, Wuse 2, Abuja, Nigeria</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[560px] pb-10 pl-5"
        >
          <div className="absolute inset-5 -right-10 -top-5 rounded-[42%] bg-[#e8dfd1]" />
          <div className="relative h-[430px] overflow-hidden rounded-[220px_220px_28px_28px] bg-[#d9ded5] shadow-[0_24px_70px_rgba(47,54,42,0.12)] md:h-[570px]">
            <img
              src={fabricImages.waxPrintShop}
              alt="Colorful wax-print fabrics displayed in a West African shop"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17251e]/55 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/75">A celebration in every thread</p>
              <p className="mt-2 font-['Playfair_Display'] text-3xl">Made to be remembered.</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.65, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 w-32 overflow-hidden rounded-[22px] border-4 border-[#f7f5f2] shadow-xl md:w-40"
          >
            <img
              src={fabricImages.laceDetail}
              alt="Close-up of ivory floral lace"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
          <div className="absolute right-0 top-6 rounded-full border border-white/70 bg-[#f7f5f2]/90 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#294438] shadow-sm backdrop-blur">
            Selected with care
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="border-y border-[#e8e0d5] bg-[#efe9df] py-14"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="Asoebi by Jay · Abuja"
            title="For every special occasion"
            description="Explore our selection of occasion fabrics and the details that bring your look together."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item, index) => (
              <article key={item.title} className="group relative isolate flex min-h-[310px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#294438] p-6 text-white shadow-[0_12px_35px_rgba(54,48,38,0.08)] md:min-h-[350px] md:p-7">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17251e]/90 via-[#17251e]/25 to-transparent" />
                <p className="text-[10px] uppercase tracking-[0.2rem] text-white/75">
                  0{index + 1} · Our specialties
                </p>
                <h2 className="mt-3 font-['Playfair_Display'] text-2xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/85">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Fabric inspiration"
            title="Textures for the moments that matter"
            description="Browse fabric styles and visual inspiration. Contact us to confirm current in-store designs, availability, and pricing."
          />
        </motion.div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fabricProducts.map((fabric) => (
            <FabricCard key={fabric.id} fabric={fabric} />
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#24392f] text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${fabricImages.laceDetail}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#20352b] via-[#20352b]/95 to-[#20352b]/75" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <div className="relative hidden h-[350px] overflow-hidden rounded-[180px_180px_24px_24px] border border-white/15 lg:block">
            <img
              src={fabricImages.foldedTextiles}
              alt="Colorful folded textiles with varied woven textures"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20352b]/50 to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3rem] text-[#d7c8a9]">Visit our Abuja store</p>
            <h2 className="mt-5 max-w-2xl font-['Playfair_Display'] text-4xl leading-tight md:text-6xl">
              Find the fabric for your next celebration.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#e0e0d7] md:text-lg">
              Visit Asoebi by Jay for bridal, asoebi, brocade, and premium fabrics, plus headties, veils, and accessories.
            </p>
            <p className="mt-5 flex items-start gap-3 text-sm text-[#e0e0d7]">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#d7c8a9]" />
              <span>19 Kampala Street, Wuse 2, Abuja, Nigeria</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#f7f5f2] px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-[#24392f] transition hover:bg-white"
              >
                Contact &amp; directions <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=2347031008862"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
