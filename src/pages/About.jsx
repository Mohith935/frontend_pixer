import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import '../styles/About.css'

const stats = [
  { number: '10K+', label: 'Digital Products' },
  { number: '5K+', label: 'Vendors' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '100+', label: 'Categories' },
]

const team = [
  { name: 'Arjun Patel', role: 'Founder & CEO', avatar: 'AP' },
  { name: 'Priya Sharma', role: 'Head of Design', avatar: 'PS' },
  { name: 'Rahul Mehta', role: 'Lead Developer', avatar: 'RM' },
]

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Pixer</h1>
          <p>We are building the best digital marketplace for creators and developers worldwide.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>Pixer was created to empower digital creators and developers by giving them a platform to showcase, sell, and grow their digital products globally.</p>
              <p>We believe every creator deserves a fair marketplace with powerful tools, transparent earnings, and a supportive community.</p>
              <div className="mission-points">
                <div className="mission-point">
                  <span>🎯</span>
                  <p>Empower digital creators worldwide</p>
                </div>
                <div className="mission-point">
                  <span>💡</span>
                  <p>Provide best tools for vendors</p>
                </div>
                <div className="mission-point">
                  <span>🌍</span>
                  <p>Build a global digital community</p>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <span>🚀</span>
                <p>Pixer Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The people behind Pixer marketplace"
          />
          <div className="team-grid">
            {team.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-avatar">{member.avatar}</div>
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About