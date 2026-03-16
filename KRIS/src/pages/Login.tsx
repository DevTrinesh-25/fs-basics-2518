import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);

  const handleLogin = () => {

    if(username === "admin" && password === "1234")
    {
        navigate("/dashboard");
    }
    else
    {
        alert("Invalid Credentials");
    }

  }

  return (

    <div className="login-bg d-flex justify-content-center align-items-center">

      <div className="login-card">

        <h3 className="text-center mb-4 text-white">
          Admin Login
        </h3>

        <div className="input-group mb-3">

          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>

          <input type="text" className="form-control" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />

        </div>

        <div className="input-group mb-3">

          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>

          <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

          <span className="input-group-text" style={{cursor:"pointer"}} onClick={()=>setShowPassword(!showPassword)} >
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
          </span>

        </div>

        <div className="form-check text-white mb-3">

          <input type="checkbox" className="form-check-input"/>

          <label className="form-check-label"> Remember me </label>

        </div>

        <button className="btn btn-warning w-100 login-btn" onClick={handleLogin}> Login </button>

      </div>

    </div>

  );
};

export default Login;