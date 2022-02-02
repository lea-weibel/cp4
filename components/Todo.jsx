import style from "../styles/Todo.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
        params: { category: "todo" },
      })
      .then((res) => setItems(res.data));
  }, []);

  const postItem = () => {
    axios.post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/items`, {
      category: "todo",
      content: content,
      done: false,
    });
    setContent("");
  };

  return (
    <section className={style.section}>
      <h2 className="title">TO DO:</h2>
      <div className={style.container}>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={content}
            className={style.txtInput}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className={style.addBtn}
            onClick={() => postItem()}
          >
            ADD
          </button>
        </div>
        {items?.map((item) => {
          return (
            <label
              htmlFor="item"
              className="item"
              key={item._id}
              style={{ textDecorationLine: checked ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                name="item"
                id="item"
                className="input"
                onChange={() => setChecked(!checked)}
              />
              {item.content}
            </label>
          );
        })}
      </div>
    </section>
  );
}
