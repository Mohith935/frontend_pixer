import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container py-5 text-center">
        <h1 style={{ fontSize: '6rem', color: '#4F46E5' }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ color: '#64748B' }}>
          The page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="btn-filled mt-4">Go Back Home</button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default NotFound