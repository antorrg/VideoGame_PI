const {Router}=require('express');
const gamesRouter=require('./gamesRouter');
const postsRouter=require('./postRouter');

const mainRouter=Router();

mainRouter.use('/', gamesRouter);

mainRouter.use('/post', postsRouter);




module.exports=mainRouter;