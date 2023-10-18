//Importacion de dependecias:
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation} from "react-router-dom";
//De Redux:
import { getAllGames,getAllGenres  } from "../Redux/actions";

//Importacion de modulos:
import NavBar from "./NavBar";
import Cards from "./Cards";
import style from "./styles/Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const allGames = useSelector((state) => state.allGames);
  //const { name } = useParams();
  //const location = useLocation();
  //const queryParams = new URLSearchParams(location.search);
  //const searchName = queryParams.get('name');
  //const [isSearching, setIsSearching] = useState(false);
  //Para Paginacion:
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15; // Número de juegos por página

  const totalPages = 7; //Math.ceil(allGames.length / gamesPerPage);

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
  

  useEffect(() => {
    dispatch(getAllGames());
    //dispatch(getByName());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <NavBar />
        <div>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
       <Cards allGames={allGames} currentPage={currentPage} gamesPerPage={gamesPerPage}/>
    </div>
  );
}
export default Home;

//{searchName ? gamesByName : allGames}