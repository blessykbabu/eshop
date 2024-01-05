import React from "react";
export default function Footer(){
    return(
        <>

<div className="container border-top m-5">
        <footer>
          <div className="row mt-4">
            <div className="col border-end">
              <h5>CUSTOMER SERVICE</h5>
              <ul style={{listStyle:"none"}}>
                <li >Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col border-end">
            <h5>LINKS</h5>
              <ul style={{listStyle:"none"}}>
                <li >Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col">
            <h5>NEWSLETTER</h5>
              <h6>Sign Up for Our Newsletter</h6>
              <form>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label> */}
    <input
      type="email"
      className="form-control m-3"
      id="exampleInputEmail1"
      placeholder="Please  Enter Your Email"
      aria-describedby="emailHelp"
    />
   
  </div>

 
  <button type="submit" className="btn btn-primary ms-5">
    Submit
  </button>
</form>

            </div>
          </div>
        </footer>
      </div>
        </>
    )
}