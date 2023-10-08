const {Router}=require('express');
const usersRouter=Router(); 

const {getGamesHandler,getDetailHandler}=require('../handlers/gamesHandlers');
const {getGenresHandler} = require('../handlers/genresHandler');

usersRouter.get('/',(getGamesHandler));


 
usersRouter.get('/:id',(getDetailHandler));


usersRouter.get('/', (getGenresHandler));


module.exports=usersRouter;
