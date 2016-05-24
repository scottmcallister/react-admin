var passport = require('passport');
var InstagramStrategy = require('passport-instagram');

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use(new InstagramStrategy({
    scope: ['comments', 'relationships', 'public_content'],
    clientID: config.instagram.clientID,
    clientSecret: config.instagram.clientSecret,
    callbackURL: config.instagram.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    
    console.log(token);

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id,
      token: token
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
