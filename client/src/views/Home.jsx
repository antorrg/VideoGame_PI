//Importacion de dependecias:
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
//De Redux:
import { getAllGames, getByName } from "../Redux/actions";

//Importacion de modulos:
import style from "./viewStyles/Home.module.css";
import {Cards, NavBar} from '../components/index2';

function Home() {
  const dispatch = useDispatch();
  const gamesByName = useSelector((state) => state.sortGames);
  const allGames = useSelector((state) => state.allGames);

  //Segunda opcion:
  const { name } = useParams();
 

  //Para Paginacion:
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15; // Número de juegos por página

  const totalPages = Math.ceil(allGames.length / gamesPerPage);

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
  const currentPageDisplay = `Page ${currentPage} of ${totalPages}`;

 
 
  useEffect(() => {
    if (name) {
      // Si hay un nombre en la URL, busca juegos por nombre
      dispatch(getByName(name));
    } else {
      // Si no hay nombre en la URL, obtiene todos los juegos
      dispatch(getAllGames());
    }
    // ...
  }, [dispatch, name]);
console.log(allGames)
  return (
    <div className={style.home}>
      <NavBar />
      <div className={style.pageNavigation}>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPageDisplay}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
       <Cards  allGames={name ? gamesByName : allGames}  currentPage={currentPage} gamesPerPage={gamesPerPage}/>
    </div>
  );
}
export default Home;
