

// .............................yup.......................
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from 'react-router-dom';
import { object, string, number } from "yup";
import axios from "axios";
import Loading from "./Loading";
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";
export default function NewProduct() {
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [loading, setLoading] = useState();
  const initialValues = {
    name: "",
    category: "",
    price: "",
    quantity: "",
    pimage:""
    
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/addproduct",
        values,
     
      );

      console.log("data Submitted", response.data);

     
      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
      }
      resetForm();
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      // console.log("response.data.errors::",response.data.errors);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3 style={{ textAlign: "center", padding: 20, color: "gray" }}>
              Prduct Entry
            </h3>
            <div className="regfrm">
              <div className="container mx-auto col-sm-12 col-md-12 col-lg-3">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                    name: string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Required"),
                    category: string().required("Required"),

                    price:string().required("Required"),
                      quantity: string().required("Required"),

                    // image:require("Required"),

                  })}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form>
                      <div
                        className="shadow-lg bg-body rounded text-center"
                        style={{ backgroundColor: "white", opacity: 0.75 }}
                      >
                        <div
                          className="mb-3 "
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Product Name
                            <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.name && <div>{backendError.name}</div>}
                          {backendError.name_empty && (
                            <div>{backendError.name_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        <div
                          className="mb-3 "
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="category"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Category
                            <Field
                            type="text"
                            id="category"
                            name="category"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="category"
                            component="div"
                            style={{ color: "red" }}
                          />
                         
                       
                          {backendError.category && (
                            <div>{backendError.category}</div>
                          )}
                          
                          </label>
                         
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="price"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Price
                            <Field
                            type="text"
                            id="price"
                            name="price"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="price"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.price && (
                            <div>{backendError.price}</div>
                          )}
                          </label>
                          
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="quantity"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Quantity
                            <Field
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="quantity"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.quantity_empty && (
                            <div>{backendError.quantity_empty}</div>
                          )}
                          </label>
                          
                        </div>
 
                         <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="pimage"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Image
                            <Field
                            type="file"
                            id="pimage"
                            name="pimage"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.pimage_empty && (
                            <div>{backendError.pimage_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        {/* <p>Already have an Account? <Link to='/login' style={{textDecoration:"none"}}><span style={{color:"orange"}}> Login Now!</span></Link></p>  */}
                        {/* <Link to='/login'> */}
                          <button className="btn btn-success m-3" type="submit">
                          Add
                        </button>
                        {/* </Link> */}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            {serverSuccess && (
        <SuccessComponent
          message={validationMsg}
        
          onClose={() => setServerSuccess(false)}
        />
      )}
      {serverError && (
        <ErrorComponent
          message={validationMsg}
          onClose={() => setServeError("")}
        />
      )}
          </div>
          
        )}
      </div>

      
    </>
  );
}
