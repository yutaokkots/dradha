const express = require('express');
const path = require('path');
const logger = require('morgan');


require('dotenv').config();
require('./config/database')

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));

// Put all API routes here (before the catch-all)
app.use('/api/intents', require('./routes/api/intents'))

app.use('/api/quotes', require('./routes/api/quotes'))

app.use('/api/users', require('./routes/api/users'));


// catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });


const port = process.env.PORT || 3000;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});