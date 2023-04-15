const jwt = require('jsonwebtoken');

// this function validates the token in the request query
// by verifying the env.SECRET, and decoding the encoded token information

module.exports = function (req, res, next) {
    let token = req.get('Authorization') || req.query.token
    if (token) {
        token = token.replace('Bearer', '')
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next
    } else {
        req.user = null;
        return next();
    }
}