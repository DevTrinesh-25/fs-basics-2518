import Employee from "./Employee";
import { useState } from 'react';

function Employees() {
    const [employees, setEmployees] = useState([
        { id: 101, name: "Ramesh Kumar", role: "Software Engineer", department: "IT", salary: 75000, location: "Hyderabad" },
        { id: 102, name: "Sita Sharma", role: "Data Analyst", department: "Analytics", salary: 68000, location: "Bangalore" },
        { id: 103, name: "Arjun Reddy", role: "Backend Developer", department: "Engineering", salary: 80000, location: "Chennai" },
        { id: 104, name: "Priya Singh", role: "HR Manager", department: "HR", salary: 65000, location: "Mumbai" },
        { id: 105, name: "Vikram Das", role: "DevOps Engineer", department: "Infrastructure", salary: 90000, location: "Pune" },
        { id: 106, name: "Anita Joshi", role: "UI/UX Designer", department: "Design", salary: 70000, location: "Delhi" },
        { id: 107, name: "Sanjay Mehta", role: "Project Manager", department: "Management", salary: 95000, location: "Ahmedabad" },
        { id: 108, name: "Neha Rani", role: "QA Engineer", department: "Quality Assurance", salary: 62000, location: "Jaipur" }
    ]);

    const deleteEmp = (empId: number) => {
        const filteredEmployees = employees.filter((emp) => emp.id !== empId);
        setEmployees(filteredEmployees);
    };  

    return (
        <div className="container">
            <h2 className="text-center my-4">Employees</h2>    
            <div className="row">
                {employees.map((employee: any) =>  (
                    <Employee emp={employee} deleteEmp={deleteEmp}></Employee>
                ))}
            </div>
        </div>
    )
}

export default Employees;