import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getProducts = async () => api.get('/products')
export const getProductBySlug = async (slug) => api.get(`/products/${slug}`)
export const createOrder = async (payload) => api.post('/orders', payload)
export const subscribeToNewsletter = async (email) => api.post('/newsletter', { email })
