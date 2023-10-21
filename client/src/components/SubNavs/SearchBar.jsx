import style from ".././styles/SearchBar.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllGames, getByName } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      // Realiza la búsqueda en el estado con el nombre ingresado
      dispatch(getByName(searchTerm));
      // Navega a la página de inicio con el nombre como parámetro
      navigate(`/home/${searchTerm}`);

      // Borra el valor del campo de búsqueda
      setSearchTerm("");
    } else {
      // Si no se ingresa un nombre, obtiene todos los juegos
      dispatch(getAllGames());
      // Navega a la página de inicio
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
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
