const {Router}=require('express');
const postsRouter=Router(); 
const {createGameHandler}=require('../handlers/postHandlers');

postsRouter.post('/',(createGameHandler));


module.exports=postsRouter;