import { useNavigate } from 'react-router-dom'
import '../styles/FeaturedProducts.css'

const products = [
  { id: 1, title: 'React Admin Dashboard', category: 'Source Code', price: '$29', rating: '4.9', sales: '1.2k', badge: 'Bestseller', img: 'https://picsum.photos/seed/dashboard1/400/200' },
  { id: 2, title: 'E-commerce UI Kit', category: 'UI Kit', price: '$19', rating: '4.8', sales: '980', badge: 'New', img: 'https://picsum.photos/seed/uikit2/400/200' },
  { id: 3, title: 'Mobile App Template', category: 'Template', price: '$39', rating: '4.7', sales: '750', badge: 'Hot', img: 'https://picsum.photos/seed/mobile3/400/200' },
  { id: 4, title: 'Logo Design Bundle', category: 'Graphics', price: '$15', rating: '4.9', sales: '2.1k', badge: 'Bestseller', img: 'https://picsum.photos/seed/graphics4/400/200' },
  { id: 5, title: 'SEO Ebook Guide', category: 'Ebook', price: '$9', rating: '4.6', sales: '500', badge: 'New', img: 'https://picsum.photos/seed/ebook5/400/200' },
  { id: 6, title: 'WordPress Plugin Pack', category: 'Plugin', price: '$49', rating: '4.8', sales: '430', badge: 'Hot', img: 'https://picsum.photos/seed/plugin6/400/200' },
]

function FeaturedProducts() {
  const navigate = useNavigate()

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Hand-picked top digital products from our best vendors</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
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
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                  {product.badge}
                </span>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h5>{product.title}</h5>
                <div className="product-meta">
                  <span className="product-rating">⭐ {product.rating}</span>
                  <span className="product-sales">🛒 {product.sales} sales</span>
                </div>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button
                    className="btn-buy"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/products/${product.id}`)
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button
            className="btn-view-all"
            onClick={() => {
              window.scrollTo(0, 0)
              navigate('/products')
            }}
          >
            View All Products →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts