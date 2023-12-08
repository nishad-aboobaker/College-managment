import React from 'react'
import './index.css'
import wave from '../../../images/wave.png'
import bg from '../../../images/bg.svg'
import avatar from '../../../images/avatar.svg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()


  const admnclk=()=>{
    navigate("/adminlogin")
  }
  const staffclk=()=>{
    navigate("/stafflogin")
  }

  return (

    

    <div className='admin-login'>
    <img className="wave" src={wave} />
<div className="container">
<div className="img">
  <img src={bg} />
</div>
<div className="login-content">
  <form>
    <img src={avatar} />
    <h2 className="title">Welcome</h2>
           <input type="submit" className="btn" onClick={admnclk} value="Admin" />
           <input type="submit" className="btn" onClick={staffclk} value="Staff" />
        </form>
    </div>
</div>
</div>
  )
}

export default Home
