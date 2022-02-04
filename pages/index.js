import Header from "../components/Header";
import Todo from "../components/Todo";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [lists, setLists] = useState(null);
  const colors = ["#f28487", "#f99a5b", "#00989c", "#85cdca"];

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/lists`)
      .then((res) => setLists(res.data));
  }, []);

  return (
    <>
      <Header btn="Settings" />
      <Todo />
      {lists?.map((list) => {
        return (
          <List
            title={list.name.toUpperCase()}
            key={list._id}
            color={colors[Math.floor(Math.random() * colors.length)]}
          />
        );
      })}
    </>
  );
}
