const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/quotes')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET quotes
router.get('/random', ensureLoggedIn, quotesCtrl.getRand)

module.exports = router;