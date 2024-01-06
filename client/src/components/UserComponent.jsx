import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import "./profile-icon.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/5.jpg";
import cr2 from "../image/6.jpg";
import cr4 from "../image/10.jpg";
import cr5 from "../image/13.jpg";
import profile from "../image/profile.png";
import n3 from "../image/n3.jpg";

import ResetPassword from "./ResetPassword";
import Profile from "./profile";
import Icon from "./Icon";
// function Profile() {
//   return <div>Profile Component</div>;
// }

// function Address() {
//   return <div>Address Component</div>;
// }

// function Orders() {
//   return <div>Orders Component</div>;
// }
// function Security() {
//   return <div><ResetPassword/></div>;
// }
function UserComponent() {
  // const [showComponent, setShowComponent] = useState(false);
  // const handleLinkClick = () => {
  //   setShowComponent(true);
  // };
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selecteIcon, setSelecteIcon] = useState(null);

  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };

  return (
    <>
      <div class="container who mt-4">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> Buyer Zone</h3>
          </div>
        </div>
      </div>
      <div className="top-right-div">
        <Link to="/user/icon" onClick={() => handleClick(<Icon />)}>
          <img src={profile} />
        </Link>
      </div>
      <div className="top-side">{selecteIcon}</div>
      {/* <div className="who"><h5>Buyer Zone</h5></div> */}

      <div className=" container rotating-text-wrapper">
        <h2>Welcome to Ezy Mart</h2>
        <h2>Place your Order</h2>
        <h2>Hurry up!!!!!</h2>
      </div>
      {/* card start */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="row">
              <table className="table border ">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td style={{ fontWeight: "bolder" }} className="p-4">
                      Account
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td className="p-4">
                      {" "}
                      <Link
                        to="/user/profile"
                        onClick={() => handleLinkClick(<Profile />)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td className="p-4">
                      <Link
                        to="/user/forgot/password"
                        onClick={() => handleLinkClick(<ResetPassword />)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Account Security
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td className="p-4">
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Address
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td className="p-4">
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Orders
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row bw">
              
                <div class="banner1">
                  <div class="content">
                    <div class="title">Special Offer!</div>
                    <div class="description">
                      Get 20% off on selected items. Limited time offer.
                    </div>
                    <a href="#" class="button">
                      Shop Now
                    </a>
                  </div>
                </div>
            
            </div>
          </div>

          {/* <div className="col">
          <Routes>
          <Route path="/forgot/password" element={<ResetPassword/>} />
            </Routes>
          </div> */}

          <div className="col">
            {selectedComponent}
            <div className="container banner ">
              <div className="poster">
                <div className="image-container">
                  <img src={n3} alt="Site Image" className="site-image" />
                </div>
                <div className="content">
                  <div className="site-title">
                    Explore Our Online Shopping Site
                  </div>
                  <div className="site-description">
                    Discover a wide range of products, exclusive deals, and a
                    seamless shopping experience.
                  </div>
                  <a href="#" className="button">
                    Start Shopping
                  </a>
                </div>
              </div>

              {/* <div className="row">
                <div className="col">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={cloth}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={phone}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* end the main container */}
    </>
  );
}
export default UserComponent;
