import {NavLink} from 'react-router-dom';
import style from './styles/Card.module.css'

function Card( {game} ) {
 const { id, name, image, genres} = game;
  console.log(id)
    return (
      <div className={style.cardContainer} id={id}>
        <NavLink to={`/detail/${id}`}>
          <h3>{name}</h3>
        </NavLink>
        <h5>Genres: {genres.join(', ')}</h5>
        <img src={image} alt="Image not found." />
      </div>
    );
 
  
}

export default Card;
