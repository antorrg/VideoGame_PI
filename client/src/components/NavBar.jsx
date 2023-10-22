import style from "./styles/NavBar.module.css";
//import { useState } from "react";

import { NavLink } from "react-router-dom";
import {SearchBar, OrderByName} from "./SubNavs/index";
import OrderByGenre from "./SubNavs/OrderByGenre";
export default function NavBar() {
  //const [order, setOrder] = useState("");

  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <div className={style.linksTitle}>
        <NavLink to="/">
          <button>WelcomePage</button>
        </NavLink>
      </div>
      <div className={style.linksTitle2}>
        <OrderByName/>
      </div>
      <div className={style.linksTitle3}>
        <OrderByGenre/>
      </div>
      
     
      
      <div className={style.linkTitle}>
        <NavLink to="/form">
          <button>CREATE</button>
        </NavLink>
      </div>
      <SearchBar />
    </div>
  );
}

// const dispatch = useDispatch();
// const [selectedSort, setSelectedSort] = useState("null");

// const handleSortChange = (event) => {
//   const selectedValue = event.target.value;
//   setSelectedSort(selectedValue);

//   // Solo dispara la acción si se selecciona una opción válida (no "null")
//   if (selectedValue !== "null") {
//     dispatch(sortGame(selectedValue));
//   }
// };
