const express = require('express'); 
const mainRouter = require('./routes/mainRouter');    
//Middlewares
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const server = express();


server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*' ); // update to match the domain you will make the request from  'http://localhost:3000'
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use(express.json());

server.use(mainRouter);




module.exports =server;