
import React from "react";
import "./Login.css"
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
// import SuccessComponent from "./SuccessComponent";
// import ErrorComponent from "./ErrorComponent";
// import Loading from "./Loading";

export default function Login() {
 
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password:"",
   
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      console.log("values::",values)
      const response = await axios.post(`http://localhost:3000/login`,values);
// console.log("requset post or not");
      console.log("Login:", response.data);
      // localStorage.setItem("token", response.token);
      // location.href = "http://localhost:3000/employee";
      
      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
        const token=response.data.data;
        localStorage.setItem('token',token);
        console.log("token:",token);

      // Check the role and redirect accordingly
      if (response.data.usertype=== 'admin') {
        navigate('/admin/dashboard')

      } else if (response.data.usertype === 'employee') {
        navigate('/employee/dashboard')

      } else {
        console.error("Unknown user:", response.data.usertype);
      }

      }
      resetForm();
      
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      // console.log("response.data.errors::",response.data.errors);
      console.log("error",error)
    } 
  };
 

  return (
    <>
      
          
           
            <div className="lgfrm">
              <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 justify-content-center">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                   
                    email: string().email().required("Required"),
                    password: string()
                .required("Required")
                .min(6, "Password is too short - should be 6 chars minimum"),

                 
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
                        className="shadow-lg bg-body rounded"
                        style={{ backgroundColor: "white", opacity: 0.75 }}
                      >
                      
                        <div className="form-group text-center">
                          
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
                            // placeholder="Email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </label> 
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
                        </div>
                        <div className="form-group text-center">
                          
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
                           // placeholder="Name"
                           className="form-control"
                         />
                         <ErrorMessage
                           name="password"
                           component="div"
                           style={{ color: "red" }}
                         />
                          </label> 
                          
                         {backendError.name_empty && (
                           <div>{backendError.name_empty}</div>
                         )}
                       </div>
                       
                       <div className="text-center">
                        <button className="btn btn-success m-3" type="submit">
                          Login
                        </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
           
          
          
   

      
    </>
  );
}
