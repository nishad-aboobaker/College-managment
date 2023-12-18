import React, { useState, useEffect } from 'react';
import wave from "../../../../images/wave.png";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function studentUpdate() {
    const navigate=useNavigate()
    const { id } = useParams();
    let Photo = "";
    const [formData, setFormData] = useState({
        email: '',
        semester: '',
        phone: '',
        course: '',
        address: '',
        photo:'',
        name:''
    });

    const handleChange = (e) => {
        setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    const uploadphoto = async (e) => {
        Photo = await convertToBase64(e.target.files[0]);
        setFormData((pre) => ({ ...pre,photo:Photo}));
    };

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        });
    }

    const fetchData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3041/college/getStudentsDetails/${id}`
            );
            setFormData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const res = await axios.patch(
                `http://localhost:3041/college/updateStudent/${id}`,
                { ...formData }
            );
            if (res.status === 201) {
                alert("Update successful");
            } else {
                console.log("Update was not successful");
            }
            navigate(`/StudentsDetails/${id}`)
        } catch (error) {
            console.error("An error occurred while updating staff details:", error.message);
        }
    };

    return (
        <div>
            <div className='admin-staff-reg-color'>
                <div className="admin-staff-reg-head">
                    <h2 className='reg-head'>Update Staff Details</h2>
                    <img className='waveee' src={wave} alt="" />
                </div>
                <div className="admin-staff-reg-inputfields">
                <div className="pic-cont">
                    <img src={formData.photo} alt="" />
                </div>
                </div>
                <div className="admin-staff-reg-inputfields">

                        <div className="admin-staff-reg-input-row">
                            <input type="text" onChange={handleChange} value={formData.name} name='name' placeholder='name' />
                            <input type="text" onChange={handleChange} value={formData.semester} name='semester' placeholder='semester' />
                            <input type="text" onChange={handleChange} value={formData.phone} name='phone' placeholder='Phone' />
                        </div>
                    
                    <div className="admin-staff-reg-input-row">
                        <input type="text" onChange={handleChange} value={formData.course} name='course' placeholder='course' />
                        <input type="text" onChange={handleChange} value={formData.address} name='address' placeholder='Address' />
                        <input type="text" onChange={handleChange} value={formData.email} name='email' placeholder='Email' />
                    </div>
                </div>
                

                <div className="staff-filee">
                    <input type="file" name='photo' onChange={uploadphoto} placeholder='Photo' />
                </div>
                <div className="admin-staff-reg-btn">
                    <button onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default studentUpdate;
