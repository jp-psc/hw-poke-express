
require('dotenv').config()


// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 3000


// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()


// Loading data
const pokemon = require('./models/pokemon')

const pokemonRoute = require('./routes/pokemonRoute')


// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// middleware 
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})



app.use('/pokemon', pokemonRoute)





app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})