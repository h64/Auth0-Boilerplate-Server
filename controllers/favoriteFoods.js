const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ msg: "Here's all your favorite foods! "})
    // Todo: Get all the foods
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json({ msg: 'Food created!' })
    // Todo implement food
})

module.exports = router