import "../styles/EmpMgmt.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import profile from "../pages/Emp Profile/profile";
// import Sidebar2 from "../Components/sidebar2";
// import Navbar2 from "../Components/Navbar2";
// import UpdateProfile from "../pages/Emp Profile/updateProfile";

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const employees = [
    {
      name: "John Steven Doe",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Male",
      id: 1
    },
    {
      name: "Barry Jhayson",
      dept: "IT",
      job: "Backend Engineer",
      date: "28/04/2022",
      category: "Remote",
      gender: "Male",
        id: 2
    },
    {
      name: "Tiwa Cavage",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Female",
        id: 3
    },
    {
      name: "James IDK",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Male",
        id: 4
    },
    {
      name: "Vanessa Chidi",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Female",
        id: 5
    },
    {
      name: "Don Gorgon",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Male",
      id: 6
    },
    {
      name: "Sarah Wilson",
      dept: "Design",
      job: "UI UX Designer",
      date: "28/04/2022",
      category: "Full time",
      gender: "Female",
        id: 7
    }
  ];

  
  const toggleDropdown = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleEdit = (id:any) => {
    navigate(`/updateProfile/${id}`);
  };

  const handleView = (id:any) => {
      navigate(`/profile/${id}`);
    // alert("View Profile of ID: " + id); // you can create another page later
  };

  return (
    <div className="employee-container">
      
      {/* Top Section */}
      <div className="employee-header">
        <h3>Dashboard / Employee Management</h3>
      </div>

      {/* Card */}
      <div className="employee-card">
        
        <div className="card-header">
          <h2>Employee Management</h2>
          <button className="export-btn">Export</button>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Name(s)</th>
              <th>Dept</th>
              <th>Job Title</th>
              <th>Start Date</th>
              <th>Category</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.dept}</td>
                <td>{emp.job}</td>
                <td>{emp.date}</td>
                <td>{emp.category}</td>
                <td>{emp.gender}</td>
                <td className="action-cell">
                  <button
                    className="action-btn"
                    onClick={() => toggleDropdown(index)}
                  >
                    Actions ▼
                  </button>

                  {openIndex === index && (
                    <div className="dropdown">
                      <p onClick={() => handleView(emp.id)}>View Profile</p>
                      <p onClick={() => handleEdit(emp.id)}>Edit Profile</p>
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;