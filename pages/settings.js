import Header from "../components/Header";
import style from "../styles/Settings.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Settings() {
  const [newList, setNewList] = useState("");
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/lists`)
      .then((res) => setLists(res.data));
  }, []);

  const addNewList = () => {
    axios.post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/lists`, {
      name: newList,
    });
    setNewList("");
  };

  const handleDelete = (listId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/lists`, {
        data: { listId },
      })
      .then((res) => console.log("delete list", res.data));
  };

  return (
    <section>
      <Header btn="Home" />
      <div className={style.createSection}>
        <h2 className="title">CREATE NEW LISTS</h2>
        <input
          type="text"
          name=""
          id=""
          value={newList}
          className={style.input}
          onChange={(e) => setNewList(e.target.value)}
        />
        <button
          type="submit"
          className={style.addBtn}
          onClick={() => addNewList()}
        >
          ADD
        </button>
      </div>
      <div className={style.manageSection}>
        <h2 className="title">MANAGE LISTS</h2>
        {lists?.map((list) => {
          return (
            <div className={style.listContainer} key={list._id}>
              <p>{list.name.toUpperCase()}</p>
              <div className="deleteBtn" onClick={() => handleDelete(list._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
