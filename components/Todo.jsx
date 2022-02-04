import style from "../styles/Todo.module.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function Todo() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState(null);

  const handleDone = (item) => {
    console.log("handleDone item", item);
    axios
      .put(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
        itemId: item._id,
        category: item.category,
        content: item.content,
        done: !item.done,
      })
      .then(() => getItems());
  };

  const postItem = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
        category: "TODO",
        content: content,
        done: false,
      })
      .then(() => getItems());
    setContent("");
  };

  const handleDelete = (itemId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
        data: { itemId },
      })
      .then(() => getItems());
  };

  const getItems = useCallback(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
        params: { category: "TODO" },
      })
      .then((res) => setItems(res.data));
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <section className={style.section}>
      <h2 className="title">TO DO:</h2>
      {/* <div className={style.container}> */}
      <div>
        <input
          type="text"
          name=""
          id=""
          value={content}
          className="txtInput"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="addBtn" onClick={() => postItem()}>
          ADD
        </button>
      </div>
      {items?.map((item) => {
        return (
          <div className={style.itemContainer} key={item._id}>
            <label
              htmlFor="item"
              className="item"
              key={item._id}
              style={{
                textDecorationLine:
                  item.done === true ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                name="item"
                id="item"
                className="input"
                onChange={() => handleDone(item)}
                checked={item.done ? "checked" : ""}
              />
              {item.content}
            </label>
            <div className="deleteBtn" onClick={() => handleDelete(item._id)}>
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
      {/* </div> */}
    </section>
  );
}
