import { useState } from "react";
import "../../styles/emplogin.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ LOGIN API CALL (FETCH)
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      alert("Login Successful ✅");
      console.log(data);

      // 👉 Save token (if backend gives)
      localStorage.setItem("token", data.token);

      // 👉 Navigate to dashboard
      window.location.href = "/dashboard";

    } catch (error) {
      console.error(error);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row h-100">

        {/* LEFT SIDE */}
        <div className="col-md-6 left-login d-flex flex-column justify-content-center">

          <div className="login-box">
            <h2 className="logo">kris</h2>

            <h3>Login</h3>
            <p className="text-muted">Login to your account.</p>

            <form onSubmit={handleSubmit}>

              <label>E-mail Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                required
              />

              <label className="mt-3">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                required
              />

              <div className="d-flex justify-content-between mt-2">
                <div>
                  <input type="checkbox" /> <span>Remember me</span>
                </div>
                <span className="link">Reset Password?</span>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Sign In
              </button>

            </form>

            <p className="mt-3 text-center">
              Don’t have an account yet? <span className="link" onClick={()=> navigate("/empregister")}>Join KRIS today</span>
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 right-login d-flex align-items-center justify-content-center">
          <div className="overlay-text">
            <h3>
              Manage all <span>HR Operations</span> from the comfort of your home.
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;