require('dotenv').config();
const { Sequelize } = require('sequelize');
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, DATABASE_URL } = process.env;
const Character = require('./models/Character')
const Favorite = require('./models/Favorite')

// const sequelize = new Sequelize( `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`,
// { logging: false, native: false }
// );

const sequelize = new Sequelize( DATABASE_URL,
{ logging: false, native: false }
);

Character(sequelize)
Favorite(sequelize)

module.exports = {
   ...sequelize.models,
   sequelize,
};