const {  getAllGames, gameByName} = require('../controllers/usersControlers');

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
            res.status(500).json({error:error.message});
        }
    
};

const getDetailHandler = async ()=>{
    return{
        "message": "Hello wordl with my detail by id!"
    }
};


module.exports = {
    getGamesHandler,
    getDetailHandler
}