import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/ProductDetails.css'

const allProducts = [
  { id: 1, title: 'React Admin Dashboard', category: 'Source Code', price: 29, rating: '4.9', sales: '1.2k', badge: 'Bestseller', img: 'https://picsum.photos/seed/dashboard1/400/200', vendor: 'CodeMaster', description: 'A fully responsive React admin dashboard with charts, tables, and analytics. Built with React, Bootstrap 5, and Recharts.', tags: ['React', 'Dashboard', 'Admin', 'Bootstrap'], reviews: 128 },
  { id: 2, title: 'E-commerce UI Kit', category: 'UI Kit', price: 19, rating: '4.8', sales: '980', badge: 'New', img: 'https://picsum.photos/seed/uikit2/400/200', vendor: 'DesignPro', description: 'Complete e-commerce UI kit with 50+ components. Includes product cards, cart, checkout, and dashboard screens.', tags: ['UI Kit', 'Figma', 'E-commerce'], reviews: 86 },
  { id: 3, title: 'Mobile App Template', category: 'Template', price: 39, rating: '4.7', sales: '750', badge: 'Hot', img: 'https://picsum.photos/seed/mobile3/400/200', vendor: 'AppStudio', description: 'Beautiful mobile app template for iOS and Android. Includes 30+ screens with smooth animations.', tags: ['Mobile', 'Flutter', 'iOS', 'Android'], reviews: 64 },
  { id: 4, title: 'Logo Design Bundle', category: 'Graphics', price: 15, rating: '4.9', sales: '2.1k', badge: 'Bestseller', img: 'https://picsum.photos/seed/graphics4/400/200', vendor: 'PixelArt', description: 'Professional logo design bundle with 100+ vector logos. Fully editable in Adobe Illustrator and Figma.', tags: ['Logo', 'Vector', 'Branding'], reviews: 215 },
  { id: 5, title: 'SEO Ebook Guide', category: 'Ebook', price: 9, rating: '4.6', sales: '500', badge: 'New', img: 'https://picsum.photos/seed/ebook5/400/200', vendor: 'SEOGuru', description: 'Complete SEO guide with 200+ pages covering on-page, off-page, technical SEO, and link building strategies.', tags: ['SEO', 'Marketing', 'Guide'], reviews: 42 },
  { id: 6, title: 'WordPress Plugin Pack', category: 'Plugin', price: 49, rating: '4.8', sales: '430', badge: 'Hot', img: 'https://picsum.photos/seed/plugin6/400/200', vendor: 'WPExperts', description: 'Premium WordPress plugin pack with 10 powerful plugins for performance, SEO, and security.', tags: ['WordPress', 'Plugin', 'PHP'], reviews: 38 },
  { id: 7, title: 'Flutter UI Kit', category: 'UI Kit', price: 35, rating: '4.7', sales: '620', badge: 'New', img: 'https://picsum.photos/seed/flutter7/400/200', vendor: 'FlutterDev', description: 'Modern Flutter UI kit with 60+ screens. Supports both iOS and Android with clean code architecture.', tags: ['Flutter', 'Dart', 'Mobile'], reviews: 54 },
  { id: 8, title: 'Next.js Starter Kit', category: 'Source Code', price: 25, rating: '4.9', sales: '890', badge: 'Bestseller', img: 'https://picsum.photos/seed/nextjs8/400/200', vendor: 'NextPro', description: 'Production-ready Next.js starter kit with authentication, API routes, and Tailwind CSS styling.', tags: ['Next.js', 'React', 'Tailwind'], reviews: 97 },
  { id: 9, title: 'Social Media Pack', category: 'Graphics', price: 12, rating: '4.5', sales: '1.5k', badge: 'Hot', img: 'https://picsum.photos/seed/social9/400/200', vendor: 'PixelArt', description: '500+ social media templates for Instagram, Facebook, Twitter, and LinkedIn. Fully editable in Canva.', tags: ['Social Media', 'Canva', 'Templates'], reviews: 183 },
  { id: 10, title: 'Vue.js Dashboard', category: 'Source Code', price: 32, rating: '4.7', sales: '670', badge: 'New', img: 'https://picsum.photos/seed/vue10/400/200', vendor: 'VueMaster', description: 'Clean Vue.js 3 dashboard with Composition API, Pinia state management, and Chart.js integration.', tags: ['Vue.js', 'Dashboard', 'Charts'], reviews: 61 },
  { id: 11, title: 'Figma UI Components', category: 'UI Kit', price: 22, rating: '4.8', sales: '1.1k', badge: 'Bestseller', img: 'https://picsum.photos/seed/figma11/400/200', vendor: 'DesignPro', description: '300+ Figma UI components with auto-layout, variants, and design tokens. Perfect for design systems.', tags: ['Figma', 'UI', 'Design System'], reviews: 112 },
  { id: 12, title: 'Digital Marketing Ebook', category: 'Ebook', price: 14, rating: '4.5', sales: '340', badge: 'New', img: 'https://picsum.photos/seed/ebook12/400/200', vendor: 'MarketGuru', description: 'Complete digital marketing guide covering social media, email marketing, PPC, and content strategy.', tags: ['Marketing', 'Digital', 'Strategy'], reviews: 29 },
]

const reviews = [
  { name: 'Rahul S.', avatar: 'RS', rating: 5, comment: 'Excellent product! Saved me a lot of time. Highly recommended.', date: '2 days ago' },
  { name: 'Priya M.', avatar: 'PM', rating: 5, comment: 'Amazing quality and very well documented. Worth every penny!', date: '1 week ago' },
  { name: 'Arjun P.', avatar: 'AP', rating: 4, comment: 'Great product overall. Would love to see more features added.', date: '2 weeks ago' },
]

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('description')
  const [wishlist, setWishlist] = useState(false)

  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h2>Product not found!</h2>
          <button className="btn-filled mt-3" onClick={() => navigate('/products')}>
            Back to Products
          </button>
        </div>
        <Footer />
      </>
    )
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
          <span> / </span>
          <span onClick={() => navigate('/products')} className="breadcrumb-link">Products</span>
          <span> / </span>
          <span className="breadcrumb-current">{product.title}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="product-details-section">
        <div className="container">
          <div className="product-details-grid">

            {/* Left - Images */}
            <div className="product-gallery">
              <div className="product-main-image">
                <img src={product.img} alt={product.title} />
                <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                  {product.badge}
                </span>
              </div>
              <div className="product-thumbnails">
                {[1, 2, 3, 4].map((i) => (
                  <div className="thumb-img" key={i}>
                    <img
                      src={`https://picsum.photos/seed/${product.id}thumb${i}/100/70`}
                      alt={`thumb-${i}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Info */}
            <div className="product-info-panel">
              <span className="product-category-tag">{product.category}</span>
              <h1 className="product-detail-title">{product.title}</h1>

              <div className="product-detail-meta">
                <span>⭐ {product.rating} rating</span>
                <span>💬 {product.reviews} reviews</span>
                <span>🛒 {product.sales} sales</span>
              </div>

              <div className="vendor-info">
                <div className="vendor-avatar">{product.vendor[0]}</div>
                <div>
                  <p className="vendor-name">{product.vendor}</p>
                  <p className="vendor-label">Verified Vendor</p>
                </div>
              </div>

              <div className="product-detail-price">
                <span className="detail-price">${product.price}</span>
                <span className="detail-original">${product.price + 10}</span>
                <span className="detail-discount">Save $10</span>
              </div>

              <div className="product-tags">
                {product.tags.map((tag, i) => (
                  <span className="product-tag" key={i}>{tag}</span>
                ))}
              </div>

              <div className="product-actions">
                <button
                  className="btn-add-cart"
                  onClick={() => toast.success(`${product.title} added to cart!`)}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="btn-buy-now"
                  onClick={() => navigate('/checkout')}
                >
                  ⚡ Buy Now
                </button>
                <button
                  className={`btn-wishlist ${wishlist ? 'wishlisted' : ''}`}
                  onClick={() => {
                    setWishlist(!wishlist)
                    toast.info(wishlist ? 'Removed from wishlist!' : 'Added to wishlist!')
                  }}
                >
                  {wishlist ? '❤️' : '🤍'}
                </button>
              </div>

              <div className="product-includes">
                <h6>What's included:</h6>
                <ul>
                  <li>✅ Full source code</li>
                  <li>✅ Documentation</li>
                  <li>✅ Free updates</li>
                  <li>✅ Commercial license</li>
                  <li>✅ 24/7 support</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Tabs */}
          <div className="product-tabs">
            <div className="tab-buttons">
              {['description', 'reviews', 'support'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="tab-panel">
                  <h4>About this product</h4>
                  <p>{product.description}</p>
                  <h4 className="mt-4">Key Features</h4>
                  <ul className="feature-list">
                    <li>Fully responsive design</li>
                    <li>Well documented code</li>
                    <li>Regular updates included</li>
                    <li>Cross browser compatible</li>
                    <li>Easy customization</li>
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="tab-panel">
                  <h4>Customer Reviews ({product.reviews})</h4>
                  <div className="reviews-list">
                    {reviews.map((review, index) => (
                      <div className="review-card" key={index}>
                        <div className="review-header">
                          <div className="review-avatar">{review.avatar}</div>
                          <div>
                            <p className="review-name">{review.name}</p>
                            <p className="review-date">{review.date}</p>
                          </div>
                          <div className="review-stars">
                            {'⭐'.repeat(review.rating)}
                          </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div className="tab-panel">
                  <h4>Support Information</h4>
                  <p>This product comes with 6 months of dedicated support.</p>
                  <ul className="feature-list">
                    <li>📧 Email support within 24 hours</li>
                    <li>💬 Live chat support</li>
                    <li>📚 Detailed documentation</li>
                    <li>🔄 Free updates for 1 year</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h3>Related Products</h3>
              <div className="related-grid">
                {relatedProducts.map((p) => (
                  <div
                    className="product-card"
                    key={p.id}
                    onClick={() => navigate(`/products/${p.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="product-thumbnail">
                      <img
                        src={p.img}
                        alt={p.title}
                        style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                      />
                      <span className={`product-badge badge-${p.badge.toLowerCase()}`}>
                        {p.badge}
                      </span>
                    </div>
                    <div className="product-info">
                      <span className="product-category">{p.category}</span>
                      <h5>{p.title}</h5>
                      <div className="product-meta">
                        <span>⭐ {p.rating}</span>
                        <span>🛒 {p.sales} sales</span>
                      </div>
                      <div className="product-footer">
                        <span className="product-price">${p.price}</span>
                        <button className="btn-buy">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default ProductDetails