var accountSchema = require("./../Models/accountSchema");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {

  passport.serializeUser(function (user, cb) {
    cb(null, user._id);
  });
  passport.deserializeUser(function (id, cb) {
    accountSchema.User.findById(id, function (err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });


  passport.use(
    new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
      },
      function (username, password, done) {
        accountSchema.User.findOne({
          username: username
        }, function (err, user) {
          if (err) return done(err);
          if (!user) {
            return done(null, false, {
              message: 'Unknown user'
            });
          }
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: 'Invalid password'
            });
          }
          return done(null, user);
        });
      }
    )
  );

}