import SectionTitle from '../components/SectionTitle'
import { fabricImages, fabricShowcase } from '../data/fabricImages'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Asoebi by Jay · Abuja"
        title="Exclusive & exquisite fabrics"
        description="Find fabrics and finishing touches for asoebi, bridal celebrations, and special occasions."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid min-h-[420px] grid-cols-2 gap-3 overflow-hidden rounded-[32px] bg-[#e8e0d5] p-3 md:min-h-[500px]">
          <img
            src={fabricShowcase[0].image}
            alt={fabricShowcase[0].alt}
            className="h-full min-h-[400px] w-full rounded-[24px] object-cover"
          />
          <div className="grid grid-rows-2 gap-3">
            <img
              src={fabricImages.fabricBolts}
              alt="Folded fabrics in rich, varied colors"
              loading="lazy"
              className="h-full min-h-[190px] w-full rounded-[22px] object-cover"
            />
            <img
              src={fabricImages.laceDetail}
              alt="Detailed ivory lace fabric"
              loading="lazy"
              className="h-full min-h-[190px] w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
        <div className="relative isolate flex flex-col justify-center overflow-hidden rounded-[32px] bg-[#f3efe9] p-8 md:p-10">
          <img src={fabricImages.foldedTextiles} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 -z-10 bg-[#f7f4ee]/80" />
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#776852]">Our collection</p>
          <p className="mt-5 text-lg leading-8 text-[#294438]">
            Discover premium fabrics for bridal looks, asoebi celebrations, and brocade styles, alongside headties, veils, and accessories to complete your occasion look.
          </p>
          <a
            href="https://www.instagram.com/asoebi_byjay/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit rounded-full bg-[#294438] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          ['Asoebi & bridal', 'Explore fabric options for weddings, bridal parties, and celebrations.'],
          ['Brocades & premium fabrics', 'Find standout fabrics for special occasions and memorable looks.'],
          ['Finishing touches', 'Complete your outfit with headties, veils, and accessories.']
        ].map(([title, copy], index) => (
          <div key={title} className="relative isolate overflow-hidden rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-6">
            <img
              src={fabricShowcase[index + 1].image}
              alt=""
              loading="lazy"
              className="absolute right-0 top-0 -z-10 h-28 w-32 rounded-bl-[40px] object-cover opacity-30"
            />
            <p className="text-[10px] uppercase tracking-[0.2rem] text-[#776852]">Asoebi by Jay</p>
            <h3 className="mt-4 font-['Playfair_Display'] text-3xl text-[#294438]">{title}</h3>
            <p className="mt-4 text-base leading-7 text-[#68665f]">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
