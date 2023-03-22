const pokemon = require('../models/pokemon')

function index(req, res) {
    res.render('pokemon/Index', { pokemon })
}

function show(req, res) {
    res.render('pokemon/Show', { pokemon: pokemon[req.params.index]})
}

module.exports = { index, show }