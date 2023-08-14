const { Favorite } = require('../DB_connection')

const getAllFavorites = async () => {
    try {
        const allFavorites = await Favorite.findAll();

        return allFavorites;
        
    } catch (error) {
        return {error:"Could not find your favorites characters"}
    }
}


module.exports = {
    getAllFavorites
}