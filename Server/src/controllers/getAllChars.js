const {Character} = require('../models/Character')
const sequelize= require('../DB_connection');

const getAllChars = async() =>{

    try {

        const allCharacters = await sequelize.Character.findAll();
        
        return allCharacters;

    } catch (error) {

        return {error:error.message}

    }
}

module.exports = getAllChars;