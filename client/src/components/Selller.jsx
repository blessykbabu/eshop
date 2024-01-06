import react, { useState } from "react";
import { Link } from "react-router-dom";
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
import Icon from "./Icon";
export default function Seller() {
  const [selecteIcon, setSelecteIcon] = useState(null);
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };
  return (
    <>
     <div class="container who mt-4">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> Seller Hub</h3>
          </div>
        </div>
      </div>
      <div className="top-right-div">
        <Link to="/seller/icon" onClick={() => handleClick(<Icon />)}>
          <img src={profile} />
        </Link>
      </div>
      {/* <div className="who"><h5>Seller Hub</h5></div> */}
     
      <div className="top-side">{selecteIcon}</div>
      <div className=" container rotating-text-wrapper">
        <h2>Welcome to Ezy Mart</h2>
        <h2>Place your Order</h2>
        <h2>Hurry up!!!!!</h2>
      </div>
      {/* card start */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
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
                      //   to="/user/profile"
                      //   onClick={() => handleLinkClick(<Profile/>)}
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
                      //   to="/user/forgot/password"
                      //   onClick={() => handleLinkClick(<ResetPassword />)}
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
                    <Link
                      to="/add/product"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Add New Product
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td className="p-4">
                    <Link style={{ textDecoration: "none", color: "black" }}>
                      View Products
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="col">
          <Routes>
          <Route path="/forgot/password" element={<ResetPassword/>} />
            </Routes>
          </div> */}

          <div className="col">
            <div className="container ">
              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
