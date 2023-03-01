//1. import sequelize instance
const sequelize = require('../index') //importing our db connection
//2. import user model
const User = require('../models/User') //importing our model
//3. import seed data
const users = require('../seeders/seed-data.json') //importing our seed data

//define a function that will help us seed info into our table
//async await -  allows this function behave asychronously
async function seedUsers() {
    //sync our database - clear out all tables - everytime we restart our app, we wont create duplicates of seed info
    await sequelize.sync({ force:true })
    
    //add our users to our User model
    //bulkCreate() allows you to insert multiple records at a time (ex. seed records)
    await User.bulkCreate(users)

    console.log('database seeded successfully!')
}

//invoke that function
seedUsers();