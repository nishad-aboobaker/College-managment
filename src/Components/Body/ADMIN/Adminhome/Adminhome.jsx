import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import wave from "../../../../images/wave.png";
import "./Adminhome.css";

const Adminhome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        alert("Session Expired. Please Login Again");
        navigate("/adminlogin");
      } finally {
        setLoading(false);
      }
    };

    checkLocalStorage();
  }, [navigate]);

  const deleteToken = () => {
    localStorage.removeItem("admintoken");
    navigate("/");
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
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
            <div className="card">
              <div className="card-border-top"></div>
              <div className="img"></div>
              <span> Person</span>
              <p className="job"> Job Title</p>
              <button> Click</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
