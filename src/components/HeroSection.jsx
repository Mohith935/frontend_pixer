import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Buy & Sell Digital Products</h1>
        <p>Templates, Source Codes, UI Kits, Graphics, Ebooks & More</p>
        <div className="hero-buttons">
          <button className="btn-filled">Browse Products</button>
          <button className="btn-outline">Become a Vendor</button>
        </div>
        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <p>Products</p>
          </div>
          <div>
            <h3>5K+</h3>
            <p>Vendors</p>
          </div>
          <div>
            <h3>50K+</h3>
            <p>Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection