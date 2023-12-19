import React, { useState, useEffect } from "react";
import "./studentHome.css";
import avatar from "../../../../images/avatar.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

function StudentHome() {
  const { id } = useParams();
  const [marksData, setMarksData] = useState(null);
  const [detailsData, setDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMarks = async () => {
    try {
      const marksResponse = await axios.get(
        `http://localhost:3041/college/getMarks/${id}`
      );
      setMarksData(marksResponse.data);
    } catch (error) {
      setError("Error fetching marks data");
      console.error(error);
    }
  };

  const fetchDetails = async () => {
    try {
      const detailsResponse = await axios.get(
        `http://localhost:3041/college/getBasicDetails/${id}`
      );
      setDetailsData(detailsResponse.data);
    } catch (error) {
      setError("Error fetching details data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchMarks();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="main-div">
        <section>
          <img className="avtr" src={detailsData.photo} alt="Student Photo" />
          <h2>{detailsData.name}</h2>

          <div className="details-section">
            <h3>Basic Details</h3>
            <table>
              <tbody>
            <tr>
              <th>Admission Number</th>
              <td>{detailsData.admnno}</td>
            </tr>
              <tr>
              <th>Date of Birth</th>
              <td>{detailsData.dob}</td>
            </tr>
            <tr>
              <th>Course</th>
              <td>{detailsData.course}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{detailsData.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{detailsData.phone}</td>
            </tr>
              </tbody>
            </table>
          </div>

          <div className="marks-section">
            <h3>Internal Marks</h3>
            <table>
              <tbody>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
                <tr>
                  <td>Discreet Mathematics</td>
                  <td>{marksData?.internal?.Discreet || "N/A"}</td>
                </tr>
                <tr>
              <td>Computer Grapphics</td>
              <td>{marksData?.internal?.Graphics || "N/A"}</td>
            </tr>
            <tr>
              <td>Android Programming</td>
              <td>{marksData?.internal?.Android || "N/A"}</td>
            </tr>
              </tbody>
            </table>

            <h3>External Marks</h3>
            <table>
              <tbody>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
                <tr>
                  <td>Discreet Mathematics</td>
                  <td>{marksData?.external?.Discreet || "N/A"}</td>
                </tr>
                <tr>
              <td>Computer Grapphics</td>
              <td>{marksData?.external?.Graphics || "N/A"}</td>
            </tr>
            <tr>
              <td>Android Programming</td>
              <td>{marksData?.external?.Android || "N/A"}</td>
            </tr>
              </tbody>
            </table>
          </div>

          <div className="attendance-section">
            <h3>Attendance Details</h3>
            <table>
              <tbody>
                <tr>
                  <th>Total Attendance</th>
                  <td>{marksData?.attendance || "N/A"}/200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentHome;
