import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import HowItWorks from '../components/HowItWorks'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <HowItWorks />
      <FeaturedProducts />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  )
}

export default Home