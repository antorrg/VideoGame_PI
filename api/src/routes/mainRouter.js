const {Router}=require('express');
const usersRouter=require('./usersRouter');
const postsRouter=require('./postRouter');

const mainRouter=Router();

mainRouter.use('/', usersRouter);

mainRouter.use('/post', postsRouter);




module.exports=mainRouter;