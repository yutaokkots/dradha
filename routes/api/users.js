const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', ensureLoggedIn, usersCtrl.login);

module.exports = router;


