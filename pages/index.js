import Header from "../components/Header";
import Todo from "../components/Todo";
import List from "../components/List";

export default function Home() {
  return (
    <>
      <Header />
      <Todo />
      <List title="WISHLIST" color="#f28487" />
      <List title="MOVIE LIST" color="#f99a5b" />
      <List title="BOOK LIST" color="#85CDCA" />
    </>
  );
}
