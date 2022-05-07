import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import store from "../../assets/images/nathalia-rosa-rWMIbqmOxrY-unsplash.jpg";
import clinic from "../../assets/images/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg";
import tailor from "../../assets/images/kristina-kruzkova-nABKsD3k4FE-unsplash.jpg";
import salon from "../../assets/images/greg-trowman-jsuWg7IXx1k-unsplash.jpg";
import Footer from "../Footer/Footer.js";
import Nav from "../Nav/Nav.js";

function Dashboard() {
  const [state, setstate] = useState([
    { name: "Stores", path: store },
    { name: "Clinics", path: clinic },
    { name: "Tailors-Boutiques", path: tailor },
    { name: "Salons", path: salon },
  ]);
  let shop = "";
  if (state) {
    shop = state.map((f, i) => {
      return (
        <div key={i} className="card" style={{ width: "18rem" }}>
          <img src={f.path} className="card-img-top" alt="store" />
          <div className="card-body">
            <p className="card-text">{f.name}</p>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                padding: ".5rem 1.5rem",
                backgroundColor: "#73A9DF",
                borderRadius: ".5rem",
                transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
              to={`/dashboard/${f.name}`}
            >
              Explore
            </Link>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="dashboard-parent">
      <Nav/>
      <div className="lower-landing">
        <h1 className="mt-5">Explore Shops Nearby</h1>

        <div className="shop-cards">
          {shop}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
