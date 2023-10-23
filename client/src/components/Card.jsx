import {NavLink} from 'react-router-dom';
import style from './styles/Card.module.css'
import {formatFields} from '../utils/formaters';

function Card( {game} ) {
 const { id, name, image, genres} = game;
 console.log(genres)
 const genreFor = formatFields(genres);

    return (
      <div className={style.cardContainer} key={id}>
        <NavLink to={`/detail/${id}`}>
          <h3>{name}</h3>
        </NavLink>
        <h5>Genres: {genreFor}</h5>
        <img src={image} alt='Not found'/>
      </div>
    );
 

  
}

export default Card;


// <img src={imageUrl} alt="Image not found." />
// {image ? (
 // <img src={image} alt="Image not found." />
//  ): (<img alt="default" src={videogame} />)}