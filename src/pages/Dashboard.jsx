import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Dashboard.css'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

// ── Mock Data ────────────────────────────────────────────────
const user = {
  name: 'Your Name',
  email: 'your.email@example.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
  joined: 'January 2024',
  verified: true,
}

const stats = [
  { label: 'Total Orders',    value: '24',    icon: '🛒', color: 'indigo' },
  { label: 'Wishlist Items',  value: '12',    icon: '❤️', color: 'cyan'   },
  { label: 'Downloads',       value: '38',    icon: '⬇️', color: 'amber'  },
  { label: 'Total Spent',     value: '$486',  icon: '💳', color: 'green'  },
]

const recentOrders = [
  { id: '#PX-1042', product: 'React Admin Dashboard', category: 'Source Code', date: 'May 10, 2025', status: 'Completed', amount: '$29' },
  { id: '#PX-1038', product: 'Figma UI Components',   category: 'UI Kit',      date: 'May 5, 2025',  status: 'Completed', amount: '$22' },
  { id: '#PX-1031', product: 'WordPress Plugin Pack', category: 'Plugin',      date: 'Apr 28, 2025', status: 'Pending',   amount: '$49' },
  { id: '#PX-1020', product: 'SEO Ebook Guide',       category: 'Ebook',       date: 'Apr 20, 2025', status: 'Completed', amount: '$9'  },
  { id: '#PX-1015', product: 'Mobile App Template',   category: 'Template',    date: 'Apr 14, 2025', status: 'Refunded',  amount: '$39' },
]

const downloads = [
  { name: 'React Admin Dashboard', version: 'v2.1',  size: '4.2 MB', date: 'May 10, 2025', img: 'https://picsum.photos/seed/dash1/60/60' },
  { name: 'Figma UI Components',   version: 'v1.4',  size: '18 MB',  date: 'May 5, 2025',  img: 'https://picsum.photos/seed/figma11/60/60' },
  { name: 'SEO Ebook Guide',       version: 'v3.0',  size: '2.1 MB', date: 'Apr 20, 2025', img: 'https://picsum.photos/seed/ebook5/60/60' },
]

const wishlistItems = [
  { id: 1, name: 'Next.js Starter Kit',    price: '$25', rating: '4.9', img: 'https://picsum.photos/seed/nextjs8/80/80' },
  { id: 2, name: 'Flutter UI Kit',         price: '$35', rating: '4.7', img: 'https://picsum.photos/seed/flutter7/80/80' },
  { id: 3, name: 'Vue.js Dashboard',       price: '$32', rating: '4.7', img: 'https://picsum.photos/seed/vue10/80/80' },
]

const monthlySpending = [
  { month: 'Jan', spending: 29 },
  { month: 'Feb', spending: 48 },
  { month: 'Mar', spending: 19 },
  { month: 'Apr', spending: 89 },
  { month: 'May', spending: 35 },
  { month: 'Jun', spending: 67 },
  { month: 'Jul', spending: 25 },
  { month: 'Aug', spending: 94 },
  { month: 'Sep', spending: 55 },
  { month: 'Oct', spending: 78 },
  { month: 'Nov', spending: 49 },
  { month: 'Dec', spending: 120 },
]

const downloadData = [
  { month: 'Jan', downloads: 2 },
  { month: 'Feb', downloads: 4 },
  { month: 'Mar', downloads: 1 },
  { month: 'Apr', downloads: 6 },
  { month: 'May', downloads: 3 },
  { month: 'Jun', downloads: 5 },
  { month: 'Jul', downloads: 2 },
  { month: 'Aug', downloads: 7 },
  { month: 'Sep', downloads: 4 },
  { month: 'Oct', downloads: 6 },
  { month: 'Nov', downloads: 3 },
  { month: 'Dec', downloads: 9 },
]

const categorySpending = [
  { name: 'Source Code', value: 86 },
  { name: 'UI Kit', value: 41 },
  { name: 'Templates', value: 39 },
  { name: 'Graphics', value: 27 },
  { name: 'Ebooks', value: 23 },
]

const COLORS = ['#4F46E5', '#06B6D4', '#F59E0B', '#22C55E', '#EF4444']

const tabs = ['Overview', 'My Orders', 'Downloads', 'Wishlist', 'Analytics', 'Settings']

// ── Component ────────────────────────────────────────────────
function Dashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Overview')
  const [editMode, setEditMode] = useState(false)
  const [profileName, setProfileName] = useState(user.name)
  const [profileEmail, setProfileEmail] = useState(user.email)

  const statusClass = (s) => {
    if (s === 'Completed') return 'status-completed'
    if (s === 'Pending')   return 'status-pending'
    if (s === 'Refunded')  return 'status-refunded'
    return ''
  }

  return (
    <>
      <Navbar />

      {/* ── Dashboard Hero ── */}
      <section className="dash-hero">
        <div className="container">
          <div className="dash-hero-inner">
            <div className="dash-avatar-wrap">
              <img src={user.avatar} alt="avatar" className="dash-avatar" />
              {user.verified && <span className="dash-verified" title="Verified">✓</span>}
            </div>
            <div className="dash-hero-info">
              <h2>{user.name}</h2>
              <p>{user.email} · Member since {user.joined}</p>
            </div>
            <button className="btn-outline-dash" onClick={() => { setActiveTab('Settings'); setEditMode(true) }}>
              ✏️ Edit Profile
            </button>
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="dash-section">
        <div className="container">
          <div className="dash-layout">

            {/* ── Sidebar ── */}
            <aside className="dash-sidebar">
              <ul className="dash-nav">
                {tabs.map(tab => (
                  <li
                    key={tab}
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="dash-nav-icon">
                      {tab === 'Overview'  && '🏠'}
                      {tab === 'My Orders' && '🛒'}
                      {tab === 'Downloads' && '⬇️'}
                      {tab === 'Wishlist'  && '❤️'}
                      {tab === 'Analytics' && '📊'}
                      {tab === 'Settings'  && '⚙️'}
                    </span>
                    {tab}
                  </li>
                ))}
              </ul>
              <button className="btn-logout">🚪 Logout</button>
            </aside>

            {/* ── Content ── */}
            <main className="dash-content">

              {/* ===== OVERVIEW ===== */}
              {activeTab === 'Overview' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">Overview</h3>

                  <div className="stats-grid">
                    {stats.map((s, i) => (
                      <div className={`stat-card stat-${s.color}`} key={i}>
                        <div className="stat-icon">{s.icon}</div>
                        <div>
                          <div className="stat-value">{s.value}</div>
                          <div className="stat-label">{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="section-sub-heading">Recent Orders</h4>
                  <div className="orders-table-wrap">
                    <table className="orders-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.slice(0, 3).map((o, i) => (
                          <tr key={i}>
                            <td className="order-id">{o.id}</td>
                            <td>
                              <div className="order-product">{o.product}</div>
                              <div className="order-category">{o.category}</div>
                            </td>
                            <td>{o.date}</td>
                            <td><span className={`status-badge ${statusClass(o.status)}`}>{o.status}</span></td>
                            <td className="order-amount">{o.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button className="btn-text-link" onClick={() => setActiveTab('My Orders')}>
                    View all orders →
                  </button>
                </div>
              )}

              {/* ===== MY ORDERS ===== */}
              {activeTab === 'My Orders' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">My Orders</h3>
                  <div className="orders-table-wrap">
                    <table className="orders-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Product</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Amount</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((o, i) => (
                          <tr key={i}>
                            <td className="order-id">{o.id}</td>
                            <td>
                              <div className="order-product">{o.product}</div>
                              <div className="order-category">{o.category}</div>
                            </td>
                            <td>{o.date}</td>
                            <td><span className={`status-badge ${statusClass(o.status)}`}>{o.status}</span></td>
                            <td className="order-amount">{o.amount}</td>
                            <td>
                              {o.status === 'Completed' && (
                                <button className="btn-action">⬇ Download</button>
                              )}
                              {o.status === 'Pending' && (
                                <button className="btn-action btn-cancel">✕ Cancel</button>
                              )}
                              {o.status === 'Refunded' && (
                                <span className="refund-label">Refunded</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ===== DOWNLOADS ===== */}
              {activeTab === 'Downloads' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">My Downloads</h3>
                  <div className="downloads-list">
                    {downloads.map((d, i) => (
                      <div className="download-item" key={i}>
                        <img src={d.img} alt={d.name} className="download-thumb" />
                        <div className="download-info">
                          <div className="download-name">{d.name}</div>
                          <div className="download-meta">{d.version} · {d.size} · {d.date}</div>
                        </div>
                        <button className="btn-download">⬇ Download</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== WISHLIST ===== */}
              {activeTab === 'Wishlist' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">My Wishlist</h3>
                  <div className="wishlist-grid">
                    {wishlistItems.map((w) => (
                      <div className="wishlist-card" key={w.id}>
                        <img src={w.img} alt={w.name} className="wishlist-img" />
                        <div className="wishlist-info">
                          <div className="wishlist-name">{w.name}</div>
                          <div className="wishlist-rating">⭐ {w.rating}</div>
                          <div className="wishlist-price">{w.price}</div>
                        </div>
                        <div className="wishlist-actions">
                          <button
                            className="btn-filled-sm"
                            onClick={() => navigate('/products')}
                          >
                            Buy Now
                          </button>
                          <button className="btn-remove">🗑</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== ANALYTICS ===== */}
              {activeTab === 'Analytics' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">My Analytics</h3>

                  <div className="stats-grid">
                    <div className="stat-card stat-indigo">
                      <div className="stat-icon">💰</div>
                      <div>
                        <div className="stat-value">$708</div>
                        <div className="stat-label">Total Spent</div>
                      </div>
                    </div>
                    <div className="stat-card stat-cyan">
                      <div className="stat-icon">📦</div>
                      <div>
                        <div className="stat-value">24</div>
                        <div className="stat-label">Total Orders</div>
                      </div>
                    </div>
                    <div className="stat-card stat-amber">
                      <div className="stat-icon">⬇️</div>
                      <div>
                        <div className="stat-value">52</div>
                        <div className="stat-label">Total Downloads</div>
                      </div>
                    </div>
                    <div className="stat-card stat-green">
                      <div className="stat-icon">❤️</div>
                      <div>
                        <div className="stat-value">18</div>
                        <div className="stat-label">Wishlist Items</div>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-chart-card">
                    <div className="analytics-chart-header">
                      <h4>Monthly Spending</h4>
                      <span>Jan – Dec 2025</span>
                    </div>
                    <ResponsiveContainer width="100%" height={280}>
                      <LineChart data={monthlySpending}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(value) => [`$${value}`, 'Spending']} />
                        <Line
                          type="monotone"
                          dataKey="spending"
                          stroke="#4F46E5"
                          strokeWidth={2.5}
                          dot={{ fill: '#4F46E5', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="analytics-charts-row">
                    <div className="analytics-chart-card">
                      <div className="analytics-chart-header">
                        <h4>Monthly Downloads</h4>
                        <span>Units downloaded</span>
                      </div>
                      <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={downloadData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                          <YAxis tick={{ fontSize: 11 }} />
                          <Tooltip />
                          <Bar dataKey="downloads" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="analytics-chart-card">
                      <div className="analytics-chart-header">
                        <h4>Spending by Category</h4>
                        <span>All time</span>
                      </div>
                      <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                          <Pie
                            data={categorySpending}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={85}
                            dataKey="value"
                          >
                            {categorySpending.map((entry, index) => (
                              <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`$${value}`, 'Spent']} />
                          <Legend
                            iconType="circle"
                            iconSize={8}
                            formatter={(value) => (
                              <span style={{ fontSize: '11px', color: '#64748B' }}>{value}</span>
                            )}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="analytics-chart-card">
                    <div className="analytics-chart-header">
                      <h4>Recent Orders</h4>
                      <button
                        className="btn-text-link"
                        onClick={() => setActiveTab('My Orders')}
                      >
                        View All →
                      </button>
                    </div>
                    <div className="orders-table-wrap">
                      <table className="orders-table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order, index) => (
                            <tr key={index}>
                              <td className="order-id">{order.id}</td>
                              <td>{order.product}</td>
                              <td>{order.date}</td>
                              <td className="order-amount">{order.amount}</td>
                              <td>
                                <span className={`status-badge ${statusClass(order.status)}`}>
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* ===== SETTINGS ===== */}
              {activeTab === 'Settings' && (
                <div className="dash-tab-content">
                  <h3 className="tab-heading">Account Settings</h3>

                  <div className="settings-card">
                    <h5>Profile Information</h5>
                    <div className="settings-form">
                      <div className="form-row">
                        <label>Full Name</label>
                        <input
                          type="text"
                          value={profileName}
                          disabled={!editMode}
                          onChange={(e) => setProfileName(e.target.value)}
                          className={editMode ? 'input-active' : ''}
                        />
                      </div>
                      <div className="form-row">
                        <label>Email Address</label>
                        <input
                          type="email"
                          value={profileEmail}
                          disabled={!editMode}
                          onChange={(e) => setProfileEmail(e.target.value)}
                          className={editMode ? 'input-active' : ''}
                        />
                      </div>
                      <div className="form-row">
                        <label>Member Since</label>
                        <input type="text" value={user.joined} disabled />
                      </div>
                      <div className="form-actions">
                        {editMode ? (
                          <>
                            <button className="btn-filled-sm" onClick={() => setEditMode(false)}>
                              💾 Save Changes
                            </button>
                            <button className="btn-outline-sm" onClick={() => setEditMode(false)}>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button className="btn-outline-sm" onClick={() => setEditMode(true)}>
                            ✏️ Edit Profile
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="settings-card mt-4">
                    <h5>Change Password</h5>
                    <div className="settings-form">
                      <div className="form-row">
                        <label>Current Password</label>
                        <input type="password" placeholder="••••••••" />
                      </div>
                      <div className="form-row">
                        <label>New Password</label>
                        <input type="password" placeholder="••••••••" />
                      </div>
                      <div className="form-row">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="••••••••" />
                      </div>
                      <div className="form-actions">
                        <button className="btn-filled-sm">🔒 Update Password</button>
                      </div>
                    </div>
                  </div>

                  <div className="settings-card danger-zone mt-4">
                    <h5>Danger Zone</h5>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="btn-danger">🗑 Delete Account</button>
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

export default Dashboard