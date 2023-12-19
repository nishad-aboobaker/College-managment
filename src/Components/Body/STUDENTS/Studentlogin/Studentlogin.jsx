import React, { useState } from "react";
import "./Studentlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Studentlogin = () => {
  const navigate=useNavigate()
  const [Val, setVal] = useState({
    phone: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const studentResponse = await axios.get(
        `http://localhost:3041/college/getStudent/${Val.phone}`
      );
  
      if (studentResponse.data.dob === Val.dateOfBirth) {
        navigate(`/studentHome/${studentResponse.data._id}`)
      } else {
        alert("Student Validation failed");
      }
    } catch (error) {
      console.error("Error:", error.response.data.msg);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="first">
      <div className="studentlogin-main">
        <div className="studentlogin-card">
          <div className="student-login-card-heading">
            <h4>Student Login</h4>
          </div>
          <div className="student-login-form">
            <div>
              <input
                onChange={handleChange}
                type="number"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
              />
            </div>
            <button className="LOGINBTN" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Studentlogin;
