//Importacion de dependecias:
import {useState, useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux';
//De Redux:
import {getAllGenres,getAllGames}from '../../Redux/actions';

//Importacion de modulos:
import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import style from './Home.module.css';

function Home() {
  const dispatch =useDispatch();
  const allGenres = useSelector((state)=>state.allGenres);
  const allGames = useSelector((state)=>state.allGames);
  
 useEffect(()=>{
  dispatch(getAllGenres());
  dispatch(getAllGames());
 },([dispatch]));

return(
  <div className={style.home}>
     <h2 className={style.homeTitle}>Video Games</h2>
        <NavBar/>
        <Cards allGames={allGames} allGenres = {allGenres}/>
  </div>
)

}
export default Home;
