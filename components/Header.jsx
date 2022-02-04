import style from "../styles/Header.module.css";
import Link from "next/link";

export default function Header({ btn }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>LOGO</h1>
      <Link passHref href={btn === "Settings" ? "/settings" : "/"}>
        <button className={style.settingsBtn}>{btn}</button>
      </Link>
    </header>
  );
}
