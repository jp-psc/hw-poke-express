const pokemon = require('../models/pokemon')

function index(req, res) {
    res.render('pokemons/Index', { pokemon })
}

function show(req, res) {
    res.render('pokemons/Show', { pokemon: pokemon[req.params.index]})
}

module.exports = { index, show }