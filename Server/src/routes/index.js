const router = require('express').Router();
const getAllChars = require('../controllers/getAllChars') 
const deleteFavoriteById = require('../controllers/deleteFavoriteById')
const { login } = require('../controllers/login')
const { getCharById } = require('../controllers/getCharById')
const { getAllFavorites } = require('../controllers/getAllFavorites')
const { postFav } = require('../controllers/postFav');
const { getApiData } = require('../controllers/getApiData');

router.post('/logIn', async(req, res) =>{
    try {
        const access = login(req, res)
        if(access.error) throw Error(access.error)
        return res.status(200).json(access)

    } catch (error) {
        return res.status(401).send(error.message)
    }
})

router.get('/allCharacters', async(_req,res) => {
    try {
        const allCharacters = await getApiData();
        if(allCharacters.error) throw Error(allCharacters.error)
        return res.status(200).json(allCharacters)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.get('/fav', async (_req, res) =>{
    console.log('entre a route index');
    try {
        const allFavorites = await getAllFavorites();
        if(allFavorites.error) throw new Error(allFavorites.error)
        res.status(200).json(allFavorites)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.post('/fav', async(req, res) => {
    try {
        const newFav = await postFav(req, res);
        if(newFav.error) throw Error(newFav.error)
        return res.status(200).json(newFav)
    
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.delete('/fav/:id', async (req,res) =>{
    try {
        const {id} = req.params;    
        const deleteFavorite = await deleteFavoriteById(parseInt(id));

        if(deleteFavorite.error) throw new Error(deleteFavorite.error)
        return res.status(200).json(deleteFavorite)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.get('/character/:id', async (req,res) =>{
    try {
        const char = await getCharById(req, res)
        if(char.error) throw Error(char.error)
        return res.status(200).json(char)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router;