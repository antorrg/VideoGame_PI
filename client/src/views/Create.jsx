
import style from "./viewStyles/Create.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame,  getAllGenres, getAllGames } from "../Redux/actions";
import validate from '../utils/validate';
import { platforms } from "../utils/platSource";



export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const all = useSelector((state) => state.allGames);
  const [error, setError] = useState({});
 
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);

  

  const handleRefresh = () => {
    dispatch(getAllGames());
  };

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value, //to fill the state with each prop
    });
    setError(
      validate({
        ...input,
        [event.target.value]: event.target.value,
      })
    );
  }

  function handleSelectGenre(event) {
    /* check if genres is not double */
    if (!input.genres.includes(event.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, event.target.value],
      });
    }
  }

  function handleSelectPlatform(event) {
    /* check if platforms is not double */
    if (!input.platforms.includes(event.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, event.target.value],
      });
    }
  }

  function handleCleanGenre(gen) {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== gen),
    });
  }

  function handleCleanPlatform(plat) {
    setInput({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== plat),
    });
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    let avoidRepetion = all.filter((name) => name.name === input.name);
    if (avoidRepetion.length !== 0) {
      alert("Please choose another name, it already exists");
    } else {
      if (
        Object.keys(error).length !== 0 ||
        !input.genres.length ||
        !input.platforms.length
      ) {
        alert("All fields must be completed");
      } else {
        if (Object.keys(error).length === 0 && input.genres.length > 0) {
         
          await dispatch(createVideogame(input));
          await dispatch(getAllGames());
          setInput({
            name: "",
            description: "",
            platforms: [],
            image: "",
            released: "",
            rating: "",
            genres: [],
          });
          
          navigate("/home");
         
          
        }
      }
    }
  }

  return (
    <div className={style.div}>
      <form className={style.form} onSubmit={(event) => handleSubmit(event)}>
        <div >
          <h1 className={style.title}> Create your Videogame </h1>
          <div className={style.boxCreate}>
            <div>
            <div className={style.home}>
              <NavLink
                to="/home"
                style={{ textDecoration: "none" }}
                onClick={(event) => handleRefresh(event)}
              >
                <button className={style.back}> Cancel </button>
              </NavLink>
            </div>

              <div className={style.group}>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  autoComplete="off"
                  onChange={(event) => handleChange(event)}
                  className={style.input}
                />{" "}
                <label className={style.label}> Name: </label>
                {error.name && <p className={style.error}>{error.name}</p>}
              </div>

              <div className={style.group}>
                <input
                  type="text"
                  value={input.image}
                  name="image"
                  onChange={handleChange}
                  className={style.input}
                />
                <label className={style.label}> Add an image URL</label>
                {error.image && (
                  <p className={style.error}>{error.image}</p>
                )}
              </div>

              <div className={style.group}>
                <input
                  className={style.input}
                  type="date"
                  min="1990-01-31"
                  max="2024-12-31"
                  value={input.released}
                  name="released"
                  step="1"
                  onChange={handleChange}
                  autoComplete="off"
                />
                <label className={style.label}>Released: </label>
                {error.released && (
                  <p className={style.error}>{error.released}</p>
                )}
              </div>

              <div className={style.group}>
                <input
                  className={style.input}
                  type="number"
                  min="1"
                  max="5"
                  value={input.rating}
                  name="rating"
                  step= "0.01"
                  onChange={handleChange}
                />
                <label className={style.label}>Rating: </label>
                {error.rating && <p className={style.error}>{error.rating}</p>}
              </div>
            </div>

            <div className={style.right}>
              <div className={style.group}>
                <select
                  onChange={(event) => handleSelectPlatform(event)}
                  className={style.select}
                >
                  <option className={style.option} value="" disabled hidden>
                    Choose Platforms..
                  </option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform} className={style.option}>
                      {platform}
                    </option>
                  ))}
                </select>
                <label className={style.label}>Platforms: </label>
                {input.platforms.map((platform) => (
                  <div className={style.map}>
                    <div className={style.option_title}>{platform}</div>
                    <button
                      className={style.btnx}
                      onClick={() => handleCleanPlatform(platform)}
                      key={platform}
                      value={platform}
                    >
                      <span className={style.x}>X</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className={style.group}>
                <select
                  onChange={(event) => handleSelectGenre(event)}
                  className={style.select}
                >
                  <option className={style.option} value="" disabled hidden>
                    Choose Genres..
                  </option>
                  {genres.map((gen) => (
                    <option
                      key={gen}
                      value={gen.name}
                      name="genres"
                      onChange={handleChange}
                      className={style.option}
                    >
                      {gen.name}
                    </option>
                  ))}
                </select>
                <label className={style.label}>Genres: </label>
                {input.genres.map((gen) => (
                  <div className={style.map}>
                    <div className={style.option_title}>{gen}</div>
                    <button
                      className={style.btnx}
                      onClick={() => handleCleanGenre(gen)}
                      key={gen}
                      value={gen}
                    >
                      <span className={style.x}>X</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className={style.group}>
                <textarea
                  className={style.textareacr}
                  required
                  type="text"
                  value={input.description}
                  name="description"
                  placeholder="Enter your text here..."
                  onChange={handleChange}
                />
                <label className={style.description}> Description: </label>
                {error.description && (
                  <p className={style.error}>{error.description}</p>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <button onSubmit={handleSubmit} className={style.submit}>
              Create Videogame
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
