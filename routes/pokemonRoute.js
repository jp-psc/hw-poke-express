const express = require('express');  
const router = express.Router();

const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.index);

router.get('/new')

router.get('/:index', pokemonController.show)
      



module.exports = router;