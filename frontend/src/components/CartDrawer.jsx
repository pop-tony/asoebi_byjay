import { X, Minus, Plus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function CartDrawer() {
  const { cart, drawerOpen, toggleDrawer, updateCartQty, removeFromCart, subtotal } = useStore()

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform border-l border-[#eae2d6] bg-[#f7f5f2] shadow-[0_20px_60px_rgba(17,17,17,0.12)] transition duration-500 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-[#eae2d6] px-6 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24rem] text-[#666666]">Shopping bag</p>
            <h3 className="mt-2 font-['Playfair_Display'] text-3xl text-[#111111]">{cart.length} items</h3>
          </div>
          <button type="button" onClick={toggleDrawer} className="rounded-full border border-[#eae2d6] p-2">
            <X className="h-4 w-4 text-[#111111]" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="mt-10 rounded-[24px] border border-dashed border-[#d9d1c5] bg-white/40 p-6 text-center text-[#666666]">
              Your bag is empty. Start with the evening edit.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-[24px] border border-[#eae2d6] bg-white/60 p-3">
                <img src={item.images[0]} alt={item.name} className="h-28 w-24 rounded-[20px] object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-[#111111]">{item.name}</p>
                      <p className="mt-1 text-sm text-[#666666]">{item.category}</p>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.id)} className="text-xs uppercase tracking-[0.18em] text-[#666666]">
                      Remove
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-[#eae2d6] bg-white px-2 py-1">
                      <button type="button" onClick={() => updateCartQty(item.id, item.quantity - 1)} className="p-1">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                      <button type="button" onClick={() => updateCartQty(item.id, item.quantity + 1)} className="p-1">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-medium text-[#111111]">${item.salePrice * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#eae2d6] bg-[#f3efe9] p-6">
          <div className="mb-4 flex items-center justify-between text-[#111111]">
            <span>Subtotal</span>
            <span className="text-xl font-medium">${subtotal()}</span>
          </div>
          <Link
            to="/checkout"
            onClick={toggleDrawer}
            className="flex items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white"
          >
            Checkout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
