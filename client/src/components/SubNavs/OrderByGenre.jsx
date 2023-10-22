import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getGamesForGenre } from "../../Redux/actions";

export default function OrderByGenre() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  //console.log(genres);
  const onFilterGen = (event) => {
    dispatch(getGamesForGenre(event.target.name));
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);
  
  //?----------------------------------------------------------------------------------
  return (
    <div>
      <select className="" onChange={(event) => onFilterGen(event)}>
        <option hidden value="All">
          {''}
          Filter by Genre{" "}
        </option>
        {genres.map((g) => (
          <option key={g.name} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
}
/*  <select
          className={style.optionGenre}
          onChange={(e) => handlerFilterByGenre(e)}
        >
          <option hidden value="All">
            {" "}
            Filter by Genre{" "}
          </option>
          {allGenres?.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name[0].toUpperCase() + g.name.slice(1)}
            </option>
          ))}
        </select>
        */
/*<label htmlFor="filter">
      <p className=""></p>
      <select name="filter" onChange={onFilterGen}>
        <option value={"All"}>All Genres</option>
        {genres?.map((genre) => {
          return (
            <option value={genre.name} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </label>
    */
