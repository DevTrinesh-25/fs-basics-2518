import Navbar2 from "../../Components/Navbar2";
import { useNavigate } from "react-router-dom";
import "../../styles/empdashboard.css";

const EmployeeCard = () => {
  const navigate = useNavigate();

  const actions = [
    { name: "Apply for leave", path: "/empleave" },
    { name: "KPI Goals", path: "/kpi-goals" },
    { name: "Take Appraisal", path: "/appraisal" },
    { name: "View Payslip", path: "/payslip" },
    { name: "Update Profile", path: "/profile" },
    { name: "Events", path: "/events" },
  ];

  return (
    <div>
      <Navbar2 />
    <div className="employee-card">
      <div className="left-section">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="profile-img"
        />
        <div className="employee-info">
          <h2>John Doe</h2>
          <p>UI / UX Designer & UI Writer</p>
        </div>
      </div>

      <button className="edit-btn" onClick={() => navigate("/updateprofile")}>
        Edit Profile
      </button>
    </div>
     <div className="mt-4">
        <h3 className="text-gray-700 font-medium mb-2">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          {actions.map((item) => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
          className="bg-white border border-gray-200 
                     text-gray-700 px-4 py-2 
                     rounded-full text-sm shadow-sm
                     hover:bg-gray-100 transition"
        >
          {item.name}
        </button>
         ))}
        </div>
      </div>
      <div className="cards-container">
      
      {/* Available Leave Days */}
      <div className="card">
        <div className="card-header">
          <h3>Available Leave Days</h3>
          <span>⋮</span>
        </div>

        <div className="leave-item">
          <p>Annual Leave</p>
          <span>12 of 20 days</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="leave-item">
          <p>Sick Leave</p>
          <span>0 of 10 days</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "10%" }}></div>
          </div>
        </div>

        <div className="leave-item">
          <p>Compassionate Leave</p>
          <span>8 of 15 days</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>

      {/* To-dos */}
      <div className="card">
        <div className="card-header">
          <h3>To-dos</h3>
          <span>⋮</span>
        </div>

        <ul className="todo-list">
          <li>Complete Onboarding Document Upload</li>
          <li>Follow up on clients on documents</li>
          <li>Develop wireframes for UI screens</li>
          <li>Course course study for next IT project</li>
          <li>Follow up on clients on documents</li>
        </ul>
      </div>
    </div>
    <div className="cards-row">
      {/* Announcements Card */}
      <div className="card announcements">
        <div className="card-header">
          <h3>Announcements</h3>
          <span>⋮</span>
        </div>

        <div className="card-body">
          <p>Welcome to Kriss - We have a new staff joining us</p>
          <p>SantaFest is here, Happy Holidays from Kriss team</p>
          <p>Marriage Alert</p>
          <p>Office Space Update</p>
        </div>
      </div>

      {/* April Pay Slip Breakdown */}
      <div className="card payslip">
        <div className="card-header">
          <h3>April Pay Slip Breakdown</h3>
          <span>⋮</span>
        </div>

        <table className="payslip-table">
          <thead>
            <tr>
              <th>Earnings</th>
              <th>Amount</th>
              <th>Deductions</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Wage</td>
              <td>150,000</td>
              <td>-30,000</td>
              <td>120,000</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>15,000</td>
              <td>-3,000</td>
              <td>12,000</td>
            </tr>
            <tr>
              <td>Pension</td>
              <td>15,000</td>
              <td>-3,000</td>
              <td>12,000</td>
            </tr>
            <tr className="total-row">
              <td>Total Earnings</td>
              <td>180,000</td>
              <td>-36,000</td>
              <td>144,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default EmployeeCard;