// src/components/VendorAnalytics.jsx
// Pixer — Charts & Analytics Component
// Place this file at: src/components/VendorAnalytics.jsx
// Used inside VendorDashboard.jsx

import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import '../styles/VendorAnalytics.css'

// ── Mock Data ────────────────────────────────────────────────
const revenueData = [
  { month: 'Jan', revenue: 420 },
  { month: 'Feb', revenue: 680 },
  { month: 'Mar', revenue: 540 },
  { month: 'Apr', revenue: 920 },
  { month: 'May', revenue: 760 },
  { month: 'Jun', revenue: 1100 },
  { month: 'Jul', revenue: 980 },
  { month: 'Aug', revenue: 1340 },
  { month: 'Sep', revenue: 1120 },
  { month: 'Oct', revenue: 1560 },
  { month: 'Nov', revenue: 1380 },
  { month: 'Dec', revenue: 1820 },
]

const salesData = [
  { month: 'Jan', sales: 12 },
  { month: 'Feb', sales: 22 },
  { month: 'Mar', sales: 18 },
  { month: 'Apr', sales: 30 },
  { month: 'May', sales: 25 },
  { month: 'Jun', sales: 38 },
  { month: 'Jul', sales: 32 },
  { month: 'Aug', sales: 45 },
  { month: 'Sep', sales: 36 },
  { month: 'Oct', sales: 52 },
  { month: 'Nov', sales: 44 },
  { month: 'Dec', sales: 60 },
]

const categoryData = [
  { name: 'Source Code', value: 35 },
  { name: 'UI Kit',      value: 25 },
  { name: 'Templates',   value: 18 },
  { name: 'Ebooks',      value: 12 },
  { name: 'Plugins',     value: 10 },
]

const PIE_COLORS = ['#4F46E5', '#06B6D4', '#F59E0B', '#10B981', '#EF4444']

const analyticsCards = [
  { label: 'This Month Revenue', value: '$1,820', change: '+18%',  up: true,  icon: '💰' },
  { label: 'This Month Sales',   value: '60',     change: '+36%',  up: true,  icon: '🛒' },
  { label: 'Avg. Order Value',   value: '$30.3',  change: '+5%',   up: true,  icon: '📈' },
  { label: 'Refund Rate',        value: '2.1%',   change: '-0.4%', up: false, icon: '↩️' },
]

// ── Component ────────────────────────────────────────────────
function VendorAnalytics() {
  return (
    <div className="va-wrap">
      <h3 className="tab-heading">Charts & Analytics</h3>

      {/* ── Analytics Cards ── */}
      <div className="va-cards-grid">
        {analyticsCards.map((c, i) => (
          <div className="va-card" key={i}>
            <div className="va-card-top">
              <span className="va-card-icon">{c.icon}</span>
              <span className={`va-card-change ${c.up ? 'change-up' : 'change-down'}`}>
                {c.up ? '▲' : '▼'} {c.change}
              </span>
            </div>
            <div className="va-card-value">{c.value}</div>
            <div className="va-card-label">{c.label}</div>
          </div>
        ))}
      </div>

      {/* ── Revenue Line Chart ── */}
      <div className="va-chart-card">
        <div className="va-chart-header">
          <h5>Monthly Revenue</h5>
          <span className="va-chart-sub">Jan – Dec 2025</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={revenueData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
            <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px' }}
              formatter={(value) => [`$${value}`, 'Revenue']}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ r: 4, fill: '#4F46E5' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ── Sales Bar Chart + Pie Chart ── */}
      <div className="va-charts-row">

        {/* Bar Chart */}
        <div className="va-chart-card">
          <div className="va-chart-header">
            <h5>Monthly Sales</h5>
            <span className="va-chart-sub">Units sold</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px' }}
                formatter={(value) => [value, 'Sales']}
              />
              <Bar dataKey="sales" fill="#06B6D4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="va-chart-card">
          <div className="va-chart-header">
            <h5>Sales by Category</h5>
            <span className="va-chart-sub">All time</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={4}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '13px' }}
                formatter={(value) => [`${value}%`, 'Share']}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default VendorAnalytics