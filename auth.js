const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '306072297481-696n81it3m3ds0uo4l93r932u68o55j4.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser ( function(user, done) {
    done(null, user);
});

passport.deserializeUser ( function(user, done) {
    done(null, user);
});