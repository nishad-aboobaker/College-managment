import React, { useState } from 'react'
import wave from "../../../../images/wave.png";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Studentreg.css'
import { Link } from 'react-router-dom'
const Studentreg = () => {

  const navigate=useNavigate()
  const {user}=useParams()

  let Photo=""
  const[Val,SetVal]=useState({
    name:"",
    dob:"",
    email:"",
    semester:"",
    admnno:"",
    phone:"",
    course:"",
    address:"",
  })

  const handleChange=(e)=>{
    SetVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    console.log(Val);
  }

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

  const handleSubmit=async(e)=>{
    e.preventDefault(e);
    const res = await axios.post("http://localhost:3041/college/addStudent", {
      ...Val,photo:Photo,tutor:user
    });
    if (res.status == 201) {
      alert("Registration Successfull")
      navigate('/staffHome')
    } else {
      alert("data not added");
    }
  }

  return (
    <div className='admin-staff-reg-color'>
    <div className="admin-staff-reg-head">
      <h2 className='reg-head'>Register New Student</h2>
      <img className='waveee' src={wave} alt="" />
    </div>
    <div className="admin-staff-reg-inputfields">
      <div className="admin-staff-reg-input-row">
              <input type="text" onChange={handleChange} name='name' placeholder='Name'/>
              <input type="date" onChange={handleChange} name='dob' placeholder='Date Of Birth'/>
                <input type="text" onChange={handleChange} name='email' placeholder='Email'/>
                <input type="number" onChange={handleChange} name='semester' placeholder='Semester'/>
      </div>
      <div className="admin-staff-reg-input-row">
              <input type="number" onChange={handleChange} name='admnno' placeholder='Admission Number'/>
              <input type="number" onChange={handleChange} name='phone' placeholder='Phone'/>
                <input type="text" onChange={handleChange} name='course' placeholder='Course'/>
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

export default Studentreg
