
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/Create.module.css";
import { createVideogame,  getAllGenres, getAllGames } from "../Redux/actions";
import validate from '../utils/validate';



export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const all = useSelector((state) => state.allGames);
  const history = useNavigate();
  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: "",
    background_image: "",
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

  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
  ];

  const handleRefresh = () => {
    dispatch(getAllGames());
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //to fill the state with each prop
    });
    setError(
      validate({
        ...input,
        [e.target.value]: e.target.value,
      })
    );
  }

  function handleSelectGenre(e) {
    /* check if genres is not double */
    if (!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
  }

  function handleSelectPlatform(e) {
    /* check if platforms is not double */
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
  }

  function handleCleanGenre(g) {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== g),
    });
  }

  function handleCleanPlatform(p) {
    setInput({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== p),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let avoidRepetion = all.filter((n) => n.name === input.name);
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
          dispatch(createVideogame(input));
          alert("Videogame successfully created");
          setInput({
            name: "",
            background_image: "",
            description: "",
            released: "",
            rating: "",
            platforms: [],
            genres: [],
          });
          history.push("/home");
        }
      }
    }
  }

  return (
    <div className={style.div}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.container}>
          <h1 className={style.title}> Create your Videogame </h1>
          <div className={style.boxCreate}>
            <div className={style.left}>
            <div className={style.home}>
              <NavLink
                to="/home"
                style={{ textDecoration: "none" }}
                onClick={(e) => handleRefresh(e)}
              >
                <button className={style.back}> CANCEL </button>
              </NavLink>
            </div>
              <div className={style.group}>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  className={style.input}
                />{" "}
                <label className={style.label}> Name: </label>
                {error.name && <p className={style.error}>{error.name}</p>}
              </div>

              <div className={style.group}>
                <input
                  type="text"
                  value={input.background_image}
                  name="background_image"
                  onChange={handleChange}
                  className={style.input}
                />
                <label className={style.label}> Add an image URL</label>
                {error.background_image && (
                  <p className={style.error}>{error.background_image}</p>
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
                  onChange={handleChange}
                />
                <label className={style.label}>Rating: </label>
                {error.rating && <p className={style.error}>{error.rating}</p>}
              </div>
            </div>

            <div className={style.right}>
              <div className={style.group}>
                <select
                  onChange={(e) => handleSelectPlatform(e)}
                  className={style.select}
                >
                  <option className={style.option} value="" disabled hidden>
                    Choose Platforms..
                  </option>
                  {platforms.map((p) => (
                    <option key={p} value={p} className={style.option}>
                      {p}
                    </option>
                  ))}
                </select>
                <label className={style.label}>Platforms: </label>
                {input.platforms.map((p) => (
                  <div className={style.map}>
                    <div className={style.option_title}>{p}</div>
                    <button
                      className={style.btnx}
                      onClick={() => handleCleanPlatform(p)}
                      key={p}
                      value={p}
                    >
                      <span className={style.x}>X</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className={style.group}>
                <select
                  onChange={(e) => handleSelectGenre(e)}
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
                  placeholder="Your videogame it's about..."
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
              CREATE VIDEOGAME
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
