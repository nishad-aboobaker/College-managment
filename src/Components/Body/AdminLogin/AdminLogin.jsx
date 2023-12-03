import React, { useState,useEffect } from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom'
import wave from '../../../images/wave.png'
import bg from '../../../images/bg.svg'
import avatar from '../../../images/avatar.svg'
import axios from "axios";

const AdminLogin = () => {

  const js=()=>{
    const inputs = document.querySelectorAll(".input");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){ 
      parent.classList.remove("focus");
    }
  }
  
  
  inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });
  }
  
  useEffect(()=>{
    js()
  },[])


  const [Val, setVal] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    console.log(Val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const res = await axios.post("http://localhost:3041/college/adminlogin", {
      ...Val,
    });

    if (res.status == 201) {
        // navigate("/");
        alert("Login Successfull")
    } else {
      alert("data not added");
    }
  };



  return (
    <div className='admin-login'>
    <img className="wave" src={wave} />
<div className="container">
<div className="img">
  <img src={bg} />
</div>
<div className="login-content">
  <form onSubmit={handleSubmit}>
    <img src={avatar} />
    <h2 className="title">Welcome Admin</h2>
           <div className="input-div one">
              <div className="i">
                  <i className="fas fa-user"></i>
              </div>
              <div className="div">
                  <h5>Username</h5>
                  <input className='input' onChange={handleChange} type="text" name='username' required />
              </div>
           </div>
           <div className="input-div pass">
              <div className="i"> 
                 <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                 <h5>Password</h5>
                 <input className='input'minLength="7" onChange={handleChange} type="password" name='password' required />
             </div>
          </div>
          <Link to={"/adminregister"}>Dont have an account ?</Link>
          <input type="submit" className="btn" value="Login" />
        </form>
    </div>
</div>
</div>
  )
}


export default AdminLogin
