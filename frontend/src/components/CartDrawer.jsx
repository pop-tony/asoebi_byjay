import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function CartDrawer() {
  const { cart, drawerOpen, toggleDrawer, updateCartQty, removeFromCart, subtotal } = useStore()

  useEffect(() => {
    if (!drawerOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') toggleDrawer()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [drawerOpen, toggleDrawer])

  return (
    <AnimatePresence>
      {drawerOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close shopping bag"
            onClick={toggleDrawer}
            className="fixed inset-0 z-50 cursor-default bg-[#17251e]/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col border-l border-[#e8e0d5] bg-[#fbf9f5] shadow-[-20px_0_70px_rgba(27,38,31,0.18)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-[#e8e0d5] px-6 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24rem] text-[#77746d]">Your selection</p>
                <h2 id="cart-title" className="mt-2 font-['Playfair_Display'] text-3xl text-[#294438]">
                  Shopping bag <span className="font-sans text-sm text-[#77746d]">({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={toggleDrawer}
                className="rounded-full border border-[#e8e0d5] p-2 text-[#294438] transition hover:border-[#294438]"
                aria-label="Close shopping bag"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {cart.length === 0 ? (
                <div className="mt-10 rounded-[24px] border border-dashed border-[#d9d1c5] bg-white/70 p-7 text-center">
                  <p className="font-['Playfair_Display'] text-2xl text-[#294438]">Your bag is waiting.</p>
                  <p className="mt-2 text-sm leading-6 text-[#77746d]">Explore our fabrics and find something made for your next celebration.</p>
                  <Link
                    to="/shop"
                    onClick={toggleDrawer}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#294438] px-5 py-3 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-[#1d3329]"
                  >
                    Explore fabrics <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <article key={item.id} className="flex gap-4 rounded-[22px] border border-[#e8e0d5] bg-white p-3">
                    <img src={item.images[0]} alt={item.name} className="h-28 w-24 rounded-[16px] bg-[#eee8df] object-cover" />
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-[#294438]">{item.name}</p>
                          <p className="mt-1 text-sm text-[#77746d]">{item.category}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-[0.14em] text-[#77746d] transition hover:text-[#294438]"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-[#e8e0d5] bg-[#fbf9f5] px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, item.quantity - 1)}
                            className="p-1 text-[#294438]"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-5 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, item.quantity + 1)}
                            className="p-1 text-[#294438]"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-medium text-[#294438]">${item.salePrice * item.quantity}</p>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {cart.length > 0 ? (
              <div className="border-t border-[#e8e0d5] bg-[#f2eee7] p-6">
                <div className="mb-4 flex items-center justify-between text-[#294438]">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-['Playfair_Display'] text-2xl">${subtotal()}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={toggleDrawer}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#294438] px-5 py-3.5 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#1d3329]"
                >
                  Continue to checkout <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
