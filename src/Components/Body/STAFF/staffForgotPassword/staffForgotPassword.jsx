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
      const res = await axios.get(
        `http://localhost:3041/college/staffVerifyDetails/${Val.phone}`
      );
      if (res.data.email === Val.email) {
        const newPassword = { password: Val.password }; // assuming Val.password holds the new password
  
        const patchRes = await axios.patch(
          `http://localhost:3041/college/staffResetPassword/${Val.phone}`,
          newPassword
        );
  
        if (patchRes.status === 201) {
          alert(patchRes.data);
          navigate('/stafflogin')
        }
      } else {
        console.log("failed");
      }
    } catch (error) {
      // console.log(patchRes);
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
