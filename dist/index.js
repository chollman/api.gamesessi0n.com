'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Strategy = _passportFacebook2.default.Strategy;

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
_passport2.default.use(new Strategy({
  clientID: process.env.FACEBOOK_ID_SPLATOON,
  clientSecret: process.env.FACEBOOK_SECRET_SPLATOON,
  callbackURL: 'http://localhost:3000/login/facebook/return'
}, function (accessToken, refreshToken, profile, cb) {
  // In this example, the user's Facebook profile is supplied as the user
  // record.  In a production-quality application, the Facebook profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
_passport2.default.serializeUser(function (user, cb) {
  cb(null, user);
});

_passport2.default.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app

// middleware
// parse application/json
);app.use(_bodyParser2.default.json({
  limit: _config2.default.bodyLimit
})

// Initialize Passport and restore authentication state, if any, from the
// session.
);app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.use('/v1', _routes2.default);

app.server.listen(_config2.default.port);
console.log('Server started on port ' + app.server.address().port + ' ');
//# sourceMappingURL=index.js.map