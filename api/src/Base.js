const {Sequelize} = require('sequelize');
const CreateVideoGame = require('./models/createVideoGame');
const CreateGenre = require('./models/createGenre');
require('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging:false, native: false}
);
CreateGenre(sequelize)
CreateVideoGame(sequelize)

const {Videogame, Genre}= sequelize.models

Videogame.belongsToMany(Genre, {through: 'genreGame'})
Genre.belongsToMany(Videogame, {through: 'genreGame'})

module.exports = {
    ...sequelize.models,
    sequelize
}