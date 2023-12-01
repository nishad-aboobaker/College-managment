import React, { useState } from 'react'
import './Adminreg.css'
import { Link } from 'react-router-dom'
import wave from '../../../images/wave.png'
import bg from '../../../images/bg.svg'
import avatar from '../../../images/avatar.svg'
import  axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

const Adminreg = () => {
  const navigate=useNavigate()

  const [Val,setVal]=useState({
    name:"",
    username:"",
    password:"",
    })

    const handleChange=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
      console.log(Val);
    }

    const handleSubmit=async(e)=>{
      e.preventDefault(e);
      const res= await axios.post("http://localhost:3041/college/addadmin",{...Val})
    
        
          if(res.status==201)
          {
            alert("Data Added")
            navigate("/")
          }
          else
          {
            alert("data not added")
          }
    }



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
    <h2 className="title">Admin Registration</h2>
    <div className="input-div one">
              <div className="i">
                  <i className="fas fa-user"></i>
              </div>
              <div className="div">
                  <h5>Name</h5>
                  <input className='input' onChange={handleChange} type="text" name='name' required />
              </div>
           </div>
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
          <input type="submit" className="btn" value="Register " />
        </form>
    </div>
</div>
</div>
  )
}

export default Adminreg
