import React, { useState } from "react";
 import {authentication} from '../firebase/firebase'
import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";

const Login_Form = () => { 
  const [isPhone, setIsPhone] = useState(true);
  const [otpSent,setOtpSent]=useState(false);
  const [nm,setNm]=useState()
  const [phoneNumber,setPhoneNumber]=useState();
  const [otp,setOtp]=useState(); 
  const [isPending,setIsPending]=useState(false);
  // authentication.languageCode='it'
  // const onChangeHandler = () => {};
  const generateRecaptcha=()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
 
      }
      // ,
      // defaultCountry:"IN"
    }, authentication);
  }
  const sendOtpHandler = async(e) => {
    e.preventDefault();
    setIsPending(true) 

    await axios.get(`http://localhost:5000/checkRegistered/${nm}`)
    .then((res)=>{
      if(res.data.success)
      {
        generateRecaptcha();
        let appVerifier=window.recaptchaVerifier;
        // const pn="+91"+phoneNumber
        // const mm=Number(pn);
        signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
        .then((confirmationResult)=>{
          window.confirmationResult=confirmationResult;
          alert("OTP has been sent")
          // setIsPhone(false);
          setOtp("")
          setOtpSent(true);
        }).catch((err)=>{ 
          console.log(err);
        }).finally(()=>{
        setIsPending(false) 
        })
      }
      else if(res.data.error)
      {
        alert("kindly register to login")
        setIsPending(false) 

      }
    })

    
    // setOtp("")
    // setOtpSent(true)
  };

  const resendOtp=(e)=>{ 
    setIsPending(true)  
    let appVerifier=window.recaptchaVerifier;

    signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
    .then((confirmationResult)=>{
      window.confirmationResult=confirmationResult;
      alert("OTP has been sent")
      // setIsPhone(false);
      setOtp("")
      setOtpSent(true);
    }).catch((err)=>{ 
      alert(err);
      console.log(err);
    }).finally(()=>{
    setIsPending(false) 
    })
  }

  const loginHandler = (e) => {
    e.preventDefault();
    setIsPending(true) 
    let confirmationResult=window.confirmationResult;
    confirmationResult.confirm(otp).then((result)=>{
      console.log(result);
      alert("success")
    }).catch((err)=>{
      alert("wrong otp")
      
      console.log(err)
    }).finally(()=>{
      setIsPending(false); 

    })
    // setIsPhone(true);
  };
 
     

 

  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <div className="logo-img">
            <img src="./images/logo.png" alt="" className="logo" />
          </div>
          <div id="sign-in-button"></div>

          <h3 className="login-text">Login</h3>
          {!otpSent ? (
            <form >
              
              <div className="item">
                <input
                  className="input"
                  // type="tel"
                  type="number" 
                  value={nm}
                  onChange={(e)=>{
                    const num="+91"+e.target.value
                    setNm(e.target.value);
                    setPhoneNumber(num)
                  }}
                  placeholder="Phone Number"
                />
              </div>
              <div className="item submit">
                <button disabled={isPending}  type="submit" onClick={sendOtpHandler}>
                  Send OTP
                </button>
              </div>
              
            </form>
          ) : (
            <form>
              <div className="item">
                <input
                onChange={(e)=>{
                  setOtp(e.target.value)
                }}
                className="input" 
                type="number" 
                value={otp}
                placeholder="Enter OTP" />{" "}
              </div>
              <div className="item submit">
                <button disabled={isPending} type="submit" onClick={loginHandler}>
                  Login
                </button>
              </div>
              <span className="remember">
                {" "}
                <a href="#" onClick={resendOtp}>Resend OTP</a>{" "}
              </span>
            </form>
          )}

          <span className="ac">
            Don't  have an Account? <a href="/register">Sign Up</a>
          </span>
         
        </div>
      </div>
    </>
  );
};

export default Login_Form;
