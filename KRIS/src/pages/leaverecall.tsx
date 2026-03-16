import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Leave = {
  name: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
};

const LeaveRecall: React.FC = () => {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState<Leave[]>([]);

  const handleLogout = () => {
    navigate("/login");
  };
  
  useEffect(()=>{
  
  axios.get("http://localhost:8080/api/leaves")
  
  .then((res)=>{
  
  setLeaves(res.data);
  
  })
  .catch(() => {
    setLeaves([]);
  });
  
  },[])

    return(
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 sidebar">
            <h4 className="text-center mb-4">KRIS</h4>
            <div className="profile">
              <img src="https://i.pravatar.cc/100" alt="profile" />
              <h6>KRIS Admin</h6>
            </div>
            <Link to="/dashboard">
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
            <a href="#">
              <i className="bi bi-envelope"></i> Messages
            </a>
            <a href="#">
              <i className="bi bi-briefcase"></i> Jobs
            </a>
            <a href="#">
              <i className="bi bi-people"></i> Candidates
            </a>
            <a href="#">
              <i className="bi bi-file-earmark"></i> Resumes
            </a>
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

            <div className="container">
              <h4>Leave History</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Type</th>
                    <th>Reason</th>
                  </tr>
                </thead>

                <tbody>
                  {leaves.map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.name}</td>
                      <td>{leave.duration}</td>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.type}</td>
                      <td>{leave.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeaveRecall;