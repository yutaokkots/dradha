const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST for creating new users ->  /api/users
router.post('/', usersCtrl.create);

// login validation
// POST for logging on existing users ->/api/users/login
router.post('/login', usersCtrl.validate);


module.exports = router;