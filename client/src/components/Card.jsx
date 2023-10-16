import {NavLink} from 'react-router-dom';
import style from './styles/Card.module.css'
import {formatFields} from '../utils/formaters';

function Card( {game} ) {
 const { id, name, image, genres} = game;
 const genreFor = formatFields(genres);
  console.log(id)
    return (
      <div className={style.cardContainer} id={id}>
        <NavLink to={`/detail/${id}`}>
          <h3>{name}</h3>
        </NavLink>
        <h5>Genres: {genreFor}</h5>
        <img src={image} alt="Image not found." />
      </div>
    );
 

  
}

export default Card;
