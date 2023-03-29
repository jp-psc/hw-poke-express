const Pokemon = require('../models/pokemon')

module.exports.index = async (req, res) => {

    try {
        // const pokemon = await Pokemon.find() 
        console.log('inside Index controller')
        console.log(Pokemon)
        res.render('Index', { Pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        // Pokemon = Pokemon(req.params.id)
        console.log("params", req.params.id)
        
        res.render('Show', {pokemon: Pokemon[req.params.id] })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.create = async (req, res) => {
    try {
        req.body.img = "http://img.pokemondb.net/artwork/"+req.body.name.toLowerCase()+".jpg"
        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}

module.exports.new = (req, res) => {
    res.render('New')
}