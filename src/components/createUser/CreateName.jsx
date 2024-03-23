import React, { useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";
import style from "./CreateName.module.css";

function CreateName() {
  let [user, setUser] = useState("");

  let handleSubmit = async () => {
    console.log({ user });
    let payload = {
      user
    };
    await axiosInstance.post(`http://localhost:5000/app/users`, payload);
  };
  return (
    <section className={style.createName_container}>
      <div>
        <legend>Create Name</legend>
        <label htmlFor="user">User Name </label>
        <input
          type="text"
          name="user"
          id="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit} className={style.createName_btn}>
          Add
        </button>
      </div>
    </section>
  );
}

export default CreateName;
