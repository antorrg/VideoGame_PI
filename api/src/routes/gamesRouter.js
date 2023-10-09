const {Router}=require('express');
const gamesRouter=Router(); 

const {getGamesHandler,getDetailHandler}=require('../handlers/gamesHandlers');
const {getGenresHandler} = require('../handlers/genresHandler');

gamesRouter.get('/',(getGamesHandler));


 
gamesRouter.get('/:id',(getDetailHandler));


gamesRouter.get('/genres', (getGenresHandler));


module.exports=gamesRouter;
