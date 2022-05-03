import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import img from '../assets/images/Group 52.png'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-parent">
      <nav className="d-flex justify-content-between align-items-centre">
        <h6>
          Virtual Lobby
          <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
        </h6>
        <div className="nav-links">
          <a href="!/">Home</a>
          <a href="!/">Our Services</a>
          <a href="!/">Reviews</a>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </nav>
      <div className="lower-landing">
        <h1>
          A platform for <br />
          <span className="diff-font">hassle free</span> Appointments
        </h1>
        <p>
          Schedule your appointments at home
          <br />
          before heading to them. Reduce the rush at stores,
          <br />
          salons and clinics in this pandemic times.
        </p>
        <button className='custom-btn' onClick={() => navigate("/register")}>Get Started</button>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home;
