const genresDb= require('../controllers/genresControllers')


const getGenresHandler= async(req,res)=>{
    try {
     const response = await(genresDb());
     res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message})
    }   

};


module.exports= {
    getGenresHandler
}