import { NavLink } from "react-router-dom";
import style from "./styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <form>
        <input placeholder="Search" type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default NavBar;
