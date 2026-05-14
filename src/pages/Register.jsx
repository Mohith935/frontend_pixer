import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Auth.css'

function Register() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmpassword: '',
      terms: false,
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Full name is required'),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address'
        )
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
      terms: Yup.boolean()
        .oneOf([true], 'You must accept the Terms & Conditions'),
    }),
    onSubmit: (values) => {
      console.log('Register values:', values)
      navigate('/otp-verification')
    },
  })

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">

          <div className="auth-brand">
            <h1>Pixer</h1>
            <p>Create your free account today</p>
          </div>

          <form className="auth-form" onSubmit={formik.handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className={`form-control ${formik.touched.fullname && formik.errors.fullname ? 'input-error' : ''}`}
                placeholder="Enter your full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="error-msg">⚠ {formik.errors.fullname}</p>
              )}
            </div>

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
              <label className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className={`form-control ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}
                placeholder="Create a password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="error-msg">⚠ {formik.errors.password}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                className={`form-control ${formik.touched.confirmpassword && formik.errors.confirmpassword ? 'input-error' : ''}`}
                placeholder="Confirm your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
              />
              {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                <p className="error-msg">⚠ {formik.errors.confirmpassword}</p>
              )}
            </div>

            <div className="auth-check">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
              />
              <label htmlFor="terms">
                I agree to the <Link to="/terms">Terms & Conditions</Link>
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="error-msg">⚠ {formik.errors.terms}</p>
            )}

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>

          </form>

          <div className="auth-divider">
            <span>or register with</span>
          </div>

          <div className="social-buttons">
            <button className="social-btn">🌐 Google</button>
            <button className="social-btn">🐙 GitHub</button>
          </div>

          <div className="auth-bottom">
            Already have an account? <Link to="/login">Login here</Link>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register