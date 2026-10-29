import SectionTitle from '../components/SectionTitle'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionTitle
        eyebrow="Asoebi by Jay · Abuja"
        title="Exclusive & exquisite fabrics"
        description="Find fabrics and finishing touches for asoebi, bridal celebrations, and special occasions."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <img src="/asoebi-by-jay-logo.jpg" alt="Asoebi by Jay logo" className="h-[420px] w-full rounded-[32px] bg-black object-contain p-8" />
        <div className="flex flex-col justify-center rounded-[32px] bg-[#f3efe9] p-8">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Our collection</p>
          <p className="mt-5 text-lg leading-8 text-[#111111]">
            Discover premium fabrics for bridal looks, asoebi celebrations, and brocade styles, alongside headties, veils, and accessories to complete your occasion look.
          </p>
          <a
            href="https://www.instagram.com/asoebi_byjay/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit rounded-full bg-[#111111] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white"
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
        ].map(([title, copy]) => (
          <div key={title} className="rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-6">
            <p className="text-[10px] uppercase tracking-[0.2rem] text-[#666666]">Asoebi by Jay</p>
            <h3 className="mt-4 font-['Playfair_Display'] text-3xl text-[#111111]">{title}</h3>
            <p className="mt-4 text-base leading-7 text-[#666666]">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
