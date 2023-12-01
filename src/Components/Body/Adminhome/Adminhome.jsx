import React from 'react'
import './Adminhome.css'
import { useLocation } from 'react-router-dom'

const Adminhome = () => {
    const location=useLocation()
    const username = location.state && location.state.username;
  return (
    <div>
      <div className="adminhome-main">
        <h3>Admin : {username}</h3>
      </div>
    </div>
  )
}

export default Adminhome
