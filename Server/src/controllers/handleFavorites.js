let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    const characterFound = myFavorites.find((fav)=> fav.id ===character.id);

    if(!characterFound) {
        myFavorites.push(character);
        return (myFavorites)
    }

    return {error: 'Ya existe ese personaje en favoritos'};
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite) => 
    favorite.id !== +id)

    return (myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}