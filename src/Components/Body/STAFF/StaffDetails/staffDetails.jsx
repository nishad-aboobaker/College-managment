import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./StaffDetails.css";

const StaffDetails = () => {
  let { id } = useParams();
  const navigate=useNavigate()

  const [staffDetails, setStaffDetails] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3041/college/getStaffDetails/${id}`
      );
      setStaffDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Render a loading message while data is being fetched
  if (!staffDetails) {
    return <p>Loading...</p>;
  }

  const dltstaff = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this staff member?");
  
      if (!confirmed) {
        return;
      }
      const res = await axios.delete(
        `http://localhost:3041/college/deleteStaff/${id}`
      );
      if (res.status === 200) {
        alert("Staff deleted successfully");
      } else {
        console.log("Deletion was not successful");
      }
  
      navigate('/adminHome');
    } catch (error) {
      console.error("An error occurred while deleting staff:", error.message);
    }
  };


  const staffUpdate=(id)=>{
    navigate(`/staffUpdate/${id}`)
  }
  
  

  return (
    <>
      <div className="parent">
        <div id="staff-details">
          <div id="photo-container">
              <img
              id="photo"
              src={staffDetails.photo}
              alt="Staff Photo"
            />
          </div>
          <div id="details">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{staffDetails.name}</td>
                </tr>
                <tr>
                  <th>Employee ID</th>
                  <td>{staffDetails.empid}</td>
                </tr>
                <tr>
                  <th>Salary</th>
                  <td>{staffDetails.salary}</td>
                </tr>
                <tr>
                  <th>Designation</th>
                  <td>{staffDetails.designation}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{staffDetails.address}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{staffDetails.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{staffDetails.phone}</td>
                </tr>
                <tr>
                  <th>Experience</th>
                  <td>{staffDetails.experience}</td>
                </tr>
              </tbody>
            </table>
        <div className="box">
        <div className="button-container">
              <button onClick={()=>{dltstaff(staffDetails._id)}} className="btnss">Delete</button>
              <button onClick={()=>{staffUpdate(staffDetails._id)}} className="btnss">Update</button>
        </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDetails;
