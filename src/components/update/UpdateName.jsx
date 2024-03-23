import React, { useEffect, useState } from 'react'
import style from './Update.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';

function UpdateName() {
    let [user,setUser] = useState("");

    const {id} = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        let fetchData = async() => {
            let {data} = await axiosInstance.get(`http://localhost:5000/app/users/${id}`)
            console.log(data);
            setUser(data.user);
        }
        fetchData();
    },[])

    // let handleChange = (e) => {
    //     setUserName(e.target.value)
    // }

    let handleUpdate = async () => {
        console.log({user});
        let payload = {
            user
        }
        await axiosInstance.put(`http://localhost:5000/app/users/${id}`,payload)
        navigate(`/viewUser`);
    }

  return (
    <div className={style.update_container}>
        <div>
                <legend>Update Name</legend>
                <label htmlFor="user">User Name </label>
                <input type="text" value={user} name='user' id='user' onChange={(e) => {
        setUser(e.target.value)
    }} /> <br />
                <button onClick={handleUpdate} className={style.update_btn}>Edit</button>
        </div>
    </div>
  )
}

export default UpdateName