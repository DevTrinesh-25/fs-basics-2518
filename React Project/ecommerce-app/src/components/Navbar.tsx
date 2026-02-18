function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bold" href="/">E‑Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/cart">Cart</a>
            </li>
             <li className="nav-item">
              <a className="nav-link text-dark" href="/employees">Employees</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/Groceries">Groceries</a>
            </li>
             <li className="nav-item">
              <a className="nav-link text-dark" href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar