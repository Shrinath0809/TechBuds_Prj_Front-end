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
      let { data } = await axiosInstance.get(`/posts`);
      setUserData(data);
    };
    fetchData();
  }, []);

  let handleDelete = (id) => {
    axiosInstance.delete(`/posts/${id}`);
    window.location.assign("/viewUser");
  };

  return (
    <section className={style.view_container}>
      <div className={style.view_content}>
        <h1>Users Detail</h1>
        <table className={style.view_data}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>User ID</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.userName}</td>
                  <td>{x.id}</td>
                  <td>
                    <div className={style.btn}>
                      <button
                        className={style.update_btn}
                        onClick={() => {
                          navigate(`/updateName/${x.id}`);
                        }}
                      >Update</button>
                      <button
                        className={style.delete_btn}
                        onClick={() => {
                          handleDelete(x.id);
                        }}
                      >Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ViewUser;
