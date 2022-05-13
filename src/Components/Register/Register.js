import React, { useState } from "react";
import "./Register.css";
import img from "../../assets/images/Group 47.png";
import { Link, useNavigate } from "react-router-dom";
import instance from "../Common/Baseurl";

function Register() {
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showCPassword, setshowCPassword] = useState(false);

  const [tripType, setTripType] = useState("C");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setpincode] = useState("");
  const [spincode, setspincode] = useState("");
  const [shopname, setshopname] = useState("");
  const [shopaddress, setshopaddress] = useState("");
  const [dropValue, setdropValue] = useState("");

  const navigate = useNavigate();
  const getDropvalue = (e) => {
    const changeValue = e.target.value;
    setdropValue(changeValue);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if(tripType === "C"){
      instance.post("/register", {
        username:username,
        password: password,
        email: email,
        pincode : pincode,
        contact : contact,
        utype : tripType
      })
      .then(async (response) => {

      })
      .catch(async (err) => {

      })
    }
    else{
      instance.post("/register", {
        username:username,
        shopname:shopname,
        password: password,
        email: email,
        shopaddress : shopaddress,
        pincode : pincode,
        spincode : spincode,
        contact : contact,
        utype : tripType,
        stype : dropValue
      })
      .then(async (response) => {

      })
      .catch(async (err) => {

      })
    }
    navigate("/dashboard");
  };

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
          <Link
            style={{ display: "inline-block", textDecoration: "underline" }}
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
      <div id="form-section">
        <div id="form-body">
          <h2>Sign Up</h2>
          <form onSubmit={onSubmitHandler} noValidate>
            <div className="one d-flex">
              <div className="first-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    required
                    onChange={(e) => {
                      let value = e.target.value;

                      value = value.replace(/[^A-Za-z]/gi, "");

                      setusername(value);
                    }}
                    className="form-control"
                    placeholder="Enter your name"
                    name="username"
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
                    id="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="phone"
                    id="contact"
                    value={contact}
                    required
                    onChange={(e) => {
                      let value = e.target.value;
                      let regexp = /^[0-9\b]+$/;
                      if (value === "" || regexp.test(value)) {
                        setContact(value);
                      }
                    }}
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
                      setTripType("C");
                    }}
                    className="form-check form-check-inline"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="inlineRadio1"
                      value={tripType}
                      checked={tripType === "C"}
                      readOnly
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Customer
                    </label>
                  </div>
                  <div
                    onClick={() => {
                      setTripType("S");
                    }}
                    className="form-check form-check-inline"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="inlineRadio2"
                      value={tripType}
                      checked={tripType === "S"}
                      readOnly
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
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="confirmpassword"
                    value={confirmPassword}
                    required
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pin Code</label>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    required
                    onChange={(e) => setpincode(e.target.value)}
                    className="form-control"
                    placeholder="928291"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: tripType === "S" ? "flex" : "none",
              }}
              className="two"
            >
              <div className="first-half w-50 m-2">
                <div className="mb-3">
                  <label className="form-label">Shop name</label>
                  <input
                    type="text"
                    id="shopname"
                    value={shopname}
                    onChange={(e) => setshopname(e.target.value)}
                    className="form-control"
                    placeholder="Abc Xyz"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pin code</label>
                  <input
                    type="text"
                    id="spincode"
                    value={spincode}
                    onChange={(e) => setspincode(e.target.value)}
                    required
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
                    id="shopaddress"
                    value={shopaddress}
                    required
                    onChange={(e) => setshopaddress(e.target.value)}
                    className="form-control"
                    placeholder="Building no, Street no, city"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Shop Type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => getDropvalue(e)}
                  >
                    <option defaultValue>Choose business type</option>
                    <option value="Dental Clinic">Dental Clinic</option>
                    <option value="Salon">Salon</option>
                    <option value="Grocery Store">Grocery Store</option>
                    <option value="Tailor">Tailor</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="mb-4">
              {loading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
