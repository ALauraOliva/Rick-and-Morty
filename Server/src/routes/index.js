const {login} = require('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const getAllChars = require('../controllers/getAllChars') 
// const postFav = require('../controllers/postFav')
const router = require('express').Router();
const getAllFavorites = require('../controllers/getAllFavorites')
const deleteFavoriteById = require('../controllers/deleteFavoriteById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')


router.get('/character/:id', (req,res) =>{
    getCharById(req, res)
})

router.post('/fav', (req,res) =>{
    postFav(req,res)
})

router.delete('/fav/:id', (req,res) =>{
    deleteFav(req,res)
})

router.post('/logIn', (req,res) =>{
    console.log('llegue hasta aqui');
    login(req, res)
})
router.get('/allCharacters', async(req,res) => {
    try {
        
        const allCharacters = await getAllChars();

        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(404).send('ddd')
    }
})

// router.get('/fav', async (req,res) =>{
//     try {
//         const allFavorites = await getAllFavorites();

//         if(allFavorites.error) throw new Error(allFavorites.error)

//         res.status(200).json(allFavorites)

//     } catch (error) {
//         return res.status(404).send(error.message)
//     }
// })


router.post('/fav', async (req,res) =>{
    try {
        const characterFav = await postFav(req.body)

        if(characterFav.error) throw new Error(characterFav.error)
        res.status(200).json(characterFav)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.delete('/fav/:id', async (req,res) =>{
    try {
        const {id} = req.params;    
        const deleteFavorite = await deleteFavoriteById(parseInt(id));

        if(deleteFavorite.error) throw new Error(deleteFavorite.error)

        res.status(200).json(deleteFavorite)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;