const Favorite = require('../models/Favorite')
const sequelize= require('../DB_connection');

const deleteFavoriteById = async(id) => {
    try {
        const favoriteFound = await sequelize.Favorite.findByPk(id);

        if(!favoriteFound) throw new Error('No existe el favorito')

        favoriteFound.destroy();

        return 'Favorito eliminado completamente'
    } catch (error) {
        return error.message;
    }
}

module.exports = deleteFavoriteById;