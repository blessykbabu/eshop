import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/23.webp";
import n5 from "../image/n5.jpg";
import cr4 from "../image/23.webp";
import cr5 from "../image/23.webp";
import cr6 from "../image/14.jpg";
import n1 from "../image/n1.jpg";
import n2 from "../image/n2.jpg";
import n3 from "../image/n3.jpg";
import n4 from "../image/n4.webp";
import n6 from "../image/n6.jpg";
import n7 from "../image/n7.jpg";
import n9 from "../image/n9.jpg";
import n10 from "../image/n10.jpg";
export default function HomeComponent() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
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
              <li className="nav-item m-4" style={{ color: "white" }}>
                Free Shipping
              </li>
              <li className="nav-item m-4" style={{ color: "white" }}>
                call us 7898-4444-800
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* top navbar close */}
      {/* <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
   
          <button
            className="navbar-toggler start"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Shop By Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page">
                    Phones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Bags</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Clothes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Laptops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Shoes</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="btn-group">
            <button
              className="btn btn-Info dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
            >
              Brands
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item">Nike</Link>
              </li>
              <li>
                <Link className="dropdown-item">Apple</Link>
              </li>
              <li>
                <Link className="dropdown-item">Calvin Klein</Link>
              </li>
              <li>
                <Link className="dropdown-item">Polo</Link>
              </li>
            </ul>
          </div>
          <div>
          <ul style={{listStyle:"none"}}>
            <li><Link style={{textDecoration:"none",color:"black"}}>Shop
            </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav> */} 

      {/* nav close */}

      <div className=" container rotating-text-wrapper">
        <h2>Welcome to Ezy Mart</h2>
        <h2>Place your Order</h2>
        <h2>Hurry up!!!!!</h2>
      </div>
      {/* animation end */}

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={n1} height={290} className="d-block w-100" alt="..." />
            </div>
            <div className="row mt-4">
              <img
                src={n3}
                // height={"200"}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* carousal */}
          <div className="col">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={n10}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={n7}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={n9}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={n2} height={290} className="d-block w-100" alt="..." />
            </div>
            <div className="row mt-4">
              <img src={n4} height={340} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}

      {/* <div className="container border-top">
        <footer>
          <div className="row mt-4">
            <div className="col border-end">
              <h3>CUSTOMER SERVICE</h3>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col border-end">
              <h3>LINKS</h3>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col">
              <h3>NEWSLETTER</h3>
              <h5>Sign Up for Our Newsletter</h5>
              <form>
                <div className="mb-3">
    
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Please  Enter Your Email"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary ms-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
}
