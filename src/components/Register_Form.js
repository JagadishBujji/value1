import React from "react";
const Register_Form = () => {
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="logo-img">
            <img src="./images/logo.png" alt="" className="logo" />
          </div>
          <h3 className="login-text">Register Form</h3>
          <form method="post">
            <div className="item">
              <input className="input" type="text" placeholder="Name" />
            </div>
            <div className="item">
              <input className="input" type="email" placeholder="Email" />
            </div>
            <div className="item">
              <input className="input" type="tel" placeholder="Phone Number" />
            </div>
            <div className="item">
              <input className="input" type="text" placeholder="Location" />{" "}
            </div>
            <div class="item">
              <select className="input">
                <option value="0">Category</option>
                <option value="1">Student</option>
                <option value="2">Others</option>
                {/* <option value="3">Citroen</option>
                <option value="4">Others</option> */}
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
