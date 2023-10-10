const {Genre}=require('../Base');




const genres = async(req,res)=>{
    const  genresDb = await Genre.findAll();
    return genresDb;
};

module.exports = genres;

