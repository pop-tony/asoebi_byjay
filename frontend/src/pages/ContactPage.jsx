import { ArrowRight, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] bg-[#111111] p-8 text-white md:p-12">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Asoebi by Jay · Abuja</p>
          <h1 className="mt-5 font-['Playfair_Display'] text-5xl leading-none">Find us in Wuse 2.</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#d9d2c8]">
            Visit us for fabrics, asoebi, headties, veils, and accessories for your next special occasion.
          </p>

          <div className="mt-10 space-y-6 text-[#f5efe9]">
            <a
              href="https://maps.google.com/?q=19+Kampala+Street,+Wuse+2,+Abuja,+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4"
            >
              <MapPin className="h-5 w-5 shrink-0 text-[#c6a57b]" />
              <span>19 Kampala Street, Wuse 2, Abuja, Nigeria</span>
            </a>
            <a
              href="https://www.instagram.com/asoebi_byjay/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4"
            >
              <ArrowRight className="h-5 w-5 shrink-0 text-[#c6a57b]" />
              <span>@asoebi_byjay on Instagram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2347031008862"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4"
            >
              <Phone className="h-5 w-5 shrink-0 text-[#c6a57b]" />
              <span>WhatsApp: +234 703 100 8862</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[32px] border border-[#eae2d6] bg-[#f8f3ed] p-8 md:p-10">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Connect with us</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-4xl text-[#111111]">Let’s find your occasion fabric.</h2>
          <p className="mt-5 text-base leading-7 text-[#666666]">
            Browse our latest fabrics and updates on Instagram. For asoebi fabrics, bridal options, brocades, or accessories, send us a message there.
          </p>
          <a
            href="https://www.instagram.com/asoebi_byjay/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit rounded-full bg-[#111111] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white"
          >
            Message us on Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2347031008862"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-fit rounded-full border border-[#e2d7ca] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#111111]"
          >
            Chat on WhatsApp
          </a>
          <p className="mt-10 border-t border-[#eae2d6] pt-6 text-sm leading-7 text-[#666666]">
            For Asoebi fabric selections, visit our fabric partner{' '}
            <a
              href="https://www.instagram.com/antu_fabrics/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#111111] underline underline-offset-4"
            >
              @antu_fabrics
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
