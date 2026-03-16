import "../Styles/LeaveManagement.css";
import { Link, useNavigate } from "react-router-dom";

const LeaveManagement: React.FC = () => {
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
          {/* <a href="#"><i className="bi bi-speedometer2"></i> Dashboard</a> */}
          <Link to="/dashboard">
          <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
          <a href="#"><i className="bi bi-envelope"></i> Messages</a>
          <a href="#"><i className="bi bi-briefcase"></i> Jobs</a>
          <a href="#"><i className="bi bi-people"></i> Candidates</a>
          <a href="#"><i className="bi bi-file-earmark"></i> Resumes</a>
          <a href="#"><i className="bi bi-person-badge"></i> Employees</a>
          <Link to="/dashboard/leave-management">
            <i className="bi bi-calendar"></i> Leave Management
          </Link>
          <a href="#"><i className="bi bi-graph-up"></i> Performance</a>
          <a href="#"><i className="bi bi-cash-stack"></i> Payroll</a>

          <button className="btn btn-danger w-100 mt-4" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          {/* Navbar */}
          <div className="topbar d-flex justify-content-between align-items-center mb-4">
            <input className="form-control w-25" placeholder="Search" />
            <div>
              <i className="bi bi-bell fs-4 me-3"></i>
              <i className="bi bi-gear fs-4 me-3"></i>
              <i className="bi bi-envelope fs-4"></i>
            </div>
          </div>

          <div className="container-fluid p-4">
            <div className="mb-3">
              <h5 className="fw-bold">📖 Leave Management</h5>
            </div>

            <div className="d-flex gap-3 mb-4 flex-wrap">
              <button  className="btn leave-btn">Leave Settings</button>
              <button onClick={()=> navigate("/dashboard/leaverecall")}><i className="btn leave-btn"></i>Leave Recall</button>
              <button className="btn leave-btn">Leave History</button>
              <button className="btn leave-btn">Relief Officers</button>
            </div>

            <div className="leave-banner d-flex align-items-center justify-content-between">
              <div className="text-white">
                <h3 className="fw-bold">
                  Manage ALL <span className="text-warning">Leave Applications</span>
                </h3>
                <p>A relaxed employee is a performing employee.</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                  width="200"
                  alt="leave"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LeaveManagement;