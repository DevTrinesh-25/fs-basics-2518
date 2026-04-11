import { useState } from "react";
 import "../../styles/empregister.css";
 import { useNavigate } from 'react-router-dom'; 

const Register = () => {
   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // Handle Input Change
  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // API Call
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();

      alert("User Registered Successfully ✅");
      console.log(data);

    } catch (error) {
      console.error(error);
      alert("Error while registering ❌");
    }
  };

  return (
    <div className="container-fluid main-container">
      <div className="row h-100" style={{marginTop:"50px"}}>

        {/* LEFT SIDE */}
        <div className="col-md-6 left-section d-flex flex-column justify-content-center">
          <div className="content">
            <h2 className="logo">kris</h2>
            <h3>HR Management Platform</h3>
            <p>
              Manage all employees, payrolls, and other human resource operations.
            </p>

            <div className="buttons">
              <button className="btn btn-warning">Learn More</button>
              <button className="btn btn-outline-light ms-3">Our Features</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 right-section d-flex justify-content-center align-items-center">
        <form className="form-box" onSubmit={handleSubmit}>

            <h3>Welcome to KRIS</h3>
            <p className="text-muted">Register your account</p>

            <div className="row">
              <div className="col-md-6">
                <input name="firstName" type="text" placeholder="First Name"
                  className="form-control" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <input name="lastName" type="text" placeholder="Last Name"
                  className="form-control" onChange={handleChange} />
              </div>
            </div>

            <input name="email" type="email" placeholder="E-mail Address"
              className="form-control mt-3" onChange={handleChange} />

            <input name="phone" type="text" placeholder="Phone Number"
              className="form-control mt-3" onChange={handleChange} />

            <div className="row mt-3">
              <div className="col-md-6">
                <input name="password" type="password" placeholder="Password"
                  className="form-control" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <input name="confirmPassword" type="password" placeholder="Confirm Password"
                  className="form-control" onChange={handleChange} />
              </div>
            </div>
            
            <div className="form-check mt-3">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                Yes, I want to receive KRIS newsletters
              </label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                I agree to all the Terms, Privacy Policy
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Create Account
            </button>

          </form>
          </div>

            <p className="mt-3 text-center">
              Already have an account? <span className="login-link" onClick={()=> navigate("/emplogin")}>Log in</span>
            </p>
          </div>
        </div>
  );
};

export default Register;
