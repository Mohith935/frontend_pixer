// src/pages/VendorDashboard.jsx

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VendorAnalytics from '../components/VendorAnalytics'
import '../styles/VendorDashboard.css'

// ── Mock Data ────────────────────────────────────────────────
const vendor = {
  name: 'Creative Studio',
  email: 'studio@example.com',
  avatar: 'https://i.pravatar.cc/150?img=33',
  store: 'creativestudio',
  joined: 'March 2023',
  verified: true,
  rating: '4.9',
  totalSales: '1.2k',
}

const stats = [
  { label: 'Total Products', value: '34', icon: '📦', color: 'indigo' },
  { label: 'Total Sales', value: '1,240', icon: '🛒', color: 'cyan' },
  { label: 'Total Revenue', value: '$8,430', icon: '💰', color: 'green' },
  { label: 'Pending Orders', value: '7', icon: '⏳', color: 'amber' },
]

const myProducts = [
  {
    id: 1,
    name: 'React Admin Dashboard',
    category: 'Source Code',
    price: '$29',
    sales: 320,
    status: 'Active',
    img: 'https://picsum.photos/seed/dash1/60/60',
  },
  {
    id: 2,
    name: 'Figma UI Components',
    category: 'UI Kit',
    price: '$22',
    sales: 210,
    status: 'Active',
    img: 'https://picsum.photos/seed/figma11/60/60',
  },
  {
    id: 3,
    name: 'SEO Ebook Guide',
    category: 'Ebook',
    price: '$9',
    sales: 180,
    status: 'Active',
    img: 'https://picsum.photos/seed/ebook5/60/60',
  },
]

const recentOrders = [
  {
    id: '#PX-2041',
    buyer: 'Alex Johnson',
    product: 'React Admin Dashboard',
    date: 'May 12, 2025',
    amount: '$29',
    status: 'Completed',
  },
  {
    id: '#PX-2038',
    buyer: 'Sara Lee',
    product: 'Figma UI Components',
    date: 'May 11, 2025',
    amount: '$22',
    status: 'Completed',
  },
  {
    id: '#PX-2035',
    buyer: 'Ravi Kumar',
    product: 'Flutter UI Kit',
    date: 'May 10, 2025',
    amount: '$35',
    status: 'Pending',
  },
]

const tabs = [
  'Overview',
  'My Products',
  'Orders',
  'Upload Product',
  'Analytics',
  'Settings',
]

// ── Upload Form Initial State ────────────────────────────────
const emptyForm = {
  title: '',
  category: '',
  price: '',
  description: '',
  tags: '',
  file: null,
}

function VendorDashboard() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [products, setProducts] = useState(myProducts)
  const [form, setForm] = useState(emptyForm)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [vendorName, setVendorName] = useState(vendor.name)
  const [vendorEmail, setVendorEmail] = useState(vendor.email)

  const statusClass = (s) => {
    if (s === 'Completed') return 'status-completed'
    if (s === 'Pending') return 'status-pending'
    if (s === 'Refunded') return 'status-refunded'
    return ''
  }

  const handleToggleStatus = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === 'Active' ? 'Inactive' : 'Active',
            }
          : p
      )
    )
  }

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleUpload = () => {
    if (!form.title || !form.category || !form.price) return

    const newProduct = {
      id: products.length + 1,
      name: form.title,
      category: form.category,
      price: `$${form.price}`,
      sales: 0,
      status: 'Active',
      img: `https://picsum.photos/seed/${form.title}/60/60`,
    }

    setProducts([newProduct, ...products])
    setForm(emptyForm)
    setUploadSuccess(true)

    setTimeout(() => {
      setUploadSuccess(false)
    }, 3000)

    setActiveTab('My Products')
  }

  return (
    <>
      <Navbar />

      {/* ── Vendor Hero ── */}
      <section className="vd-hero">
        <div className="container">
          <div className="vd-hero-inner">

            <div className="vd-avatar-wrap">
              <img
                src={vendor.avatar}
                alt="vendor"
                className="vd-avatar"
              />

              {vendor.verified && (
                <span className="vd-verified">
                  ✓
                </span>
              )}
            </div>

            <div className="vd-hero-info">
              <div className="vd-store-tag">
                🏪 Vendor Store
              </div>

              <h2>{vendor.name}</h2>

              <p>
                @{vendor.store} · ⭐ {vendor.rating} rating · 🛒{' '}
                {vendor.totalSales} total sales
              </p>
            </div>

            <button
              className="btn-outline-vd"
              onClick={() => setActiveTab('Upload Product')}
            >
              + Upload Product
            </button>

          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="vd-section">
        <div className="container">

          <div className="vd-layout">

            {/* ── Sidebar ── */}
            <aside className="vd-sidebar">

              <ul className="vd-nav">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="vd-nav-icon">
                      {tab === 'Overview' && '🏠'}
                      {tab === 'My Products' && '📦'}
                      {tab === 'Orders' && '🛒'}
                      {tab === 'Upload Product' && '⬆️'}
                      {tab === 'Analytics' && '📊'}
                      {tab === 'Settings' && '⚙️'}
                    </span>

                    {tab}
                  </li>
                ))}
              </ul>

              <button className="btn-logout-vd">
                🚪 Logout
              </button>

            </aside>

            {/* ── Content ── */}
            <main className="vd-content">

              {/* ===== OVERVIEW ===== */}
              {activeTab === 'Overview' && (
                <div className="vd-tab-content">

                  <h3 className="tab-heading">
                    Vendor Overview
                  </h3>

                  <div className="vd-stats-grid">
                    {stats.map((s, i) => (
                      <div
                        key={i}
                        className={`vd-stat-card vd-stat-${s.color}`}
                      >
                        <div className="vd-stat-icon">
                          {s.icon}
                        </div>

                        <div>
                          <div className="vd-stat-value">
                            {s.value}
                          </div>

                          <div className="vd-stat-label">
                            {s.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ===== MY PRODUCTS ===== */}
              {activeTab === 'My Products' && (
                <div className="vd-tab-content">

                  <h3 className="tab-heading">
                    My Products
                  </h3>

                  <div className="vd-products-list">
                    {products.map((p) => (
                      <div className="vd-product-row" key={p.id}>

                        <img
                          src={p.img}
                          alt={p.name}
                          className="vd-product-thumb"
                        />

                        <div className="vd-product-info">
                          <div className="vd-product-name">
                            {p.name}
                          </div>

                          <div className="vd-product-meta">
                            {p.category} · {p.sales} sales
                          </div>
                        </div>

                        <div className="vd-product-price">
                          {p.price}
                        </div>

                        <span
                          className={`product-status ${
                            p.status === 'Active'
                              ? 'ps-active'
                              : 'ps-inactive'
                          }`}
                        >
                          {p.status}
                        </span>

                        <div className="vd-product-actions">

                          <button
                            className="btn-toggle"
                            onClick={() => handleToggleStatus(p.id)}
                          >
                            Toggle
                          </button>

                          <button
                            className="btn-delete"
                            onClick={() => handleDelete(p.id)}
                          >
                            🗑
                          </button>

                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ===== ORDERS ===== */}
              {activeTab === 'Orders' && (
                <div className="vd-tab-content">

                  <h3 className="tab-heading">
                    Orders
                  </h3>

                  <div className="vd-table-wrap">

                    <table className="vd-table">

                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Buyer</th>
                          <th>Product</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentOrders.map((o, i) => (
                          <tr key={i}>
                            <td>{o.id}</td>
                            <td>{o.buyer}</td>
                            <td>{o.product}</td>
                            <td>
                              <span
                                className={`status-badge ${statusClass(
                                  o.status
                                )}`}
                              >
                                {o.status}
                              </span>
                            </td>
                            <td>{o.amount}</td>
                          </tr>
                        ))}
                      </tbody>

                    </table>

                  </div>

                </div>
              )}

              {/* ===== ANALYTICS ===== */}
              {activeTab === 'Analytics' && (
                <div className="vd-tab-content">
                  <VendorAnalytics />
                </div>
              )}

              {/* ===== UPLOAD PRODUCT ===== */}
              {activeTab === 'Upload Product' && (
                <div className="vd-tab-content">

                  <h3 className="tab-heading">
                    Upload Product
                  </h3>

                  <div className="upload-form">

                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={handleFormChange}
                      placeholder="Product title"
                    />

                    <input
                      type="text"
                      name="category"
                      value={form.category}
                      onChange={handleFormChange}
                      placeholder="Category"
                    />

                    <input
                      type="number"
                      name="price"
                      value={form.price}
                      onChange={handleFormChange}
                      placeholder="Price"
                    />

                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleFormChange}
                      placeholder="Description"
                    />

                    <button
                      className="btn-filled-sm"
                      onClick={handleUpload}
                    >
                      Publish Product
                    </button>

                  </div>

                </div>
              )}

              {/* ===== SETTINGS ===== */}
              {activeTab === 'Settings' && (
                <div className="vd-tab-content">

                  <h3 className="tab-heading">
                    Settings
                  </h3>

                  <div className="settings-card">

                    <div className="form-row">
                      <label>Store Name</label>

                      <input
                        type="text"
                        value={vendorName}
                        disabled={!editMode}
                        onChange={(e) =>
                          setVendorName(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-row">
                      <label>Email</label>

                      <input
                        type="email"
                        value={vendorEmail}
                        disabled={!editMode}
                        onChange={(e) =>
                          setVendorEmail(e.target.value)
                        }
                      />
                    </div>

                    <div className="form-actions">

                      {editMode ? (
                        <button
                          className="btn-filled-sm"
                          onClick={() => setEditMode(false)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn-outline-sm"
                          onClick={() => setEditMode(true)}
                        >
                          Edit Profile
                        </button>
                      )}

                    </div>

                  </div>

                </div>
              )}

            </main>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default VendorDashboard