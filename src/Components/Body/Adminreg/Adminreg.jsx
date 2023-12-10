import React, { useState, useEffect } from "react";
import "./Adminreg.css";
import { Link } from "react-router-dom";
import wave from "../../../images/wave.png";
import bg from "../../../images/bg.svg";
import avatar from "../../../images/avatar.svg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminreg = () => {
  const navigate = useNavigate();
  const [Val, setVal] = useState({
    name: "",
    username: "",
    password: "",
  });

  /////toast messege/////
  const success = () =>
    toast.success("Registration Succesfull", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });



  /////input style/////
  const js = () => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  };

  useEffect(() => {
    js();
  }, []);

  /////get data from inputs/////
  const handleChange = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };


  /////add data to db/////
  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const res = await axios.post("http://localhost:3041/college/addadmin", {
      ...Val,
    });
    if (res.status == 201) {
      success();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("data not added");
    }
  };

  return (
    <div className="admin-login">
      <img className="wave" src={wave} />
      <div className="container">
        <div className="img">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} />
            <h2 className="title">Admin Registration</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Name</h5>
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  className="input"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <input type="submit" className="btn" value="Register " />
            <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminreg;
