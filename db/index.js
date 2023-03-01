//import sequelize dependency
const { Sequelize } = require('sequelize')

//create a sequelize instance
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: 'awesomedatabase.sqlite'
})

//the new Sequelize constructor creates a connection pool for connecting to our database and the options passed into the constructor specifies the type of data base that is being used (sqlite)

//export our instance
module.exports = sequelize;