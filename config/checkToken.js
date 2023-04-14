const jwt = require('jsonwebtoken');

// https://www.npmjs.com/package/jsonwebtoken
// jwt.verify() is a function of jsonwebtoken
//  -> verifies the token for the signature check
//  -> and if the token is valid, will decode the token's payload

// the following:
// gets the token from the 'Authorization'
// if the toekn exists, replace the token Bearer with blank
//

module.exports = function(req, res, next) {
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      req.user = err ? null : decoded.user;  
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    req.user = null;
    return next();
  }
};