const {Genre}=require('../dataBase');
const axios= require('axios');
require('dotenv').config();
const {URL, API_KEY} = process.env;
const {cleanGenre} = require('../utils/index');



const genreDb = async()=>{};

module.exports = {
    fillGenresTable,
    genreDb
}