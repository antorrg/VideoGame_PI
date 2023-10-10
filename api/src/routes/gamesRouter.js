const {Router}=require('express');
const gamesRouter=Router(); 

const {getGamesHandler,getDetailHandler}=require('../handlers/gamesHandlers');
const {getGenresHandler} = require('../handlers/genresHandler');

gamesRouter.get('/genres', getGenresHandler);


gamesRouter.get('/games',(getGamesHandler));


 
gamesRouter.get('/:id',(getDetailHandler));




module.exports=gamesRouter;
