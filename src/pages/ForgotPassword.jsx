import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.css'

function ForgotPassword() {
  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">

          <div className="auth-brand">
            <h1>Pixer</h1>
            <p>Reset your password</p>
          </div>

          <div className="forgot-icon">
            🔐
          </div>

          <h3 className="auth-title">Forgot Password?</h3>
          <p className="auth-subtitle">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form className="auth-form">
            <div className="mb-4">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Send Reset Link →
            </button>
          </form>

          <div className="auth-bottom mt-3">
            Remember your password? <Link to="/login">Back to Login</Link>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default ForgotPassword