const { getAllGames } = require("./gamesControlers");
const { Videogame, Genre } = require("../dataBase");

const createGameDB = async (name,description,image,released, genres,platforms,rating) => {
  const allVideogames = await getAllGames();
  const videoGFound = allVideogames.find((game) => game.name.toLowerCase() === name.toLowerCase()
  );
  if (videoGFound) {
    res.status(404).send("A videogame with this name already exists");
  } else {
    const newGame = await Videogame.create({
      name,
      description,
      image,
      released,
      genres,
      platforms, 
      rating,
    });
    const dbGenre = await Genre.findAll({
      where: { name: genres },
    });
    await newGame.addGenre(dbGenre);
    return newGame;
  }
};

module.export = createGameDB;
//(Object.values(platforms)),