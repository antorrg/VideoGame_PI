const {cleanGenre}=require('../utils/index');
const {Genre}=require('../dataBase');
const axios= require('axios');
require('dotenv').config();
const {URL_GEN, API_KEY} = process.env;

const fillGenTable = async(req,res)=>{
    try {
        // Hacer una solicitud a la API para obtener datos de géneros
        const response = (await axios.get(`${URL_GEN}${API_KEY}`)).data;
        const genresData= response;
        //Verificar si ya hay géneros en la base de datos, si no, entonces los crea
        const existingGenres = await Genre.findAll();
        if (existingGenres.length === 0) {
          await Genre.bulkCreate(cleanGenre(genresData));
          console.log('Tabla "genres" llenada exitosamente.');
        } else {
          console.log('La tabla "genres" ya contiene datos.');
        }
      } catch (error) {
       console.error({error: error.message});
        
       }
  };

  module.exports={
    fillGenTable
  };