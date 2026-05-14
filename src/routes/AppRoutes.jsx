import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Pricing from '../pages/Pricing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import OTPVerification from '../pages/OTPVerification'
import ProductDetails from '../pages/ProductDetails'
import Dashboard from '../pages/Dashboard'
import VendorDashboard from "../pages/VendorDashboard"
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes