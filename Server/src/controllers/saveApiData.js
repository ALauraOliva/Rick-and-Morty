const axios = require('axios');
const {Character} = require('../models/Character')

const getApiData = async() => {
    try {
        let i = 1;
        let characters = [];

        while(i < 6){
            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)

            characters.push(apiData)
            i++;
        }
        characters =(await Promise.all(characters)).map(resp => resp.data.results.map(char =>{
            return({
                id:char.id,
                name:char.name,
                status:char.status,
                species:char.species,
                gender:char.gender,
                origin:char.origin.name,
                image:char.image
            })
        }))
        let allCharacters = [];
        characters.map(char =>{allCharacters.concat(char)})   
    } catch (error) {
        return {error:error.message}
    }
}

const saveApiData = async() => {
    try {
        const allCharacters = await getApiData(); //array de objetos
        const createCharacters = await Character.bulkCreate(allCharacters)
        //bulkcreate nos permite pasar una rray de objetos y los creaaa cada uno en la DB
    } catch (error) {
        return{error:error.message}
    }
}

module.exports={
    saveApiData,
    getApiData
}