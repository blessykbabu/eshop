import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/5.jpg";
import cr2 from "../image/6.jpg";
import cr4 from "../image/10.jpg"
import cr5 from '../image/13.jpg'

function UserComponent() {
  return (
    <>


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
export default UserComponent;