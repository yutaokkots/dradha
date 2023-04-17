const express = require('express');
const path = require('path');
const logger = require('morgan');

console.log('way before route on server.js')

require('dotenv').config();
require('./config/database')

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));

// Put all API routes here (before the catch-all)
console.log('before route on server.js')
app.use('/api/intents', require('./routes/api/intents'))

console.log('after route on server.js')
app.use('/api/users', require('./routes/api/users'));

// 'api/intents/new'

// catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });


const port = process.env.PORT || 3000;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});