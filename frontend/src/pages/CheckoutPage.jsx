import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useStore } from '../store/useStore'
import { fabricImages } from '../data/fabricImages'

export default function CheckoutPage() {
  const cart = useStore((state) => state.cart)
  const subtotal = useStore((state) => state.subtotal())
  const [step, setStep] = useState(1)

  if (cart.length === 0) {
    return <div className="mx-auto max-w-3xl px-4 py-16 text-center text-[#666666]">Your bag is empty. Add pieces before checkout.</div>
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4 text-sm uppercase tracking-[0.2rem] text-[#666666]">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= item ? 'bg-[#111111] text-white' : 'border border-[#eae2d6] bg-white text-[#111111]'}`}>
              {step > item ? <Check className="h-4 w-4" /> : item}
            </div>
            {item < 3 ? <span className="h-px w-12 bg-[#eae2d6]" /> : null}
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[32px] border border-[#eae2d6] bg-[#f8f3ed] p-8">
          {step === 1 ? (
            <div className="space-y-5">
              <h2 className="font-['Playfair_Display'] text-4xl text-[#111111]">Shipping details</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <input placeholder="First name" className="rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
                <input placeholder="Last name" className="rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
                <input placeholder="Email" className="md:col-span-2 rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
                <input placeholder="Address" className="md:col-span-2 rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
                <input placeholder="City" className="rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
                <input placeholder="Postcode" className="rounded-[20px] border border-[#e7e1d8] bg-white px-4 py-3 outline-none" />
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-5">
              <h2 className="font-['Playfair_Display'] text-4xl text-[#111111]">Delivery method</h2>
              <div className="space-y-4">
                {['Express delivery · $25', 'Standard delivery · Free', 'Pickup in store · Free'].map((item) => (
                  <label key={item} className="flex items-center justify-between rounded-[20px] border border-[#e7e1d8] bg-white px-5 py-4 text-[#111111]">
                    <span>{item}</span>
                    <input type="radio" name="delivery" defaultChecked={item.includes('Standard')} />
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <h2 className="font-['Playfair_Display'] text-4xl text-[#111111]">Payment</h2>
              <div className="space-y-4 rounded-[20px] border border-[#e7e1d8] bg-white p-5">
                <div className="flex items-center justify-between text-sm text-[#666666]">
                  <span>Card number</span>
                  <span>•••• 2456</span>
                </div>
                <div className="mt-4 flex gap-4">
                  <input placeholder="MM / YY" className="w-full rounded-[20px] border border-[#e7e1d8] bg-[#f8f3ed] px-4 py-3 outline-none" />
                  <input placeholder="CVC" className="w-full rounded-[20px] border border-[#e7e1d8] bg-[#f8f3ed] px-4 py-3 outline-none" />
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-end">
            <button type="button" onClick={() => setStep((current) => Math.min(current + 1, 3))} className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white">
              {step < 3 ? 'Continue' : 'Place order'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <aside className="relative isolate overflow-hidden rounded-[32px] border border-[#eae2d6] bg-[#f3efe9] p-6">
          <img src={fabricImages.foldedTextiles} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-[#f3efe9]/90" />
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Order summary</p>
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-[20px] bg-white p-3">
                <img src={item.images[0]} alt={item.name} className="h-20 w-16 rounded-[16px] object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#111111]">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#666666]">Qty {item.quantity}</p>
                </div>
                <span className="text-sm text-[#111111]">${item.salePrice * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-[#eae2d6] pt-5 text-[#111111]">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
            <div className="mt-3 flex items-center justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="mt-5 flex items-center justify-between text-xl font-medium"><span>Total</span><span>${subtotal}</span></div>
          </div>
        </aside>
      </div>
    </div>
  )
}
