import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [cartCount] = useState(0)

  return (
    <nav className="navbar navbar-expand-lg pixer-navbar">
      <div className="container-fluid px-4">
        <Link className="navbar-brand pixer-brand" to="/">Pixer</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pixerNav"
          style={{ borderColor: '#ffffff50' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="pixerNav">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item"><Link className="nav-link pixer-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link pixer-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link pixer-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link pixer-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link pixer-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            <Link to="/cart" className="nav-cart">
              🛒
            </Link>
            <Link to="/dashboard"><button className="btn-dashboard">Dashboard</button></Link>
            <Link to="/vendor-dashboard"><button className="btn-vendor">Vendor</button></Link>
            <Link to="/login"><button className="btn-outline">Login</button></Link>
            <Link to="/register"><button className="btn-filled">Register</button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar