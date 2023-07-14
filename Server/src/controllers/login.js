// const user = require('../utils/users')

const login = (req, res) => {
    const {email, password} = req.query;

    const userFound = true;//user.find((user)=> "andrea_carol00@hotmail.com" ===email && "laulauh231" === password )

    userFound
    ? res.status(200).json({access : true}) 
    : res.status(404).json({access : false}) 
}

module.exports = {
    login
}