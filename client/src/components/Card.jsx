import { NavLink } from 'react-router-dom';
import style from './styles/Card.module.css';



function Card({game, genres}) {
  const {id,name, genreId,image}=game;
  console.log(game);
   // Encuentra los nombres de los géneros correspondientes a los IDs en el juego
   const genre = genres.find((g) => g.id === genreId);
   const genreName = genre ? genre.name : 'Unknown Genre';
    return (
      <div className={style.cardContainer} id={id}>
        <NavLink to={`/detail/${id}`}>
          <h3>Name:{name}</h3>
        </NavLink>
        <h4>Genre:{genreName}</h4>
        <img src={image} alt='Image not found.' />
      </div>
    );
  }
  
  export default Card;
  