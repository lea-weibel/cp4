import { useState } from "react";
import style from "../styles/List.module.css";

export default function List({ title, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={style.mainContainer} onClick={() => handleClick()}>
      <div
        className={isOpen ? style.listContainerOpen : style.listContainerClosed}
        style={{ backgroundColor: color }}
      >
        <div
          style={{ display: isOpen ? "flex" : "none" }}
          className={style.titleContainer}
        >
          <h2 className="title">{title}:</h2>
          <button className="closeBtn">x</button>
        </div>
        <div
          className={style.listContent}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <label htmlFor="item" className="item">
            <input type="checkbox" name="item" id="item" className="input" />
            Some item
          </label>
        </div>
      </div>
      <h2
        className={style.listTitle}
        style={{ display: isOpen ? "none" : "block" }}
      >
        {title}
      </h2>
    </section>
  );
}
