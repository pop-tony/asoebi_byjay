import { useMemo, useState } from 'react'
import { ArrowRight, Heart, Minus, Plus, ShieldCheck, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useStore } from '../store/useStore'
import { fabricShowcase } from '../data/fabricImages'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? 'S')
  const addToCart = useStore((state) => state.addToCart)
  const toggleWishlist = useStore((state) => state.toggleWishlist)
  const wishlist = useStore((state) => state.wishlist)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 3),
    [product]
  )

  if (!product) {
    return <div className="mx-auto max-w-7xl px-4 py-20 text-center text-[#666666]">Product not found.</div>
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[32px] border border-[#eae2d6] bg-[#f5f0ea]">
            <img src={product.gallery[selectedImage]} alt={product.name} className="h-[720px] w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.gallery.map((image, index) => (
              <button key={image} type="button" onClick={() => setSelectedImage(index)} className={`overflow-hidden rounded-[20px] border ${selectedImage === index ? 'border-[#111111]' : 'border-[#eae2d6]'}`}>
                <img src={image} alt={`${product.name} view ${index + 1}`} className="h-24 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-[11px] uppercase tracking-[0.28rem] text-[#666666]">{product.category}</p>
          <h1 className="mt-3 font-['Playfair_Display'] text-5xl leading-none text-[#111111]">{product.name}</h1>
          <div className="mt-5 flex items-center gap-3 text-[#111111]">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-[#111111]" />
              ))}
            </div>
            <span className="text-sm text-[#666666]">{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-medium text-[#111111]">${product.salePrice}</span>
            <span className="text-xl text-[#666666] line-through">${product.price}</span>
          </div>

          <p className="mt-6 text-lg leading-8 text-[#666666]">{product.description}</p>

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full border px-4 py-2 text-sm ${selectedSize === size ? 'border-[#111111] bg-[#111111] text-white' : 'border-[#eae2d6] bg-white text-[#111111]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => addToCart(product, 1)} className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">
              Add to bag <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => toggleWishlist(product.id)} className="inline-flex items-center gap-2 rounded-full border border-[#e7e1d8] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#111111]">
              <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-[#111111]' : ''}`} />
              Wishlist
            </button>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#eae2d6] bg-[#f8f3ed] p-5">
            <div className="flex items-center gap-3 text-[#111111]">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.18em]">Complimentary delivery</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[#666666]">Free express shipping over $250. Easy exchanges within 30 days.</p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-[#eae2d6] pt-8 md:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Materials</p>
              <p className="mt-2 text-base text-[#111111]">{product.material}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Fit</p>
              <p className="mt-2 text-base text-[#111111]">{product.fit}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Color</p>
              <p className="mt-2 text-base text-[#111111]">{product.colors.join(', ')}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Shipping</p>
              <p className="mt-2 text-base text-[#111111]">{product.shipping}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-[32px] border border-[#eae2d6] bg-[#f8f3ed] p-8 md:p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Description</p>
            <p className="mt-4 text-lg leading-8 text-[#111111]">{product.details}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Reviews</p>
            <div className="mt-4 rounded-[24px] bg-white p-5">
              <div className="flex items-center gap-2 text-[#111111]">
                <Star className="h-5 w-5 fill-[#111111]" />
                <span className="text-2xl font-medium">{product.rating}</span>
              </div>
              <p className="mt-4 text-base leading-7 text-[#666666]">“The silhouette is polished, soft, and beautifully made. It feels premium without trying too hard.”</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22rem] text-[#776852]">Asoebi by Jay · Abuja</p>
            <h2 className="mt-3 font-['Playfair_Display'] text-3xl text-[#294438]">A little more fabric inspiration.</h2>
          </div>
          <Link to="/collections" className="text-xs uppercase tracking-[0.16em] text-[#294438]">Explore collections</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {fabricShowcase.map((sample) => (
            <div key={sample.name} className="group relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#e8e0d5]">
              <img src={sample.image} alt={sample.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17251e]/55 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-white">{sample.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Related products</p>
          <Link to="/shop" className="text-sm uppercase tracking-[0.18em] text-[#111111]">Shop all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
