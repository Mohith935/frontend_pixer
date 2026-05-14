import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import '../styles/Contact.css'

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have a question? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Info */}
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Reach out to us through any of the channels below and we'll get back to you as soon as possible.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <span>📧</span>
                  <div>
                    <h6>Email</h6>
                    <p>support@pixer.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <div>
                    <h6>Phone</h6>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <div>
                    <h6>Address</h6>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span>🕐</span>
                  <div>
                    <h6>Working Hours</h6>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message here..."></textarea>
              </div>
              <button className="contact-submit-btn">Send Message →</button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact