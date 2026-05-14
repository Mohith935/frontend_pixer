import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Products.css'

const allProducts = [
  { id: 1, title: 'React Admin Dashboard', category: 'Source Code', price: 29, rating: '4.9', sales: '1.2k', badge: 'Bestseller', img: 'https://picsum.photos/seed/dashboard1/400/200' },
  { id: 2, title: 'E-commerce UI Kit', category: 'UI Kit', price: 19, rating: '4.8', sales: '980', badge: 'New', img: 'https://picsum.photos/seed/uikit2/400/200' },
  { id: 3, title: 'Mobile App Template', category: 'Template', price: 39, rating: '4.7', sales: '750', badge: 'Hot', img: 'https://picsum.photos/seed/mobile3/400/200' },
  { id: 4, title: 'Logo Design Bundle', category: 'Graphics', price: 15, rating: '4.9', sales: '2.1k', badge: 'Bestseller', img: 'https://picsum.photos/seed/graphics4/400/200' },
  { id: 5, title: 'SEO Ebook Guide', category: 'Ebook', price: 9, rating: '4.6', sales: '500', badge: 'New', img: 'https://picsum.photos/seed/ebook5/400/200' },
  { id: 6, title: 'WordPress Plugin Pack', category: 'Plugin', price: 49, rating: '4.8', sales: '430', badge: 'Hot', img: 'https://picsum.photos/seed/plugin6/400/200' },
  { id: 7, title: 'Flutter UI Kit', category: 'UI Kit', price: 35, rating: '4.7', sales: '620', badge: 'New', img: 'https://picsum.photos/seed/flutter7/400/200' },
  { id: 8, title: 'Next.js Starter Kit', category: 'Source Code', price: 25, rating: '4.9', sales: '890', badge: 'Bestseller', img: 'https://picsum.photos/seed/nextjs8/400/200' },
  { id: 9, title: 'Social Media Pack', category: 'Graphics', price: 12, rating: '4.5', sales: '1.5k', badge: 'Hot', img: 'https://picsum.photos/seed/social9/400/200' },
  { id: 10, title: 'Vue.js Dashboard', category: 'Source Code', price: 32, rating: '4.7', sales: '670', badge: 'New', img: 'https://picsum.photos/seed/vue10/400/200' },
  { id: 11, title: 'Figma UI Components', category: 'UI Kit', price: 22, rating: '4.8', sales: '1.1k', badge: 'Bestseller', img: 'https://picsum.photos/seed/figma11/400/200' },
  { id: 12, title: 'Digital Marketing Ebook', category: 'Ebook', price: 14, rating: '4.5', sales: '340', badge: 'New', img: 'https://picsum.photos/seed/ebook12/400/200' },
]

const categories = ['All', 'Source Code', 'UI Kit', 'Template', 'Graphics', 'Ebook', 'Plugin']

function Products() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [wishlist, setWishlist] = useState([])

  const handleWishlist = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter(id => id !== product.id))
      toast.info(`Removed from wishlist!`)
    } else {
      setWishlist([...wishlist, product.id])
      toast.success(`Added to wishlist!`)
    }
  }

  const handleAddToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || []

  const alreadyExists = existingCart.find(item => item.id === product.id)

  if (alreadyExists) {
    toast.info('Product already in cart!')
    return
  }

  const updatedCart = [...existingCart, product]

  localStorage.setItem('cart', JSON.stringify(updatedCart))

  toast.success(`${product.title} added to cart!`)
}

  const filteredProducts = allProducts
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating)
      return 0
    })

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <h1>All Digital Products</h1>
          <p>Browse thousands of premium digital products from top vendors</p>
          <div className="products-search">
            <input
              type="text"
              placeholder="🔍  Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setActiveCategory('All')
              }}
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      <section className="products-page-section">
        <div className="container">
          <div className="products-layout">

            {/* Sidebar */}
            <div className="products-sidebar">
              <h5>Categories</h5>
              <ul className="filter-list">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className={activeCategory === cat ? 'active' : ''}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    <span className="cat-count">
                      {cat === 'All'
                        ? allProducts.length
                        : allProducts.filter(p => p.category === cat).length}
                    </span>
                  </li>
                ))}
              </ul>

              <h5 className="mt-4">Price Range</h5>
              <ul className="filter-list">
                <li className="active">All Prices</li>
                <li>Under $10</li>
                <li>$10 - $25</li>
                <li>$25 - $50</li>
                <li>Above $50</li>
              </ul>

              <h5 className="mt-4">Rating</h5>
              <ul className="filter-list">
                <li>⭐⭐⭐⭐⭐ 5 Stars</li>
                <li>⭐⭐⭐⭐ 4 Stars & up</li>
                <li>⭐⭐⭐ 3 Stars & up</li>
              </ul>
            </div>

            {/* Main */}
            <div className="products-main">
              <div className="products-toolbar">
                <p>{filteredProducts.length} products found
                  {activeCategory !== 'All' && <span className="active-filter"> in {activeCategory}</span>}
                  {searchQuery && <span className="active-filter"> for "{searchQuery}"</span>}
                </p>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="latest">Sort by: Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🔍</div>
                  <h4>No products found</h4>
                  <p>Try a different search or category</p>
                  <button
                    className="btn-filled"
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('All')
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="products-page-grid">
                  {filteredProducts.map((product) => (
                    <div
                      className="product-card"
                      key={product.id}
                      onClick={() => navigate(`/products/${product.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="product-thumbnail">
                        <img
                          src={product.img}
                          alt={product.title}
                          style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
                        />
                        <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                        <button
                          className={`wishlist-btn ${wishlist.includes(product.id) ? 'wishlisted' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleWishlist(product)
                          }}
                        >
                          {wishlist.includes(product.id) ? '❤️' : '🤍'}
                        </button>
                      </div>
                      <div className="product-info">
                        <span className="product-category">{product.category}</span>
                        <h5>{product.title}</h5>
                        <div className="product-meta">
                          <span>⭐ {product.rating}</span>
                          <span>🛒 {product.sales} sales</span>
                        </div>
                        <div className="product-footer">
                          <span className="product-price">${product.price}</span>
                          <button
                            className="btn-buy"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAddToCart(product)
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Products