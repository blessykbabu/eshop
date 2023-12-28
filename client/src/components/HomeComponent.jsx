import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './home.css'
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
export default function HomeComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex">
          <Link to="" style={{ textDecoration: "none", color: "white" }}>
            YourCart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-4">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item m-4">
                <Link
                  to="/registration"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container m-4">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={shoes}  height={"400px"} className="d-block w-100" alt="..." />
              {/* <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={shoes1}   height={"400px"} className="d-block w-100"alt="..." />
              {/* <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={cloth} height={"400px"} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="col">
          <div className="card" style={{ width: "18rem" }}>
          <img src={phone}  height={"400px"} className="d-block w-100"alt="..." />
        </div>
          </div>
        </div>
      </div>

      <div className=" container rotating-text-wrapper">
  <h2>Welcome to YourCart</h2>
  <h2>Place your Order</h2>
  <h2>Hurry up!!!!!</h2>
</div>

    </>
  );
}
