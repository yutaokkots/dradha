const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/quotes')

//GET quotes
router.get('/random', quotesCtrl.getRand)

module.exports = router;