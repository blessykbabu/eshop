

// .............................yup.......................
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from 'react-router-dom';
import { object, string, number } from "yup";
import axios from "axios";
import Loading from "./Loading";
import './reg.css';
import img1 from '../image/22.webp'
import ErrorComponent from "../components/ErrorComponent";
import SuccessComponent from "../components/SuccessComponent";
import google from "../image/google.png";
import facebook from "../image/facebook.png";
export default function Registration() {
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [loading, setLoading] = useState();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    district: "",
    category:"",
   
    password:""
    
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/adduser",
        values,
     
      );

      console.log("Form Submitted", response.data);

     
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
              Create Your Account
            </h3>
            
            <div className="regfrm">
            {/* <div className="image-reg">
            <img
                src={img1}
                height={"635px"}
                width={"400px"}
                // className="d-block w-100"
                alt="..."
              />
              </div> */}
              <div className="col-sm-12 col-md-12 col-lg-3 rr">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                    name: string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Required"),
                    email: string().email().required("Required"),

                    phone: string()
                      // .typeError("That doesn't look like a phone number")
                      // .positive("A phone number can't start with a minus")
                      // .integer("A phone number can't include a decimal point")
                      .matches(
                        /^[6-9]\d{9}$/,
                        "Please enter valid phone number."
                      )
                      .min(10, "Invalid phone number,it must contain 10 digit")
                      .required("Required"),
                    district: string().required("Required"),

                    password: string().required("Required"),
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
                            Name
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
                            htmlFor="email"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email
                            <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.email_exist && (
                            <div>{backendError.email_exist}</div>
                          )}
                          {backendError.email && (
                            <div>{backendError.email}</div>
                          )}
                          {backendError.email_empty && (
                            <div>{backendError.email_empty}</div>
                          )}
                          {backendError.email_invalid && (
                            <div>{backendError.email_invalid}</div>
                          )}
                          </label>
                         
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="phone"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Phone
                            <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.phone_empty && (
                            <div>{backendError.phone_empty}</div>
                          )}
                          </label>
                          
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="district"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            District
                            <Field
                            type="text"
                            id="district"
                            name="district"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.district_empty && (
                            <div>{backendError.district_empty}</div>
                          )}
                          </label>
                          
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="category"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            I am a Seller/Buyer
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
                          {backendError.category_empty && (
                            <div>{backendError.category_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="password"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Password
                            <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.password_empty && (
                            <div>{backendError.password_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        <p>Already have an Account? <Link to='/login' style={{textDecoration:"none"}}><span style={{color:"orange"}}> Login Now!</span></Link></p>
                        {/* <Link to='/login'> */}
                          <button className="btn btn-primary m-3" type="submit">
                          Create
                        </button>
                        {/* </Link> */}
                        <div className="d-flex m-5">
                          SignIn With
                          <img
                    src={google}
                    height={30}
                    className="d-block ms-3 mb-3 me-3"
                    alt="..."
                  />
                  SignIn With
                       <img
                    src={facebook}
                    height={30}
                    className="d-block ms-2"
                    alt="..."
                  />
                  </div>
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
