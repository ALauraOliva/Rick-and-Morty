const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";
const { Character } = require('../DB_connection')

const getApiData = async() => {
    try {
        let i          = 1;
        let characters = [];

        while(i < 22){
            let apiData = await axios.get(`${URL}/${i}`)

            characters.push(apiData.data)
            i++;
        }
        await saveApiData(characters);

        return characters;

    } catch (error) {
        return { error : error.message }
    }
}

const saveApiData = async(characters) => {
    try {
        const charactersTmp = characters.map(char =>
            ({
                id      : char.id,
                name    : char.name,
                status  : char.status,
                species : char.species,
                gender  : char.gender,
                origin  : char.origin.name,
                image   : char.image
            })
        )

        await Character.bulkCreate(charactersTmp)

        return;

    } catch (error) {
        return{ error : error.message }
    }
}

module.exports={
    getApiData,
}