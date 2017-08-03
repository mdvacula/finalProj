
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');


const client_id = 'CLIENT_ID'
const client_secret = 'CLIENT_SECRET'

passport.use(new SpotifyStrategy({
  clientID: client_id,
  clientSecret: client_secret,
  callbackURL: "http://localhost:3001/callback"
  },

  function(accessToken, refreshToken, profile, done) {
        if(profile) {
          User.find({ id: profile.id}, function(error, user){
            if(error){
              console.log(error);
            }
            else{
              if(!user) {
                let createUser = {
                  id: profile.id,
                  email: profile.email,
                  displayName: prifle.display_name,
                };

                  let newUser = new User(createUser);
                  newUser.save(function(err, doc){
                    if (err) {
                      console.log(err);
                    }
                    console.log('New user based on Spotify is ${util.inspect(newUser)}');
                    return done(null, newUser)
                  });
                }

              return done(null, user);
            }
          });
        }
      }
  ));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

module.exports = passport;
