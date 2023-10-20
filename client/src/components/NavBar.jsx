import style from "./styles/NavBar.module.css";
import {useState} from "react";
import { useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import {orderAlphabet } from "../Redux/actions";


export default function NavBar() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  //const sortGames = useSelector((state) => state.sortGames);
  const handlerOrderByName = (event) => {
    dispatch(orderAlphabet(event.target.value));
    setOrder(!order);
  };
 

  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <div className={style.linksTitle}>
        <NavLink to="/"><button>WelcomePage</button></NavLink>
      </div>
      <div className={style.linksTitle}>
      <select className={style.orderAlpha} onChange={handlerOrderByName}>
          <option className={style.option}>Sort by Alphabet</option>
          <option value="A-Z">From A to Z</option>
          <option value= "Z-A">From Z to A</option>
        </select>
      </div>
      <div className={style.linkTitle}>
      <NavLink to="/form"><button>CREATE</button></NavLink>
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