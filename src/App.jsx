import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App