const { Favorite } = require('../DB_connection')

const deleteFavoriteById = async(id) => {
    try {
        const favoriteFound = await Favorite.findByPk(id);

        if(!favoriteFound) throw new Error('No existe el favorito')

        await favoriteFound.destroy();
        
        let resultAll = await Favorite.findAll();
        return resultAll;

    } catch (error) {
        return error.message;
    }
}

module.exports = deleteFavoriteById;