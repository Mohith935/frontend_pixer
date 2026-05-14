import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.css'
import '../styles/OTP.css'

function OTPVerification() {
  const navigate = useNavigate()

  useEffect(() => {
    const boxes = document.querySelectorAll('.otp-box')
    boxes.forEach((box, index) => {
      box.addEventListener('input', () => {
        if (box.value.length === 1 && index < boxes.length - 1) {
          boxes[index + 1].focus()
        }
      })
      box.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && box.value === '' && index > 0) {
          boxes[index - 1].focus()
        }
      })
    })
  }, [])

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">
          <div className="auth-brand">
            <h1>Pixer</h1>
            <p>Verify your account</p>
          </div>
          <div className="forgot-icon">📩</div>
          <h3 className="auth-title">OTP Verification</h3>
          <p className="auth-subtitle">
            We sent a 6-digit verification code to <strong>your@email.com</strong>. Enter it below.
          </p>
          <form className="auth-form">
            <div className="otp-grid">
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
              <input type="text" className="otp-box" maxLength="1" placeholder="0" />
            </div>
            <div className="otp-timer">
              <p>Code expires in <span>05:00</span></p>
            </div>
            <button
              type="submit"
              className="auth-submit-btn"
              onClick={(e) => {
                e.preventDefault()
                navigate('/email-verification')
              }}
            >
              Verify OTP →
            </button>
          </form>
          <div className="otp-resend">
            Didn't receive the code?{' '}
            <button className="resend-btn">Resend OTP</button>
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

export default OTPVerification