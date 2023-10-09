const {  getAllGames, gameByName, getGameById} = require('../controllers/gamesControlers');

const getGamesHandler= async (req,res)=>{
        const {name} = req.query;
        try {
             if(name){
                 const getByName = await gameByName(name)
                 res.status(200).json(getByName);
             }
            else{
                const response = await getAllGames()
                res.status(200).json(response);
                };
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    
 };

const getDetailHandler = async (req,res)=>{
    const {id} = req.params;
    const source = isNaN(id)? "dataBase" : "api";
    try {
        const response = await getGameById(id,source);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};


module.exports = {
    getGamesHandler,
    getDetailHandler
}