function Home() {
  return (
    <>
      {/* Hero */}
      <header className="bg-light border-bottom">
        <div className="container py-5 py-lg-6 text-center">
          <h1 className="display-4 fw-bold text-dark mb-3">Welcome to E‑Shop</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '36rem' }}>
            Discover the latest gadgets and electronics at unbeatable prices.
          </p>
          <a href="#products" className="btn btn-primary btn-lg mt-3 px-4 rounded-2">
            Shop Now
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-light border h-100">
                <div className="fs-2 text-primary mb-2">🚚</div>
                <h5 className="text-dark fw-bold">Free Shipping</h5>
                <p className="text-muted small mb-0">On orders over ₹499</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-light border h-100">
                <div className="fs-2 text-primary mb-2">🔒</div>
                <h5 className="text-dark fw-bold">Secure Payment</h5>
                <p className="text-muted small mb-0">100% safe checkout</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-3 bg-light border h-100">
                <div className="fs-2 text-primary mb-2">↩️</div>
                <h5 className="text-dark fw-bold">Easy Returns</h5>
                <p className="text-muted small mb-0">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;