import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";
import instance from "../Common/Baseurl";

function Login() {
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    setloading(true);
      instance.post("/register", {
        username:email,
        password: password,
      })
      .then(async (response) => {

      })
      .catch(async (err) => {

      })
    
    navigate('/dashboard');
  }
  return (
    <div className="login-parent">
      <div id="image-section">
        <div id="overlay">
          <h6 className="mb-5">
            Virtual Lobby
            <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
          </h6>
          <h1>
            A Platform for scheduling{" "}
            <span style={{ color: "#73A9DF" }}>hassle-free</span> appointments
            <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
          </h1>
        </div>
      </div>
      <div id="form-section">
        <div id="form-body">
          <h2>Log In</h2>
          <p className="mb-4">
            Welcome back! <br />
            Enter your details to login to your account.
          </p>
          <form onSubmit={onSubmitHandler} action="">
            <div className="mb-4">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4 position-relative">
              <label className="form-label">Password</label>
              <div
                onClick={() => setshowPassword(!showPassword)}
                className="position-absolute top-0 end-0 utility"
              >
                {showPassword ? (
                  <i className="ri-eye-line"></i>
                ) : (
                  <i className="ri-eye-close-line"></i>
                )}
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Keep me signed in
              </label>
            </div>
            <button type="submit" className="mb-5">
              {loading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Log In"
              )}
            </button>
            <Link to="/register">
              Don't have an account?{" "}
              <span style={{ color: "#73A9DF" }}> Signup </span>{" "}
            </Link>
            <Link style={{display: "inline-block",textDecoration:'underline'}} to="/">Back to home</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
