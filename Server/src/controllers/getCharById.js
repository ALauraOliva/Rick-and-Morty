const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, _res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw new Error(`ID ${id} NOT FOUND`);

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return character;
  } catch (error) {
    if (error.message.includes("NOT FOUND")) {
      return { error: error.message };
    }

    return { error: "An error occurred, character not found" };
  }
};

module.exports = {
  getCharById,
};
