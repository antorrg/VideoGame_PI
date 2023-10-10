const {Router}=require('express');
const postRouter=Router(); 
const createGameHandler=require('../handlers/postHandlers');

postRouter.post('/',(createGameHandler));


module.exports=postRouter;