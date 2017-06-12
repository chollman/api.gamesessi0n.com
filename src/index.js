import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import passportFacebook from 'passport-facebook'

import config from './config'
import routes from './routes'

let Strategy = passportFacebook.Strategy

console.log(process.env.FACEBOOK_ID_SPLATOON)

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    clientID: 'process.env.FACEBOOK_ID_SPLATOON',
    clientSecret: 'process.env.FACEBOOK_SECRET_SPLATOON',
    callbackURL: 'http://localhost:3000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile)
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
passport.serializeUser(function(user, cb) {
  cb(null, user)
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
});


let app = express()
app.server = http.createServer(app)

// middleware
// parse application/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}))

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize())
app.use(passport.session())

app.use('/v1', routes)

app.server.listen(config.port)
console.log(`Server started on port ${app.server.address().port} `)
