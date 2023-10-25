const {Videogame, Genre}=require('../Base');
const axios= require('axios');
require('dotenv').config();
const {URL, API_KEY} = process.env;
const {infoCleaner,infoClean2 } = require('../helpers/index');
const { validate, v4: isUuidv4 } = require('uuid');


const getAllGames = async ()=> {
  try {
    let gamesCreated = [];

    const  gamesDB = await Videogame.findAll({
      include: [{ model: Genre, attributes: ['name'], // Especifica las columnas que deseas incluir del modelo Genre
        through: {
          attributes: [] // Esto evita que se incluyan las columnas adicionales de la tabla intermedia 'genreGame'
        }
      }]
    });
    //esta funcion era para que no me retorne los generos con propiedad nombre
    const gamesWithGenres = gamesDB.map((game) => {
      const genreNames = game.Genres.map((genres) => genres.name);
      return {
        ...game.get({ plain: true }),
        genres: genreNames, // Concatena los nombres de géneros con comas
      };
    });
     gamesCreated = gamesWithGenres;
    
    //Info de la API:
  
    const gamesAPI = [];
    for(let page = 1; page<=1; page++){
    const url = `${URL}games?${API_KEY}&page=${page}`

    const infoApi = (await axios.get(url)).data;
    const gamesFiltered = infoCleaner(infoApi);
    gamesAPI.push(gamesFiltered)
    }
    
    const gamesApiF = gamesAPI.flat(1);

  return [...gamesCreated, ...gamesApiF];
  
  } catch (error) {
    throw new Error({error:error.message})
  }
   
};

const gameByName = async(name)=>{
  try {
    const infoApi = (await axios.get(`${URL}games?search=${name}&${API_KEY}`)).data;
    const gameApi = infoCleaner(infoApi);
    const gameFiltered = gameApi.filter(game => game.name.toLowerCase() === name.toLowerCase());
    if(gameFiltered.length>0){
        return gameFiltered;
    }
    // Si no se encontró en la API, busca en la base de datos
    const gameDB = await Videogame.findAll({ where: { name: name }, include: [{
        model: Genre, attributes: ['name'], through: { attributes: []} }] });
    if(gameDB.length === 0){
        throw new Error("Videogame not found");
    }
    return gameDB;

  } catch (error) {
    throw new Error({error:error.message})
  }
  
};

const getGameById= async(id,source)=>{
  try {
    if(source !== 'api'){
      const validUuid=id;
      if (!validate(validUuid) && !isUuidv4(validUuid)) {
        throw new Error("This Id is not valid");
      }
        const infodb =(await Videogame.findByPk(id, {include: [{
            model: Genre, attributes: ['name'], through: { attributes: []} }]}));
            if(infodb.length === 0){
              throw new Error("Videogame not found");
          }
        return infodb;
    }
    else{
        const info=(await axios.get(`${URL}games/${id}?${API_KEY}`)).data;
        const infoWash = infoClean2(info);
        return infoWash;
    }
    
  } catch (error) {
    throw new Error(error);
  }
    
   
};

module.exports = {
    getAllGames,
    gameByName,
    getGameById
}
