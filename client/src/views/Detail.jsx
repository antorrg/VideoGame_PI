import style from "./viewStyles/Detail.module.css";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatFields } from "../utils/formaters";
import { cleanState, getById, returnHome} from "../Redux/actions";

function Detail() {
 
  const dispatch = useDispatch();
  const gamesById = useSelector((state) => state.gamesById);

  const { id } = useParams();

  useEffect(() => {
   
    dispatch(getById(id));
  }, [dispatch, id]);

  const handleRefresh = () => {
    dispatch(returnHome())
    dispatch(cleanState());
  };
  const isgame = gamesById; 

  let genresFil = formatFields(isgame.genres);
  let platforFil = formatFields(isgame.platforms);

  return (
    <div className={style.home}>
      <div className={style.cont} id={id}>
        <div>
          <img className={style.image} src={isgame?.image} alt={isgame?.name} />
        </div>
        <div className={style.text}>
          <h1> {isgame?.name}</h1>
          <NavLink to= '/home' onClick ={handleRefresh}>
            <h3>Return to Home:</h3>
          </NavLink>
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
