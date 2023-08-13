const { Favorite } = require('../DB_connection')

const postFav = async(req, _res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;

        if(!id || !name || !status || !species || !gender || !origin || !image) throw new Error('Faltan datos obligatorios')

        const newFav = await Favorite.create({ 
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
        });
        
        return newFav;

    } catch (error) {
        return {error : error.message}
    } 
}

module.exports = {
    postFav
};