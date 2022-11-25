import React, { useState } from "react";
const Register_Form = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    location:"",
    category:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="logo-img">
            <img src="./images/logo.png" alt="" className="logo" />
          </div>
          <h3 className="login-text">Register Form</h3>
          <form onSubmit={handleSubmit} method="post">
            <div className="item">
              <input
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  name:e.target.value
                })
              }}
              className="input" type="text" placeholder="Name" />
            </div>
            <div className="item">
              <input
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  email:e.target.value
                })
              }}
              className="input" type="email" placeholder="Email" />
            </div>
            <div className="item">
              <input
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  phoneNumber:e.target.value
                })
              }}
              className="input" type="tel" placeholder="Phone Number" />
            </div>
            <div className="item">
              <input
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  location:e.target.value
                })
              }}
              className="input" type="text" placeholder="Location" />{" "}
            </div>
            <div class="item">
              <select onChange={(e)=>{
                setFormData({
                  ...formData,
                  category:e.target.value
                })
              }} className="input">
                <option disabled value="0">Category</option>
                <option value="Student">Student</option>
                <option value="BMW">BMW</option>
                <option value="Citroen">Citroen</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="item submit">
              <button type="submit">Submit</button>
            </div>
            {/* <span className="remember">
              {" "}
              <a href="#">Forgot Password?</a>{" "}
            </span> */}
          </form>
          <span className="ac">
            Already have an Account? <a href="/">Login</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register_Form;
