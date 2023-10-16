import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import style from "./styles/Detail.module.css";
import {formatFields} from '../utils/formaters';
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

 
 let genresFil = formatFields(game.genres);
 let platforFil = formatFields(game.platforms);
  
  return (
    <div className={style.cont} id={id}>
      <div>
        <img className={style.image} src={game?.image} alt={game?.name} />
      </div>
      <div className={style.text}>
        <h1> {game?.name}</h1>
        <NavLink to={`/home`}><h3>Return to Home:</h3></NavLink>
        <h3>Genres: {genresFil}</h3>
        <h3>Description:</h3>
        <div
        className={style.descriptionDiv}
        dangerouslySetInnerHTML={{ __html: game?.description }}
      />
        <h3>Platforms: {platforFil}</h3>
        <h3>Released: {game?.released}</h3>
        <h3>Rating: {game?.rating}</h3>
      </div>
    </div>
  );
}

export default Detail;
