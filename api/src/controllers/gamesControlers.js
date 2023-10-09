const {Videogame}=require('../dataBase');
const axios= require('axios');
require('dotenv').config();
const {URL, API_KEY} = process.env;
const {infoCleaner,infoClean2 } = require('../utils/index');

const getAllGames = async ()=> {
    const  gamesDB = await Videogame.findAll();
    const infoApi = (await axios.get(`${URL}games?${API_KEY}`)).data;
    const gamesAPI = infoCleaner(infoApi);
    return [...gamesDB, ...gamesAPI];
};

const gameByName = async(name)=>{
    const infoApi = (await axios.get(`${URL}games?search=${name}&${API_KEY}`)).data;
    const gameApi = infoCleaner(infoApi);
    const gameFiltered = gameApi.filter(game => game.name.toLowerCase() === name.toLowerCase());
    if(gameFiltered.length>0){
        return gameFiltered;
    }
    // Si no se encontró en la API, busca en la base de datos
    const gameDB = await Videogame.findAll({ where: { name: name } });
    if(gameFiltered.length === 0){
        throw new Error("Videogame not found");
    }
    return gameDB;
};

const getGameById= async(id,source)=>{
    if(source !== 'api'){
        const infodb =(await Videogame.findByPk(id));
        return infodb;
    }
    else{
        const info=(await axios.get(`${URL}games/${id}?${API_KEY}`)).data;
        const infoWash = infoClean2(info);
        return infoWash;
    }
    // const game = source === 'api' ? (await axios.get(`${URL}games/${id}?${API_KEY}`)).data
    //                              : (await Videogame.findByPk(id));
    // const infoLimp=infoCleaner(game);
    // return infoLimp;
    
};

module.exports = {
    getAllGames,
    gameByName,
    getGameById
}