import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Products() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      console.log("token in shop",token)
      axios
        .get(
          `http://localhost:3000/fetch/products?page=${currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLists(response.data.data.datas);
          console.log("total_pages", response.data.data.total_pages);
          setTotalPages(response.data.data.total_pages);
        })
        .catch((error) => {
          console.log("get error:", error.message ? error.message : error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [currentPage, pageSize, loading]);

  const productsInRows = [];
  for (let i = 0; i < lists.length; i += 4) {
    const rowProducts = lists.slice(i, i + 4);
    productsInRows.push(rowProducts);
  }

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            {productsInRows.map((rowProducts, rowIndex) => (
              <div className="row" key={rowIndex}>
                {rowProducts.map((list, index) => (
                  <div className="col" key={index}>
                    <div className="card" style={{ width: "18rem", margin: "10px" }}>
                      <img src={list.pimage} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{list.name}</h5>
                        <p className="card-text">Rs: {list.price}</p>
                        <a href="#" className="btn btn-primary">
                          Order
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}