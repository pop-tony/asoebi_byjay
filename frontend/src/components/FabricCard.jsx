import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FabricCard({ fabric }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[26px] border border-[#e8e0d5] bg-white shadow-[0_12px_35px_rgba(54,48,38,0.06)]"
    >
      <Link to={`/fabric/${fabric.slug}`} className="block">
        <div className="relative overflow-hidden bg-[#e8e0d5]">
          <img
            src={fabric.image}
            alt={fabric.name}
            loading="lazy"
            className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.035] md:h-[340px]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#fbf9f5]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#294438] backdrop-blur">
            {fabric.category}
          </span>
        </div>
        <div className="p-5">
          <h2 className="font-['Playfair_Display'] text-2xl text-[#294438]">{fabric.name}</h2>
          <p className="mt-2 text-sm leading-6 text-[#68665f]">{fabric.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#776852] transition group-hover:text-[#294438]">
            View fabric <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
