import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

function Card({ game, genre }) {
  const { id, name, image, genreId } = game;

  // Busca el nombre del género correspondiente en la lista de géneros
  const genre = genres.find((g) => g.id === genreId);
  const genreName = genre ? genre.name : 'Unknown Genre';

  return (
    <div className={style.cardContainer} id={id}>
      <NavLink to={`/detail/${id}`}>
        <h3>Name: {name}</h3>
      </NavLink>
      <h4>Genre: {genreName}</h4>
      <img src={image} alt="Image not found." />
    </div>
  );
}

export default Card;
