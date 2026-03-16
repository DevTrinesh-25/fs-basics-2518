import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
        <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 sidebar">
            <h4 className="text-center mb-4">KRIS</h4>
            <div className="profile">
              <img src="https://i.pravatar.cc/100" alt="profile" />
              <h6>KRIS Admin</h6>
            </div>
            <a href="#"><i className="bi bi-speedometer2"></i> Dashboard</a>
            <a href="#"><i className="bi bi-envelope"></i> Messages</a>
            <a href="#"><i className="bi bi-briefcase"></i> Jobs</a>
            <a href="#"><i className="bi bi-people"></i> Candidates</a>
            <a href="#"><i className="bi bi-file-earmark"></i> Resumes</a>
            <a href="#">
              <i className="bi bi-person-badge"></i> Employees
            </a>
            <Link to="/dashboard/leave-management">
              <i className="bi bi-calendar"></i> Leave Management
            </Link>
            <a href="#">
              <i className="bi bi-graph-up"></i> Performance
            </a>
            <a href="#">
              <i className="bi bi-cash-stack"></i> Payroll
            </a>
  
            <button className="btn btn-danger w-100 mt-4" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;