const { Favorite } = require("../DB_connection");

const deleteFavoriteById = async (id) => {
  try {
    const favoriteFound = await Favorite.findByPk(id);

    if (!favoriteFound) throw new Error("Favorite does not exist");

    await favoriteFound.destroy();

    let resultAll = await Favorite.findAll();
    return resultAll;
  } catch (error) {
    if (error.message.includes("not exist")) {
      return { error: error.message };
    }
    return { error: "An error occurred while fetching the character data" };
  }
};

module.exports = deleteFavoriteById;
