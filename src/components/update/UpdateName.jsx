import React, { useEffect, useState } from 'react'
import style from './Update.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';

function UpdateName() {
    let [userName,setUserName] = useState("");

    const {id} = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        let fetchData = async() => {
            let {data} = await axiosInstance.get(`http://localhost:5000/app/users/${id}`)
            setUserName(data.userName);
        }
        fetchData();
    },[])

    let handleUpdate = (x) => {
        x.preventDefault();
        console.log({userName});
        let payload = {
            userName
        }
        axiosInstance.put(`http://localhost:5000/app/users/${id}`,payload)
        navigate(`/viewUser`);
    }

  return (
    <div className={style.update_container}>
        <form action="">
                <legend>Update Name</legend>
                <label htmlFor="userName">User Name : </label>
                <input type="text" value={userName} name="userName" id="userName" onChange={(e) => {
                    setUserName(e.target.value)
                }} /> <br />
                <button onClick={handleUpdate} className={style.update_btn}>Update</button>
        </form>
    </div>
  )
}

export default UpdateName