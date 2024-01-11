import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";
export default function Product_Details() {
  const { id } = useParams("");
  const [Data, setData] = useState({});
  const [userData, setuserData] = useState({});
  const [CartData, setCartData] = useState({});

  useEffect(() => {
    getprofile();
    getDetails();
  }, []);
  const getprofile = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("token:", token);

      const response = await axios.get(
        "http://localhost:3000/user/profile",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setuserData(response.data.data);
    } catch {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  // console.log("userid:",userData._id)
  const uid = userData._id;
  // console.log("uid:",uid)
  const getDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/order/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
  const cart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/add/cart/?pid=${id}&uid=${uid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartData(response.data.data);
      alert("product added to the cart");
      console.log(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("not added to cart");
      } else {
        console.error("Error occured:", error);
      }
    }
  };

  const Order = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/add/order/?pid=${id}&uid=${uid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartData(response.data.data);
      alert("Thank you so much for your order! ");
      console.log(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("your order is failed");
      } else {
        console.error("Error occured:", error);
      }
    }
  };


  return (
    <>
      {/* <div className="container banner ">
        <div className="poster">
          <div className="image-container">
            <img src={Data.pimage} alt="Site Image" className="site-image" />
          </div>
          <div className="content">
            <div className="site-title">Name: {Data.name}</div>
            <div className="site-description">Category: {Data.category}</div>
            <a href="#" className="button">
              Start Shopping
            </a>
          </div>
        </div>
      </div> */}

      <div className="container  porder m-2">
        <div className="product">
          <p style={{ color: "green" }}>Available stock {Data.quantity}</p>
          <img src={Data.pimage} height={500} width={500} />
        </div>
        <div className="prodata">
          <table className=" mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{Data.name}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td>{Data.category}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>:</td>
                <td>${Data.price}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>Description</td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{Data.description}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button  onClick={Order} className="btn btn-primary m-2">Order</button>
                  <button onClick={cart} className="btn btn-primary">
                    Add To Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
