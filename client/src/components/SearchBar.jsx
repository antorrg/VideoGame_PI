
import style from './styles/SearchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getsByName } from "../Redux/actions"; // Importa la acción getByName


export default function SearchBar() {
  let [name, setName] = useState(""); // Crea un estado local para el nombre

  const dispatch = useDispatch();

  
  return (
    <div className={style.searchBar}>
      <input
        className={''}
        type="search"
        placeholder="Example: 'The witcher'"
        onChange='{}'
        value={name}
        name={name}
      />
      <button
        className={''}
        type="submit"
        onClick=''
      >
        <b> •SEARCH•</b>
      </button>
    </div>
  );
}
