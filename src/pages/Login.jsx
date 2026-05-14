import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.css'

function Login() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address'
        )
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Login values:', values)
      navigate('/')
    },
  })

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">

          <div className="auth-brand">
            <h1>Pixer</h1>
            <p>Welcome back! Login to your account</p>
          </div>

          <form className="auth-form" onSubmit={formik.handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error-msg">⚠ {formik.errors.email}</p>
              )}
            </div>

            <div className="mb-3">
              <div className="password-label-row">
                <label className="form-label" style={{ margin: 0 }}>Password</label>
                <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className={`form-control ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="error-msg">⚠ {formik.errors.password}</p>
              )}
            </div>

            <div className="auth-check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="auth-submit-btn">
              Login to Pixer
            </button>

          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="social-buttons">
            <button className="social-btn">🌐 Google</button>
            <button className="social-btn">🐙 GitHub</button>
          </div>

          <div className="auth-bottom">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login