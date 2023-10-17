// import style from './styles/SearchBar.module.css'
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getByName, getAllGames} from "../Redux/actions"; // Añade esta importación

// export default function SearchBar() {
//   let [name, setName] = useState(""); // Crea un estado local para el nombre

//   const dispatch = useDispatch();
//   const getAllGames = useSelector((state) => state.getAllGames);
//   const getByName = useSelector((state) => state.getByName); // Nuevo estado para juegos filtrados

//   function handleInput(event) {
//     event.preventDefault();
//     setName(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(getByName(name)); // Envía el nombre buscado a través de la acción
//     setName(""); // Limpia el campo de búsqueda
//   }

//   return (
//     <div className={style.searchBar}>
//       <input
//         className={style.search}
//         type="search"
//         placeholder="Example: 'The witcher'"
//         onChange={(event) => handleInput(event)}
//         value={name}
//         name={name}
//       />
//       <button
//         className={style.buttonSearch}
//         type="submit"
//         onClick={(event) => handleSubmit(event)}
//       >
//         <b> •SEARCH•</b>
//       </button>
//     </div>
//   );
// }
import style from './styles/SearchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/actions"; // Importa la acción getByName

export default function SearchBar() {
  let [name, setName] = useState(""); // Crea un estado local para el nombre

  const dispatch = useDispatch();

  function handleInput(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getByName(name)); // Usa la acción getByName para buscar juegos por nombre
    setName(""); // Limpia el campo de búsqueda
  }

  return (
    <div className={style.searchBar}>
      <input
        className={style.search}
        type="search"
        placeholder="Example: 'The witcher'"
        onChange={(event) => handleInput(event)}
        value={name}
        name={name}
      />
      <button
        className={style.buttonSearch}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        <b> •SEARCH•</b>
      </button>
    </div>
  );
}
