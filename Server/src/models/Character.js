const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    name:{
        type: DataTypes.STRING,
        allowNull:false
    },

    status:{
        type: DataTypes.STRING, //DataTypes.ENUM('Alive', 'Dead', 'unknown'),
        allowNull:false
    },

    species:{
        type: DataTypes.STRING,
        allowNull:false
    },

    gender:{
        type: DataTypes.STRING,//DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
        allowNull:false
    },

    origin:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }

   });
};