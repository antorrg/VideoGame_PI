import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import style from "./styles/Detail.module.css";

function Detail() {
  const [game, setGame] = useState({});

  const { id } = useParams();
  console.log(id);
  
  //Llamado al Server
  useEffect(() => {
    axios(`http://localhost:3001/${id}`).then(({ data }) => {
      if (data.name) {
        setGame(data);
      } else {
        window.alert("Error fetching game");
      }
    });
    return setGame({});
  }, [id]);


  
  return (
    <div className={style.cont} id={id}>
      <div>
        <img className={style.image} src={game?.image} alt={game?.name} />
      </div>
      <div className={style.text}>
        <h1> {game?.name}</h1>
        <h3>Genres: {game?.genres}</h3>
        <h3>Description:</h3>
        <div
        className={style.descriptionDiv}
        dangerouslySetInnerHTML={{ __html: game?.description }}
      />
        <h3>Platforms: {game?.platforms}</h3>
        <h3>Released: {game?.released}</h3>
        <h3>Rating: {game?.rating}</h3>
        <NavLink to={`/home`}>
          <h3>Return to Home:</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
