const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    auth0Id: String,
    favoriteFoods: []
})

const User = mongoose.model('User', userSchema)

module.exports = User