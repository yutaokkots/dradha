const express = require('express');
const router = express.Router();
const intentsCtrl = require('../../controllers/intents')
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/intents/all
router.get('/all', ensureLoggedIn, intentsCtrl.getAll)

// POST /api/intents/new
// .create() -> for saving a session to the db
router.post('/new', ensureLoggedIn, intentsCtrl.create)
// 'api/intents/new'

// DELETE /api/intents/:id
router.delete('/:id', ensureLoggedIn, intentsCtrl.deleteOne)

// PUT  /api/intents/:id
router.put('/:id', ensureLoggedIn, intentsCtrl.completeOne)

module.exports = router;