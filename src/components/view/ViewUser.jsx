import React, { useEffect, useState } from "react";
import style from "./ViewUser.module.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";

function ViewUser() {
  let [userData, setUserData] = useState([]);

  let navigate = useNavigate();

  // let {id} = useParams()

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`http://localhost:5000/app/users`);
      setUserData(data);
    };
    fetchData();
  }, []);

  let handleDelete = (id) => {
    axiosInstance.delete(`http://localhost:5000/app/users/${id}`);
    window.location.assign("/viewUser");
  };

  return (
    <section className={style.view_container}>
      <div>
      <h1>Users Details</h1>
      <div className={style.view_content}>
        <h3>User Name</h3>
        <h3>User ID</h3>
        <h3>Edit/Delete</h3>

        {userData.map((user) => {
          return (
            <>
              <p>{user.user}</p>
              <p>{user._id}</p>
              <div className={style.view_btn}>
                <button  className={style.view_Edit_btn}
                  onClick={() => {
                    navigate(`/updateName/${user._id}`);
                  }}
                >
                  Edit
                </button>
                <button  className={style.view_Delete_btn} onClick={() => {handleDelete(user._id)}}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default ViewUser;
