var accountSchema = require("./../Models/accountSchema");
var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "username"
    },
    function(username, password, done) {
      accountSchema.User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        if (!user.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});
passport.deserializeUser(function(id, cb) {
  accountSchema.User.findById(id, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});
