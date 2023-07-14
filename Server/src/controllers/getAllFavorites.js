const Favorite = require('../models/Favorite')
const sequelize= require('../DB_connection');


const getAllFavorites = async () => {
    try {
        const allFavorites = await sequelize.Favorite.findAll();

        if(!allFavorites) throw new Error('No hay favoritos')

        return allFavorites;
        
    } catch (error) {
        return error.message; 
    }
}


module.exports = {
    getAllFavorites
}