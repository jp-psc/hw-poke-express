const Pokemon = require('../models/pokemon')
const PokemonDB = require('../models/pokemonModel')

module.exports.index = async (req, res) => {

    try {
        const Pokemon = await PokemonDB.find() 
        console.log('inside Index controller')
        res.render('Index', { Pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


module.exports.show = async (req, res) => {
    try {
      const pokemon = await PokemonDB.findById(req.params.id);
      res.render("Show", { pokemon });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

module.exports.seed = async (req, res) => {
    try {
      await PokemonDB.deleteMany({}); // Keep empty to delete everything
      PokemonDB.create(Pokemon);
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

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