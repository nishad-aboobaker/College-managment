import React, { useState } from 'react'
import './StaffReg.css'
import wave from "../../../../images/wave.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const StaffReg = () => {
  const navigate=useNavigate()
  let Photo=""
  const [Val, setVal] = useState({
    name: "",
    username: "",
    email: "",
    salary: "",
    experience: "",
    empid: "",
    password: "",
    phone: "",
    designation: "",
    address: ""
  });

  const uploadphoto=async(e)=>{
    Photo=await convertToBase64(e.target.files[0]);
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
      })
  }

  const handleChange = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const res = await axios.post("http://localhost:3041/college/addstaff", {
      ...Val,photo:Photo
    });
    if (res.status == 201) {
      alert("Registration Successfull")
      navigate('/adminhome')
    } else {
      alert("data not added");
    }
  };
  

  return (
    <div className='admin-staff-reg-color'>
    <div className="admin-staff-reg-head">
      <h2 className='reg-head'>Register New Staff</h2>
      <img className='waveee' src={wave} alt="" />
    </div>
    <div className="admin-staff-reg-inputfields">
      <div className="admin-staff-reg-input-row">
              <input type="text" onChange={handleChange} name='name' placeholder='Name'/>
              <input type="text" onChange={handleChange} name='username' placeholder='Username'/>
                <input type="text" onChange={handleChange} name='email' placeholder='Email'/>
              <input type="text" onChange={handleChange} name='salary' placeholder='Salary'/>
                <input type="text" onChange={handleChange} name='experience' placeholder='Experience'/>
      </div>
      <div className="admin-staff-reg-input-row">
              <input type="text" onChange={handleChange} name='empid' placeholder='Empid'/>
                <input type="text" onChange={handleChange} name='password' placeholder='Password'/>
              <input type="text" onChange={handleChange} name='phone' placeholder='Phone'/>
                <input type="text" onChange={handleChange} name='designation' placeholder='Designation'/>
                <input type="text" onChange={handleChange} name='address' placeholder='Address'/>
      </div>
    </div>
    <div className="staff-filee">
      <input type="file" name='photo' onChange={uploadphoto} placeholder='Photo' />
    </div>
    <div className="admin-staff-reg-btn">
      <button onClick={handleSubmit}>Register</button>
    </div>
  </div>
  )
}

export default StaffReg


