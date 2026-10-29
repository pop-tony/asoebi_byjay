export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-xl ${alignment}`}>
      <p className="mb-3 text-[11px] uppercase tracking-[0.28rem] text-[#666666]">{eyebrow}</p>
      <h2 className="font-['Playfair_Display'] text-4xl leading-none text-[#111111] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#666666]">{description}</p>
      ) : null}
    </div>
  )
}
