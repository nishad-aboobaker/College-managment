import React, { useState } from "react";
import "./staffForgotPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function staffForgotPassword() {
  const navigate=useNavigate()
  const [Val, SetVal] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    SetVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming Val.phone, Val.email, and Val.password hold the phone number, email, and new password respectively
      const res = await axios.get(
        `http://localhost:3041/college/staffVerifyDetails/${Val.phone}`
      );
      if (res.data.email === Val.email) {
        const newPassword = { password: Val.password };
        const patchRes = await axios.patch(
          `http://localhost:3041/college/staffResetPassword/${Val.phone}`,
          newPassword
        );
        if (patchRes.status === 201) {
          alert(patchRes.data); // Assuming the response contains a message
          navigate('/stafflogin');
        } else {
          console.log("Password reset failed");
          alert("Password reset failed")
        }
      } else {
        console.log("Email verification failed");
        alert("Email verification failed")
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      // Handle errors, show appropriate messages, or navigate as needed
    }
  };
  

  return (
    <>
      <div className="main-container-box">
        <div className="main-form-box">
          <div className="main-form">
            <span className="title">Forgot password</span>
            <span className="subtitle">
              Reset password with your phone and email.
            </span>
            <div className="form-container">
              <input
                type="text"
                onChange={handleChange}
                className="input"
                name="phone"
                placeholder="Registered Phone Number"
              />
              <input
                type="email"
                onChange={handleChange}
                className="input"
                name="email"
                placeholder="Registered Email"
              />
              <input
                type="password"
                onChange={handleChange}
                className="input"
                name="password"
                placeholder="New Password"
              />
            </div>
            <button onClick={handleSubmit}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default staffForgotPassword;
