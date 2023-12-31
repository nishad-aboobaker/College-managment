import React, { useState } from 'react';
import './staffForgotUsername.css';
import axios from 'axios';

function staffForgotUsername() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3041/college/staffVerifyDetails/${phone}`
      );
      alert(`Your Username is ${res.data.username}`);
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  return (
    <div className='main-boxx'>
      <div className="form-container">
        <div className="logo-container">Forgot Username</div>

        <div className="form">
          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              id="phone"
              onChange={handleChange}
              name="phone"
              placeholder="Enter your phone"
              required
            />
          </div>
          <button className="form-submit-btn" onClick={handleSubmit} type="submit">
            Send Username
          </button>
        </div>
      </div>
    </div>
  );
}

export default staffForgotUsername;
