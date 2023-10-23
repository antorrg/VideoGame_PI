import style from ".././styles/SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllGames, getByName } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      // Perform the search in the state with the name entered
      dispatch(getByName(searchTerm));
      // Navigate to the home page with the name as a parameter
      navigate(`/home/${searchTerm}`);

      //Delete the value of the search field
      setSearchTerm("");
    } else {
      // If a name is not entered, get all games
      dispatch(getAllGames());
      // Navigate to the home page
      navigate("/home");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Si se presiona la tecla "Enter," activa la búsqueda
      handleSearch();
    }
  };

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyPress}
        className={style.stylSelect }
      />
      <button onClick={handleSearch} className={style.pageNavbutton  }>Search</button>
    </div>
  );
}

export default SearchBar;
