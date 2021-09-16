// Required Modules
require('dotenv').config()
require('./models') // Connect to MongoDB
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')

// App Variables
const app = express()
const PORT = process.env.PORT || 8000
const rowdyResults = rowdy.begin(app)

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Controllers
app.use('/favoriteFoods', require('./controllers/favoriteFoods'))

// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'Hello world!' })
})

// Start the server
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`🌊 Server listening on port ${PORT}`)
})