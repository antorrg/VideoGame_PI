import styles from "./viewStyles/Landing.module.css";
import { NavLink } from "react-router-dom";


function Landing() {
  return (
    <div className={styles.home}>
      <div className={styles.containerTitle}>
        <h1 className={styles.titleLanding}>Welcome to VIDEOGAMES</h1>
        <NavLink classname = {styles.pageNavigationButton }to="/home">
          <button className=''>ENTER</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Landing;
