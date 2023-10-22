import style from "./styles/NavBar.module.css";

import { NavLink } from "react-router-dom";
import {SearchBar, AlphabetOrder, OrderByGenre, OrderByRating, IsCreated} from "./SubNavs/index";
export default function NavBar() {
  

  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <div className={style.linksTitle}>
        <NavLink to="/">
          <button>WelcomePage</button>
        </NavLink>
      </div>
      <div className={style.linksTitle2}>
        <AlphabetOrder/>
      </div>
      <div className={style.linksTitle3}>
        <OrderByGenre/>
      </div>
      
      <div className={style.linkTitle}>
        <NavLink to="/form">
          <button>CREATE</button>
        </NavLink>
      </div>
      <div className={style.linkTitle2}>
        <OrderByRating/>
      </div>
      <div className={style.linkTitle3}>
        <IsCreated/>
      </div>
      <SearchBar />
    </div>
  );
}

