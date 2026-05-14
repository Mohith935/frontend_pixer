import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Web Developer',
    review: 'Pixer has the best collection of React templates. Saved me weeks of work!',
    avatar: 'RS',
    rating: 5
  },
  {
    name: 'Priya Mehta',
    role: 'UI/UX Designer',
    review: 'Amazing UI kits and graphics. The quality is outstanding and worth every penny.',
    avatar: 'PM',
    rating: 5
  },
  {
    name: 'Arjun Patel',
    role: 'Freelancer',
    review: 'Became a vendor on Pixer and my sales doubled within a month. Highly recommend!',
    avatar: 'AP',
    rating: 5
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Trusted by thousands of developers, designers and vendors</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {'⭐'.repeat(item.rating)}
              </div>
              <p className="review">"{item.review}"</p>
              <div className="reviewer">
                <div className="avatar">{item.avatar}</div>
                <div>
                  <h6>{item.name}</h6>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials