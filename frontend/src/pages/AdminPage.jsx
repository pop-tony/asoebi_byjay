const stats = [
  { label: 'Revenue', value: '$248k', change: '+12.8%' },
  { label: 'Orders', value: '1,482', change: '+9.1%' },
  { label: 'Customers', value: '18.6k', change: '+6.4%' },
  { label: 'Inventory', value: '94%', change: '-1.2%' },
];

const products = [
  { name: 'Atelier Silk Dress', stock: 14, price: '$980' },
  { name: 'Marlow Trouser', stock: 23, price: '$560' },
  { name: 'Noor Knit Set', stock: 16, price: '$520' },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Admin</p>
          <h1 className="mt-3 font-['Playfair_Display'] text-5xl text-[#111111]">Studio dashboard</h1>
        </div>
        <button type="button" className="rounded-full bg-[#111111] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white">Add product</button>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[28px] border border-[#eae2d6] bg-[#f8f3ed] p-5">
            <p className="text-sm text-[#666666]">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="font-['Playfair_Display'] text-3xl text-[#111111]">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-[#3F7D58]">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-[#eae2d6] bg-white p-6">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#666666]">Products</p>
          <div className="mt-5 space-y-4">
            {products.map((product) => (
              <div key={product.name} className="flex items-center justify-between rounded-[20px] border border-[#eae2d6] bg-[#f7f5f2] p-4">
                <div>
                  <p className="font-medium text-[#111111]">{product.name}</p>
                  <p className="mt-1 text-sm text-[#666666]">Stock: {product.stock}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#111111]">{product.price}</p>
                  <button type="button" className="mt-2 text-xs uppercase tracking-[0.18em] text-[#111111]">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#eae2d6] bg-[#111111] p-6 text-white">
          <p className="text-[10px] uppercase tracking-[0.22rem] text-[#d4c3aa]">Orders</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-[20px] bg-white/5 p-4">
              <p className="text-sm text-[#d9d2c8]">Awaiting shipment</p>
              <p className="mt-2 font-['Playfair_Display'] text-3xl">26</p>
            </div>
            <div className="rounded-[20px] bg-white/5 p-4">
              <p className="text-sm text-[#d9d2c8]">Returned</p>
              <p className="mt-2 font-['Playfair_Display'] text-3xl">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
