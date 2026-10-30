import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

const HomePage = lazy(() => import('./pages/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const FabricDetailPage = lazy(() => import('./pages/FabricDetailPage'))
const CollectionsPage = lazy(() => import('./pages/CollectionsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#f7f5f2] text-[#294438]">
        <Header />
        <main>
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/fabric/:slug" element={<FabricDetailPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </MotionConfig>
  )
}

export default App
