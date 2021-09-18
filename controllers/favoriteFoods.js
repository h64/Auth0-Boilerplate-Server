const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const user = await db.User.findOne({ auth0Id: req.user.sub })
        res.json(user.favoriteFoods)
    } catch(err) {
        console.log(err)
        res.json({ msg: 'Something went wrong!'})
    }
    // Todo: Get all the foods
})

router.post('/', async (req, res) => {
    console.log(req.body)
    // console.log(req.user) // this is where the entire decoded jwt is
    console.log(req.user.sub) // this is the auth0 id
    try {
        const user = await db.User.findOneAndUpdate(
            { auth0Id: req.user.sub },
            { $push: { favoriteFoods: req.body.food }}
        )    
        res.json({ msg: 'Food created!' })
    } catch(err) {
        console.log(err)
        res.json({ msg: 'Something went wrong!'})
    }
})

module.exports = router