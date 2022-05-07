import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
        <nav className="d-flex justify-content-between align-items-centre">
        <h6>
          Virtual Lobby
          <span style={{ color: "#73A9DF", fontSize: "34px" }}>.</span>
        </h6>
        <div className="nav-buttons">
          <div className="dropdown">
            <button
              className="dashboard-btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-user-3-fill"></i>
              Profile
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/">
                  Edit Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <Link
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              to="/appointments/:id"
            >
              <i className="ri-calendar-fill"></i>
              Appointments
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav