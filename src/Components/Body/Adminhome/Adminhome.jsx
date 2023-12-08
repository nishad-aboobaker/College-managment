import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import wave from "../../../images/wave.png";
import "./Adminhome.css";

const Adminhome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
          console.error("Token not found in localStorage");
          return;
        }
        const res = await axios.post(
          "http://localhost:3041/college/adminhome",
          null,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(res.data.msg);
      } catch (error) {
        alert("Session Expired. Please Login Again");
        navigate("/adminlogin");
      } finally {
        setLoading(false);
      }
    };

    checkLocalStorage();
  }, [navigate]);

  const deleteToken = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const registerbtn=()=>{
    navigate('/staffreg')
  }

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
          <button onClick={registerbtn} className="registerbtn">Register Staff</button>
          <button onClick={deleteToken} className="registerbtn">
            Logout
          </button>
        </div>
        <div className="main-cont">
          <div className="containerr">
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div class="card">
              <div class="card-border-top"></div>
              <div class="img"></div>
              <span> Person</span>
              <p class="job"> Job Title</p>
              <button> Click</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
