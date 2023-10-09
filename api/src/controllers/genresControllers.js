const {Genre}=require('../dataBase');




const genresDb = async(req, res)=>{
    const  genresDb = await Genre.findAll();
    return genresDb;
};

module.exports = {
    genresDb
}