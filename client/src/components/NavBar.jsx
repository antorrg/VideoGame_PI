

import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getAllGames } from "../Redux/actions";

export default function NavBar(){
  
  const path = window.location.pathname;
  const pathSearch = "/home";
  const dispatch = useDispatch();
  
  const handleRefresh = (event) => {
    dispatch(getAllGames());
  }

    return(
        <nav className={style.nav}>
            <div className={style.btns}>
                <Link to="/"><button className={style.btnNav}> WELCOME PAGE</button></Link>
            <div className={style.search}>{path === pathSearch ? <SearchBar/> : null}</div>

                <Link  to="/form"><button className={style.btnNav}>CREATE</button></Link>

                <button className={style.btnNav} onClick={(event) => handleRefresh(event)}>REFRESH</button>
            <div className={style.nav}>
                <h2 className={style.homeTitle}>Video Games</h2>
            </div>
            </div>
        </nav>
    );
    
  };
    
    // const NavBar = () => {
    //   return (
    //     <div className={style.nav}>
    //       <h2 className={style.homeTitle}>Video Games</h2>
    //       <NavLink to={'/'} className={style.linkTitle}><h3>Exit</h3></NavLink>
    //       <form>
    //         <input placeholder="Search" type="search" />
    //         <button type="submit">Search</button>
    //       </form>
    //     </div>
    //   );
    // };
    
    // export default NavBar;