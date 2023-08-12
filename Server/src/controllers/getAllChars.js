const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character";

const getAllChars = async() =>{
    try {
        let i             = 1;
        let allCharacters = [];

        while(i <= 20){
            let { data } = await axios.get(`${URL}/${i}`)
            allCharacters.push(data);
            i++;
        }
        return allCharacters;

    } catch (error) {

        return {error:"No se pudo recuperar los 20 primeros characteres"}

    }
}

module.exports = getAllChars;