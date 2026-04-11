import '../styles/Navbar2.css'; // Inline styles or external CSS

const KrisNavbar = () => {
  return (
    <nav className="kris-navbar">
      <div className="kris-logo">
        <span className="logo-text">||kris</span>
      </div>
      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Requests</li>
        <li>Payroll</li>
        <li>Company</li>
        <li>Extras</li>
      </ul>
      <div className="nav-icons">
        <span className="icon bell" title="Notifications">🔔</span>
        <span className="icon envelope" title="Messages">📧</span>
        <span className="icon profile" title="Profile">👤</span>
      </div>
    </nav>
  );
};

export default KrisNavbar;