require('dotenv').config();
const { Sequelize } = require('sequelize');
const { REACT_APP_DB_USER, REACT_APP_DB_PASSWORD, REACT_APP_DB_HOST, REACT_APP_DB_NAME } = process.env;
const characterModel = require('./models/Character')
const favoriteModel  = require('./models/Favorite')

const sequelize = new Sequelize(`postgres://${REACT_APP_DB_USER}:${REACT_APP_DB_PASSWORD}@${REACT_APP_DB_HOST}/${REACT_APP_DB_NAME}`,
{ logging: false, native: false }
);

characterModel(sequelize);
favoriteModel(sequelize)

module.exports = {
   // User,
   // Favorite,
   ...sequelize.models,
   sequelize,
};