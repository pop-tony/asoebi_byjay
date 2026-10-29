import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const specialties = [
  {
    title: 'Asoebi fabrics',
    description: 'Find fabrics for weddings, celebrations, and coordinated occasion looks.'
  },
  {
    title: 'Bridal fabrics',
    description: 'Explore fabric options for bridal style and special moments.'
  },
  {
    title: 'Brocades & premium fabrics',
    description: 'Discover distinctive textures for memorable looks.'
  },
  {
    title: 'Headties, veils & accessories',
    description: 'Complete your outfit with the finishing touches.'
  }
]

const instagramSamples = [
  {
    name: 'Pink embroidered lace',
    image: '/instagram/asoebi-lace-sample-pink.jpg',
    post: 'https://www.instagram.com/asoebi_byjay/p/DfFot7_iMyW/'
  },
  {
    name: 'Teal embroidered lace',
    image: '/instagram/asoebi-lace-sample-teal.jpg',
    post: 'https://www.instagram.com/asoebi_byjay/p/DfEmRSpiHty/'
  }
]

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.3rem] text-[#666666]">
            Fabrics · Asoebi · Abuja, Nigeria
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl leading-[0.95] text-[#111111] md:text-7xl">
            Exclusive &amp; exquisite fabrics.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#666666]">
            Best prices on bridal, asoebi, brocades, and premium fabrics, with headties, veils, and accessories to complete your occasion look.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">
              Explore the shop <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.instagram.com/asoebi_byjay/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d8] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#111111]"
            >
              <ArrowRight className="h-4 w-4" />
              Follow us
            </a>
          </div>
          <div className="mt-10 flex items-start gap-3 border-t border-[#e7e1d8] pt-6 text-sm leading-6 text-[#666666]">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#9b7a3d]" />
            <span>19 Kampala Street, Wuse 2, Abuja, Nigeria</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-black">
          <img
            src="/asoebi-by-jay-logo.jpg"
            alt="Asoebi by Jay logo"
            className="aspect-square h-full w-full object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionTitle
          eyebrow="What we offer"
          title="For every special occasion"
          description="Explore our selection of occasion fabrics and the details that bring your look together."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <article key={item.title} className="rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-6">
              <p className="text-[10px] uppercase tracking-[0.22rem] text-[#9b7a3d]">
                0{index + 1} · Asoebi by Jay
              </p>
              <h2 className="mt-5 font-['Playfair_Display'] text-2xl text-[#111111]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#666666]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f3efe9] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle
            eyebrow="From Instagram"
            title="Fabric samples"
            description="A glimpse of embroidered lace featured on our Instagram. Message us to check current availability and pricing."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {instagramSamples.map((sample) => (
              <a
                key={sample.image}
                href={sample.post}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-white"
              >
                <img
                  src={sample.image}
                  alt={sample.name}
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                  <div>
                    <h2 className="font-['Playfair_Display'] text-2xl text-[#111111]">{sample.name}</h2>
                    <p className="mt-2 text-sm text-[#666666]">Listed on Instagram: ₦250,000 · approx. 5 yards</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#666666]">View post ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-8">
          <div className="overflow-hidden rounded-[28px] border border-[#c6a57b]/30 bg-black">
            <img src="/asoebi-by-jay-logo.jpg" alt="" className="aspect-square w-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3rem] text-[#d4c3aa]">Visit our Abuja store</p>
            <h2 className="mt-5 font-['Playfair_Display'] text-4xl leading-tight md:text-6xl">
              Find the fabric for your next celebration.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#d7d0c5]">
              Visit Asoebi by Jay for bridal, asoebi, brocade, and premium fabrics, plus headties, veils, and accessories.
            </p>
            <p className="mt-6 flex items-start gap-3 text-[#d7d0c5]">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c6a57b]" />
              <span>19 Kampala Street, Wuse 2, Abuja, Nigeria</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#111111]">
                Contact &amp; directions <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=2347031008862"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white"
              >
                WhatsApp us
              </a>
              <a
                href="https://www.instagram.com/antu_fabrics/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white"
              >
                Asoebi fabrics: @antu_fabrics
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
