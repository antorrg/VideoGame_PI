const {Router}=require('express');
const gamesRouter=require('./gamesRouter');
const postRouter=require('./postRouter');

const mainRouter=Router();

mainRouter.use('/', gamesRouter);

mainRouter.use('/post', postRouter);




module.exports=mainRouter;