import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.css'
import '../styles/EmailVerification.css'

function EmailVerification() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">

          <div className="auth-brand">
            <h1>Pixer</h1>
            <p>Almost there!</p>
          </div>

          <div className="email-verify-icon">📧</div>

          <h3 className="auth-title">Verify Your Email</h3>
          <p className="auth-subtitle">
            We sent a verification link to <strong>your@email.com</strong>.
            Please check your inbox and click the link to activate your account.
          </p>

          {/* Status Box */}
          <div className="verify-status-box">
            <div className="verify-status-icon">⏳</div>
            <div>
              <p className="verify-status-title">Waiting for verification</p>
              <p className="verify-status-sub">Check your spam folder if you don't see it</p>
            </div>
          </div>

          {/* Steps */}
          <div className="verify-steps">
            <div className="verify-step">
              <div className="step-num done">1</div>
              <p>Account created successfully</p>
            </div>
            <div className="verify-step-line"></div>
            <div className="verify-step">
              <div className="step-num active">2</div>
              <p>Verify your email address</p>
            </div>
            <div className="verify-step-line"></div>
            <div className="verify-step">
              <div className="step-num">3</div>
              <p>Start using Pixer</p>
            </div>
          </div>

          {/* Buttons */}
          <button
            className="auth-submit-btn"
            onClick={() => navigate('/login')}
          >
            I've Verified My Email →
          </button>

          <div className="otp-resend mt-3">
            Didn't receive the email?{' '}
            <button className="resend-btn">Resend Verification Email</button>
          </div>

          <div className="auth-bottom">
            <Link to="/login">← Back to Login</Link>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default EmailVerification