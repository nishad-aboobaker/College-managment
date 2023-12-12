import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import wave from "../../../../images/wave.png";
import "./Adminhome.css";

const Adminhome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);

  const checkLocalStorage = async () => {
    try {
      const admintoken = JSON.parse(localStorage.getItem("admintoken"));
      if (!admintoken) {
        console.error("Token not found in localStorage");
        return;
      }
      const res = await axios.post(
        "http://localhost:3041/college/fetchUsername",
        null,
        {
          headers: { Authorization: `Bearer ${admintoken}` },
        }
      );
      setUser(res.data.msg);
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, e.g., show a notification to the user
      navigate("/adminlogin");
    } finally {
      setLoading(false);
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("admintoken");
    navigate("/");
  };

  const registerBtn = () => {
    navigate("/staffreg");
  };

  const btnclk=(id)=>{
    navigate(`/staffDetails/${id}`)
  }

  const getStaffDetails = async () => {
    try {
      const res = await axios.get("http://localhost:3041/college/getstaff");
      setStaff(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching staff details:", error);
      // Handle the error gracefully, e.g., show a notification to the user
    }
  };

  useEffect(() => {
    checkLocalStorage();
    getStaffDetails();
  }, [navigate]);

  return (
    <div>
      <div className="adminhome-main">
        <img className="wavee" src={wave} alt="bg" />
        <div className="navbarr">
          {loading ? (
            <span className="adminName">Loading...</span>
          ) : (
            <span className="adminName">{user}</span>
          )}
          <button onClick={registerBtn} className="registerbtn">
            Register Staff
          </button>
          <button onClick={deleteToken} className="registerbtn">
            Logout
          </button>
        </div>

        <div className="main-cont">
          <div className="containerr">
            {staff.map((staffMember,index) => (
              <div key={index} className="main-card">
                <div className="card-border-top"></div>
                <div className="staff-pic">
                  <img className="stfpic" src={staffMember.photo} alt="" />
                </div>
                <span>{staffMember.name}</span>
                <p className="job">{staffMember.designation}</p>
                <button className="clkbtn" onClick={()=>{btnclk(staffMember._id)}}>Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
