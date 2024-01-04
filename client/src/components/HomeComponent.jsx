import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/23.webp";
import cr2 from "../image/23.webp";
import cr4 from "../image/23.webp"
import cr5 from '../image/23.webp'
import cr6 from '../image/14.jpg'

export default function HomeComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "gray",
              fontFamily: "cursive",
              fontWeight: "bolder",
              fontSize: 30,
            }}
          >
            Y<span style={{ color: "orange" }}>our</span>
            <span style={{ color: "gray" }}>C</span>art
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      clothes
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active">shop</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
          Search
        </button> */}
            </form>
            <ul className="navbar-nav m-2 mb-2 mb-lg-0">
              {/* <li className="nav-item m-2">
                <Link  to ='/registration' style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  SigUp
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link to='/login'style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  SigIn
                </Link>
              </li> */}




              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome
                </Link>
                <ul className="dropdown-menu">
                  <li>
                  <Link  to ='/registration' style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  SigUp
                </Link>
                  </li>
                  <li>
                  <Link to='/login'style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  SigIn
                </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                 
                </ul>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      {/* nav close */}
<div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
           <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img
                src={cr1}
                height={"1000"}
                className="d-block w-100"
                alt="..."
              />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <img
                src={cr2}
                height={"1000px"}
                className="d-block w-100"
                alt="..."
              />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <img
                src={cr4}
                height={"1000px"}
                className="d-block w-100"
                alt="..."
              />            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>


          <div className="carousel-item">
          <img
                src={cr5}
                height={"1000px"}
                className="d-block w-100"
                alt="..."
              />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>

        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      {/* card start */}
      <div className="container m-4">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={shoes}
                height={"400px"}
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={shoes1}
                height={"400px"}
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={cloth}
                height={"400px"}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={phone}
                height={"400px"}
                className="d-block w-100"
                alt="..."
              />
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
