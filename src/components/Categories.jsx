const categories = [
  { icon: '💻', title: 'Source Codes' },
  { icon: '🎨', title: 'UI Kits' },
  { icon: '�graphics', title: 'Graphics' },
  { icon: '📚', title: 'Ebooks' },
  { icon: '🎬', title: 'Video Templates' },
  { icon: '🔌', title: 'Plugins' },
]

function Categories() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Browse Categories</h2>
        <div className="row g-4">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="card text-center p-3 h-100 border-0 shadow-sm">
                <div style={{ fontSize: '2rem' }}>{cat.icon}</div>
                <p className="mt-2 mb-0 fw-500">{cat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories