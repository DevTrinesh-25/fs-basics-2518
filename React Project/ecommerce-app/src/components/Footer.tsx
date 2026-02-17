function Footer() {
  return (
    <footer className="bg-light border-top py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-dark fw-bold">E‑Shop</h6>
            <p className="text-muted small mb-0">
              Your one-stop shop for the best products.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-dark fw-bold">Quick links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-muted text-decoration-none">Cart</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-dark fw-bold">Contact</h6>
            <p className="text-muted small mb-0">
              support@eshop.com
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <p className="text-muted small text-center mb-0">
          © {new Date().getFullYear()} E‑Shop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer