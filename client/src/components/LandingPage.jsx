import { Link } from "react-router-dom";
import styles from "./styles/Landing.module.css";

function Landing() {
  return (
    <div className={styles.imageLanding}>
      <div className={styles.containerTitle}>
        <h1 className={styles.titleLanding}>Welcome to VIDEOGAMES</h1>
        <Link to="/home">
          <button className=''>ENTER</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
