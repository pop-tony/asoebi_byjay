import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'
import { useStore } from '../store/useStore'

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const inWishlist = wishlist.includes(product.id)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[28px] border border-[#eee7df] bg-[#f8f4ef]"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 backdrop-blur-sm transition hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart className={`h-4 w-4 ${inWishlist ? 'fill-[#111111] text-[#111111]' : 'text-[#111111]'}`} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2rem] text-[#666666]">{product.category}</p>
            <Link to={`/product/${product.slug}`} className="mt-2 block font-['Playfair_Display'] text-2xl text-[#111111]">
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium text-[#111111]">${product.salePrice}</p>
            {product.salePrice < product.price ? (
              <p className="text-sm text-[#666666] line-through">${product.price}</p>
            ) : null}
          </div>
        </div>

        <p className="text-sm leading-6 text-[#666666]">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-[#111111]">
            <span>★</span>
            <span>{product.rating}</span>
            <span className="text-[#666666]">({product.reviews})</span>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2a2a2a]"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to bag
          </button>
        </div>
      </div>
    </motion.article>
  )
}
