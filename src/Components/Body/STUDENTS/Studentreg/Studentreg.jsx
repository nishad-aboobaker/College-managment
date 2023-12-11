import React from 'react'
import './Studentreg.css'
import { Link } from 'react-router-dom'
const Studentreg = () => {
  return (
    <div>
       <div className="studentreg-main">
        <div className="studentreg-card">
            <div className="student-reg-card-heading"><h4>Student Register</h4></div>
          <form action="" className='student-reg-form'> 
          <div> <input type="text" placeholder='Full Name' /></div>
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Register</button>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/studentlogin'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Studentreg
