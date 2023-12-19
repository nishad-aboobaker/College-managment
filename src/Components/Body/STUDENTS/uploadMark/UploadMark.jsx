import React, { useState } from "react";
import "./UploadMark.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UploadMark() {
  const navigate=useNavigate()

    const {id}=useParams()
  const [Mark, setMark] = useState({
    StudentId:id,
    attendance: "",
    internal: {
      Graphics: "",
      Discreet: "",
      Android: "",
    },
    external: {
      Graphics: "",
      Discreet: "",
      Android: "",
    },
  });

  const handleChangeInternal = (e) => {
    setMark((prevMark) => ({
      ...prevMark,
      internal: { ...prevMark.internal, [e.target.name]: e.target.value },
    }));
  };

  const handleChangeExternal = (e) => {
    setMark((prevMark) => ({
      ...prevMark,
      external: { ...prevMark.external, [e.target.name]: e.target.value },
    }));
  };

  const handleChangeAttendance = (e) => {
    setMark((prevMark) => ({ ...prevMark, attendance: e.target.value }));
  };

  const handleUpload = async(e) => {
        e.preventDefault(e);
        const res = await axios.post("http://localhost:3041/college/uploadMark", {
          ...Mark,
        });
        if (res.status == 201) {
          alert("mark Uploaded")
          navigate('/staffHome')
        } else {
          alert("data not added");
        }
  };

  return (
    <div>
      <div className="main-form">
        <p className="main-title">Upload mark</p>

        <div className="flex">
          <label>
            <span>Internal</span>
            <input
              className="main-input"
              onChange={handleChangeInternal}
              type="number"
              placeholder="Graphics"
              name="Graphics"
            />
            <input
              className="main-input"
              onChange={handleChangeInternal}
              type="number"
              placeholder="Discreet"
              name="Discreet"
            />
            <input
              className="main-input"
              onChange={handleChangeInternal}
              type="number"
              placeholder="Android"
              name="Android"
            />
          </label>

          <label>
            <span>External</span>
            <input
              className="main-input"
              onChange={handleChangeExternal}
              type="number"
              placeholder="Graphics"
              name="Graphics"
            />
            <input
              className="main-input"
              onChange={handleChangeExternal}
              type="number"
              placeholder="Discreet"
              name="Discreet"
            />
            <input
              className="main-input"
              onChange={handleChangeExternal}
              type="number"
              placeholder="Android"
              name="Android"
            />
          </label>
        </div>

        <label>
          <span>attendance</span>
          <input
            className="main-input"
            onChange={handleChangeAttendance}
            type="number"
            placeholder=""
            required
          />
        </label>

        <button className="submit" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadMark;
