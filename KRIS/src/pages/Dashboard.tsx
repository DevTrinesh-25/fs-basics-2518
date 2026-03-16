import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/Dashboard.css";
import "./Leavemanagement"

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/login");
//   };

  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     {/* Sidebar */}
    //     <div className="col-md-2 sidebar">
    //       <h4 className="text-center mb-4">KRIS</h4>
    //       <div className="profile">
    //         <img src="https://i.pravatar.cc/100" alt="profile" />
    //         <h6>KRIS Admin</h6>
    //       </div>
    //       <a href="#"><i className="bi bi-speedometer2"></i> Dashboard</a>
    //       <a href="#"><i className="bi bi-envelope"></i> Messages</a>
    //       <a href="#"><i className="bi bi-briefcase"></i> Jobs</a>
    //       <a href="#"><i className="bi bi-people"></i> Candidates</a>
    //       <a href="#"><i className="bi bi-file-earmark"></i> Resumes</a>
    //       <a href="#"><i className="bi bi-person-badge"></i> Employees</a>
    //       <Link to="/dashboard/leave-management"><i className="bi bi-calendar"></i> Leave Management</Link> 
    //       <a href="#"><i className="bi bi-graph-up"></i> Performance</a>
    //       <a href="#"><i className="bi bi-cash-stack"></i> Payroll</a>  

    //       <button className="btn btn-danger w-100 mt-4" onClick={handleLogout}>
    //         <i className="bi bi-box-arrow-right"></i> Logout
    //       </button>
    //     </div>

    //     {/* Main Content */}
    //     <div className="col-md-10">
    //       {/* Navbar */}
    //       <div className="topbar d-flex justify-content-between align-items-center mb-4">
    //         <input className="form-control w-25" placeholder="Search" />
    //         <div>
    //           <i className="bi bi-bell fs-4 me-3"></i>
    //           <i className="bi bi-gear fs-4 me-3"></i>
    //           <i className="bi bi-envelope fs-4"></i>
    //         </div>
    //       </div>

          {/* Cards */}
          <div className="row g-3">
            <DashboardCard color="yellow" icon="bi-envelope" value="138" label="Messages" />
            <DashboardCard color="blue" icon="bi-briefcase" value="50" label="Jobs" />
            <DashboardCard color="green" icon="bi-people" value="100" label="Candidates" />
            <DashboardCard color="black" icon="bi-file-earmark" value="50" label="Resumes" />
            <DashboardCard color="yellow" icon="bi-person" value="200" label="Employees" />
            <DashboardCard color="blue" icon="bi-book" value="20" label="Leaves" />
          </div>

          {/* Sections */}
          <div className="row mt-4">
            {/* Applied Jobs */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Applied Jobs
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Sales Executive
                    <span className="float-end text-muted">20 mins ago</span>
                  </li>
                  <li className="list-group-item">
                    UX Designer
                    <span className="float-end text-muted">10 mins ago</span>
                  </li>
                  <li className="list-group-item">
                    Product Manager
                    <span className="float-end text-muted">5 mins ago</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payroll */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  April Payroll
                </div>
                <div className="card-body">
                  <Payroll name="John Doe" percent="80%" color="bg-success" />
                  <Payroll name="Ginna Lee" percent="60%" color="bg-warning" />
                  <Payroll name="James" percent="50%" color="bg-warning" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


/* ---------- Card Component ---------- */

type CardProps = {
  color: string;
  icon: string;
  value: string;
  label: string;
};

const DashboardCard: React.FC<CardProps> = ({ color, icon, value, label }) => {
  return (
    <div className="col-md-2">
      <div className={`card-box ${color}`}>
        <div>
          <h5>{value}</h5>
          <p>{label}</p>
        </div>
        <i className={`bi ${icon} icon`}></i>
      </div>
    </div>
  );
};


/* ---------- Payroll Component ---------- */

type PayrollProps = {
  name: string;
  percent: string;
  color: string;
};

const Payroll: React.FC<PayrollProps> = ({ name, percent, color }) => {
  return (
    <>
      <p>{name}</p>
      <div className="progress mb-3">
        <div className={`progress-bar ${color}`} style={{width: percent}}></div>
      </div>
    </>
  );
};