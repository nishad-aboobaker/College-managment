import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

function StudentsDetails() {
    const {id}=useParams()
    const [studentsDetails, setStudentsDetails] = useState([]);

    const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3041/college/getStudentsDetails/${id}`
          );
          setStudentsDetails(res.data);
          console.log(setStudentsDetails);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, [id]);
    
  return (
    <div>
      {/* <h1>{id}</h1> */}


       
      <div className="parent">
        <div id="staff-details">
          <div id="photo-container">
              <img
              id="photo"
              src={studentsDetails.photo}
              alt="Staff Photo"
            />
          </div>
          <div id="details">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{studentsDetails.name}</td>
                </tr>
                <tr>
                  <th>Admission No</th>
                  <td>{studentsDetails.admnno}</td>
                </tr>
                <tr>
                  <th>Course</th>
                  <td>{studentsDetails.course}</td>
                </tr>
                <tr>
                  <th>Semester</th>
                  <td>{studentsDetails.semester}</td>
                </tr>
                <tr>
                  <th>Tutor</th>
                  <td>{studentsDetails.tutor}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{studentsDetails.address}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{studentsDetails.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{studentsDetails.phone}</td>
                </tr>
                <tr>
                  <th>Date Of Birth</th>
                  <td>{studentsDetails.dob}</td>
                </tr>
              </tbody>
            </table>
        <div className="box">
        <div className="button-container">
              <button className="btnss">Delete</button>
              <button className="btnss">Update</button>
        </div>
        </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default StudentsDetails
