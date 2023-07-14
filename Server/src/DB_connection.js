require('dotenv').config();
const { Sequelize } = require('sequelize');
const { REACT_APP_DB_USER, REACT_APP_DB_PASSWORD, REACT_APP_DB_HOST, REACT_APP_DB_NAME } = process.env;
const characterModel = require('./models/Character')
const favoriteModel = require('./models/Favorite')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${REACT_APP_DB_USER}:${REACT_APP_DB_PASSWORD}@${REACT_APP_DB_HOST}/${REACT_APP_DB_NAME}`,
// const sequelize = new Sequelize(`postgres://postgres:laulauh231@localhost:5432/rickandmorty`,
{ logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//

//
characterModel(sequelize);
favoriteModel(sequelize)

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;


module.exports = {
   // User,
   // Favorite,
   ...sequelize.models,
   sequelize,
};