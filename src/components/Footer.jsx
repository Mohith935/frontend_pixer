import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="pixer-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h3>Pixer</h3>
            <p>The best multivendor digital marketplace for creators, developers and designers worldwide.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h6>Quick Links</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h6>Support</h6>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h6>Newsletter</h6>
            <p>Subscribe to get latest products and updates.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Pixer. All rights reserved.</p>
          <div className="footer-socials">
            <span>🐦 Twitter</span>
            <span>💼 LinkedIn</span>
            <span>📘 Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer