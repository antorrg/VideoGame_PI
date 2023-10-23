import style from "./viewStyles/Detail.module.css";
import { useEffect } from "react";
import { NavLink, useParams, } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {formatFields} from '../utils/formaters';
import {getById} from '../Redux/actions';


function Detail() {
  const dispatch = useDispatch();
  const gamesById = useSelector((state) => state.gamesById);
  
  
  
  const { id } = useParams();

  //const location = useLocation;
  // axios(`http://localhost:3001/${id}`).then(({ data }) => {
  //   if (data.name) {
  //     setIsgame(data);
  //   } else {
  //     window.alert("Error fetching game");
  //   }
  // });
  

  useEffect(() => {
    dispatch(getById(id));
  },[dispatch,id]);


  
  
  const isgame = gamesById; // Obtenemos el juego por su id

 
  let genresFil = formatFields(isgame.genres);
  let platforFil = formatFields(isgame.platforms);
  
  return (
    <div classname ={style.home}>
    <div className={style.cont} id={id}>
      <div>
        <img className={style.image} src={isgame?.image} alt={isgame?.name} />
      </div>
      <div className={style.text}>
        <h1> {isgame?.name}</h1>
        <NavLink to={`/home`}><h3>Return to Home:</h3></NavLink>
        <h3>Genres: {genresFil}</h3>
        <h3>Description:</h3>
        <div
        className={style.descriptionDiv}
        dangerouslySetInnerHTML={{ __html: isgame?.description }}
      />
        <h3>Platforms: {platforFil}</h3>
        <h3>Released: {isgame?.released}</h3>
        <h3>Rating: {isgame?.rating}</h3>
      </div>
    </div>
    </div>
  );
}

export default Detail;
