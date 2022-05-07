import React, { useState } from "react";
import "./Register.css";
import img from "../../assets/images/Group 47.png";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [tripType, setTripType] = useState("Customer");
  const [showPassword, setshowPassword] = useState(false);
  const [showCPassword, setshowCPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = ()=>{
    navigate("/dashboard");
  }

  return (
    <div className="register-parent d-flex">
      <div id="image-section">
        <img src={img} alt="" />
        <div
          id="overlay"
          className="d-flex flex-column justify-content-between"
        >
          <div className="text-group">
            <h6 className="mb-5">
              Virtual Lobby
              <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
            </h6>
            <h1>
              Your very own{" "}
              <span style={{ color: "#73A9DF" }}>appointment</span> generator
              <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
            </h1>
          </div>
          <Link to="/login">
            Already have an account?{" "}
            <span style={{ color: "#73A9DF" }}> Login </span>{" "}
          </Link>
          <Link style={{display: "inline-block",textDecoration:'underline'}} to="/">Back to home</Link>
        </div>
      </div>
      <div id="form-section">
        <div id="form-body">
          <h2>Sign Up</h2>
          <form onSubmit={onSubmitHandler} action="" className="">
            <div className="one d-flex">
              <div className="first-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Abc Xyz"
                  />
                </div>
                <div className="mb-3 position-relative">
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
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7893453214"
                  />
                </div>
                <div className="mb-3">
                  <div>
                    <label className="form-label">User Type</label>
                  </div>
                  <div
                    onClick={() => {
                      setTripType("Customer");
                    }}
                    className="form-check form-check-inline"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="inlineRadio1"
                      value={tripType}
                      checked={tripType === "Customer"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Customer
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setTripType("Shop/Business Owner");
                    }}
                    className="form-check form-check-inline"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="inlineRadio2"
                      value={tripType}
                      checked={tripType === "Shop/Business Owner"}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Shop/Business Owner
                    </label>
                  </div>
                </div>
              </div>
              <div className="second-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Confirm Password</label>
                  <div
                    onClick={() => setshowCPassword(!showCPassword)}
                    className="position-absolute top-0 end-0 utility"
                  >
                    {showCPassword ? (
                      <i className="ri-eye-line"></i>
                    ) : (
                      <i className="ri-eye-close-line"></i>
                    )}
                  </div>
                  <input
                    type={showCPassword ? "text" : "password"}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="928291"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: tripType === "Shop/Business Owner" ? "flex" : "none",
              }}
              className="two"
            >
              <div className="first-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Shop name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Abc Xyz"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pin code</label>
                  <input
                    type="text"
                    placeholder="928291"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="second-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Shop address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Building no, Street no, city"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Shop Type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Choose business type</option>
                    <option value="1">Dental Clinic</option>
                    <option value="2">Salon</option>
                    <option value="3">Grocery Store</option>
                    <option value="4">Spa</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="mb-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
