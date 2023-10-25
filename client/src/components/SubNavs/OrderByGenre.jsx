import style from '../styles/SubNavs.module.css'
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getGamesForGenre } from "../../Redux/actions";


export default function OrderByGenre() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const onFilterGen = (event) => {
    dispatch(getGamesForGenre(event.target.value));
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);
  

  return (
    <div>
      <select className={style.stylSelect} onChange={(event) => onFilterGen(event)}>
        <option value="All">
          {''}
          Filter by Genre{" "}
        </option>
        {genres.map((gen) => (
          <option key={gen.name} value={gen.name}>
            {gen.name}
          </option>
        ))}
      </select>
    </div>
  );
}
