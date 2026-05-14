import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import '../styles/Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    color: '#64748B',
    features: [
      '5 Product Downloads',
      'Basic Support',
      'Community Access',
      'Limited Templates',
    ],
    btn: 'Get Started',
    variant: 'outline',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    color: '#4F46E5',
    popular: true,
    features: [
      'Unlimited Downloads',
      'Priority Support',
      'All Templates Access',
      'Commercial License',
      'Early Access Products',
    ],
    btn: 'Get Pro',
    variant: 'primary',
  },
  {
    name: 'Vendor',
    price: '$49',
    period: 'per month',
    color: '#06B6D4',
    features: [
      'Sell Unlimited Products',
      'Vendor Dashboard',
      'Analytics & Reports',
      'Withdrawal Access',
      'Dedicated Support',
      'Featured Listings',
    ],
    btn: 'Become Vendor',
    variant: 'secondary',
  },
]

function Pricing() {
  return (
    <>
      <Navbar />
      <section className="pricing-section">
        <div className="container">
          <SectionHeader
            title="Simple & Transparent Pricing"
            subtitle="Choose a plan that works best for you"
          />
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                key={index}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <div
                  className="pricing-header"
                  style={{ borderTop: `4px solid ${plan.color}` }}
                >
                  <h4>{plan.name}</h4>
                  <div className="pricing-amount">
                    <span className="price">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`pricing-btn pricing-btn-${plan.variant}`}
                  style={
                    plan.variant === 'primary'
                      ? { background: plan.color }
                      : { borderColor: plan.color, color: plan.color }
                  }
                >
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Pricing