const express = require('express');
const router = express.Router();
const intentsCtrl = require('../../controllers/intents')
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/intents/
router.get('/all', intentsCtrl.getAll)

// POST /api/users/profile/session
// .create() -> for saving a session to the db
router.post('/new', intentsCtrl.create)
// 'api/intents/new'

module.exports = router;