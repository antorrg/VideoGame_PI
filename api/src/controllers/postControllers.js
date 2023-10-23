const { getAllGames } = require("./gamesControlers");
const { Videogame, Genre } = require("../Base");

const createGameDB = async (name,description,image,released, genres,platforms,rating,req,res) => {
  try {
if (!name || !description || !image || !released || !genres || !platforms || rating === undefined) {
  throw new Error("Missing or invalid input data")
   
 }
  const allVideogames = await getAllGames();
  const videoGFound = allVideogames.find((game) => game.name.toLowerCase() === name.toLowerCase()
  );
  if (videoGFound) {
    throw new Error("This game already exists")
  
  } else {
  
  //const genreArray = genres.split(',').map(genre => genre.trim());
      
        const newGame = await Videogame.create({
          name,
          description,
          image,
          released,
          platforms,
          rating,
        });
  
        // Buscar los objetos de género correspondientes en la base de datos
        const dbGenres = await Genre.findAll({
          where: { name: genres },
        });
  
        // Asociar los géneros al nuevo juego
        await newGame.addGenres(dbGenres);
        
        return newGame;
  }
} 
catch(error){
  return res.status(500).json({ error: error.message });
}

};

module.exports = createGameDB;




