const { Favorite } = require('../DB_connection')
const sequelize= require('../DB_connection');

const postFav = async(req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;
        console.log('emtre');
        if(!id || !name || !status || !species || !gender || !origin || !image) throw new Error('Faltan datos obligatorios')

        const newFav = await Favorite.create({ 
            id      : id, 
            name    : name, 
            status  : status, 
            species : species, 
            gender  : gender, 
            origin  : origin, 
            image   : image, 
        });

        return newFav;

    } catch (error) {
        return {error:error.message}
    }
}

module.exports = {
    postFav
};