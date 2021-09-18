var jwt = require('express-jwt');
var jwks = require('jwks-rsa');


// Todo refactor:
// https://github.com/steelvoltage/vue-express-auth0/blob/master/auth/auth0config.js
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-5l0x66ym.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:8000',
  issuer: 'https://dev-5l0x66ym.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = jwtCheck