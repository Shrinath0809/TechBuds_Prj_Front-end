import React, { useState } from 'react'
import axiosInstance from '../../helpers/axiosInstance';
import style from './CreateName.module.css'

function CreateName() {
    let [userName, setUserName] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log({userName});
        let payload = {userName};
        axiosInstance.post("/posts",payload)
    }
  return (
    <div className={style.createName_container}>
      <form action="">
        <legend>Create User</legend>
        <label htmlFor="userName">Enter User Name </label>
        <input type="text" name="userName" id="userName" onChange={(e) => {
                    setUserName(e.target.value)
        }} /><br/>
        <button onClick={handleSubmit} className={style.createName_btn}>Add</button>
      </form>
    </div>
  )
}

export default CreateName