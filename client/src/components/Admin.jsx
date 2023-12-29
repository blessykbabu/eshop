import React from "react";
import { Link } from "react-router-dom";
export default function Admin(){
    return(
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
                <Link to='/new/product' className="nav-link active">Add New One</Link>
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
             
              <li className="nav-item m-2">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  {" "}
                  SigOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}