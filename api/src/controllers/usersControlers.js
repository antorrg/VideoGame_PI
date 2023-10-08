const {Videogame, Genre}=require('../dataBase');
const axios= require('axios');
require('dotenv').config();
const {URL, API_KEY} = process.env;
const {infoCleaner} = require('../utils/index');

const getAllGames = async ()=> {
    const  gamesDB = await Videogame.findAll();
    const infoApi = (await axios.get(`${URL}games${API_KEY}`)).data;
    const gamesAPI = infoCleaner(infoApi);
    return [...gamesDB, ...gamesAPI];
};

const gameByName = async(name)=>{
    const infoApi = (await axios.get(`${URL}games${API_KEY}`)).data;
    const gameApi = infoCleaner(infoApi);
    const gameFiltered = gameApi.filter(game => game.name === name);
    const gameDB= await Videogame.findAll({where:{name:name}});
    return [...gameDB, ...gameFiltered];
};

module.exports = {
    getAllGames,
    gameByName
}
/* GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7  */