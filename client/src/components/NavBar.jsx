

import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getAllGames } from "../Redux/actions";
import { useNavigate } from 'react-router-dom';

export default function NavBar(){
  const navigate = useNavigate();
  
  
  

    return(
      <div className={style.nav}>
      <h2 className={style.homeTitle}>Video Games</h2>
      <form>
        <input placeholder="Search" type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
    );
    
  };
