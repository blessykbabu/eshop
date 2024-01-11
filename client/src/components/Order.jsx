import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Order() {
  const { id } = useParams("");
  console.log("user id get:",id)


const [orderProducts, setOrderProducts] = useState([]);
 
  
  useEffect(() => {
 
    getOrder();
  }, []);

  const getOrder = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/fetch/order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data); 
        setOrderProducts(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          //  not found error
          console.log("Product not  found");
        } else {
          console.error("Error fetching product details:", error);
        }
      }
  };


  
  return (
    <>
     {/* <h3 >My Orders</h3> */}
      <div className="container">
       
      <h3  style={{textAlign:"center"}}>My Orders</h3>
          
          {orderProducts.map((item) => {
            return(
          <div key={item._id} className="mb-3">
            <div className="row" >
              
              <div className="col-md-3" >
                <div className="card mb-3">
                  <img
                    src={item.pid.pimage}
                    height={300}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">name {item.pid.name}</h5>
                    <p className="card-text"> ${item.pid.price}
                      <span className="text-warning"></span>
                     
                    </p>

                    {/* <button
                      // onClick={() => handleOrderClick(list)}
                      className="btn btn-primary"
                    >
                      Order
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          {/* );
        })} */}
        </div>
            )
})}
      </div>
    </>
  );
}
