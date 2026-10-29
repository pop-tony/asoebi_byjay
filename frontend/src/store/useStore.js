import { create } from 'zustand'
import { products } from '../data/products'

export const useStore = create((set, get) => ({
  cart: [],
  wishlist: [],
  query: '',
  category: 'All',
  maxPrice: 1200,
  sortBy: 'featured',
  drawerOpen: false,

  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setSortBy: (sortBy) => set({ sortBy }),
  toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        }
      }
      return { cart: [...state.cart, { ...product, quantity }] }
    })
  },

  updateCartQty: (id, quantity) => {
    set((state) => ({
      cart: state.cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    }))
  },

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  toggleWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.includes(id)
        ? state.wishlist.filter((item) => item !== id)
        : [...state.wishlist, id]
    })),

  getFilteredProducts: () => {
    const { query, category, maxPrice, sortBy } = get()
    const next = products.filter((product) => {
      const matchesQuery = !query || product.name.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = product.salePrice <= maxPrice
      return matchesQuery && matchesCategory && matchesPrice
    })

    const sorted = [...next]
    if (sortBy === 'price-low') {
      return sorted.sort((a, b) => a.salePrice - b.salePrice)
    }
    if (sortBy === 'price-high') {
      return sorted.sort((a, b) => b.salePrice - a.salePrice)
    }
    if (sortBy === 'newest') {
      return sorted.sort((a, b) => b.inventory - a.inventory)
    }
    return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  },

  cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
  subtotal: () =>
    get().cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0),
  featuredProducts: products.filter((product) => product.featured),
  newArrivals: products.slice(0, 4),
  productBySlug: (slug) => products.find((product) => product.slug === slug)
}))
