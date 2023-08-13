const { Favorite } = require('../DB_connection')

const getAllFavorites = async () => {
    try {
        const allFavorites = await Favorite.findAll();

        return allFavorites;
        
    } catch (error) {
        return {error:"No se pudo recuperar tus favoritos"}
    }
}


module.exports = {
    getAllFavorites
}