import '../styles/HowItWorks.css'
import SectionHeader from './SectionHeader'

const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Browse Products',
    description: 'Explore thousands of digital products from top vendors worldwide.'
  },
  {
    number: '02',
    icon: '🛒',
    title: 'Add to Cart',
    description: 'Select your favorite products and add them to your cart easily.'
  },
  {
    number: '03',
    icon: '💳',
    title: 'Make Payment',
    description: 'Pay securely using Stripe, Razorpay or PayPal.'
  },
  {
    number: '04',
    icon: '⬇️',
    title: 'Download Instantly',
    description: 'Get instant access and download your products immediately.'
  }
]

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <SectionHeader
            title="How It Works"
            subtitle="Get started with Pixer in just 4 simple steps"
        />
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks