const express = require('express')
const app = express()
const PORT = 3000

const { createEngine } = require('jsx-view-engine')

const pokemon = require('./models/pokemon')

app.engine('jsx', createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send('Index.jsx')
})

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})