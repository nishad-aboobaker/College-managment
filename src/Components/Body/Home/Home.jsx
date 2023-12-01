import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <>
    <div className="heading"><h1>
      Welcome
    </h1></div>
    <div className="btn-container">
    <div className='admin-btn'><Link to={'/adminlogin'}>Admin</Link></div>
    <div className='staff-btn'><Link to={'/stafflogin'}>Staff</Link></div>
    </div>

   </>
  )
}

export default Home
