import style from "./viewStyles/Landing.module.css";
import { NavLink } from "react-router-dom";


function Landing() {
  return (
    <div className={style.home}>
      <div className={style.imageContainer}>
        </div>
      <div className={style.containerTitle}>
        <h1 className={style.titleLanding}>Welcome to VIDEOGAMES</h1>
      </div>
        <div >
        <NavLink to="/home">
          <button className={style.pageNavigationButton }>ENTER</button>
        </NavLink>
        </div>
    </div>
  );
}

export default Landing;
