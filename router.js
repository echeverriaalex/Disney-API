const express = require('express');
const router = express.Router();

const characterController = require('./controllers/CharactersController');

router.get('/characters', characterController.getCharacters);

module.exports = router;