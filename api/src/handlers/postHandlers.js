const {cleanGenre}=require('../utils/index');
const {Videogame}=require('../dataBase');
const axios= require('axios');


const createGameHandler = async(req, res) => {
        const {name, description, image, released, rating}= req.body;
        try {
          const response = await createGameDB(name, description, image, released, rating);
          res.status(201).json(response);
        } catch (error) {
          res.status(500).json({error:error.message});
        
        }
     

};


module.exports = {
    createGameHandler,
    
};