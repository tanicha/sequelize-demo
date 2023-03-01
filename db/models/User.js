//import database instance (lives in index.js)
const sequelize = require('../index')
//import DataTypes from sequelize (comes form dependency)
const { DataTypes } = require('sequelize')

//define our model -> will get translated into table
const User = sequelize.define('User', {
    //columns
    name: DataTypes.STRING,
    email: DataTypes.STRING
})

//export this model
module.exports = User;