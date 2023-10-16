import { NavLink } from "react-router-dom";
import style from "./styles/NavBar.module.css";


const NavBar = () => {
  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <NavLink to={'/'} className={style.linkTitle}><h3>Exit</h3></NavLink>
      <form>
        <input placeholder="Search" type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default NavBar;
